import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Categories Succesfully inserted into the database', results);
            },
                  (error) => {
                        reject('Failed to inserts Categories into the database!', error);
                  });
      });
});

const insertCategoriesAsync = async() => {

 let data = [
      {
          "id": 1,
          "guid": "1",
          "name": "antihyperglycemic",
          "created_at": "2020-05-06T15:45:56.000000Z",
          "updated_at": "2020-05-06T15:45:56.000000Z"
      },
      {
          "id": 2,
          "guid": "2",
          "name": "immunostimulant",
          "created_at": "2020-05-06T15:47:16.000000Z",
          "updated_at": "2020-05-06T15:47:16.000000Z"
      },
      {
          "id": 3,
          "guid": "3",
          "name": "tranquilizer (phenothiazine)",
          "created_at": "2020-05-06T15:50:12.000000Z",
          "updated_at": "2020-05-06T15:50:12.000000Z"
      },
      {
          "id": 4,
          "guid": "4",
          "name": "analgesic",
          "created_at": "2020-05-06T15:51:59.000000Z",
          "updated_at": "2020-05-06T15:51:59.000000Z"
      },
      {
          "id": 5,
          "guid": "5",
          "name": "carbonic anhydrase inhibitor",
          "created_at": "2020-05-06T15:52:57.000000Z",
          "updated_at": "2020-05-06T15:52:57.000000Z"
      },
      {
          "id": 6,
          "guid": "6",
          "name": "antidote; mucolytic",
          "created_at": "2020-05-06T15:54:31.000000Z",
          "updated_at": "2020-05-06T15:54:31.000000Z"
      },
      {
          "id": 7,
          "guid": "7",
          "name": "nonsteroidal antiinflammatory, antiplatelet",
          "created_at": "2020-05-06T15:56:27.000000Z",
          "updated_at": "2020-05-06T15:56:27.000000Z"
      },
      {
          "id": 8,
          "guid": "8",
          "name": "hormone",
          "created_at": "2020-05-06T15:57:15.000000Z",
          "updated_at": "2020-05-06T15:57:15.000000Z"
      },
      {
          "id": 9,
          "guid": "9",
          "name": "hormone analog",
          "created_at": "2020-05-06T15:58:17.000000Z",
          "updated_at": "2020-05-06T15:58:17.000000Z"
      },
      {
          "id": 10,
          "guid": "10",
          "name": "antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T15:58:51.000000Z",
          "updated_at": "2020-05-06T15:58:51.000000Z"
      },
      {
          "id": 11,
          "guid": "11",
          "name": "antidote",
          "created_at": "2020-05-06T16:00:18.000000Z",
          "updated_at": "2020-05-06T16:00:18.000000Z"
      },
      {
          "id": 12,
          "guid": "12",
          "name": "antiviral",
          "created_at": "2020-05-06T16:01:14.000000Z",
          "updated_at": "2020-05-06T16:01:14.000000Z"
      },
      {
          "id": 13,
          "guid": "13",
          "name": "progesterone antagonist",
          "created_at": "2020-05-06T16:03:11.000000Z",
          "updated_at": "2020-05-06T16:03:11.000000Z"
      },
      {
          "id": 14,
          "guid": "14",
          "name": "antiparasitic (benzimidazole)",
          "created_at": "2020-05-06T16:04:43.000000Z",
          "updated_at": "2020-05-06T16:04:43.000000Z"
      },
      {
          "id": 15,
          "guid": "15",
          "name": "bronchodilator (beta-2 agonist)",
          "created_at": "2020-05-06T16:06:21.000000Z",
          "updated_at": "2020-05-06T16:06:21.000000Z"
      },
      {
          "id": 16,
          "guid": "16",
          "name": "antihypercalcemic (bisphosphonate)",
          "created_at": "2020-05-06T16:07:30.000000Z",
          "updated_at": "2020-05-06T16:07:30.000000Z"
      },
      {
          "id": 17,
          "guid": "17",
          "name": "anesthetic induction agent (steroid)",
          "created_at": "2020-05-06T16:08:28.000000Z",
          "updated_at": "2020-05-06T16:08:28.000000Z"
      },
      {
          "id": 18,
          "guid": "18",
          "name": "xanthine oxidase inhibitor",
          "created_at": "2020-05-06T16:09:38.000000Z",
          "updated_at": "2020-05-06T16:09:38.000000Z"
      },
      {
          "id": 19,
          "guid": "19",
          "name": "tranquilizer (benzodiazepine)",
          "created_at": "2020-05-06T16:10:19.000000Z",
          "updated_at": "2020-05-06T16:10:19.000000Z"
      },
      {
          "id": 20,
          "guid": "20",
          "name": "phosphate binder; antacid",
          "created_at": "2020-05-06T16:11:45.000000Z",
          "updated_at": "2020-05-06T16:11:45.000000Z"
      },
      {
          "id": 21,
          "guid": "21",
          "name": "analgesic (NMDA antagonist); antiviral",
          "created_at": "2020-05-06T16:12:26.000000Z",
          "updated_at": "2020-05-06T16:12:26.000000Z"
      },
      {
          "id": 22,
          "guid": "22",
          "name": "antibacterial (aminoglycoside)",
          "created_at": "2020-05-06T16:13:29.000000Z",
          "updated_at": "2020-05-06T16:13:29.000000Z"
      },
      {
          "id": 23,
          "guid": "23",
          "name": "antifibrinolytic",
          "created_at": "2020-05-06T16:14:21.000000Z",
          "updated_at": "2020-05-06T16:14:21.000000Z"
      },
      {
          "id": 24,
          "guid": "24",
          "name": "gastrointestinal antispasmodic, anticholinergic/parasympatholytic",
          "created_at": "2020-05-06T16:15:10.000000Z",
          "updated_at": "2020-05-06T16:15:10.000000Z"
      },
      {
          "id": 25,
          "guid": "25",
          "name": "bronchodilator (methylxanthine)",
          "created_at": "2020-05-06T16:16:24.000000Z",
          "updated_at": "2020-05-06T16:16:24.000000Z"
      },
      {
          "id": 26,
          "guid": "26",
          "name": "antiarrhythmic",
          "created_at": "2020-05-06T16:17:42.000000Z",
          "updated_at": "2020-05-06T16:17:42.000000Z"
      },
      {
          "id": 27,
          "guid": "27",
          "name": "antiparasitic",
          "created_at": "2020-05-06T16:18:36.000000Z",
          "updated_at": "2020-05-06T16:18:36.000000Z"
      },
      {
          "id": 28,
          "guid": "28",
          "name": "antidepressant (tricyclic)",
          "created_at": "2020-05-06T16:19:35.000000Z",
          "updated_at": "2020-05-06T16:19:35.000000Z"
      },
      {
          "id": 29,
          "guid": "29",
          "name": "antihypertensive (calcium-channel blocker)",
          "created_at": "2020-05-06T16:21:22.000000Z",
          "updated_at": "2020-05-06T16:21:22.000000Z"
      },
      {
          "id": 30,
          "guid": "30",
          "name": "urinary acidifier",
          "created_at": "2020-05-06T16:22:25.000000Z",
          "updated_at": "2020-05-06T16:22:25.000000Z"
      },
      {
          "id": 31,
          "guid": "31",
          "name": "antibacterial (penicillin class)",
          "created_at": "2020-05-06T16:25:05.000000Z",
          "updated_at": "2020-05-06T16:25:05.000000Z"
      },
      {
          "id": 32,
          "guid": "32",
          "name": "antibacterial (penicillin class + beta-lactamase inhibitor)",
          "created_at": "2020-05-06T16:27:51.000000Z",
          "updated_at": "2020-05-06T16:27:51.000000Z"
      },
      {
          "id": 33,
          "guid": "33",
          "name": "antifungal (polyene)",
          "created_at": "2020-05-06T16:28:49.000000Z",
          "updated_at": "2020-05-06T16:28:49.000000Z"
      },
      {
          "id": 34,
          "guid": "33",
          "name": "antifungal (polyene)",
          "created_at": "2020-05-06T16:29:40.000000Z",
          "updated_at": "2020-05-06T16:29:40.000000Z"
      },
      {
          "id": 35,
          "guid": "33",
          "name": "antifungal (polyene)",
          "created_at": "2020-05-06T16:30:27.000000Z",
          "updated_at": "2020-05-06T16:30:27.000000Z"
      },
      {
          "id": 36,
          "guid": "31",
          "name": "antibacterial (penicillin class)",
          "created_at": "2020-05-06T16:32:17.000000Z",
          "updated_at": "2020-05-06T16:32:17.000000Z"
      },
      {
          "id": 37,
          "guid": "32",
          "name": "antibacterial (penicillin class + beta-lactamase inhibitor)",
          "created_at": "2020-05-06T16:32:55.000000Z",
          "updated_at": "2020-05-06T16:32:55.000000Z"
      },
      {
          "id": 38,
          "guid": "34",
          "name": "coccidiostat (thiamin antagonist)",
          "created_at": "2020-05-06T16:33:38.000000Z",
          "updated_at": "2020-05-06T16:33:38.000000Z"
      },
      {
          "id": 39,
          "guid": "35",
          "name": "emetic",
          "created_at": "2020-05-06T16:34:50.000000Z",
          "updated_at": "2020-05-06T16:34:50.000000Z"
      },
      {
          "id": 40,
          "guid": "36",
          "name": "vitamin",
          "created_at": "2020-05-06T16:35:37.000000Z",
          "updated_at": "2020-05-06T16:35:37.000000Z"
      },
      {
          "id": 41,
          "guid": "10",
          "name": "antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T16:37:28.000000Z",
          "updated_at": "2020-05-06T16:37:28.000000Z"
      },
      {
          "id": 42,
          "guid": "37",
          "name": "beta-adrenergic blocker",
          "created_at": "2020-05-06T16:39:12.000000Z",
          "updated_at": "2020-05-06T16:39:12.000000Z"
      },
      {
          "id": 43,
          "guid": "38",
          "name": "reversal agent for alpha-2 adrenergic agonists",
          "created_at": "2020-05-06T16:40:04.000000Z",
          "updated_at": "2020-05-06T16:40:04.000000Z"
      },
      {
          "id": 44,
          "guid": "39",
          "name": "antiprotozoal",
          "created_at": "2020-05-06T16:41:09.000000Z",
          "updated_at": "2020-05-06T16:41:09.000000Z"
      },
      {
          "id": 45,
          "guid": "40",
          "name": "muscle relaxant/neuromuscular blocker",
          "created_at": "2020-05-06T16:41:57.000000Z",
          "updated_at": "2020-05-06T16:41:57.000000Z"
      },
      {
          "id": 46,
          "guid": "41",
          "name": "anticholinergic/parasympatholytic",
          "created_at": "2020-05-06T16:43:17.000000Z",
          "updated_at": "2020-05-06T16:43:17.000000Z"
      },
      {
          "id": 47,
          "guid": "42",
          "name": "antidiarrheal (gastrointestinal adsorbent)",
          "created_at": "2020-05-06T16:44:12.000000Z",
          "updated_at": "2020-05-06T16:44:12.000000Z"
      },
      {
          "id": 48,
          "guid": "43",
          "name": "gold salt/chrysotherapy",
          "created_at": "2020-05-06T16:44:45.000000Z",
          "updated_at": "2020-05-06T16:44:45.000000Z"
      },
      {
          "id": 49,
          "guid": "43",
          "name": "gold salt/chrysotherapy",
          "created_at": "2020-05-06T16:45:27.000000Z",
          "updated_at": "2020-05-06T16:45:27.000000Z"
      },
      {
          "id": 50,
          "guid": "44",
          "name": "immunosuppressant",
          "created_at": "2020-05-06T16:46:45.000000Z",
          "updated_at": "2020-05-06T16:46:45.000000Z"
      },
      {
          "id": 51,
          "guid": "45",
          "name": "antibacterial (macrolide)",
          "created_at": "2020-05-06T16:49:00.000000Z",
          "updated_at": "2020-05-06T16:49:00.000000Z"
      },
      {
          "id": 52,
          "guid": "46",
          "name": "angiotensin-converting enzyme inhibitor",
          "created_at": "2020-05-06T16:51:29.000000Z",
          "updated_at": "2020-05-06T16:51:29.000000Z"
      },
      {
          "id": 53,
          "guid": "47",
          "name": "cholinergic/parasympathomimetic",
          "created_at": "2020-05-06T16:52:49.000000Z",
          "updated_at": "2020-05-06T16:52:49.000000Z"
      },
      {
          "id": 54,
          "guid": "48",
          "name": "laxative",
          "created_at": "2020-05-06T16:54:09.000000Z",
          "updated_at": "2020-05-06T16:54:09.000000Z"
      },
      {
          "id": 55,
          "guid": "42",
          "name": "antidiarrheal (gastrointestinal adsorbent)",
          "created_at": "2020-05-06T16:55:38.000000Z",
          "updated_at": "2020-05-06T16:55:38.000000Z"
      },
      {
          "id": 56,
          "guid": "42",
          "name": "antidiarrheal (gastrointestinal adsorbent)",
          "created_at": "2020-05-06T16:56:29.000000Z",
          "updated_at": "2020-05-06T16:56:29.000000Z"
      },
      {
          "id": 57,
          "guid": "10",
          "name": "antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T16:57:47.000000Z",
          "updated_at": "2020-05-06T16:57:47.000000Z"
      },
      {
          "id": 58,
          "guid": "49",
          "name": "anticonvulsant",
          "created_at": "2020-05-06T16:58:50.000000Z",
          "updated_at": "2020-05-06T16:58:50.000000Z"
      },
      {
          "id": 59,
          "guid": "50",
          "name": "dopamine agonist",
          "created_at": "2020-05-06T17:00:35.000000Z",
          "updated_at": "2020-05-06T17:00:35.000000Z"
      },
      {
          "id": 60,
          "guid": "51",
          "name": "corticosteroid",
          "created_at": "2020-05-06T17:01:30.000000Z",
          "updated_at": "2020-05-06T17:01:30.000000Z"
      },
      {
          "id": 61,
          "guid": "27",
          "name": "antiparasitic",
          "created_at": "2020-05-06T17:02:05.000000Z",
          "updated_at": "2020-05-06T17:02:05.000000Z"
      },
      {
          "id": 62,
          "guid": "52",
          "name": "local anesthetic",
          "created_at": "2020-05-06T17:05:36.000000Z",
          "updated_at": "2020-05-06T17:05:36.000000Z"
      },
      {
          "id": 63,
          "guid": "53",
          "name": "opiate analgesic",
          "created_at": "2020-05-06T17:08:04.000000Z",
          "updated_at": "2020-05-06T17:08:04.000000Z"
      },
      {
          "id": 64,
          "guid": "54",
          "name": "anxiolytic (azapirone/non-benzodiazepine)",
          "created_at": "2020-05-06T17:08:57.000000Z",
          "updated_at": "2020-05-06T17:08:57.000000Z"
      },
      {
          "id": 65,
          "guid": "55",
          "name": "opioid agonist-antagonist",
          "created_at": "2020-05-06T17:11:58.000000Z",
          "updated_at": "2020-05-06T17:11:58.000000Z"
      },
      {
          "id": 66,
          "guid": "50",
          "name": "dopamine agonist",
          "created_at": "2020-05-06T17:14:13.000000Z",
          "updated_at": "2020-05-06T17:14:13.000000Z"
      },
      {
          "id": 67,
          "guid": "56",
          "name": "hormone (osteoclast-limiting)",
          "created_at": "2020-05-06T17:15:09.000000Z",
          "updated_at": "2020-05-06T17:15:09.000000Z"
      },
      {
          "id": 68,
          "guid": "57",
          "name": "vitamin D analog",
          "created_at": "2020-05-06T17:16:06.000000Z",
          "updated_at": "2020-05-06T17:16:06.000000Z"
      },
      {
          "id": 69,
          "guid": "58",
          "name": "mineral (calcium supplement/replacement, phosphate binder, antacid)",
          "created_at": "2020-05-06T17:18:41.000000Z",
          "updated_at": "2020-05-06T17:18:41.000000Z"
      },
      {
          "id": 70,
          "guid": "59",
          "name": "mineral",
          "created_at": "2020-05-06T17:20:16.000000Z",
          "updated_at": "2020-05-06T17:20:16.000000Z"
      },
      {
          "id": 71,
          "guid": "60",
          "name": "chelating agent, antidote",
          "created_at": "2020-05-06T17:20:59.000000Z",
          "updated_at": "2020-05-06T17:20:59.000000Z"
      },
      {
          "id": 72,
          "guid": "61",
          "name": "mineral (calcium supplement/replacement)",
          "created_at": "2020-05-06T17:23:07.000000Z",
          "updated_at": "2020-05-06T17:23:07.000000Z"
      },
      {
          "id": 73,
          "guid": "46",
          "name": "angiotensin-converting enzyme inhibitor",
          "created_at": "2020-05-06T17:24:07.000000Z",
          "updated_at": "2020-05-06T17:24:07.000000Z"
      },
      {
          "id": 74,
          "guid": "31",
          "name": "antibacterial (penicillin class)",
          "created_at": "2020-05-06T17:24:34.000000Z",
          "updated_at": "2020-05-06T17:24:34.000000Z"
      },
      {
          "id": 75,
          "guid": "62",
          "name": "antithyroid",
          "created_at": "2020-05-06T17:25:48.000000Z",
          "updated_at": "2020-05-06T17:25:48.000000Z"
      },
      {
          "id": 76,
          "guid": "63",
          "name": "antineoplastic chemotherapeutic (platinum-based)",
          "created_at": "2020-05-06T17:28:31.000000Z",
          "updated_at": "2020-05-06T17:28:31.000000Z"
      },
      {
          "id": 77,
          "guid": "64",
          "name": "antineoplastic chemotherapeutic (mustard gas derivative, alkylating agent)",
          "created_at": "2020-05-06T17:29:01.000000Z",
          "updated_at": "2020-05-06T17:29:01.000000Z"
      },
      {
          "id": 78,
          "guid": "65",
          "name": "nutrient",
          "created_at": "2020-05-06T17:29:51.000000Z",
          "updated_at": "2020-05-06T17:29:51.000000Z"
      },
      {
          "id": 79,
          "guid": "66",
          "name": "nonsteroidal anti-inflammatory (NSAID; COX-2 inhibitor)",
          "created_at": "2020-05-06T17:32:05.000000Z",
          "updated_at": "2020-05-06T17:32:05.000000Z"
      },
      {
          "id": 80,
          "guid": "37",
          "name": "beta-adrenergic blocker",
          "created_at": "2020-05-06T17:33:12.000000Z",
          "updated_at": "2020-05-06T17:33:12.000000Z"
      },
      {
          "id": 81,
          "guid": "67",
          "name": "antifungal (echinocandin)",
          "created_at": "2020-05-06T17:33:41.000000Z",
          "updated_at": "2020-05-06T17:33:41.000000Z"
      },
      {
          "id": 82,
          "guid": "68",
          "name": "antibacterial (2nd generation cephalosporin)",
          "created_at": "2020-05-06T17:34:27.000000Z",
          "updated_at": "2020-05-06T17:34:27.000000Z"
      },
      {
          "id": 83,
          "guid": "69",
          "name": "antibacterial (1st generation cephalosporin)",
          "created_at": "2020-05-06T17:36:02.000000Z",
          "updated_at": "2020-05-06T17:36:02.000000Z"
      },
      {
          "id": 84,
          "guid": "68",
          "name": "antibacterial (2nd generation cephalosporin)",
          "created_at": "2020-05-06T17:36:32.000000Z",
          "updated_at": "2020-05-06T17:36:32.000000Z"
      },
      {
          "id": 85,
          "guid": "69",
          "name": "antibacterial (1st generation cephalosporin)",
          "created_at": "2020-05-06T17:37:43.000000Z",
          "updated_at": "2020-05-06T17:37:43.000000Z"
      },
      {
          "id": 86,
          "guid": "70",
          "name": "antibacterial (4th generation cephalosporin)",
          "created_at": "2020-05-06T17:38:13.000000Z",
          "updated_at": "2020-05-06T17:38:13.000000Z"
      },
      {
          "id": 87,
          "guid": "71",
          "name": "antibacterial (3rd generation cephalosporin)",
          "created_at": "2020-05-06T17:39:07.000000Z",
          "updated_at": "2020-05-06T17:39:07.000000Z"
      },
      {
          "id": 88,
          "guid": "71",
          "name": "antibacterial (3rd generation cephalosporin)",
          "created_at": "2020-05-06T17:39:43.000000Z",
          "updated_at": "2020-05-06T17:39:43.000000Z"
      },
      {
          "id": 89,
          "guid": "71",
          "name": "antibacterial (3rd generation cephalosporin)",
          "created_at": "2020-05-06T17:40:17.000000Z",
          "updated_at": "2020-05-06T17:40:17.000000Z"
      },
      {
          "id": 90,
          "guid": "68",
          "name": "antibacterial (2nd generation cephalosporin)",
          "created_at": "2020-05-06T17:41:03.000000Z",
          "updated_at": "2020-05-06T17:41:03.000000Z"
      },
      {
          "id": 91,
          "guid": "71",
          "name": "antibacterial (3rd generation cephalosporin)",
          "created_at": "2020-05-06T17:42:12.000000Z",
          "updated_at": "2020-05-06T17:42:12.000000Z"
      },
      {
          "id": 92,
          "guid": "68",
          "name": "antibacterial (2nd generation cephalosporin)",
          "created_at": "2020-05-06T17:42:46.000000Z",
          "updated_at": "2020-05-06T17:42:46.000000Z"
      },
      {
          "id": 93,
          "guid": "71",
          "name": "antibacterial (3rd generation cephalosporin)",
          "created_at": "2020-05-06T17:43:26.000000Z",
          "updated_at": "2020-05-06T17:43:26.000000Z"
      },
      {
          "id": 94,
          "guid": "71",
          "name": "antibacterial (3rd generation cephalosporin)",
          "created_at": "2020-05-06T17:44:46.000000Z",
          "updated_at": "2020-05-06T17:44:46.000000Z"
      },
      {
          "id": 95,
          "guid": "71",
          "name": "antibacterial (3rd generation cephalosporin)",
          "created_at": "2020-05-06T17:45:21.000000Z",
          "updated_at": "2020-05-06T17:45:21.000000Z"
      },
      {
          "id": 96,
          "guid": "71",
          "name": "antibacterial (3rd generation cephalosporin)",
          "created_at": "2020-05-06T17:46:20.000000Z",
          "updated_at": "2020-05-06T17:46:20.000000Z"
      },
      {
          "id": 97,
          "guid": "68",
          "name": "antibacterial (2nd generation cephalosporin)",
          "created_at": "2020-05-06T17:47:11.000000Z",
          "updated_at": "2020-05-06T17:47:11.000000Z"
      },
      {
          "id": 98,
          "guid": "69",
          "name": "antibacterial (1st generation cephalosporin)",
          "created_at": "2020-05-06T17:48:27.000000Z",
          "updated_at": "2020-05-06T17:48:27.000000Z"
      },
      {
          "id": 99,
          "guid": "69",
          "name": "antibacterial (1st generation cephalosporin)",
          "created_at": "2020-05-06T17:49:03.000000Z",
          "updated_at": "2020-05-06T17:49:03.000000Z"
      },
      {
          "id": 100,
          "guid": "72",
          "name": "antihistamine (2nd generation)",
          "created_at": "2020-05-06T17:50:17.000000Z",
          "updated_at": "2020-05-06T17:50:17.000000Z"
      },
      {
          "id": 101,
          "guid": "73",
          "name": "phosphate binder",
          "created_at": "2020-05-06T17:50:47.000000Z",
          "updated_at": "2020-05-06T17:50:47.000000Z"
      },
      {
          "id": 102,
          "guid": "74",
          "name": "antineoplastic chemotherapeutic (alkylating agent)",
          "created_at": "2020-05-06T17:51:57.000000Z",
          "updated_at": "2020-05-06T17:51:57.000000Z"
      },
      {
          "id": 103,
          "guid": "75",
          "name": "antimicrobial",
          "created_at": "2020-05-06T17:53:48.000000Z",
          "updated_at": "2020-05-06T17:53:48.000000Z"
      },
      {
          "id": 104,
          "guid": "76",
          "name": "diuretic (thiazide)",
          "created_at": "2020-05-06T17:54:59.000000Z",
          "updated_at": "2020-05-06T17:54:59.000000Z"
      },
      {
          "id": 105,
          "guid": "77",
          "name": "antihistamine (first generation)",
          "created_at": "2020-05-06T17:56:47.000000Z",
          "updated_at": "2020-05-06T17:56:47.000000Z"
      },
      {
          "id": 106,
          "guid": "78",
          "name": "antiemetic/phenothiazine tranquilizer",
          "created_at": "2020-05-06T17:57:27.000000Z",
          "updated_at": "2020-05-06T17:57:27.000000Z"
      },
      {
          "id": 107,
          "guid": "79",
          "name": "antihyperglycemic (sulfonylurea, with incidental effects on thirst)",
          "created_at": "2020-05-06T17:58:09.000000Z",
          "updated_at": "2020-05-06T17:58:09.000000Z"
      },
      {
          "id": 108,
          "guid": "80",
          "name": "hormone (reproductive)",
          "created_at": "2020-05-06T17:59:39.000000Z",
          "updated_at": "2020-05-06T17:59:39.000000Z"
      },
      {
          "id": 109,
          "guid": "81",
          "name": "gastric acid reducer (H2 antagonist)",
          "created_at": "2020-05-06T18:00:46.000000Z",
          "updated_at": "2020-05-06T18:00:46.000000Z"
      },
      {
          "id": 110,
          "guid": "82",
          "name": "antibacterial (fluoroquinolone)",
          "created_at": "2020-05-06T18:01:32.000000Z",
          "updated_at": "2020-05-06T18:01:32.000000Z"
      },
      {
          "id": 111,
          "guid": "83",
          "name": "gastrointestinal promotility agent",
          "created_at": "2020-05-06T18:02:27.000000Z",
          "updated_at": "2020-05-06T18:02:27.000000Z"
      },
      {
          "id": 112,
          "guid": "63",
          "name": "antineoplastic chemotherapeutic (platinum-based)",
          "created_at": "2020-05-06T18:04:42.000000Z",
          "updated_at": "2020-05-06T18:04:42.000000Z"
      },
      {
          "id": 113,
          "guid": "63",
          "name": "antineoplastic chemotherapeutic (platinum-based)",
          "created_at": "2020-05-06T18:05:16.000000Z",
          "updated_at": "2020-05-06T18:05:16.000000Z"
      },
      {
          "id": 114,
          "guid": "45",
          "name": "antibacterial (macrolide)",
          "created_at": "2020-05-06T18:06:36.000000Z",
          "updated_at": "2020-05-06T18:06:36.000000Z"
      },
      {
          "id": 115,
          "guid": "77",
          "name": "antihistamine (first generation)",
          "created_at": "2020-05-06T18:07:28.000000Z",
          "updated_at": "2020-05-06T18:07:28.000000Z"
      },
      {
          "id": 116,
          "guid": "84",
          "name": "antimicrobial (lincosamide)",
          "created_at": "2020-05-06T18:10:16.000000Z",
          "updated_at": "2020-05-06T18:10:16.000000Z"
      },
      {
          "id": 117,
          "guid": "85",
          "name": "antibacterial",
          "created_at": "2020-05-06T18:10:59.000000Z",
          "updated_at": "2020-05-06T18:10:59.000000Z"
      },
      {
          "id": 118,
          "guid": "28",
          "name": "antidepressant (tricyclic)",
          "created_at": "2020-05-06T18:13:19.000000Z",
          "updated_at": "2020-05-06T18:13:19.000000Z"
      },
      {
          "id": 119,
          "guid": "19",
          "name": "tranquilizer (benzodiazepine)",
          "created_at": "2020-05-06T18:13:52.000000Z",
          "updated_at": "2020-05-06T18:13:52.000000Z"
      },
      {
          "id": 120,
          "guid": "86",
          "name": "antiplatelet (thienopyridine)",
          "created_at": "2020-05-06T18:14:45.000000Z",
          "updated_at": "2020-05-06T18:14:45.000000Z"
      },
      {
          "id": 121,
          "guid": "87",
          "name": "prostaglandin analog",
          "created_at": "2020-05-06T18:15:43.000000Z",
          "updated_at": "2020-05-06T18:15:43.000000Z"
      },
      {
          "id": 122,
          "guid": "49",
          "name": "anticonvulsant",
          "created_at": "2020-05-06T18:16:12.000000Z",
          "updated_at": "2020-05-06T18:16:12.000000Z"
      },
      {
          "id": 123,
          "guid": "88",
          "name": "antifungal (azole)",
          "created_at": "2020-05-06T18:17:47.000000Z",
          "updated_at": "2020-05-06T18:17:47.000000Z"
      },
      {
          "id": 124,
          "guid": "36",
          "name": "vitamin",
          "created_at": "2020-05-06T18:19:26.000000Z",
          "updated_at": "2020-05-06T18:19:26.000000Z"
      },
      {
          "id": 125,
          "guid": "89",
          "name": "opiate",
          "created_at": "2020-05-06T18:20:14.000000Z",
          "updated_at": "2020-05-06T18:20:14.000000Z"
      },
      {
          "id": 126,
          "guid": "90",
          "name": "antifibrotic, anti-inflammatory, mitotic inhibitor",
          "created_at": "2020-05-06T18:21:34.000000Z",
          "updated_at": "2020-05-06T18:21:34.000000Z"
      },
      {
          "id": 127,
          "guid": "91",
          "name": "antineoplastic chemotherapeutic (alkylating agent, mustard gas derivative), immunosuppressant",
          "created_at": "2020-05-06T18:23:53.000000Z",
          "updated_at": "2020-05-06T18:23:53.000000Z"
      },
      {
          "id": 128,
          "guid": "44",
          "name": "immunosuppressant",
          "created_at": "2020-05-06T18:27:24.000000Z",
          "updated_at": "2020-05-06T18:27:24.000000Z"
      },
      {
          "id": 129,
          "guid": "92",
          "name": "serotonin and histamine antagonist",
          "created_at": "2020-05-06T18:28:54.000000Z",
          "updated_at": "2020-05-06T18:28:54.000000Z"
      },
      {
          "id": 130,
          "guid": "10",
          "name": "antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T18:31:15.000000Z",
          "updated_at": "2020-05-06T18:31:15.000000Z"
      },
      {
          "id": 131,
          "guid": "10",
          "name": "antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T18:32:03.000000Z",
          "updated_at": "2020-05-06T18:32:03.000000Z"
      },
      {
          "id": 132,
          "guid": "93",
          "name": "synthetic androgen",
          "created_at": "2020-05-06T18:32:44.000000Z",
          "updated_at": "2020-05-06T18:32:44.000000Z"
      },
      {
          "id": 133,
          "guid": "94",
          "name": "skeletal muscle relaxant",
          "created_at": "2020-05-06T18:33:49.000000Z",
          "updated_at": "2020-05-06T18:33:49.000000Z"
      },
      {
          "id": 134,
          "guid": "85",
          "name": "antibacterial",
          "created_at": "2020-05-06T18:34:16.000000Z",
          "updated_at": "2020-05-06T18:34:16.000000Z"
      },
      {
          "id": 135,
          "guid": "95",
          "name": "erythropoietic",
          "created_at": "2020-05-06T18:34:57.000000Z",
          "updated_at": "2020-05-06T18:34:57.000000Z"
      },
      {
          "id": 136,
          "guid": "96",
          "name": "antiparasitic (antiprotozoal)",
          "created_at": "2020-05-06T18:35:22.000000Z",
          "updated_at": "2020-05-06T18:35:22.000000Z"
      },
      {
          "id": 137,
          "guid": "97",
          "name": "iron chelator",
          "created_at": "2020-05-06T18:36:05.000000Z",
          "updated_at": "2020-05-06T18:36:05.000000Z"
      },
      {
          "id": 138,
          "guid": "98",
          "name": "progestin",
          "created_at": "2020-05-06T18:37:10.000000Z",
          "updated_at": "2020-05-06T18:37:10.000000Z"
      },
      {
          "id": 139,
          "guid": "99",
          "name": "nonsteroidal anti-inflammatory (COX-2 inhibitor)",
          "created_at": "2020-05-06T18:38:13.000000Z",
          "updated_at": "2020-05-06T18:38:13.000000Z"
      },
      {
          "id": 140,
          "guid": "100",
          "name": "vasopressin (antidiuretic hormone) analog",
          "created_at": "2020-05-06T18:41:00.000000Z",
          "updated_at": "2020-05-06T18:41:00.000000Z"
      },
      {
          "id": 141,
          "guid": "101",
          "name": "mineralocorticoid",
          "created_at": "2020-05-06T18:41:49.000000Z",
          "updated_at": "2020-05-06T18:41:49.000000Z"
      },
      {
          "id": 142,
          "guid": "51",
          "name": "corticosteroid",
          "created_at": "2020-05-06T18:46:31.000000Z",
          "updated_at": "2020-05-06T18:46:31.000000Z"
      },
      {
          "id": 143,
          "guid": "102",
          "name": "sedative (alpha-2 adrenergic agonist)",
          "created_at": "2020-05-06T18:48:29.000000Z",
          "updated_at": "2020-05-06T18:48:29.000000Z"
      },
      {
          "id": 144,
          "guid": "103",
          "name": "antidote, protectant for antineoplastic chemotherapeutics",
          "created_at": "2020-05-06T18:49:22.000000Z",
          "updated_at": "2020-05-06T18:49:22.000000Z"
      },
      {
          "id": 145,
          "guid": "104",
          "name": "stimulant",
          "created_at": "2020-05-06T18:50:10.000000Z",
          "updated_at": "2020-05-06T18:50:10.000000Z"
      },
      {
          "id": 146,
          "guid": "105",
          "name": "antitussive, NMDA antagonist",
          "created_at": "2020-05-06T18:53:52.000000Z",
          "updated_at": "2020-05-06T18:53:52.000000Z"
      },
      {
          "id": 147,
          "guid": "106",
          "name": "parenteral fluid",
          "created_at": "2020-05-06T18:55:33.000000Z",
          "updated_at": "2020-05-06T18:55:33.000000Z"
      },
      {
          "id": 148,
          "guid": "19",
          "name": "tranquilizer (benzodiazepine)",
          "created_at": "2020-05-06T18:59:10.000000Z",
          "updated_at": "2020-05-06T18:59:10.000000Z"
      },
      {
          "id": 149,
          "guid": "107",
          "name": "hyperglycemic",
          "created_at": "2020-05-06T18:59:39.000000Z",
          "updated_at": "2020-05-06T18:59:39.000000Z"
      },
      {
          "id": 150,
          "guid": "5",
          "name": "carbonic anhydrase inhibitor",
          "created_at": "2020-05-06T19:00:14.000000Z",
          "updated_at": "2020-05-06T19:00:14.000000Z"
      },
      {
          "id": 151,
          "guid": "108",
          "name": "antiparasitic (anthelmintic)",
          "created_at": "2020-05-06T19:00:41.000000Z",
          "updated_at": "2020-05-06T19:00:41.000000Z"
      },
      {
          "id": 152,
          "guid": "108",
          "name": "antiparasitic (anthelmintic)",
          "created_at": "2020-05-06T19:02:17.000000Z",
          "updated_at": "2020-05-06T19:02:17.000000Z"
      },
      {
          "id": 153,
          "guid": "80",
          "name": "hormone (reproductive)",
          "created_at": "2020-05-06T19:03:07.000000Z",
          "updated_at": "2020-05-06T19:03:07.000000Z"
      },
      {
          "id": 154,
          "guid": "82",
          "name": "antibacterial (fluoroquinolone)",
          "created_at": "2020-05-06T19:03:35.000000Z",
          "updated_at": "2020-05-06T19:03:35.000000Z"
      },
      {
          "id": 155,
          "guid": "109",
          "name": "cardiac glycoside",
          "created_at": "2020-05-06T19:04:57.000000Z",
          "updated_at": "2020-05-06T19:04:57.000000Z"
      },
      {
          "id": 156,
          "guid": "57",
          "name": "vitamin D analog",
          "created_at": "2020-05-06T19:06:04.000000Z",
          "updated_at": "2020-05-06T19:06:04.000000Z"
      },
      {
          "id": 157,
          "guid": "110",
          "name": "calcium-channel blocker",
          "created_at": "2020-05-06T19:08:06.000000Z",
          "updated_at": "2020-05-06T19:08:06.000000Z"
      },
      {
          "id": 158,
          "guid": "110",
          "name": "calcium-channel blocker",
          "created_at": "2020-05-06T19:08:52.000000Z",
          "updated_at": "2020-05-06T19:08:52.000000Z"
      },
      {
          "id": 159,
          "guid": "111",
          "name": "antiemetic, antihistamine",
          "created_at": "2020-05-06T19:09:58.000000Z",
          "updated_at": "2020-05-06T19:09:58.000000Z"
      },
      {
          "id": 160,
          "guid": "11",
          "name": "antidote",
          "created_at": "2020-05-06T19:10:35.000000Z",
          "updated_at": "2020-05-06T19:10:35.000000Z"
      },
      {
          "id": 161,
          "guid": "112",
          "name": "alkyl sulfoxide",
          "created_at": "2020-05-06T19:11:24.000000Z",
          "updated_at": "2020-05-06T19:11:24.000000Z"
      },
      {
          "id": 162,
          "guid": "39",
          "name": "antiprotozoal",
          "created_at": "2020-05-06T19:12:35.000000Z",
          "updated_at": "2020-05-06T19:12:35.000000Z"
      },
      {
          "id": 163,
          "guid": "113",
          "name": "antihistamine (first-generation)",
          "created_at": "2020-05-06T19:17:04.000000Z",
          "updated_at": "2020-05-06T19:17:04.000000Z"
      },
      {
          "id": 164,
          "guid": "114",
          "name": "weight loss",
          "created_at": "2020-05-06T19:17:38.000000Z",
          "updated_at": "2020-05-06T19:17:38.000000Z"
      },
      {
          "id": 165,
          "guid": "115",
          "name": "catecholamine (beta-1 adrenergic agonist)",
          "created_at": "2020-05-06T19:18:27.000000Z",
          "updated_at": "2020-05-06T19:18:27.000000Z"
      },
      {
          "id": 166,
          "guid": "116",
          "name": "antiemetic (serotonin 5HT3-antagonist)",
          "created_at": "2020-05-06T19:19:04.000000Z",
          "updated_at": "2020-05-06T19:19:04.000000Z"
      },
      {
          "id": 167,
          "guid": "117",
          "name": "catecholamine",
          "created_at": "2020-05-06T19:20:01.000000Z",
          "updated_at": "2020-05-06T19:20:01.000000Z"
      },
      {
          "id": 168,
          "guid": "118",
          "name": "antiparasitic (avermectin)",
          "created_at": "2020-05-06T19:20:41.000000Z",
          "updated_at": "2020-05-06T19:20:41.000000Z"
      },
      {
          "id": 169,
          "guid": "119",
          "name": "respiratory/central nervous system stimulant",
          "created_at": "2020-05-06T19:21:30.000000Z",
          "updated_at": "2020-05-06T19:21:30.000000Z"
      },
      {
          "id": 170,
          "guid": "120",
          "name": "antineoplastic chemotherapeutic (anthracycline)",
          "created_at": "2020-05-06T19:23:50.000000Z",
          "updated_at": "2020-05-06T19:23:50.000000Z"
      },
      {
          "id": 171,
          "guid": "121",
          "name": "antibacterial (tetracycline)",
          "created_at": "2020-05-06T19:28:42.000000Z",
          "updated_at": "2020-05-06T19:28:42.000000Z"
      },
      {
          "id": 172,
          "guid": "122",
          "name": "anticholinesterase",
          "created_at": "2020-05-06T19:29:16.000000Z",
          "updated_at": "2020-05-06T19:29:16.000000Z"
      },
      {
          "id": 173,
          "guid": "123",
          "name": "angiotensin converting enzyme (ACE) inhibitor",
          "created_at": "2020-05-06T19:30:46.000000Z",
          "updated_at": "2020-05-06T19:30:46.000000Z"
      },
      {
          "id": 174,
          "guid": "88",
          "name": "antifungal (azole)",
          "created_at": "2020-05-06T19:31:38.000000Z",
          "updated_at": "2020-05-06T19:31:38.000000Z"
      },
      {
          "id": 175,
          "guid": "124",
          "name": "antimicrobial (fluoroquinolone)",
          "created_at": "2020-05-06T19:36:03.000000Z",
          "updated_at": "2020-05-06T19:36:03.000000Z"
      },
      {
          "id": 176,
          "guid": "125",
          "name": "nutritional supplement",
          "created_at": "2020-05-06T19:36:46.000000Z",
          "updated_at": "2020-05-06T19:36:46.000000Z"
      },
      {
          "id": 177,
          "guid": "117",
          "name": "catecholamine",
          "created_at": "2020-05-06T19:38:26.000000Z",
          "updated_at": "2020-05-06T19:38:26.000000Z"
      },
      {
          "id": 178,
          "guid": "120",
          "name": "antineoplastic chemotherapeutic (anthracycline)",
          "created_at": "2020-05-06T19:39:27.000000Z",
          "updated_at": "2020-05-06T19:39:27.000000Z"
      },
      {
          "id": 179,
          "guid": "45",
          "name": "antibacterial (macrolide)",
          "created_at": "2020-05-06T19:41:47.000000Z",
          "updated_at": "2020-05-06T19:41:47.000000Z"
      },
      {
          "id": 180,
          "guid": "126",
          "name": "hormone (to increase red blood cell production)",
          "created_at": "2020-05-06T19:43:18.000000Z",
          "updated_at": "2020-05-06T19:43:18.000000Z"
      },
      {
          "id": 181,
          "guid": "127",
          "name": "beta-1 adrenergic blocker (ultrashort acting)",
          "created_at": "2020-05-06T19:44:19.000000Z",
          "updated_at": "2020-05-06T19:44:19.000000Z"
      },
      {
          "id": 182,
          "guid": "128",
          "name": "alcohol (competitive inhibitor of alcohol dehydrogenase)",
          "created_at": "2020-05-06T19:45:28.000000Z",
          "updated_at": "2020-05-06T19:45:28.000000Z"
      },
      {
          "id": 183,
          "guid": "99",
          "name": "nonsteroidal anti-inflammatory (COX-2 inhibitor)",
          "created_at": "2020-05-06T19:46:20.000000Z",
          "updated_at": "2020-05-06T19:46:20.000000Z"
      },
      {
          "id": 184,
          "guid": "129",
          "name": "retinoid",
          "created_at": "2020-05-06T19:47:00.000000Z",
          "updated_at": "2020-05-06T19:47:00.000000Z"
      },
      {
          "id": 185,
          "guid": "81",
          "name": "gastric acid reducer (H2 antagonist)",
          "created_at": "2020-05-06T19:48:49.000000Z",
          "updated_at": "2020-05-06T19:48:49.000000Z"
      },
      {
          "id": 186,
          "guid": "125",
          "name": "nutritional supplement",
          "created_at": "2020-05-06T19:49:53.000000Z",
          "updated_at": "2020-05-06T19:49:53.000000Z"
      },
      {
          "id": 187,
          "guid": "130",
          "name": "antiparasitic (probenzimidazole)",
          "created_at": "2020-05-06T19:52:46.000000Z",
          "updated_at": "2020-05-06T19:52:46.000000Z"
      },
      {
          "id": 188,
          "guid": "49",
          "name": "anticonvulsant",
          "created_at": "2020-05-06T19:53:17.000000Z",
          "updated_at": "2020-05-06T19:53:17.000000Z"
      },
      {
          "id": 189,
          "guid": "14",
          "name": "antiparasitic (benzimidazole)",
          "created_at": "2020-05-06T19:56:46.000000Z",
          "updated_at": "2020-05-06T19:56:46.000000Z"
      },
      {
          "id": 190,
          "guid": "53",
          "name": "opiate analgesic",
          "created_at": "2020-05-06T20:01:23.000000Z",
          "updated_at": "2020-05-06T20:01:23.000000Z"
      },
      {
          "id": 191,
          "guid": "59",
          "name": "mineral",
          "created_at": "2020-05-06T20:02:25.000000Z",
          "updated_at": "2020-05-06T20:02:25.000000Z"
      },
      {
          "id": 192,
          "guid": "131",
          "name": "hormone (to increase white blood cell production)",
          "created_at": "2020-05-06T20:03:56.000000Z",
          "updated_at": "2020-05-06T20:03:56.000000Z"
      },
      {
          "id": 193,
          "guid": "132",
          "name": "antiandrogen (5-alpha-reductase inhibitor)",
          "created_at": "2020-05-06T20:04:36.000000Z",
          "updated_at": "2020-05-06T20:04:36.000000Z"
      },
      {
          "id": 194,
          "guid": "99",
          "name": "nonsteroidal anti-inflammatory (COX-2 inhibitor)",
          "created_at": "2020-05-06T20:05:11.000000Z",
          "updated_at": "2020-05-06T20:05:11.000000Z"
      },
      {
          "id": 195,
          "guid": "88",
          "name": "antifungal (azole)",
          "created_at": "2020-05-06T20:08:31.000000Z",
          "updated_at": "2020-05-06T20:08:31.000000Z"
      },
      {
          "id": 196,
          "guid": "101",
          "name": "mineralocorticoid",
          "created_at": "2020-05-06T20:09:28.000000Z",
          "updated_at": "2020-05-06T20:09:28.000000Z"
      },
      {
          "id": 197,
          "guid": "133",
          "name": "benzodiazepine reversal agent",
          "created_at": "2020-05-06T20:10:14.000000Z",
          "updated_at": "2020-05-06T20:10:14.000000Z"
      },
      {
          "id": 198,
          "guid": "134",
          "name": "nonsteroidal anti-inflammatory",
          "created_at": "2020-05-06T20:10:55.000000Z",
          "updated_at": "2020-05-06T20:10:55.000000Z"
      },
      {
          "id": 199,
          "guid": "10",
          "name": "antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T20:12:09.000000Z",
          "updated_at": "2020-05-06T20:12:09.000000Z"
      },
      {
          "id": 200,
          "guid": "135",
          "name": "selective serotonin-reuptake inhibitor (SSRI)",
          "created_at": "2020-05-06T20:14:04.000000Z",
          "updated_at": "2020-05-06T20:14:04.000000Z"
      },
      {
          "id": 201,
          "guid": "136",
          "name": "corticosteroid (aerosol)",
          "created_at": "2020-05-06T20:15:30.000000Z",
          "updated_at": "2020-05-06T20:15:30.000000Z"
      },
      {
          "id": 202,
          "guid": "36",
          "name": "vitamin",
          "created_at": "2020-05-06T20:16:24.000000Z",
          "updated_at": "2020-05-06T20:16:24.000000Z"
      },
      {
          "id": 203,
          "guid": "11",
          "name": "antidote",
          "created_at": "2020-05-06T20:17:22.000000Z",
          "updated_at": "2020-05-06T20:17:22.000000Z"
      },
      {
          "id": 204,
          "guid": "137",
          "name": "antiplatelet",
          "created_at": "2020-05-06T20:17:47.000000Z",
          "updated_at": "2020-05-06T20:17:47.000000Z"
      },
      {
          "id": 205,
          "guid": "138",
          "name": "diuretic (loop)",
          "created_at": "2020-05-06T20:21:34.000000Z",
          "updated_at": "2020-05-06T20:21:34.000000Z"
      },
      {
          "id": 206,
          "guid": "139",
          "name": "anticonvulsant, analgesic (GABA analog)",
          "created_at": "2020-05-06T20:22:58.000000Z",
          "updated_at": "2020-05-06T20:22:58.000000Z"
      },
      {
          "id": 207,
          "guid": "10",
          "name": "antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T20:24:39.000000Z",
          "updated_at": "2020-05-06T20:24:39.000000Z"
      },
      {
          "id": 208,
          "guid": "22",
          "name": "antibacterial (aminoglycoside)",
          "created_at": "2020-05-06T20:26:48.000000Z",
          "updated_at": "2020-05-06T20:26:48.000000Z"
      },
      {
          "id": 209,
          "guid": "140",
          "name": "antihyperglycemic (sulfonylurea)",
          "created_at": "2020-05-06T20:27:34.000000Z",
          "updated_at": "2020-05-06T20:27:34.000000Z"
      },
      {
          "id": 210,
          "guid": "141",
          "name": "hormone (proglycemic)",
          "created_at": "2020-05-06T20:29:07.000000Z",
          "updated_at": "2020-05-06T20:29:07.000000Z"
      },
      {
          "id": 211,
          "guid": "142",
          "name": "chondroprotective",
          "created_at": "2020-05-06T20:29:48.000000Z",
          "updated_at": "2020-05-06T20:29:48.000000Z"
      },
      {
          "id": 212,
          "guid": "41",
          "name": "anticholinergic/parasympatholytic",
          "created_at": "2020-05-06T20:30:54.000000Z",
          "updated_at": "2020-05-06T20:30:54.000000Z"
      },
      {
          "id": 213,
          "guid": "142",
          "name": "chondroprotective",
          "created_at": "2020-05-06T20:31:38.000000Z",
          "updated_at": "2020-05-06T20:31:38.000000Z"
      },
      {
          "id": 214,
          "guid": "80",
          "name": "hormone (reproductive)",
          "created_at": "2020-05-06T20:34:09.000000Z",
          "updated_at": "2020-05-06T20:34:09.000000Z"
      },
      {
          "id": 215,
          "guid": "143",
          "name": "antiemetic (serotonin 5HT3-receptor antagonist)",
          "created_at": "2020-05-06T20:34:55.000000Z",
          "updated_at": "2020-05-06T20:34:55.000000Z"
      },
      {
          "id": 216,
          "guid": "144",
          "name": "antifungal",
          "created_at": "2020-05-06T20:36:19.000000Z",
          "updated_at": "2020-05-06T20:36:19.000000Z"
      },
      {
          "id": 217,
          "guid": "145",
          "name": "oxygen-carrying solution",
          "created_at": "2020-05-06T20:37:27.000000Z",
          "updated_at": "2020-05-06T20:37:27.000000Z"
      },
      {
          "id": 218,
          "guid": "146",
          "name": "anticoagulant",
          "created_at": "2020-05-06T20:39:26.000000Z",
          "updated_at": "2020-05-06T20:39:26.000000Z"
      },
      {
          "id": 219,
          "guid": "146",
          "name": "anticoagulant",
          "created_at": "2020-05-06T20:40:49.000000Z",
          "updated_at": "2020-05-06T20:40:49.000000Z"
      },
      {
          "id": 220,
          "guid": "31",
          "name": "antibacterial (penicillin class)",
          "created_at": "2020-05-06T20:41:14.000000Z",
          "updated_at": "2020-05-06T20:41:14.000000Z"
      },
      {
          "id": 221,
          "guid": "147",
          "name": "vasodilator (arterial)",
          "created_at": "2020-05-06T20:42:54.000000Z",
          "updated_at": "2020-05-06T20:42:54.000000Z"
      },
      {
          "id": 222,
          "guid": "76",
          "name": "diuretic (thiazide)",
          "created_at": "2020-05-06T20:44:20.000000Z",
          "updated_at": "2020-05-06T20:44:20.000000Z"
      },
      {
          "id": 223,
          "guid": "148",
          "name": "opioid (antitussive, analgesic)",
          "created_at": "2020-05-06T20:45:00.000000Z",
          "updated_at": "2020-05-06T20:45:00.000000Z"
      },
      {
          "id": 224,
          "guid": "51",
          "name": "corticosteroid",
          "created_at": "2020-05-06T20:46:17.000000Z",
          "updated_at": "2020-05-06T20:46:17.000000Z"
      },
      {
          "id": 225,
          "guid": "35",
          "name": "emetic",
          "created_at": "2020-05-06T20:46:43.000000Z",
          "updated_at": "2020-05-06T20:46:43.000000Z"
      },
      {
          "id": 226,
          "guid": "53",
          "name": "opiate analgesic",
          "created_at": "2020-05-06T20:48:39.000000Z",
          "updated_at": "2020-05-06T20:48:39.000000Z"
      },
      {
          "id": 227,
          "guid": "149",
          "name": "parenteral fluid (colloid)",
          "created_at": "2020-05-06T20:50:12.000000Z",
          "updated_at": "2020-05-06T20:50:12.000000Z"
      },
      {
          "id": 228,
          "guid": "150",
          "name": "antierythropoietic (antimetabolite)",
          "created_at": "2020-05-06T20:52:37.000000Z",
          "updated_at": "2020-05-06T20:52:37.000000Z"
      },
      {
          "id": 229,
          "guid": "77",
          "name": "antihistamine (first generation)",
          "created_at": "2020-05-06T20:53:35.000000Z",
          "updated_at": "2020-05-06T20:53:35.000000Z"
      },
      {
          "id": 230,
          "guid": "82",
          "name": "antibacterial (fluoroquinolone)",
          "created_at": "2020-05-06T20:54:15.000000Z",
          "updated_at": "2020-05-06T20:54:15.000000Z"
      },
      {
          "id": 231,
          "guid": "151",
          "name": "nonsteroidal antiinflammatory",
          "created_at": "2020-05-06T20:56:15.000000Z",
          "updated_at": "2020-05-06T20:56:15.000000Z"
      },
      {
          "id": 232,
          "guid": "74",
          "name": "antineoplastic chemotherapeutic (alkylating agent)",
          "created_at": "2020-05-06T20:57:09.000000Z",
          "updated_at": "2020-05-06T20:57:09.000000Z"
      },
      {
          "id": 233,
          "guid": "152",
          "name": "tyrosine kinase inhibitor",
          "created_at": "2020-05-06T20:57:38.000000Z",
          "updated_at": "2020-05-06T20:57:38.000000Z"
      },
      {
          "id": 234,
          "guid": "46",
          "name": "angiotensin-converting enzyme inhibitor",
          "created_at": "2020-05-06T20:58:21.000000Z",
          "updated_at": "2020-05-06T20:58:21.000000Z"
      },
      {
          "id": 235,
          "guid": "75",
          "name": "antimicrobial",
          "created_at": "2020-05-06T20:59:56.000000Z",
          "updated_at": "2020-05-06T20:59:56.000000Z"
      },
      {
          "id": 236,
          "guid": "153",
          "name": "antibacterial (beta-lactam-potentiated carbapenem class)",
          "created_at": "2020-05-06T21:00:51.000000Z",
          "updated_at": "2020-05-06T21:00:51.000000Z"
      },
      {
          "id": 237,
          "guid": "28",
          "name": "antidepressant (tricyclic)",
          "created_at": "2020-05-06T21:01:55.000000Z",
          "updated_at": "2020-05-06T21:01:55.000000Z"
      },
      {
          "id": 238,
          "guid": "154",
          "name": "immunoglobulin (synthetic)",
          "created_at": "2020-05-06T21:04:03.000000Z",
          "updated_at": "2020-05-06T21:04:03.000000Z"
      },
      {
          "id": 239,
          "guid": "155",
          "name": "hormone (synthetic insulin)",
          "created_at": "2020-05-06T21:05:06.000000Z",
          "updated_at": "2020-05-06T21:05:06.000000Z"
      },
      {
          "id": 240,
          "guid": "155",
          "name": "hormone (synthetic insulin)",
          "created_at": "2020-05-06T21:05:54.000000Z",
          "updated_at": "2020-05-06T21:05:54.000000Z"
      },
      {
          "id": 241,
          "guid": "155",
          "name": "hormone (synthetic insulin)",
          "created_at": "2020-05-06T21:06:43.000000Z",
          "updated_at": "2020-05-06T21:06:43.000000Z"
      },
      {
          "id": 242,
          "guid": "155",
          "name": "hormone (synthetic insulin)",
          "created_at": "2020-05-06T21:07:14.000000Z",
          "updated_at": "2020-05-06T21:07:14.000000Z"
      },
      {
          "id": 243,
          "guid": "155",
          "name": "hormone (synthetic insulin)",
          "created_at": "2020-05-06T21:08:12.000000Z",
          "updated_at": "2020-05-06T21:08:12.000000Z"
      },
      {
          "id": 244,
          "guid": "155",
          "name": "hormone (synthetic insulin)",
          "created_at": "2020-05-06T21:09:04.000000Z",
          "updated_at": "2020-05-06T21:09:04.000000Z"
      },
      {
          "id": 245,
          "guid": "155",
          "name": "hormone (synthetic insulin)",
          "created_at": "2020-05-06T21:10:50.000000Z",
          "updated_at": "2020-05-06T21:10:50.000000Z"
      },
      {
          "id": 246,
          "guid": "155",
          "name": "hormone (synthetic insulin)",
          "created_at": "2020-05-06T21:11:19.000000Z",
          "updated_at": "2020-05-06T21:11:19.000000Z"
      },
      {
          "id": 247,
          "guid": "156",
          "name": "immunomodulator",
          "created_at": "2020-05-06T21:13:32.000000Z",
          "updated_at": "2020-05-06T21:13:32.000000Z"
      },
      {
          "id": 248,
          "guid": "156",
          "name": "immunomodulator",
          "created_at": "2020-05-06T21:15:52.000000Z",
          "updated_at": "2020-05-06T21:15:52.000000Z"
      },
      {
          "id": 249,
          "guid": "144",
          "name": "antifungal",
          "created_at": "2020-05-06T21:16:45.000000Z",
          "updated_at": "2020-05-06T21:16:45.000000Z"
      },
      {
          "id": 250,
          "guid": "35",
          "name": "emetic",
          "created_at": "2020-05-06T21:17:23.000000Z",
          "updated_at": "2020-05-06T21:17:23.000000Z"
      },
      {
          "id": 251,
          "guid": "157",
          "name": "mineral supplement",
          "created_at": "2020-05-06T21:18:47.000000Z",
          "updated_at": "2020-05-06T21:18:47.000000Z"
      },
      {
          "id": 252,
          "guid": "158",
          "name": "beta-adrenergic agonist (nonspecific)",
          "created_at": "2020-05-06T22:03:03.000000Z",
          "updated_at": "2020-05-06T22:03:03.000000Z"
      },
      {
          "id": 253,
          "guid": "159",
          "name": "vasodilator (nitrate)",
          "created_at": "2020-05-06T22:03:29.000000Z",
          "updated_at": "2020-05-06T22:03:29.000000Z"
      },
      {
          "id": 254,
          "guid": "129",
          "name": "retinoid",
          "created_at": "2020-05-06T22:04:56.000000Z",
          "updated_at": "2020-05-06T22:04:56.000000Z"
      },
      {
          "id": 255,
          "guid": "88",
          "name": "antifungal (azole)",
          "created_at": "2020-05-06T22:08:01.000000Z",
          "updated_at": "2020-05-06T22:08:01.000000Z"
      },
      {
          "id": 256,
          "guid": "118",
          "name": "antiparasitic (avermectin)",
          "created_at": "2020-05-06T22:14:50.000000Z",
          "updated_at": "2020-05-06T22:14:50.000000Z"
      },
      {
          "id": 257,
          "guid": "42",
          "name": "antidiarrheal (gastrointestinal adsorbent)",
          "created_at": "2020-05-06T22:15:24.000000Z",
          "updated_at": "2020-05-06T22:15:24.000000Z"
      },
      {
          "id": 258,
          "guid": "160",
          "name": "anesthetic (dissociative)",
          "created_at": "2020-05-06T22:18:31.000000Z",
          "updated_at": "2020-05-06T22:18:31.000000Z"
      },
      {
          "id": 259,
          "guid": "88",
          "name": "antifungal (azole)",
          "created_at": "2020-05-06T22:21:25.000000Z",
          "updated_at": "2020-05-06T22:21:25.000000Z"
      },
      {
          "id": 260,
          "guid": "134",
          "name": "nonsteroidal anti-inflammatory",
          "created_at": "2020-05-06T22:23:15.000000Z",
          "updated_at": "2020-05-06T22:23:15.000000Z"
      },
      {
          "id": 261,
          "guid": "2",
          "name": "immunostimulant",
          "created_at": "2020-05-06T22:24:14.000000Z",
          "updated_at": "2020-05-06T22:24:14.000000Z"
      },
      {
          "id": 262,
          "guid": "161",
          "name": "antiencephalopathic, laxative",
          "created_at": "2020-05-06T22:26:36.000000Z",
          "updated_at": "2020-05-06T22:26:36.000000Z"
      },
      {
          "id": 263,
          "guid": "162",
          "name": "Immunosuppressant",
          "created_at": "2020-05-06T22:28:16.000000Z",
          "updated_at": "2020-05-06T22:28:16.000000Z"
      },
      {
          "id": 264,
          "guid": "163",
          "name": "folic acid analog",
          "created_at": "2020-05-06T22:29:24.000000Z",
          "updated_at": "2020-05-06T22:29:24.000000Z"
      },
      {
          "id": 265,
          "guid": "164",
          "name": "antiparasitic (anthelmintic), immunomodulatory",
          "created_at": "2020-05-06T22:31:12.000000Z",
          "updated_at": "2020-05-06T22:31:12.000000Z"
      },
      {
          "id": 266,
          "guid": "49",
          "name": "anticonvulsant",
          "created_at": "2020-05-06T22:32:13.000000Z",
          "updated_at": "2020-05-06T22:32:13.000000Z"
      },
      {
          "id": 267,
          "guid": "165",
          "name": "hormone (thyroid)",
          "created_at": "2020-05-06T22:35:13.000000Z",
          "updated_at": "2020-05-06T22:35:13.000000Z"
      },
      {
          "id": 268,
          "guid": "166",
          "name": "antiarrhythmic (sodium-channel blocker/class I), local anesthetic",
          "created_at": "2020-05-06T22:37:26.000000Z",
          "updated_at": "2020-05-06T22:37:26.000000Z"
      },
      {
          "id": 269,
          "guid": "167",
          "name": "antibacterial (lincosamide)",
          "created_at": "2020-05-06T22:38:05.000000Z",
          "updated_at": "2020-05-06T22:38:05.000000Z"
      },
      {
          "id": 270,
          "guid": "168",
          "name": "angiotensin-converting enzyme (ACE) inhibitor",
          "created_at": "2020-05-06T22:38:50.000000Z",
          "updated_at": "2020-05-06T22:38:50.000000Z"
      },
      {
          "id": 271,
          "guid": "169",
          "name": "myelostimulant",
          "created_at": "2020-05-06T22:40:24.000000Z",
          "updated_at": "2020-05-06T22:40:24.000000Z"
      },
      {
          "id": 272,
          "guid": "63",
          "name": "antineoplastic chemotherapeutic (platinum-based)",
          "created_at": "2020-05-06T22:40:56.000000Z",
          "updated_at": "2020-05-06T22:40:56.000000Z"
      },
      {
          "id": 273,
          "guid": "170",
          "name": "antineoplastic chemotherapeutic (nitrosourea, alkylating agent)",
          "created_at": "2020-05-06T22:43:19.000000Z",
          "updated_at": "2020-05-06T22:43:19.000000Z"
      },
      {
          "id": 274,
          "guid": "171",
          "name": "antidiarrheal (opioid)",
          "created_at": "2020-05-06T22:44:27.000000Z",
          "updated_at": "2020-05-06T22:44:27.000000Z"
      },
      {
          "id": 275,
          "guid": "19",
          "name": "tranquilizer (benzodiazepine)",
          "created_at": "2020-05-06T22:45:27.000000Z",
          "updated_at": "2020-05-06T22:45:27.000000Z"
      },
      {
          "id": 276,
          "guid": "172",
          "name": "antiparasitic/antifungal (chitin synthesis inhibitor)",
          "created_at": "2020-05-06T22:46:57.000000Z",
          "updated_at": "2020-05-06T22:46:57.000000Z"
      },
      {
          "id": 277,
          "guid": "173",
          "name": "amino acid",
          "created_at": "2020-05-06T22:47:41.000000Z",
          "updated_at": "2020-05-06T22:47:41.000000Z"
      },
      {
          "id": 278,
          "guid": "174",
          "name": "electrolyte",
          "created_at": "2020-05-06T22:49:02.000000Z",
          "updated_at": "2020-05-06T22:49:02.000000Z"
      },
      {
          "id": 279,
          "guid": "175",
          "name": "diuretic (osmotic)",
          "created_at": "2020-05-06T22:51:06.000000Z",
          "updated_at": "2020-05-06T22:51:06.000000Z"
      },
      {
          "id": 280,
          "guid": "124",
          "name": "antimicrobial (fluoroquinolone)",
          "created_at": "2020-05-06T22:53:16.000000Z",
          "updated_at": "2020-05-06T22:53:16.000000Z"
      },
      {
          "id": 281,
          "guid": "176",
          "name": "antiemetic (neurokinin-1 receptor antagonist)",
          "created_at": "2020-05-06T22:55:08.000000Z",
          "updated_at": "2020-05-06T22:55:08.000000Z"
      },
      {
          "id": 282,
          "guid": "177",
          "name": "dietary fat (transported directly to portal circulation, not via lymphatics)",
          "created_at": "2020-05-06T22:56:12.000000Z",
          "updated_at": "2020-05-06T22:56:12.000000Z"
      },
      {
          "id": 283,
          "guid": "178",
          "name": "hormone (progestin)",
          "created_at": "2020-05-06T22:57:33.000000Z",
          "updated_at": "2020-05-06T22:57:33.000000Z"
      },
      {
          "id": 284,
          "guid": "178",
          "name": "hormone (progestin)",
          "created_at": "2020-05-06T22:58:53.000000Z",
          "updated_at": "2020-05-06T22:58:53.000000Z"
      },
      {
          "id": 285,
          "guid": "96",
          "name": "antiparasitic (antiprotozoal)",
          "created_at": "2020-05-06T22:59:40.000000Z",
          "updated_at": "2020-05-06T22:59:40.000000Z"
      },
      {
          "id": 286,
          "guid": "27",
          "name": "antiparasitic",
          "created_at": "2020-05-06T23:00:11.000000Z",
          "updated_at": "2020-05-06T23:00:11.000000Z"
      },
      {
          "id": 287,
          "guid": "179",
          "name": "hormone (photoperiodic)",
          "created_at": "2020-05-06T23:01:16.000000Z",
          "updated_at": "2020-05-06T23:01:16.000000Z"
      },
      {
          "id": 288,
          "guid": "99",
          "name": "nonsteroidal anti-inflammatory (COX-2 inhibitor)",
          "created_at": "2020-05-06T23:03:45.000000Z",
          "updated_at": "2020-05-06T23:03:45.000000Z"
      },
      {
          "id": 289,
          "guid": "180",
          "name": "antineoplastic (mustard gas derivative, alkylating agent)",
          "created_at": "2020-05-06T23:05:33.000000Z",
          "updated_at": "2020-05-06T23:05:33.000000Z"
      },
      {
          "id": 290,
          "guid": "181",
          "name": "analgesic (narcotic, opiate)",
          "created_at": "2020-05-06T23:06:42.000000Z",
          "updated_at": "2020-05-06T23:06:42.000000Z"
      },
      {
          "id": 291,
          "guid": "182",
          "name": "antibacterial (carbapenem)",
          "created_at": "2020-05-06T23:07:11.000000Z",
          "updated_at": "2020-05-06T23:07:11.000000Z"
      },
      {
          "id": 292,
          "guid": "134",
          "name": "nonsteroidal anti-inflammatory",
          "created_at": "2020-05-06T23:08:26.000000Z",
          "updated_at": "2020-05-06T23:08:26.000000Z"
      },
      {
          "id": 293,
          "guid": "53",
          "name": "opiate analgesic",
          "created_at": "2020-05-06T23:09:32.000000Z",
          "updated_at": "2020-05-06T23:09:32.000000Z"
      },
      {
          "id": 294,
          "guid": "5",
          "name": "carbonic anhydrase inhibitor",
          "created_at": "2020-05-06T23:10:03.000000Z",
          "updated_at": "2020-05-06T23:10:03.000000Z"
      },
      {
          "id": 295,
          "guid": "62",
          "name": "antithyroid",
          "created_at": "2020-05-06T23:11:18.000000Z",
          "updated_at": "2020-05-06T23:11:18.000000Z"
      },
      {
          "id": 296,
          "guid": "173",
          "name": "amino acid",
          "created_at": "2020-05-06T23:11:55.000000Z",
          "updated_at": "2020-05-06T23:11:55.000000Z"
      },
      {
          "id": 297,
          "guid": "183",
          "name": "amino acid (hepatoprotectant, antioxidant)",
          "created_at": "2020-05-06T23:13:27.000000Z",
          "updated_at": "2020-05-06T23:13:27.000000Z"
      },
      {
          "id": 298,
          "guid": "184",
          "name": "muscle relaxant",
          "created_at": "2020-05-06T23:15:23.000000Z",
          "updated_at": "2020-05-06T23:15:23.000000Z"
      },
      {
          "id": 299,
          "guid": "185",
          "name": "antineoplastic chemotherapeutic (folic acid inhibitor/antimetabolite)",
          "created_at": "2020-05-06T23:17:07.000000Z",
          "updated_at": "2020-05-06T23:17:07.000000Z"
      },
      {
          "id": 300,
          "guid": "186",
          "name": "azo pigment, antidote",
          "created_at": "2020-05-06T23:18:11.000000Z",
          "updated_at": "2020-05-06T23:18:11.000000Z"
      },
      {
          "id": 301,
          "guid": "104",
          "name": "stimulant",
          "created_at": "2020-05-06T23:19:09.000000Z",
          "updated_at": "2020-05-06T23:19:09.000000Z"
      },
      {
          "id": 302,
          "guid": "51",
          "name": "corticosteroid",
          "created_at": "2020-05-06T23:19:46.000000Z",
          "updated_at": "2020-05-06T23:19:46.000000Z"
      },
      {
          "id": 303,
          "guid": "187",
          "name": "corticosteroid (sustained-release)",
          "created_at": "2020-05-06T23:22:18.000000Z",
          "updated_at": "2020-05-06T23:22:18.000000Z"
      },
      {
          "id": 304,
          "guid": "188",
          "name": "corticosteroid (water-soluble)",
          "created_at": "2020-05-06T23:24:06.000000Z",
          "updated_at": "2020-05-06T23:24:06.000000Z"
      },
      {
          "id": 305,
          "guid": "80",
          "name": "hormone (reproductive)",
          "created_at": "2020-05-06T23:24:46.000000Z",
          "updated_at": "2020-05-06T23:24:46.000000Z"
      },
      {
          "id": 306,
          "guid": "189",
          "name": "antiemetic, gastrointestinal promotility agent",
          "created_at": "2020-05-06T23:26:12.000000Z",
          "updated_at": "2020-05-06T23:26:12.000000Z"
      },
      {
          "id": 307,
          "guid": "37",
          "name": "beta-adrenergic blocker",
          "created_at": "2020-05-06T23:28:03.000000Z",
          "updated_at": "2020-05-06T23:28:03.000000Z"
      },
      {
          "id": 308,
          "guid": "75",
          "name": "antimicrobial",
          "created_at": "2020-05-06T23:31:22.000000Z",
          "updated_at": "2020-05-06T23:31:22.000000Z"
      },
      {
          "id": 309,
          "guid": "190",
          "name": "antiarrhythmic (sodium channel-blocker/class I)",
          "created_at": "2020-05-06T23:31:47.000000Z",
          "updated_at": "2020-05-06T23:31:47.000000Z"
      },
      {
          "id": 310,
          "guid": "191",
          "name": "hormone (androgenic)",
          "created_at": "2020-05-06T23:32:39.000000Z",
          "updated_at": "2020-05-06T23:32:39.000000Z"
      },
      {
          "id": 311,
          "guid": "19",
          "name": "tranquilizer (benzodiazepine)",
          "created_at": "2020-05-06T23:34:58.000000Z",
          "updated_at": "2020-05-06T23:34:58.000000Z"
      },
      {
          "id": 312,
          "guid": "192",
          "name": "hormone (progesterone antagonist, abortefacient)",
          "created_at": "2020-05-06T23:35:47.000000Z",
          "updated_at": "2020-05-06T23:35:47.000000Z"
      },
      {
          "id": 313,
          "guid": "27",
          "name": "antiparasitic",
          "created_at": "2020-05-06T23:38:24.000000Z",
          "updated_at": "2020-05-06T23:38:24.000000Z"
      },
      {
          "id": 314,
          "guid": "193",
          "name": "appetite stimulant",
          "created_at": "2020-05-06T23:39:04.000000Z",
          "updated_at": "2020-05-06T23:39:04.000000Z"
      },
      {
          "id": 315,
          "guid": "87",
          "name": "prostaglandin analog",
          "created_at": "2020-05-06T23:40:34.000000Z",
          "updated_at": "2020-05-06T23:40:34.000000Z"
      },
      {
          "id": 316,
          "guid": "194",
          "name": "antineoplastic chemotherapeutic (alkylating agent, anthracenedione - not anthracycline)",
          "created_at": "2020-05-06T23:42:25.000000Z",
          "updated_at": "2020-05-06T23:42:25.000000Z"
      },
      {
          "id": 317,
          "guid": "195",
          "name": "opiate narcotic",
          "created_at": "2020-05-06T23:44:50.000000Z",
          "updated_at": "2020-05-06T23:44:50.000000Z"
      },
      {
          "id": 318,
          "guid": "124",
          "name": "antimicrobial (fluoroquinolone)",
          "created_at": "2020-05-06T23:45:26.000000Z",
          "updated_at": "2020-05-06T23:45:26.000000Z"
      },
      {
          "id": 319,
          "guid": "44",
          "name": "immunosuppressant",
          "created_at": "2020-05-06T23:47:01.000000Z",
          "updated_at": "2020-05-06T23:47:01.000000Z"
      },
      {
          "id": 320,
          "guid": "196",
          "name": "opioid antagonist",
          "created_at": "2020-05-06T23:48:19.000000Z",
          "updated_at": "2020-05-06T23:48:19.000000Z"
      },
      {
          "id": 321,
          "guid": "134",
          "name": "nonsteroidal anti-inflammatory",
          "created_at": "2020-05-06T23:48:56.000000Z",
          "updated_at": "2020-05-06T23:48:56.000000Z"
      },
      {
          "id": 322,
          "guid": "197",
          "name": "acetylcholinesterase inhibitor",
          "created_at": "2020-05-06T23:50:55.000000Z",
          "updated_at": "2020-05-06T23:50:55.000000Z"
      },
      {
          "id": 323,
          "guid": "198",
          "name": "vitamin, immunomodulator",
          "created_at": "2020-05-06T23:52:47.000000Z",
          "updated_at": "2020-05-06T23:52:47.000000Z"
      },
      {
          "id": 324,
          "guid": "110",
          "name": "calcium-channel blocker",
          "created_at": "2020-05-06T23:53:53.000000Z",
          "updated_at": "2020-05-06T23:53:53.000000Z"
      },
      {
          "id": 325,
          "guid": "27",
          "name": "antiparasitic",
          "created_at": "2020-05-06T23:54:33.000000Z",
          "updated_at": "2020-05-06T23:54:33.000000Z"
      },
      {
          "id": 326,
          "guid": "159",
          "name": "vasodilator (nitrate)",
          "created_at": "2020-05-06T23:55:39.000000Z",
          "updated_at": "2020-05-06T23:55:39.000000Z"
      },
      {
          "id": 327,
          "guid": "159",
          "name": "vasodilator (nitrate)",
          "created_at": "2020-05-06T23:56:49.000000Z",
          "updated_at": "2020-05-06T23:56:49.000000Z"
      },
      {
          "id": 328,
          "guid": "199",
          "name": "gastric acid reducer (H2 antagonist), gastrointestinal promotility agent",
          "created_at": "2020-05-06T23:57:30.000000Z",
          "updated_at": "2020-05-06T23:57:30.000000Z"
      },
      {
          "id": 329,
          "guid": "117",
          "name": "catecholamine",
          "created_at": "2020-05-06T23:58:09.000000Z",
          "updated_at": "2020-05-06T23:58:09.000000Z"
      },
      {
          "id": 330,
          "guid": "82",
          "name": "antibacterial (fluoroquinolone)",
          "created_at": "2020-05-06T23:59:17.000000Z",
          "updated_at": "2020-05-06T23:59:17.000000Z"
      },
      {
          "id": 331,
          "guid": "33",
          "name": "antifungal (polyene)",
          "created_at": "2020-05-07T00:00:17.000000Z",
          "updated_at": "2020-05-07T00:00:17.000000Z"
      },
      {
          "id": 332,
          "guid": "200",
          "name": "somatostatin analog",
          "created_at": "2020-05-07T00:01:16.000000Z",
          "updated_at": "2020-05-07T00:01:16.000000Z"
      },
      {
          "id": 333,
          "guid": "82",
          "name": "antibacterial (fluoroquinolone)",
          "created_at": "2020-05-07T00:02:12.000000Z",
          "updated_at": "2020-05-07T00:02:12.000000Z"
      },
      {
          "id": 334,
          "guid": "134",
          "name": "nonsteroidal anti-inflammatory",
          "created_at": "2020-05-07T00:02:42.000000Z",
          "updated_at": "2020-05-07T00:02:42.000000Z"
      },
      {
          "id": 335,
          "guid": "201",
          "name": "gastric acid reducer (proton pump inhibitor)",
          "created_at": "2020-05-07T00:04:36.000000Z",
          "updated_at": "2020-05-07T00:04:36.000000Z"
      },
      {
          "id": 336,
          "guid": "143",
          "name": "antiemetic (serotonin 5HT3-receptor antagonist)",
          "created_at": "2020-05-07T00:05:41.000000Z",
          "updated_at": "2020-05-07T00:05:41.000000Z"
      },
      {
          "id": 337,
          "guid": "202",
          "name": "adrenocorticolytic",
          "created_at": "2020-05-07T00:06:55.000000Z",
          "updated_at": "2020-05-07T00:06:55.000000Z"
      },
      {
          "id": 338,
          "guid": "82",
          "name": "antibacterial (fluoroquinolone)",
          "created_at": "2020-05-07T00:07:57.000000Z",
          "updated_at": "2020-05-07T00:07:57.000000Z"
      },
      {
          "id": 339,
          "guid": "203",
          "name": "antiandrogen",
          "created_at": "2020-05-07T00:08:28.000000Z",
          "updated_at": "2020-05-07T00:08:28.000000Z"
      },
      {
          "id": 340,
          "guid": "204",
          "name": "antiviral (neuraminidase inhibitor)",
          "created_at": "2020-05-07T00:09:04.000000Z",
          "updated_at": "2020-05-07T00:09:04.000000Z"
      },
      {
          "id": 341,
          "guid": "19",
          "name": "tranquilizer (benzodiazepine)",
          "created_at": "2020-05-07T00:09:41.000000Z",
          "updated_at": "2020-05-07T00:09:41.000000Z"
      },
      {
          "id": 342,
          "guid": "89",
          "name": "opiate",
          "created_at": "2020-05-07T00:11:33.000000Z",
          "updated_at": "2020-05-07T00:11:33.000000Z"
      },
      {
          "id": 343,
          "guid": "205",
          "name": "antimicrobial (tetracycline class)",
          "created_at": "2020-05-07T00:12:46.000000Z",
          "updated_at": "2020-05-07T00:12:46.000000Z"
      },
      {
          "id": 344,
          "guid": "206",
          "name": "hormone (ecbolic)",
          "created_at": "2020-05-07T00:14:01.000000Z",
          "updated_at": "2020-05-07T00:14:01.000000Z"
      },
      {
          "id": 345,
          "guid": "207",
          "name": "antineoplastic chemotherapeutic (taxane)",
          "created_at": "2020-05-07T00:14:28.000000Z",
          "updated_at": "2020-05-07T00:14:28.000000Z"
      },
      {
          "id": 346,
          "guid": "208",
          "name": "antihypercalcemic (bisphosphonate, osteoclast inhibitor)",
          "created_at": "2020-05-07T00:15:20.000000Z",
          "updated_at": "2020-05-07T00:15:20.000000Z"
      },
      {
          "id": 347,
          "guid": "209",
          "name": "enzyme supplement (digestive)",
          "created_at": "2020-05-07T00:17:14.000000Z",
          "updated_at": "2020-05-07T00:17:14.000000Z"
      },
      {
          "id": 348,
          "guid": "201",
          "name": "gastric acid reducer (proton pump inhibitor)",
          "created_at": "2020-05-07T00:17:55.000000Z",
          "updated_at": "2020-05-07T00:17:55.000000Z"
      },
      {
          "id": 349,
          "guid": "210",
          "name": "antimicrobial (aminoglycoside)",
          "created_at": "2020-05-07T00:19:07.000000Z",
          "updated_at": "2020-05-07T00:19:07.000000Z"
      },
      {
          "id": 350,
          "guid": "211",
          "name": "antidepressant (selective serotonin reuptake inhibitor)",
          "created_at": "2020-05-07T00:19:42.000000Z",
          "updated_at": "2020-05-07T00:19:42.000000Z"
      },
      {
          "id": 351,
          "guid": "212",
          "name": "chelating agent",
          "created_at": "2020-05-07T00:20:48.000000Z",
          "updated_at": "2020-05-07T00:20:48.000000Z"
      },
      {
          "id": 352,
          "guid": "213",
          "name": "antibacterial (penicillin class/beta lactam)",
          "created_at": "2020-05-07T00:22:33.000000Z",
          "updated_at": "2020-05-07T00:22:33.000000Z"
      },
      {
          "id": 353,
          "guid": "213",
          "name": "antibacterial (penicillin class/beta lactam)",
          "created_at": "2020-05-07T00:24:11.000000Z",
          "updated_at": "2020-05-07T00:24:11.000000Z"
      },
      {
          "id": 354,
          "guid": "214",
          "name": "anesthetic (barbiturate)",
          "created_at": "2020-05-07T00:26:21.000000Z",
          "updated_at": "2020-05-07T00:26:21.000000Z"
      },
      {
          "id": 355,
          "guid": "142",
          "name": "chondroprotective",
          "created_at": "2020-05-07T00:27:05.000000Z",
          "updated_at": "2020-05-07T00:27:05.000000Z"
      },
      {
          "id": 356,
          "guid": "215",
          "name": "erythrocyte plasticity agent (phosphodiesterase inhibitor)",
          "created_at": "2020-05-07T00:27:55.000000Z",
          "updated_at": "2020-05-07T00:27:55.000000Z"
      },
      {
          "id": 357,
          "guid": "216",
          "name": "anticonvulsant (barbiturate)",
          "created_at": "2020-05-07T00:30:28.000000Z",
          "updated_at": "2020-05-07T00:30:28.000000Z"
      },
      {
          "id": 358,
          "guid": "217",
          "name": "alpha-1 adrenergic antagonist",
          "created_at": "2020-05-07T00:31:43.000000Z",
          "updated_at": "2020-05-07T00:31:43.000000Z"
      },
      {
          "id": 359,
          "guid": "134",
          "name": "nonsteroidal anti-inflammatory",
          "created_at": "2020-05-07T00:32:21.000000Z",
          "updated_at": "2020-05-07T00:32:21.000000Z"
      },
      {
          "id": 360,
          "guid": "218",
          "name": "alpha-1 adrenergic agonist",
          "created_at": "2020-05-07T00:33:09.000000Z",
          "updated_at": "2020-05-07T00:33:09.000000Z"
      },
      {
          "id": 361,
          "guid": "218",
          "name": "alpha-1 adrenergic agonist",
          "created_at": "2020-05-07T00:34:39.000000Z",
          "updated_at": "2020-05-07T00:34:39.000000Z"
      },
      {
          "id": 362,
          "guid": "219",
          "name": "anticonvulsant; antiarrhythmic (class I)",
          "created_at": "2020-05-07T00:35:25.000000Z",
          "updated_at": "2020-05-07T00:35:25.000000Z"
      },
      {
          "id": 363,
          "guid": "220",
          "name": "positive inotrope, vasodilator (inodilator)",
          "created_at": "2020-05-07T00:37:16.000000Z",
          "updated_at": "2020-05-07T00:37:16.000000Z"
      },
      {
          "id": 364,
          "guid": "31",
          "name": "antibacterial (penicillin class)",
          "created_at": "2020-05-07T00:37:44.000000Z",
          "updated_at": "2020-05-07T00:37:44.000000Z"
      },
      {
          "id": 365,
          "guid": "32",
          "name": "antibacterial (penicillin class + beta-lactamase inhibitor)",
          "created_at": "2020-05-07T00:38:14.000000Z",
          "updated_at": "2020-05-07T00:38:14.000000Z"
      },
      {
          "id": 366,
          "guid": "221",
          "name": "anthelmintic",
          "created_at": "2020-05-07T00:40:37.000000Z",
          "updated_at": "2020-05-07T00:40:37.000000Z"
      },
      {
          "id": 367,
          "guid": "134",
          "name": "nonsteroidal anti-inflammatory",
          "created_at": "2020-05-07T00:43:55.000000Z",
          "updated_at": "2020-05-07T00:43:55.000000Z"
      },
      {
          "id": 368,
          "guid": "174",
          "name": "electrolyte",
          "created_at": "2020-05-07T00:44:55.000000Z",
          "updated_at": "2020-05-07T00:44:55.000000Z"
      },
      {
          "id": 369,
          "guid": "174",
          "name": "electrolyte",
          "created_at": "2020-05-07T00:45:57.000000Z",
          "updated_at": "2020-05-07T00:45:57.000000Z"
      },
      {
          "id": 370,
          "guid": "174",
          "name": "electrolyte",
          "created_at": "2020-05-07T00:46:50.000000Z",
          "updated_at": "2020-05-07T00:46:50.000000Z"
      },
      {
          "id": 371,
          "guid": "222",
          "name": "electrolyte/mineral",
          "created_at": "2020-05-07T00:47:55.000000Z",
          "updated_at": "2020-05-07T00:47:55.000000Z"
      },
      {
          "id": 372,
          "guid": "82",
          "name": "antibacterial (fluoroquinolone)",
          "created_at": "2020-05-07T00:48:47.000000Z",
          "updated_at": "2020-05-07T00:48:47.000000Z"
      },
      {
          "id": 373,
          "guid": "223",
          "name": "antidote (oxime)",
          "created_at": "2020-05-07T00:49:40.000000Z",
          "updated_at": "2020-05-07T00:49:40.000000Z"
      },
      {
          "id": 374,
          "guid": "221",
          "name": "anthelmintic",
          "created_at": "2020-05-07T00:51:50.000000Z",
          "updated_at": "2020-05-07T00:51:50.000000Z"
      },
      {
          "id": 375,
          "guid": "224",
          "name": "vasodilator",
          "created_at": "2020-05-07T00:53:16.000000Z",
          "updated_at": "2020-05-07T00:53:16.000000Z"
      },
      {
          "id": 376,
          "guid": "51",
          "name": "corticosteroid",
          "created_at": "2020-05-07T00:57:00.000000Z",
          "updated_at": "2020-05-07T00:57:00.000000Z"
      },
      {
          "id": 377,
          "guid": "188",
          "name": "corticosteroid (water-soluble)",
          "created_at": "2020-05-07T00:58:10.000000Z",
          "updated_at": "2020-05-07T00:58:10.000000Z"
      },
      {
          "id": 378,
          "guid": "139",
          "name": "anticonvulsant, analgesic (GABA analog)",
          "created_at": "2020-05-07T00:58:50.000000Z",
          "updated_at": "2020-05-07T00:58:50.000000Z"
      },
      {
          "id": 379,
          "guid": "225",
          "name": "antiarrhythmic (class Ia)",
          "created_at": "2020-05-07T01:00:31.000000Z",
          "updated_at": "2020-05-07T01:00:31.000000Z"
      },
      {
          "id": 380,
          "guid": "74",
          "name": "antineoplastic chemotherapeutic (alkylating agent)",
          "created_at": "2020-05-07T01:01:24.000000Z",
          "updated_at": "2020-05-07T01:01:24.000000Z"
      },
      {
          "id": 381,
          "guid": "226",
          "name": "tranquilizer (phenothiazine), antiemetic",
          "created_at": "2020-05-07T01:02:24.000000Z",
          "updated_at": "2020-05-07T01:02:24.000000Z"
      },
      {
          "id": 382,
          "guid": "227",
          "name": "anticholinergic",
          "created_at": "2020-05-07T01:03:05.000000Z",
          "updated_at": "2020-05-07T01:03:05.000000Z"
      },
      {
          "id": 383,
          "guid": "228",
          "name": "anesthetic induction agent (short-acting)",
          "created_at": "2020-05-07T01:05:48.000000Z",
          "updated_at": "2020-05-07T01:05:48.000000Z"
      },
      {
          "id": 384,
          "guid": "229",
          "name": "beta-adrenergic blocker (nonselective)",
          "created_at": "2020-05-07T01:07:32.000000Z",
          "updated_at": "2020-05-07T01:07:32.000000Z"
      },
      {
          "id": 385,
          "guid": "218",
          "name": "alpha-1 adrenergic agonist",
          "created_at": "2020-05-07T01:08:27.000000Z",
          "updated_at": "2020-05-07T01:08:27.000000Z"
      },
      {
          "id": 386,
          "guid": "230",
          "name": "dietary fiber",
          "created_at": "2020-05-07T01:09:34.000000Z",
          "updated_at": "2020-05-07T01:09:34.000000Z"
      },
      {
          "id": 387,
          "guid": "221",
          "name": "anthelmintic",
          "created_at": "2020-05-07T01:11:42.000000Z",
          "updated_at": "2020-05-07T01:11:42.000000Z"
      },
      {
          "id": 388,
          "guid": "231",
          "name": "cholinesterase inhibitor",
          "created_at": "2020-05-07T01:12:53.000000Z",
          "updated_at": "2020-05-07T01:12:53.000000Z"
      },
      {
          "id": 389,
          "guid": "39",
          "name": "antiprotozoal",
          "created_at": "2020-05-07T01:13:48.000000Z",
          "updated_at": "2020-05-07T01:13:48.000000Z"
      },
      {
          "id": 390,
          "guid": "225",
          "name": "antiarrhythmic (class Ia)",
          "created_at": "2020-05-07T01:15:08.000000Z",
          "updated_at": "2020-05-07T01:15:08.000000Z"
      },
      {
          "id": 391,
          "guid": "46",
          "name": "angiotensin-converting enzyme inhibitor",
          "created_at": "2020-05-07T01:16:14.000000Z",
          "updated_at": "2020-05-07T01:16:14.000000Z"
      },
      {
          "id": 392,
          "guid": "199",
          "name": "gastric acid reducer (H2 antagonist), gastrointestinal promotility agent",
          "created_at": "2020-05-07T01:17:37.000000Z",
          "updated_at": "2020-05-07T01:17:37.000000Z"
      },
      {
          "id": 393,
          "guid": "75",
          "name": "antimicrobial",
          "created_at": "2020-05-07T01:18:31.000000Z",
          "updated_at": "2020-05-07T01:18:31.000000Z"
      },
      {
          "id": 394,
          "guid": "134",
          "name": "nonsteroidal anti-inflammatory",
          "created_at": "2020-05-07T01:19:38.000000Z",
          "updated_at": "2020-05-07T01:19:38.000000Z"
      },
      {
          "id": 395,
          "guid": "39",
          "name": "antiprotozoal",
          "created_at": "2020-05-07T01:20:18.000000Z",
          "updated_at": "2020-05-07T01:20:18.000000Z"
      },
      {
          "id": 396,
          "guid": "125",
          "name": "nutritional supplement",
          "created_at": "2020-05-07T01:21:15.000000Z",
          "updated_at": "2020-05-07T01:21:15.000000Z"
      },
      {
          "id": 397,
          "guid": "232",
          "name": "beta-2 adrenergic agonist",
          "created_at": "2020-05-07T01:21:55.000000Z",
          "updated_at": "2020-05-07T01:21:55.000000Z"
      },
      {
          "id": 398,
          "guid": "27",
          "name": "antiparasitic",
          "created_at": "2020-05-07T01:24:27.000000Z",
          "updated_at": "2020-05-07T01:24:27.000000Z"
      },
      {
          "id": 399,
          "guid": "233",
          "name": "monoamine oxidase inhibitor",
          "created_at": "2020-05-07T01:25:50.000000Z",
          "updated_at": "2020-05-07T01:25:50.000000Z"
      },
      {
          "id": 400,
          "guid": "234",
          "name": "vasodilator (phosphodiesterase inhibitor)",
          "created_at": "2020-05-07T01:27:01.000000Z",
          "updated_at": "2020-05-07T01:27:01.000000Z"
      },
      {
          "id": 401,
          "guid": "235",
          "name": "hepatoprotectant (milk thistle extract)",
          "created_at": "2020-05-07T01:28:31.000000Z",
          "updated_at": "2020-05-07T01:28:31.000000Z"
      },
      {
          "id": 402,
          "guid": "236",
          "name": "buffer",
          "created_at": "2020-05-07T01:30:04.000000Z",
          "updated_at": "2020-05-07T01:30:04.000000Z"
      },
      {
          "id": 403,
          "guid": "237",
          "name": "antiarrhythmic (class II and III)",
          "created_at": "2020-05-07T01:31:20.000000Z",
          "updated_at": "2020-05-07T01:31:20.000000Z"
      },
      {
          "id": 404,
          "guid": "238",
          "name": "antiparasitic (arthropods)",
          "created_at": "2020-05-07T01:32:02.000000Z",
          "updated_at": "2020-05-07T01:32:02.000000Z"
      },
      {
          "id": 405,
          "guid": "239",
          "name": "diuretic (potassium-sparing), aldosterone antagonist",
          "created_at": "2020-05-07T01:33:18.000000Z",
          "updated_at": "2020-05-07T01:33:18.000000Z"
      },
      {
          "id": 406,
          "guid": "240",
          "name": "anabolic steroid",
          "created_at": "2020-05-07T01:33:54.000000Z",
          "updated_at": "2020-05-07T01:33:54.000000Z"
      },
      {
          "id": 407,
          "guid": "39",
          "name": "antiprotozoal",
          "created_at": "2020-05-07T01:34:24.000000Z",
          "updated_at": "2020-05-07T01:34:24.000000Z"
      },
      {
          "id": 408,
          "guid": "241",
          "name": "thrombolytic",
          "created_at": "2020-05-07T01:35:11.000000Z",
          "updated_at": "2020-05-07T01:35:11.000000Z"
      },
      {
          "id": 409,
          "guid": "10",
          "name": "antineoplastic chemotherapeutic",
          "created_at": "2020-05-07T01:35:59.000000Z",
          "updated_at": "2020-05-07T01:35:59.000000Z"
      },
      {
          "id": 410,
          "guid": "11",
          "name": "antidote",
          "created_at": "2020-05-07T01:36:42.000000Z",
          "updated_at": "2020-05-07T01:36:42.000000Z"
      },
      {
          "id": 411,
          "guid": "242",
          "name": "gastrointestinal protectant",
          "created_at": "2020-05-07T01:38:28.000000Z",
          "updated_at": "2020-05-07T01:38:28.000000Z"
      },
      {
          "id": 412,
          "guid": "243",
          "name": "antimicrobial (potentiated sulfonamide)",
          "created_at": "2020-05-07T01:40:54.000000Z",
          "updated_at": "2020-05-07T01:40:54.000000Z"
      },
      {
          "id": 413,
          "guid": "244",
          "name": "coccidiostat",
          "created_at": "2020-05-07T01:41:46.000000Z",
          "updated_at": "2020-05-07T01:41:46.000000Z"
      },
      {
          "id": 414,
          "guid": "243",
          "name": "antimicrobial (potentiated sulfonamide)",
          "created_at": "2020-05-07T01:42:29.000000Z",
          "updated_at": "2020-05-07T01:42:29.000000Z"
      },
      {
          "id": 415,
          "guid": "243",
          "name": "antimicrobial (potentiated sulfonamide)",
          "created_at": "2020-05-07T01:43:49.000000Z",
          "updated_at": "2020-05-07T01:43:49.000000Z"
      },
      {
          "id": 416,
          "guid": "44",
          "name": "immunosuppressant",
          "created_at": "2020-05-07T01:46:06.000000Z",
          "updated_at": "2020-05-07T01:46:06.000000Z"
      },
      {
          "id": 417,
          "guid": "234",
          "name": "vasodilator (phosphodiesterase inhibitor)",
          "created_at": "2020-05-07T01:46:37.000000Z",
          "updated_at": "2020-05-07T01:46:37.000000Z"
      },
      {
          "id": 418,
          "guid": "245",
          "name": "alpha-1 adrenergic antagonist (prostatic/vesical)",
          "created_at": "2020-05-07T01:47:26.000000Z",
          "updated_at": "2020-05-07T01:47:26.000000Z"
      },
      {
          "id": 419,
          "guid": "173",
          "name": "amino acid",
          "created_at": "2020-05-07T01:48:22.000000Z",
          "updated_at": "2020-05-07T01:48:22.000000Z"
      },
      {
          "id": 420,
          "guid": "246",
          "name": "antifungal (allylamine)",
          "created_at": "2020-05-07T01:50:03.000000Z",
          "updated_at": "2020-05-07T01:50:03.000000Z"
      },
      {
          "id": 421,
          "guid": "232",
          "name": "beta-2 adrenergic agonist",
          "created_at": "2020-05-07T01:51:38.000000Z",
          "updated_at": "2020-05-07T01:51:38.000000Z"
      },
      {
          "id": 422,
          "guid": "191",
          "name": "hormone (androgenic)",
          "created_at": "2020-05-07T01:53:27.000000Z",
          "updated_at": "2020-05-07T01:53:27.000000Z"
      },
      {
          "id": 423,
          "guid": "205",
          "name": "antimicrobial (tetracycline class)",
          "created_at": "2020-05-07T01:54:56.000000Z",
          "updated_at": "2020-05-07T01:54:56.000000Z"
      },
      {
          "id": 424,
          "guid": "25",
          "name": "bronchodilator (methylxanthine)",
          "created_at": "2020-05-07T01:57:02.000000Z",
          "updated_at": "2020-05-07T01:57:02.000000Z"
      },
      {
          "id": 425,
          "guid": "247",
          "name": "anthelmintic, antifungal, antiparasitic",
          "created_at": "2020-05-07T01:58:22.000000Z",
          "updated_at": "2020-05-07T01:58:22.000000Z"
      },
      {
          "id": 426,
          "guid": "36",
          "name": "vitamin",
          "created_at": "2020-05-07T01:59:18.000000Z",
          "updated_at": "2020-05-07T01:59:18.000000Z"
      },
      {
          "id": 427,
          "guid": "248",
          "name": "anesthetic induction agent",
          "created_at": "2020-05-07T02:00:39.000000Z",
          "updated_at": "2020-05-07T02:00:39.000000Z"
      },
      {
          "id": 428,
          "guid": "165",
          "name": "hormone (thyroid)",
          "created_at": "2020-05-07T02:01:37.000000Z",
          "updated_at": "2020-05-07T02:01:37.000000Z"
      },
      {
          "id": 429,
          "guid": "31",
          "name": "antibacterial (penicillin class)",
          "created_at": "2020-05-07T02:02:33.000000Z",
          "updated_at": "2020-05-07T02:02:33.000000Z"
      },
      {
          "id": 430,
          "guid": "32",
          "name": "antibacterial (penicillin class + beta-lactamase inhibitor)",
          "created_at": "2020-05-07T02:03:07.000000Z",
          "updated_at": "2020-05-07T02:03:07.000000Z"
      },
      {
          "id": 431,
          "guid": "249",
          "name": "anesthetic induction combination (dissociatve anesthetic plus benzodiazepine)",
          "created_at": "2020-05-07T02:04:50.000000Z",
          "updated_at": "2020-05-07T02:04:50.000000Z"
      },
      {
          "id": 432,
          "guid": "85",
          "name": "antibacterial",
          "created_at": "2020-05-07T02:05:06.000000Z",
          "updated_at": "2020-05-07T02:05:06.000000Z"
      },
      {
          "id": 433,
          "guid": "22",
          "name": "antibacterial (aminoglycoside)",
          "created_at": "2020-05-07T02:06:23.000000Z",
          "updated_at": "2020-05-07T02:06:23.000000Z"
      },
      {
          "id": 434,
          "guid": "250",
          "name": "antiarrhythmic (class I)",
          "created_at": "2020-05-07T02:07:03.000000Z",
          "updated_at": "2020-05-07T02:07:03.000000Z"
      },
      {
          "id": 435,
          "guid": "251",
          "name": "antineoplastic (tyrosine kinase inhibitor)",
          "created_at": "2020-05-07T02:07:57.000000Z",
          "updated_at": "2020-05-07T02:07:57.000000Z"
      },
      {
          "id": 436,
          "guid": "134",
          "name": "nonsteroidal anti-inflammatory",
          "created_at": "2020-05-07T02:09:12.000000Z",
          "updated_at": "2020-05-07T02:09:12.000000Z"
      },
      {
          "id": 437,
          "guid": "39",
          "name": "antiprotozoal",
          "created_at": "2020-05-07T02:09:58.000000Z",
          "updated_at": "2020-05-07T02:09:58.000000Z"
      },
      {
          "id": 438,
          "guid": "138",
          "name": "diuretic (loop)",
          "created_at": "2020-05-07T02:10:57.000000Z",
          "updated_at": "2020-05-07T02:10:57.000000Z"
      },
      {
          "id": 439,
          "guid": "252",
          "name": "analgesic (opiate)",
          "created_at": "2020-05-07T02:14:22.000000Z",
          "updated_at": "2020-05-07T02:14:22.000000Z"
      },
      {
          "id": 440,
          "guid": "253",
          "name": "procoagulant (antiplasmin)",
          "created_at": "2020-05-07T02:15:08.000000Z",
          "updated_at": "2020-05-07T02:15:08.000000Z"
      },
      {
          "id": 441,
          "guid": "254",
          "name": "corticosteroid (glucocorticoid - no mineralocorticoid activity)",
          "created_at": "2020-05-07T02:16:25.000000Z",
          "updated_at": "2020-05-07T02:16:25.000000Z"
      },
      {
          "id": 442,
          "guid": "202",
          "name": "adrenocorticolytic",
          "created_at": "2020-05-07T02:18:12.000000Z",
          "updated_at": "2020-05-07T02:18:12.000000Z"
      },
      {
          "id": 443,
          "guid": "255",
          "name": "antimicrobial (macrolide)",
          "created_at": "2020-05-07T02:19:30.000000Z",
          "updated_at": "2020-05-07T02:19:30.000000Z"
      },
      {
          "id": 444,
          "guid": "256",
          "name": "choleretic",
          "created_at": "2020-05-07T02:21:28.000000Z",
          "updated_at": "2020-05-07T02:21:28.000000Z"
      },
      {
          "id": 445,
          "guid": "12",
          "name": "antiviral",
          "created_at": "2020-05-07T02:21:47.000000Z",
          "updated_at": "2020-05-07T02:21:47.000000Z"
      },
      {
          "id": 446,
          "guid": "85",
          "name": "antibacterial",
          "created_at": "2020-05-07T02:22:50.000000Z",
          "updated_at": "2020-05-07T02:22:50.000000Z"
      },
      {
          "id": 447,
          "guid": "8",
          "name": "hormone",
          "created_at": "2020-05-07T02:23:49.000000Z",
          "updated_at": "2020-05-07T02:23:49.000000Z"
      },
      {
          "id": 448,
          "guid": "110",
          "name": "calcium-channel blocker",
          "created_at": "2020-05-07T02:25:45.000000Z",
          "updated_at": "2020-05-07T02:25:45.000000Z"
      },
      {
          "id": 449,
          "guid": "257",
          "name": "antineoplastic chemotherapeutic (vinca alkaloid, mitotic inhibitor)",
          "created_at": "2020-05-07T02:26:59.000000Z",
          "updated_at": "2020-05-07T02:26:59.000000Z"
      },
      {
          "id": 450,
          "guid": "257",
          "name": "antineoplastic chemotherapeutic (vinca alkaloid, mitotic inhibitor)",
          "created_at": "2020-05-07T02:29:03.000000Z",
          "updated_at": "2020-05-07T02:29:03.000000Z"
      },
      {
          "id": 451,
          "guid": "36",
          "name": "vitamin",
          "created_at": "2020-05-07T02:30:40.000000Z",
          "updated_at": "2020-05-07T02:30:40.000000Z"
      },
      {
          "id": 452,
          "guid": "36",
          "name": "vitamin",
          "created_at": "2020-05-07T02:32:15.000000Z",
          "updated_at": "2020-05-07T02:32:15.000000Z"
      },
      {
          "id": 453,
          "guid": "88",
          "name": "antifungal (azole)",
          "created_at": "2020-05-07T02:33:00.000000Z",
          "updated_at": "2020-05-07T02:33:00.000000Z"
      },
      {
          "id": 454,
          "guid": "146",
          "name": "anticoagulant",
          "created_at": "2020-05-07T02:33:56.000000Z",
          "updated_at": "2020-05-07T02:33:56.000000Z"
      },
      {
          "id": 455,
          "guid": "258",
          "name": "alpha-2 adrenergic agonist",
          "created_at": "2020-05-07T02:35:56.000000Z",
          "updated_at": "2020-05-07T02:35:56.000000Z"
      },
      {
          "id": 456,
          "guid": "38",
          "name": "reversal agent for alpha-2 adrenergic agonists",
          "created_at": "2020-05-07T02:36:56.000000Z",
          "updated_at": "2020-05-07T02:36:56.000000Z"
      },
      {
          "id": 457,
          "guid": "259",
          "name": "leukotriene receptor antagonist",
          "created_at": "2020-05-07T02:37:38.000000Z",
          "updated_at": "2020-05-07T02:37:38.000000Z"
      },
      {
          "id": 458,
          "guid": "12",
          "name": "antiviral",
          "created_at": "2020-05-07T02:38:27.000000Z",
          "updated_at": "2020-05-07T02:38:27.000000Z"
      },
      {
          "id": 459,
          "guid": "157",
          "name": "mineral supplement",
          "created_at": "2020-05-07T02:39:07.000000Z",
          "updated_at": "2020-05-07T02:39:07.000000Z"
      },
      {
          "id": 460,
          "guid": "157",
          "name": "mineral supplement",
          "created_at": "2020-05-07T02:39:45.000000Z",
          "updated_at": "2020-05-07T02:39:45.000000Z"
      },
      {
          "id": 461,
          "guid": "157",
          "name": "mineral supplement",
          "created_at": "2020-05-07T02:40:30.000000Z",
          "updated_at": "2020-05-07T02:40:30.000000Z"
      },
      {
          "id": 462,
          "guid": "49",
          "name": "anticonvulsant",
          "created_at": "2020-05-07T02:41:00.000000Z",
          "updated_at": "2020-05-07T02:41:00.000000Z"
      },
      {
          "id": 463,
          "guid": "260",
          "name": "antineoplastic chemotherapeutic (taxane class)",
          "created_at": "2020-05-07T02:41:44.000000Z",
          "updated_at": "2020-05-07T02:41:44.000000Z"
      },
      {
          "id": 464,
          "guid": "261",
          "name": "biologic",
          "created_at": "2020-05-07T02:42:07.000000Z",
          "updated_at": "2020-05-07T02:42:07.000000Z"
      },
      {
          "id": 465,
          "guid": "262",
          "name": "antiparasitic (cestodes/tapeworms)",
          "created_at": "2020-05-07T02:43:48.000000Z",
          "updated_at": "2020-05-07T02:43:48.000000Z"
      },
      {
          "id": 466,
          "guid": "228",
          "name": "anesthetic induction agent (short-acting)",
          "created_at": "2020-05-07T02:45:01.000000Z",
          "updated_at": "2020-05-07T02:45:01.000000Z"
      },
      {
          "id": 467,
          "guid": "26",
          "name": "antiarrhythmic",
          "created_at": "2020-05-07T02:45:57.000000Z",
          "updated_at": "2020-05-07T02:45:57.000000Z"
      },
      {
          "id": 468,
          "guid": "263",
          "name": "corticosteroid (glucocorticoid)",
          "created_at": "2020-05-07T02:46:39.000000Z",
          "updated_at": "2020-05-07T02:46:39.000000Z"
      },
      {
          "id": 469,
          "guid": "264",
          "name": "antimuscarinic, anticholinergic",
          "created_at": "2020-05-07T02:47:47.000000Z",
          "updated_at": "2020-05-07T02:47:47.000000Z"
      },
      {
          "id": 470,
          "guid": "265",
          "name": "contrast medium (iodine-based)",
          "created_at": "2020-05-07T02:48:13.000000Z",
          "updated_at": "2020-05-07T02:48:13.000000Z"
      },
      {
          "id": 471,
          "guid": "265",
          "name": "contrast medium (iodine-based)",
          "created_at": "2020-05-07T02:49:11.000000Z",
          "updated_at": "2020-05-07T02:49:11.000000Z"
      },
      {
          "id": 472,
          "guid": "96",
          "name": "antiparasitic (antiprotozoal)",
          "created_at": "2020-05-07T02:49:43.000000Z",
          "updated_at": "2020-05-07T02:49:43.000000Z"
      },
      {
          "id": 473,
          "guid": "22",
          "name": "antibacterial (aminoglycoside)",
          "created_at": "2020-05-07T02:50:38.000000Z",
          "updated_at": "2020-05-07T02:50:38.000000Z"
      },
      {
          "id": 474,
          "guid": "201",
          "name": "gastric acid reducer (proton pump inhibitor)",
          "created_at": "2020-05-07T02:52:10.000000Z",
          "updated_at": "2020-05-07T02:52:10.000000Z"
      },
      {
          "id": 475,
          "guid": "266",
          "name": "parenteral nutrition/antidote",
          "created_at": "2020-05-07T02:55:06.000000Z",
          "updated_at": "2020-05-07T02:55:06.000000Z"
      },
      {
          "id": 476,
          "guid": "267",
          "name": "antihistamine (first-generation), antiemetic",
          "created_at": "2020-05-07T02:56:11.000000Z",
          "updated_at": "2020-05-07T02:56:11.000000Z"
      },
      {
          "id": 477,
          "guid": "268",
          "name": "NMDA receptor blocker",
          "created_at": "2020-05-07T02:56:58.000000Z",
          "updated_at": "2020-05-07T02:56:58.000000Z"
      },
      {
          "id": 478,
          "guid": "269",
          "name": "cortisol synthesis blocker",
          "created_at": "2020-05-07T02:57:44.000000Z",
          "updated_at": "2020-05-07T02:57:44.000000Z"
      },
      {
          "id": 479,
          "guid": "39",
          "name": "antiprotozoal",
          "created_at": "2020-05-07T02:58:26.000000Z",
          "updated_at": "2020-05-07T02:58:26.000000Z"
      },
      {
          "id": 480,
          "guid": "83",
          "name": "gastrointestinal promotility agent",
          "created_at": "2020-05-07T02:59:21.000000Z",
          "updated_at": "2020-05-07T02:59:21.000000Z"
      },
      {
          "id": 481,
          "guid": "196",
          "name": "opioid antagonist",
          "created_at": "2020-05-07T03:00:24.000000Z",
          "updated_at": "2020-05-07T03:00:24.000000Z"
      },
      {
          "id": 482,
          "guid": "270",
          "name": "Janus kinase (JAK) inhibitor",
          "created_at": "2020-05-07T03:00:58.000000Z",
          "updated_at": "2020-05-07T03:00:58.000000Z"
      },
      {
          "id": 483,
          "guid": "227",
          "name": "anticholinergic",
          "created_at": "2020-05-07T03:02:14.000000Z",
          "updated_at": "2020-05-07T03:02:14.000000Z"
      },
      {
          "id": 484,
          "guid": "271",
          "name": "muscle relaxant (non-depolarizing)",
          "created_at": "2020-05-07T03:03:20.000000Z",
          "updated_at": "2020-05-07T03:03:20.000000Z"
      },
      {
          "id": 485,
          "guid": "272",
          "name": "alpha-adrenergic receptor antagonist",
          "created_at": "2020-05-07T03:03:52.000000Z",
          "updated_at": "2020-05-07T03:03:52.000000Z"
      },
      {
          "id": 486,
          "guid": "273",
          "name": "serine protease inhibitor",
          "created_at": "2020-05-07T03:04:16.000000Z",
          "updated_at": "2020-05-07T03:04:16.000000Z"
      },
      {
          "id": 487,
          "guid": "39",
          "name": "antiprotozoal",
          "created_at": "2020-05-07T03:04:51.000000Z",
          "updated_at": "2020-05-07T03:04:51.000000Z"
      },
      {
          "id": 488,
          "guid": "274",
          "name": "antibacterial (glycopeptide)",
          "created_at": "2020-05-07T03:05:32.000000Z",
          "updated_at": "2020-05-07T03:05:32.000000Z"
      },
      {
          "id": 489,
          "guid": "275",
          "name": "angiotensin receptor antagonist",
          "created_at": "2020-05-07T03:06:09.000000Z",
          "updated_at": "2020-05-07T03:06:09.000000Z"
      },
      {
          "id": 490,
          "guid": "276",
          "name": "non-steroidal antiinflammatory",
          "created_at": "2020-05-07T03:07:26.000000Z",
          "updated_at": "2020-05-07T03:07:26.000000Z"
      },
      {
          "id": 491,
          "guid": "8",
          "name": "hormone",
          "created_at": "2020-05-07T03:09:07.000000Z",
          "updated_at": "2020-05-07T03:09:07.000000Z"
      },
      {
          "id": 492,
          "guid": "277",
          "name": "antidepressant (serotonin antagonist and reuptake inhibitor)",
          "created_at": "2020-05-07T03:10:22.000000Z",
          "updated_at": "2020-05-07T03:10:22.000000Z"
      },
      {
          "id": 493,
          "guid": "278",
          "name": "gonadotropin-releasing hormone agonist",
          "created_at": "2020-05-07T03:12:29.000000Z",
          "updated_at": "2020-05-07T03:12:29.000000Z"
      },
      {
          "id": 494,
          "guid": "201",
          "name": "gastric acid reducer (proton pump inhibitor)",
          "created_at": "2020-05-07T03:13:20.000000Z",
          "updated_at": "2020-05-07T03:13:20.000000Z"
      },
      {
          "id": 495,
          "guid": "144",
          "name": "antifungal",
          "created_at": "2020-05-07T03:14:35.000000Z",
          "updated_at": "2020-05-07T03:14:35.000000Z"
      },
      {
          "id": 496,
          "guid": "279",
          "name": "angiotensin II receptor antagonist",
          "created_at": "2020-05-07T03:15:16.000000Z",
          "updated_at": "2020-05-07T03:15:16.000000Z"
      },
      {
          "id": 497,
          "guid": "280",
          "name": "antibacterial (oxazolidinone)",
          "created_at": "2020-05-07T03:16:16.000000Z",
          "updated_at": "2020-05-07T03:16:16.000000Z"
      },
      {
          "id": 498,
          "guid": "281",
          "name": "anthelmintic (benzimidazole)",
          "created_at": "2020-05-07T03:19:46.000000Z",
          "updated_at": "2020-05-07T03:19:46.000000Z"
      },
      {
          "id": 499,
          "guid": "282",
          "name": "urinary antiseptic",
          "created_at": "2020-05-07T03:20:55.000000Z",
          "updated_at": "2020-05-07T03:20:55.000000Z"
      },
      {
          "id": 500,
          "guid": "22",
          "name": "antibacterial (aminoglycoside)",
          "created_at": "2020-05-07T03:22:57.000000Z",
          "updated_at": "2020-05-07T03:22:57.000000Z"
      },
      {
          "id": 501,
          "guid": "10",
          "name": "antineoplastic chemotherapeutic",
          "created_at": "2020-05-07T03:23:56.000000Z",
          "updated_at": "2020-05-07T03:23:56.000000Z"
      },
      {
          "id": 502,
          "guid": "124",
          "name": "antimicrobial (fluoroquinolone)",
          "created_at": "2020-05-07T03:24:22.000000Z",
          "updated_at": "2020-05-07T03:24:22.000000Z"
      },
      {
          "id": 503,
          "guid": "new_vdi_category",
          "name": "antiparasitic (isoxazoline - GABAergic system of parasites)",
          "created_at": "2020-09-26T18:22:46.000000Z",
          "updated_at": "2020-09-26T18:22:46.000000Z"
      },
      {
          "id": 504,
          "guid": "new_vdi_category",
          "name": "mucolytic",
          "created_at": "2020-09-26T19:52:57.000000Z",
          "updated_at": "2020-09-26T19:52:57.000000Z"
      },
      {
          "id": 505,
          "guid": "new_vdi_category",
          "name": "anticoagulant (factor Xa inhibitor)",
          "created_at": "2020-09-26T20:13:06.000000Z",
          "updated_at": "2020-09-26T20:13:06.000000Z"
      },
      {
          "id": 506,
          "guid": "new_vdi_category",
          "name": "antineoplastic chemotherapeutic (sesquiterpene lactone)",
          "created_at": "2020-09-27T18:22:09.000000Z",
          "updated_at": "2020-09-27T18:22:09.000000Z"
      },
      {
          "id": 507,
          "guid": "new_vdi_category",
          "name": "lipid-lowering agent (fibric acid derivative)",
          "created_at": "2020-09-27T18:59:47.000000Z",
          "updated_at": "2020-09-27T18:59:47.000000Z"
      },
      {
          "id": 508,
          "guid": "new_vdi_category",
          "name": "appetite stimulant (ghrelin agonist)",
          "created_at": "2020-09-27T21:46:51.000000Z",
          "updated_at": "2020-09-27T21:46:51.000000Z"
      },
      {
          "id": 509,
          "guid": "new_vdi_category",
          "name": "contrast agent",
          "created_at": "2020-09-27T21:59:28.000000Z",
          "updated_at": "2020-09-27T21:59:28.000000Z"
      },
      {
          "id": 510,
          "guid": "new_vdi_category",
          "name": "lipid-lowering agent",
          "created_at": "2020-09-29T12:46:37.000000Z",
          "updated_at": "2020-09-29T12:46:37.000000Z"
      },
      {
          "id": 511,
          "guid": "new_vdi_category",
          "name": "nonsteroidal anti-inflammatory (prostaglandin E2 antagonist)",
          "created_at": "2020-09-29T13:18:59.000000Z",
          "updated_at": "2020-09-29T13:18:59.000000Z"
      },
      {
          "id": 512,
          "guid": "new_vdi_category",
          "name": "monoclonal antibody",
          "created_at": "2020-09-29T23:18:38.000000Z",
          "updated_at": "2020-09-29T23:18:38.000000Z"
      },
      {
          "id": 513,
          "guid": "new_vdi_category",
          "name": "anorexigenic",
          "created_at": "2020-09-29T23:53:41.000000Z",
          "updated_at": "2020-09-29T23:53:41.000000Z"
      },
      {
          "id": 514,
          "guid": "new_vdi_category",
          "name": "bowel preparation agent, laxative",
          "created_at": "2020-09-30T01:02:11.000000Z",
          "updated_at": "2020-09-30T01:02:11.000000Z"
      },
      {
          "id": 515,
          "guid": "new_vdi_category",
          "name": "antineoplastic chemotherapeutic (acyclic nucleotide phosphonate)",
          "created_at": "2020-10-01T00:26:55.000000Z",
          "updated_at": "2020-10-01T00:26:55.000000Z"
      },
      {
          "id": 516,
          "guid": "new_vdi_category",
          "name": "antibacterial (rifamycin class)",
          "created_at": "2020-10-01T00:44:45.000000Z",
          "updated_at": "2020-10-01T00:44:45.000000Z"
      },
      {
          "id": 517,
          "guid": "new_vdi_category",
          "name": "antibacterial (aminocyclitol)",
          "created_at": "2020-10-01T01:18:45.000000Z",
          "updated_at": "2020-10-01T01:18:45.000000Z"
      },
      {
          "id": 518,
          "guid": "new_vdi_category",
          "name": "antimicrobial (sulfonamide)",
          "created_at": "2020-10-01T01:35:49.000000Z",
          "updated_at": "2020-10-01T01:35:49.000000Z"
      },
      {
          "id": 519,
          "guid": "new_vdi_category",
          "name": "antiemetic",
          "created_at": "2020-10-01T13:34:28.000000Z",
          "updated_at": "2020-10-01T13:34:28.000000Z"
      },
      {
          "id": 520,
          "guid": "new_vdi_category",
          "name": "urinary calculolytic",
          "created_at": "2020-10-30T19:28:36.000000Z",
          "updated_at": "2020-10-30T19:28:36.000000Z"
      }
  ];
  let query = "INSERT INTO vdi_drug_categories (id,guid,name,created_at,updated_at) VALUES";


  for (let i = 0; i < data.length; ++i) {

        query = query + "('"
              + data[i].id //id
              + "','"
              + data[i].guid 
              + "','"
              + (data[i].name == null ? null : data[i].name.replace(/[`~!@#$^_?'"\\]/gi, '\\'))
              + "','"
              + data[i].created_at //date
              + "','"
              + data[i].updated_at //date
              + "')";
        if (i != data.length - 1) {
              query = query + ",";
        }
  }
  query = query + ";";
  let categories = await ExecuteQuery(query, []);;
  console.log('Charles Inserting Categories.................................',categories)

  console.log('....................................................................');
}

export const categories = {
      insertCategoriesAsync
}