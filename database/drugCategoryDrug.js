import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Drug Category Drugs Succesfully inserted into the database', results);
            },
                  (error) => {
                        reject('Failed to inserts Drug Category Drug into the database!', error);
                  });
      });
});

const insertDrugCategoriesAsync = async() => {

 let data = [
      {
          "id": 1,
          "category_id": 1,
          "drug_id": 1,
          "created_at": "2020-05-06 15:45:56",
          "updated_at": "2020-05-06 15:45:56"
      },
      {
          "id": 8,
          "category_id": 8,
          "drug_id": 8,
          "created_at": "2020-05-06 15:57:15",
          "updated_at": "2020-05-06 15:57:15"
      },
      {
          "id": 10,
          "category_id": 10,
          "drug_id": 10,
          "created_at": "2020-05-06 15:58:51",
          "updated_at": "2020-05-06 15:58:51"
      },
      {
          "id": 12,
          "category_id": 12,
          "drug_id": 12,
          "created_at": "2020-05-06 16:01:14",
          "updated_at": "2020-05-06 16:01:14"
      },
      {
          "id": 15,
          "category_id": 15,
          "drug_id": 15,
          "created_at": "2020-05-06 16:06:21",
          "updated_at": "2020-05-06 16:06:21"
      },
      {
          "id": 17,
          "category_id": 17,
          "drug_id": 17,
          "created_at": "2020-05-06 16:08:28",
          "updated_at": "2020-05-06 16:08:28"
      },
      {
          "id": 19,
          "category_id": 19,
          "drug_id": 19,
          "created_at": "2020-05-06 16:10:19",
          "updated_at": "2020-05-06 16:10:19"
      },
      {
          "id": 20,
          "category_id": 20,
          "drug_id": 20,
          "created_at": "2020-05-06 16:11:45",
          "updated_at": "2020-05-06 16:11:45"
      },
      {
          "id": 21,
          "category_id": 21,
          "drug_id": 21,
          "created_at": "2020-05-06 16:12:26",
          "updated_at": "2020-05-06 16:12:26"
      },
      {
          "id": 24,
          "category_id": 24,
          "drug_id": 24,
          "created_at": "2020-05-06 16:15:10",
          "updated_at": "2020-05-06 16:15:10"
      },
      {
          "id": 25,
          "category_id": 25,
          "drug_id": 25,
          "created_at": "2020-05-06 16:16:24",
          "updated_at": "2020-05-06 16:16:24"
      },
      {
          "id": 27,
          "category_id": 27,
          "drug_id": 27,
          "created_at": "2020-05-06 16:18:36",
          "updated_at": "2020-05-06 16:18:36"
      },
      {
          "id": 28,
          "category_id": 28,
          "drug_id": 28,
          "created_at": "2020-05-06 16:19:35",
          "updated_at": "2020-05-06 16:19:35"
      },
      {
          "id": 29,
          "category_id": 29,
          "drug_id": 29,
          "created_at": "2020-05-06 16:21:22",
          "updated_at": "2020-05-06 16:21:22"
      },
      {
          "id": 30,
          "category_id": 30,
          "drug_id": 30,
          "created_at": "2020-05-06 16:22:25",
          "updated_at": "2020-05-06 16:22:25"
      },
      {
          "id": 31,
          "category_id": 31,
          "drug_id": 31,
          "created_at": "2020-05-06 16:25:05",
          "updated_at": "2020-05-06 16:25:05"
      },
      {
          "id": 33,
          "category_id": 33,
          "drug_id": 33,
          "created_at": "2020-05-06 16:28:49",
          "updated_at": "2020-05-06 16:28:49"
      },
      {
          "id": 34,
          "category_id": 34,
          "drug_id": 34,
          "created_at": "2020-05-06 16:29:40",
          "updated_at": "2020-05-06 16:29:40"
      },
      {
          "id": 35,
          "category_id": 35,
          "drug_id": 35,
          "created_at": "2020-05-06 16:30:27",
          "updated_at": "2020-05-06 16:30:27"
      },
      {
          "id": 36,
          "category_id": 36,
          "drug_id": 36,
          "created_at": "2020-05-06 16:32:17",
          "updated_at": "2020-05-06 16:32:17"
      },
      {
          "id": 37,
          "category_id": 37,
          "drug_id": 37,
          "created_at": "2020-05-06 16:32:55",
          "updated_at": "2020-05-06 16:32:55"
      },
      {
          "id": 38,
          "category_id": 38,
          "drug_id": 38,
          "created_at": "2020-05-06 16:33:38",
          "updated_at": "2020-05-06 16:33:38"
      },
      {
          "id": 39,
          "category_id": 39,
          "drug_id": 39,
          "created_at": "2020-05-06 16:34:50",
          "updated_at": "2020-05-06 16:34:50"
      },
      {
          "id": 40,
          "category_id": 40,
          "drug_id": 40,
          "created_at": "2020-05-06 16:35:37",
          "updated_at": "2020-05-06 16:35:37"
      },
      {
          "id": 41,
          "category_id": 41,
          "drug_id": 41,
          "created_at": "2020-05-06 16:37:28",
          "updated_at": "2020-05-06 16:37:28"
      },
      {
          "id": 45,
          "category_id": 45,
          "drug_id": 45,
          "created_at": "2020-05-06 16:41:57",
          "updated_at": "2020-05-06 16:41:57"
      },
      {
          "id": 46,
          "category_id": 46,
          "drug_id": 46,
          "created_at": "2020-05-06 16:43:17",
          "updated_at": "2020-05-06 16:43:17"
      },
      {
          "id": 47,
          "category_id": 47,
          "drug_id": 47,
          "created_at": "2020-05-06 16:44:12",
          "updated_at": "2020-05-06 16:44:12"
      },
      {
          "id": 48,
          "category_id": 48,
          "drug_id": 48,
          "created_at": "2020-05-06 16:44:45",
          "updated_at": "2020-05-06 16:44:45"
      },
      {
          "id": 49,
          "category_id": 49,
          "drug_id": 49,
          "created_at": "2020-05-06 16:45:27",
          "updated_at": "2020-05-06 16:45:27"
      },
      {
          "id": 53,
          "category_id": 53,
          "drug_id": 53,
          "created_at": "2020-05-06 16:52:49",
          "updated_at": "2020-05-06 16:52:49"
      },
      {
          "id": 54,
          "category_id": 54,
          "drug_id": 54,
          "created_at": "2020-05-06 16:54:09",
          "updated_at": "2020-05-06 16:54:09"
      },
      {
          "id": 55,
          "category_id": 55,
          "drug_id": 55,
          "created_at": "2020-05-06 16:55:38",
          "updated_at": "2020-05-06 16:55:38"
      },
      {
          "id": 56,
          "category_id": 56,
          "drug_id": 56,
          "created_at": "2020-05-06 16:56:29",
          "updated_at": "2020-05-06 16:56:29"
      },
      {
          "id": 59,
          "category_id": 59,
          "drug_id": 59,
          "created_at": "2020-05-06 17:00:35",
          "updated_at": "2020-05-06 17:00:35"
      },
      {
          "id": 61,
          "category_id": 61,
          "drug_id": 61,
          "created_at": "2020-05-06 17:02:05",
          "updated_at": "2020-05-06 17:02:05"
      },
      {
          "id": 64,
          "category_id": 64,
          "drug_id": 64,
          "created_at": "2020-05-06 17:08:57",
          "updated_at": "2020-05-06 17:08:57"
      },
      {
          "id": 67,
          "category_id": 67,
          "drug_id": 67,
          "created_at": "2020-05-06 17:15:09",
          "updated_at": "2020-05-06 17:15:09"
      },
      {
          "id": 69,
          "category_id": 69,
          "drug_id": 69,
          "created_at": "2020-05-06 17:18:41",
          "updated_at": "2020-05-06 17:18:41"
      },
      {
          "id": 71,
          "category_id": 71,
          "drug_id": 71,
          "created_at": "2020-05-06 17:20:59",
          "updated_at": "2020-05-06 17:20:59"
      },
      {
          "id": 72,
          "category_id": 72,
          "drug_id": 72,
          "created_at": "2020-05-06 17:23:07",
          "updated_at": "2020-05-06 17:23:07"
      },
      {
          "id": 73,
          "category_id": 73,
          "drug_id": 73,
          "created_at": "2020-05-06 17:24:07",
          "updated_at": "2020-05-06 17:24:07"
      },
      {
          "id": 74,
          "category_id": 74,
          "drug_id": 74,
          "created_at": "2020-05-06 17:24:34",
          "updated_at": "2020-05-06 17:24:34"
      },
      {
          "id": 77,
          "category_id": 77,
          "drug_id": 77,
          "created_at": "2020-05-06 17:29:01",
          "updated_at": "2020-05-06 17:29:01"
      },
      {
          "id": 80,
          "category_id": 80,
          "drug_id": 80,
          "created_at": "2020-05-06 17:33:12",
          "updated_at": "2020-05-06 17:33:12"
      },
      {
          "id": 81,
          "category_id": 81,
          "drug_id": 81,
          "created_at": "2020-05-06 17:33:41",
          "updated_at": "2020-05-06 17:33:41"
      },
      {
          "id": 82,
          "category_id": 82,
          "drug_id": 82,
          "created_at": "2020-05-06 17:34:27",
          "updated_at": "2020-05-06 17:34:27"
      },
      {
          "id": 84,
          "category_id": 84,
          "drug_id": 84,
          "created_at": "2020-05-06 17:36:32",
          "updated_at": "2020-05-06 17:36:32"
      },
      {
          "id": 86,
          "category_id": 86,
          "drug_id": 86,
          "created_at": "2020-05-06 17:38:13",
          "updated_at": "2020-05-06 17:38:13"
      },
      {
          "id": 87,
          "category_id": 87,
          "drug_id": 87,
          "created_at": "2020-05-06 17:39:07",
          "updated_at": "2020-05-06 17:39:07"
      },
      {
          "id": 88,
          "category_id": 88,
          "drug_id": 88,
          "created_at": "2020-05-06 17:39:43",
          "updated_at": "2020-05-06 17:39:43"
      },
      {
          "id": 89,
          "category_id": 89,
          "drug_id": 89,
          "created_at": "2020-05-06 17:40:17",
          "updated_at": "2020-05-06 17:40:17"
      },
      {
          "id": 90,
          "category_id": 90,
          "drug_id": 90,
          "created_at": "2020-05-06 17:41:03",
          "updated_at": "2020-05-06 17:41:03"
      },
      {
          "id": 94,
          "category_id": 94,
          "drug_id": 94,
          "created_at": "2020-05-06 17:44:46",
          "updated_at": "2020-05-06 17:44:46"
      },
      {
          "id": 95,
          "category_id": 95,
          "drug_id": 95,
          "created_at": "2020-05-06 17:45:21",
          "updated_at": "2020-05-06 17:45:21"
      },
      {
          "id": 96,
          "category_id": 96,
          "drug_id": 96,
          "created_at": "2020-05-06 17:46:20",
          "updated_at": "2020-05-06 17:46:20"
      },
      {
          "id": 97,
          "category_id": 97,
          "drug_id": 97,
          "created_at": "2020-05-06 17:47:11",
          "updated_at": "2020-05-06 17:47:11"
      },
      {
          "id": 99,
          "category_id": 99,
          "drug_id": 99,
          "created_at": "2020-05-06 17:49:03",
          "updated_at": "2020-05-06 17:49:03"
      },
      {
          "id": 101,
          "category_id": 101,
          "drug_id": 101,
          "created_at": "2020-05-06 17:50:47",
          "updated_at": "2020-05-06 17:50:47"
      },
      {
          "id": 103,
          "category_id": 103,
          "drug_id": 103,
          "created_at": "2020-05-06 17:53:48",
          "updated_at": "2020-05-06 17:53:48"
      },
      {
          "id": 104,
          "category_id": 104,
          "drug_id": 104,
          "created_at": "2020-05-06 17:54:59",
          "updated_at": "2020-05-06 17:54:59"
      },
      {
          "id": 106,
          "category_id": 106,
          "drug_id": 106,
          "created_at": "2020-05-06 17:57:27",
          "updated_at": "2020-05-06 17:57:27"
      },
      {
          "id": 107,
          "category_id": 107,
          "drug_id": 107,
          "created_at": "2020-05-06 17:58:09",
          "updated_at": "2020-05-06 17:58:09"
      },
      {
          "id": 109,
          "category_id": 109,
          "drug_id": 109,
          "created_at": "2020-05-06 18:00:46",
          "updated_at": "2020-05-06 18:00:46"
      },
      {
          "id": 113,
          "category_id": 113,
          "drug_id": 113,
          "created_at": "2020-05-06 18:05:16",
          "updated_at": "2020-05-06 18:05:16"
      },
      {
          "id": 115,
          "category_id": 115,
          "drug_id": 115,
          "created_at": "2020-05-06 18:07:28",
          "updated_at": "2020-05-06 18:07:28"
      },
      {
          "id": 116,
          "category_id": 116,
          "drug_id": 116,
          "created_at": "2020-05-06 18:10:16",
          "updated_at": "2020-05-06 18:10:16"
      },
      {
          "id": 117,
          "category_id": 117,
          "drug_id": 117,
          "created_at": "2020-05-06 18:10:59",
          "updated_at": "2020-05-06 18:10:59"
      },
      {
          "id": 118,
          "category_id": 118,
          "drug_id": 118,
          "created_at": "2020-05-06 18:13:19",
          "updated_at": "2020-05-06 18:13:19"
      },
      {
          "id": 119,
          "category_id": 119,
          "drug_id": 119,
          "created_at": "2020-05-06 18:13:52",
          "updated_at": "2020-05-06 18:13:52"
      },
      {
          "id": 121,
          "category_id": 121,
          "drug_id": 121,
          "created_at": "2020-05-06 18:15:43",
          "updated_at": "2020-05-06 18:15:43"
      },
      {
          "id": 129,
          "category_id": 129,
          "drug_id": 129,
          "created_at": "2020-05-06 18:28:54",
          "updated_at": "2020-05-06 18:28:54"
      },
      {
          "id": 133,
          "category_id": 133,
          "drug_id": 133,
          "created_at": "2020-05-06 18:33:49",
          "updated_at": "2020-05-06 18:33:49"
      },
      {
          "id": 134,
          "category_id": 134,
          "drug_id": 134,
          "created_at": "2020-05-06 18:34:16",
          "updated_at": "2020-05-06 18:34:16"
      },
      {
          "id": 136,
          "category_id": 136,
          "drug_id": 136,
          "created_at": "2020-05-06 18:35:22",
          "updated_at": "2020-05-06 18:35:22"
      },
      {
          "id": 137,
          "category_id": 137,
          "drug_id": 137,
          "created_at": "2020-05-06 18:36:05",
          "updated_at": "2020-05-06 18:36:05"
      },
      {
          "id": 138,
          "category_id": 138,
          "drug_id": 138,
          "created_at": "2020-05-06 18:37:10",
          "updated_at": "2020-05-06 18:37:10"
      },
      {
          "id": 144,
          "category_id": 144,
          "drug_id": 144,
          "created_at": "2020-05-06 18:49:22",
          "updated_at": "2020-05-06 18:49:22"
      },
      {
          "id": 145,
          "category_id": 145,
          "drug_id": 145,
          "created_at": "2020-05-06 18:50:10",
          "updated_at": "2020-05-06 18:50:10"
      },
      {
          "id": 146,
          "category_id": 146,
          "drug_id": 146,
          "created_at": "2020-05-06 18:53:52",
          "updated_at": "2020-05-06 18:53:52"
      },
      {
          "id": 147,
          "category_id": 147,
          "drug_id": 147,
          "created_at": "2020-05-06 18:55:33",
          "updated_at": "2020-05-06 18:55:33"
      },
      {
          "id": 149,
          "category_id": 149,
          "drug_id": 149,
          "created_at": "2020-05-06 18:59:40",
          "updated_at": "2020-05-06 18:59:40"
      },
      {
          "id": 150,
          "category_id": 150,
          "drug_id": 150,
          "created_at": "2020-05-06 19:00:14",
          "updated_at": "2020-05-06 19:00:14"
      },
      {
          "id": 151,
          "category_id": 151,
          "drug_id": 151,
          "created_at": "2020-05-06 19:00:41",
          "updated_at": "2020-05-06 19:00:41"
      },
      {
          "id": 153,
          "category_id": 153,
          "drug_id": 153,
          "created_at": "2020-05-06 19:03:07",
          "updated_at": "2020-05-06 19:03:07"
      },
      {
          "id": 154,
          "category_id": 154,
          "drug_id": 154,
          "created_at": "2020-05-06 19:03:35",
          "updated_at": "2020-05-06 19:03:35"
      },
      {
          "id": 155,
          "category_id": 155,
          "drug_id": 155,
          "created_at": "2020-05-06 19:04:57",
          "updated_at": "2020-05-06 19:04:57"
      },
      {
          "id": 156,
          "category_id": 156,
          "drug_id": 156,
          "created_at": "2020-05-06 19:06:04",
          "updated_at": "2020-05-06 19:06:04"
      },
      {
          "id": 158,
          "category_id": 158,
          "drug_id": 158,
          "created_at": "2020-05-06 19:08:52",
          "updated_at": "2020-05-06 19:08:52"
      },
      {
          "id": 159,
          "category_id": 159,
          "drug_id": 159,
          "created_at": "2020-05-06 19:09:58",
          "updated_at": "2020-05-06 19:09:58"
      },
      {
          "id": 160,
          "category_id": 160,
          "drug_id": 160,
          "created_at": "2020-05-06 19:10:35",
          "updated_at": "2020-05-06 19:10:35"
      },
      {
          "id": 161,
          "category_id": 161,
          "drug_id": 161,
          "created_at": "2020-05-06 19:11:24",
          "updated_at": "2020-05-06 19:11:24"
      },
      {
          "id": 164,
          "category_id": 164,
          "drug_id": 164,
          "created_at": "2020-05-06 19:17:38",
          "updated_at": "2020-05-06 19:17:38"
      },
      {
          "id": 165,
          "category_id": 165,
          "drug_id": 165,
          "created_at": "2020-05-06 19:18:27",
          "updated_at": "2020-05-06 19:18:27"
      },
      {
          "id": 166,
          "category_id": 166,
          "drug_id": 166,
          "created_at": "2020-05-06 19:19:04",
          "updated_at": "2020-05-06 19:19:04"
      },
      {
          "id": 170,
          "category_id": 170,
          "drug_id": 170,
          "created_at": "2020-05-06 19:23:50",
          "updated_at": "2020-05-06 19:23:50"
      },
      {
          "id": 172,
          "category_id": 172,
          "drug_id": 172,
          "created_at": "2020-05-06 19:29:16",
          "updated_at": "2020-05-06 19:29:16"
      },
      {
          "id": 174,
          "category_id": 174,
          "drug_id": 174,
          "created_at": "2020-05-06 19:31:38",
          "updated_at": "2020-05-06 19:31:38"
      },
      {
          "id": 175,
          "category_id": 175,
          "drug_id": 175,
          "created_at": "2020-05-06 19:36:03",
          "updated_at": "2020-05-06 19:36:03"
      },
      {
          "id": 176,
          "category_id": 176,
          "drug_id": 176,
          "created_at": "2020-05-06 19:36:46",
          "updated_at": "2020-05-06 19:36:46"
      },
      {
          "id": 179,
          "category_id": 179,
          "drug_id": 179,
          "created_at": "2020-05-06 19:41:47",
          "updated_at": "2020-05-06 19:41:47"
      },
      {
          "id": 180,
          "category_id": 180,
          "drug_id": 180,
          "created_at": "2020-05-06 19:43:18",
          "updated_at": "2020-05-06 19:43:18"
      },
      {
          "id": 183,
          "category_id": 183,
          "drug_id": 183,
          "created_at": "2020-05-06 19:46:20",
          "updated_at": "2020-05-06 19:46:20"
      },
      {
          "id": 184,
          "category_id": 184,
          "drug_id": 184,
          "created_at": "2020-05-06 19:47:00",
          "updated_at": "2020-05-06 19:47:00"
      },
      {
          "id": 187,
          "category_id": 187,
          "drug_id": 187,
          "created_at": "2020-05-06 19:52:46",
          "updated_at": "2020-05-06 19:52:46"
      },
      {
          "id": 188,
          "category_id": 188,
          "drug_id": 188,
          "created_at": "2020-05-06 19:53:17",
          "updated_at": "2020-05-06 19:53:17"
      },
      {
          "id": 191,
          "category_id": 191,
          "drug_id": 191,
          "created_at": "2020-05-06 20:02:25",
          "updated_at": "2020-05-06 20:02:25"
      },
      {
          "id": 193,
          "category_id": 193,
          "drug_id": 193,
          "created_at": "2020-05-06 20:04:36",
          "updated_at": "2020-05-06 20:04:36"
      },
      {
          "id": 198,
          "category_id": 198,
          "drug_id": 198,
          "created_at": "2020-05-06 20:10:55",
          "updated_at": "2020-05-06 20:10:55"
      },
      {
          "id": 203,
          "category_id": 203,
          "drug_id": 203,
          "created_at": "2020-05-06 20:17:22",
          "updated_at": "2020-05-06 20:17:22"
      },
      {
          "id": 204,
          "category_id": 204,
          "drug_id": 204,
          "created_at": "2020-05-06 20:17:47",
          "updated_at": "2020-05-06 20:17:47"
      },
      {
          "id": 207,
          "category_id": 207,
          "drug_id": 207,
          "created_at": "2020-05-06 20:24:39",
          "updated_at": "2020-05-06 20:24:39"
      },
      {
          "id": 208,
          "category_id": 208,
          "drug_id": 208,
          "created_at": "2020-05-06 20:26:48",
          "updated_at": "2020-05-06 20:26:48"
      },
      {
          "id": 209,
          "category_id": 209,
          "drug_id": 209,
          "created_at": "2020-05-06 20:27:34",
          "updated_at": "2020-05-06 20:27:34"
      },
      {
          "id": 212,
          "category_id": 212,
          "drug_id": 212,
          "created_at": "2020-05-06 20:30:54",
          "updated_at": "2020-05-06 20:30:54"
      },
      {
          "id": 213,
          "category_id": 213,
          "drug_id": 213,
          "created_at": "2020-05-06 20:31:38",
          "updated_at": "2020-05-06 20:31:38"
      },
      {
          "id": 214,
          "category_id": 214,
          "drug_id": 214,
          "created_at": "2020-05-06 20:34:09",
          "updated_at": "2020-05-06 20:34:09"
      },
      {
          "id": 215,
          "category_id": 215,
          "drug_id": 215,
          "created_at": "2020-05-06 20:34:55",
          "updated_at": "2020-05-06 20:34:55"
      },
      {
          "id": 217,
          "category_id": 217,
          "drug_id": 217,
          "created_at": "2020-05-06 20:37:27",
          "updated_at": "2020-05-06 20:37:27"
      },
      {
          "id": 219,
          "category_id": 219,
          "drug_id": 219,
          "created_at": "2020-05-06 20:40:49",
          "updated_at": "2020-05-06 20:40:49"
      },
      {
          "id": 220,
          "category_id": 220,
          "drug_id": 220,
          "created_at": "2020-05-06 20:41:14",
          "updated_at": "2020-05-06 20:41:14"
      },
      {
          "id": 222,
          "category_id": 222,
          "drug_id": 222,
          "created_at": "2020-05-06 20:44:20",
          "updated_at": "2020-05-06 20:44:20"
      },
      {
          "id": 223,
          "category_id": 223,
          "drug_id": 223,
          "created_at": "2020-05-06 20:45:00",
          "updated_at": "2020-05-06 20:45:00"
      },
      {
          "id": 224,
          "category_id": 224,
          "drug_id": 224,
          "created_at": "2020-05-06 20:46:17",
          "updated_at": "2020-05-06 20:46:17"
      },
      {
          "id": 225,
          "category_id": 225,
          "drug_id": 225,
          "created_at": "2020-05-06 20:46:43",
          "updated_at": "2020-05-06 20:46:43"
      },
      {
          "id": 226,
          "category_id": 226,
          "drug_id": 226,
          "created_at": "2020-05-06 20:48:39",
          "updated_at": "2020-05-06 20:48:39"
      },
      {
          "id": 227,
          "category_id": 227,
          "drug_id": 227,
          "created_at": "2020-05-06 20:50:12",
          "updated_at": "2020-05-06 20:50:12"
      },
      {
          "id": 228,
          "category_id": 228,
          "drug_id": 228,
          "created_at": "2020-05-06 20:52:37",
          "updated_at": "2020-05-06 20:52:37"
      },
      {
          "id": 229,
          "category_id": 229,
          "drug_id": 229,
          "created_at": "2020-05-06 20:53:35",
          "updated_at": "2020-05-06 20:53:35"
      },
      {
          "id": 230,
          "category_id": 230,
          "drug_id": 230,
          "created_at": "2020-05-06 20:54:15",
          "updated_at": "2020-05-06 20:54:15"
      },
      {
          "id": 234,
          "category_id": 234,
          "drug_id": 234,
          "created_at": "2020-05-06 20:58:21",
          "updated_at": "2020-05-06 20:58:21"
      },
      {
          "id": 236,
          "category_id": 236,
          "drug_id": 236,
          "created_at": "2020-05-06 21:00:51",
          "updated_at": "2020-05-06 21:00:51"
      },
      {
          "id": 237,
          "category_id": 237,
          "drug_id": 237,
          "created_at": "2020-05-06 21:01:55",
          "updated_at": "2020-05-06 21:01:55"
      },
      {
          "id": 239,
          "category_id": 239,
          "drug_id": 239,
          "created_at": "2020-05-06 21:05:06",
          "updated_at": "2020-05-06 21:05:06"
      },
      {
          "id": 242,
          "category_id": 242,
          "drug_id": 242,
          "created_at": "2020-05-06 21:07:14",
          "updated_at": "2020-05-06 21:07:14"
      },
      {
          "id": 243,
          "category_id": 243,
          "drug_id": 243,
          "created_at": "2020-05-06 21:08:12",
          "updated_at": "2020-05-06 21:08:12"
      },
      {
          "id": 244,
          "category_id": 244,
          "drug_id": 244,
          "created_at": "2020-05-06 21:09:04",
          "updated_at": "2020-05-06 21:09:04"
      },
      {
          "id": 246,
          "category_id": 246,
          "drug_id": 246,
          "created_at": "2020-05-06 21:11:19",
          "updated_at": "2020-05-06 21:11:19"
      },
      {
          "id": 250,
          "category_id": 250,
          "drug_id": 250,
          "created_at": "2020-05-06 21:17:23",
          "updated_at": "2020-05-06 21:17:23"
      },
      {
          "id": 251,
          "category_id": 251,
          "drug_id": 251,
          "created_at": "2020-05-06 21:18:47",
          "updated_at": "2020-05-06 21:18:47"
      },
      {
          "id": 253,
          "category_id": 253,
          "drug_id": 253,
          "created_at": "2020-05-06 22:03:29",
          "updated_at": "2020-05-06 22:03:29"
      },
      {
          "id": 254,
          "category_id": 254,
          "drug_id": 254,
          "created_at": "2020-05-06 22:04:56",
          "updated_at": "2020-05-06 22:04:56"
      },
      {
          "id": 257,
          "category_id": 257,
          "drug_id": 257,
          "created_at": "2020-05-06 22:15:24",
          "updated_at": "2020-05-06 22:15:24"
      },
      {
          "id": 258,
          "category_id": 258,
          "drug_id": 258,
          "created_at": "2020-05-06 22:18:31",
          "updated_at": "2020-05-06 22:18:31"
      },
      {
          "id": 259,
          "category_id": 259,
          "drug_id": 259,
          "created_at": "2020-05-06 22:21:25",
          "updated_at": "2020-05-06 22:21:25"
      },
      {
          "id": 260,
          "category_id": 260,
          "drug_id": 260,
          "created_at": "2020-05-06 22:23:15",
          "updated_at": "2020-05-06 22:23:15"
      },
      {
          "id": 261,
          "category_id": 261,
          "drug_id": 261,
          "created_at": "2020-05-06 22:24:14",
          "updated_at": "2020-05-06 22:24:14"
      },
      {
          "id": 262,
          "category_id": 262,
          "drug_id": 262,
          "created_at": "2020-05-06 22:26:36",
          "updated_at": "2020-05-06 22:26:36"
      },
      {
          "id": 263,
          "category_id": 263,
          "drug_id": 263,
          "created_at": "2020-05-06 22:28:16",
          "updated_at": "2020-05-06 22:28:16"
      },
      {
          "id": 264,
          "category_id": 264,
          "drug_id": 264,
          "created_at": "2020-05-06 22:29:24",
          "updated_at": "2020-05-06 22:29:24"
      },
      {
          "id": 265,
          "category_id": 265,
          "drug_id": 265,
          "created_at": "2020-05-06 22:31:12",
          "updated_at": "2020-05-06 22:31:12"
      },
      {
          "id": 266,
          "category_id": 266,
          "drug_id": 266,
          "created_at": "2020-05-06 22:32:13",
          "updated_at": "2020-05-06 22:32:13"
      },
      {
          "id": 267,
          "category_id": 267,
          "drug_id": 267,
          "created_at": "2020-05-06 22:35:13",
          "updated_at": "2020-05-06 22:35:13"
      },
      {
          "id": 268,
          "category_id": 268,
          "drug_id": 268,
          "created_at": "2020-05-06 22:37:26",
          "updated_at": "2020-05-06 22:37:26"
      },
      {
          "id": 269,
          "category_id": 269,
          "drug_id": 269,
          "created_at": "2020-05-06 22:38:05",
          "updated_at": "2020-05-06 22:38:05"
      },
      {
          "id": 270,
          "category_id": 270,
          "drug_id": 270,
          "created_at": "2020-05-06 22:38:50",
          "updated_at": "2020-05-06 22:38:50"
      },
      {
          "id": 271,
          "category_id": 271,
          "drug_id": 271,
          "created_at": "2020-05-06 22:40:24",
          "updated_at": "2020-05-06 22:40:24"
      },
      {
          "id": 272,
          "category_id": 272,
          "drug_id": 272,
          "created_at": "2020-05-06 22:40:56",
          "updated_at": "2020-05-06 22:40:56"
      },
      {
          "id": 273,
          "category_id": 273,
          "drug_id": 273,
          "created_at": "2020-05-06 22:43:19",
          "updated_at": "2020-05-06 22:43:19"
      },
      {
          "id": 274,
          "category_id": 274,
          "drug_id": 274,
          "created_at": "2020-05-06 22:44:27",
          "updated_at": "2020-05-06 22:44:27"
      },
      {
          "id": 275,
          "category_id": 275,
          "drug_id": 275,
          "created_at": "2020-05-06 22:45:27",
          "updated_at": "2020-05-06 22:45:27"
      },
      {
          "id": 276,
          "category_id": 276,
          "drug_id": 276,
          "created_at": "2020-05-06 22:46:57",
          "updated_at": "2020-05-06 22:46:57"
      },
      {
          "id": 277,
          "category_id": 277,
          "drug_id": 277,
          "created_at": "2020-05-06 22:47:41",
          "updated_at": "2020-05-06 22:47:41"
      },
      {
          "id": 278,
          "category_id": 278,
          "drug_id": 278,
          "created_at": "2020-05-06 22:49:02",
          "updated_at": "2020-05-06 22:49:02"
      },
      {
          "id": 279,
          "category_id": 279,
          "drug_id": 279,
          "created_at": "2020-05-06 22:51:06",
          "updated_at": "2020-05-06 22:51:06"
      },
      {
          "id": 280,
          "category_id": 280,
          "drug_id": 280,
          "created_at": "2020-05-06 22:53:16",
          "updated_at": "2020-05-06 22:53:16"
      },
      {
          "id": 281,
          "category_id": 281,
          "drug_id": 281,
          "created_at": "2020-05-06 22:55:08",
          "updated_at": "2020-05-06 22:55:08"
      },
      {
          "id": 282,
          "category_id": 282,
          "drug_id": 282,
          "created_at": "2020-05-06 22:56:12",
          "updated_at": "2020-05-06 22:56:12"
      },
      {
          "id": 283,
          "category_id": 283,
          "drug_id": 283,
          "created_at": "2020-05-06 22:57:33",
          "updated_at": "2020-05-06 22:57:33"
      },
      {
          "id": 284,
          "category_id": 284,
          "drug_id": 284,
          "created_at": "2020-05-06 22:58:53",
          "updated_at": "2020-05-06 22:58:53"
      },
      {
          "id": 285,
          "category_id": 285,
          "drug_id": 285,
          "created_at": "2020-05-06 22:59:40",
          "updated_at": "2020-05-06 22:59:40"
      },
      {
          "id": 286,
          "category_id": 286,
          "drug_id": 286,
          "created_at": "2020-05-06 23:00:11",
          "updated_at": "2020-05-06 23:00:11"
      },
      {
          "id": 287,
          "category_id": 287,
          "drug_id": 287,
          "created_at": "2020-05-06 23:01:16",
          "updated_at": "2020-05-06 23:01:16"
      },
      {
          "id": 288,
          "category_id": 288,
          "drug_id": 288,
          "created_at": "2020-05-06 23:03:45",
          "updated_at": "2020-05-06 23:03:45"
      },
      {
          "id": 289,
          "category_id": 289,
          "drug_id": 289,
          "created_at": "2020-05-06 23:05:33",
          "updated_at": "2020-05-06 23:05:33"
      },
      {
          "id": 290,
          "category_id": 290,
          "drug_id": 290,
          "created_at": "2020-05-06 23:06:42",
          "updated_at": "2020-05-06 23:06:42"
      },
      {
          "id": 291,
          "category_id": 291,
          "drug_id": 291,
          "created_at": "2020-05-06 23:07:11",
          "updated_at": "2020-05-06 23:07:11"
      },
      {
          "id": 292,
          "category_id": 292,
          "drug_id": 292,
          "created_at": "2020-05-06 23:08:26",
          "updated_at": "2020-05-06 23:08:26"
      },
      {
          "id": 293,
          "category_id": 293,
          "drug_id": 293,
          "created_at": "2020-05-06 23:09:32",
          "updated_at": "2020-05-06 23:09:32"
      },
      {
          "id": 294,
          "category_id": 294,
          "drug_id": 294,
          "created_at": "2020-05-06 23:10:03",
          "updated_at": "2020-05-06 23:10:03"
      },
      {
          "id": 295,
          "category_id": 295,
          "drug_id": 295,
          "created_at": "2020-05-06 23:11:18",
          "updated_at": "2020-05-06 23:11:18"
      },
      {
          "id": 296,
          "category_id": 296,
          "drug_id": 296,
          "created_at": "2020-05-06 23:11:55",
          "updated_at": "2020-05-06 23:11:55"
      },
      {
          "id": 297,
          "category_id": 297,
          "drug_id": 297,
          "created_at": "2020-05-06 23:13:27",
          "updated_at": "2020-05-06 23:13:27"
      },
      {
          "id": 298,
          "category_id": 298,
          "drug_id": 298,
          "created_at": "2020-05-06 23:15:23",
          "updated_at": "2020-05-06 23:15:23"
      },
      {
          "id": 299,
          "category_id": 299,
          "drug_id": 299,
          "created_at": "2020-05-06 23:17:07",
          "updated_at": "2020-05-06 23:17:07"
      },
      {
          "id": 300,
          "category_id": 300,
          "drug_id": 300,
          "created_at": "2020-05-06 23:18:11",
          "updated_at": "2020-05-06 23:18:11"
      },
      {
          "id": 301,
          "category_id": 301,
          "drug_id": 301,
          "created_at": "2020-05-06 23:19:09",
          "updated_at": "2020-05-06 23:19:09"
      },
      {
          "id": 302,
          "category_id": 302,
          "drug_id": 302,
          "created_at": "2020-05-06 23:19:46",
          "updated_at": "2020-05-06 23:19:46"
      },
      {
          "id": 303,
          "category_id": 303,
          "drug_id": 303,
          "created_at": "2020-05-06 23:22:18",
          "updated_at": "2020-05-06 23:22:18"
      },
      {
          "id": 304,
          "category_id": 304,
          "drug_id": 304,
          "created_at": "2020-05-06 23:24:06",
          "updated_at": "2020-05-06 23:24:06"
      },
      {
          "id": 305,
          "category_id": 305,
          "drug_id": 305,
          "created_at": "2020-05-06 23:24:46",
          "updated_at": "2020-05-06 23:24:46"
      },
      {
          "id": 306,
          "category_id": 306,
          "drug_id": 306,
          "created_at": "2020-05-06 23:26:12",
          "updated_at": "2020-05-06 23:26:12"
      },
      {
          "id": 307,
          "category_id": 307,
          "drug_id": 307,
          "created_at": "2020-05-06 23:28:03",
          "updated_at": "2020-05-06 23:28:03"
      },
      {
          "id": 308,
          "category_id": 308,
          "drug_id": 308,
          "created_at": "2020-05-06 23:31:22",
          "updated_at": "2020-05-06 23:31:22"
      },
      {
          "id": 309,
          "category_id": 309,
          "drug_id": 309,
          "created_at": "2020-05-06 23:31:47",
          "updated_at": "2020-05-06 23:31:47"
      },
      {
          "id": 310,
          "category_id": 310,
          "drug_id": 310,
          "created_at": "2020-05-06 23:32:39",
          "updated_at": "2020-05-06 23:32:39"
      },
      {
          "id": 311,
          "category_id": 311,
          "drug_id": 311,
          "created_at": "2020-05-06 23:34:58",
          "updated_at": "2020-05-06 23:34:58"
      },
      {
          "id": 312,
          "category_id": 312,
          "drug_id": 312,
          "created_at": "2020-05-06 23:35:47",
          "updated_at": "2020-05-06 23:35:47"
      },
      {
          "id": 313,
          "category_id": 313,
          "drug_id": 313,
          "created_at": "2020-05-06 23:38:24",
          "updated_at": "2020-05-06 23:38:24"
      },
      {
          "id": 314,
          "category_id": 314,
          "drug_id": 314,
          "created_at": "2020-05-06 23:39:04",
          "updated_at": "2020-05-06 23:39:04"
      },
      {
          "id": 315,
          "category_id": 315,
          "drug_id": 315,
          "created_at": "2020-05-06 23:40:34",
          "updated_at": "2020-05-06 23:40:34"
      },
      {
          "id": 316,
          "category_id": 316,
          "drug_id": 316,
          "created_at": "2020-05-06 23:42:25",
          "updated_at": "2020-05-06 23:42:25"
      },
      {
          "id": 317,
          "category_id": 317,
          "drug_id": 317,
          "created_at": "2020-05-06 23:44:50",
          "updated_at": "2020-05-06 23:44:50"
      },
      {
          "id": 318,
          "category_id": 318,
          "drug_id": 318,
          "created_at": "2020-05-06 23:45:26",
          "updated_at": "2020-05-06 23:45:26"
      },
      {
          "id": 319,
          "category_id": 319,
          "drug_id": 319,
          "created_at": "2020-05-06 23:47:01",
          "updated_at": "2020-05-06 23:47:01"
      },
      {
          "id": 320,
          "category_id": 320,
          "drug_id": 320,
          "created_at": "2020-05-06 23:48:19",
          "updated_at": "2020-05-06 23:48:19"
      },
      {
          "id": 321,
          "category_id": 321,
          "drug_id": 321,
          "created_at": "2020-05-06 23:48:56",
          "updated_at": "2020-05-06 23:48:56"
      },
      {
          "id": 322,
          "category_id": 322,
          "drug_id": 322,
          "created_at": "2020-05-06 23:50:55",
          "updated_at": "2020-05-06 23:50:55"
      },
      {
          "id": 323,
          "category_id": 323,
          "drug_id": 323,
          "created_at": "2020-05-06 23:52:47",
          "updated_at": "2020-05-06 23:52:47"
      },
      {
          "id": 324,
          "category_id": 324,
          "drug_id": 324,
          "created_at": "2020-05-06 23:53:53",
          "updated_at": "2020-05-06 23:53:53"
      },
      {
          "id": 325,
          "category_id": 325,
          "drug_id": 325,
          "created_at": "2020-05-06 23:54:33",
          "updated_at": "2020-05-06 23:54:33"
      },
      {
          "id": 326,
          "category_id": 326,
          "drug_id": 326,
          "created_at": "2020-05-06 23:55:39",
          "updated_at": "2020-05-06 23:55:39"
      },
      {
          "id": 327,
          "category_id": 327,
          "drug_id": 327,
          "created_at": "2020-05-06 23:56:49",
          "updated_at": "2020-05-06 23:56:49"
      },
      {
          "id": 328,
          "category_id": 328,
          "drug_id": 328,
          "created_at": "2020-05-06 23:57:30",
          "updated_at": "2020-05-06 23:57:30"
      },
      {
          "id": 329,
          "category_id": 329,
          "drug_id": 329,
          "created_at": "2020-05-06 23:58:09",
          "updated_at": "2020-05-06 23:58:09"
      },
      {
          "id": 330,
          "category_id": 330,
          "drug_id": 330,
          "created_at": "2020-05-06 23:59:17",
          "updated_at": "2020-05-06 23:59:17"
      },
      {
          "id": 331,
          "category_id": 331,
          "drug_id": 331,
          "created_at": "2020-05-07 00:00:17",
          "updated_at": "2020-05-07 00:00:17"
      },
      {
          "id": 332,
          "category_id": 332,
          "drug_id": 332,
          "created_at": "2020-05-07 00:01:16",
          "updated_at": "2020-05-07 00:01:16"
      },
      {
          "id": 333,
          "category_id": 333,
          "drug_id": 333,
          "created_at": "2020-05-07 00:02:12",
          "updated_at": "2020-05-07 00:02:12"
      },
      {
          "id": 334,
          "category_id": 334,
          "drug_id": 334,
          "created_at": "2020-05-07 00:02:42",
          "updated_at": "2020-05-07 00:02:42"
      },
      {
          "id": 335,
          "category_id": 335,
          "drug_id": 335,
          "created_at": "2020-05-07 00:04:36",
          "updated_at": "2020-05-07 00:04:36"
      },
      {
          "id": 336,
          "category_id": 336,
          "drug_id": 336,
          "created_at": "2020-05-07 00:05:41",
          "updated_at": "2020-05-07 00:05:41"
      },
      {
          "id": 337,
          "category_id": 337,
          "drug_id": 337,
          "created_at": "2020-05-07 00:06:55",
          "updated_at": "2020-05-07 00:06:55"
      },
      {
          "id": 338,
          "category_id": 338,
          "drug_id": 338,
          "created_at": "2020-05-07 00:07:57",
          "updated_at": "2020-05-07 00:07:57"
      },
      {
          "id": 339,
          "category_id": 339,
          "drug_id": 339,
          "created_at": "2020-05-07 00:08:28",
          "updated_at": "2020-05-07 00:08:28"
      },
      {
          "id": 340,
          "category_id": 340,
          "drug_id": 340,
          "created_at": "2020-05-07 00:09:04",
          "updated_at": "2020-05-07 00:09:04"
      },
      {
          "id": 341,
          "category_id": 341,
          "drug_id": 341,
          "created_at": "2020-05-07 00:09:41",
          "updated_at": "2020-05-07 00:09:41"
      },
      {
          "id": 342,
          "category_id": 342,
          "drug_id": 342,
          "created_at": "2020-05-07 00:11:33",
          "updated_at": "2020-05-07 00:11:33"
      },
      {
          "id": 343,
          "category_id": 343,
          "drug_id": 343,
          "created_at": "2020-05-07 00:12:46",
          "updated_at": "2020-05-07 00:12:46"
      },
      {
          "id": 344,
          "category_id": 344,
          "drug_id": 344,
          "created_at": "2020-05-07 00:14:01",
          "updated_at": "2020-05-07 00:14:01"
      },
      {
          "id": 345,
          "category_id": 345,
          "drug_id": 345,
          "created_at": "2020-05-07 00:14:28",
          "updated_at": "2020-05-07 00:14:28"
      },
      {
          "id": 346,
          "category_id": 346,
          "drug_id": 346,
          "created_at": "2020-05-07 00:15:20",
          "updated_at": "2020-05-07 00:15:20"
      },
      {
          "id": 347,
          "category_id": 347,
          "drug_id": 347,
          "created_at": "2020-05-07 00:17:14",
          "updated_at": "2020-05-07 00:17:14"
      },
      {
          "id": 348,
          "category_id": 348,
          "drug_id": 348,
          "created_at": "2020-05-07 00:17:55",
          "updated_at": "2020-05-07 00:17:55"
      },
      {
          "id": 349,
          "category_id": 349,
          "drug_id": 349,
          "created_at": "2020-05-07 00:19:07",
          "updated_at": "2020-05-07 00:19:07"
      },
      {
          "id": 350,
          "category_id": 350,
          "drug_id": 350,
          "created_at": "2020-05-07 00:19:42",
          "updated_at": "2020-05-07 00:19:42"
      },
      {
          "id": 351,
          "category_id": 351,
          "drug_id": 351,
          "created_at": "2020-05-07 00:20:48",
          "updated_at": "2020-05-07 00:20:48"
      },
      {
          "id": 352,
          "category_id": 352,
          "drug_id": 352,
          "created_at": "2020-05-07 00:22:33",
          "updated_at": "2020-05-07 00:22:33"
      },
      {
          "id": 353,
          "category_id": 353,
          "drug_id": 353,
          "created_at": "2020-05-07 00:24:11",
          "updated_at": "2020-05-07 00:24:11"
      },
      {
          "id": 354,
          "category_id": 354,
          "drug_id": 354,
          "created_at": "2020-05-07 00:26:21",
          "updated_at": "2020-05-07 00:26:21"
      },
      {
          "id": 355,
          "category_id": 355,
          "drug_id": 355,
          "created_at": "2020-05-07 00:27:05",
          "updated_at": "2020-05-07 00:27:05"
      },
      {
          "id": 356,
          "category_id": 356,
          "drug_id": 356,
          "created_at": "2020-05-07 00:27:55",
          "updated_at": "2020-05-07 00:27:55"
      },
      {
          "id": 357,
          "category_id": 357,
          "drug_id": 357,
          "created_at": "2020-05-07 00:30:28",
          "updated_at": "2020-05-07 00:30:28"
      },
      {
          "id": 358,
          "category_id": 358,
          "drug_id": 358,
          "created_at": "2020-05-07 00:31:43",
          "updated_at": "2020-05-07 00:31:43"
      },
      {
          "id": 359,
          "category_id": 359,
          "drug_id": 359,
          "created_at": "2020-05-07 00:32:21",
          "updated_at": "2020-05-07 00:32:21"
      },
      {
          "id": 360,
          "category_id": 360,
          "drug_id": 360,
          "created_at": "2020-05-07 00:33:09",
          "updated_at": "2020-05-07 00:33:09"
      },
      {
          "id": 361,
          "category_id": 361,
          "drug_id": 361,
          "created_at": "2020-05-07 00:34:39",
          "updated_at": "2020-05-07 00:34:39"
      },
      {
          "id": 363,
          "category_id": 363,
          "drug_id": 363,
          "created_at": "2020-05-07 00:37:16",
          "updated_at": "2020-05-07 00:37:16"
      },
      {
          "id": 364,
          "category_id": 364,
          "drug_id": 364,
          "created_at": "2020-05-07 00:37:44",
          "updated_at": "2020-05-07 00:37:44"
      },
      {
          "id": 365,
          "category_id": 365,
          "drug_id": 365,
          "created_at": "2020-05-07 00:38:14",
          "updated_at": "2020-05-07 00:38:14"
      },
      {
          "id": 366,
          "category_id": 366,
          "drug_id": 366,
          "created_at": "2020-05-07 00:40:37",
          "updated_at": "2020-05-07 00:40:37"
      },
      {
          "id": 367,
          "category_id": 367,
          "drug_id": 367,
          "created_at": "2020-05-07 00:43:55",
          "updated_at": "2020-05-07 00:43:55"
      },
      {
          "id": 368,
          "category_id": 368,
          "drug_id": 368,
          "created_at": "2020-05-07 00:44:55",
          "updated_at": "2020-05-07 00:44:55"
      },
      {
          "id": 369,
          "category_id": 369,
          "drug_id": 369,
          "created_at": "2020-05-07 00:45:57",
          "updated_at": "2020-05-07 00:45:57"
      },
      {
          "id": 370,
          "category_id": 370,
          "drug_id": 370,
          "created_at": "2020-05-07 00:46:50",
          "updated_at": "2020-05-07 00:46:50"
      },
      {
          "id": 371,
          "category_id": 371,
          "drug_id": 371,
          "created_at": "2020-05-07 00:47:55",
          "updated_at": "2020-05-07 00:47:55"
      },
      {
          "id": 372,
          "category_id": 372,
          "drug_id": 372,
          "created_at": "2020-05-07 00:48:47",
          "updated_at": "2020-05-07 00:48:47"
      },
      {
          "id": 373,
          "category_id": 373,
          "drug_id": 373,
          "created_at": "2020-05-07 00:49:40",
          "updated_at": "2020-05-07 00:49:40"
      },
      {
          "id": 374,
          "category_id": 374,
          "drug_id": 374,
          "created_at": "2020-05-07 00:51:50",
          "updated_at": "2020-05-07 00:51:50"
      },
      {
          "id": 375,
          "category_id": 375,
          "drug_id": 375,
          "created_at": "2020-05-07 00:53:16",
          "updated_at": "2020-05-07 00:53:16"
      },
      {
          "id": 376,
          "category_id": 376,
          "drug_id": 376,
          "created_at": "2020-05-07 00:57:00",
          "updated_at": "2020-05-07 00:57:00"
      },
      {
          "id": 377,
          "category_id": 377,
          "drug_id": 377,
          "created_at": "2020-05-07 00:58:10",
          "updated_at": "2020-05-07 00:58:10"
      },
      {
          "id": 378,
          "category_id": 378,
          "drug_id": 378,
          "created_at": "2020-05-07 00:58:50",
          "updated_at": "2020-05-07 00:58:50"
      },
      {
          "id": 379,
          "category_id": 379,
          "drug_id": 379,
          "created_at": "2020-05-07 01:00:31",
          "updated_at": "2020-05-07 01:00:31"
      },
      {
          "id": 380,
          "category_id": 380,
          "drug_id": 380,
          "created_at": "2020-05-07 01:01:24",
          "updated_at": "2020-05-07 01:01:24"
      },
      {
          "id": 381,
          "category_id": 381,
          "drug_id": 381,
          "created_at": "2020-05-07 01:02:24",
          "updated_at": "2020-05-07 01:02:24"
      },
      {
          "id": 382,
          "category_id": 382,
          "drug_id": 382,
          "created_at": "2020-05-07 01:03:05",
          "updated_at": "2020-05-07 01:03:05"
      },
      {
          "id": 383,
          "category_id": 383,
          "drug_id": 383,
          "created_at": "2020-05-07 01:05:48",
          "updated_at": "2020-05-07 01:05:48"
      },
      {
          "id": 384,
          "category_id": 384,
          "drug_id": 384,
          "created_at": "2020-05-07 01:07:32",
          "updated_at": "2020-05-07 01:07:32"
      },
      {
          "id": 385,
          "category_id": 385,
          "drug_id": 385,
          "created_at": "2020-05-07 01:08:27",
          "updated_at": "2020-05-07 01:08:27"
      },
      {
          "id": 386,
          "category_id": 386,
          "drug_id": 386,
          "created_at": "2020-05-07 01:09:34",
          "updated_at": "2020-05-07 01:09:34"
      },
      {
          "id": 387,
          "category_id": 387,
          "drug_id": 387,
          "created_at": "2020-05-07 01:11:42",
          "updated_at": "2020-05-07 01:11:42"
      },
      {
          "id": 388,
          "category_id": 388,
          "drug_id": 388,
          "created_at": "2020-05-07 01:12:53",
          "updated_at": "2020-05-07 01:12:53"
      },
      {
          "id": 389,
          "category_id": 389,
          "drug_id": 389,
          "created_at": "2020-05-07 01:13:48",
          "updated_at": "2020-05-07 01:13:48"
      },
      {
          "id": 390,
          "category_id": 390,
          "drug_id": 390,
          "created_at": "2020-05-07 01:15:08",
          "updated_at": "2020-05-07 01:15:08"
      },
      {
          "id": 391,
          "category_id": 391,
          "drug_id": 391,
          "created_at": "2020-05-07 01:16:14",
          "updated_at": "2020-05-07 01:16:14"
      },
      {
          "id": 392,
          "category_id": 392,
          "drug_id": 392,
          "created_at": "2020-05-07 01:17:37",
          "updated_at": "2020-05-07 01:17:37"
      },
      {
          "id": 393,
          "category_id": 393,
          "drug_id": 393,
          "created_at": "2020-05-07 01:18:31",
          "updated_at": "2020-05-07 01:18:31"
      },
      {
          "id": 394,
          "category_id": 394,
          "drug_id": 394,
          "created_at": "2020-05-07 01:19:38",
          "updated_at": "2020-05-07 01:19:38"
      },
      {
          "id": 395,
          "category_id": 395,
          "drug_id": 395,
          "created_at": "2020-05-07 01:20:18",
          "updated_at": "2020-05-07 01:20:18"
      },
      {
          "id": 396,
          "category_id": 396,
          "drug_id": 396,
          "created_at": "2020-05-07 01:21:15",
          "updated_at": "2020-05-07 01:21:15"
      },
      {
          "id": 397,
          "category_id": 397,
          "drug_id": 397,
          "created_at": "2020-05-07 01:21:55",
          "updated_at": "2020-05-07 01:21:55"
      },
      {
          "id": 398,
          "category_id": 398,
          "drug_id": 398,
          "created_at": "2020-05-07 01:24:27",
          "updated_at": "2020-05-07 01:24:27"
      },
      {
          "id": 399,
          "category_id": 399,
          "drug_id": 399,
          "created_at": "2020-05-07 01:25:50",
          "updated_at": "2020-05-07 01:25:50"
      },
      {
          "id": 400,
          "category_id": 400,
          "drug_id": 400,
          "created_at": "2020-05-07 01:27:01",
          "updated_at": "2020-05-07 01:27:01"
      },
      {
          "id": 401,
          "category_id": 401,
          "drug_id": 401,
          "created_at": "2020-05-07 01:28:31",
          "updated_at": "2020-05-07 01:28:31"
      },
      {
          "id": 402,
          "category_id": 402,
          "drug_id": 402,
          "created_at": "2020-05-07 01:30:04",
          "updated_at": "2020-05-07 01:30:04"
      },
      {
          "id": 403,
          "category_id": 403,
          "drug_id": 403,
          "created_at": "2020-05-07 01:31:20",
          "updated_at": "2020-05-07 01:31:20"
      },
      {
          "id": 404,
          "category_id": 404,
          "drug_id": 404,
          "created_at": "2020-05-07 01:32:02",
          "updated_at": "2020-05-07 01:32:02"
      },
      {
          "id": 405,
          "category_id": 405,
          "drug_id": 405,
          "created_at": "2020-05-07 01:33:18",
          "updated_at": "2020-05-07 01:33:18"
      },
      {
          "id": 406,
          "category_id": 406,
          "drug_id": 406,
          "created_at": "2020-05-07 01:33:54",
          "updated_at": "2020-05-07 01:33:54"
      },
      {
          "id": 407,
          "category_id": 407,
          "drug_id": 407,
          "created_at": "2020-05-07 01:34:24",
          "updated_at": "2020-05-07 01:34:24"
      },
      {
          "id": 408,
          "category_id": 408,
          "drug_id": 408,
          "created_at": "2020-05-07 01:35:11",
          "updated_at": "2020-05-07 01:35:11"
      },
      {
          "id": 409,
          "category_id": 409,
          "drug_id": 409,
          "created_at": "2020-05-07 01:35:59",
          "updated_at": "2020-05-07 01:35:59"
      },
      {
          "id": 410,
          "category_id": 410,
          "drug_id": 410,
          "created_at": "2020-05-07 01:36:42",
          "updated_at": "2020-05-07 01:36:42"
      },
      {
          "id": 411,
          "category_id": 411,
          "drug_id": 411,
          "created_at": "2020-05-07 01:38:28",
          "updated_at": "2020-05-07 01:38:28"
      },
      {
          "id": 412,
          "category_id": 412,
          "drug_id": 412,
          "created_at": "2020-05-07 01:40:54",
          "updated_at": "2020-05-07 01:40:54"
      },
      {
          "id": 413,
          "category_id": 413,
          "drug_id": 413,
          "created_at": "2020-05-07 01:41:46",
          "updated_at": "2020-05-07 01:41:46"
      },
      {
          "id": 414,
          "category_id": 414,
          "drug_id": 414,
          "created_at": "2020-05-07 01:42:29",
          "updated_at": "2020-05-07 01:42:29"
      },
      {
          "id": 415,
          "category_id": 415,
          "drug_id": 415,
          "created_at": "2020-05-07 01:43:49",
          "updated_at": "2020-05-07 01:43:49"
      },
      {
          "id": 416,
          "category_id": 416,
          "drug_id": 416,
          "created_at": "2020-05-07 01:46:06",
          "updated_at": "2020-05-07 01:46:06"
      },
      {
          "id": 417,
          "category_id": 417,
          "drug_id": 417,
          "created_at": "2020-05-07 01:46:37",
          "updated_at": "2020-05-07 01:46:37"
      },
      {
          "id": 418,
          "category_id": 418,
          "drug_id": 418,
          "created_at": "2020-05-07 01:47:26",
          "updated_at": "2020-05-07 01:47:26"
      },
      {
          "id": 419,
          "category_id": 419,
          "drug_id": 419,
          "created_at": "2020-05-07 01:48:22",
          "updated_at": "2020-05-07 01:48:22"
      },
      {
          "id": 420,
          "category_id": 420,
          "drug_id": 420,
          "created_at": "2020-05-07 01:50:03",
          "updated_at": "2020-05-07 01:50:03"
      },
      {
          "id": 421,
          "category_id": 421,
          "drug_id": 421,
          "created_at": "2020-05-07 01:51:38",
          "updated_at": "2020-05-07 01:51:38"
      },
      {
          "id": 422,
          "category_id": 422,
          "drug_id": 422,
          "created_at": "2020-05-07 01:53:27",
          "updated_at": "2020-05-07 01:53:27"
      },
      {
          "id": 423,
          "category_id": 423,
          "drug_id": 423,
          "created_at": "2020-05-07 01:54:56",
          "updated_at": "2020-05-07 01:54:56"
      },
      {
          "id": 424,
          "category_id": 424,
          "drug_id": 424,
          "created_at": "2020-05-07 01:57:02",
          "updated_at": "2020-05-07 01:57:02"
      },
      {
          "id": 425,
          "category_id": 425,
          "drug_id": 425,
          "created_at": "2020-05-07 01:58:22",
          "updated_at": "2020-05-07 01:58:22"
      },
      {
          "id": 426,
          "category_id": 426,
          "drug_id": 426,
          "created_at": "2020-05-07 01:59:18",
          "updated_at": "2020-05-07 01:59:18"
      },
      {
          "id": 427,
          "category_id": 427,
          "drug_id": 427,
          "created_at": "2020-05-07 02:00:39",
          "updated_at": "2020-05-07 02:00:39"
      },
      {
          "id": 428,
          "category_id": 428,
          "drug_id": 428,
          "created_at": "2020-05-07 02:01:37",
          "updated_at": "2020-05-07 02:01:37"
      },
      {
          "id": 429,
          "category_id": 429,
          "drug_id": 429,
          "created_at": "2020-05-07 02:02:33",
          "updated_at": "2020-05-07 02:02:33"
      },
      {
          "id": 430,
          "category_id": 430,
          "drug_id": 430,
          "created_at": "2020-05-07 02:03:07",
          "updated_at": "2020-05-07 02:03:07"
      },
      {
          "id": 431,
          "category_id": 431,
          "drug_id": 431,
          "created_at": "2020-05-07 02:04:50",
          "updated_at": "2020-05-07 02:04:50"
      },
      {
          "id": 432,
          "category_id": 432,
          "drug_id": 432,
          "created_at": "2020-05-07 02:05:06",
          "updated_at": "2020-05-07 02:05:06"
      },
      {
          "id": 433,
          "category_id": 433,
          "drug_id": 433,
          "created_at": "2020-05-07 02:06:23",
          "updated_at": "2020-05-07 02:06:23"
      },
      {
          "id": 434,
          "category_id": 434,
          "drug_id": 434,
          "created_at": "2020-05-07 02:07:03",
          "updated_at": "2020-05-07 02:07:03"
      },
      {
          "id": 435,
          "category_id": 435,
          "drug_id": 435,
          "created_at": "2020-05-07 02:07:57",
          "updated_at": "2020-05-07 02:07:57"
      },
      {
          "id": 436,
          "category_id": 436,
          "drug_id": 436,
          "created_at": "2020-05-07 02:09:12",
          "updated_at": "2020-05-07 02:09:12"
      },
      {
          "id": 437,
          "category_id": 437,
          "drug_id": 437,
          "created_at": "2020-05-07 02:09:58",
          "updated_at": "2020-05-07 02:09:58"
      },
      {
          "id": 438,
          "category_id": 438,
          "drug_id": 438,
          "created_at": "2020-05-07 02:10:57",
          "updated_at": "2020-05-07 02:10:57"
      },
      {
          "id": 439,
          "category_id": 439,
          "drug_id": 439,
          "created_at": "2020-05-07 02:14:22",
          "updated_at": "2020-05-07 02:14:22"
      },
      {
          "id": 440,
          "category_id": 440,
          "drug_id": 440,
          "created_at": "2020-05-07 02:15:08",
          "updated_at": "2020-05-07 02:15:08"
      },
      {
          "id": 441,
          "category_id": 441,
          "drug_id": 441,
          "created_at": "2020-05-07 02:16:25",
          "updated_at": "2020-05-07 02:16:25"
      },
      {
          "id": 442,
          "category_id": 442,
          "drug_id": 442,
          "created_at": "2020-05-07 02:18:12",
          "updated_at": "2020-05-07 02:18:12"
      },
      {
          "id": 443,
          "category_id": 443,
          "drug_id": 443,
          "created_at": "2020-05-07 02:19:30",
          "updated_at": "2020-05-07 02:19:30"
      },
      {
          "id": 444,
          "category_id": 444,
          "drug_id": 444,
          "created_at": "2020-05-07 02:21:28",
          "updated_at": "2020-05-07 02:21:28"
      },
      {
          "id": 445,
          "category_id": 445,
          "drug_id": 445,
          "created_at": "2020-05-07 02:21:47",
          "updated_at": "2020-05-07 02:21:47"
      },
      {
          "id": 446,
          "category_id": 446,
          "drug_id": 446,
          "created_at": "2020-05-07 02:22:50",
          "updated_at": "2020-05-07 02:22:50"
      },
      {
          "id": 447,
          "category_id": 447,
          "drug_id": 447,
          "created_at": "2020-05-07 02:23:49",
          "updated_at": "2020-05-07 02:23:49"
      },
      {
          "id": 448,
          "category_id": 448,
          "drug_id": 448,
          "created_at": "2020-05-07 02:25:45",
          "updated_at": "2020-05-07 02:25:45"
      },
      {
          "id": 449,
          "category_id": 449,
          "drug_id": 449,
          "created_at": "2020-05-07 02:26:59",
          "updated_at": "2020-05-07 02:26:59"
      },
      {
          "id": 450,
          "category_id": 450,
          "drug_id": 450,
          "created_at": "2020-05-07 02:29:03",
          "updated_at": "2020-05-07 02:29:03"
      },
      {
          "id": 451,
          "category_id": 451,
          "drug_id": 451,
          "created_at": "2020-05-07 02:30:40",
          "updated_at": "2020-05-07 02:30:40"
      },
      {
          "id": 452,
          "category_id": 452,
          "drug_id": 452,
          "created_at": "2020-05-07 02:32:15",
          "updated_at": "2020-05-07 02:32:15"
      },
      {
          "id": 453,
          "category_id": 453,
          "drug_id": 453,
          "created_at": "2020-05-07 02:33:00",
          "updated_at": "2020-05-07 02:33:00"
      },
      {
          "id": 454,
          "category_id": 454,
          "drug_id": 454,
          "created_at": "2020-05-07 02:33:56",
          "updated_at": "2020-05-07 02:33:56"
      },
      {
          "id": 455,
          "category_id": 455,
          "drug_id": 455,
          "created_at": "2020-05-07 02:35:56",
          "updated_at": "2020-05-07 02:35:56"
      },
      {
          "id": 456,
          "category_id": 456,
          "drug_id": 456,
          "created_at": "2020-05-07 02:36:56",
          "updated_at": "2020-05-07 02:36:56"
      },
      {
          "id": 457,
          "category_id": 457,
          "drug_id": 457,
          "created_at": "2020-05-07 02:37:38",
          "updated_at": "2020-05-07 02:37:38"
      },
      {
          "id": 458,
          "category_id": 458,
          "drug_id": 458,
          "created_at": "2020-05-07 02:38:27",
          "updated_at": "2020-05-07 02:38:27"
      },
      {
          "id": 459,
          "category_id": 459,
          "drug_id": 459,
          "created_at": "2020-05-07 02:39:07",
          "updated_at": "2020-05-07 02:39:07"
      },
      {
          "id": 460,
          "category_id": 460,
          "drug_id": 460,
          "created_at": "2020-05-07 02:39:45",
          "updated_at": "2020-05-07 02:39:45"
      },
      {
          "id": 461,
          "category_id": 461,
          "drug_id": 461,
          "created_at": "2020-05-07 02:40:30",
          "updated_at": "2020-05-07 02:40:30"
      },
      {
          "id": 462,
          "category_id": 462,
          "drug_id": 462,
          "created_at": "2020-05-07 02:41:00",
          "updated_at": "2020-05-07 02:41:00"
      },
      {
          "id": 463,
          "category_id": 463,
          "drug_id": 463,
          "created_at": "2020-05-07 02:41:44",
          "updated_at": "2020-05-07 02:41:44"
      },
      {
          "id": 464,
          "category_id": 464,
          "drug_id": 464,
          "created_at": "2020-05-07 02:42:07",
          "updated_at": "2020-05-07 02:42:07"
      },
      {
          "id": 465,
          "category_id": 465,
          "drug_id": 465,
          "created_at": "2020-05-07 02:43:48",
          "updated_at": "2020-05-07 02:43:48"
      },
      {
          "id": 466,
          "category_id": 466,
          "drug_id": 466,
          "created_at": "2020-05-07 02:45:01",
          "updated_at": "2020-05-07 02:45:01"
      },
      {
          "id": 467,
          "category_id": 467,
          "drug_id": 467,
          "created_at": "2020-05-07 02:45:57",
          "updated_at": "2020-05-07 02:45:57"
      },
      {
          "id": 468,
          "category_id": 468,
          "drug_id": 468,
          "created_at": "2020-05-07 02:46:39",
          "updated_at": "2020-05-07 02:46:39"
      },
      {
          "id": 469,
          "category_id": 469,
          "drug_id": 469,
          "created_at": "2020-05-07 02:47:47",
          "updated_at": "2020-05-07 02:47:47"
      },
      {
          "id": 470,
          "category_id": 470,
          "drug_id": 470,
          "created_at": "2020-05-07 02:48:13",
          "updated_at": "2020-05-07 02:48:13"
      },
      {
          "id": 471,
          "category_id": 471,
          "drug_id": 471,
          "created_at": "2020-05-07 02:49:11",
          "updated_at": "2020-05-07 02:49:11"
      },
      {
          "id": 472,
          "category_id": 472,
          "drug_id": 472,
          "created_at": "2020-05-07 02:49:43",
          "updated_at": "2020-05-07 02:49:43"
      },
      {
          "id": 473,
          "category_id": 473,
          "drug_id": 473,
          "created_at": "2020-05-07 02:50:38",
          "updated_at": "2020-05-07 02:50:38"
      },
      {
          "id": 474,
          "category_id": 474,
          "drug_id": 474,
          "created_at": "2020-05-07 02:52:10",
          "updated_at": "2020-05-07 02:52:10"
      },
      {
          "id": 475,
          "category_id": 475,
          "drug_id": 475,
          "created_at": "2020-05-07 02:55:06",
          "updated_at": "2020-05-07 02:55:06"
      },
      {
          "id": 476,
          "category_id": 476,
          "drug_id": 476,
          "created_at": "2020-05-07 02:56:11",
          "updated_at": "2020-05-07 02:56:11"
      },
      {
          "id": 477,
          "category_id": 477,
          "drug_id": 477,
          "created_at": "2020-05-07 02:56:58",
          "updated_at": "2020-05-07 02:56:58"
      },
      {
          "id": 478,
          "category_id": 478,
          "drug_id": 478,
          "created_at": "2020-05-07 02:57:44",
          "updated_at": "2020-05-07 02:57:44"
      },
      {
          "id": 479,
          "category_id": 479,
          "drug_id": 479,
          "created_at": "2020-05-07 02:58:26",
          "updated_at": "2020-05-07 02:58:26"
      },
      {
          "id": 480,
          "category_id": 480,
          "drug_id": 480,
          "created_at": "2020-05-07 02:59:21",
          "updated_at": "2020-05-07 02:59:21"
      },
      {
          "id": 481,
          "category_id": 481,
          "drug_id": 481,
          "created_at": "2020-05-07 03:00:24",
          "updated_at": "2020-05-07 03:00:24"
      },
      {
          "id": 482,
          "category_id": 482,
          "drug_id": 482,
          "created_at": "2020-05-07 03:00:58",
          "updated_at": "2020-05-07 03:00:58"
      },
      {
          "id": 483,
          "category_id": 483,
          "drug_id": 483,
          "created_at": "2020-05-07 03:02:14",
          "updated_at": "2020-05-07 03:02:14"
      },
      {
          "id": 484,
          "category_id": 484,
          "drug_id": 484,
          "created_at": "2020-05-07 03:03:20",
          "updated_at": "2020-05-07 03:03:20"
      },
      {
          "id": 485,
          "category_id": 485,
          "drug_id": 485,
          "created_at": "2020-05-07 03:03:52",
          "updated_at": "2020-05-07 03:03:52"
      },
      {
          "id": 486,
          "category_id": 486,
          "drug_id": 486,
          "created_at": "2020-05-07 03:04:16",
          "updated_at": "2020-05-07 03:04:16"
      },
      {
          "id": 487,
          "category_id": 487,
          "drug_id": 487,
          "created_at": "2020-05-07 03:04:51",
          "updated_at": "2020-05-07 03:04:51"
      },
      {
          "id": 488,
          "category_id": 488,
          "drug_id": 488,
          "created_at": "2020-05-07 03:05:32",
          "updated_at": "2020-05-07 03:05:32"
      },
      {
          "id": 489,
          "category_id": 489,
          "drug_id": 489,
          "created_at": "2020-05-07 03:06:09",
          "updated_at": "2020-05-07 03:06:09"
      },
      {
          "id": 490,
          "category_id": 490,
          "drug_id": 490,
          "created_at": "2020-05-07 03:07:26",
          "updated_at": "2020-05-07 03:07:26"
      },
      {
          "id": 491,
          "category_id": 491,
          "drug_id": 491,
          "created_at": "2020-05-07 03:09:07",
          "updated_at": "2020-05-07 03:09:07"
      },
      {
          "id": 492,
          "category_id": 492,
          "drug_id": 492,
          "created_at": "2020-05-07 03:10:22",
          "updated_at": "2020-05-07 03:10:22"
      },
      {
          "id": 495,
          "category_id": 495,
          "drug_id": 495,
          "created_at": "2020-05-07 03:14:35",
          "updated_at": "2020-05-07 03:14:35"
      },
      {
          "id": 496,
          "category_id": 496,
          "drug_id": 496,
          "created_at": "2020-05-07 03:15:16",
          "updated_at": "2020-05-07 03:15:16"
      },
      {
          "id": 497,
          "category_id": 497,
          "drug_id": 497,
          "created_at": "2020-05-07 03:16:16",
          "updated_at": "2020-05-07 03:16:16"
      },
      {
          "id": 498,
          "category_id": 498,
          "drug_id": 498,
          "created_at": "2020-05-07 03:19:46",
          "updated_at": "2020-05-07 03:19:46"
      },
      {
          "id": 499,
          "category_id": 499,
          "drug_id": 499,
          "created_at": "2020-05-07 03:20:55",
          "updated_at": "2020-05-07 03:20:55"
      },
      {
          "id": 500,
          "category_id": 500,
          "drug_id": 500,
          "created_at": "2020-05-07 03:22:57",
          "updated_at": "2020-05-07 03:22:57"
      },
      {
          "id": 501,
          "category_id": 501,
          "drug_id": 501,
          "created_at": "2020-05-07 03:23:56",
          "updated_at": "2020-05-07 03:23:56"
      },
      {
          "id": 502,
          "category_id": 502,
          "drug_id": 502,
          "created_at": "2020-05-07 03:24:22",
          "updated_at": "2020-05-07 03:24:22"
      },
      {
          "id": 503,
          "category_id": 520,
          "drug_id": 503,
          "created_at": "2020-10-30 19:33:08",
          "updated_at": "2020-10-30 19:33:08"
      },
      {
          "id": 504,
          "category_id": 9,
          "drug_id": 504,
          "created_at": "2020-10-30 19:41:08",
          "updated_at": "2020-10-30 19:41:08"
      },
      {
          "id": 511,
          "category_id": 26,
          "drug_id": 505,
          "created_at": "2020-10-30 20:27:23",
          "updated_at": "2020-10-30 20:27:23"
      },
      {
          "id": 513,
          "category_id": 503,
          "drug_id": 507,
          "created_at": "2020-10-30 20:33:00",
          "updated_at": "2020-10-30 20:33:00"
      },
      {
          "id": 514,
          "category_id": 504,
          "drug_id": 508,
          "created_at": "2020-10-31 18:18:17",
          "updated_at": "2020-10-31 18:18:17"
      },
      {
          "id": 515,
          "category_id": 505,
          "drug_id": 509,
          "created_at": "2020-10-31 18:20:29",
          "updated_at": "2020-10-31 18:20:29"
      },
      {
          "id": 516,
          "category_id": 506,
          "drug_id": 510,
          "created_at": "2020-10-31 18:22:19",
          "updated_at": "2020-10-31 18:22:19"
      },
      {
          "id": 517,
          "category_id": 507,
          "drug_id": 511,
          "created_at": "2020-10-31 18:24:09",
          "updated_at": "2020-10-31 18:24:09"
      },
      {
          "id": 518,
          "category_id": 508,
          "drug_id": 512,
          "created_at": "2020-10-31 18:25:07",
          "updated_at": "2020-10-31 18:25:07"
      },
      {
          "id": 520,
          "category_id": 509,
          "drug_id": 514,
          "created_at": "2020-10-31 18:39:35",
          "updated_at": "2020-10-31 18:39:35"
      },
      {
          "id": 521,
          "category_id": 322,
          "drug_id": 515,
          "created_at": "2020-10-31 19:12:34",
          "updated_at": "2020-10-31 19:12:34"
      },
      {
          "id": 522,
          "category_id": 507,
          "drug_id": 516,
          "created_at": "2020-11-03 15:11:33",
          "updated_at": "2020-11-03 15:11:33"
      },
      {
          "id": 523,
          "category_id": 59,
          "drug_id": 517,
          "created_at": "2020-11-03 15:13:16",
          "updated_at": "2020-11-03 15:13:16"
      },
      {
          "id": 524,
          "category_id": 410,
          "drug_id": 518,
          "created_at": "2020-11-03 15:14:06",
          "updated_at": "2020-11-03 15:14:06"
      },
      {
          "id": 525,
          "category_id": 503,
          "drug_id": 519,
          "created_at": "2020-11-03 15:32:27",
          "updated_at": "2020-11-03 15:32:27"
      },
      {
          "id": 526,
          "category_id": 510,
          "drug_id": 520,
          "created_at": "2020-11-03 15:54:06",
          "updated_at": "2020-11-03 15:54:06"
      },
      {
          "id": 527,
          "category_id": 511,
          "drug_id": 521,
          "created_at": "2020-11-03 15:55:28",
          "updated_at": "2020-11-03 15:55:28"
      },
      {
          "id": 528,
          "category_id": 266,
          "drug_id": 522,
          "created_at": "2020-11-03 16:00:28",
          "updated_at": "2020-11-03 16:00:28"
      },
      {
          "id": 529,
          "category_id": 509,
          "drug_id": 523,
          "created_at": "2020-11-03 16:03:40",
          "updated_at": "2020-11-03 16:03:40"
      },
      {
          "id": 530,
          "category_id": 512,
          "drug_id": 524,
          "created_at": "2020-11-03 16:09:23",
          "updated_at": "2020-11-03 16:09:23"
      },
      {
          "id": 531,
          "category_id": 513,
          "drug_id": 525,
          "created_at": "2020-11-03 16:11:35",
          "updated_at": "2020-11-03 16:11:35"
      },
      {
          "id": 532,
          "category_id": 406,
          "drug_id": 526,
          "created_at": "2020-11-03 16:33:24",
          "updated_at": "2020-11-03 16:33:24"
      },
      {
          "id": 533,
          "category_id": 285,
          "drug_id": 527,
          "created_at": "2020-11-03 16:34:20",
          "updated_at": "2020-11-03 16:34:20"
      },
      {
          "id": 534,
          "category_id": 285,
          "drug_id": 528,
          "created_at": "2020-11-03 16:34:56",
          "updated_at": "2020-11-03 16:34:56"
      },
      {
          "id": 536,
          "category_id": 172,
          "drug_id": 530,
          "created_at": "2020-11-03 16:37:57",
          "updated_at": "2020-11-03 16:37:57"
      },
      {
          "id": 537,
          "category_id": 514,
          "drug_id": 531,
          "created_at": "2020-11-03 17:07:59",
          "updated_at": "2020-11-03 17:07:59"
      },
      {
          "id": 538,
          "category_id": 54,
          "drug_id": 531,
          "created_at": "2020-11-03 17:07:59",
          "updated_at": "2020-11-03 17:07:59"
      },
      {
          "id": 539,
          "category_id": 101,
          "drug_id": 532,
          "created_at": "2020-11-03 17:09:17",
          "updated_at": "2020-11-03 17:09:17"
      },
      {
          "id": 540,
          "category_id": 285,
          "drug_id": 533,
          "created_at": "2020-11-03 17:10:33",
          "updated_at": "2020-11-03 17:10:33"
      },
      {
          "id": 541,
          "category_id": 249,
          "drug_id": 534,
          "created_at": "2020-11-03 17:13:57",
          "updated_at": "2020-11-03 17:13:57"
      },
      {
          "id": 542,
          "category_id": 111,
          "drug_id": 535,
          "created_at": "2020-11-03 17:14:55",
          "updated_at": "2020-11-03 17:14:55"
      },
      {
          "id": 543,
          "category_id": 515,
          "drug_id": 536,
          "created_at": "2020-11-03 17:16:19",
          "updated_at": "2020-11-03 17:16:19"
      },
      {
          "id": 544,
          "category_id": 516,
          "drug_id": 537,
          "created_at": "2020-11-03 17:17:31",
          "updated_at": "2020-11-03 17:17:31"
      },
      {
          "id": 545,
          "category_id": 505,
          "drug_id": 538,
          "created_at": "2020-11-03 17:18:18",
          "updated_at": "2020-11-03 17:18:18"
      },
      {
          "id": 546,
          "category_id": 103,
          "drug_id": 539,
          "created_at": "2020-11-03 17:19:42",
          "updated_at": "2020-11-03 17:19:42"
      },
      {
          "id": 547,
          "category_id": 103,
          "drug_id": 540,
          "created_at": "2020-11-03 17:20:05",
          "updated_at": "2020-11-03 17:20:05"
      },
      {
          "id": 548,
          "category_id": 103,
          "drug_id": 541,
          "created_at": "2020-11-03 17:20:25",
          "updated_at": "2020-11-03 17:20:25"
      },
      {
          "id": 549,
          "category_id": 350,
          "drug_id": 542,
          "created_at": "2020-11-03 17:22:07",
          "updated_at": "2020-11-03 17:22:07"
      },
      {
          "id": 550,
          "category_id": 517,
          "drug_id": 543,
          "created_at": "2020-11-03 19:17:27",
          "updated_at": "2020-11-03 19:17:27"
      },
      {
          "id": 551,
          "category_id": 114,
          "drug_id": 544,
          "created_at": "2020-11-03 19:19:33",
          "updated_at": "2020-11-03 19:19:33"
      },
      {
          "id": 552,
          "category_id": 518,
          "drug_id": 546,
          "created_at": "2020-11-03 19:26:22",
          "updated_at": "2020-11-03 19:26:22"
      },
      {
          "id": 553,
          "category_id": 408,
          "drug_id": 547,
          "created_at": "2020-11-03 19:29:15",
          "updated_at": "2020-11-03 19:29:15"
      },
      {
          "id": 554,
          "category_id": 351,
          "drug_id": 548,
          "created_at": "2020-11-03 19:30:45",
          "updated_at": "2020-11-03 19:30:45"
      },
      {
          "id": 555,
          "category_id": 519,
          "drug_id": 549,
          "created_at": "2020-11-03 19:35:56",
          "updated_at": "2020-11-03 19:35:56"
      },
      {
          "id": 556,
          "category_id": 519,
          "drug_id": 550,
          "created_at": "2020-11-03 19:36:40",
          "updated_at": "2020-11-03 19:36:40"
      },
      {
          "id": 557,
          "category_id": 229,
          "drug_id": 551,
          "created_at": "2020-11-03 20:25:40",
          "updated_at": "2020-11-03 20:25:40"
      },
      {
          "id": 558,
          "category_id": 156,
          "drug_id": 552,
          "created_at": "2020-11-03 20:48:34",
          "updated_at": "2020-11-03 20:48:34"
      },
      {
          "id": 559,
          "category_id": 261,
          "drug_id": 2,
          "created_at": "2020-11-04 01:53:13",
          "updated_at": "2020-11-04 01:53:13"
      },
      {
          "id": 562,
          "category_id": 3,
          "drug_id": 3,
          "created_at": "2020-11-04 01:57:44",
          "updated_at": "2020-11-04 01:57:44"
      },
      {
          "id": 567,
          "category_id": 5,
          "drug_id": 5,
          "created_at": "2020-11-04 02:01:14",
          "updated_at": "2020-11-04 02:01:14"
      },
      {
          "id": 568,
          "category_id": 6,
          "drug_id": 6,
          "created_at": "2020-11-04 02:01:58",
          "updated_at": "2020-11-04 02:01:58"
      },
      {
          "id": 569,
          "category_id": 7,
          "drug_id": 7,
          "created_at": "2020-11-04 02:02:41",
          "updated_at": "2020-11-04 02:02:41"
      },
      {
          "id": 570,
          "category_id": 9,
          "drug_id": 9,
          "created_at": "2020-11-04 02:16:27",
          "updated_at": "2020-11-04 02:16:27"
      },
      {
          "id": 571,
          "category_id": 11,
          "drug_id": 11,
          "created_at": "2020-11-04 02:16:59",
          "updated_at": "2020-11-04 02:16:59"
      },
      {
          "id": 572,
          "category_id": 13,
          "drug_id": 13,
          "created_at": "2020-11-04 02:19:08",
          "updated_at": "2020-11-04 02:19:08"
      },
      {
          "id": 574,
          "category_id": 14,
          "drug_id": 14,
          "created_at": "2020-11-04 02:22:41",
          "updated_at": "2020-11-04 02:22:41"
      },
      {
          "id": 576,
          "category_id": 208,
          "drug_id": 22,
          "created_at": "2020-11-04 02:23:40",
          "updated_at": "2020-11-04 02:23:40"
      },
      {
          "id": 577,
          "category_id": 23,
          "drug_id": 23,
          "created_at": "2020-11-04 02:26:49",
          "updated_at": "2020-11-04 02:26:49"
      },
      {
          "id": 578,
          "category_id": 26,
          "drug_id": 26,
          "created_at": "2020-11-04 02:27:43",
          "updated_at": "2020-11-04 02:27:43"
      },
      {
          "id": 579,
          "category_id": 42,
          "drug_id": 42,
          "created_at": "2020-11-04 02:28:02",
          "updated_at": "2020-11-04 02:28:02"
      },
      {
          "id": 580,
          "category_id": 456,
          "drug_id": 43,
          "created_at": "2020-11-04 02:28:14",
          "updated_at": "2020-11-04 02:28:14"
      },
      {
          "id": 581,
          "category_id": 44,
          "drug_id": 44,
          "created_at": "2020-11-04 02:28:22",
          "updated_at": "2020-11-04 02:28:22"
      },
      {
          "id": 583,
          "category_id": 179,
          "drug_id": 51,
          "created_at": "2020-11-04 02:29:14",
          "updated_at": "2020-11-04 02:29:14"
      },
      {
          "id": 585,
          "category_id": 391,
          "drug_id": 52,
          "created_at": "2020-11-04 16:01:52",
          "updated_at": "2020-11-04 16:01:52"
      },
      {
          "id": 587,
          "category_id": 199,
          "drug_id": 57,
          "created_at": "2020-11-04 16:18:38",
          "updated_at": "2020-11-04 16:18:38"
      },
      {
          "id": 590,
          "category_id": 58,
          "drug_id": 58,
          "created_at": "2020-11-04 16:49:01",
          "updated_at": "2020-11-04 16:49:01"
      },
      {
          "id": 591,
          "category_id": 50,
          "drug_id": 50,
          "created_at": "2020-11-04 16:50:57",
          "updated_at": "2020-11-04 16:50:57"
      },
      {
          "id": 592,
          "category_id": 37,
          "drug_id": 32,
          "created_at": "2020-11-04 16:52:26",
          "updated_at": "2020-11-04 16:52:26"
      },
      {
          "id": 593,
          "category_id": 16,
          "drug_id": 16,
          "created_at": "2020-11-04 16:53:51",
          "updated_at": "2020-11-04 16:53:51"
      },
      {
          "id": 595,
          "category_id": 4,
          "drug_id": 4,
          "created_at": "2020-11-04 16:59:51",
          "updated_at": "2020-11-04 16:59:51"
      },
      {
          "id": 596,
          "category_id": 302,
          "drug_id": 60,
          "created_at": "2020-11-04 17:23:32",
          "updated_at": "2020-11-04 17:23:32"
      },
      {
          "id": 598,
          "category_id": 62,
          "drug_id": 62,
          "created_at": "2020-11-04 18:21:10",
          "updated_at": "2020-11-04 18:21:10"
      },
      {
          "id": 599,
          "category_id": 63,
          "drug_id": 63,
          "created_at": "2020-11-04 20:17:15",
          "updated_at": "2020-11-04 20:17:15"
      },
      {
          "id": 600,
          "category_id": 65,
          "drug_id": 65,
          "created_at": "2020-11-04 20:18:42",
          "updated_at": "2020-11-04 20:18:42"
      },
      {
          "id": 601,
          "category_id": 66,
          "drug_id": 66,
          "created_at": "2020-11-04 20:22:04",
          "updated_at": "2020-11-04 20:22:04"
      },
      {
          "id": 602,
          "category_id": 68,
          "drug_id": 68,
          "created_at": "2020-11-04 20:40:43",
          "updated_at": "2020-11-04 20:40:43"
      },
      {
          "id": 603,
          "category_id": 70,
          "drug_id": 70,
          "created_at": "2020-11-04 20:44:24",
          "updated_at": "2020-11-04 20:44:24"
      },
      {
          "id": 604,
          "category_id": 295,
          "drug_id": 75,
          "created_at": "2020-11-04 20:47:21",
          "updated_at": "2020-11-04 20:47:21"
      },
      {
          "id": 607,
          "category_id": 272,
          "drug_id": 76,
          "created_at": "2020-11-04 21:23:48",
          "updated_at": "2020-11-04 21:23:48"
      },
      {
          "id": 610,
          "category_id": 78,
          "drug_id": 78,
          "created_at": "2020-11-04 21:39:21",
          "updated_at": "2020-11-04 21:39:21"
      },
      {
          "id": 611,
          "category_id": 79,
          "drug_id": 79,
          "created_at": "2020-11-04 21:44:43",
          "updated_at": "2020-11-04 21:44:43"
      },
      {
          "id": 612,
          "category_id": 83,
          "drug_id": 83,
          "created_at": "2020-11-04 21:46:11",
          "updated_at": "2020-11-04 21:46:11"
      },
      {
          "id": 613,
          "category_id": 83,
          "drug_id": 85,
          "created_at": "2020-11-04 21:48:53",
          "updated_at": "2020-11-04 21:48:53"
      },
      {
          "id": 615,
          "category_id": 88,
          "drug_id": 91,
          "created_at": "2020-11-05 19:49:28",
          "updated_at": "2020-11-05 19:49:28"
      },
      {
          "id": 616,
          "category_id": 84,
          "drug_id": 92,
          "created_at": "2020-11-05 19:53:24",
          "updated_at": "2020-11-05 19:53:24"
      },
      {
          "id": 617,
          "category_id": 85,
          "drug_id": 98,
          "created_at": "2020-11-05 20:32:27",
          "updated_at": "2020-11-05 20:32:27"
      },
      {
          "id": 620,
          "category_id": 100,
          "drug_id": 100,
          "created_at": "2020-11-05 20:37:57",
          "updated_at": "2020-11-05 20:37:57"
      },
      {
          "id": 622,
          "category_id": 102,
          "drug_id": 102,
          "created_at": "2020-11-07 18:25:22",
          "updated_at": "2020-11-07 18:25:22"
      },
      {
          "id": 624,
          "category_id": 163,
          "drug_id": 105,
          "created_at": "2020-11-07 18:41:01",
          "updated_at": "2020-11-07 18:41:01"
      },
      {
          "id": 625,
          "category_id": 153,
          "drug_id": 108,
          "created_at": "2020-11-07 18:45:08",
          "updated_at": "2020-11-07 18:45:08"
      },
      {
          "id": 626,
          "category_id": 230,
          "drug_id": 110,
          "created_at": "2020-11-07 18:48:00",
          "updated_at": "2020-11-07 18:48:00"
      },
      {
          "id": 627,
          "category_id": 111,
          "drug_id": 111,
          "created_at": "2020-11-07 18:50:01",
          "updated_at": "2020-11-07 18:50:01"
      },
      {
          "id": 628,
          "category_id": 112,
          "drug_id": 112,
          "created_at": "2020-11-07 18:52:34",
          "updated_at": "2020-11-07 18:52:34"
      },
      {
          "id": 629,
          "category_id": 179,
          "drug_id": 114,
          "created_at": "2020-11-07 18:56:54",
          "updated_at": "2020-11-07 18:56:54"
      },
      {
          "id": 631,
          "category_id": 120,
          "drug_id": 120,
          "created_at": "2020-11-07 19:09:47",
          "updated_at": "2020-11-07 19:09:47"
      },
      {
          "id": 632,
          "category_id": 266,
          "drug_id": 122,
          "created_at": "2020-11-07 19:12:24",
          "updated_at": "2020-11-07 19:12:24"
      },
      {
          "id": 633,
          "category_id": 259,
          "drug_id": 123,
          "created_at": "2020-11-07 19:17:21",
          "updated_at": "2020-11-07 19:17:21"
      },
      {
          "id": 634,
          "category_id": 40,
          "drug_id": 124,
          "created_at": "2020-11-08 14:15:22",
          "updated_at": "2020-11-08 14:15:22"
      },
      {
          "id": 635,
          "category_id": 342,
          "drug_id": 125,
          "created_at": "2020-11-08 14:17:16",
          "updated_at": "2020-11-08 14:17:16"
      },
      {
          "id": 638,
          "category_id": 127,
          "drug_id": 127,
          "created_at": "2020-11-08 14:57:59",
          "updated_at": "2020-11-08 14:57:59"
      },
      {
          "id": 639,
          "category_id": 50,
          "drug_id": 128,
          "created_at": "2020-11-08 15:19:11",
          "updated_at": "2020-11-08 15:19:11"
      },
      {
          "id": 640,
          "category_id": 130,
          "drug_id": 130,
          "created_at": "2020-11-08 18:41:40",
          "updated_at": "2020-11-08 18:41:40"
      },
      {
          "id": 643,
          "category_id": 132,
          "drug_id": 132,
          "created_at": "2020-11-08 19:02:15",
          "updated_at": "2020-11-08 19:02:15"
      },
      {
          "id": 644,
          "category_id": 135,
          "drug_id": 135,
          "created_at": "2020-11-08 19:04:13",
          "updated_at": "2020-11-08 19:04:13"
      },
      {
          "id": 645,
          "category_id": 194,
          "drug_id": 139,
          "created_at": "2020-11-08 19:25:25",
          "updated_at": "2020-11-08 19:25:25"
      },
      {
          "id": 646,
          "category_id": 493,
          "drug_id": 493,
          "created_at": "2020-11-08 19:34:23",
          "updated_at": "2020-11-08 19:34:23"
      },
      {
          "id": 647,
          "category_id": 140,
          "drug_id": 140,
          "created_at": "2020-11-08 19:51:30",
          "updated_at": "2020-11-08 19:51:30"
      },
      {
          "id": 648,
          "category_id": 141,
          "drug_id": 141,
          "created_at": "2020-11-08 19:52:34",
          "updated_at": "2020-11-08 19:52:34"
      },
      {
          "id": 649,
          "category_id": 302,
          "drug_id": 142,
          "created_at": "2020-11-08 19:55:15",
          "updated_at": "2020-11-08 19:55:15"
      },
      {
          "id": 650,
          "category_id": 143,
          "drug_id": 143,
          "created_at": "2020-11-08 20:06:29",
          "updated_at": "2020-11-08 20:06:29"
      },
      {
          "id": 651,
          "category_id": 311,
          "drug_id": 148,
          "created_at": "2020-11-08 20:12:52",
          "updated_at": "2020-11-08 20:12:52"
      },
      {
          "id": 652,
          "category_id": 151,
          "drug_id": 152,
          "created_at": "2020-11-08 20:14:10",
          "updated_at": "2020-11-08 20:14:10"
      },
      {
          "id": 653,
          "category_id": 157,
          "drug_id": 157,
          "created_at": "2020-11-08 20:17:12",
          "updated_at": "2020-11-08 20:17:12"
      },
      {
          "id": 654,
          "category_id": 44,
          "drug_id": 162,
          "created_at": "2020-11-08 20:23:39",
          "updated_at": "2020-11-08 20:23:39"
      },
      {
          "id": 655,
          "category_id": 163,
          "drug_id": 163,
          "created_at": "2020-11-08 20:27:05",
          "updated_at": "2020-11-08 20:27:05"
      },
      {
          "id": 656,
          "category_id": 167,
          "drug_id": 167,
          "created_at": "2020-11-08 20:30:23",
          "updated_at": "2020-11-08 20:30:23"
      },
      {
          "id": 657,
          "category_id": 168,
          "drug_id": 168,
          "created_at": "2020-11-08 20:32:59",
          "updated_at": "2020-11-08 20:32:59"
      },
      {
          "id": 658,
          "category_id": 169,
          "drug_id": 169,
          "created_at": "2020-11-08 20:35:57",
          "updated_at": "2020-11-08 20:35:57"
      },
      {
          "id": 659,
          "category_id": 171,
          "drug_id": 171,
          "created_at": "2020-11-08 20:50:02",
          "updated_at": "2020-11-08 20:50:02"
      },
      {
          "id": 660,
          "category_id": 173,
          "drug_id": 173,
          "created_at": "2020-11-09 20:20:37",
          "updated_at": "2020-11-09 20:20:37"
      },
      {
          "id": 661,
          "category_id": 167,
          "drug_id": 177,
          "created_at": "2020-11-09 20:26:31",
          "updated_at": "2020-11-09 20:26:31"
      },
      {
          "id": 663,
          "category_id": 178,
          "drug_id": 178,
          "created_at": "2020-11-09 20:45:10",
          "updated_at": "2020-11-09 20:45:10"
      },
      {
          "id": 664,
          "category_id": 181,
          "drug_id": 181,
          "created_at": "2020-11-09 21:09:11",
          "updated_at": "2020-11-09 21:09:11"
      },
      {
          "id": 665,
          "category_id": 335,
          "drug_id": 494,
          "created_at": "2020-11-11 18:44:40",
          "updated_at": "2020-11-11 18:44:40"
      },
      {
          "id": 666,
          "category_id": 182,
          "drug_id": 182,
          "created_at": "2020-11-11 18:49:44",
          "updated_at": "2020-11-11 18:49:44"
      },
      {
          "id": 667,
          "category_id": 185,
          "drug_id": 185,
          "created_at": "2020-11-11 18:54:32",
          "updated_at": "2020-11-11 18:54:32"
      },
      {
          "id": 668,
          "category_id": 396,
          "drug_id": 186,
          "created_at": "2020-11-11 18:58:33",
          "updated_at": "2020-11-11 18:58:33"
      },
      {
          "id": 669,
          "category_id": 14,
          "drug_id": 189,
          "created_at": "2020-11-11 19:38:13",
          "updated_at": "2020-11-11 19:38:13"
      },
      {
          "id": 672,
          "category_id": 293,
          "drug_id": 190,
          "created_at": "2020-11-11 20:06:38",
          "updated_at": "2020-11-11 20:06:38"
      },
      {
          "id": 673,
          "category_id": 192,
          "drug_id": 192,
          "created_at": "2020-11-11 20:10:32",
          "updated_at": "2020-11-11 20:10:32"
      },
      {
          "id": 674,
          "category_id": 288,
          "drug_id": 194,
          "created_at": "2020-11-11 20:30:28",
          "updated_at": "2020-11-11 20:30:28"
      },
      {
          "id": 675,
          "category_id": 123,
          "drug_id": 195,
          "created_at": "2020-11-11 20:42:59",
          "updated_at": "2020-11-11 20:42:59"
      },
      {
          "id": 677,
          "category_id": 141,
          "drug_id": 196,
          "created_at": "2020-11-11 20:58:41",
          "updated_at": "2020-11-11 20:58:41"
      },
      {
          "id": 678,
          "category_id": 197,
          "drug_id": 197,
          "created_at": "2020-11-11 21:00:58",
          "updated_at": "2020-11-11 21:00:58"
      },
      {
          "id": 679,
          "category_id": 199,
          "drug_id": 199,
          "created_at": "2020-11-11 21:01:57",
          "updated_at": "2020-11-11 21:01:57"
      },
      {
          "id": 681,
          "category_id": 200,
          "drug_id": 200,
          "created_at": "2020-11-11 21:11:47",
          "updated_at": "2020-11-11 21:11:47"
      },
      {
          "id": 682,
          "category_id": 40,
          "drug_id": 202,
          "created_at": "2020-11-11 21:15:05",
          "updated_at": "2020-11-11 21:15:05"
      },
      {
          "id": 684,
          "category_id": 201,
          "drug_id": 201,
          "created_at": "2020-11-11 21:21:10",
          "updated_at": "2020-11-11 21:21:10"
      },
      {
          "id": 686,
          "category_id": 438,
          "drug_id": 205,
          "created_at": "2020-11-11 21:24:29",
          "updated_at": "2020-11-11 21:24:29"
      },
      {
          "id": 687,
          "category_id": 206,
          "drug_id": 206,
          "created_at": "2020-11-12 19:10:29",
          "updated_at": "2020-11-12 19:10:29"
      },
      {
          "id": 688,
          "category_id": 210,
          "drug_id": 210,
          "created_at": "2020-11-12 19:25:52",
          "updated_at": "2020-11-12 19:25:52"
      },
      {
          "id": 690,
          "category_id": 355,
          "drug_id": 211,
          "created_at": "2020-11-12 20:39:03",
          "updated_at": "2020-11-12 20:39:03"
      },
      {
          "id": 691,
          "category_id": 216,
          "drug_id": 216,
          "created_at": "2020-11-12 20:41:04",
          "updated_at": "2020-11-12 20:41:04"
      },
      {
          "id": 692,
          "category_id": 454,
          "drug_id": 218,
          "created_at": "2020-11-12 20:50:11",
          "updated_at": "2020-11-12 20:50:11"
      },
      {
          "id": 693,
          "category_id": 253,
          "drug_id": 221,
          "created_at": "2020-11-12 20:59:50",
          "updated_at": "2020-11-12 20:59:50"
      },
      {
          "id": 695,
          "category_id": 260,
          "drug_id": 231,
          "created_at": "2020-11-16 00:44:23",
          "updated_at": "2020-11-16 00:44:23"
      },
      {
          "id": 696,
          "category_id": 232,
          "drug_id": 232,
          "created_at": "2020-11-16 01:35:01",
          "updated_at": "2020-11-16 01:35:01"
      },
      {
          "id": 697,
          "category_id": 233,
          "drug_id": 233,
          "created_at": "2020-11-16 01:38:02",
          "updated_at": "2020-11-16 01:38:02"
      },
      {
          "id": 698,
          "category_id": 308,
          "drug_id": 235,
          "created_at": "2020-11-16 01:48:10",
          "updated_at": "2020-11-16 01:48:10"
      },
      {
          "id": 699,
          "category_id": 238,
          "drug_id": 238,
          "created_at": "2020-11-16 01:50:27",
          "updated_at": "2020-11-16 01:50:27"
      },
      {
          "id": 700,
          "category_id": 242,
          "drug_id": 240,
          "created_at": "2020-11-16 02:02:13",
          "updated_at": "2020-11-16 02:02:13"
      },
      {
          "id": 701,
          "category_id": 242,
          "drug_id": 241,
          "created_at": "2020-11-16 02:05:57",
          "updated_at": "2020-11-16 02:05:57"
      },
      {
          "id": 702,
          "category_id": 242,
          "drug_id": 245,
          "created_at": "2020-11-16 02:09:17",
          "updated_at": "2020-11-16 02:09:17"
      },
      {
          "id": 704,
          "category_id": 247,
          "drug_id": 247,
          "created_at": "2020-11-16 02:16:30",
          "updated_at": "2020-11-16 02:16:30"
      },
      {
          "id": 707,
          "category_id": 248,
          "drug_id": 248,
          "created_at": "2020-11-16 02:32:56",
          "updated_at": "2020-11-16 02:32:56"
      },
      {
          "id": 708,
          "category_id": 216,
          "drug_id": 249,
          "created_at": "2020-11-16 02:35:27",
          "updated_at": "2020-11-16 02:35:27"
      },
      {
          "id": 709,
          "category_id": 252,
          "drug_id": 252,
          "created_at": "2020-11-16 02:38:27",
          "updated_at": "2020-11-16 02:38:27"
      },
      {
          "id": 710,
          "category_id": 195,
          "drug_id": 255,
          "created_at": "2020-11-16 02:56:04",
          "updated_at": "2020-11-16 02:56:04"
      },
      {
          "id": 711,
          "category_id": 168,
          "drug_id": 256,
          "created_at": "2020-11-16 03:01:08",
          "updated_at": "2020-11-16 03:01:08"
      }
  ];
  let query = "INSERT INTO vdi_drug_category_drug (id,category_id,drug_id,created_at,updated_at) VALUES";


  for (let i = 0; i < data.length; ++i) {

        query = query + "('"
              + data[i].id //id
              + "','"
              + data[i].category_id 
              + "','"
              + data[i].drug_id 
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
  console.log('Charles Inserting Drug  Categories.................................',categories)

  console.log('....................................................................');
}

export const drugCategoryDrug = {
      insertDrugCategoriesAsync
}