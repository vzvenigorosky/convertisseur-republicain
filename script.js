document.addEventListener('DOMContentLoaded', () => {
    // --- Journalisation de débogage (désactivée en production) ---
    const DEBUG = false;
    const dbg = (...args) => { if (DEBUG) console.log(...args); };

    // --- Element References ---
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const convertButton = document.getElementById('convert-button');
    const dataLoadErrorDisplay = document.getElementById('data-load-error-area');
    const errorDisplay = document.getElementById('error-area');
    const calendarInfoDisplay = document.getElementById('calendar-info');
    const supportedRangeInfo = document.getElementById('supported-range-info');

    // Column 1 Elements
    const republicanDateEquinoxCol1 = document.getElementById('republican-date-equinox');
    const rommeDateInfoCol1 = document.getElementById('romme-date-info');

    // Column 2 Elements
    const detailsColumnTitle = document.getElementById('left-column-title'); // Assuming reuse of this ID for Col 2 Title
    const feteDateDisplay = document.getElementById('fete-date-display'); // <<< H4 for Combined Fête + Date
    // const republicanDateDisplayCol2 = document.getElementById('republican-date-display-col2'); // Removed this element/logic
    const feteLatinDisplay = document.getElementById('fete-latin');
    const feteAuthorDisplay = document.getElementById('fete-author');
    const feteLatinAuthorLine = document.getElementById('fete-latin-author');
    const feteDescriptionDisplay = document.getElementById('fete-description');
    const imageContainer = document.getElementById('image-container');
    const wikiLink = document.getElementById('fete-wiki-link');
    const image = document.getElementById('fete-image');
    const imagePlaceholder = document.getElementById('image-placeholder');
    const commemorationArea = document.getElementById('commemoration-area');
    const commemorationTitle = document.getElementById('commemoration-title');
    const commemorationDesc = document.getElementById('commemoration-description');


    // Column 3 Elements
    const encycloFrame = document.getElementById('encyclopedia-frame');
    const encycloPlaceholder = document.getElementById('encyclopedia-placeholder');

    // --- Global variables for data range ---
    // Calcul calendaire partagé entre navigateur et tests Node (script classique).
    const {
        gregorianToJDN,
        julianToJDN,
        isGregorianLeap,
        isJulianLeap,
        toRoman,
        formatAn,
        calculateEquinoxDateUsingJDN,
        calculateRommeDateUsingJDN,
        getEquinoxRange,
        isSkippedGregorianReformDate
    } = CalendarMath;
    const { minEquinoxDataYear, maxEquinoxDataYear, equinoxJDNs } = getEquinoxRange();
	
    let dailyItems = []; // chargé depuis data.json

    // --- Data for Complementary Days ---
    let complementaryItems = []; // chargé depuis data.json

    // --- Commémorations, indexées par date grégorienne "MM-JJ" (anniversaire) ---
    let commemorations = {}; // chargé depuis data.json



    // Affiche une année astronomique (≤ 0) sous forme « N avant l'ère commune » (an 0 = 1 avant l'ère commune).
    function formatYearLabel(y) {
        return (y <= 0) ? `${1 - y} avant l'ère commune` : `${y}`;
    }

    // --- Mise à jour de l'interface utilisateur avec la plage dynamique ---
    function updateUIRange() {
        if (minEquinoxDataYear !== null && maxEquinoxDataYear !== null && equinoxJDNs[maxEquinoxDataYear + 1]) {
            const lastRepYear = (maxEquinoxDataYear >= 1792) ? (maxEquinoxDataYear - 1791) : (maxEquinoxDataYear - 1792);
            const lastRepYearDisplay = `An ${toRoman(lastRepYear)}`;
             supportedRangeInfo.textContent = `Calcul Équinoxe possible env. de ${formatYearLabel(minEquinoxDataYear)} à Sep ${maxEquinoxDataYear + 1} (fin ${lastRepYearDisplay}). Avant ~1000 : approximatif (±1 jour, incertitude ΔT).`;
             yearInput.max = maxEquinoxDataYear; yearInput.min = minEquinoxDataYear;
             yearInput.title = `Année (min ${formatYearLabel(minEquinoxDataYear)}, max: ${maxEquinoxDataYear}) — négatif = astronomique (0 = 1 avant l'ère commune)`;
        } else { supportedRangeInfo.textContent = "Données équinoxe insuffisantes pour le calcul."; yearInput.removeAttribute('max'); yearInput.title = `Année`; }
    }


    function handleSubmitOnEnter(event) {
        if (event.key !== 'Enter' || event.repeat) {
            return;
        }

        event.preventDefault();
        convertButton.click();
    }

    dayInput.addEventListener('keydown', handleSubmitOnEnter);
    monthInput.addEventListener('keydown', handleSubmitOnEnter);
    yearInput.addEventListener('keydown', handleSubmitOnEnter);

    // --- Event Listener (MODIFIÉ pour nouvelle logique d'affichage) ---
    convertButton.addEventListener('click', () => {
        // --- Récupération ---
        const day = parseInt(dayInput.value, 10);
        const month = parseInt(monthInput.value, 10);
        const year = parseInt(yearInput.value, 10);

        // --- Reset affichages ---
        errorDisplay.textContent = '';
        errorDisplay.style.display = 'none';
        calendarInfoDisplay.textContent = '';
        republicanDateEquinoxCol1.textContent = '---';
        rommeDateInfoCol1.textContent = 'Date selon méthode Romme : ---';

        if (detailsColumnTitle) {
            detailsColumnTitle.textContent = 'Détails du Jour Républicain';
        }

        if (feteDateDisplay) {
            feteDateDisplay.textContent = '---';
        }

        if (feteLatinAuthorLine) {
            feteLatinDisplay.textContent = '';
            feteAuthorDisplay.textContent = '';
            feteLatinAuthorLine.style.display = 'none';
        }

        if (feteDescriptionDisplay) {
            feteDescriptionDisplay.textContent = '---';
        }

        if (commemorationArea) {
            commemorationArea.style.display = 'none';

            if (commemorationTitle) {
                commemorationTitle.textContent = '';
            }

            if (commemorationDesc) {
                commemorationDesc.textContent = '';
            }
        }

        if (imageContainer) {
            wikiLink.style.display = 'none';
            wikiLink.href = '#';
            wikiLink.removeAttribute('target');
            image.style.display = 'none';
            image.src = '';
            image.alt = '';
            imagePlaceholder.style.display = 'block';
        }

        if (encycloFrame) {
            encycloFrame.style.display = 'none';
            encycloFrame.src = 'about:blank';
        }

        if (encycloPlaceholder) {
            encycloPlaceholder.style.display = 'block';
        }

        // --- Validation et Calcul JDN ---
        // L'an 0 (= 1 avant l'ère commune) et les années négatives sont valides (numérotation astronomique).
        if (!day || !month || isNaN(day) || isNaN(month) || isNaN(year)) {
            errorDisplay.textContent = "Date invalide/incomplète.";
            errorDisplay.style.display = 'block';
            return;
        }

        let inputJDN;
        let calendarUsed = 'Gregorian';
        const GREGORIAN_REFORM_YEAR = 1582;
        const GREGORIAN_REFORM_MONTH = 10;
        const GREGORIAN_REFORM_DAY_JULIAN_END = 4;
        const GREGORIAN_REFORM_DAY_GREGORIAN_START = 15;
        const isPreGregorianReform = year < GREGORIAN_REFORM_YEAR || (year === GREGORIAN_REFORM_YEAR && month < GREGORIAN_REFORM_MONTH) || (year === GREGORIAN_REFORM_YEAR && month === GREGORIAN_REFORM_MONTH && day <= GREGORIAN_REFORM_DAY_JULIAN_END);
        const isSkippedDate = isSkippedGregorianReformDate(day, month, year);

        if (isSkippedDate) {
            errorDisplay.textContent = `Date invalide: ${day} Oct 1582 n'existe pas.`;
            errorDisplay.style.display = 'block';
            return;
        }

        try {
            if (isPreGregorianReform) {
                const daysInJulianMonth = [0, 31, isJulianLeap(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

                if (month < 1 || month > 12 || day < 1 || day > daysInJulianMonth[month]) {
                    throw new Error(`Date Julienne invalide.`);
                }

                inputJDN = julianToJDN(day, month, year);
                calendarUsed = 'Julian';
                calendarInfoDisplay.textContent = `Note: Date (${day}/${month}/${year}) traitée comme Julienne.`;
            }
            else {
                const daysInGregorianMonth = [0, 31, isGregorianLeap(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

                if (month < 1 || month > 12 || day < 1 || day > daysInGregorianMonth[month]) {
                    throw new Error(`Date Grégorienne invalide.`);
                }

                inputJDN = gregorianToJDN(day, month, year);
                calendarUsed = 'Gregorian';
                calendarInfoDisplay.textContent = `Note: Date (${day}/${month}/${year}) traitée comme Grégorienne.`;
            }

            dbg(`Using ${calendarUsed} calendar. JDN: ${inputJDN}`);

            // --- Appel Calcul Républicain ---
            const resultEquinox = calculateEquinoxDateUsingJDN(inputJDN, dailyItems, complementaryItems);
            const resultRomme = calculateRommeDateUsingJDN(inputJDN);

            // --- Commémorations : rattachées au JOUR RÉPUBLICAIN (récurrentes chaque an) ---
            if (resultEquinox && !resultEquinox.error) {
                const repKey = resultEquinox.isComplementary
                    ? `Complémentaires-${resultEquinox.day}`
                    : `${resultEquinox.month}-${resultEquinox.day}`;
                const list = commemorations[repKey];
                if (Array.isArray(list) && list.length) {
                    resultEquinox.commemorations = list;
                }
            }

// --- Affichage ---
            if (resultEquinox.error) {
                 // Colonne 1: Afficher l'erreur pour Equinoxe
                 republicanDateEquinoxCol1.textContent = resultEquinox.error;
                 // Colonne 2: Reset Titre
                 if (detailsColumnTitle) {
                     detailsColumnTitle.textContent = 'Détails du Jour Républicain';
                 }

                 if (feteDateDisplay) {
                     feteDateDisplay.textContent = '---';
                 }
                 // (Les autres éléments Col 2 sont déjà reset)
            } else if (resultEquinox.datePrefix !== undefined && resultEquinox.currentAn !== undefined) {
                 // ** COLONNE 1 **
                 // Afficher Date Equinoxe avec An Romain ET An Arabe
                 republicanDateEquinoxCol1.textContent = `${resultEquinox.datePrefix} ${formatAn(resultEquinox.currentAn)}`;

                 // ** COLONNE 2 **
                 if (detailsColumnTitle) {
                     detailsColumnTitle.textContent = `Détails du Jour Républicain`;
                 }

                 // ** NOUVEAU TITRE COMBINÉ: "Jour Mois - Fête" ou "Nom Jour Comp." **
                 let feteDateHeading = "";
                 if (resultEquinox.isComplementary) {
                     // Pour jours comp., affiche juste le nom du jour/fête
                     feteDateHeading = resultEquinox.fete;
                 } else {
                      // Pour jours normaux: "NumJour NomMois – NomFête"
                      feteDateHeading = `${resultEquinox.day} ${resultEquinox.month} – ${resultEquinox.fete}`;
                 }
                 if (feteDateDisplay) {
                     feteDateDisplay.textContent = feteDateHeading;
                     feteDateDisplay.style.display = 'block'; // Assure la visibilité
                 }
                 // ** FIN NOUVEAU TITRE COMBINÉ **


                 // Détails fête (latin, desc)
                 if (feteLatinAuthorLine) { // Vérifie si l'élément conteneur existe
                    if (resultEquinox.latin || resultEquinox.author) {
                         if (feteLatinDisplay) {
                             feteLatinDisplay.textContent = resultEquinox.latin || '';
                         }

                         if (feteAuthorDisplay) {
                             feteAuthorDisplay.textContent = resultEquinox.author || '';
                         }

                         feteLatinAuthorLine.style.display = 'block';
                    } else {
                         feteLatinAuthorLine.style.display = 'none';
                    }
                 }
                 if (feteDescriptionDisplay) {
                     feteDescriptionDisplay.textContent = resultEquinox.description || 'Pas de description.';
                 }

                 // Image / Wiki
                 if (resultEquinox.urlImage && imageContainer) {
                     // Repli vers le placeholder si le lien n'est pas valide (image introuvable)
                     image.onerror = () => {
                         image.onerror = null;
                         image.style.display = 'none';
                         image.src = '';

                         if (wikiLink) {
                             wikiLink.style.display = 'none';
                         }

                         imagePlaceholder.style.display = 'block';
                     };
                     image.src = resultEquinox.urlImage;
                     image.alt = `Illustration pour ${resultEquinox.fete}`;
                     image.style.display = 'block';
                     imagePlaceholder.style.display = 'none';

                     if (resultEquinox.urlWiki && wikiLink) {
                         wikiLink.href = resultEquinox.urlWiki;
                         wikiLink.target = '_blank';
                         wikiLink.style.display = 'inline-block';
                     } else if (wikiLink) {
                         wikiLink.style.display = 'none';
                     }
                 }
                 else if (imageContainer) {
                     imagePlaceholder.style.display = 'block';
                     image.style.display = 'none';

                     if (wikiLink) {
                         wikiLink.style.display = 'none';
                     }
                 }

                 // Commémorations du jour républicain (sous l'image) — une ou plusieurs
                 if (commemorationArea && Array.isArray(resultEquinox.commemorations) && resultEquinox.commemorations.length) {
                     if (commemorationTitle) {
                         commemorationTitle.textContent = '';
                         const tagline = document.createElement('span');
                         tagline.className = 'commemoration-tagline';
                         tagline.textContent = 'Ce jour-là :';
                         commemorationTitle.appendChild(tagline);
                     }

                     if (commemorationDesc) {
                         commemorationDesc.textContent = '';
                         resultEquinox.commemorations.forEach(c => {
                             if (!c || !c.title || !c.description) {
                                 return;
                             }

                             const item = document.createElement('span');
                             item.className = 'commemoration-item';
                             const t = document.createElement('strong');
                             t.className = 'commemoration-event-title';
                             t.textContent = c.title;
                             item.appendChild(t);
                             const dParts = [c.dateG, c.dateR].filter(Boolean);

                             if (dParts.length) {
                                 const dl = document.createElement('span');
                                 dl.className = 'commemoration-date';
                                 dl.textContent = dParts.join(' · ');
                                 item.appendChild(dl);
                             }

                             const dsc = document.createElement('span');
                             dsc.className = 'commemoration-text';
                             dsc.textContent = c.description;
                             item.appendChild(dsc);
                             commemorationDesc.appendChild(item);
                         });
                     }
                     commemorationArea.style.display = 'block';
                 }
                 else {
                     if (commemorationArea) {
                         commemorationArea.style.display = 'none';
                     }
                 }

                 // ** COLONNE 3 ** Encyclopédie
                 if (resultEquinox.urlEncy && encycloFrame) {
                     encycloFrame.src = resultEquinox.urlEncy;
                     encycloFrame.style.display = 'block';
                     if (encycloPlaceholder) {
                         encycloPlaceholder.style.display = 'none';
                     }
                     dbg("Chargement Encyclopédie: ", resultEquinox.urlEncy);
                 } else if (encycloFrame) {
                     // Pas d'URL ou erreur précédente, assure que c'est caché/reset
                     encycloFrame.style.display = 'none';
                     if (encycloPlaceholder) {
                         encycloPlaceholder.style.display = 'block';
                     }

                     encycloFrame.src = 'about:blank';
                 }
            } else {
                 // Cas d'erreur imprévu
                 republicanDateEquinoxCol1.textContent = "Erreur résultat Equinoxe";
                 console.error("Résultat Equinoxe invalide:", resultEquinox);
                 if (feteDateDisplay) {
                     feteDateDisplay.textContent = '---';
                 } // Reset titre col 2 aussi
            }


            // Affichage Romme (toujours en Col 1)
            if (resultRomme.error) {
                rommeDateInfoCol1.textContent = `Date selon méthode Romme : Erreur (${resultRomme.error})`;
            }
            else if (resultRomme.date) {
                rommeDateInfoCol1.textContent = `Date selon méthode Romme : ${resultRomme.date}`;
            }
            else {
                rommeDateInfoCol1.textContent = `Date selon méthode Romme : Erreur inconnue`;
            }
			
        } catch (e) {
            console.error("Erreur:", e);
            errorDisplay.textContent = e.message || "Erreur.";
            errorDisplay.style.display = 'block';
        }
    }); // Fin Event Listener

    // --- Initialisation ---
    updateUIRange();
    // Autorise les années négatives / l'an 0 (numérotation astronomique, jusqu'à 600 avant l'ère commune).
    yearInput.min = minEquinoxDataYear || -599;

    // --- Pré-remplir Date Actuelle ---
    function prefillAndConvertCurrentDate() {
        try {
            const today = new Date();
            const currentDay = today.getDate(); const currentMonth = today.getMonth() + 1; const currentYear = today.getFullYear();
            dbg(`Pré-remplissage avec date dynamique: ${currentDay}/${currentMonth}/${currentYear}`);
            dayInput.value = currentDay; monthInput.value = currentMonth; yearInput.value = currentYear;
            convertButton.click(); // Toujours déclencher
        } catch(e) { console.error("Erreur lors du pré-remplissage:", e); }
    }

    // --- Chargement des données externes (fêtes, illustrations, articles) ---
    // Les illustrations et liens vers l'Encyclopédie vivent désormais dans data.json,
    // et non plus en dur dans le code.
    function loadDailyData() {
        // no-cache : revalide toujours data.json auprès du serveur (304 si inchangé),
        // pour éviter d'afficher une version obsolète en cache après mise à jour.
        return fetch('data.json', { cache: 'no-cache' })
            .then(response => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
            })
            .then(data => {
                dailyItems = Array.isArray(data.dailyItems) ? data.dailyItems : [];
                complementaryItems = Array.isArray(data.complementaryItems) ? data.complementaryItems : [];
                commemorations = (data.commemorations && typeof data.commemorations === 'object') ? data.commemorations : {};
                if (dataLoadErrorDisplay) {
                    dataLoadErrorDisplay.textContent = '';
                    dataLoadErrorDisplay.style.display = 'none';
                }
                dbg(`Données chargées : ${dailyItems.length} mois, ${complementaryItems.length} jours complémentaires, ${Object.keys(commemorations).length} commémorations.`);
            })
            .catch(err => {
                // Le calcul de la date républicaine fonctionne toujours sans data.json ;
                // seuls les détails du jour (illustration, article) seront indisponibles.
                console.error("Impossible de charger data.json :", err);
                if (dataLoadErrorDisplay) {
                    dataLoadErrorDisplay.textContent = "Erreur : impossible de charger les données du calendrier (data.json). Ouvrez la page via un serveur local (par ex. `python3 -m http.server`) si vous utilisez Chromium avec `file://`.";
                    dataLoadErrorDisplay.style.display = 'block';
                }
            })
            .finally(() => {
                prefillAndConvertCurrentDate();
            });
    }
    loadDailyData();

}); // Fin DOMContentLoaded
