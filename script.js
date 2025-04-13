document.addEventListener('DOMContentLoaded', () => {
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const convertButton = document.getElementById('convert-button');
    const resultDisplayEquinox = document.getElementById('republican-date-equinox');
    const feteDisplay = document.getElementById('fete-du-jour');
    const resultDisplayRomme = document.getElementById('romme-date-info');
    const errorDisplay = document.getElementById('error-area');


    // --- Constantes Calendrier Républicain ---
    const republicanMonths = [ /* ... reste identique ... */
        "Vendémiaire", "Brumaire", "Frimaire", "Nivôse", "Pluviôse", "Ventôse",
        "Germinal", "Floréal", "Prairial", "Messidor", "Thermidor", "Fructidor"
    ];
    const decadeDays = [ /* ... reste identique ... */
        "Primidi", "Duodi", "Tridi", "Quartidi", "Quintidi",
        "Sextidi", "Septidi", "Octidi", "Nonidi", "Décadi"
    ];
    const complementaryDaysNames = [ /* Noms génériques, utilisés si description non trouvée */
        "Jour de la Vertu", "Jour du Génie", "Jour du Travail",
        "Jour de l'Opinion", "Jour des Récompenses", "Jour de la Révolution"
    ];

    // --- Données Équinoxe Automne (1792-2199) ---
    const equinoxDates = { /* Copiez ici l'objet equinoxData de la réponse précédente */
        1792: { month: 9, day: 22 }, 1793: { month: 9, day: 22 }, 1794: { month: 9, day: 22 }, 1795: { month: 9, day: 23 },
        1796: { month: 9, day: 22 }, 1797: { month: 9, day: 22 }, 1798: { month: 9, day: 22 }, 1799: { month: 9, day: 23 },
        1800: { month: 9, day: 23 }, 1801: { month: 9, day: 23 }, 1802: { month: 9, day: 23 }, 1803: { month: 9, day: 24 },
        1804: { month: 9, day: 23 }, 1805: { month: 9, day: 23 }, 1806: { month: 9, day: 23 }, 1807: { month: 9, day: 24 },
        1808: { month: 9, day: 23 }, 1809: { month: 9, day: 23 }, 1810: { month: 9, day: 23 }, 1811: { month: 9, day: 23 },
        1812: { month: 9, day: 23 }, 1813: { month: 9, day: 23 }, 1814: { month: 9, day: 23 }, 1815: { month: 9, day: 23 },
        1816: { month: 9, day: 23 }, 1817: { month: 9, day: 23 }, 1818: { month: 9, day: 23 }, 1819: { month: 9, day: 23 },
        1820: { month: 9, day: 23 }, 1821: { month: 9, day: 23 }, 1822: { month: 9, day: 23 }, 1823: { month: 9, day: 23 },
        1824: { month: 9, day: 23 }, 1825: { month: 9, day: 23 }, 1826: { month: 9, day: 23 }, 1827: { month: 9, day: 23 },
        1828: { month: 9, day: 23 }, 1829: { month: 9, day: 23 }, 1830: { month: 9, day: 23 }, 1831: { month: 9, day: 23 },
        1832: { month: 9, day: 23 }, 1833: { month: 9, day: 23 }, 1834: { month: 9, day: 23 }, 1835: { month: 9, day: 23 },
        1836: { month: 9, day: 23 }, 1837: { month: 9, day: 23 }, 1838: { month: 9, day: 23 }, 1839: { month: 9, day: 23 },
        1840: { month: 9, day: 22 }, 1841: { month: 9, day: 23 }, 1842: { month: 9, day: 23 }, 1843: { month: 9, day: 23 },
        1844: { month: 9, day: 22 }, 1845: { month: 9, day: 23 }, 1846: { month: 9, day: 23 }, 1847: { month: 9, day: 23 },
        1848: { month: 9, day: 22 }, 1849: { month: 9, day: 23 }, 1850: { month: 9, day: 23 }, 1851: { month: 9, day: 23 },
        1852: { month: 9, day: 22 }, 1853: { month: 9, day: 23 }, 1854: { month: 9, day: 23 }, 1855: { month: 9, day: 23 },
        1856: { month: 9, day: 22 }, 1857: { month: 9, day: 23 }, 1858: { month: 9, day: 23 }, 1859: { month: 9, day: 23 },
        1860: { month: 9, day: 22 }, 1861: { month: 9, day: 23 }, 1862: { month: 9, day: 23 }, 1863: { month: 9, day: 23 },
        1864: { month: 9, day: 22 }, 1865: { month: 9, day: 23 }, 1866: { month: 9, day: 23 }, 1867: { month: 9, day: 23 },
        1868: { month: 9, day: 22 }, 1869: { month: 9, day: 23 }, 1870: { month: 9, day: 23 }, 1871: { month: 9, day: 23 },
        1872: { month: 9, day: 22 }, 1873: { month: 9, day: 22 }, 1874: { month: 9, day: 23 }, 1875: { month: 9, day: 23 },
        1876: { month: 9, day: 22 }, 1877: { month: 9, day: 22 }, 1878: { month: 9, day: 23 }, 1879: { month: 9, day: 23 },
        1880: { month: 9, day: 22 }, 1881: { month: 9, day: 22 }, 1882: { month: 9, day: 23 }, 1883: { month: 9, day: 23 },
        1884: { month: 9, day: 22 }, 1885: { month: 9, day: 22 }, 1886: { month: 9, day: 23 }, 1887: { month: 9, day: 23 },
        1888: { month: 9, day: 22 }, 1889: { month: 9, day: 22 }, 1890: { month: 9, day: 23 }, 1891: { month: 9, day: 23 },
        1892: { month: 9, day: 22 }, 1893: { month: 9, day: 22 }, 1894: { month: 9, day: 23 }, 1895: { month: 9, day: 23 },
        1896: { month: 9, day: 22 }, 1897: { month: 9, day: 22 }, 1898: { month: 9, day: 23 }, 1899: { month: 9, day: 23 },
        1900: { month: 9, day: 23 }, 1901: { month: 9, day: 23 }, 1902: { month: 9, day: 23 }, 1903: { month: 9, day: 24 },
        1904: { month: 9, day: 23 }, 1905: { month: 9, day: 23 }, 1906: { month: 9, day: 23 }, 1907: { month: 9, day: 24 },
        1908: { month: 9, day: 23 }, 1909: { month: 9, day: 23 }, 1910: { month: 9, day: 23 }, 1911: { month: 9, day: 24 },
        1912: { month: 9, day: 23 }, 1913: { month: 9, day: 23 }, 1914: { month: 9, day: 23 }, 1915: { month: 9, day: 24 },
        1916: { month: 9, day: 23 }, 1917: { month: 9, day: 23 }, 1918: { month: 9, day: 23 }, 1919: { month: 9, day: 24 },
        1920: { month: 9, day: 23 }, 1921: { month: 9, day: 23 }, 1922: { month: 9, day: 23 }, 1923: { month: 9, day: 24 },
        1924: { month: 9, day: 23 }, 1925: { month: 9, day: 23 }, 1926: { month: 9, day: 23 }, 1927: { month: 9, day: 24 },
        1928: { month: 9, day: 23 }, 1929: { month: 9, day: 23 }, 1930: { month: 9, day: 23 }, 1931: { month: 9, day: 24 },
        1932: { month: 9, day: 23 }, 1933: { month: 9, day: 23 }, 1934: { month: 9, day: 23 }, 1935: { month: 9, day: 23 },
        1936: { month: 9, day: 23 }, 1937: { month: 9, day: 23 }, 1938: { month: 9, day: 23 }, 1939: { month: 9, day: 23 },
        1940: { month: 9, day: 23 }, 1941: { month: 9, day: 23 }, 1942: { month: 9, day: 23 }, 1943: { month: 9, day: 23 },
        1944: { month: 9, day: 23 }, 1945: { month: 9, day: 23 }, 1946: { month: 9, day: 23 }, 1947: { month: 9, day: 23 },
        1948: { month: 9, day: 23 }, 1949: { month: 9, day: 23 }, 1950: { month: 9, day: 23 }, 1951: { month: 9, day: 23 },
        1952: { month: 9, day: 23 }, 1953: { month: 9, day: 23 }, 1954: { month: 9, day: 23 }, 1955: { month: 9, day: 23 },
        1956: { month: 9, day: 23 }, 1957: { month: 9, day: 23 }, 1958: { month: 9, day: 23 }, 1959: { month: 9, day: 23 },
        1960: { month: 9, day: 23 }, 1961: { month: 9, day: 23 }, 1962: { month: 9, day: 23 }, 1963: { month: 9, day: 23 },
        1964: { month: 9, day: 23 }, 1965: { month: 9, day: 23 }, 1966: { month: 9, day: 23 }, 1967: { month: 9, day: 23 },
        1968: { month: 9, day: 22 }, 1969: { month: 9, day: 23 }, 1970: { month: 9, day: 23 }, 1971: { month: 9, day: 23 },
        1972: { month: 9, day: 22 }, 1973: { month: 9, day: 23 }, 1974: { month: 9, day: 23 }, 1975: { month: 9, day: 23 },
        1976: { month: 9, day: 22 }, 1977: { month: 9, day: 23 }, 1978: { month: 9, day: 23 }, 1979: { month: 9, day: 23 },
        1980: { month: 9, day: 22 }, 1981: { month: 9, day: 23 }, 1982: { month: 9, day: 23 }, 1983: { month: 9, day: 23 },
        1984: { month: 9, day: 22 }, 1985: { month: 9, day: 23 }, 1986: { month: 9, day: 23 }, 1987: { month: 9, day: 23 },
        1988: { month: 9, day: 22 }, 1989: { month: 9, day: 23 }, 1990: { month: 9, day: 23 }, 1991: { month: 9, day: 23 },
        1992: { month: 9, day: 22 }, 1993: { month: 9, day: 23 }, 1994: { month: 9, day: 23 }, 1995: { month: 9, day: 23 },
        1996: { month: 9, day: 22 }, 1997: { month: 9, day: 22 }, 1998: { month: 9, day: 23 }, 1999: { month: 9, day: 23 },
        2000: { month: 9, day: 22 }, 2001: { month: 9, day: 22 }, 2002: { month: 9, day: 23 }, 2003: { month: 9, day: 23 },
        2004: { month: 9, day: 22 }, 2005: { month: 9, day: 22 }, 2006: { month: 9, day: 23 }, 2007: { month: 9, day: 23 },
        2008: { month: 9, day: 22 }, 2009: { month: 9, day: 22 }, 2010: { month: 9, day: 23 }, 2011: { month: 9, day: 23 },
        2012: { month: 9, day: 22 }, 2013: { month: 9, day: 22 }, 2014: { month: 9, day: 23 }, 2015: { month: 9, day: 23 },
        2016: { month: 9, day: 22 }, 2017: { month: 9, day: 22 }, 2018: { month: 9, day: 23 }, 2019: { month: 9, day: 23 },
        2020: { month: 9, day: 22 }, 2021: { month: 9, day: 22 }, 2022: { month: 9, day: 23 }, 2023: { month: 9, day: 23 },
        2024: { month: 9, day: 22 }, 2025: { month: 9, day: 22 }, 2026: { month: 9, day: 23 }, 2027: { month: 9, day: 23 },
        2028: { month: 9, day: 22 }, 2029: { month: 9, day: 22 }, 2030: { month: 9, day: 22 }, 2031: { month: 9, day: 23 },
        2032: { month: 9, day: 22 }, 2033: { month: 9, day: 22 }, 2034: { month: 9, day: 22 }, 2035: { month: 9, day: 23 },
        2036: { month: 9, day: 22 }, 2037: { month: 9, day: 22 }, 2038: { month: 9, day: 22 }, 2039: { month: 9, day: 23 },
        2040: { month: 9, day: 22 }, 2041: { month: 9, day: 22 }, 2042: { month: 9, day: 22 }, 2043: { month: 9, day: 23 },
        2044: { month: 9, day: 22 }, 2045: { month: 9, day: 22 }, 2046: { month: 9, day: 22 }, 2047: { month: 9, day: 23 },
        2048: { month: 9, day: 22 }, 2049: { month: 9, day: 22 }, 2050: { month: 9, day: 22 }, 2051: { month: 9, day: 23 },
        2052: { month: 9, day: 22 }, 2053: { month: 9, day: 22 }, 2054: { month: 9, day: 22 }, 2055: { month: 9, day: 23 },
        2056: { month: 9, day: 22 }, 2057: { month: 9, day: 22 }, 2058: { month: 9, day: 22 }, 2059: { month: 9, day: 23 },
        2060: { month: 9, day: 22 }, 2061: { month: 9, day: 22 }, 2062: { month: 9, day: 22 }, 2063: { month: 9, day: 22 },
        2064: { month: 9, day: 22 }, 2065: { month: 9, day: 22 }, 2066: { month: 9, day: 22 }, 2067: { month: 9, day: 22 },
        2068: { month: 9, day: 22 }, 2069: { month: 9, day: 22 }, 2070: { month: 9, day: 22 }, 2071: { month: 9, day: 22 },
        2072: { month: 9, day: 22 }, 2073: { month: 9, day: 22 }, 2074: { month: 9, day: 22 }, 2075: { month: 9, day: 22 },
        2076: { month: 9, day: 22 }, 2077: { month: 9, day: 22 }, 2078: { month: 9, day: 22 }, 2079: { month: 9, day: 22 },
        2080: { month: 9, day: 22 }, 2081: { month: 9, day: 22 }, 2082: { month: 9, day: 22 }, 2083: { month: 9, day: 22 },
        2084: { month: 9, day: 22 }, 2085: { month: 9, day: 22 }, 2086: { month: 9, day: 22 }, 2087: { month: 9, day: 22 },
        2088: { month: 9, day: 22 }, 2089: { month: 9, day: 22 }, 2090: { month: 9, day: 22 }, 2091: { month: 9, day: 22 },
        2092: { month: 9, day: 21 }, 2093: { month: 9, day: 22 }, 2094: { month: 9, day: 22 }, 2095: { month: 9, day: 22 },
        2096: { month: 9, day: 21 }, 2097: { month: 9, day: 22 }, 2098: { month: 9, day: 22 }, 2099: { month: 9, day: 22 },
        2100: { month: 9, day: 22 }, 2101: { month: 9, day: 23 }, 2102: { month: 9, day: 23 }, 2103: { month: 9, day: 23 },
        2104: { month: 9, day: 22 }, 2105: { month: 9, day: 23 }, 2106: { month: 9, day: 23 }, 2107: { month: 9, day: 23 },
        2108: { month: 9, day: 22 }, 2109: { month: 9, day: 23 }, 2110: { month: 9, day: 23 }, 2111: { month: 9, day: 23 },
        2112: { month: 9, day: 22 }, 2113: { month: 9, day: 23 }, 2114: { month: 9, day: 23 }, 2115: { month: 9, day: 23 },
        2116: { month: 9, day: 22 }, 2117: { month: 9, day: 23 }, 2118: { month: 9, day: 23 }, 2119: { month: 9, day: 23 },
        2120: { month: 9, day: 22 }, 2121: { month: 9, day: 22 }, 2122: { month: 9, day: 23 }, 2123: { month: 9, day: 23 },
        2124: { month: 9, day: 22 }, 2125: { month: 9, day: 22 }, 2126: { month: 9, day: 23 }, 2127: { month: 9, day: 23 },
        2128: { month: 9, day: 22 }, 2129: { month: 9, day: 22 }, 2130: { month: 9, day: 23 }, 2131: { month: 9, day: 23 },
        2132: { month: 9, day: 22 }, 2133: { month: 9, day: 22 }, 2134: { month: 9, day: 23 }, 2135: { month: 9, day: 23 },
        2136: { month: 9, day: 22 }, 2137: { month: 9, day: 22 }, 2138: { month: 9, day: 23 }, 2139: { month: 9, day: 23 },
        2140: { month: 9, day: 22 }, 2141: { month: 9, day: 22 }, 2142: { month: 9, day: 23 }, 2143: { month: 9, day: 23 },
        2144: { month: 9, day: 22 }, 2145: { month: 9, day: 22 }, 2146: { month: 9, day: 23 }, 2147: { month: 9, day: 23 },
        2148: { month: 9, day: 22 }, 2149: { month: 9, day: 22 }, 2150: { month: 9, day: 23 }, 2151: { month: 9, day: 23 },
        2152: { month: 9, day: 22 }, 2153: { month: 9, day: 22 }, 2154: { month: 9, day: 22 }, 2155: { month: 9, day: 23 },
        2156: { month: 9, day: 22 }, 2157: { month: 9, day: 22 }, 2158: { month: 9, day: 22 }, 2159: { month: 9, day: 23 },
        2160: { month: 9, day: 22 }, 2161: { month: 9, day: 22 }, 2162: { month: 9, day: 22 }, 2163: { month: 9, day: 23 },
        2164: { month: 9, day: 22 }, 2165: { month: 9, day: 22 }, 2166: { month: 9, day: 22 }, 2167: { month: 9, day: 23 },
        2168: { month: 9, day: 22 }, 2169: { month: 9, day: 22 }, 2170: { month: 9, day: 22 }, 2171: { month: 9, day: 23 },
        2172: { month: 9, day: 22 }, 2173: { month: 9, day: 22 }, 2174: { month: 9, day: 22 }, 2175: { month: 9, day: 23 },
        2176: { month: 9, day: 22 }, 2177: { month: 9, day: 22 }, 2178: { month: 9, day: 22 }, 2179: { month: 9, day: 23 },
        2180: { month: 9, day: 22 }, 2181: { month: 9, day: 22 }, 2182: { month: 9, day: 22 }, 2183: { month: 9, day: 23 },
        2184: { month: 9, day: 22 }, 2185: { month: 9, day: 22 }, 2186: { month: 9, day: 22 }, 2187: { month: 9, day: 22 },
        2188: { month: 9, day: 22 }, 2189: { month: 9, day: 22 }, 2190: { month: 9, day: 22 }, 2191: { month: 9, day: 22 },
        2192: { month: 9, day: 22 }, 2193: { month: 9, day: 22 }, 2194: { month: 9, day: 22 }, 2195: { month: 9, day: 22 },
        2196: { month: 9, day: 22 }, 2197: { month: 9, day: 22 }, 2198: { month: 9, day: 22 }, 2199: { month: 9, day: 22 }
     }; // Fin de equinoxData


    const dailyItems = [
        // Vendémiaire (Automne) - Mois 1
        [
            { name: "Raisin", latin: "Vitis vinifera", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit de la vigne, symbole des vendanges et de l'abondance automnale." },
            { name: "Safran", latin: "Crocus sativus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Épice précieuse issue d'une fleur mauve, utilisée en cuisine et en teinture." },
            { name: "Châtaigne", latin: "Castanea sativa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit du châtaignier, important pour l'alimentation hivernale." },
            { name: "Colchique", latin: "Colchicum autumnale", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à fleurs roses ou mauves qui fleurit en automne, mais toxique." },
            { name: "Cheval", latin: "Equus caballus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Animal domestique essentiel pour le travail agricole et le transport." },
            { name: "Balsamine", latin: "Impatiens balsamina", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante ornementale aux fleurs colorées, appréciée dans les jardins." },
            { name: "Carotte", latin: "Daucus carota", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume racine orange, riche en vitamines et cultivé pour sa racine comestible." },
            { name: "Amarante", latin: "Amaranthus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aux épis floraux souvent pourpres, dont certaines espèces sont comestibles." },
            { name: "Panais", latin: "Pastinaca sativa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume racine similaire à la carotte, au goût légèrement sucré." },
            { name: "Cuve", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grand récipient, souvent en bois, utilisé pour la fermentation du vin." },
            { name: "Pomme de terre", latin: "Solanum tuberosum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Tubercule devenu un aliment de base en Europe." },
            { name: "Immortelle", latin: "Helichrysum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont les fleurs séchées conservent longtemps leur forme et couleur." },
            { name: "Potiron", latin: "Cucurbita maxima", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grosse courge d'automne, utilisée en cuisine pour soupes et gratins." },
            { name: "Réséda", latin: "Reseda", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante souvent odorante, dont certaines espèces étaient utilisées en parfumerie." },
            { name: "Âne", latin: "Equus asinus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Animal robuste utilisé pour le portage et le travail, symbole de patience." },
            { name: "Belle de nuit", latin: "Mirabilis jalapa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont les fleurs parfumées s'ouvrent en fin de journée." },
            { name: "Citrouille", latin: "Cucurbita pepo", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Courge orange emblématique d'Halloween, comestible." },
            { name: "Sarrasin", latin: "Fagopyrum esculentum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Pseudo-céréale sans gluten, utilisée pour faire des galettes." },
            { name: "Tournesol", latin: "Helianthus annuus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grande plante dont la fleur suit le soleil, cultivée pour ses graines et son huile." },
            { name: "Pressoir", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Machine utilisée pour extraire le jus des fruits (raisins, pommes)." },
            { name: "Chanvre", latin: "Cannabis sativa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante utilisée pour ses fibres textiles robustes et ses graines oléagineuses." },
            { name: "Pêche", latin: "Prunus persica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit à peau duveteuse et chair juteuse, symbole de l'été finissant." },
            { name: "Navet", latin: "Brassica rapa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume racine souvent blanc et violet, au goût parfois piquant." },
            { name: "Amaryllis", latin: "Amaryllis / Hippeastrum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à bulbe produisant de grandes fleurs spectaculaires." },
            { name: "Bœuf", latin: "Bos taurus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Animal d'élevage essentiel pour la viande, le lait et la traction." },
            { name: "Aubergine", latin: "Solanum melongena", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume fruit à peau violette, utilisé dans la cuisine méditerranéenne." },
            { name: "Piment", latin: "Capsicum annuum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit de plante utilisé comme condiment pour son goût piquant." },
            { name: "Tomate", latin: "Solanum lycopersicum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit rouge charnu, consommé comme légume, incontournable en cuisine." },
            { name: "Orge", latin: "Hordeum vulgare", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Céréale utilisée pour l'alimentation animale, la fabrication de bière et de whisky." },
            { name: "Tonneau", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Contenant en bois cylindrique servant à stocker et vieillir le vin ou d'autres alcools." }
        ],
        // Brumaire (Automne) - Mois 2
        [
            { name: "Pomme", latin: "Malus domestica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit commun et polyvalent, symbole de la connaissance et de la tentation." },
            { name: "Céleri", latin: "Apium graveolens", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume dont on consomme les côtes (céleri branche) ou la racine (céleri rave)." },
            { name: "Poire", latin: "Pyrus communis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit à chair fondante, proche de la pomme, apprécié frais ou cuit." },
            { name: "Betterave", latin: "Beta vulgaris", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume racine à la couleur rouge intense, utilisée crue ou cuite." },
            { name: "Oie", latin: "Anser anser domesticus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Volaille domestique élevée pour sa chair, son foie gras et ses plumes." },
            { name: "Héliotrope", latin: "Heliotropium", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont les fleurs parfumées (vanille) se tournent vers le soleil." },
            { name: "Figue", latin: "Ficus carica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit du figuier, sucré et charnu, consommé frais ou séché." },
            { name: "Scorsonère", latin: "Scorzonera hispanica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume racine à peau noire et chair blanche, au goût proche du salsifis." },
            { name: "Alisier", latin: "Sorbus torminalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbre dont les fruits (alises) sont comestibles après blettissement." },
            { name: "Charrue", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil agricole fondamental servant à labourer la terre avant les semailles." },
            { name: "Salsifis", latin: "Tragopogon porrifolius", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume racine similaire à la scorsonère, mais à peau beige." },
            { name: "Mâcre", latin: "Trapa natans", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aquatique dont le fruit (châtaigne d'eau) est comestible." },
            { name: "Topinambour", latin: "Helianthus tuberosus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Tubercule au goût d'artichaut, cultivé pour sa racine." },
            { name: "Endive", latin: "Cichorium intybus var. foliosum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume feuille cultivé à l'obscurité pour obtenir des chicons blancs." },
            { name: "Dindon", latin: "Meleagris gallopavo", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grosse volaille originaire d'Amérique, appréciée pour sa chair." },
            { name: "Chervis", latin: "Sium sisarum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Ancien légume racine au goût sucré, ressemblant à de petites carottes blanches." },
            { name: "Cresson", latin: "Nasturtium officinale", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aquatique aux feuilles piquantes, utilisée en salade ou en soupe." },
            { name: "Dentelaire", latin: "Plumbago", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante ornementale aux fleurs souvent bleues, parfois utilisée médicinalement." },
            { name: "Grenade", latin: "Punica granatum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit exotique rempli de graines juteuses (arilles), symbole de fertilité." },
            { name: "Herse", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil agricole servant à briser les mottes et niveler le sol après le labour." },
            { name: "Bacchante", latin: "Asarum europaeum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante discrète des sous-bois, parfois appelée 'oreille d'homme'." }, // Nom vernaculaire, lien ténu avec Bacchus/fêtes.
            { name: "Azerole", latin: "Crataegus azarolus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit de l'azerolier, une sorte de petite pomme ou baie rouge acidulée." },
            { name: "Garance", latin: "Rubia tinctorum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont la racine fournit un colorant rouge vif." },
            { name: "Orange", latin: "Citrus sinensis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Agrume populaire, riche en vitamine C, symbole de soleil hivernal." },
            { name: "Faisan", latin: "Phasianus colchicus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Oiseau gibier coloré, apprécié pour sa chair fine." },
            { name: "Pistache", latin: "Pistacia vera", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit sec à coque, dont l'amande verte est utilisée en pâtisserie et à l'apéritif." },
            { name: "Macjonc", latin: "Lathyrus tuberosus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à tubercules comestibles au goût de noisette, aussi appelée 'gland de terre'." },
            { name: "Coing", latin: "Cydonia oblonga", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit dur et parfumé, immangeable cru mais délicieux en gelée ou pâte." },
            { name: "Cormier", latin: "Sorbus domestica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbre dont les fruits (cormes), semblables à de petites poires, sont comestibles blets." },
            { name: "Rouleau", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil agricole cylindrique utilisé pour tasser la terre après le semis." }
        ],
        // Frimaire (Automne) - Mois 3
        [
           { name: "Raiponce", latin: "Campanula rapunculus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont la racine et les feuilles étaient autrefois consommées." },
           { name: "Turneps", latin: "Brassica rapa subsp. rapa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Variété de navet fourrager, cultivé principalement pour le bétail." },
           { name: "Chicorée", latin: "Cichorium intybus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont les feuilles sont utilisées en salade et la racine torréfiée comme substitut de café." },
           { name: "Nèfle", latin: "Mespilus germanica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit du néflier, comestible uniquement après avoir bletti (ramolli par le gel)." },
           { name: "Cochon", latin: "Sus scrofa domesticus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Animal d'élevage fondamental pour sa viande (porc), symbole de prospérité." },
           { name: "Mâche", latin: "Valerianella locusta", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Petite salade d'hiver aux feuilles tendres, aussi appelée 'doucette'." },
           { name: "Chou-fleur", latin: "Brassica oleracea var. botrytis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume dont on consomme l'inflorescence blanche et charnue." },
           { name: "Miel", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Substance sucrée produite par les abeilles à partir du nectar des fleurs." },
           { name: "Genièvre", latin: "Juniperus communis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste dont les baies bleues parfument le gin et certains plats." },
           { name: "Pioche", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil manuel robuste pour creuser et briser les sols durs ou pierreux." },
           { name: "Cire", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Substance produite par les abeilles (cire d'abeille) ou d'origine minérale/végétale, utilisée pour les bougies, l'encaustique." },
           { name: "Raifort", latin: "Armoracia rusticana", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Racine très piquante utilisée comme condiment, similaire à la moutarde forte." },
           { name: "Cèdre", latin: "Cedrus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grand conifère majestueux au bois odorant et durable." },
           { name: "Sapin", latin: "Abies", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Conifère commun des forêts de montagne, arbre de Noël traditionnel." },
           { name: "Chevreuil", latin: "Capreolus capreolus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Petit cervidé gracieux des forêts et lisières, gibier apprécié." },
           { name: "Ajonc", latin: "Ulex europaeus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste épineux aux fleurs jaunes vives, typique des landes." },
           { name: "Cyprès", latin: "Cupressus sempervirens", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbre conique au feuillage persistant sombre, souvent associé aux cimetières." },
           { name: "Lierre", latin: "Hedera helix", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante grimpante tenace au feuillage persistant, parfois envahissante." },
           { name: "Sabine", latin: "Juniperus sabina", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Variété de genévrier toxique, à ne pas confondre avec le genièvre commun." },
           { name: "Hoyau", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil agricole manuel, sorte de houe robuste pour défricher ou travailler un sol difficile." },
           { name: "Érable sucré", latin: "Acer saccharum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Érable d'Amérique du Nord dont la sève est utilisée pour produire le sirop d'érable." }, // Aussi appelé Érable à sucre
           { name: "Bruyère", latin: "Calluna vulgaris / Erica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante des sols acides (landes, sous-bois), aux petites fleurs roses ou mauves." },
           { name: "Roseau", latin: "Phragmites australis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grande graminée des zones humides, utilisée pour les toitures (chaume)." },
           { name: "Oseille", latin: "Rumex acetosa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante potagère aux feuilles acidulées, utilisée en cuisine comme légume ou condiment." },
           { name: "Grillon", latin: "Gryllidae", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Insecte connu pour le chant strident du mâle, souvent associé au foyer." },
           { name: "Pignon", latin: "Pinus pinea", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Graine comestible du pin parasol, utilisée en pâtisserie et cuisine méditerranéenne." },
           { name: "Liège", latin: "Quercus suber", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Écorce du chêne-liège, légère et imperméable, utilisée pour les bouchons." },
           { name: "Truffe", latin: "Tuber melanosporum / Tuber spp.", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Champignon souterrain très parfumé et recherché, diamant noir de la gastronomie." },
           { name: "Olive", latin: "Olea europaea", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit de l'olivier, source de l'huile d'olive et consommé comme condiment." },
           { name: "Pelle", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil manuel de base pour creuser, déplacer terre, sable, neige..." }
        ],
        // Nivôse (Hiver) - Mois 4
        [
            { name: "Tourbe", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Matière organique fossile issue de zones humides, utilisée comme combustible ou amendement." },
            { name: "Houille", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Roche sédimentaire carbonée, combustible fossile essentiel de la révolution industrielle." },
            { name: "Bitume", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Matière noire et visqueuse, naturelle ou issue du pétrole, utilisée pour l'asphalte et l'étanchéité." },
            { name: "Soufre", latin: "S", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Élément chimique jaune, utilisé en poudrerie, pour la vigne (fongicide) et l'industrie." },
            { name: "Chien", latin: "Canis lupus familiaris", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Animal domestique fidèle, compagnon de l'homme, utilisé pour la garde, la chasse, etc." },
            { name: "Lave", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Roche en fusion émise par les volcans, qui se solidifie en refroidissant." },
            { name: "Terre végétale", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Couche supérieure du sol, riche en humus et essentielle à la croissance des plantes." },
            { name: "Fumier", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Mélange de litière et de déjections animales, utilisé comme engrais organique." },
            { name: "Salpêtre", latin: "KNO₃ (Nitrate de potassium)", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Sel minéral blanchâtre, composant de la poudre noire et utilisé comme conservateur." },
            { name: "Fléau", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil agricole manuel pour battre les céréales et séparer le grain de la paille." },
            { name: "Granit", latin: "Granite", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Roche magmatique dure et grenue, utilisée en construction et sculpture." }, // Nom scientifique est identique
            { name: "Argile", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Terre fine et imperméable, malléable une fois humide, utilisée en poterie et construction." },
            { name: "Ardoise", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Roche schisteuse débitée en fines plaques, utilisée pour les toitures et autrefois pour écrire." },
            { name: "Grès", latin: "Sandstone", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Roche sédimentaire formée de grains de sable cimentés, utilisée en construction." },
            { name: "Lapin", latin: "Oryctolagus cuniculus domesticus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Petit mammifère élevé pour sa chair et sa fourrure, ou comme animal de compagnie." },
            { name: "Silex", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Roche très dure qui produit des étincelles par percussion, utilisée pour les outils préhistoriques et les pierres à fusil." },
            { name: "Marne", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Roche sédimentaire tendre, mélange d'argile et de calcaire, utilisée comme amendement agricole." },
            { name: "Pierre à chaux", latin: "Calcaire (CaCO₃)", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Roche sédimentaire principalement composée de carbonate de calcium, utilisée pour produire la chaux." },
            { name: "Marbre", latin: "Marble", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Roche métamorphique dérivée du calcaire, appréciée pour la sculpture et la décoration." },
            { name: "Van", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grand panier plat en osier utilisé pour vanner les céréales (séparer le grain de la balle)." },
            { name: "Pierre à plâtre", latin: "Gypse (CaSO₄·2H₂O)", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Roche sédimentaire (sulfate de calcium hydraté) utilisée pour fabriquer le plâtre." },
            { name: "Sel", latin: "NaCl (Chlorure de sodium)", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Minéral essentiel à la vie, utilisé comme condiment et conservateur." },
            { name: "Fer", latin: "Fe", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Métal très utilisé pour sa robustesse (acier), essentiel dans l'industrie et la construction." },
            { name: "Cuivre", latin: "Cu", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Métal rougeâtre bon conducteur d'électricité et de chaleur, utilisé en électricité, plomberie, et pour les alliages (bronze, laiton)." },
            { name: "Chat", latin: "Felis catus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Petit félin domestique, apprécié comme animal de compagnie et chasseur de rongeurs." },
            { name: "Étain", latin: "Sn", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Métal blanc argenté, malléable, utilisé pour le fer-blanc (étamage) et les soudures." },
            { name: "Plomb", latin: "Pb", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Métal lourd, dense et malléable, mais toxique. Utilisé autrefois en plomberie, typographie, batteries." },
            { name: "Zinc", latin: "Zn", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Métal bleu-gris utilisé pour la galvanisation (protection de l'acier contre la rouille) et les alliages (laiton)." },
            { name: "Mercure", latin: "Hg", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Seul métal liquide à température ambiante, dense et toxique. Utilisé dans les thermomètres, baromètres (anciennement)." },
            { name: "Crible", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Sorte de tamis utilisé pour trier des matériaux granuleux (sable, grains...)." }
        ],
         // Pluviôse (Hiver) - Mois 5
        [
            { name: "Lauréole", latin: "Daphne laureola", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste toxique à feuilles persistantes ressemblant au laurier." },
            { name: "Mousse", latin: "Bryophyta", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante simple sans racine ni fleur, formant des tapis verts dans les lieux humides." },
            { name: "Fragon", latin: "Ruscus aculeatus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste piquant ('petit houx') aux baies rouges décoratives en hiver." },
            { name: "Perce-neige", latin: "Galanthus nivalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Petite fleur blanche qui fleurit à la fin de l'hiver, souvent à travers la neige." },
            { name: "Taureau", latin: "Bos taurus (mâle)", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Mâle reproducteur de l'espèce bovine, symbole de force et de fertilité." },
            { name: "Laurier-thym", latin: "Viburnum tinus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste à floraison hivernale blanche ou rose et feuillage persistant." }, // Aussi appelé Laurier tin
            { name: "Amadouvier", latin: "Fomes fomentarius", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Champignon parasite des arbres dont la chair spongieuse (amadou) servait à faire du feu." },
            { name: "Mézéréon", latin: "Daphne mezereum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste toxique à floraison rose vif parfumée avant les feuilles." }, // Aussi Bois-joli
            { name: "Peuplier", latin: "Populus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbre à croissance rapide des lieux humides, au feuillage bruissant." },
            { name: "Coignée", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Hache destinée à fendre le bois." },
            { name: "Ellébore", latin: "Helleborus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante vivace fleurissant en hiver ('Rose de Noël'), souvent toxique." },
            { name: "Brocoli", latin: "Brassica oleracea var. italica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume proche du chou-fleur, dont on mange les inflorescences vertes." },
            { name: "Laurier", latin: "Laurus nobilis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste aromatique dont les feuilles sont utilisées en cuisine ('laurier-sauce')." },
            { name: "Avelinier", latin: "Corylus avellana", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste produisant les noisettes. Aveline est un ancien nom pour noisette." }, // Noisetier commun
            { name: "Vache", latin: "Bos taurus (femelle)", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Femelle de l'espèce bovine, élevée pour son lait, sa viande et sa force de travail." },
            { name: "Buis", latin: "Buxus sempervirens", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste au feuillage persistant dense, utilisé en topiaire et pour son bois dur." },
            { name: "Lichen", latin: "Lichenes", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Organisme symbiotique (algue + champignon) croissant sur les rochers, arbres..." },
            { name: "If", latin: "Taxus baccata", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Conifère au bois très dur et élastique, dont toutes les parties (sauf l'arille rouge) sont toxiques." },
            { name: "Pulmonaire", latin: "Pulmonaria officinalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont les feuilles tachetées rappelaient des poumons (théorie des signatures)." },
            { name: "Serpette", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Petit couteau courbe utilisé par les jardiniers et les vanniers." },
            { name: "Thlaspi", latin: "Thlaspi", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante herbacée ('bourse-à-pasteur') commune dans les cultures et friches." },
            { name: "Thimelé", latin: "Daphne gnidium", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste méditerranéen toxique, proche du Lauréole et Mézéréon." },
            { name: "Chiendent", latin: "Elymus repens", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Graminée très envahissante ('mauvaise herbe'), difficile à éradiquer." },
            { name: "Trainel", latin: "Vinca minor/major?", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Nom ancien possiblement pour la Pervenche, plante tapissante à fleurs bleues." }, // Interprétation possible
            { name: "Lièvre", latin: "Lepus europaeus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Mammifère rapide proche du lapin, mais sauvage et ne creusant pas de terrier." },
            { name: "Guède", latin: "Isatis tinctoria", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont les feuilles fournissent le 'pastel', un colorant bleu." },
            { name: "Noisetier", latin: "Corylus avellana", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste commun produisant les noisettes." }, // Synonyme d'Avelinier
            { name: "Cyclamen", latin: "Cyclamen", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à tubercule dont les élégantes fleurs apparaissent en automne ou hiver." },
            { name: "Chélidoine", latin: "Chelidonium majus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à suc jaune-orangé caustique, autrefois utilisée contre les verrues." },
            { name: "Traîneau", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Véhicule glissant sur la neige ou la glace, tiré par des animaux ou un moteur." }
        ],
        // Ventôse (Hiver) - Mois 6
        [
            { name: "Tussilage", latin: "Tussilago farfara", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont les fleurs jaunes apparaissent avant les feuilles, utilisée contre la toux." },
            { name: "Cornouiller", latin: "Cornus mas / Cornus sanguinea", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste dont certaines espèces ont des fruits comestibles (cornouilles) ou un bois très dur." },
            { name: "Violier", latin: "Matthiola incana", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante ornementale aux fleurs parfumées (Giroflée des jardins)." },
            { name: "Troène", latin: "Ligustrum vulgare", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste commun utilisé pour les haies, aux baies noires toxiques." },
            { name: "Bouc", latin: "Capra aegagrus hircus (mâle)", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Mâle de la chèvre, souvent symbole de lubricité ou du diable." },
            { name: "Asaret", latin: "Asarum europaeum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante discrète des sous-bois, couvre-sol au feuillage persistant." }, // Aussi Bacchante (Brumaire)
            { name: "Alaterne", latin: "Rhamnus alaternus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste méditerranéen au feuillage persistant ressemblant au houx." },
            { name: "Violette", latin: "Viola odorata", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Petite fleur printanière parfumée, symbole de modestie." },
            { name: "Marceau", latin: "Salix caprea", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Saule dont les chatons apparaissent tôt au printemps ('Saule marsault')." },
            { name: "Bêche", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil de jardinage pour retourner la terre en profondeur." },
            { name: "Narcisse", latin: "Narcissus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à bulbe aux fleurs souvent jaunes ou blanches, annonçant le printemps." },
            { name: "Orme", latin: "Ulmus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grand arbre autrefois commun, décimé par la graphiose." },
            { name: "Fumeterre", latin: "Fumaria officinalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aux feuilles découpées et fleurs roses, utilisée pour ses propriétés dépuratives." },
            { name: "Vélar", latin: "Erysimum officinale", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante appelée 'Herbe aux chantres' pour son usage contre l'enrouement." },
            { name: "Chèvre", latin: "Capra aegagrus hircus (femelle)", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Animal d'élevage agile, apprécié pour son lait (fromage) et sa viande." },
            { name: "Épinard", latin: "Spinacia oleracea", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume feuille vert foncé, riche en fer et vitamines." },
            { name: "Doronic", latin: "Doronicum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante vivace à fleurs jaunes ressemblant à des marguerites, fleurissant au printemps." },
            { name: "Mouron", latin: "Anagallis arvensis / Stellaria media", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Nom commun pour plusieurs petites plantes adventices ('Mouron des oiseaux')." },
            { name: "Cerfeuil", latin: "Anthriscus cerefolium", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aromatique au goût anisé, utilisée fraîche en cuisine." },
            { name: "Cordeau", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Ficelle tendue entre deux piquets pour tracer des lignes droites au jardin." },
            { name: "Mandragore", latin: "Mandragora officinarum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante légendaire à racine anthropomorphe, réputée magique et toxique." },
            { name: "Persil", latin: "Petroselinum crispum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aromatique très populaire, utilisée fraîche ou séchée." },
            { name: "Cochléaria", latin: "Cochlearia officinalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante du littoral riche en vitamine C ('Herbe aux cuillères')." },
            { name: "Pâquerette", latin: "Bellis perennis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Petite fleur blanche et jaune très commune dans les pelouses au printemps." },
            { name: "Thon", latin: "Thunnus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grand poisson pélagique migrateur, pêché pour sa chair." }, // Poisson - élément inattendu
            { name: "Pissenlit", latin: "Taraxacum officinale", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante très commune aux fleurs jaunes et propriétés diurétiques." },
            { name: "Sylvie", latin: "Anemone nemorosa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Anémone sauvage des bois, fleur blanche printanière." },
            { name: "Capillaire", latin: "Adiantum capillus-veneris", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fougère délicate des lieux humides, aux frondes finement découpées." },
            { name: "Frêne", latin: "Fraxinus excelsior", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grand arbre au bois souple et résistant, utilisé en menuiserie et pour les manches d'outils." },
            { name: "Plantoir", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil pointu pour faire des trous dans la terre afin d'y planter des jeunes plants ou des bulbes." }
        ],
         // Germinal (Printemps) - Mois 7
        [
            { name: "Primevère", latin: "Primula vulgaris / Primula veris", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fleur printanière, souvent jaune pâle ('Coucou'), annonciatrice du renouveau." },
            { name: "Platane", latin: "Platanus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grand arbre d'ornement au tronc caractéristique (écorce se détachant)." },
            { name: "Asperge", latin: "Asparagus officinalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Jeune pousse comestible (turion) appréciée comme légume fin de printemps." },
            { name: "Tulipe", latin: "Tulipa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à bulbe aux fleurs vivement colorées, symbole des Pays-Bas." },
            { name: "Poule", latin: "Gallus gallus domesticus (femelle)", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Volaille commune élevée pour ses œufs et sa chair." },
            { name: "Bette", latin: "Beta vulgaris subsp. vulgaris", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume feuille dont on consomme les côtes blanches (cardes) et/ou les feuilles vertes (blettes)." },
            { name: "Bouleau", latin: "Betula", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbre à l'écorce blanche caractéristique, apprécié pour son aspect ornemental." },
            { name: "Jonquille", latin: "Narcissus jonquilla / Narcissus pseudonarcissus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Variété de narcisse à fleurs jaunes parfumées." },
            { name: "Aulne", latin: "Alnus glutinosa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbre des milieux humides, dont le bois résiste bien à l'eau." },
            { name: "Couvoir", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Lieu ou appareil destiné à l'incubation artificielle des œufs." },
            { name: "Pervenche", latin: "Vinca minor / Vinca major", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante tapissante aux fleurs bleues ou blanches, persistante." },
            { name: "Charme", latin: "Carpinus betulus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbre au bois très dur ('bois de fer'), souvent utilisé en haies (charmilles)." },
            { name: "Morille", latin: "Morchella esculenta", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Champignon printanier très recherché, à l'aspect d'éponge." },
            { name: "Hêtre", latin: "Fagus sylvatica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grand arbre forestier au tronc lisse et gris, dont les fruits sont les faînes." },
            { name: "Abeille", latin: "Apis mellifera", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Insecte social essentiel pour la pollinisation et la production de miel et de cire." },
            { name: "Laitue", latin: "Lactuca sativa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Salade la plus commune, cultivée pour ses feuilles tendres." },
            { name: "Mélèze", latin: "Larix decidua", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Seul conifère d'Europe à perdre ses aiguilles en hiver." },
            { name: "Ciguë", latin: "Conium maculatum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante très toxique à fleurs blanches en ombelles, poison de Socrate." },
            { name: "Radis", latin: "Raphanus sativus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Petite racine croquante et piquante, consommée crue." },
            { name: "Ruche", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Habitat construit par l'homme pour héberger une colonie d'abeilles." },
            { name: "Gainier", latin: "Cercis siliquastrum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbre spectaculaire ('Arbre de Judée') couvert de fleurs roses avant les feuilles." },
            { name: "Romaine", latin: "Lactuca sativa var. longifolia", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Variété de laitue aux feuilles longues et croquantes." },
            { name: "Marronnier", latin: "Aesculus hippocastanum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grand arbre d'ornement aux fleurs en épis (blanches ou roses) et fruits non comestibles (marrons d'Inde)." },
            { name: "Roquette", latin: "Eruca vesicaria / Diplotaxis tenuifolia", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Salade au goût poivré et piquant." },
            { name: "Pigeon", latin: "Columba livia domestica", author: "(Gmelin 1789)", urlImage: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Columba_livia_Luc_Viatour.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Columba_(oiseau)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/PIGEON", description: "Premier oiseau domestiqué par les humains, c’est d’abord un animal élevé pour être mangé. Durant le 18ème siècle, le pigeon des villes achève de remplacer le pigeon biset (son ancêtre) et l’utilisation des pigeons voyageurs comme porteurs de messages se généralise avec le succès que l’on connaît." },
            { name: "Lilas (commun)", latin: "Syringa vulgaris", author: "(Linné 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/LILAC", urlImage: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Lilac_%282%29.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Syringa_vulgaris", description: "Arbuste très parfumé aux grappes de fleurs mauves ou blanches au printemps." },
            { name: "Anémone", latin: "Anemone", author: "(Linné 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/ANEMONE", urlImage: "https://upload.wikimedia.org/wikipedia/commons/d/db/Colorful-Anemone-coronaria-Zachi-Evenor.jpg", urlWiki: "https://fr.wikipedia.org/wiki/An%C3%A9mone", description: "Genre de plantes à fleurs délicates, souvent printanières (ex: Anémone des bois)." },
            { name: "Pensée", latin: "Viola tricolor / Viola x wittrockiana", author: "(Linné 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/PENS%C3%89E", urlImage: "https://upload.wikimedia.org/wikipedia/commons/1/1c/JDCANO_Viola_Cazorlensis.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Viola_(plante)", description: "Fleur colorée et veloutée, symbole de souvenir." },
            { name: "Myrtille", latin: "Vaccinium myrtillus", author: "(Linné 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/MYRTILLE", urlImage: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Myrtille_Vaccinium_myrtillus.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Vaccinium_myrtillus", description: "Petite baie bleu foncé sauvage ou cultivée, riche en antioxydants." },
            { name: "Greffoir", latin: "", author: "", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/GREFFOIR", urlImage: "https://www.promessedefleurs.com/blogwp/wp-content/uploads/2021/06/greffoir-couteau.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Greffoir", description: "Outil tranchant utilisé pour réaliser des greffes sur les arbres fruitiers ou d'ornement." }
        ],
		
		// , author: "", urlEncy: "", urlImage: "", urlWiki: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "
        // Floréal (Printemps) - Mois 8
        [
           { name: "Rose", latin: "Rosa", author: "(Linné 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/ROSE", urlImage: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Rose_Papa_Meilland.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Rose_(fleur)", description: "Fleur emblématique, symbole d'amour et de beauté, cultivée pour son parfum et son esthétique." },
           { name: "Chêne", latin: "Quercus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbre majestueux et robuste, symbole de force et de longévité, produisant des glands." },
           { name: "Fougère", latin: "Pteridophyta", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante sans fleur se reproduisant par spores, typique des sous-bois humides." },
           { name: "Aubépine", latin: "Crataegus monogyna", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste épineux aux fleurs blanches ou roses parfumées ('épine blanche')." },
           { name: "Rossignol", latin: "Luscinia megarhynchos", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Oiseau chanteur au chant mélodieux, souvent nocturne." },
           { name: "Ancolie", latin: "Aquilegia vulgaris", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante vivace aux fleurs originales en forme d'éperon." },
           { name: "Muguet", latin: "Convallaria majalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à clochettes blanches très parfumées, symbole du 1er mai, mais toxique." },
           { name: "Champignon", latin: "Fungi", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Organisme ni végétal ni animal, dont certains sont comestibles (ex: Cèpe) et d'autres vénéneux." }, // Très générique ici
           { name: "Hyacinthe", latin: "Hyacinthus orientalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à bulbe aux fleurs très parfumées en grappes denses." },
           { name: "Râteau", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil de jardinage pour rassembler feuilles ou débris, ou niveler la terre." },
           { name: "Rhubarbe", latin: "Rheum rhabarbarum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont on consomme les pétioles (tiges) acides, souvent en tarte ou compote." },
           { name: "Sainfoin", latin: "Onobrychis viciifolia", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante fourragère mellifère, aux fleurs roses en épis." },
           { name: "Bâton-d'or", latin: "Asphodeline lutea", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante vivace méditerranéenne à hautes tiges florales jaunes." }, // Asphodèle jaune
           { name: "Chamerops", latin: "Chamaerops humilis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Seul palmier nain originaire d'Europe continentale." },
           { name: "Ver à soie", latin: "Bombyx mori", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Chenille du papillon bombyx du mûrier, qui produit un cocon utilisé pour fabriquer la soie." },
           { name: "Consoude", latin: "Symphytum officinale", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aux propriétés cicatrisantes ('Oreille d'âne'), riche en potasse (purin)." },
           { name: "Pimprenelle", latin: "Sanguisorba minor", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont les jeunes feuilles au goût de concombre sont utilisées en salade." },
           { name: "Corbeille d'or", latin: "Aurinia saxatilis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante tapissante couverte de petites fleurs jaunes au printemps." },
           { name: "Arroche", latin: "Atriplex hortensis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume feuille ancien, similaire à l'épinard, existant en variétés vertes ou rouges." },
           { name: "Sarcloir", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil de jardinage pour désherber en coupant les mauvaises herbes à ras du sol." },
           { name: "Statice", latin: "Limonium", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont les fleurs (souvent bleues, roses, blanches) sèchent bien ('Immortelle bleue')." },
           { name: "Fritillaire", latin: "Fritillaria meleagris", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à bulbe aux fleurs pendantes en damier pourpre ('Pintade')." },
           { name: "Bourrache", latin: "Borago officinalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante velue aux fleurs bleues comestibles, mellifère et médicinale." },
           { name: "Valériane", latin: "Valeriana officinalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont la racine a des propriétés calmantes et sédatives." },
           { name: "Carpe", latin: "Cyprinus carpio", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Poisson d'eau douce commun, élevé en étang." },
           { name: "Fusain", latin: "Euonymus europaeus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste dont les fruits roses et oranges sont toxiques ('Bonnet d'évêque')." },
           { name: "Civette", latin: "Allium schoenoprasum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aromatique proche de l'oignon, dont on utilise les fines feuilles ciselées." }, // Ciboulette
           { name: "Buglosse", latin: "Anchusa / Lycopsis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à fleurs bleues, souvent rêche au toucher, de la famille de la bourrache." },
           { name: "Sénevé", latin: "Sinapis alba / Brassica nigra", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont les graines servent à faire la moutarde." },
           { name: "Houlette", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Long bâton de berger terminé par une plaque de fer ou une crosse." }
        ],
          // Prairial (Printemps) - Mois 9
        [
            { name: "Luzerne", latin: "Medicago sativa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante fourragère très nutritive, riche en protéines, améliore le sol (légumineuse)." },
            { name: "Hémérocalle", latin: "Hemerocallis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante vivace ('Lis d'un jour') dont les fleurs ne durent qu'une journée." },
            { name: "Trèfle", latin: "Trifolium", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante fourragère commune, symbole de l'Irlande (à trois feuilles) ou de chance (à quatre)." },
            { name: "Angélique", latin: "Angelica archangelica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grande plante aromatique et médicinale, dont les tiges sont confites." },
            { name: "Canard", latin: "Anas platyrhynchos domesticus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Oiseau aquatique domestique élevé pour sa chair, ses œufs et son foie gras." },
            { name: "Mélisse", latin: "Melissa officinalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aromatique au parfum citronné, utilisée en infusion pour ses vertus apaisantes." },
            { name: "Fromental", latin: "Arrhenatherum elatius", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grande graminée fourragère commune dans les prairies." },
            { name: "Martagon", latin: "Lilium martagon", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Lys sauvage aux fleurs roses ou pourpres tachetées, aux pétales retournés." },
            { name: "Serpolet", latin: "Thymus serpyllum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Thym sauvage rampant, très aromatique, poussant dans les lieux secs." },
            { name: "Faux", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil agricole manuel à long manche et lame courbe pour faucher l'herbe ou les céréales." },
            { name: "Fraise", latin: "Fragaria × ananassa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit rouge parfumé et sucré, très apprécié au printemps et en été." },
            { name: "Bétoine", latin: "Stachys officinalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante médicinale autrefois réputée pour de nombreuses vertus." },
            { name: "Pois", latin: "Pisum sativum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légumineuse dont on consomme les graines vertes (petits pois) ou sèches." },
            { name: "Acacia", latin: "Robinia pseudoacacia", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbre épineux à croissance rapide, aux grappes de fleurs blanches parfumées et mellifères." }, // Robinier faux-acacia
            { name: "Caille", latin: "Coturnix coturnix", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Petit oiseau migrateur gibier, élevé aussi pour ses œufs." },
            { name: "Œillet", latin: "Dianthus caryophyllus / Dianthus spp.", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fleur souvent parfumée, aux pétales parfois dentelés, symbole de l'amour ou du souvenir." },
            { name: "Sureau", latin: "Sambucus nigra", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste dont les fleurs en ombelles servent à faire des sirops/beignets, et les baies noires des confitures (cuites)." },
            { name: "Pavot", latin: "Papaver somniferum / Papaver rhoeas", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont certaines espèces fournissent l'opium et les graines de pavot (comestibles), ou le coquelicot." },
            { name: "Tilleul", latin: "Tilia", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grand arbre aux fleurs parfumées utilisées en infusions apaisantes (bractées)." },
            { name: "Fourche", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil agricole à long manche et dents pour manipuler le foin, la paille ou le fumier." },
            { name: "Barbeau", latin: "Centaurea cyanus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fleur des champs d'un bleu intense ('Bleuet'), messicole." },
            { name: "Camomille", latin: "Matricaria chamomilla / Chamaemelum nobile", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aux fleurs de pâquerette, utilisée en infusion pour ses vertus digestives et calmantes." },
            { name: "Chèvrefeuille", latin: "Lonicera periclymenum / Lonicera caprifolium", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante grimpante aux fleurs très parfumées, surtout le soir." },
            { name: "Caille-lait", latin: "Galium verum / Galium mollugo", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont certaines espèces étaient utilisées pour faire cailler le lait." },
            { name: "Tanche", latin: "Tinca tinca", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Poisson d'eau douce des étangs et rivières lentes, à la peau visqueuse." },
            { name: "Jasmin", latin: "Jasminum officinale", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante grimpante aux fleurs blanches très parfumées, utilisée en parfumerie." },
            { name: "Verveine", latin: "Verbena officinalis / Aloysia citrodora", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante médicinale (V. officinale) ou aromatique au parfum citronné (V. odorante)." },
            { name: "Thym", latin: "Thymus vulgaris", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbrisseau aromatique des garrigues, incontournable en cuisine méditerranéenne." },
            { name: "Pivoine", latin: "Paeonia", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante vivace ou arbustive aux grosses fleurs spectaculaires, roses, rouges ou blanches." },
            { name: "Chariot", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Véhicule à roues, souvent tiré par des animaux, utilisé pour le transport de marchandises ou de personnes." }
        ],
        // Messidor (Été) - Mois 10
        [
           { name: "Seigle", latin: "Secale cereale", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Céréale rustique proche du blé, utilisée pour le pain de seigle et l'alimentation animale." },
           { name: "Avoine", latin: "Avena sativa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Céréale riche en fibres, utilisée pour l'alimentation humaine (flocons) et animale (chevaux)." },
           { name: "Oignon", latin: "Allium cepa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante potagère à bulbe, condiment essentiel en cuisine." },
           { name: "Véronique", latin: "Veronica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Genre de plantes aux petites fleurs souvent bleues, présentes dans divers milieux." },
           { name: "Mulet", latin: "Equus caballus × Equus asinus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Hybride stérile issu du croisement d'un âne et d'une jument (ou Mûle si étalon x ânesse), réputé pour sa force et son endurance." },
           { name: "Romarin", latin: "Rosmarinus officinalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbrisseau aromatique persistant des garrigues, utilisé en cuisine et parfumerie." },
           { name: "Concombre", latin: "Cucumis sativus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume fruit rafraîchissant, consommé cru en salade." },
           { name: "Échalote", latin: "Allium ascalonicum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à bulbe similaire à l'oignon, mais au goût plus fin." },
           { name: "Absinthe", latin: "Artemisia absinthium", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante très amère, aromatique, utilisée pour fabriquer la liqueur d'absinthe (autrefois interdite)." },
           { name: "Faucille", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil agricole manuel à lame courbe pour couper l'herbe ou les céréales." },
           { name: "Coriandre", latin: "Coriandrum sativum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aromatique dont on utilise les feuilles (goût particulier) et les graines (épice)." },
           { name: "Artichaut", latin: "Cynara cardunculus var. scolymus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légume fleur dont on consomme le réceptacle charnu ('fond') et la base des bractées ('feuilles')." },
           { name: "Girofle", latin: "Syzygium aromaticum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Bouton floral séché du giroflier, épice au parfum puissant utilisée en cuisine et pour ses vertus antiseptiques (clou de girofle)." },
           { name: "Lavande", latin: "Lavandula angustifolia", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbrisseau très parfumé aux fleurs bleues ou violettes, emblème de la Provence." },
           { name: "Chamois", latin: "Rupicapra rupicapra", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Mammifère agile des montagnes, proche de la chèvre sauvage." }, // Animal sauvage
           { name: "Tabac", latin: "Nicotiana tabacum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont les feuilles séchées sont utilisées pour fabriquer cigarettes, cigares, etc., contenant de la nicotine." },
           { name: "Groseille", latin: "Ribes rubrum / Ribes uva-crispa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Petite baie rouge acidulée (groseille à grappes) ou fruit plus gros (groseille à maquereau)." },
           { name: "Gesse", latin: "Lathyrus sativus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légumineuse dont les graines (gesse commune) peuvent être toxiques si consommées en excès." },
           { name: "Cerise", latin: "Prunus avium / Prunus cerasus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Petit fruit rouge charnu et sucré, porté par le cerisier." },
           { name: "Parc", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Terrain clos destiné à contenir des animaux ou espace vert aménagé pour la promenade." },
           { name: "Menthe", latin: "Mentha", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aromatique très parfumée et rafraîchissante, utilisée en cuisine, infusions, confiserie." },
           { name: "Cumin", latin: "Cuminum cyminum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Épice aux graines très parfumées, utilisée dans les cuisines orientale, indienne et mexicaine." },
           { name: "Haricot", latin: "Phaseolus vulgaris", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légumineuse cultivée pour ses gousses (haricot vert) ou ses graines sèches." },
           { name: "Orcanette", latin: "Alkanna tinctoria", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante méditerranéenne dont la racine fournit une teinture rouge." },
           { name: "Pintade", latin: "Numida meleagris", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Volaille originaire d'Afrique, au plumage gris perlé et cri caractéristique." },
           { name: "Sauge", latin: "Salvia officinalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aromatique et médicinale aux feuilles veloutées, utilisée en cuisine et pour ses vertus." },
           { name: "Ail", latin: "Allium sativum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à bulbe composée de gousses ('caïeux'), condiment puissant et essentiel en cuisine." },
           { name: "Vesce", latin: "Vicia sativa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légumineuse fourragère ou sauvage, grimpante, aux fleurs souvent pourpres." },
           { name: "Blé", latin: "Triticum aestivum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Céréale la plus cultivée au monde, base de l'alimentation (pain, pâtes)." },
           { name: "Chalemie", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Ancien instrument de musique à vent et anche double, ancêtre du hautbois." } // Instrument - inattendu
        ],
         // Thermidor (Été) - Mois 11
        [
            { name: "Épeautre", latin: "Triticum spelta", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Variété ancienne de blé, plus rustique et nutritive ('grand épeautre')." },
            { name: "Bouillon-blanc", latin: "Verbascum thapsus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grande plante bisannuelle velue aux fleurs jaunes, utilisée pour les affections respiratoires." },
            { name: "Melon", latin: "Cucumis melo", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit d'été rafraîchissant, sucré et parfumé." },
            { name: "Ivraie", latin: "Lolium temulentum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Graminée adventice des céréales, dont les grains peuvent être toxiques (ivraie enivrante)." },
            { name: "Bélier", latin: "Ovis aries (mâle)", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Mâle reproducteur du mouton, symbole de force et de virilité, parfois d'entêtement." },
            { name: "Prêle", latin: "Equisetum arvense", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante primitive sans fleur ('queue-de-cheval'), riche en silice, reminéralisante." },
            { name: "Armoise", latin: "Artemisia vulgaris", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aromatique commune, aux propriétés médicinales (digestives)." },
            { name: "Carthame", latin: "Carthamus tinctorius", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante ressemblant au chardon, cultivée pour ses fleurs (colorant 'safran bâtard') et son huile." },
            { name: "Mûre", latin: "Rubus fruticosus / Morus nigra", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit noir de la ronce (sauvage) ou du mûrier (arbre)." },
            { name: "Arrosoir", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Récipient muni d'une pomme percée pour arroser les plantes délicatement." },
            { name: "Panic", latin: "Panicum / Setaria", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Genre de graminées dont certaines sont cultivées comme céréales secondaires (millet) ou fourrage." },
            { name: "Salicorne", latin: "Salicornia europaea", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante succulente des milieux salés ('cornichon de mer'), comestible." },
            { name: "Abricot", latin: "Prunus armeniaca", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit orange et velouté, à noyau, parfumé et sucré." },
            { name: "Basilic", latin: "Ocimum basilicum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante aromatique essentielle de la cuisine méditerranéenne (pesto), au parfum puissant." },
            { name: "Brebis", latin: "Ovis aries (femelle)", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Femelle du mouton, élevée pour sa laine, son lait et sa viande (agnelle)." },
            { name: "Guimauve", latin: "Althaea officinalis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante émolliente dont la racine servait à fabriquer la confiserie du même nom." },
            { name: "Lin", latin: "Linum usitatissimum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante cultivée pour ses fibres textiles (lin) et ses graines oléagineuses." },
            { name: "Amande", latin: "Prunus dulcis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit de l'amandier, dont on consomme la graine (amande douce ou amère)." },
            { name: "Gentiane", latin: "Gentiana lutea", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante de montagne dont la racine très amère est utilisée pour fabriquer des apéritifs et liqueurs." },
            { name: "Écluse", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Ouvrage de canal ou rivière permettant aux bateaux de franchir une dénivellation." },
            { name: "Carline", latin: "Carlina acaulis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Chardon des montagnes dont le capitule sec reste longtemps décoratif." },
            { name: "Câprier", latin: "Capparis spinosa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste méditerranéen dont on consomme les boutons floraux (câpres) et les fruits (caprons) confits au vinaigre." },
            { name: "Lentille", latin: "Lens culinaris", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Légumineuse dont les petites graines sèches sont très nutritives." },
            { name: "Aunée", latin: "Inula helenium", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grande plante dont la racine aromatique était utilisée pour les affections pulmonaires." },
            { name: "Loutre", latin: "Lutra lutra", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Mammifère semi-aquatique carnivore, excellent nageur, vivant près des cours d'eau." },
            { name: "Myrte", latin: "Myrtus communis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste aromatique méditerranéen aux fleurs blanches et baies sombres." },
            { name: "Colza", latin: "Brassica napus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante cultivée pour ses graines riches en huile (huile de colza) et comme fourrage." },
            { name: "Lupin", latin: "Lupinus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante (parfois toxique) aux belles grappes de fleurs, cultivée comme engrais vert ou pour ses graines (lupin doux)." },
            { name: "Coton", latin: "Gossypium", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fibre végétale issue du cotonnier, utilisée massivement pour l'industrie textile." },
            { name: "Moulin", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Machine permettant de moudre le grain (moulin à farine) ou utilisant la force du vent (moulin à vent) ou de l'eau (moulin à eau)." }
        ],
        // Fructidor (Été) - Mois 12
        [
            { name: "Prune", latin: "Prunus domestica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit à noyau charnu, sucré, de couleur variable (violette, jaune...), séché donne le pruneau." },
            { name: "Millet", latin: "Panicum miliaceum / Setaria italica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Céréale secondaire à petites graines, cultivée en Afrique et Asie, sans gluten." },
            { name: "Lycoperdon", latin: "Lycoperdon perlatum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Champignon commun ('Vesse-de-loup') qui libère ses spores en nuage de poussière." },
            { name: "Escourgeon", latin: "Hordeum vulgare var. hexastichon", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Variété d'orge à six rangs de grains, semée en automne." },
            { name: "Saumon", latin: "Salmo salar", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grand poisson migrateur d'eau douce et salée, apprécié pour sa chair rose." },
            { name: "Tubéreuse", latin: "Polianthes tuberosa", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante à bulbe aux fleurs blanches très parfumées, utilisée en parfumerie." },
            { name: "Sucrion", latin: "Hordeum vulgare var. distichon?", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Orge de printemps ('escourgeon d'été'), orge à deux rangs." }, // Souvent assimilé à l'orge de printemps
            { name: "Apocyn", latin: "Apocynum cannabinum?", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante d'Amérique du Nord ('Herbe à la puce'), toxique, fibres utilisées par les Amérindiens." }, // Apocyn chanvrin
            { name: "Réglisse", latin: "Glycyrrhiza glabra", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont la racine au goût sucré caractéristique est utilisée en confiserie et pharmacie." },
            { name: "Échelle", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Outil permettant d'accéder à des endroits en hauteur, constitué de montants et d'échelons." },
            { name: "Pastèque", latin: "Citrullus lanatus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Très gros fruit d'été à chair rouge et aqueuse, très désaltérant ('Melon d'eau')." },
            { name: "Fenouil", latin: "Foeniculum vulgare", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante dont le bulbe (légume), les feuilles (aromate) et les graines (épice) ont un goût anisé." },
            { name: "Épine-vinette", latin: "Berberis vulgaris", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste épineux aux baies rouges acides comestibles (vinettes), mais hôte de la rouille du blé." },
            { name: "Noix", latin: "Juglans regia", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit à coque du noyer, dont on consomme le cerneau riche en huile." },
            { name: "Truite", latin: "Salmo trutta / Oncorhynchus mykiss", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Poisson d'eau vive de la famille du saumon, apprécié des pêcheurs et gastronomes." },
            { name: "Citron", latin: "Citrus limon", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Agrume acide jaune, riche en vitamine C, utilisé comme condiment et en boisson." },
            { name: "Cardère", latin: "Dipsacus fullonum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante bisannuelle aux capitules épineux ('Cabaret des oiseaux'), utilisés autrefois pour carder la laine." },
            { name: "Nerprun", latin: "Rhamnus cathartica", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbuste dont les baies noires sont purgatives et toxiques." },
            { name: "Tagette", latin: "Tagetes", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante ornementale ('Œillet d'Inde', 'Rose d'Inde') aux fleurs jaunes ou oranges, à l'odeur forte, répulsive pour certains insectes." },
            { name: "Hotte", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grand panier en osier ou autre matière, porté sur le dos pour transporter la vendange, du bois, etc." },
            { name: "Églantier", latin: "Rosa canina", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Rosier sauvage aux fleurs simples roses ou blanches, dont les fruits (cynorhodons ou 'gratte-cul') sont riches en vitamine C." },
            { name: "Noisette", latin: "Corylus avellana", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fruit sec à coque de l'avelinier (noisetier)." }, // Répétition ? (Cf Avelinier Pluviose, Noisetier Guède)
            { name: "Houblon", latin: "Humulus lupulus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante grimpante dont les cônes femelles sont utilisés pour aromatiser et conserver la bière." },
            { name: "Sorgho", latin: "Sorghum bicolor", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Céréale résistante à la sécheresse, cultivée en Afrique et Asie pour ses grains et comme fourrage." },
            { name: "Écrevisse", latin: "Astacus astacus / Austropotamobius pallipes", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Crustacé d'eau douce ressemblant à un petit homard, mets délicat." },
            { name: "Bigarade", latin: "Citrus aurantium", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Orange amère, dont le zeste et la fleur (fleur d'oranger) sont utilisés en parfumerie, confiserie et pour les liqueurs." },
            { name: "Verge d'or", latin: "Solidago virgaurea / Solidago canadensis", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante vivace à hautes tiges de fleurs jaunes, fleurissant en fin d'été." },
            { name: "Maïs", latin: "Zea mays", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grande céréale originaire d'Amérique, cultivée pour ses grains (alimentation humaine/animale) et comme fourrage." },
            { name: "Marron", latin: "Castanea sativa (variété)", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grosse châtaigne non cloisonnée, utilisée pour les marrons glacés." }, // À distinguer du marron d'Inde toxique.
            { name: "Panier", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Contenant tressé (osier, jonc...) servant à transporter ou ranger divers objets." }
        ]
    ];

    // --- Data for Complementary Days ---
    const complementaryItems = [
        { name: "Jour de la Vertu", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Célébration des qualités morales et civiques." },
        { name: "Jour du Génie", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Hommage à l'intelligence créatrice, aux inventeurs et aux artistes." },
        { name: "Jour du Travail", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Reconnaissance de l'effort productif et de l'artisanat." },
        { name: "Jour de l'Opinion", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Fête de la liberté d'expression et du débat public." },
        { name: "Jour des Récompenses", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Cérémonie pour honorer les mérites et les contributions à la nation." },
        { name: "Jour de la Révolution", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Commémoration de la chute de la monarchie et fondation de la République (seulement les années sextiles)." }
    ];

    // --- Fonctions Utilitaires ---
    function isGregorianLeap(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    function isRepublicanSextileRomme(an) {
        if (an <= 0) return false;
        return (an % 4 === 0 && an % 100 !== 0) || (an % 400 === 0);
    }

    function gregorianToJDN(d, m, y) {
        if (m <= 2) { y -= 1; m += 12; }
        const A = Math.floor(y / 100);
        const B = 2 - A + Math.floor(A / 4);
        const JDN = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
        return Math.floor(JDN);
    }

    function jdnToGregorian(jdn) { // Utile pour le debug ou l'affichage si besoin
        const L = jdn + 68569;
        const N = Math.floor(4 * L / 146097);
        const L2 = L - Math.floor((146097 * N + 3) / 4);
        const I = Math.floor(4000 * (L2 + 1) / 1461001);
        const L3 = L2 - Math.floor(1461 * I / 4) + 31;
        const J = Math.floor(80 * L3 / 2447);
        const D = L3 - Math.floor(2447 * J / 80);
        const L4 = Math.floor(J / 11);
        const M = J + 2 - 12 * L4;
        const Y = 100 * (N - 49) + I + L4;
        return { day: D, month: M, year: Y };
    }

    function toRoman(num) {
        if (num <= 0 || num >= 4000) return num; // Limite simple
        const romanMap = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
        let roman = '';
        for (let key in romanMap) {
            while (num >= romanMap[key]) {
                roman += key;
                num -= romanMap[key];
            }
        }
        return roman;
    }

    // --- Pré-calcul des JDN des Équinoxes ---
    let equinoxJDNs = {};
// MODIFICATION POUR DEBUGGING
function precomputeEquinoxJDNs() {
    console.log("Début precomputeEquinoxJDNs..."); // Vérifie si la fonction est appelée
    equinoxJDNs = {}; // Réinitialise au cas où
    let count = 0;
    try {
        for (const year in equinoxDates) {
            if (equinoxDates.hasOwnProperty(year)) {
                const date = equinoxDates[year];
                 // Ajout d'une vérification plus robuste des données
                 if (date && typeof date.day === 'number' && typeof date.month === 'number' && !isNaN(parseInt(year, 10))) {
                    equinoxJDNs[year] = gregorianToJDN(date.day, date.month, parseInt(year, 10));
                    count++;
                    // Log pour les années importantes
                    if (year === '1792' || year === '2199') {
                        console.log(`JDN précalculé pour ${year}: ${equinoxJDNs[year]}`);
                    }
                 } else {
                     console.error(`Donnée invalide dans equinoxDates pour l'année ${year}:`, date);
                 }
            }
        }
        console.log(`Nombre d'années traitées dans equinoxDates: ${count}`);

        // Ajouter l'entrée pour l'année après maxYear (2200)
        const lastKnownYear = 2199;
        if (equinoxJDNs[lastKnownYear]) { // Vérifie si le JDN pour 2199 existe
             const anApprox2199 = lastKnownYear - 1791;
             const jdnAn2200Approx = equinoxJDNs[lastKnownYear] + (isRepublicanSextileRomme(anApprox2199) ? 366 : 365);
             equinoxJDNs[lastKnownYear + 1] = jdnAn2200Approx;
             console.log(`JDN estimé pour ${lastKnownYear + 1}: ${equinoxJDNs[lastKnownYear + 1]}`);
        } else {
             console.error(`Impossible de précalculer JDN pour ${lastKnownYear}, JDN pour ${lastKnownYear + 1} ne peut être estimé.`);
        }
        console.log("Fin precomputeEquinoxJDNs.");

    } catch (error) {
         console.error("Erreur pendant precomputeEquinoxJDNs:", error);
    }
}
// FIN MODIFICATION POUR DEBUGGING

    // --- Calcul Principal (Méthode Équinoxe) ---
    function calculateEquinoxDate(gDay, gMonth, gYear) {
        const minYear = 1792;
        const maxYear = 2199; // Limite des données d'équinoxe

        // ... (Validation date grégorienne reste identique) ...
        if (!gDay || !gMonth || !gYear) return { error: "Date grégorienne incomplète." };
        const daysInMonth = [0, 31, isGregorianLeap(gYear) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (gMonth < 1 || gMonth > 12 || gDay < 1 || gDay > daysInMonth[gMonth]) {
             return { error: "Date grégorienne invalide." };
        }

        const inputJDN = gregorianToJDN(gDay, gMonth, gYear);
        const firstEquinoxJDN = equinoxJDNs[minYear];
        const nextEquinoxJDN = equinoxJDNs[maxYear + 1]; // JDN début An qui commence en 2200

        if (!firstEquinoxJDN || !nextEquinoxJDN) {
            return { error: "Données JDN équinoxe manquantes." };
        }
        if (inputJDN < firstEquinoxJDN) {
            return { error: "Date antérieure au 1er Vendémiaire An I (22 Sept 1792)." };
        }
        if (inputJDN >= nextEquinoxJDN) {
             return { error: `Date postérieure à la fin de l'An ${maxYear-1791} (données d'équinoxe limitées à ${maxYear}). Méthode Romme seulement.`, useRommeOnly: true };
        }

        // Trouver l'année républicaine (An) correspondante
        let currentAn = 1;
        let startAnJDN = -1;
        let endAnJDN = -1;
        // Optmisation : on peut estimer l'année grégorienne de départ
        let startLookupYear = Math.max(minYear, gYear - 1);

        for (let year = startLookupYear; year <= maxYear + 1; year++) { // Itérer sur les années grégoriennes où commencent les années républicaines
            const an = year - 1791; // An républicain qui commence cette année grégorienne
            const currentStartJDN = equinoxJDNs[year];
            const nextStartJDN = equinoxJDNs[year + 1]; // Peut être undefined si year = maxYear + 1

            if (currentStartJDN === undefined) continue; // Skip si donnée JDN manque pour l'année

            // Cas spécial : dernière année de données
            if (year === maxYear + 1 && inputJDN >= currentStartJDN) {
                // Si la date est >= au début de l'année APRES la dernière année connue (ex: 2200)
                // Ceci est normalement attrapé par la validation initiale, mais sécurité
                 return { error: `Date postérieure à la fin de l'An ${maxYear-1791}.`, useRommeOnly: true };
            }

            if (nextStartJDN === undefined && year <= maxYear) {
                 // Ne devrait pas arriver avec le précalcul, mais sécurité
                 return { error: `Données JDN équinoxe manquantes pour l'année ${year + 1}.` };
            }

            // Si la date est dans l'année républicaine 'an' qui commence en 'year'
            if (inputJDN >= currentStartJDN && (nextStartJDN === undefined || inputJDN < nextStartJDN)) {
                currentAn = an;
                startAnJDN = currentStartJDN;
                endAnJDN = nextStartJDN; // Peut être undefined si on est dans la toute dernière année calculée (ne devrait pas arriver ici)
                break;
            }
             // Si on a dépassé la date sans la trouver (ne devrait pas arriver)
             if(currentStartJDN > inputJDN) {
                // console.error("Overshot JDN search");
                 break;
             }
        }


        if (startAnJDN === -1 || endAnJDN === undefined) { // Vérifier si on a trouvé et si la fin est définie
            return { error: "Impossible de déterminer l'année républicaine (Équinoxe)." };
        }

        // Calculer le jour dans l'année républicaine (base 1)
        const dayOfYear = inputJDN - startAnJDN + 1;
        const yearLength = endAnJDN - startAnJDN;
        const isSextile = (yearLength === 366);

        // Déterminer mois, jour, nom du jour, fête
        let republicanDay, republicanMonthIndex, decadeDayName;
        let formattedDate = "";
        let feteInfo = { name: "Inconnue", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "" };

        if (dayOfYear > 360) { // Jour complémentaire
            const complementaryDayIndex = dayOfYear - 361; // Index 0-based
            if (complementaryDayIndex < 0 || complementaryDayIndex >= (isSextile ? 6 : 5)) {
                return { error: "Erreur: Jour complémentaire invalide." };
            }
            // Utiliser le nom générique pour la date formatée
            formattedDate = `${complementaryDaysNames[complementaryDayIndex]} An ${toRoman(currentAn)}`;
            // Récupérer les détails depuis complementaryItems
            if(complementaryItems[complementaryDayIndex]) {
                feteInfo = complementaryItems[complementaryDayIndex];
            } else {
                feteInfo.name = complementaryDaysNames[complementaryDayIndex]; // Fallback
            }

        } else { // Jour normal
            republicanMonthIndex = Math.floor((dayOfYear - 1) / 30);
            republicanDay = (dayOfYear - 1) % 30 + 1;
            decadeDayName = decadeDays[(republicanDay - 1) % 10];
            const republicanMonthName = republicanMonths[republicanMonthIndex];
            formattedDate = `${decadeDayName} ${republicanDay} ${republicanMonthName} An ${toRoman(currentAn)}`;

            // Récupérer les détails depuis dailyItems
            try {
                 // dayIndex est l'index dans le tableau du mois (0 à 29)
                 const dayIndex = (dayOfYear - 1) % 30;
                 if (dailyItems[republicanMonthIndex] && dailyItems[republicanMonthIndex][dayIndex]) {
                    feteInfo = dailyItems[republicanMonthIndex][dayIndex];
                 }
            } catch (e) {
                console.error(`Erreur accès dailyItems[${republicanMonthIndex}][${(dayOfYear - 1) % 30}]`, e);
                // feteInfo reste "Inconnue"
            }
        }

        return { 
    date: formattedDate, 
    fete: feteInfo.name, 
    latin: feteInfo.latin, 
    author: feteInfo.author, // Ajouté
    description: feteInfo.description,
    urlImage: feteInfo.urlImage, // Ajouté
    urlWiki: feteInfo.urlWiki,   // Ajouté
    urlEncy: feteInfo.urlEncy    // Ajouté
};
    }


// --- Calcul Secondaire (Méthode Romme) ---
    function calculateRommeDate(gDay, gMonth, gYear) {
         // Validation simple (on suppose la date grégorienne valide si elle passe l'autre fonction)
        if (!gDay || !gMonth || !gYear) return { error: "Date grégorienne incomplète." };

        const inputJDN = gregorianToJDN(gDay, gMonth, gYear);
        const republicanEpochJDN = 2375839; // 1 Vendémiaire An I

        if (inputJDN < republicanEpochJDN) {
             // Pas d'erreur ici, car l'autre fonction gère déjà ça.
             // On pourrait retourner une string vide ou null.
            return { date: "N/A (avant An I)" };
        }

        // Déterminer l'année républicaine (An) selon Romme
        let currentAnRomme = 1;
        let startOfYearJDNRomme = republicanEpochJDN;
        let nextYearStartJDNRomme;

        while (true) {
            const daysInCurrentAnRomme = isRepublicanSextileRomme(currentAnRomme) ? 366 : 365;
            nextYearStartJDNRomme = startOfYearJDNRomme + daysInCurrentAnRomme;

            if (inputJDN >= startOfYearJDNRomme && inputJDN < nextYearStartJDNRomme) {
                break; // Found the correct An
            }
            if (inputJDN < startOfYearJDNRomme) { // Safeguard
                 return { error: "Erreur calcul An (Romme)." };
            }
            startOfYearJDNRomme = nextYearStartJDNRomme;
            currentAnRomme++;
            if (currentAnRomme > 2000) return { error: "Erreur boucle An (Romme)."}; // Safety break
        }

        // Calculer le jour dans l'année (Romme)
        const dayOfYearRomme = inputJDN - startOfYearJDNRomme + 1;
        const isSextileRomme = isRepublicanSextileRomme(currentAnRomme);

        // Formatter la date Romme
        let formattedDateRomme = "";
        if (dayOfYearRomme > 360) { // Jour complémentaire (Romme)
            const complementaryDayIndexRomme = dayOfYearRomme - 360 - 1;
            if (complementaryDayIndexRomme < 0 || complementaryDayIndexRomme >= (isSextileRomme ? 6 : 5)) {
                 return { error: "Erreur: Jour complémentaire invalide (Romme)." };
            }
             // On affiche juste le nom simplifié ici
             formattedDateRomme = `Jour Comp. ${complementaryDayIndexRomme + 1} An ${toRoman(currentAnRomme)}`;
        } else { // Jour normal (Romme)
            const monthIndexRomme = Math.floor((dayOfYearRomme - 1) / 30);
            const dayRomme = (dayOfYearRomme - 1) % 30 + 1;
            const monthNameRomme = republicanMonths[monthIndexRomme];
             // Version simplifiée sans nom de décade pour la note
             formattedDateRomme = `${dayRomme} ${monthNameRomme} An ${toRoman(currentAnRomme)}`;
        }

        return { date: formattedDateRomme };
    }

// --- Event Listener ---
    convertButton.addEventListener('click', () => {
        // Récupération des valeurs d'entrée
        const day = parseInt(dayInput.value, 10);
        const month = parseInt(monthInput.value, 10);
        const year = parseInt(yearInput.value, 10);

        // Références aux éléments d'affichage (vérifiez que toutes sont bien déclarées au début du script)
        const resultDisplayEquinox = document.getElementById('republican-date-equinox');
        const feteNameDisplay = document.getElementById('fete-name'); 
        const feteLatinDisplay = document.getElementById('fete-latin');
        const feteAuthorDisplay = document.getElementById('fete-author');
        const feteLatinAuthorLine = document.getElementById('fete-latin-author');
        const feteDescriptionDisplay = document.getElementById('fete-description');
        const resultDisplayRomme = document.getElementById('romme-date-info');
        const errorDisplay = document.getElementById('error-area');
        const leftColumnTitle = document.getElementById('left-column-title'); // Titre colonne gauche
        const wikiLink = document.getElementById('fete-wiki-link');
        const image = document.getElementById('fete-image');
        const imagePlaceholder = document.getElementById('image-placeholder');
        const encycloFrame = document.getElementById('encyclopedia-frame');
        const encycloPlaceholder = document.getElementById('encyclopedia-placeholder');

        // --- Reset de tous les affichages ---
        errorDisplay.textContent = '';
        errorDisplay.style.display = 'none';
        resultDisplayEquinox.textContent = '---';
        feteNameDisplay.textContent = 'Fête du jour : ---';
        feteLatinDisplay.textContent = '';
        feteAuthorDisplay.textContent = '';
        feteLatinAuthorLine.style.display = 'none'; // Cacher par défaut
        feteDescriptionDisplay.textContent = '---';
        resultDisplayRomme.textContent = 'Date selon méthode Romme : ---';
        leftColumnTitle.textContent = 'Illustration'; // Titre colonne gauche par défaut
        // Reset colonne gauche
        wikiLink.style.display = 'none';
        wikiLink.href = '#';
        wikiLink.removeAttribute('target'); // Assurer qu'il n'y a pas de target si pas de lien
        image.style.display = 'none';
        image.src = '';
        image.alt = '';
        imagePlaceholder.style.display = 'block';
        // Reset colonne droite
        encycloFrame.style.display = 'none';
        encycloFrame.src = 'about:blank';
        encycloPlaceholder.style.display = 'block';

        // --- Calcul et Affichage (Méthode Équinoxe) ---
        const resultEquinox = calculateEquinoxDate(day, month, year);

        // --- Gestion des Erreurs et Affichage ---
        if (resultEquinox.error && !resultEquinox.useRommeOnly) {
            // Erreur bloquante (date invalide, avant An I, etc.)
            errorDisplay.textContent = resultEquinox.error;
            errorDisplay.style.display = 'block';
            // Assurer que tout est bien reset (déjà fait au début, mais par sécurité)
            leftColumnTitle.textContent = 'Illustration'; 
            feteLatinAuthorLine.style.display = 'none';

        } else { 
            // Pas d'erreur bloquante OU date hors plage équinoxe

            // Affichage principal basé sur Equinoxe (si dans la plage)
            if (resultEquinox.date) { 
                // Mise à jour colonne centrale
                resultDisplayEquinox.textContent = resultEquinox.date;
                leftColumnTitle.textContent = resultEquinox.date; // Met à jour le titre de la colonne gauche
                feteNameDisplay.textContent = `Fête du jour : ${resultEquinox.fete || 'Inconnue'}`;
                feteLatinDisplay.textContent = resultEquinox.latin || '';
                feteAuthorDisplay.textContent = resultEquinox.author || '';
                feteDescriptionDisplay.textContent = resultEquinox.description || '';

                // Afficher la ligne Latin/Auteur seulement si l'un des deux existe
                if (resultEquinox.latin || resultEquinox.author) {
                    feteLatinAuthorLine.style.display = 'block'; 
                } else {
                    feteLatinAuthorLine.style.display = 'none';
                }

                // Mise à jour Colonne Gauche (Image/Wiki)
                if (resultEquinox.urlImage) {
                    image.src = resultEquinox.urlImage;
                    image.alt = `Illustration pour ${resultEquinox.fete || 'fête du jour'}`;
                    image.style.display = 'block';
                    wikiLink.style.display = 'inline-block'; 
                    imagePlaceholder.style.display = 'none';
                    // Mettre le lien Wiki s'il existe
                    if (resultEquinox.urlWiki) {
                        wikiLink.href = resultEquinox.urlWiki;
                        wikiLink.target = '_blank'; // Ouvrir dans un nouvel onglet
                    } else {
                        wikiLink.href = '#'; // Lien désactivé si pas d'URL Wiki
                        wikiLink.removeAttribute('target');
                    }
                } else {
                    // Pas d'image: s'assurer que le placeholder est visible
                    imagePlaceholder.style.display = 'block';
                    wikiLink.style.display = 'none';
                    image.style.display = 'none';
                }

                // Mise à jour Colonne Droite (Encyclopédie)
                if (resultEquinox.urlEncy) {
                    encycloFrame.src = resultEquinox.urlEncy;
                    encycloFrame.style.display = 'block';
                    encycloPlaceholder.style.display = 'none';
                } else {
                    // Pas d'URL encyclopédie: s'assurer que le placeholder est visible
                    encycloPlaceholder.style.display = 'block';
                    encycloFrame.style.display = 'none';
                    encycloFrame.src = 'about:blank';
                }
            }
            
            // Gestion spécifique si date hors plage équinoxe (après 2199)
             if (resultEquinox.useRommeOnly) {
                 resultDisplayEquinox.textContent = 'N/A (hors plage équinoxe)';
                 leftColumnTitle.textContent = 'Date hors plage équinoxe'; // Indiquer pourquoi il n'y a pas d'infos associées
                 feteNameDisplay.textContent = 'Fête du jour : N/A';
                 feteLatinDisplay.textContent = '';
                 feteAuthorDisplay.textContent = '';
                 feteLatinAuthorLine.style.display = 'none';
                 feteDescriptionDisplay.textContent = '';
                 // Les colonnes latérales restent à leur état reset (placeholders visibles)
                 errorDisplay.textContent = resultEquinox.error; // Afficher l'info/erreur
                 errorDisplay.style.display = 'block';
             }

             // --- Calcul et Affichage (Méthode Romme) ---
             // Calculer et afficher Romme dans tous les cas où la date est valide (>= An I)
             const inputJDNCheck = gregorianToJDN(day, month, year);
             const republicanEpochJDN = 2375840; // JDN pour 22 Sept 1792
             if (inputJDNCheck >= republicanEpochJDN) {
                  const resultRomme = calculateRommeDate(day, month, year);
                  if (resultRomme.error) {
                      resultDisplayRomme.textContent = `Date selon méthode Romme : Erreur (${resultRomme.error})`;
                  } else if (resultRomme.date) {
                      resultDisplayRomme.textContent = `Date selon méthode Romme : ${resultRomme.date}`;
                  }
             } else {
                 // Si la date est avant An I (normalement déjà géré par resultEquinox.error)
                 resultDisplayRomme.textContent = `Date selon méthode Romme : N/A (avant An I)`;
             }
        }
    }); // Fin de l'event listener
	
	
    // --- Initialisation ---
    precomputeEquinoxJDNs();
    yearInput.max = 2199;
	
	    // --- Pré-remplir et Convertir la Date Actuelle ---
    function prefillAndConvertCurrentDate() {
        const today = new Date();
        const currentDay = today.getDate();
        const currentMonth = today.getMonth() + 1; // getMonth() est 0-indexé (Janvier = 0)
        const currentYear = today.getFullYear();

        // Vérifier si la date actuelle est dans la plage valide (pour les données d'équinoxe)
        if (currentYear >= 1792 && currentYear <= 2199) {
            // Mettre les valeurs dans les champs input
            dayInput.value = currentDay;
            monthInput.value = currentMonth;
            yearInput.value = currentYear;

            // Déclencher programmatiquement le clic sur le bouton de conversion
            // Cela exécutera la logique déjà présente dans l'event listener du bouton
            convertButton.click(); 
            
            console.log(`Pré-rempli avec la date : ${currentDay}/${currentMonth}/${currentYear} et conversion déclenchée.`);
        } else {
            // Si la date actuelle est hors plage, on ne pré-remplit pas pour éviter les erreurs
            // liées aux données d'équinoxe manquantes pour la date principale.
            console.log(`La date actuelle (${currentDay}/${currentMonth}/${currentYear}) est hors de la plage supportée (1792-2199) pour le pré-remplissage automatique.`);
            // Optionnel : on pourrait quand même pré-remplir et afficher N/A, 
            // mais il est plus simple de ne rien faire ici.
        }
    }

    prefillAndConvertCurrentDate(); // Appeler la fonction pour exécuter la logique


});
