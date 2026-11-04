'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const {
    gregorianToJDN,
    julianToJDN,
    jdnToGregorian,
    isGregorianLeap,
    isJulianLeap,
    isRepublicanSextileRomme,
    toRoman,
    formatAn,
    calculateEquinoxDateUsingJDN,
    calculateRommeDateUsingJDN,
    getEquinoxRange,
    isSkippedGregorianReformDate
} = require('../calendar-math.js');

// La table d'équinoxes et les règles de calcul doivent rester accessibles sans DOM.
test('API de calcul disponible dans Node sans document ni window', () => {
    assert.equal(typeof gregorianToJDN, 'function');
    assert.equal(typeof julianToJDN, 'function');
    assert.equal(typeof jdnToGregorian, 'function');
    assert.equal(typeof calculateEquinoxDateUsingJDN, 'function');
    assert.equal(typeof calculateRommeDateUsingJDN, 'function');
    assert.equal(typeof getEquinoxRange, 'function');
});

test('conversion grégorienne : jours consécutifs et année bissextile', () => {
    assert.equal(gregorianToJDN(2, 1, 2000) - gregorianToJDN(1, 1, 2000), 1);
    assert.equal(gregorianToJDN(1, 3, 2000) - gregorianToJDN(28, 2, 2000), 2);
    assert.equal(gregorianToJDN(1, 3, 1900) - gregorianToJDN(28, 2, 1900), 1);
    assert.equal(gregorianToJDN(1, 1, 1) - gregorianToJDN(1, 1, 0), 366);
});

test('conversion JDN vers grégorien : valeurs de référence standard', () => {
    assert.deepEqual(jdnToGregorian(2451545), { day: 1, month: 1, year: 2000 });
    assert.deepEqual(jdnToGregorian(2299161), { day: 15, month: 10, year: 1582 });
});

// Régression préexistante #28 : gregorianToJDN et julianToJDN sont décalées
// d'un jour par rapport à jdnToGregorian. Ne pas réparer l'algorithme dans #14.
test('aller-retour grégorien → JDN → grégorien (#28 : à corriger)', {
    todo: 'Le JDN retourné actuellement est inférieur d’un jour à la convention standard.'
}, () => {
    const expected = { day: 22, month: 9, year: 1792 };
    assert.deepEqual(
        jdnToGregorian(gregorianToJDN(expected.day, expected.month, expected.year)),
        expected
    );
});

test('conversion julienne : continuité du passage au 15 octobre 1582', () => {
    // Le 4 octobre 1582 julien est suivi du 15 octobre 1582 grégorien.
    // Le décalage commun de #28 s'annule dans la différence.
    assert.equal(gregorianToJDN(15, 10, 1582) - julianToJDN(4, 10, 1582), 1);
    assert.equal(julianToJDN(1, 3, 1500) - julianToJDN(29, 2, 1500), 1);
});

test('dates supprimées par la réforme grégorienne de 1582', () => {
    for (let day = 5; day <= 14; day++) {
        assert.equal(isSkippedGregorianReformDate(day, 10, 1582), true);
    }
    for (const day of [1, 4, 15, 31]) {
        assert.equal(isSkippedGregorianReformDate(day, 10, 1582), false);
    }
    assert.equal(isSkippedGregorianReformDate(10, 9, 1582), false);
    assert.equal(isSkippedGregorianReformDate(10, 10, 1581), false);
});

test('années bissextiles grégoriennes, juliennes et sextiles de Romme', () => {
    assert.equal(isGregorianLeap(2000), true);
    assert.equal(isGregorianLeap(1900), false);
    assert.equal(isGregorianLeap(2024), true);
    assert.equal(isGregorianLeap(2023), false);
    assert.equal(isGregorianLeap(0), true);
    assert.equal(isJulianLeap(1900), true);
    assert.equal(isJulianLeap(1901), false);
    assert.equal(isJulianLeap(0), true);
    assert.equal(isRepublicanSextileRomme(4), true);
    assert.equal(isRepublicanSextileRomme(5), false);
    assert.equal(isRepublicanSextileRomme(100), false);
    assert.equal(isRepublicanSextileRomme(400), true);
    assert.equal(isRepublicanSextileRomme(0), false);
});

test('numérotation des années et présentation proleptique', () => {
    assert.equal(toRoman(4), 'IV');
    assert.equal(formatAn(1), 'An I (1)');
    assert.equal(formatAn(-1), 'An -1 (proleptique)');
});

