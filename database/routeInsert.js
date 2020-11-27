import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Inserting Routes into the database Sucessfully!!!', results);
            },
                  (error) => {
                        reject('Failed to inserts Routes into the database!', error);
                  });
      });
});

const insertRoutesAsync = async () => {

      let routes = [
            {
                  "id": 1,
                  "name": "PO",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 2,
                  "name": "IV, SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 3,
                  "name": "IP",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 4,
                  "name": "IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 5,
                  "name": "IM",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 6,
                  "name": "SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 7,
                  "name": "PO, slow IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 8,
                  "name": "slow IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 9,
                  "name": "IV, IM",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 10,
                  "name": "PO, gastric tube",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 11,
                  "name": "(ocular)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 12,
                  "name": "inhaled",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 13,
                  "name": "IM, IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 14,
                  "name": "IV, IM, SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 15,
                  "name": "topical",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 16,
                  "name": "dip",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 17,
                  "name": "topical in conjunctival sac",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 18,
                  "name": "IM, SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 19,
                  "name": "intralesional injection",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 20,
                  "name": "local",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 21,
                  "name": "local (inferior temporal retrobulbar block)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 22,
                  "name": "local (at middle mental foramen)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 23,
                  "name": "intrathoracic (interpleural)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 24,
                  "name": "injection on intercostal nerve",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 25,
                  "name": "intraarticular",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 26,
                  "name": "local (peri-incisional)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 27,
                  "name": "epidural",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 28,
                  "name": "intratesticular",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 29,
                  "name": "transdermal patch",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 30,
                  "name": "oral transmucosal",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 31,
                  "name": "PO (on food)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 32,
                  "name": "intratesticular injection",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 33,
                  "name": "IV, PO",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 34,
                  "name": "transdermal",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 35,
                  "name": "SC catheter",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 36,
                  "name": "intracavitary",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 37,
                  "name": "intralesional",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 38,
                  "name": "IV, SC, IM",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 39,
                  "name": "SC, IM, IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 40,
                  "name": "intracavitary (interpleural, intraabdominal)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 41,
                  "name": "implant",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 42,
                  "name": "intranasal",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 43,
                  "name": "intravesicular",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 44,
                  "name": "PO, IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 45,
                  "name": "PO, per rectum",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 46,
                  "name": "intrathecal",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 47,
                  "name": "topical conjunctival",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 48,
                  "name": "per rectum",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 49,
                  "name": "deep IM",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 50,
                  "name": "PO, SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 51,
                  "name": "IV, SC, PO",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 52,
                  "name": "topical intranasal",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 53,
                  "name": "SC, PO",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 54,
                  "name": "transdermal solution",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 55,
                  "name": "IM, sublingual, per rectum",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 56,
                  "name": "intra-arterial infusion",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 57,
                  "name": "SC implant",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 58,
                  "name": "lavage",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 59,
                  "name": "SC, IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 60,
                  "name": "topical OU",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 61,
                  "name": "intralesional, SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 62,
                  "name": "perilesionally and intradermally, SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 63,
                  "name": "AU",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 64,
                  "name": "topical (to gingiva)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 65,
                  "name": "via orogastric tube",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 66,
                  "name": "IV, PO, SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 67,
                  "name": "peritendinous",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 68,
                  "name": "subconj",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 69,
                  "name": "intravaginal",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 70,
                  "name": "intrathecal, slow injection",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 71,
                  "name": "intraarterial",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 72,
                  "name": "SC, IM",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 73,
                  "name": "PO, via gastrostomy tube",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 74,
                  "name": "topical cutaneous",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 75,
                  "name": "IM, PO",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 76,
                  "name": "intra-articular",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 77,
                  "name": "IM, epidural",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 78,
                  "name": "Retrobulbar",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 79,
                  "name": "Intrathrombus",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 80,
                  "name": "IM or SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 81,
                  "name": "Intrarenal (renal pelvis)",
                  "created_at": "2020-09-27T22:52:43.000000Z",
                  "updated_at": "2020-09-27T22:52:43.000000Z"
            },
            {
                  "id": 82,
                  "name": "subarachnoid (intrathecal)",
                  "created_at": "2020-09-29T21:43:56.000000Z",
                  "updated_at": "2020-09-29T21:43:56.000000Z"
            },
            {
                  "id": 83,
                  "name": "Intrarenal: into ureter and renal pelvis via catheter/stent",
                  "created_at": "2020-09-29T22:21:44.000000Z",
                  "updated_at": "2020-09-29T22:21:44.000000Z"
            },
            {
                  "id": 84,
                  "name": "IG (orogastric intubation)",
                  "created_at": "2020-09-30T01:02:41.000000Z",
                  "updated_at": "2020-09-30T01:02:41.000000Z"
            },
            {
                  "id": 85,
                  "name": "PO (mixed with food)",
                  "created_at": "2020-09-30T01:02:54.000000Z",
                  "updated_at": "2020-09-30T01:02:54.000000Z"
            },
            {
                  "id": 86,
                  "name": "IV CRI",
                  "created_at": "2020-10-01T12:32:13.000000Z",
                  "updated_at": "2020-10-01T12:32:13.000000Z"
            },
            {
                  "id": 87,
                  "name": "Inhalation",
                  "created_at": "2020-11-04T17:23:02.000000Z",
                  "updated_at": "2020-11-04T17:23:02.000000Z"
            },
            {
                  "id": 88,
                  "name": "once intraoperatively",
                  "created_at": "2020-11-04T18:11:33.000000Z",
                  "updated_at": "2020-11-04T18:11:33.000000Z"
            },
            {
                  "id": 89,
                  "name": "Buccally",
                  "created_at": "2020-11-04T18:13:42.000000Z",
                  "updated_at": "2020-11-04T20:13:33.000000Z"
            },
            {
                  "id": 90,
                  "name": "Intraarticular (stifle joint)",
                  "created_at": "2020-11-08T19:57:55.000000Z",
                  "updated_at": "2020-11-08T19:57:55.000000Z"
            },
            {
                  "id": 91,
                  "name": "Nebulization",
                  "created_at": "2020-11-09T20:24:07.000000Z",
                  "updated_at": "2020-11-09T20:24:07.000000Z"
            },
            {
                  "id": 92,
                  "name": "Intra-nodule",
                  "created_at": "2020-11-11T18:47:45.000000Z",
                  "updated_at": "2020-11-11T18:47:45.000000Z"
            },
            {
                  "id": 93,
                  "name": "Inhalant",
                  "created_at": "2020-11-11T21:19:56.000000Z",
                  "updated_at": "2020-11-11T21:19:56.000000Z"
            },
            {
                  "id": 94,
                  "name": "IV bolus",
                  "created_at": "2020-11-12T19:24:00.000000Z",
                  "updated_at": "2020-11-12T19:24:00.000000Z"
            },
            {
                  "id": 95,
                  "name": "topical ocular",
                  "created_at": "2020-11-16T02:32:05.000000Z",
                  "updated_at": "2020-11-16T02:32:05.000000Z"
            }
      ];
      let query2 = "INSERT INTO vdi_routes (id, name, created_at, updated_at) VALUES";
      for (let i = 0; i < routes.length; ++i) {
            query2 = query2 + "('"
                  + routes[i].id //id
                  + "','"
                  + routes[i].name //first_name
                  + "','"
                  + routes[i].created_at //last_name
                  + "','"
                  + routes[i].upd //is_deleted
                  + "')";
            if (i != routes.length - 1) {
                  query2 = query2 + ",";
            }
      }
      query2 = query2 + ";";

      let insertedRoutes = await ExecuteQuery(query2, []);
      console.log('Charles Inserting vdi_routes.................................', insertedRoutes);
      console.log('....................................................................');
}

export const routeInsert = {
      insertRoutesAsync

}
