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


    let dailyItems = []; // chargé depuis data.json

    // --- Data for Complementary Days ---
    let complementaryItems = []; // chargé depuis data.json



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
                 if (resultEquinox.urlImage && imageContainer) {
                     // Repli vers le placeholder si le lien n'est pas valide (image introuvable)
                     image.onerror = () => { image.onerror = null; image.style.display = 'none'; image.src = ''; if (wikiLink) wikiLink.style.display = 'none'; imagePlaceholder.style.display = 'block'; };
                     image.src = resultEquinox.urlImage; image.alt = `Illustration pour ${resultEquinox.fete}`; image.style.display = 'block'; imagePlaceholder.style.display = 'none'; if (resultEquinox.urlWiki && wikiLink) { wikiLink.href = resultEquinox.urlWiki; wikiLink.target = '_blank'; wikiLink.style.display = 'inline-block'; } else if (wikiLink) { wikiLink.style.display = 'none'; } }
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

    // --- Chargement des données externes (fêtes, illustrations, articles) ---
    // Les illustrations et liens vers l'Encyclopédie vivent désormais dans data.json,
    // et non plus en dur dans le code.
    function loadDailyData() {
        return fetch('data.json')
            .then(response => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
            })
            .then(data => {
                dailyItems = Array.isArray(data.dailyItems) ? data.dailyItems : [];
                complementaryItems = Array.isArray(data.complementaryItems) ? data.complementaryItems : [];
                console.log(`Données chargées : ${dailyItems.length} mois, ${complementaryItems.length} jours complémentaires.`);
            })
            .catch(err => {
                // Le calcul de la date républicaine fonctionne toujours sans data.json ;
                // seuls les détails du jour (illustration, article) seront indisponibles.
                console.error("Impossible de charger data.json :", err);
                if (errorDisplay) {
                    errorDisplay.textContent = "Erreur : impossible de charger les données du calendrier (data.json).";
                    errorDisplay.style.display = 'block';
                }
            })
            .finally(() => {
                prefillAndConvertCurrentDate();
            });
    }
    loadDailyData();

}); // Fin DOMContentLoaded