test('22 septembre 1792 : premier jour de Vendémiaire An I (équinoxe)', () => {
    const result = calculateEquinoxDateUsingJDN(gregorianToJDN(22, 9, 1792));
    assert.equal(result.error, undefined);
    assert.equal(result.datePrefix, 'Primidi 1 Vendémiaire');
    assert.equal(result.currentAn, 1);
    assert.equal(result.day, 1);
    assert.equal(result.month, 'Vendémiaire');
    assert.equal(result.isComplementary, false);
});

test('données de fête injectées sans dépendance au DOM ou au réseau', () => {
    const dailyItems = Array.from({ length: 12 }, () => Array(30));
    dailyItems[0][0] = {
        name: 'Fête test', latin: 'Testus', author: 'Auteur',
        urlEncy: 'https://example.org/encyclopedie',
        urlImage: 'https://example.org/image.png',
        urlWiki: 'https://example.org/wiki',
        description: 'Description test'
    };
    const result = calculateEquinoxDateUsingJDN(
        gregorianToJDN(22, 9, 1792),
        dailyItems,
        []
    );
    assert.equal(result.fete, 'Fête test');
    assert.equal(result.description, 'Description test');
    assert.equal(result.urlImage, 'https://example.org/image.png');
});

test('bornes de la table équinoxiale : erreur explicite avant et après la plage', () => {
    const { minEquinoxDataYear, maxEquinoxDataYear, equinoxJDNs } = getEquinoxRange();
    assert.equal(minEquinoxDataYear, -599);
    assert.equal(maxEquinoxDataYear, 2199);

    const before = calculateEquinoxDateUsingJDN(equinoxJDNs[minEquinoxDataYear] - 1);
    const after = calculateEquinoxDateUsingJDN(equinoxJDNs[maxEquinoxDataYear + 1]);
    assert.equal(before.missingData, true);
    assert.match(before.error, /avant/);
    assert.equal(after.missingData, true);
    assert.match(after.error, /hors plage/);
});

test('équinoxe : cinq jours complémentaires dans un an commun', () => {
    const { equinoxJDNs } = getEquinoxRange();
    const day = calculateEquinoxDateUsingJDN(equinoxJDNs[1792] + 364);
    assert.equal(day.currentAn, 1);
    assert.equal(day.isComplementary, true);
    assert.equal(day.day, 5);
    assert.equal(day.datePrefix, 'Jour des Récompenses');

    const next = calculateEquinoxDateUsingJDN(equinoxJDNs[1792] + 365);
    assert.equal(next.currentAn, 2);
    assert.equal(next.isComplementary, false);
    assert.equal(next.day, 1);
});

test('équinoxe : six jours complémentaires dans un an sextile', () => {
    const { equinoxJDNs } = getEquinoxRange();
    const day = calculateEquinoxDateUsingJDN(equinoxJDNs[1794] + 365);
    assert.equal(day.currentAn, 3);
    assert.equal(day.isComplementary, true);
    assert.equal(day.day, 6);
    assert.equal(day.datePrefix, 'Jour de la Révolution');

    const next = calculateEquinoxDateUsingJDN(equinoxJDNs[1795]);
    assert.equal(next.currentAn, 4);
    assert.equal(next.day, 1);
    assert.equal(next.isComplementary, false);
});

test('Romme : époque, cinq jours communs et six jours en An IV', () => {
    const epoch = 2375840;
    assert.equal(calculateRommeDateUsingJDN(epoch).date, '1 Vendémiaire An I');
    assert.equal(
        calculateRommeDateUsingJDN(epoch + 364).date,
        'Jour des Récompenses An I'
    );
    assert.equal(calculateRommeDateUsingJDN(epoch + 365).date, '1 Vendémiaire An II');
    const startAnIV = epoch + 3 * 365;
    assert.equal(
        calculateRommeDateUsingJDN(startAnIV + 365).date,
        'Jour de la Révolution An IV'
    );
    assert.equal(calculateRommeDateUsingJDN(epoch - 1).date, 'N/A (avant An I)');
});

test('page : scripts classiques dans le bon ordre pour file://', () => {
    const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
    const mathTag = '<script src="calendar-math.js"></script>';
    const uiTag = '<script src="script.js"></script>';
    assert.ok(html.includes(mathTag));
    assert.ok(html.includes(uiTag));
    assert.ok(html.indexOf(mathTag) < html.indexOf(uiTag));
    assert.doesNotMatch(html, /<script[^>]+type=["']module["']/);
});
