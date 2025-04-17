document.addEventListener('DOMContentLoaded', () => {
    // --- Element References ---
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const convertButton = document.getElementById('convert-button');
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
    let minEquinoxDataYear = null;
    let maxEquinoxDataYear = null;
	
    // --- Constantes Calendrier Républicain ---
    const republicanMonths = [
        "Vendémiaire", "Brumaire", "Frimaire", "Nivôse", "Pluviôse", "Ventôse",
        "Germinal", "Floréal", "Prairial", "Messidor", "Thermidor", "Fructidor"
    ];
    const decadeDays = [
        "Primidi", "Duodi", "Tridi", "Quartidi", "Quintidi",
        "Sextidi", "Septidi", "Octidi", "Nonidi", "Décadi"
    ];
    const complementaryDaysNames = [ /* Noms génériques */
        "Jour de la Vertu", "Jour du Génie", "Jour du Travail",
        "Jour de l'Opinion", "Jour des Récompenses", "Jour de la Révolution"
    ];

    // --- Données Équinoxe Automne (1792-2199) ---
    const equinoxDates = { /* Copiez ici l'objet equinoxData de la réponse précédente */
// --- DEBUT Données Equinoxe 1000-1049 ---
        // Converties en Proleptique Grégorien (+6 jours)
        1000: { month: 9, day: 23 }, // 17 Sep Julian
        1001: { month: 9, day: 23 }, // 17 Sep Julian
        1002: { month: 9, day: 24 }, // 18 Sep Julian
        1003: { month: 9, day: 24 }, // 18 Sep Julian
        1004: { month: 9, day: 23 }, // 17 Sep Julian
        1005: { month: 9, day: 23 }, // 17 Sep Julian
        1006: { month: 9, day: 24 }, // 18 Sep Julian
        1007: { month: 9, day: 24 }, // 18 Sep Julian
        1008: { month: 9, day: 23 }, // 17 Sep Julian
        1009: { month: 9, day: 23 }, // 17 Sep Julian
        1010: { month: 9, day: 24 }, // 18 Sep Julian
        1011: { month: 9, day: 24 }, // 18 Sep Julian
        1012: { month: 9, day: 23 }, // 17 Sep Julian
        1013: { month: 9, day: 23 }, // 17 Sep Julian
        1014: { month: 9, day: 23 }, // 17 Sep Julian (?) Text: Sep 17 -> Sep 23. Correct.
        1015: { month: 9, day: 24 }, // 18 Sep Julian
        1016: { month: 9, day: 23 }, // 17 Sep Julian
        1017: { month: 9, day: 23 }, // 17 Sep Julian
        1018: { month: 9, day: 23 }, // 17 Sep Julian
        1019: { month: 9, day: 24 }, // 18 Sep Julian
        1020: { month: 9, day: 23 }, // 17 Sep Julian
        1021: { month: 9, day: 23 }, // 17 Sep Julian
        1022: { month: 9, day: 23 }, // 17 Sep Julian
        1023: { month: 9, day: 24 }, // 18 Sep Julian
        1024: { month: 9, day: 23 }, // 17 Sep Julian
        1025: { month: 9, day: 23 }, // 17 Sep Julian
        1026: { month: 9, day: 23 }, // 17 Sep Julian
        1027: { month: 9, day: 24 }, // 18 Sep Julian
        1028: { month: 9, day: 23 }, // 17 Sep Julian
        1029: { month: 9, day: 23 }, // 17 Sep Julian
        1030: { month: 9, day: 23 }, // 17 Sep Julian
        1031: { month: 9, day: 24 }, // 18 Sep Julian
        1032: { month: 9, day: 23 }, // 17 Sep Julian
        1033: { month: 9, day: 23 }, // 17 Sep Julian
        1034: { month: 9, day: 23 }, // 17 Sep Julian
        1035: { month: 9, day: 24 }, // 18 Sep Julian
        1036: { month: 9, day: 23 }, // 17 Sep Julian
        1037: { month: 9, day: 23 }, // 17 Sep Julian
        1038: { month: 9, day: 23 }, // 17 Sep Julian
        1039: { month: 9, day: 24 }, // 18 Sep Julian
        1040: { month: 9, day: 23 }, // 17 Sep Julian
        1041: { month: 9, day: 23 }, // 17 Sep Julian
        1042: { month: 9, day: 23 }, // 17 Sep Julian
        1043: { month: 9, day: 23 }, // 17 Sep Julian (?) Text: Sep 17 -> Sep 23. Correct.
        1044: { month: 9, day: 23 }, // 17 Sep Julian
        1045: { month: 9, day: 23 }, // 17 Sep Julian
        1046: { month: 9, day: 23 }, // 17 Sep Julian
        1047: { month: 9, day: 23 }, // 17 Sep Julian
        1048: { month: 9, day: 23 }, // 17 Sep Julian
        1049: { month: 9, day: 23 }, // 17 Sep Julian
        // --- FIN Données Equinoxe 1000-1049 ---
        1050: { month: 9, day: 23 }, // 17 Sep Julian
        1051: { month: 9, day: 23 }, // 17 Sep Julian
        1052: { month: 9, day: 23 }, // 17 Sep Julian
        1053: { month: 9, day: 23 }, // 17 Sep Julian
        1054: { month: 9, day: 23 }, // 17 Sep Julian
        1055: { month: 9, day: 23 }, // 17 Sep Julian
        1056: { month: 9, day: 23 }, // 17 Sep Julian
        1057: { month: 9, day: 23 }, // 17 Sep Julian
        1058: { month: 9, day: 23 }, // 17 Sep Julian
        1059: { month: 9, day: 23 }, // 17 Sep Julian
        1060: { month: 9, day: 23 }, // 17 Sep Julian
        1061: { month: 9, day: 23 }, // 17 Sep Julian
        1062: { month: 9, day: 23 }, // 17 Sep Julian
        1063: { month: 9, day: 23 }, // 17 Sep Julian
        1064: { month: 9, day: 23 }, // 17 Sep Julian
        1065: { month: 9, day: 23 }, // 17 Sep Julian
        1066: { month: 9, day: 23 }, // 17 Sep Julian
        1067: { month: 9, day: 23 }, // 17 Sep Julian
        1068: { month: 9, day: 23 }, // 17 Sep Julian
        1069: { month: 9, day: 23 }, // 17 Sep Julian
        1070: { month: 9, day: 23 }, // 17 Sep Julian
        1071: { month: 9, day: 23 }, // 17 Sep Julian
        1072: { month: 9, day: 23 }, // 17 Sep Julian
        1073: { month: 9, day: 23 }, // 17 Sep Julian
        1074: { month: 9, day: 23 }, // 17 Sep Julian
        1075: { month: 9, day: 23 }, // 17 Sep Julian
        1076: { month: 9, day: 22 }, // 16 Sep Julian (?) Text: Sep 16 -> Sep 22. Correct.
        1077: { month: 9, day: 23 }, // 17 Sep Julian
        1078: { month: 9, day: 23 }, // 17 Sep Julian
        1079: { month: 9, day: 23 }, // 17 Sep Julian
        1080: { month: 9, day: 22 }, // 16 Sep Julian
        1081: { month: 9, day: 23 }, // 17 Sep Julian
        1082: { month: 9, day: 23 }, // 17 Sep Julian
        1083: { month: 9, day: 23 }, // 17 Sep Julian
        1084: { month: 9, day: 22 }, // 16 Sep Julian
        1085: { month: 9, day: 23 }, // 17 Sep Julian
        1086: { month: 9, day: 23 }, // 17 Sep Julian
        1087: { month: 9, day: 23 }, // 17 Sep Julian
        1088: { month: 9, day: 22 }, // 16 Sep Julian
        1089: { month: 9, day: 23 }, // 17 Sep Julian
        1090: { month: 9, day: 23 }, // 17 Sep Julian
        1091: { month: 9, day: 23 }, // 17 Sep Julian
        1092: { month: 9, day: 22 }, // 16 Sep Julian
        1093: { month: 9, day: 23 }, // 17 Sep Julian
        1094: { month: 9, day: 23 }, // 17 Sep Julian
        1095: { month: 9, day: 23 }, // 17 Sep Julian
        1096: { month: 9, day: 22 }, // 16 Sep Julian
        1097: { month: 9, day: 23 }, // 17 Sep Julian
        1098: { month: 9, day: 23 }, // 17 Sep Julian
        1099: { month: 9, day: 23 }, // 17 Sep Julian
        // --- FIN Données Equinoxe 1050-1099 ---
        1100: { month: 9, day: 23 }, // 16 Sep Julian
        1101: { month: 9, day: 24 }, // 17 Sep Julian
        1102: { month: 9, day: 24 }, // 17 Sep Julian
        1103: { month: 9, day: 24 }, // 17 Sep Julian
        1104: { month: 9, day: 23 }, // 16 Sep Julian
        1105: { month: 9, day: 24 }, // 17 Sep Julian
        1106: { month: 9, day: 24 }, // 17 Sep Julian
        1107: { month: 9, day: 24 }, // 17 Sep Julian
        1108: { month: 9, day: 23 }, // 16 Sep Julian
        1109: { month: 9, day: 23 }, // 16 Sep Julian
        1110: { month: 9, day: 24 }, // 17 Sep Julian
        1111: { month: 9, day: 24 }, // 17 Sep Julian
        1112: { month: 9, day: 23 }, // 16 Sep Julian
        1113: { month: 9, day: 23 }, // 16 Sep Julian
        1114: { month: 9, day: 24 }, // 17 Sep Julian
        1115: { month: 9, day: 24 }, // 17 Sep Julian
        1116: { month: 9, day: 23 }, // 16 Sep Julian
        1117: { month: 9, day: 23 }, // 16 Sep Julian
        1118: { month: 9, day: 24 }, // 17 Sep Julian
        1119: { month: 9, day: 24 }, // 17 Sep Julian
        1120: { month: 9, day: 23 }, // 16 Sep Julian
        1121: { month: 9, day: 23 }, // 16 Sep Julian
        1122: { month: 9, day: 24 }, // 17 Sep Julian
        1123: { month: 9, day: 24 }, // 17 Sep Julian
        1124: { month: 9, day: 23 }, // 16 Sep Julian
        1125: { month: 9, day: 23 }, // 16 Sep Julian
        1126: { month: 9, day: 24 }, // 17 Sep Julian
        1127: { month: 9, day: 24 }, // 17 Sep Julian
        1128: { month: 9, day: 23 }, // 16 Sep Julian
        1129: { month: 9, day: 23 }, // 16 Sep Julian
        1130: { month: 9, day: 24 }, // 17 Sep Julian
        1131: { month: 9, day: 24 }, // 17 Sep Julian
        1132: { month: 9, day: 23 }, // 16 Sep Julian
        1133: { month: 9, day: 23 }, // 16 Sep Julian
        1134: { month: 9, day: 24 }, // 17 Sep Julian
        1135: { month: 9, day: 24 }, // 17 Sep Julian
        1136: { month: 9, day: 23 }, // 16 Sep Julian
        1137: { month: 9, day: 23 }, // 16 Sep Julian
        1138: { month: 9, day: 24 }, // 17 Sep Julian
        1139: { month: 9, day: 24 }, // 17 Sep Julian
        1140: { month: 9, day: 23 }, // 16 Sep Julian
        1141: { month: 9, day: 23 }, // 16 Sep Julian
        1142: { month: 9, day: 23 }, // 16 Sep Julian (?) Text: Sep 16 -> Sep 23. Correct.
        1143: { month: 9, day: 24 }, // 17 Sep Julian
        1144: { month: 9, day: 23 }, // 16 Sep Julian
        1145: { month: 9, day: 23 }, // 16 Sep Julian
        1146: { month: 9, day: 23 }, // 16 Sep Julian
        1147: { month: 9, day: 24 }, // 17 Sep Julian
        1148: { month: 9, day: 23 }, // 16 Sep Julian
        1149: { month: 9, day: 23 }, // 16 Sep Julian
        // --- FIN Données Equinoxe 1100-1149 ---
        1150: { month: 9, day: 23 }, // 16 Sep Julian
        1151: { month: 9, day: 24 }, // 17 Sep Julian
        1152: { month: 9, day: 23 }, // 16 Sep Julian
        1153: { month: 9, day: 23 }, // 16 Sep Julian
        1154: { month: 9, day: 23 }, // 16 Sep Julian
        1155: { month: 9, day: 24 }, // 17 Sep Julian
        1156: { month: 9, day: 23 }, // 16 Sep Julian
        1157: { month: 9, day: 23 }, // 16 Sep Julian
        1158: { month: 9, day: 23 }, // 16 Sep Julian
        1159: { month: 9, day: 24 }, // 17 Sep Julian
        1160: { month: 9, day: 23 }, // 16 Sep Julian
        1161: { month: 9, day: 23 }, // 16 Sep Julian
        1162: { month: 9, day: 23 }, // 16 Sep Julian
        1163: { month: 9, day: 24 }, // 17 Sep Julian
        1164: { month: 9, day: 23 }, // 16 Sep Julian
        1165: { month: 9, day: 23 }, // 16 Sep Julian
        1166: { month: 9, day: 23 }, // 16 Sep Julian
        1167: { month: 9, day: 24 }, // 17 Sep Julian
        1168: { month: 9, day: 23 }, // 16 Sep Julian
        1169: { month: 9, day: 23 }, // 16 Sep Julian
        1170: { month: 9, day: 23 }, // 16 Sep Julian
        1171: { month: 9, day: 24 }, // 17 Sep Julian
        1172: { month: 9, day: 23 }, // 16 Sep Julian
        1173: { month: 9, day: 23 }, // 16 Sep Julian
        1174: { month: 9, day: 23 }, // 16 Sep Julian
        1175: { month: 9, day: 23 }, // 16 Sep Julian (?) Text: Sep 16 -> Sep 23. Correct.
        1176: { month: 9, day: 23 }, // 16 Sep Julian
        1177: { month: 9, day: 23 }, // 16 Sep Julian
        1178: { month: 9, day: 23 }, // 16 Sep Julian
        1179: { month: 9, day: 23 }, // 16 Sep Julian
        1180: { month: 9, day: 23 }, // 16 Sep Julian
        1181: { month: 9, day: 23 }, // 16 Sep Julian
        1182: { month: 9, day: 23 }, // 16 Sep Julian
        1183: { month: 9, day: 23 }, // 16 Sep Julian
        1184: { month: 9, day: 23 }, // 16 Sep Julian
        1185: { month: 9, day: 23 }, // 16 Sep Julian
        1186: { month: 9, day: 23 }, // 16 Sep Julian
        1187: { month: 9, day: 23 }, // 16 Sep Julian
        1188: { month: 9, day: 23 }, // 16 Sep Julian
        1189: { month: 9, day: 23 }, // 16 Sep Julian
        1190: { month: 9, day: 23 }, // 16 Sep Julian
        1191: { month: 9, day: 23 }, // 16 Sep Julian
        1192: { month: 9, day: 23 }, // 16 Sep Julian
        1193: { month: 9, day: 23 }, // 16 Sep Julian
        1194: { month: 9, day: 23 }, // 16 Sep Julian
        1195: { month: 9, day: 23 }, // 16 Sep Julian
        1196: { month: 9, day: 23 }, // 16 Sep Julian
        1197: { month: 9, day: 23 }, // 16 Sep Julian
        1198: { month: 9, day: 23 }, // 16 Sep Julian
        1199: { month: 9, day: 23 }, // 16 Sep Julian
        // --- FIN Données Equinoxe 1150-1199 ---
        1200: { month: 9, day: 23 }, // 16 Sep Julian
        1201: { month: 9, day: 23 }, // 16 Sep Julian
        1202: { month: 9, day: 23 }, // 16 Sep Julian
        1203: { month: 9, day: 23 }, // 16 Sep Julian
        1204: { month: 9, day: 23 }, // 16 Sep Julian
        1205: { month: 9, day: 23 }, // 16 Sep Julian
        1206: { month: 9, day: 23 }, // 16 Sep Julian
        1207: { month: 9, day: 23 }, // 16 Sep Julian
        1208: { month: 9, day: 22 }, // 15 Sep Julian
        1209: { month: 9, day: 23 }, // 16 Sep Julian
        1210: { month: 9, day: 23 }, // 16 Sep Julian
        1211: { month: 9, day: 23 }, // 16 Sep Julian
        1212: { month: 9, day: 22 }, // 15 Sep Julian
        1213: { month: 9, day: 23 }, // 16 Sep Julian
        1214: { month: 9, day: 23 }, // 16 Sep Julian
        1215: { month: 9, day: 23 }, // 16 Sep Julian
        1216: { month: 9, day: 22 }, // 15 Sep Julian
        1217: { month: 9, day: 23 }, // 16 Sep Julian
        1218: { month: 9, day: 23 }, // 16 Sep Julian
        1219: { month: 9, day: 23 }, // 16 Sep Julian
        1220: { month: 9, day: 22 }, // 15 Sep Julian
        1221: { month: 9, day: 23 }, // 16 Sep Julian
        1222: { month: 9, day: 23 }, // 16 Sep Julian
        1223: { month: 9, day: 23 }, // 16 Sep Julian
        1224: { month: 9, day: 22 }, // 15 Sep Julian
        1225: { month: 9, day: 23 }, // 16 Sep Julian
        1226: { month: 9, day: 23 }, // 16 Sep Julian
        1227: { month: 9, day: 23 }, // 16 Sep Julian
        1228: { month: 9, day: 22 }, // 15 Sep Julian
        1229: { month: 9, day: 23 }, // 16 Sep Julian
        1230: { month: 9, day: 23 }, // 16 Sep Julian
        1231: { month: 9, day: 23 }, // 16 Sep Julian
        1232: { month: 9, day: 22 }, // 15 Sep Julian
        1233: { month: 9, day: 23 }, // 16 Sep Julian
        1234: { month: 9, day: 23 }, // 16 Sep Julian
        1235: { month: 9, day: 23 }, // 16 Sep Julian
        1236: { month: 9, day: 22 }, // 15 Sep Julian
        1237: { month: 9, day: 22 }, // 15 Sep Julian
        1238: { month: 9, day: 23 }, // 16 Sep Julian
        1239: { month: 9, day: 23 }, // 16 Sep Julian
        1240: { month: 9, day: 22 }, // 15 Sep Julian
        1241: { month: 9, day: 22 }, // 15 Sep Julian
        1242: { month: 9, day: 23 }, // 16 Sep Julian
        1243: { month: 9, day: 23 }, // 16 Sep Julian
        1244: { month: 9, day: 22 }, // 15 Sep Julian
        1245: { month: 9, day: 22 }, // 15 Sep Julian
        1246: { month: 9, day: 23 }, // 16 Sep Julian
        1247: { month: 9, day: 23 }, // 16 Sep Julian
        1248: { month: 9, day: 22 }, // 15 Sep Julian
        1249: { month: 9, day: 22 }, // 15 Sep Julian
        // --- FIN Données Equinoxe 1200-1249 ---
        1250: { month: 9, day: 23 }, // 16 Sep Julian
        1251: { month: 9, day: 23 }, // 16 Sep Julian
        1252: { month: 9, day: 22 }, // 15 Sep Julian
        1253: { month: 9, day: 22 }, // 15 Sep Julian
        1254: { month: 9, day: 23 }, // 16 Sep Julian
        1255: { month: 9, day: 23 }, // 16 Sep Julian
        1256: { month: 9, day: 22 }, // 15 Sep Julian
        1257: { month: 9, day: 22 }, // 15 Sep Julian
        1258: { month: 9, day: 23 }, // 16 Sep Julian
        1259: { month: 9, day: 23 }, // 16 Sep Julian
        1260: { month: 9, day: 22 }, // 15 Sep Julian
        1261: { month: 9, day: 22 }, // 15 Sep Julian
        1262: { month: 9, day: 23 }, // 16 Sep Julian
        1263: { month: 9, day: 23 }, // 16 Sep Julian
        1264: { month: 9, day: 22 }, // 15 Sep Julian
        1265: { month: 9, day: 22 }, // 15 Sep Julian
        1266: { month: 9, day: 23 }, // 16 Sep Julian
        1267: { month: 9, day: 23 }, // 16 Sep Julian
        1268: { month: 9, day: 22 }, // 15 Sep Julian
        1269: { month: 9, day: 22 }, // 15 Sep Julian
        1270: { month: 9, day: 22 }, // 15 Sep Julian
        1271: { month: 9, day: 23 }, // 16 Sep Julian
        1272: { month: 9, day: 22 }, // 15 Sep Julian
        1273: { month: 9, day: 22 }, // 15 Sep Julian
        1274: { month: 9, day: 22 }, // 15 Sep Julian
        1275: { month: 9, day: 23 }, // 16 Sep Julian
        1276: { month: 9, day: 22 }, // 15 Sep Julian
        1277: { month: 9, day: 22 }, // 15 Sep Julian
        1278: { month: 9, day: 22 }, // 15 Sep Julian
        1279: { month: 9, day: 23 }, // 16 Sep Julian
        1280: { month: 9, day: 22 }, // 15 Sep Julian
        1281: { month: 9, day: 22 }, // 15 Sep Julian
        1282: { month: 9, day: 22 }, // 15 Sep Julian
        1283: { month: 9, day: 23 }, // 16 Sep Julian
        1284: { month: 9, day: 22 }, // 15 Sep Julian
        1285: { month: 9, day: 22 }, // 15 Sep Julian
        1286: { month: 9, day: 22 }, // 15 Sep Julian
        1287: { month: 9, day: 23 }, // 16 Sep Julian
        1288: { month: 9, day: 22 }, // 15 Sep Julian
        1289: { month: 9, day: 22 }, // 15 Sep Julian
        1290: { month: 9, day: 22 }, // 15 Sep Julian
        1291: { month: 9, day: 23 }, // 16 Sep Julian
        1292: { month: 9, day: 22 }, // 15 Sep Julian
        1293: { month: 9, day: 22 }, // 15 Sep Julian
        1294: { month: 9, day: 22 }, // 15 Sep Julian
        1295: { month: 9, day: 23 }, // 16 Sep Julian
        1296: { month: 9, day: 22 }, // 15 Sep Julian
        1297: { month: 9, day: 22 }, // 15 Sep Julian
        1298: { month: 9, day: 22 }, // 15 Sep Julian
        1299: { month: 9, day: 23 }, // 16 Sep Julian
        // --- FIN Données Equinoxe 1250-1299 ---
        1300: { month: 9, day: 23 }, // 15 Sep Julian
        1301: { month: 9, day: 23 }, // 15 Sep Julian
        1302: { month: 9, day: 23 }, // 15 Sep Julian
        1303: { month: 9, day: 23 }, // 15 Sep Julian
        1304: { month: 9, day: 23 }, // 15 Sep Julian
        1305: { month: 9, day: 23 }, // 15 Sep Julian
        1306: { month: 9, day: 23 }, // 15 Sep Julian
        1307: { month: 9, day: 23 }, // 15 Sep Julian
        1308: { month: 9, day: 23 }, // 15 Sep Julian
        1309: { month: 9, day: 23 }, // 15 Sep Julian
        1310: { month: 9, day: 23 }, // 15 Sep Julian
        1311: { month: 9, day: 23 }, // 15 Sep Julian
        1312: { month: 9, day: 23 }, // 15 Sep Julian
        1313: { month: 9, day: 23 }, // 15 Sep Julian
        1314: { month: 9, day: 23 }, // 15 Sep Julian
        1315: { month: 9, day: 23 }, // 15 Sep Julian
        1316: { month: 9, day: 23 }, // 15 Sep Julian
        1317: { month: 9, day: 23 }, // 15 Sep Julian
        1318: { month: 9, day: 23 }, // 15 Sep Julian
        1319: { month: 9, day: 23 }, // 15 Sep Julian
        1320: { month: 9, day: 23 }, // 15 Sep Julian
        1321: { month: 9, day: 23 }, // 15 Sep Julian
        1322: { month: 9, day: 23 }, // 15 Sep Julian
        1323: { month: 9, day: 23 }, // 15 Sep Julian
        1324: { month: 9, day: 23 }, // 15 Sep Julian
        1325: { month: 9, day: 23 }, // 15 Sep Julian
        1326: { month: 9, day: 23 }, // 15 Sep Julian
        1327: { month: 9, day: 23 }, // 15 Sep Julian
        1328: { month: 9, day: 23 }, // 15 Sep Julian
        1329: { month: 9, day: 23 }, // 15 Sep Julian
        1330: { month: 9, day: 23 }, // 15 Sep Julian
        1331: { month: 9, day: 23 }, // 15 Sep Julian
        1332: { month: 9, day: 23 }, // 15 Sep Julian
        1333: { month: 9, day: 23 }, // 15 Sep Julian
        1334: { month: 9, day: 23 }, // 15 Sep Julian
        1335: { month: 9, day: 23 }, // 15 Sep Julian
        1336: { month: 9, day: 22 }, // 14 Sep Julian
        1337: { month: 9, day: 23 }, // 15 Sep Julian
        1338: { month: 9, day: 23 }, // 15 Sep Julian
        1339: { month: 9, day: 23 }, // 15 Sep Julian
        1340: { month: 9, day: 22 }, // 14 Sep Julian
        1341: { month: 9, day: 23 }, // 15 Sep Julian
        1342: { month: 9, day: 23 }, // 15 Sep Julian
        1343: { month: 9, day: 23 }, // 15 Sep Julian
        1344: { month: 9, day: 22 }, // 14 Sep Julian
        1345: { month: 9, day: 23 }, // 15 Sep Julian
        1346: { month: 9, day: 23 }, // 15 Sep Julian
        1347: { month: 9, day: 23 }, // 15 Sep Julian
        1348: { month: 9, day: 22 }, // 14 Sep Julian
        1349: { month: 9, day: 23 }, // 15 Sep Julian
        // --- FIN Données Equinoxe 1300-1349 ---
        1350: { month: 9, day: 23 }, // 15 Sep Julian
        1351: { month: 9, day: 23 }, // 15 Sep Julian
        1352: { month: 9, day: 22 }, // 14 Sep Julian
        1353: { month: 9, day: 23 }, // 15 Sep Julian
        1354: { month: 9, day: 23 }, // 15 Sep Julian
        1355: { month: 9, day: 23 }, // 15 Sep Julian
        1356: { month: 9, day: 22 }, // 14 Sep Julian
        1357: { month: 9, day: 23 }, // 15 Sep Julian
        1358: { month: 9, day: 23 }, // 15 Sep Julian
        1359: { month: 9, day: 23 }, // 15 Sep Julian
        1360: { month: 9, day: 22 }, // 14 Sep Julian
        1361: { month: 9, day: 23 }, // 15 Sep Julian
        1362: { month: 9, day: 23 }, // 15 Sep Julian
        1363: { month: 9, day: 23 }, // 15 Sep Julian
        1364: { month: 9, day: 22 }, // 14 Sep Julian
        1365: { month: 9, day: 22 }, // 14 Sep Julian
        1366: { month: 9, day: 23 }, // 15 Sep Julian
        1367: { month: 9, day: 23 }, // 15 Sep Julian
        1368: { month: 9, day: 22 }, // 14 Sep Julian
        1369: { month: 9, day: 22 }, // 14 Sep Julian
        1370: { month: 9, day: 23 }, // 15 Sep Julian
        1371: { month: 9, day: 23 }, // 15 Sep Julian
        1372: { month: 9, day: 22 }, // 14 Sep Julian
        1373: { month: 9, day: 22 }, // 14 Sep Julian
        1374: { month: 9, day: 23 }, // 15 Sep Julian
        1375: { month: 9, day: 23 }, // 15 Sep Julian
        1376: { month: 9, day: 22 }, // 14 Sep Julian
        1377: { month: 9, day: 22 }, // 14 Sep Julian
        1378: { month: 9, day: 23 }, // 15 Sep Julian
        1379: { month: 9, day: 23 }, // 15 Sep Julian
        1380: { month: 9, day: 22 }, // 14 Sep Julian
        1381: { month: 9, day: 22 }, // 14 Sep Julian
        1382: { month: 9, day: 23 }, // 15 Sep Julian
        1383: { month: 9, day: 23 }, // 15 Sep Julian
        1384: { month: 9, day: 22 }, // 14 Sep Julian
        1385: { month: 9, day: 22 }, // 14 Sep Julian
        1386: { month: 9, day: 23 }, // 15 Sep Julian
        1387: { month: 9, day: 23 }, // 15 Sep Julian
        1388: { month: 9, day: 22 }, // 14 Sep Julian
        1389: { month: 9, day: 22 }, // 14 Sep Julian
        1390: { month: 9, day: 23 }, // 15 Sep Julian
        1391: { month: 9, day: 23 }, // 15 Sep Julian
        1392: { month: 9, day: 22 }, // 14 Sep Julian
        1393: { month: 9, day: 22 }, // 14 Sep Julian
        1394: { month: 9, day: 23 }, // 15 Sep Julian
        1395: { month: 9, day: 23 }, // 15 Sep Julian
        1396: { month: 9, day: 22 }, // 14 Sep Julian
        1397: { month: 9, day: 22 }, // 14 Sep Julian
        1398: { month: 9, day: 22 }, // 14 Sep Julian
        1399: { month: 9, day: 23 }, // 15 Sep Julian
        // --- FIN Données Equinoxe 1350-1399 ---
        // Converties en Proleptique Grégorien (+9 jours)
        1400: { month: 9, day: 23 }, // 14 Sep Julian
        1401: { month: 9, day: 23 }, // 14 Sep Julian
        1402: { month: 9, day: 23 }, // 14 Sep Julian
        1403: { month: 9, day: 24 }, // 15 Sep Julian
        1404: { month: 9, day: 23 }, // 14 Sep Julian
        1405: { month: 9, day: 23 }, // 14 Sep Julian
        1406: { month: 9, day: 23 }, // 14 Sep Julian
        1407: { month: 9, day: 24 }, // 15 Sep Julian
        1408: { month: 9, day: 23 }, // 14 Sep Julian
        1409: { month: 9, day: 23 }, // 14 Sep Julian
        1410: { month: 9, day: 23 }, // 14 Sep Julian
        1411: { month: 9, day: 24 }, // 15 Sep Julian
        1412: { month: 9, day: 23 }, // 14 Sep Julian
        1413: { month: 9, day: 23 }, // 14 Sep Julian
        1414: { month: 9, day: 23 }, // 14 Sep Julian
        1415: { month: 9, day: 24 }, // 15 Sep Julian
        1416: { month: 9, day: 23 }, // 14 Sep Julian
        1417: { month: 9, day: 23 }, // 14 Sep Julian
        1418: { month: 9, day: 23 }, // 14 Sep Julian
        1419: { month: 9, day: 24 }, // 15 Sep Julian
        1420: { month: 9, day: 23 }, // 14 Sep Julian
        1421: { month: 9, day: 23 }, // 14 Sep Julian
        1422: { month: 9, day: 23 }, // 14 Sep Julian
        1423: { month: 9, day: 24 }, // 15 Sep Julian
        1424: { month: 9, day: 23 }, // 14 Sep Julian
        1425: { month: 9, day: 23 }, // 14 Sep Julian
        1426: { month: 9, day: 23 }, // 14 Sep Julian
        1427: { month: 9, day: 24 }, // 15 Sep Julian
        1428: { month: 9, day: 23 }, // 14 Sep Julian
        1429: { month: 9, day: 23 }, // 14 Sep Julian
        1430: { month: 9, day: 23 }, // 14 Sep Julian
        1431: { month: 9, day: 23 }, // 14 Sep Julian
        1432: { month: 9, day: 23 }, // 14 Sep Julian
        1433: { month: 9, day: 23 }, // 14 Sep Julian
        1434: { month: 9, day: 23 }, // 14 Sep Julian
        1435: { month: 9, day: 23 }, // 14 Sep Julian
        1436: { month: 9, day: 23 }, // 14 Sep Julian
        1437: { month: 9, day: 23 }, // 14 Sep Julian
        1438: { month: 9, day: 23 }, // 14 Sep Julian
        1439: { month: 9, day: 23 }, // 14 Sep Julian
        1440: { month: 9, day: 23 }, // 14 Sep Julian
        1441: { month: 9, day: 23 }, // 14 Sep Julian
        1442: { month: 9, day: 23 }, // 14 Sep Julian
        1443: { month: 9, day: 23 }, // 14 Sep Julian
        1444: { month: 9, day: 23 }, // 14 Sep Julian
        1445: { month: 9, day: 23 }, // 14 Sep Julian
        1446: { month: 9, day: 23 }, // 14 Sep Julian
        1447: { month: 9, day: 23 }, // 14 Sep Julian
        1448: { month: 9, day: 23 }, // 14 Sep Julian
        1449: { month: 9, day: 23 }, // 14 Sep Julian
        // --- FIN Données Equinoxe 1400-1449 ---
        1450: { month: 9, day: 23 }, // 14 Sep Julian
        1451: { month: 9, day: 23 }, // 14 Sep Julian
        1452: { month: 9, day: 23 }, // 14 Sep Julian
        1453: { month: 9, day: 23 }, // 14 Sep Julian
        1454: { month: 9, day: 23 }, // 14 Sep Julian
        1455: { month: 9, day: 23 }, // 14 Sep Julian
        1456: { month: 9, day: 23 }, // 14 Sep Julian
        1457: { month: 9, day: 23 }, // 14 Sep Julian
        1458: { month: 9, day: 23 }, // 14 Sep Julian
        1459: { month: 9, day: 23 }, // 14 Sep Julian
        1460: { month: 9, day: 23 }, // 14 Sep Julian
        1461: { month: 9, day: 23 }, // 14 Sep Julian
        1462: { month: 9, day: 23 }, // 14 Sep Julian
        1463: { month: 9, day: 23 }, // 14 Sep Julian
        1464: { month: 9, day: 22 }, // 13 Sep Julian
        1465: { month: 9, day: 23 }, // 14 Sep Julian
        1466: { month: 9, day: 23 }, // 14 Sep Julian
        1467: { month: 9, day: 23 }, // 14 Sep Julian
        1468: { month: 9, day: 22 }, // 13 Sep Julian
        1469: { month: 9, day: 23 }, // 14 Sep Julian
        1470: { month: 9, day: 23 }, // 14 Sep Julian
        1471: { month: 9, day: 23 }, // 14 Sep Julian
        1472: { month: 9, day: 22 }, // 13 Sep Julian
        1473: { month: 9, day: 23 }, // 14 Sep Julian
        1474: { month: 9, day: 23 }, // 14 Sep Julian
        1475: { month: 9, day: 23 }, // 14 Sep Julian
        1476: { month: 9, day: 22 }, // 13 Sep Julian
        1477: { month: 9, day: 23 }, // 14 Sep Julian
        1478: { month: 9, day: 23 }, // 14 Sep Julian
        1479: { month: 9, day: 23 }, // 14 Sep Julian
        1480: { month: 9, day: 22 }, // 13 Sep Julian
        1481: { month: 9, day: 23 }, // 14 Sep Julian
        1482: { month: 9, day: 23 }, // 14 Sep Julian
        1483: { month: 9, day: 23 }, // 14 Sep Julian
        1484: { month: 9, day: 22 }, // 13 Sep Julian
        1485: { month: 9, day: 23 }, // 14 Sep Julian
        1486: { month: 9, day: 23 }, // 14 Sep Julian
        1487: { month: 9, day: 23 }, // 14 Sep Julian
        1488: { month: 9, day: 22 }, // 13 Sep Julian
        1489: { month: 9, day: 23 }, // 14 Sep Julian
        1490: { month: 9, day: 23 }, // 14 Sep Julian
        1491: { month: 9, day: 23 }, // 14 Sep Julian
        1492: { month: 9, day: 22 }, // 13 Sep Julian
        1493: { month: 9, day: 22 }, // 13 Sep Julian
        1494: { month: 9, day: 23 }, // 14 Sep Julian
        1495: { month: 9, day: 23 }, // 14 Sep Julian
        1496: { month: 9, day: 22 }, // 13 Sep Julian
        1497: { month: 9, day: 22 }, // 13 Sep Julian
        1498: { month: 9, day: 23 }, // 14 Sep Julian
        1499: { month: 9, day: 23 }, // 14 Sep Julian
        // --- FIN Données Equinoxe 1450-1499 ---
        1500: { month: 9, day: 23 }, // 13 Sep Julian
        1501: { month: 9, day: 23 }, // 13 Sep Julian
        1502: { month: 9, day: 24 }, // 14 Sep Julian
        1503: { month: 9, day: 24 }, // 14 Sep Julian
        1504: { month: 9, day: 23 }, // 13 Sep Julian
        1505: { month: 9, day: 23 }, // 13 Sep Julian
        1506: { month: 9, day: 24 }, // 14 Sep Julian
        1507: { month: 9, day: 24 }, // 14 Sep Julian
        1508: { month: 9, day: 23 }, // 13 Sep Julian
        1509: { month: 9, day: 23 }, // 13 Sep Julian
        1510: { month: 9, day: 24 }, // 14 Sep Julian
        1511: { month: 9, day: 24 }, // 14 Sep Julian
        1512: { month: 9, day: 23 }, // 13 Sep Julian
        1513: { month: 9, day: 23 }, // 13 Sep Julian
        1514: { month: 9, day: 24 }, // 14 Sep Julian
        1515: { month: 9, day: 24 }, // 14 Sep Julian
        1516: { month: 9, day: 23 }, // 13 Sep Julian
        1517: { month: 9, day: 23 }, // 13 Sep Julian
        1518: { month: 9, day: 24 }, // 14 Sep Julian
        1519: { month: 9, day: 24 }, // 14 Sep Julian
        1520: { month: 9, day: 23 }, // 13 Sep Julian
        1521: { month: 9, day: 23 }, // 13 Sep Julian
        1522: { month: 9, day: 24 }, // 14 Sep Julian
        1523: { month: 9, day: 24 }, // 14 Sep Julian
        1524: { month: 9, day: 23 }, // 13 Sep Julian
        1525: { month: 9, day: 23 }, // 13 Sep Julian
        1526: { month: 9, day: 23 }, // 13 Sep Julian
        1527: { month: 9, day: 24 }, // 14 Sep Julian
        1528: { month: 9, day: 23 }, // 13 Sep Julian
        1529: { month: 9, day: 23 }, // 13 Sep Julian
        1530: { month: 9, day: 23 }, // 13 Sep Julian
        1531: { month: 9, day: 24 }, // 14 Sep Julian
        1532: { month: 9, day: 23 }, // 13 Sep Julian
        1533: { month: 9, day: 23 }, // 13 Sep Julian
        1534: { month: 9, day: 23 }, // 13 Sep Julian
        1535: { month: 9, day: 24 }, // 14 Sep Julian
        1536: { month: 9, day: 23 }, // 13 Sep Julian
        1537: { month: 9, day: 23 }, // 13 Sep Julian
        1538: { month: 9, day: 23 }, // 13 Sep Julian
        1539: { month: 9, day: 24 }, // 14 Sep Julian
        1540: { month: 9, day: 23 }, // 13 Sep Julian
        1541: { month: 9, day: 23 }, // 13 Sep Julian
        1542: { month: 9, day: 23 }, // 13 Sep Julian
        1543: { month: 9, day: 24 }, // 14 Sep Julian
        1544: { month: 9, day: 23 }, // 13 Sep Julian
        1545: { month: 9, day: 23 }, // 13 Sep Julian
        1546: { month: 9, day: 23 }, // 13 Sep Julian
        1547: { month: 9, day: 24 }, // 14 Sep Julian
        1548: { month: 9, day: 23 }, // 13 Sep Julian
        1549: { month: 9, day: 23 }, // 13 Sep Julian
        // --- FIN Données Equinoxe 1500-1549 ---
        1550: { month: 9, day: 23 }, // 13 Sep Julian
        1551: { month: 9, day: 24 }, // 14 Sep Julian
        1552: { month: 9, day: 23 }, // 13 Sep Julian
        1553: { month: 9, day: 23 }, // 13 Sep Julian
        1554: { month: 9, day: 23 }, // 13 Sep Julian
        1555: { month: 9, day: 24 }, // 14 Sep Julian
        1556: { month: 9, day: 23 }, // 13 Sep Julian
        1557: { month: 9, day: 23 }, // 13 Sep Julian
        1558: { month: 9, day: 23 }, // 13 Sep Julian
        1559: { month: 9, day: 23 }, // 13 Sep Julian
        1560: { month: 9, day: 23 }, // 13 Sep Julian
        1561: { month: 9, day: 23 }, // 13 Sep Julian
        1562: { month: 9, day: 23 }, // 13 Sep Julian
        1563: { month: 9, day: 23 }, // 13 Sep Julian
        1564: { month: 9, day: 23 }, // 13 Sep Julian
        1565: { month: 9, day: 23 }, // 13 Sep Julian
        1566: { month: 9, day: 23 }, // 13 Sep Julian
        1567: { month: 9, day: 23 }, // 13 Sep Julian
        1568: { month: 9, day: 23 }, // 13 Sep Julian
        1569: { month: 9, day: 23 }, // 13 Sep Julian
        1570: { month: 9, day: 23 }, // 13 Sep Julian
        1571: { month: 9, day: 23 }, // 13 Sep Julian
        1572: { month: 9, day: 23 }, // 13 Sep Julian
        1573: { month: 9, day: 23 }, // 13 Sep Julian
        1574: { month: 9, day: 23 }, // 13 Sep Julian
        1575: { month: 9, day: 23 }, // 13 Sep Julian
        1576: { month: 9, day: 23 }, // 13 Sep Julian
        1577: { month: 9, day: 23 }, // 13 Sep Julian
        1578: { month: 9, day: 23 }, // 13 Sep Julian
        1579: { month: 9, day: 23 }, // 13 Sep Julian
        1580: { month: 9, day: 23 }, // 13 Sep Julian
        1581: { month: 9, day: 23 }, // 13 Sep Julian
        1582: { month: 9, day: 23 }, // 13 Sep Julian (Last Julian equinox before reform)
        // --- FIN Données Equinoxe avant Réforme ---
		1583: { month: 9, day: 23 }, // 18h 23m 52s
        1584: { month: 9, day: 23 }, // 00h 16m 38s
        1585: { month: 9, day: 23 }, // 06h 07m 49s
        1586: { month: 9, day: 23 }, // 11h 58m 04s
        1587: { month: 9, day: 23 }, // 17h 46m 11s
        1588: { month: 9, day: 22 }, // 23h 35m 24s
        1589: { month: 9, day: 23 }, // 05h 32m 57s
        1590: { month: 9, day: 23 }, // 11h 24m 48s
        1591: { month: 9, day: 23 }, // 17h 12m 37s
        1592: { month: 9, day: 22 }, // 23h 02m 14s
        1593: { month: 9, day: 23 }, // 04h 50m 09s
        1594: { month: 9, day: 23 }, // 10h 33m 51s
        1595: { month: 9, day: 23 }, // 16h 16m 57s
        1596: { month: 9, day: 22 }, // 22h 02m 58s
        1597: { month: 9, day: 23 }, // 03h 52m 32s
        1598: { month: 9, day: 23 }, // 09h 39m 40s
        1599: { month: 9, day: 23 }, // 15h 23m 01s
        1600: { month: 9, day: 22 }, // 21h 11m 51s
        1601: { month: 9, day: 23 }, // 03h 05m 30s
        1602: { month: 9, day: 23 }, // 08h 54m 34s
        1603: { month: 9, day: 23 }, // 14h 43m 06s
        1604: { month: 9, day: 22 }, // 20h 34m 39s
        1605: { month: 9, day: 23 }, // 02h 26m 16s
        1606: { month: 9, day: 23 }, // 08h 17m 52s
        1607: { month: 9, day: 23 }, // 14h 05m 01s
        1608: { month: 9, day: 22 }, // 19h 54m 48s
        1609: { month: 9, day: 23 }, // 01h 48m 18s
        1610: { month: 9, day: 23 }, // 07h 32m 53s
        1611: { month: 9, day: 23 }, // 13h 16m 37s
        1612: { month: 9, day: 22 }, // 19h 06m 32s
        1613: { month: 9, day: 23 }, // 00h 56m 07s
        1614: { month: 9, day: 23 }, // 06h 46m 13s
        1615: { month: 9, day: 23 }, // 12h 32m 22s
        1616: { month: 9, day: 22 }, // 18h 16m 58s
        1617: { month: 9, day: 23 }, // 00h 08m 36s
        1618: { month: 9, day: 23 }, // 05h 52m 16s
        1619: { month: 9, day: 23 }, // 11h 35m 02s
        1620: { month: 9, day: 22 }, // 17h 27m 50s
        1621: { month: 9, day: 22 }, // 23h 17m 13s
        1622: { month: 9, day: 23 }, // 05h 06m 58s
        1623: { month: 9, day: 23 }, // 10h 57m 13s
        1624: { month: 9, day: 22 }, // 16h 44m 44s
        1625: { month: 9, day: 22 }, // 22h 42m 54s
        1626: { month: 9, day: 23 }, // 04h 33m 14s
        1627: { month: 9, day: 23 }, // 10h 16m 56s
        1628: { month: 9, day: 22 }, // 16h 11m 39s
        1629: { month: 9, day: 22 }, // 21h 58m 35s
        1630: { month: 9, day: 23 }, // 03h 45m 22s
        1631: { month: 9, day: 23 }, // 09h 34m 32s
        1632: { month: 9, day: 22 }, // 15h 18m 09s
        1633: { month: 9, day: 22 }, // 21h 11m 04s
        1634: { month: 9, day: 23 }, // 02h 56m 07s
        1635: { month: 9, day: 23 }, // 08h 33m 54s
        1636: { month: 9, day: 22 }, // 14h 28m 21s
        1637: { month: 9, day: 22 }, // 20h 16m 57s
        1638: { month: 9, day: 23 }, // 02h 05m 09s
        1639: { month: 9, day: 23 }, // 07h 56m 51s
        1640: { month: 9, day: 22 }, // 13h 40m 53s
        1641: { month: 9, day: 22 }, // 19h 34m 55s
        1642: { month: 9, day: 23 }, // 01h 24m 18s
        1643: { month: 9, day: 23 }, // 07h 05m 42s
        1644: { month: 9, day: 22 }, // 13h 03m 37s
        1645: { month: 9, day: 22 }, // 18h 54m 08s
        1646: { month: 9, day: 23 }, // 00h 39m 41s
        1647: { month: 9, day: 23 }, // 06h 33m 38s
        1648: { month: 9, day: 22 }, // 12h 19m 16s
        1649: { month: 9, day: 22 }, // 18h 14m 14s
        1650: { month: 9, day: 23 }, // 00h 05m 33s
        1651: { month: 9, day: 23 }, // 05h 42m 28s
        1652: { month: 9, day: 22 }, // 11h 35m 12s
        1653: { month: 9, day: 22 }, // 17h 21m 43s
        1654: { month: 9, day: 22 }, // 23h 01m 02s
        1655: { month: 9, day: 23 }, // 04h 53m 40s
        1656: { month: 9, day: 22 }, // 10h 36m 36s
        1657: { month: 9, day: 22 }, // 16h 26m 43s
        1658: { month: 9, day: 22 }, // 22h 18m 54s
        1659: { month: 9, day: 23 }, // 03h 57m 00s
        1660: { month: 9, day: 22 }, // 09h 55m 30s
        1661: { month: 9, day: 22 }, // 15h 50m 51s
        1662: { month: 9, day: 22 }, // 21h 36m 18s
        1663: { month: 9, day: 23 }, // 03h 33m 41s
        1664: { month: 9, day: 22 }, // 09h 20m 42s
        1665: { month: 9, day: 22 }, // 15h 10m 55s
        1666: { month: 9, day: 22 }, // 21h 04m 58s
        1667: { month: 9, day: 23 }, // 02h 42m 05s
        1668: { month: 9, day: 22 }, // 08h 35m 34s
        1669: { month: 9, day: 22 }, // 14h 25m 25s
        1670: { month: 9, day: 22 }, // 20h 02m 53s
        1671: { month: 9, day: 23 }, // 01h 53m 59s
        1672: { month: 9, day: 22 }, // 07h 39m 14s
        1673: { month: 9, day: 22 }, // 13h 27m 11s
        1674: { month: 9, day: 22 }, // 19h 21m 30s
        1675: { month: 9, day: 23 }, // 00h 58m 39s
        1676: { month: 9, day: 22 }, // 06h 50m 32s
        1677: { month: 9, day: 22 }, // 12h 44m 26s
        1678: { month: 9, day: 22 }, // 18h 24m 52s
        1679: { month: 9, day: 23 }, // 00h 21m 21s
        1680: { month: 9, day: 22 }, // 06h 12m 43s
        1681: { month: 9, day: 22 }, // 12h 01m 41s
        1682: { month: 9, day: 22 }, // 17h 58m 55s
        1683: { month: 9, day: 22 }, // 23h 39m 41s
        1684: { month: 9, day: 22 }, // 05h 33m 23s
        1685: { month: 9, day: 22 }, // 11h 31m 37s
        1686: { month: 9, day: 22 }, // 17h 10m 10s
        1687: { month: 9, day: 22 }, // 23h 00m 57s
        1688: { month: 9, day: 22 }, // 04h 47m 31s
        1689: { month: 9, day: 22 }, // 10h 28m 37s
        1690: { month: 9, day: 22 }, // 16h 21m 19s
        1691: { month: 9, day: 22 }, // 21h 58m 57s
        1692: { month: 9, day: 22 }, // 03h 46m 57s
        1693: { month: 9, day: 22 }, // 09h 41m 53s
        1694: { month: 9, day: 22 }, // 15h 20m 08s
        1695: { month: 9, day: 22 }, // 21h 12m 27s
        1696: { month: 9, day: 22 }, // 03h 07m 59s
        1697: { month: 9, day: 22 }, // 08h 56m 51s
        1698: { month: 9, day: 22 }, // 14h 55m 05s
        1699: { month: 9, day: 22 }, // 20h 38m 30s
        1700: { month: 9, day: 23 }, // 02h 28m 17s - Note: 1700 is not a leap year in Gregorian
        1701: { month: 9, day: 23 }, // 08h 25m 27s
        1702: { month: 9, day: 23 }, // 14h 06m 13s
        1703: { month: 9, day: 23 }, // 19h 55m 32s
        1704: { month: 9, day: 23 }, // 01h 48m 02s
        1705: { month: 9, day: 23 }, // 07h 30m 38s
        1706: { month: 9, day: 23 }, // 13h 21m 25s
        1707: { month: 9, day: 23 }, // 19h 03m 02s
        1708: { month: 9, day: 23 }, // 00h 49m 47s
        1709: { month: 9, day: 23 }, // 06h 46m 36s
        1710: { month: 9, day: 23 }, // 12h 26m 22s
        1711: { month: 9, day: 23 }, // 18h 12m 48s
        1712: { month: 9, day: 23 }, // 00h 06m 25s
        1713: { month: 9, day: 23 }, // 05h 50m 22s
        1714: { month: 9, day: 23 }, // 11h 43m 11s
        1715: { month: 9, day: 23 }, // 17h 30m 00s
        1716: { month: 9, day: 22 }, // 23h 18m 01s
        1717: { month: 9, day: 23 }, // 05h 16m 12s
        1718: { month: 9, day: 23 }, // 10h 59m 13s
        1719: { month: 9, day: 23 }, // 16h 48m 06s
        1720: { month: 9, day: 22 }, // 22h 47m 10s
        1721: { month: 9, day: 23 }, // 04h 34m 37s
        1722: { month: 9, day: 23 }, // 10h 25m 54s
        1723: { month: 9, day: 23 }, // 16h 10m 50s
        1724: { month: 9, day: 22 }, // 21h 54m 51s
        1725: { month: 9, day: 23 }, // 03h 46m 57s
        1726: { month: 9, day: 23 }, // 09h 28m 21s
        1727: { month: 9, day: 23 }, // 15h 12m 01s
        1728: { month: 9, day: 22 }, // 21h 06m 04s
        1729: { month: 9, day: 23 }, // 02h 50m 26s
        1730: { month: 9, day: 23 }, // 08h 38m 04s
        1731: { month: 9, day: 23 }, // 14h 25m 54s
        1732: { month: 9, day: 22 }, // 20h 15m 19s
        1733: { month: 9, day: 23 }, // 02h 10m 30s
        1734: { month: 9, day: 23 }, // 07h 57m 04s
        1735: { month: 9, day: 23 }, // 13h 42m 15s
        1736: { month: 9, day: 22 }, // 19h 37m 56s
        1737: { month: 9, day: 23 }, // 01h 27m 18s
        1738: { month: 9, day: 23 }, // 07h 16m 33s
        1739: { month: 9, day: 23 }, // 13h 06m 27s
        1740: { month: 9, day: 22 }, // 18h 54m 18s
        1741: { month: 9, day: 23 }, // 00h 45m 21s
        1742: { month: 9, day: 23 }, // 06h 30m 35s
        1743: { month: 9, day: 23 }, // 12h 15m 22s
        1744: { month: 9, day: 22 }, // 18h 10m 34s
        1745: { month: 9, day: 22 }, // 23h 59m 45s
        1746: { month: 9, day: 23 }, // 05h 44m 17s
        1747: { month: 9, day: 23 }, // 11h 30m 10s
        1748: { month: 9, day: 22 }, // 17h 15m 37s
        1749: { month: 9, day: 22 }, // 23h 04m 00s
        1750: { month: 9, day: 23 }, // 04h 49m 24s
        1751: { month: 9, day: 23 }, // 10h 33m 49s
        1752: { month: 9, day: 22 }, // 16h 27m 21s
        1753: { month: 9, day: 22 }, // 22h 18m 44s
        1754: { month: 9, day: 23 }, // 04h 06m 54s
        1755: { month: 9, day: 23 }, // 09h 58m 26s
        1756: { month: 9, day: 22 }, // 15h 53m 21s
        1757: { month: 9, day: 22 }, // 21h 45m 16s
        1758: { month: 9, day: 23 }, // 03h 33m 40s
        1759: { month: 9, day: 23 }, // 09h 19m 05s
        1760: { month: 9, day: 22 }, // 15h 09m 30s
        1761: { month: 9, day: 22 }, // 21h 00m 08s
        1762: { month: 9, day: 23 }, // 02h 44m 45s
        1763: { month: 9, day: 23 }, // 08h 29m 23s
        1764: { month: 9, day: 22 }, // 14h 19m 05s
        1765: { month: 9, day: 22 }, // 20h 03m 01s
        1766: { month: 9, day: 23 }, // 01h 47m 23s
        1767: { month: 9, day: 23 }, // 07h 33m 33s
        1768: { month: 9, day: 22 }, // 13h 24m 09s
        1769: { month: 9, day: 22 }, // 19h 18m 00s
        1770: { month: 9, day: 23 }, // 01h 04m 18s
        1771: { month: 9, day: 23 }, // 06h 50m 33s
        1772: { month: 9, day: 22 }, // 12h 45m 07s
        1773: { month: 9, day: 22 }, // 18h 34m 27s
        1774: { month: 9, day: 23 }, // 00h 23m 15s
        1775: { month: 9, day: 23 }, // 06h 14m 04s
        1776: { month: 9, day: 22 }, // 12h 04m 42s
        1777: { month: 9, day: 22 }, // 17h 58m 23s
        1778: { month: 9, day: 22 }, // 23h 45m 32s
        1779: { month: 9, day: 23 }, // 05h 31m 11s
        1780: { month: 9, day: 22 }, // 11h 26m 26s
        1781: { month: 9, day: 22 }, // 17h 12m 27s
        1782: { month: 9, day: 22 }, // 22h 53m 19s
        1783: { month: 9, day: 23 }, // 04h 38m 45s
        1784: { month: 9, day: 22 }, // 10h 23m 26s
        1785: { month: 9, day: 22 }, // 16h 13m 17s
        1786: { month: 9, day: 22 }, // 22h 00m 07s
        1787: { month: 9, day: 23 }, // 03h 42m 04s
        1788: { month: 9, day: 22 }, // 09h 37m 50s
        1789: { month: 9, day: 22 }, // 15h 25m 58s
        1790: { month: 9, day: 22 }, // 21h 11m 32s
        1791: { month: 9, day: 23 }, // 03h 07m 43s <<< Fin de la plage demandée
        // --- FIN Données Equinoxe 1583-1791 ---
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
            { name: "Mélèze", latin: "Larix decidua", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Seul conifère d'Europe à perdre ses aiguilles en hiver.",
                commemoration: {
                    title: "Mort de Toussaint Louverture (An XI)",
                    description: "Figure majeure de la Révolution haïtienne, mort en captivité au Fort de Joux."
                }			},
            { name: "Ciguë", latin: "Conium maculatum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Plante très toxique à fleurs blanches en ombelles, poison de Socrate." },
            { name: "Radis", latin: "Raphanus sativus", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Petite racine croquante et piquante, consommée crue." },
            { name: "Ruche", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Habitat construit par l'homme pour héberger une colonie d'abeilles." },
            { name: "Gainier", latin: "Cercis siliquastrum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Arbre spectaculaire ('Arbre de Judée') couvert de fleurs roses avant les feuilles." },
            { name: "Romaine", latin: "Lactuca sativa var. longifolia", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Variété de laitue aux feuilles longues et croquantes." },
            { name: "Marronnier", latin: "Aesculus hippocastanum", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Grand arbre d'ornement aux fleurs en épis (blanches ou roses) et fruits non comestibles (marrons d'Inde)." },
            { name: "Roquette", latin: "Eruca vesicaria / Diplotaxis tenuifolia", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "Salade au goût poivré et piquant." },
            { name: "Pigeon", latin: "Columba livia domestica", author: "(Gmelin 1789)", urlImage: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Columba_livia_Luc_Viatour.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Columba_(oiseau)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/PIGEON", description: "Oiseau commun des villes et campagnes, élevé pour sa chair ou comme messager." },
            { name: "Lilas (commun)", latin: "Syringa vulgaris", author: "(Linné 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/LILAC", urlImage: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Lilac_%282%29.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Syringa_vulgaris", description: "Arbuste très parfumé aux grappes de fleurs mauves ou blanches au printemps." },
            { name: "Anémone", latin: "Anemone", author: "(Linné 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/ANEMONE", urlImage: "https://upload.wikimedia.org/wikipedia/commons/d/db/Colorful-Anemone-coronaria-Zachi-Evenor.jpg", urlWiki: "https://fr.wikipedia.org/wiki/An%C3%A9mone", description: "Genre de plantes à fleurs délicates, souvent printanières (ex: Anémone des bois).",
			commemoration: {
                    title: "Pâques véronaises (27 Germinal An V)",
                    description: "Les citoyens de Vérone débutent une révolte infructueuse de huit jours contre les occupants Français."
            } },
            { name: "Pensée", latin: "Viola tricolor / Viola x wittrockiana", author: "(Linné 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/PENS%C3%89E", urlImage: "https://upload.wikimedia.org/wikipedia/commons/1/1c/JDCANO_Viola_Cazorlensis.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Viola_(plante)", description: "Fleur colorée et veloutée, symbole de souvenir.",
			commemoration: {
                    title: "Bataille de San Juan de Porto Rico (28 Germinal An V)",
                    description: "La bataille de San Juan de Porto Rico est un affrontement qui a lieu du 17 avril au 2 mai 1797, au cours duquel Ralph Abercromby à la tête d'une armée de 6 000 hommes, tente de prendre la colonie de Porto Rico au nom de la couronne britannique."
            } },
			{ name: "Myrtille", latin: "Vaccinium myrtillus", author: "(Linné 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/MYRTILLE", urlImage: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Myrtille_Vaccinium_myrtillus.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Vaccinium_myrtillus", description: "Petite baie bleu foncé sauvage ou cultivée, riche en antioxydants.",
			commemoration: {
                    title: "Traité de Leoben (29 Germinal An V)",
                    description: "Le Traité de Leoben, signé en avril 1797 entre Napoléon Bonaparte pour la France et l'Autriche, constitue les préliminaires de paix qui ont mis fin à la première campagne d'Italie. Cet accord prévoyait notamment la cession des Pays-Bas autrichiens à la France et contenait des clauses secrètes organisant le partage de la République de Venise, préparant le terrain pour le Traité de Campo Formio."
            } },
            { name: "Greffoir", latin: "", author: "", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/GREFFOIR", urlImage: "https://www.promessedefleurs.com/blogwp/wp-content/uploads/2021/06/greffoir-couteau.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Greffoir", description: "Outil tranchant utilisé pour réaliser des greffes sur les arbres fruitiers ou d'ornement." }
        ],
		
		// , author: "", urlEncy: "", urlImage: "", urlWiki: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "
        // Floréal (Printemps) - Mois 8
[
    { name: "Rose", latin: "Rosa", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/ROSE", urlImage: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Rose_Papa_Meilland.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Rose_(fleur)", description: "Fleur emblématique, symbole d'amour et de beauté, cultivée pour son parfum et son esthétique." },
    { name: "Chêne", latin: "Quercus", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/CH%C3%8ANE", urlImage: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Gustave_Courbet_-_Le_Gros_Ch%C3%AAne_%281843%29.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Ch%C3%AAne", description: "Arbre majestueux et robuste, symbole de force et de longévité, produisant des glands." },
    { name: "Fougère", latin: "Pteridophyta", author: "", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/FOUGERE", urlImage: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sa-fern.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Pteridophyta", description: "Plante sans fleur se reproduisant par spores, typique des sous-bois humides." }, // Rank: Division
    { name: "Aubépine", latin: "Crataegus monogyna", author: "(Jacq., 1775)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/AUBEPINE_ou_AUBEPIN", urlImage: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Crataegus_monogyna%2803%29.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Crataegus_monogyna", description: "Arbuste épineux aux fleurs blanches ou roses parfumées ('épine blanche')." }, // Rank: Species // Corrected Ency URL
    { name: "Rossignol", latin: "Luscinia megarhynchos", author: "(Brehm, CL, 1831)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/ROSSIGNOL_ou_ROUSSIGNOL", urlImage: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Rossinyol_03_%28Luscinia_megarhynchos%29.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Rossignol_philom%C3%A8le", description: "Oiseau chanteur au chant mélodieux, souvent nocturne." }, // Rank: Species
    { name: "Ancolie", latin: "Aquilegia vulgaris", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/ANCOLIE", urlImage: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Aquilegia_vulgaris_Gaffard.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Aquilegia_vulgaris", description: "Plante vivace aux fleurs originales en forme d'éperon." }, // Rank: Species
    { name: "Muguet", latin: "Convallaria majalis", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/MUGUET", urlImage: "https://upload.wikimedia.org/wikipedia/commons/4/49/Maigl%C3%B6ckchen_am_Sylvensteinsee_Mai_2018.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Muguet_de_mai", description: "Plante à clochettes blanches très parfumées, symbole du 1er mai, mais toxique." }, // Rank: Species
    { name: "Champignon", latin: "Fungi", author: "", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/CHAMPIGNON", urlImage: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Fliegenpilz_fly_agaric_Amanita_muscaria.JPG", urlWiki: "https://fr.wikipedia.org/wiki/Fungi", description: "Organisme ni végétal ni animal, dont certains sont comestibles (ex: Cèpe) et d'autres vénéneux." }, // Rank: Kingdom
    { name: "Hyacinthe", latin: "Hyacinthus orientalis", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/JACINTE", urlImage: "https://upload.wikimedia.org/wikipedia/commons/7/74/Hyacinthus_orientalis_%28blue_cultivar%29_01.JPG", urlWiki: "https://fr.wikipedia.org/wiki/Jacinthe_d%27Orient", description: "Plante à bulbe aux fleurs très parfumées en grappes denses." }, // Rank: Species // Ency uses JACINTHE
    { name: "Râteau", latin: "", author: "", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/R%C3%82TEAU", urlImage: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Fan-shaped_leaf_rake.jpg", urlWiki: "https://fr.wikipedia.org/wiki/R%C3%A2teau", description: "Outil de jardinage pour rassembler feuilles ou débris, ou niveler la terre." }, // Item: Tool
    { name: "Rhubarbe", latin: "Rheum rhabarbarum", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/RHUBARBE", urlImage: "https://upload.wikimedia.org/wikipedia/commons/3/33/April_22%2C_Rhubarb.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Rhubarbe", description: "Plante dont on consomme les pétioles (tiges) acides, souvent en tarte ou compote." }, // Rank: Species
    { name: "Sainfoin", latin: "Onobrychis viciifolia", author: "(Scop., 1772)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/SAINFOIN", urlImage: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Onobrychis_viciifolia_%28plant%29.jpg", urlWiki: "https://fr.wikipedia.org/wiki/Sainfoin_cultiv%C3%A9", description: "Plante fourragère mellifère, aux fleurs roses en épis." }, // Rank: Species
    { name: "Bâton-d'or", latin: "Asphodeline lutea", author: "((L.) Rchb., 1830)", urlEncy: "", urlImage: "https://upload.wikimedia.org/wikipedia/commons/5/53/Aspholedine_lutea_-_Jardin_des_Plantes.JPG", urlWiki: "https://fr.wikipedia.org/wiki/Asphodeline_lutea", description: "Plante vivace méditerranéenne à hautes tiges florales jaunes." }, // Rank: Species // No specific Ency entry
    { name: "Chamerops", latin: "Chamaerops humilis", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/CHAMEROPS", urlImage: "chameropsPicture", urlWiki: "https://fr.wikipedia.org/wiki/Chamaerops_humilis", description: "Seul palmier nain originaire d'Europe continentale." }, // Rank: Species
    { name: "Ver à soie", latin: "Bombyx mori", author: "(L., 1758)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/SOIE", urlImage: "verASoiePicture", urlWiki: "https://fr.wikipedia.org/wiki/Bombyx_du_m%C3%BBrier", description: "Chenille du papillon bombyx du mûrier, qui produit un cocon utilisé pour fabriquer la soie." }, // Rank: Species // Ency uses SOIE
    { name: "Consoude", latin: "Symphytum officinale", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/CONSOUDE", urlImage: "consoudePicture", urlWiki: "https://fr.wikipedia.org/wiki/Consoude_officinale", description: "Plante aux propriétés cicatrisantes ('Oreille d'âne'), riche en potasse (purin)." }, // Rank: Species
    { name: "Pimprenelle", latin: "Sanguisorba minor", author: "(Scop., 1771)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/PIMPRENELLE", urlImage: "pimprenellePicture", urlWiki: "https://fr.wikipedia.org/wiki/Petite_pimprenelle", description: "Plante dont les jeunes feuilles au goût de concombre sont utilisées en salade." }, // Rank: Species
    { name: "Corbeille d'or", latin: "Aurinia saxatilis", author: "((L.) Desv., 1815)", urlEncy: "", urlImage: "corbeilleDOrPicture", urlWiki: "https://fr.wikipedia.org/wiki/Corbeille_d%27or", description: "Plante tapissante couverte de petites fleurs jaunes au printemps." }, // Rank: Species // No specific Ency entry
    { name: "Arroche", latin: "Atriplex hortensis", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/ARROCHE", urlImage: "arrochePicture", urlWiki: "https://fr.wikipedia.org/wiki/Arroche_des_jardins", description: "Légume feuille ancien, similaire à l'épinard, existant en variétés vertes ou rouges." }, // Rank: Species
    { name: "Sarcloir", latin: "", author: "", urlEncy: "", urlImage: "sarcloirPicture", urlWiki: "https://fr.wikipedia.org/wiki/Sarcloir", description: "Outil de jardinage pour désherber en coupant les mauvaises herbes à ras du sol." }, // Item: Tool // No specific Ency entry
    { name: "Statice", latin: "Limonium", author: "(Mill., 1754)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/STATICE", urlImage: "staticePicture", urlWiki: "https://fr.wikipedia.org/wiki/Limonium", description: "Plante dont les fleurs (souvent bleues, roses, blanches) sèchent bien ('Immortelle bleue')." }, // Rank: Genus
    { name: "Fritillaire", latin: "Fritillaria meleagris", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/FRITILLAIRE", urlImage: "fritillairePicture", urlWiki: "https://fr.wikipedia.org/wiki/Fritillaire_pintade", description: "Plante à bulbe aux fleurs pendantes en damier pourpre ('Pintade')." }, // Rank: Species
    { name: "Bourrache", latin: "Borago officinalis", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/BOURRACHE", urlImage: "bourrachePicture", urlWiki: "https://fr.wikipedia.org/wiki/Bourrache_officinale", description: "Plante velue aux fleurs bleues comestibles, mellifère et médicinale." }, // Rank: Species
    { name: "Valériane", latin: "Valeriana officinalis", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/VALERIANE", urlImage: "valerianePicture", urlWiki: "https://fr.wikipedia.org/wiki/Val%C3%A9riane_officinale", description: "Plante dont la racine a des propriétés calmantes et sédatives." }, // Rank: Species // Ency uses VALERIANE
    { name: "Carpe", latin: "Cyprinus carpio", author: "(L., 1758)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/CARPE", urlImage: "carpePicture", urlWiki: "https://fr.wikipedia.org/wiki/Carpe_commune", description: "Poisson d'eau douce commun, élevé en étang." }, // Rank: Species
    { name: "Fusain", latin: "Euonymus europaeus", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/FUSAIN", urlImage: "fusainPicture", urlWiki: "https://fr.wikipedia.org/wiki/Fusain_d%27Europe", description: "Arbuste dont les fruits roses et oranges sont toxiques ('Bonnet d'évêque')." }, // Rank: Species
    { name: "Civette", latin: "Allium schoenoprasum", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/CIBOULETTE", urlImage: "civettePicture", urlWiki: "https://fr.wikipedia.org/wiki/Ciboulette", description: "Plante aromatique proche de l'oignon, dont on utilise les fines feuilles ciselées." }, // Rank: Species (Ciboulette) // Ency uses CIBOULETTE
    { name: "Buglosse", latin: "Anchusa", author: "(L., 1753)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/BUGLOSSE", urlImage: "buglossePicture", urlWiki: "https://fr.wikipedia.org/wiki/Buglosse", description: "Plante à fleurs bleues, souvent rêche au toucher, de la famille de la bourrache." }, // Rank: Genus
    { name: "Sénevé", latin: "Brassica nigra", author: "((L.) W.D.J.Koch, 1833)", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/S%C3%89NEV%C3%89", urlImage: "senevePicture", urlWiki: "https://fr.wikipedia.org/wiki/Moutarde_noire", description: "Plante dont les graines servent à faire la moutarde." }, // Rank: Species (Moutarde noire)
    { name: "Houlette", latin: "", author: "", urlEncy: "https://fr.m.wikisource.org/wiki/L%E2%80%99Encyclop%C3%A9die/1re_%C3%A9dition/HOULETTE", urlImage: "houlettePicture", urlWiki: "https://fr.wikipedia.org/wiki/Houlette_(berger)", description: "Long bâton de berger terminé par une plaque de fer ou une crosse." } // Item: Tool
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
        if (year === 0) return false;
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    function isJulianLeap(year) {
         if (year <= 0) return false;
        return year % 4 === 0;
    }

    function isRepublicanSextileRomme(an) {
        if (an === 0) return false;
        return (an % 4 === 0 && an % 100 !== 0) || (an % 400 === 0);
    }

    function gregorianToJDN(d, m, y) {
        if (m <= 2) { y -= 1; m += 12; }
        const A = Math.floor(y / 100); const B = 2 - A + Math.floor(A / 4);
        const jdn = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
        return Math.floor(jdn);
    }

    function julianToJDN(d, m, y) {
        if (m <= 2) { y -= 1; m += 12; }
        const jdn = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d - 1524.5;
        return Math.floor(jdn);
    }

    function jdnToGregorian(jdn) {
        const L = jdn + 68569; const N = Math.floor(4 * L / 146097);
        const L2 = L - Math.floor((146097 * N + 3) / 4); const I = Math.floor(4000 * (L2 + 1) / 1461001);
        const L3 = L2 - Math.floor(1461 * I / 4) + 31; const J = Math.floor(80 * L3 / 2447);
        const D = L3 - Math.floor(2447 * J / 80); const L4 = Math.floor(J / 11);
        const M = J + 2 - 12 * L4; const Y = 100 * (N - 49) + I + L4;
        return { day: D, month: M, year: Y };
    }

    function toRoman(num) {
        if (num === 0) return "0?"; if (num < 0) return `-${toRoman(Math.abs(num))}`; if (num >= 4000) return num.toString();
        const romanMap = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
        let roman = ''; let currentNum = num;
        for (let key in romanMap) { while (currentNum >= romanMap[key]) { roman += key; currentNum -= romanMap[key]; } }
        return roman;
    }

    // --- Pré-calcul des JDN des Équinoxes & Détermination de la Plage ---
    let equinoxJDNs = {};
    function precomputeEquinoxJDNs() {
        console.log("Début pré-calcul JDN équinoxes...");
        equinoxJDNs = {}; minEquinoxDataYear = null; maxEquinoxDataYear = null; let count = 0;
        const yearsInData = Object.keys(equinoxDates).map(Number).filter(y => !isNaN(y));
        if (yearsInData.length === 0) { console.error("Aucune donnée valide dans equinoxDates !"); return; }
        yearsInData.sort((a, b) => a - b); minEquinoxDataYear = yearsInData[0]; maxEquinoxDataYear = yearsInData[yearsInData.length - 1];
        console.log(`Années trouvées: ${minEquinoxDataYear} à ${maxEquinoxDataYear}`);
        try {
            for (const year of yearsInData) { const date = equinoxDates[year]; if (date && typeof date.day === 'number' && typeof date.month === 'number') { equinoxJDNs[year] = gregorianToJDN(date.day, date.month, year); count++; } else { console.warn(`Donnée invalide pour ${year}.`); } }
            console.log(`JDN équinoxes calculés: ${count}`);
            if (equinoxJDNs[maxEquinoxDataYear]) { const anApproxMax = (maxEquinoxDataYear >= 1792) ? (maxEquinoxDataYear - 1791) : (maxEquinoxDataYear - 1792); const daysInLastYear = isRepublicanSextileRomme(anApproxMax) ? 366 : 365; const jdnNextYearApprox = equinoxJDNs[maxEquinoxDataYear] + daysInLastYear; equinoxJDNs[maxEquinoxDataYear + 1] = jdnNextYearApprox; console.log(`JDN estimé pour début année ${maxEquinoxDataYear + 1}: ${equinoxJDNs[maxEquinoxDataYear + 1]}`); }
            else if (maxEquinoxDataYear) { console.error(`Impossible d'estimer JDN pour ${maxEquinoxDataYear + 1}.`); }
             console.log("Fin pré-calcul.");
        } catch (error) { console.error("Erreur pré-calcul:", error); }
    }

    // --- Mise à jour de l'interface utilisateur avec la plage dynamique ---
    function updateUIRange() {
        if (minEquinoxDataYear && maxEquinoxDataYear && equinoxJDNs[maxEquinoxDataYear + 1]) {
            const lastRepYear = (maxEquinoxDataYear >= 1792) ? (maxEquinoxDataYear - 1791) : (maxEquinoxDataYear - 1792);
            const lastRepYearDisplay = `An ${toRoman(lastRepYear)}`;
             supportedRangeInfo.textContent = `Calcul Équinoxe possible env. de Sep ${minEquinoxDataYear} à Sep ${maxEquinoxDataYear + 1} (fin ${lastRepYearDisplay}).`;
             yearInput.max = maxEquinoxDataYear; yearInput.title = `Année (min 1, max: ${maxEquinoxDataYear})`;
        } else { supportedRangeInfo.textContent = "Données équinoxe insuffisantes pour le calcul."; yearInput.removeAttribute('max'); yearInput.title = `Année (min 1)`; }
    }


// --- Calcul Principal (Méthode Équinoxe - Révisé pour retourner jour/mois) ---
    function calculateEquinoxDateUsingJDN(inputJDN) {
        // ... (Validation JDN, recherche intervalle, calcul targetYear, startAnJDN, nextStartAnJDN inchangés) ...
        if (!inputJDN || isNaN(inputJDN)) { return { error: "JDN invalide fourni.", missingData: false }; }
        const yearsAvailable = Object.keys(equinoxJDNs).map(Number).sort((a, b) => a - b);
        if (yearsAvailable.length < 2) { return { error: "Données d'équinoxe insuffisantes.", missingData: true }; }
        const firstAvailableYear = yearsAvailable[0]; const firstAvailableJDN = equinoxJDNs[firstAvailableYear];
        const lastAvailableYearPlus1 = yearsAvailable[yearsAvailable.length - 1]; const lastAvailableJDNPlus1 = equinoxJDNs[lastAvailableYearPlus1];
        if (inputJDN < firstAvailableJDN) { return { error: `Données équinoxe non disponibles (avant ${firstAvailableYear}).`, missingData: true }; }
        if (!lastAvailableJDNPlus1 || inputJDN >= lastAvailableJDNPlus1) { const lastActualDataYear = lastAvailableYearPlus1 - 1; const lastRepAn = (lastActualDataYear >= 1792) ? (lastActualDataYear - 1791) : (lastActualDataYear - 1792); return { error: `Date hors plage des données équinoxe (après An ${toRoman(lastRepAn)}).`, missingData: true }; }
        let targetYear = -1, startAnJDN = -1, nextStartAnJDN = -1;
        for (let i = 0; i < yearsAvailable.length - 1; i++) { const currentYear = yearsAvailable[i], nextYear = yearsAvailable[i+1]; const currentStartJDN = equinoxJDNs[currentYear], nextJDN = equinoxJDNs[nextYear]; if (currentStartJDN === undefined || nextJDN === undefined) { continue; } if (inputJDN >= currentStartJDN && inputJDN < nextJDN) { targetYear = currentYear; startAnJDN = currentStartJDN; nextStartAnJDN = nextJDN; break; } }
        if (targetYear === -1) { return { error: "Impossible de trouver l'intervalle d'année (Erreur interne).", missingData: true }; }
        let currentAn = (targetYear >= 1792) ? (targetYear - 1791) : (targetYear - 1792);
        if (isNaN(currentAn)) { return { error: "Erreur calcul An Rép." }; }
        const dayOfYear = inputJDN - startAnJDN + 1; const yearLength = nextStartAnJDN - startAnJDN; const isSextile = (yearLength === 366);

        let republicanDay = 0, republicanMonthIndex = -1, decadeDayName = "", monthName = "", dayPrefix = "";
        let isComplementary = false;
        let feteInfo = { name: "Inconnue", latin: "", author: "", urlEncy: "", urlImage: "", urlWiki: "", description: "", commemoration: undefined };

        if (dayOfYear > 360) {
            isComplementary = true; const complementaryDayIndex = dayOfYear - 361;
            if (complementaryDayIndex < 0 || complementaryDayIndex >= (isSextile ? 6 : 5)) { return { error: "Erreur: Jour complémentaire invalide." }; }
            const compDayName = (complementaryDaysNames && complementaryDaysNames[complementaryDayIndex]) ? complementaryDaysNames[complementaryDayIndex] : `Jour Comp. ${complementaryDayIndex + 1}`;
            dayPrefix = compDayName; decadeDayName = ""; monthName = ""; republicanDay = complementaryDayIndex + 1; // Use index+1 for day number in comp days
            if (complementaryItems && complementaryItems[complementaryDayIndex]) { feteInfo = { ...feteInfo, ...complementaryItems[complementaryDayIndex] }; } else if (compDayName) { feteInfo.name = compDayName; }
        } else {
            isComplementary = false; republicanMonthIndex = Math.floor((dayOfYear - 1) / 30); republicanDay = (dayOfYear - 1) % 30 + 1;
            if (republicanMonthIndex < 0 || republicanMonthIndex >= 12 || republicanDay < 1 || republicanDay > 30) { return { error: "Erreur calcul mois/jour Rép."}; }
            decadeDayName = decadeDays[(republicanDay - 1) % 10]; monthName = republicanMonths[republicanMonthIndex];
            dayPrefix = `${decadeDayName} ${republicanDay} ${monthName}`;
            try { const dayIndex = republicanDay - 1; if (dailyItems && dailyItems[republicanMonthIndex] && dailyItems[republicanMonthIndex][dayIndex]) { feteInfo = { ...feteInfo, ...dailyItems[republicanMonthIndex][dayIndex] }; } }
            catch (e) { console.error(`Erreur accès dailyItems[${republicanMonthIndex}][${republicanDay - 1}]`, e); }
        }

        // ** MODIFICATION : Retourner plus de composants pour formatage flexible **
        return {
            datePrefix: dayPrefix,          // Ex: "Octidi 28 Germinal" ou "Jour de la Vertu"
            decadeDay: decadeDayName,       // Ex: "Octidi" ou ""
            day: republicanDay,             // Ex: 28 ou 1 (pour 1er jour comp)
            month: monthName,               // Ex: "Germinal" ou ""
            currentAn: currentAn,           // Ex: 233, -11 etc. (Numérique)
            isComplementary: isComplementary,// Boolean
            // Reste des infos
            fete: feteInfo.name, latin: feteInfo.latin, author: feteInfo.author,
            description: feteInfo.description, urlImage: feteInfo.urlImage,
            urlWiki: feteInfo.urlWiki, urlEncy: feteInfo.urlEncy,
            commemoration: feteInfo.commemoration
        };
    } // Fin calculateEquinoxDateUsingJDN
	
    // --- Calcul Secondaire (Méthode Romme - Reste >= An I) ---
    function calculateRommeDateUsingJDN(inputJDN) {
        // Identique à la version précédente
        if (!inputJDN || isNaN(inputJDN)) { return { error: "JDN invalide fourni (Romme)." }; }
        const republicanEpochJDN = 2375840; if (inputJDN < republicanEpochJDN) { return { date: "N/A (avant An I)" }; }
        let currentAnRomme = 1; let startOfYearJDNRomme = republicanEpochJDN;
        while (true) { const isSextileRomme = isRepublicanSextileRomme(currentAnRomme); const daysInCurrentAnRomme = isSextileRomme ? 366 : 365; const nextYearStartJDNRomme = startOfYearJDNRomme + daysInCurrentAnRomme; if (inputJDN >= startOfYearJDNRomme && inputJDN < nextYearStartJDNRomme) { break; } if (inputJDN < startOfYearJDNRomme) { return { error: "Erreur calcul An (Romme)." }; } startOfYearJDNRomme = nextYearStartJDNRomme; currentAnRomme++; if (currentAnRomme > 4000) { return { error: "Erreur boucle An (Romme > 4000)."}; } }
        const dayOfYearRomme = inputJDN - startOfYearJDNRomme + 1; const isSextileRomme = isRepublicanSextileRomme(currentAnRomme); let formattedDateRomme = "";
        if (dayOfYearRomme > 360) { const complementaryDayIndexRomme = dayOfYearRomme - 361; if (complementaryDayIndexRomme < 0 || complementaryDayIndexRomme >= (isSextileRomme ? 6 : 5)) { return { error: "Erreur: Jour complémentaire invalide (Romme)." }; } const compDayName = (complementaryDaysNames && complementaryDaysNames[complementaryDayIndexRomme]) ? complementaryDaysNames[complementaryDayIndexRomme] : `Jour Comp. ${complementaryDayIndexRomme + 1}`; formattedDateRomme = `${compDayName} An ${toRoman(currentAnRomme)}`; }
        else { const monthIndexRomme = Math.floor((dayOfYearRomme - 1) / 30); const dayRomme = (dayOfYearRomme - 1) % 30 + 1; if (monthIndexRomme < 0 || monthIndexRomme >= 12 || dayRomme < 1 || dayRomme > 30) { return { error: "Erreur calcul mois/jour Rép. (Romme)."}; } const monthNameRomme = republicanMonths[monthIndexRomme]; formattedDateRomme = `${dayRomme} ${monthNameRomme} An ${toRoman(currentAnRomme)}`; }
        return { date: formattedDateRomme };
    }


    // --- Event Listener (MODIFIÉ pour nouvelle logique d'affichage) ---
    convertButton.addEventListener('click', () => {
        // --- Récupération ---
        const day = parseInt(dayInput.value, 10); const month = parseInt(monthInput.value, 10); const year = parseInt(yearInput.value, 10);

        // --- Reset affichages ---
        errorDisplay.textContent = ''; errorDisplay.style.display = 'none'; calendarInfoDisplay.textContent = '';
        republicanDateEquinoxCol1.textContent = '---'; rommeDateInfoCol1.textContent = 'Date selon méthode Romme : ---';
        if (detailsColumnTitle) detailsColumnTitle.textContent = 'Détails du Jour Républicain';
        if (feteDateDisplay) feteDateDisplay.textContent = '---';
        if (feteLatinAuthorLine) { feteLatinDisplay.textContent = ''; feteAuthorDisplay.textContent = ''; feteLatinAuthorLine.style.display = 'none'; }
        if (feteDescriptionDisplay) feteDescriptionDisplay.textContent = '---';
        if (commemorationArea) { commemorationArea.style.display = 'none'; if (commemorationTitle) commemorationTitle.textContent = ''; if (commemorationDesc) commemorationDesc.textContent = ''; }
        if (imageContainer) { wikiLink.style.display = 'none'; wikiLink.href = '#'; wikiLink.removeAttribute('target'); image.style.display = 'none'; image.src = ''; image.alt = ''; imagePlaceholder.style.display = 'block'; }
        if(encycloFrame) { encycloFrame.style.display = 'none'; encycloFrame.src = 'about:blank'; } if(encycloPlaceholder) encycloPlaceholder.style.display = 'block';

        // --- Validation et Calcul JDN ---
        if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year) || year === 0) { errorDisplay.textContent = "Date invalide/incomplète."; errorDisplay.style.display = 'block'; return; }
        let inputJDN; let calendarUsed = 'Gregorian';
        const GREGORIAN_REFORM_YEAR = 1582; const GREGORIAN_REFORM_MONTH = 10; const GREGORIAN_REFORM_DAY_JULIAN_END = 4; const GREGORIAN_REFORM_DAY_GREGORIAN_START = 15;
        const isPreGregorianReform = year < GREGORIAN_REFORM_YEAR || (year === GREGORIAN_REFORM_YEAR && month < GREGORIAN_REFORM_MONTH) || (year === GREGORIAN_REFORM_YEAR && month === GREGORIAN_REFORM_MONTH && day <= GREGORIAN_REFORM_DAY_JULIAN_END);
        const isSkippedDate = (year === GREGORIAN_REFORM_YEAR && month === GREGORIAN_REFORM_MONTH && day > GREGORIAN_REFORM_DAY_JULIAN_END && day < GREGORIAN_REFORM_DAY_GREGORIAN_START);
        if (isSkippedDate) { errorDisplay.textContent = `Date invalide: ${day} Oct 1582 n'existe pas.`; errorDisplay.style.display = 'block'; return; }
        try {
            if (isPreGregorianReform) { const daysInJulianMonth = [0, 31, isJulianLeap(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; if (month < 1 || month > 12 || day < 1 || day > daysInJulianMonth[month]) { throw new Error(`Date Julienne invalide.`); } inputJDN = julianToJDN(day, month, year); calendarUsed = 'Julian'; calendarInfoDisplay.textContent = `Note: Date (${day}/${month}/${year}) traitée comme Julienne.`; }
            else { const daysInGregorianMonth = [0, 31, isGregorianLeap(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; if (month < 1 || month > 12 || day < 1 || day > daysInGregorianMonth[month]) { throw new Error(`Date Grégorienne invalide.`); } inputJDN = gregorianToJDN(day, month, year); calendarUsed = 'Gregorian'; calendarInfoDisplay.textContent = `Note: Date (${day}/${month}/${year}) traitée comme Grégorienne.`; }
            console.log(`Using ${calendarUsed} calendar. JDN: ${inputJDN}`);

            // --- Appel Calcul Républicain ---
            const resultEquinox = calculateEquinoxDateUsingJDN(inputJDN);
            const resultRomme = calculateRommeDateUsingJDN(inputJDN);

// --- Affichage ---
            if (resultEquinox.error) {
                 // Colonne 1: Afficher l'erreur pour Equinoxe
                 republicanDateEquinoxCol1.textContent = resultEquinox.error;
                 // Colonne 2: Reset Titre
                 if (detailsColumnTitle) detailsColumnTitle.textContent = 'Détails du Jour Républicain';
                 if (feteDateDisplay) feteDateDisplay.textContent = '---';
                 // (Les autres éléments Col 2 sont déjà reset)
            } else if (resultEquinox.datePrefix !== undefined && resultEquinox.currentAn !== undefined) {
                 // ** COLONNE 1 **
                 // Afficher Date Equinoxe avec An Romain ET An Arabe
                 republicanDateEquinoxCol1.textContent = `${resultEquinox.datePrefix} An ${toRoman(resultEquinox.currentAn)} (${resultEquinox.currentAn})`;

                 // ** COLONNE 2 **
                 if (detailsColumnTitle) detailsColumnTitle.textContent = `Détails du Jour Républicain`;

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
                         if(feteLatinDisplay) feteLatinDisplay.textContent = resultEquinox.latin || '';
                         if(feteAuthorDisplay) feteAuthorDisplay.textContent = resultEquinox.author || '';
                         feteLatinAuthorLine.style.display = 'block';
                    } else {
                         feteLatinAuthorLine.style.display = 'none';
                    }
                 }
                 if(feteDescriptionDisplay) feteDescriptionDisplay.textContent = resultEquinox.description || 'Pas de description.';

                 // Image / Wiki
                 if (resultEquinox.urlImage && imageContainer) { image.src = resultEquinox.urlImage; image.alt = `Illustration pour ${resultEquinox.fete}`; image.style.display = 'block'; imagePlaceholder.style.display = 'none'; if (resultEquinox.urlWiki && wikiLink) { wikiLink.href = resultEquinox.urlWiki; wikiLink.target = '_blank'; wikiLink.style.display = 'inline-block'; } else if (wikiLink) { wikiLink.style.display = 'none'; } }
                 else if (imageContainer) { imagePlaceholder.style.display = 'block'; image.style.display = 'none'; if (wikiLink) wikiLink.style.display = 'none'; }

                 // Commémoration (sous l'image)
                 if (commemorationArea && resultEquinox.commemoration && resultEquinox.commemoration.title && resultEquinox.commemoration.description) { if(commemorationTitle) commemorationTitle.innerHTML = `<span class="commemoration-tagline">Ce jour-là :</span> ${resultEquinox.commemoration.title}`; if(commemorationDesc) commemorationDesc.textContent = resultEquinox.commemoration.description; commemorationArea.style.display = 'block'; }
                 else { if (commemorationArea) commemorationArea.style.display = 'none'; }

                 // ** COLONNE 3 ** Encyclopédie
                 if (resultEquinox.urlEncy && encycloFrame) {
                     encycloFrame.src = resultEquinox.urlEncy;
                     encycloFrame.style.display = 'block';
                     if(encycloPlaceholder) encycloPlaceholder.style.display = 'none';
                     console.log("Chargement Encyclopédie: ", resultEquinox.urlEncy);
                 } else if (encycloFrame) {
                     // Pas d'URL ou erreur précédente, assure que c'est caché/reset
                     encycloFrame.style.display = 'none';
                     if(encycloPlaceholder) encycloPlaceholder.style.display = 'block';
                     encycloFrame.src = 'about:blank';
                 }
            } else {
                 // Cas d'erreur imprévu
                 republicanDateEquinoxCol1.textContent = "Erreur résultat Equinoxe";
                 console.error("Résultat Equinoxe invalide:", resultEquinox);
                 if (feteDateDisplay) feteDateDisplay.textContent = '---'; // Reset titre col 2 aussi
            }


            // Affichage Romme (toujours en Col 1)
            if (resultRomme.error) { rommeDateInfoCol1.textContent = `Date selon méthode Romme : Erreur (${resultRomme.error})`; }
            else if (resultRomme.date) { rommeDateInfoCol1.textContent = `Date selon méthode Romme : ${resultRomme.date}`; }
            else { rommeDateInfoCol1.textContent = `Date selon méthode Romme : Erreur inconnue`; }
			
        } catch (e) { console.error("Erreur:", e); errorDisplay.textContent = e.message || "Erreur."; errorDisplay.style.display = 'block'; }
    }); // Fin Event Listener

    // --- Initialisation ---
    precomputeEquinoxJDNs();
    updateUIRange();
    yearInput.min = 1;

    // --- Pré-remplir Date Actuelle ---
    function prefillAndConvertCurrentDate() {
        try {
            const today = new Date();
            const currentDay = today.getDate(); const currentMonth = today.getMonth() + 1; const currentYear = today.getFullYear();
            console.log(`Pré-remplissage avec date dynamique: ${currentDay}/${currentMonth}/${currentYear}`);
            dayInput.value = currentDay; monthInput.value = currentMonth; yearInput.value = currentYear;
            convertButton.click(); // Toujours déclencher
        } catch(e) { console.error("Erreur lors du pré-remplissage:", e); }
    }
    prefillAndConvertCurrentDate();

}); // Fin DOMContentLoaded
