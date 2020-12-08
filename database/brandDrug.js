import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Brand Drugs Succesfully inserted into the database', results);
            },
                  (error) => {
                        reject('Failed to inserts Brand Drug into the database!', error);
                  });
      });
});

const insertBrandDrugAsync = async () => {

         let data = [
            {
                "id": 1,
                "drug_id": 1,
                "brand_id": 1,
                "created_at": "2020-05-06T15:45:49.000000Z",
                "updated_at": "2020-05-06T15:45:49.000000Z"
            },
            {
                "id": 2,
                "drug_id": 1,
                "brand_id": 2,
                "created_at": "2020-05-06T15:45:51.000000Z",
                "updated_at": "2020-05-06T15:45:51.000000Z"
            },
            {
                "id": 3,
                "drug_id": 1,
                "brand_id": 3,
                "created_at": "2020-05-06T15:45:54.000000Z",
                "updated_at": "2020-05-06T15:45:54.000000Z"
            },
            {
                "id": 36,
                "drug_id": 8,
                "brand_id": 34,
                "created_at": "2020-05-06T15:57:11.000000Z",
                "updated_at": "2020-05-06T15:57:11.000000Z"
            },
            {
                "id": 37,
                "drug_id": 8,
                "brand_id": 35,
                "created_at": "2020-05-06T15:57:13.000000Z",
                "updated_at": "2020-05-06T15:57:13.000000Z"
            },
            {
                "id": 39,
                "drug_id": 10,
                "brand_id": 37,
                "created_at": "2020-05-06T15:58:49.000000Z",
                "updated_at": "2020-05-06T15:58:49.000000Z"
            },
            {
                "id": 46,
                "drug_id": 12,
                "brand_id": 44,
                "created_at": "2020-05-06T16:01:12.000000Z",
                "updated_at": "2020-05-06T16:01:12.000000Z"
            },
            {
                "id": 52,
                "drug_id": 15,
                "brand_id": 50,
                "created_at": "2020-05-06T16:05:48.000000Z",
                "updated_at": "2020-05-06T16:05:48.000000Z"
            },
            {
                "id": 53,
                "drug_id": 15,
                "brand_id": 51,
                "created_at": "2020-05-06T16:05:51.000000Z",
                "updated_at": "2020-05-06T16:05:51.000000Z"
            },
            {
                "id": 54,
                "drug_id": 15,
                "brand_id": 52,
                "created_at": "2020-05-06T16:05:53.000000Z",
                "updated_at": "2020-05-06T16:05:53.000000Z"
            },
            {
                "id": 55,
                "drug_id": 15,
                "brand_id": 53,
                "created_at": "2020-05-06T16:05:55.000000Z",
                "updated_at": "2020-05-06T16:05:55.000000Z"
            },
            {
                "id": 56,
                "drug_id": 15,
                "brand_id": 54,
                "created_at": "2020-05-06T16:05:58.000000Z",
                "updated_at": "2020-05-06T16:05:58.000000Z"
            },
            {
                "id": 57,
                "drug_id": 15,
                "brand_id": 55,
                "created_at": "2020-05-06T16:06:00.000000Z",
                "updated_at": "2020-05-06T16:06:00.000000Z"
            },
            {
                "id": 58,
                "drug_id": 15,
                "brand_id": 56,
                "created_at": "2020-05-06T16:06:02.000000Z",
                "updated_at": "2020-05-06T16:06:02.000000Z"
            },
            {
                "id": 59,
                "drug_id": 15,
                "brand_id": 57,
                "created_at": "2020-05-06T16:06:04.000000Z",
                "updated_at": "2020-05-06T16:06:04.000000Z"
            },
            {
                "id": 60,
                "drug_id": 15,
                "brand_id": 58,
                "created_at": "2020-05-06T16:06:07.000000Z",
                "updated_at": "2020-05-06T16:06:07.000000Z"
            },
            {
                "id": 61,
                "drug_id": 15,
                "brand_id": 59,
                "created_at": "2020-05-06T16:06:09.000000Z",
                "updated_at": "2020-05-06T16:06:09.000000Z"
            },
            {
                "id": 62,
                "drug_id": 15,
                "brand_id": 60,
                "created_at": "2020-05-06T16:06:12.000000Z",
                "updated_at": "2020-05-06T16:06:12.000000Z"
            },
            {
                "id": 63,
                "drug_id": 15,
                "brand_id": 61,
                "created_at": "2020-05-06T16:06:14.000000Z",
                "updated_at": "2020-05-06T16:06:14.000000Z"
            },
            {
                "id": 64,
                "drug_id": 15,
                "brand_id": 62,
                "created_at": "2020-05-06T16:06:16.000000Z",
                "updated_at": "2020-05-06T16:06:16.000000Z"
            },
            {
                "id": 65,
                "drug_id": 15,
                "brand_id": 63,
                "created_at": "2020-05-06T16:06:18.000000Z",
                "updated_at": "2020-05-06T16:06:18.000000Z"
            },
            {
                "id": 67,
                "drug_id": 17,
                "brand_id": 65,
                "created_at": "2020-05-06T16:08:26.000000Z",
                "updated_at": "2020-05-06T16:08:26.000000Z"
            },
            {
                "id": 75,
                "drug_id": 19,
                "brand_id": 73,
                "created_at": "2020-05-06T16:10:14.000000Z",
                "updated_at": "2020-05-06T16:10:14.000000Z"
            },
            {
                "id": 76,
                "drug_id": 19,
                "brand_id": 74,
                "created_at": "2020-05-06T16:10:17.000000Z",
                "updated_at": "2020-05-06T16:10:17.000000Z"
            },
            {
                "id": 77,
                "drug_id": 20,
                "brand_id": 75,
                "created_at": "2020-05-06T16:11:28.000000Z",
                "updated_at": "2020-05-06T16:11:28.000000Z"
            },
            {
                "id": 78,
                "drug_id": 20,
                "brand_id": 76,
                "created_at": "2020-05-06T16:11:30.000000Z",
                "updated_at": "2020-05-06T16:11:30.000000Z"
            },
            {
                "id": 79,
                "drug_id": 20,
                "brand_id": 77,
                "created_at": "2020-05-06T16:11:33.000000Z",
                "updated_at": "2020-05-06T16:11:33.000000Z"
            },
            {
                "id": 80,
                "drug_id": 20,
                "brand_id": 78,
                "created_at": "2020-05-06T16:11:35.000000Z",
                "updated_at": "2020-05-06T16:11:35.000000Z"
            },
            {
                "id": 81,
                "drug_id": 20,
                "brand_id": 79,
                "created_at": "2020-05-06T16:11:38.000000Z",
                "updated_at": "2020-05-06T16:11:38.000000Z"
            },
            {
                "id": 82,
                "drug_id": 20,
                "brand_id": 80,
                "created_at": "2020-05-06T16:11:40.000000Z",
                "updated_at": "2020-05-06T16:11:40.000000Z"
            },
            {
                "id": 83,
                "drug_id": 20,
                "brand_id": 81,
                "created_at": "2020-05-06T16:11:43.000000Z",
                "updated_at": "2020-05-06T16:11:43.000000Z"
            },
            {
                "id": 84,
                "drug_id": 21,
                "brand_id": 82,
                "created_at": "2020-05-06T16:12:22.000000Z",
                "updated_at": "2020-05-06T16:12:22.000000Z"
            },
            {
                "id": 85,
                "drug_id": 21,
                "brand_id": 83,
                "created_at": "2020-05-06T16:12:24.000000Z",
                "updated_at": "2020-05-06T16:12:24.000000Z"
            },
            {
                "id": 89,
                "drug_id": 24,
                "brand_id": 87,
                "created_at": "2020-05-06T16:15:07.000000Z",
                "updated_at": "2020-05-06T16:15:07.000000Z"
            },
            {
                "id": 90,
                "drug_id": 25,
                "brand_id": 88,
                "created_at": "2020-05-06T16:16:19.000000Z",
                "updated_at": "2020-05-06T16:16:19.000000Z"
            },
            {
                "id": 91,
                "drug_id": 25,
                "brand_id": 89,
                "created_at": "2020-05-06T16:16:21.000000Z",
                "updated_at": "2020-05-06T16:16:21.000000Z"
            },
            {
                "id": 96,
                "drug_id": 27,
                "brand_id": 94,
                "created_at": "2020-05-06T16:18:32.000000Z",
                "updated_at": "2020-05-06T16:18:32.000000Z"
            },
            {
                "id": 97,
                "drug_id": 27,
                "brand_id": 95,
                "created_at": "2020-05-06T16:18:34.000000Z",
                "updated_at": "2020-05-06T16:18:34.000000Z"
            },
            {
                "id": 98,
                "drug_id": 28,
                "brand_id": 96,
                "created_at": "2020-05-06T16:19:30.000000Z",
                "updated_at": "2020-05-06T16:19:30.000000Z"
            },
            {
                "id": 99,
                "drug_id": 28,
                "brand_id": 97,
                "created_at": "2020-05-06T16:19:32.000000Z",
                "updated_at": "2020-05-06T16:19:32.000000Z"
            },
            {
                "id": 100,
                "drug_id": 29,
                "brand_id": 98,
                "created_at": "2020-05-06T16:21:15.000000Z",
                "updated_at": "2020-05-06T16:21:15.000000Z"
            },
            {
                "id": 101,
                "drug_id": 29,
                "brand_id": 99,
                "created_at": "2020-05-06T16:21:18.000000Z",
                "updated_at": "2020-05-06T16:21:18.000000Z"
            },
            {
                "id": 102,
                "drug_id": 29,
                "brand_id": 100,
                "created_at": "2020-05-06T16:21:20.000000Z",
                "updated_at": "2020-05-06T16:21:20.000000Z"
            },
            {
                "id": 103,
                "drug_id": 30,
                "brand_id": 101,
                "created_at": "2020-05-06T16:22:22.000000Z",
                "updated_at": "2020-05-06T16:22:22.000000Z"
            },
            {
                "id": 104,
                "drug_id": 31,
                "brand_id": 102,
                "created_at": "2020-05-06T16:24:26.000000Z",
                "updated_at": "2020-05-06T16:24:26.000000Z"
            },
            {
                "id": 105,
                "drug_id": 31,
                "brand_id": 103,
                "created_at": "2020-05-06T16:24:28.000000Z",
                "updated_at": "2020-05-06T16:24:28.000000Z"
            },
            {
                "id": 106,
                "drug_id": 31,
                "brand_id": 104,
                "created_at": "2020-05-06T16:24:31.000000Z",
                "updated_at": "2020-05-06T16:24:31.000000Z"
            },
            {
                "id": 107,
                "drug_id": 31,
                "brand_id": 105,
                "created_at": "2020-05-06T16:24:33.000000Z",
                "updated_at": "2020-05-06T16:24:33.000000Z"
            },
            {
                "id": 108,
                "drug_id": 31,
                "brand_id": 106,
                "created_at": "2020-05-06T16:24:36.000000Z",
                "updated_at": "2020-05-06T16:24:36.000000Z"
            },
            {
                "id": 109,
                "drug_id": 31,
                "brand_id": 107,
                "created_at": "2020-05-06T16:24:38.000000Z",
                "updated_at": "2020-05-06T16:24:38.000000Z"
            },
            {
                "id": 110,
                "drug_id": 31,
                "brand_id": 108,
                "created_at": "2020-05-06T16:24:40.000000Z",
                "updated_at": "2020-05-06T16:24:40.000000Z"
            },
            {
                "id": 111,
                "drug_id": 31,
                "brand_id": 109,
                "created_at": "2020-05-06T16:24:43.000000Z",
                "updated_at": "2020-05-06T16:24:43.000000Z"
            },
            {
                "id": 112,
                "drug_id": 31,
                "brand_id": 110,
                "created_at": "2020-05-06T16:24:46.000000Z",
                "updated_at": "2020-05-06T16:24:46.000000Z"
            },
            {
                "id": 113,
                "drug_id": 31,
                "brand_id": 111,
                "created_at": "2020-05-06T16:24:48.000000Z",
                "updated_at": "2020-05-06T16:24:48.000000Z"
            },
            {
                "id": 114,
                "drug_id": 31,
                "brand_id": 112,
                "created_at": "2020-05-06T16:24:50.000000Z",
                "updated_at": "2020-05-06T16:24:50.000000Z"
            },
            {
                "id": 115,
                "drug_id": 31,
                "brand_id": 113,
                "created_at": "2020-05-06T16:24:52.000000Z",
                "updated_at": "2020-05-06T16:24:52.000000Z"
            },
            {
                "id": 116,
                "drug_id": 31,
                "brand_id": 114,
                "created_at": "2020-05-06T16:24:55.000000Z",
                "updated_at": "2020-05-06T16:24:55.000000Z"
            },
            {
                "id": 117,
                "drug_id": 31,
                "brand_id": 115,
                "created_at": "2020-05-06T16:24:57.000000Z",
                "updated_at": "2020-05-06T16:24:57.000000Z"
            },
            {
                "id": 118,
                "drug_id": 31,
                "brand_id": 116,
                "created_at": "2020-05-06T16:25:00.000000Z",
                "updated_at": "2020-05-06T16:25:00.000000Z"
            },
            {
                "id": 119,
                "drug_id": 31,
                "brand_id": 117,
                "created_at": "2020-05-06T16:25:03.000000Z",
                "updated_at": "2020-05-06T16:25:03.000000Z"
            },
            {
                "id": 134,
                "drug_id": 33,
                "brand_id": 132,
                "created_at": "2020-05-06T16:28:46.000000Z",
                "updated_at": "2020-05-06T16:28:46.000000Z"
            },
            {
                "id": 135,
                "drug_id": 34,
                "brand_id": 133,
                "created_at": "2020-05-06T16:29:38.000000Z",
                "updated_at": "2020-05-06T16:29:38.000000Z"
            },
            {
                "id": 136,
                "drug_id": 35,
                "brand_id": 134,
                "created_at": "2020-05-06T16:30:24.000000Z",
                "updated_at": "2020-05-06T16:30:24.000000Z"
            },
            {
                "id": 137,
                "drug_id": 36,
                "brand_id": 135,
                "created_at": "2020-05-06T16:32:02.000000Z",
                "updated_at": "2020-05-06T16:32:02.000000Z"
            },
            {
                "id": 138,
                "drug_id": 36,
                "brand_id": 136,
                "created_at": "2020-05-06T16:32:04.000000Z",
                "updated_at": "2020-05-06T16:32:04.000000Z"
            },
            {
                "id": 139,
                "drug_id": 36,
                "brand_id": 137,
                "created_at": "2020-05-06T16:32:07.000000Z",
                "updated_at": "2020-05-06T16:32:07.000000Z"
            },
            {
                "id": 140,
                "drug_id": 36,
                "brand_id": 138,
                "created_at": "2020-05-06T16:32:09.000000Z",
                "updated_at": "2020-05-06T16:32:09.000000Z"
            },
            {
                "id": 141,
                "drug_id": 36,
                "brand_id": 139,
                "created_at": "2020-05-06T16:32:12.000000Z",
                "updated_at": "2020-05-06T16:32:12.000000Z"
            },
            {
                "id": 142,
                "drug_id": 36,
                "brand_id": 140,
                "created_at": "2020-05-06T16:32:14.000000Z",
                "updated_at": "2020-05-06T16:32:14.000000Z"
            },
            {
                "id": 143,
                "drug_id": 37,
                "brand_id": 141,
                "created_at": "2020-05-06T16:32:53.000000Z",
                "updated_at": "2020-05-06T16:32:53.000000Z"
            },
            {
                "id": 144,
                "drug_id": 38,
                "brand_id": 142,
                "created_at": "2020-05-06T16:33:31.000000Z",
                "updated_at": "2020-05-06T16:33:31.000000Z"
            },
            {
                "id": 145,
                "drug_id": 38,
                "brand_id": 143,
                "created_at": "2020-05-06T16:33:33.000000Z",
                "updated_at": "2020-05-06T16:33:33.000000Z"
            },
            {
                "id": 146,
                "drug_id": 38,
                "brand_id": 144,
                "created_at": "2020-05-06T16:33:35.000000Z",
                "updated_at": "2020-05-06T16:33:35.000000Z"
            },
            {
                "id": 147,
                "drug_id": 39,
                "brand_id": 145,
                "created_at": "2020-05-06T16:34:45.000000Z",
                "updated_at": "2020-05-06T16:34:45.000000Z"
            },
            {
                "id": 148,
                "drug_id": 39,
                "brand_id": 146,
                "created_at": "2020-05-06T16:34:48.000000Z",
                "updated_at": "2020-05-06T16:34:48.000000Z"
            },
            {
                "id": 149,
                "drug_id": 41,
                "brand_id": 147,
                "created_at": "2020-05-06T16:37:18.000000Z",
                "updated_at": "2020-05-06T16:37:18.000000Z"
            },
            {
                "id": 150,
                "drug_id": 41,
                "brand_id": 148,
                "created_at": "2020-05-06T16:37:20.000000Z",
                "updated_at": "2020-05-06T16:37:20.000000Z"
            },
            {
                "id": 151,
                "drug_id": 41,
                "brand_id": 149,
                "created_at": "2020-05-06T16:37:23.000000Z",
                "updated_at": "2020-05-06T16:37:23.000000Z"
            },
            {
                "id": 152,
                "drug_id": 41,
                "brand_id": 150,
                "created_at": "2020-05-06T16:37:26.000000Z",
                "updated_at": "2020-05-06T16:37:26.000000Z"
            },
            {
                "id": 162,
                "drug_id": 45,
                "brand_id": 160,
                "created_at": "2020-05-06T16:41:52.000000Z",
                "updated_at": "2020-05-06T16:41:52.000000Z"
            },
            {
                "id": 163,
                "drug_id": 45,
                "brand_id": 161,
                "created_at": "2020-05-06T16:41:55.000000Z",
                "updated_at": "2020-05-06T16:41:55.000000Z"
            },
            {
                "id": 164,
                "drug_id": 46,
                "brand_id": 162,
                "created_at": "2020-05-06T16:43:07.000000Z",
                "updated_at": "2020-05-06T16:43:07.000000Z"
            },
            {
                "id": 165,
                "drug_id": 46,
                "brand_id": 163,
                "created_at": "2020-05-06T16:43:10.000000Z",
                "updated_at": "2020-05-06T16:43:10.000000Z"
            },
            {
                "id": 166,
                "drug_id": 46,
                "brand_id": 164,
                "created_at": "2020-05-06T16:43:12.000000Z",
                "updated_at": "2020-05-06T16:43:12.000000Z"
            },
            {
                "id": 167,
                "drug_id": 46,
                "brand_id": 165,
                "created_at": "2020-05-06T16:43:15.000000Z",
                "updated_at": "2020-05-06T16:43:15.000000Z"
            },
            {
                "id": 168,
                "drug_id": 47,
                "brand_id": 166,
                "created_at": "2020-05-06T16:44:05.000000Z",
                "updated_at": "2020-05-06T16:44:05.000000Z"
            },
            {
                "id": 169,
                "drug_id": 47,
                "brand_id": 167,
                "created_at": "2020-05-06T16:44:07.000000Z",
                "updated_at": "2020-05-06T16:44:07.000000Z"
            },
            {
                "id": 170,
                "drug_id": 47,
                "brand_id": 167,
                "created_at": "2020-05-06T16:44:07.000000Z",
                "updated_at": "2020-05-06T16:44:07.000000Z"
            },
            {
                "id": 171,
                "drug_id": 47,
                "brand_id": 167,
                "created_at": "2020-05-06T16:44:07.000000Z",
                "updated_at": "2020-05-06T16:44:07.000000Z"
            },
            {
                "id": 172,
                "drug_id": 47,
                "brand_id": 168,
                "created_at": "2020-05-06T16:44:10.000000Z",
                "updated_at": "2020-05-06T16:44:10.000000Z"
            },
            {
                "id": 173,
                "drug_id": 48,
                "brand_id": 169,
                "created_at": "2020-05-06T16:44:43.000000Z",
                "updated_at": "2020-05-06T16:44:43.000000Z"
            },
            {
                "id": 174,
                "drug_id": 49,
                "brand_id": 170,
                "created_at": "2020-05-06T16:45:25.000000Z",
                "updated_at": "2020-05-06T16:45:25.000000Z"
            },
            {
                "id": 186,
                "drug_id": 53,
                "brand_id": 182,
                "created_at": "2020-05-06T16:52:39.000000Z",
                "updated_at": "2020-05-06T16:52:39.000000Z"
            },
            {
                "id": 187,
                "drug_id": 53,
                "brand_id": 183,
                "created_at": "2020-05-06T16:52:41.000000Z",
                "updated_at": "2020-05-06T16:52:41.000000Z"
            },
            {
                "id": 188,
                "drug_id": 53,
                "brand_id": 184,
                "created_at": "2020-05-06T16:52:44.000000Z",
                "updated_at": "2020-05-06T16:52:44.000000Z"
            },
            {
                "id": 189,
                "drug_id": 53,
                "brand_id": 185,
                "created_at": "2020-05-06T16:52:47.000000Z",
                "updated_at": "2020-05-06T16:52:47.000000Z"
            },
            {
                "id": 190,
                "drug_id": 54,
                "brand_id": 186,
                "created_at": "2020-05-06T16:53:17.000000Z",
                "updated_at": "2020-05-06T16:53:17.000000Z"
            },
            {
                "id": 191,
                "drug_id": 54,
                "brand_id": 187,
                "created_at": "2020-05-06T16:53:19.000000Z",
                "updated_at": "2020-05-06T16:53:19.000000Z"
            },
            {
                "id": 192,
                "drug_id": 54,
                "brand_id": 188,
                "created_at": "2020-05-06T16:53:21.000000Z",
                "updated_at": "2020-05-06T16:53:21.000000Z"
            },
            {
                "id": 193,
                "drug_id": 54,
                "brand_id": 189,
                "created_at": "2020-05-06T16:53:24.000000Z",
                "updated_at": "2020-05-06T16:53:24.000000Z"
            },
            {
                "id": 194,
                "drug_id": 54,
                "brand_id": 190,
                "created_at": "2020-05-06T16:53:27.000000Z",
                "updated_at": "2020-05-06T16:53:27.000000Z"
            },
            {
                "id": 195,
                "drug_id": 54,
                "brand_id": 191,
                "created_at": "2020-05-06T16:53:29.000000Z",
                "updated_at": "2020-05-06T16:53:29.000000Z"
            },
            {
                "id": 196,
                "drug_id": 54,
                "brand_id": 192,
                "created_at": "2020-05-06T16:53:32.000000Z",
                "updated_at": "2020-05-06T16:53:32.000000Z"
            },
            {
                "id": 197,
                "drug_id": 54,
                "brand_id": 193,
                "created_at": "2020-05-06T16:53:35.000000Z",
                "updated_at": "2020-05-06T16:53:35.000000Z"
            },
            {
                "id": 198,
                "drug_id": 54,
                "brand_id": 194,
                "created_at": "2020-05-06T16:53:38.000000Z",
                "updated_at": "2020-05-06T16:53:38.000000Z"
            },
            {
                "id": 199,
                "drug_id": 54,
                "brand_id": 195,
                "created_at": "2020-05-06T16:53:40.000000Z",
                "updated_at": "2020-05-06T16:53:40.000000Z"
            },
            {
                "id": 200,
                "drug_id": 54,
                "brand_id": 196,
                "created_at": "2020-05-06T16:53:42.000000Z",
                "updated_at": "2020-05-06T16:53:42.000000Z"
            },
            {
                "id": 201,
                "drug_id": 54,
                "brand_id": 197,
                "created_at": "2020-05-06T16:53:44.000000Z",
                "updated_at": "2020-05-06T16:53:44.000000Z"
            },
            {
                "id": 202,
                "drug_id": 54,
                "brand_id": 198,
                "created_at": "2020-05-06T16:53:47.000000Z",
                "updated_at": "2020-05-06T16:53:47.000000Z"
            },
            {
                "id": 203,
                "drug_id": 54,
                "brand_id": 199,
                "created_at": "2020-05-06T16:53:50.000000Z",
                "updated_at": "2020-05-06T16:53:50.000000Z"
            },
            {
                "id": 204,
                "drug_id": 54,
                "brand_id": 200,
                "created_at": "2020-05-06T16:53:52.000000Z",
                "updated_at": "2020-05-06T16:53:52.000000Z"
            },
            {
                "id": 205,
                "drug_id": 54,
                "brand_id": 201,
                "created_at": "2020-05-06T16:53:54.000000Z",
                "updated_at": "2020-05-06T16:53:54.000000Z"
            },
            {
                "id": 206,
                "drug_id": 54,
                "brand_id": 202,
                "created_at": "2020-05-06T16:53:57.000000Z",
                "updated_at": "2020-05-06T16:53:57.000000Z"
            },
            {
                "id": 207,
                "drug_id": 54,
                "brand_id": 203,
                "created_at": "2020-05-06T16:54:00.000000Z",
                "updated_at": "2020-05-06T16:54:00.000000Z"
            },
            {
                "id": 208,
                "drug_id": 54,
                "brand_id": 204,
                "created_at": "2020-05-06T16:54:02.000000Z",
                "updated_at": "2020-05-06T16:54:02.000000Z"
            },
            {
                "id": 209,
                "drug_id": 54,
                "brand_id": 205,
                "created_at": "2020-05-06T16:54:04.000000Z",
                "updated_at": "2020-05-06T16:54:04.000000Z"
            },
            {
                "id": 210,
                "drug_id": 54,
                "brand_id": 206,
                "created_at": "2020-05-06T16:54:07.000000Z",
                "updated_at": "2020-05-06T16:54:07.000000Z"
            },
            {
                "id": 211,
                "drug_id": 55,
                "brand_id": 207,
                "created_at": "2020-05-06T16:54:59.000000Z",
                "updated_at": "2020-05-06T16:54:59.000000Z"
            },
            {
                "id": 212,
                "drug_id": 55,
                "brand_id": 208,
                "created_at": "2020-05-06T16:55:03.000000Z",
                "updated_at": "2020-05-06T16:55:03.000000Z"
            },
            {
                "id": 213,
                "drug_id": 55,
                "brand_id": 209,
                "created_at": "2020-05-06T16:55:05.000000Z",
                "updated_at": "2020-05-06T16:55:05.000000Z"
            },
            {
                "id": 214,
                "drug_id": 55,
                "brand_id": 210,
                "created_at": "2020-05-06T16:55:07.000000Z",
                "updated_at": "2020-05-06T16:55:07.000000Z"
            },
            {
                "id": 215,
                "drug_id": 55,
                "brand_id": 211,
                "created_at": "2020-05-06T16:55:09.000000Z",
                "updated_at": "2020-05-06T16:55:09.000000Z"
            },
            {
                "id": 216,
                "drug_id": 55,
                "brand_id": 212,
                "created_at": "2020-05-06T16:55:12.000000Z",
                "updated_at": "2020-05-06T16:55:12.000000Z"
            },
            {
                "id": 217,
                "drug_id": 55,
                "brand_id": 213,
                "created_at": "2020-05-06T16:55:14.000000Z",
                "updated_at": "2020-05-06T16:55:14.000000Z"
            },
            {
                "id": 218,
                "drug_id": 55,
                "brand_id": 214,
                "created_at": "2020-05-06T16:55:17.000000Z",
                "updated_at": "2020-05-06T16:55:17.000000Z"
            },
            {
                "id": 219,
                "drug_id": 55,
                "brand_id": 215,
                "created_at": "2020-05-06T16:55:19.000000Z",
                "updated_at": "2020-05-06T16:55:19.000000Z"
            },
            {
                "id": 220,
                "drug_id": 55,
                "brand_id": 216,
                "created_at": "2020-05-06T16:55:22.000000Z",
                "updated_at": "2020-05-06T16:55:22.000000Z"
            },
            {
                "id": 221,
                "drug_id": 55,
                "brand_id": 217,
                "created_at": "2020-05-06T16:55:24.000000Z",
                "updated_at": "2020-05-06T16:55:24.000000Z"
            },
            {
                "id": 222,
                "drug_id": 55,
                "brand_id": 218,
                "created_at": "2020-05-06T16:55:27.000000Z",
                "updated_at": "2020-05-06T16:55:27.000000Z"
            },
            {
                "id": 223,
                "drug_id": 55,
                "brand_id": 219,
                "created_at": "2020-05-06T16:55:30.000000Z",
                "updated_at": "2020-05-06T16:55:30.000000Z"
            },
            {
                "id": 224,
                "drug_id": 55,
                "brand_id": 220,
                "created_at": "2020-05-06T16:55:33.000000Z",
                "updated_at": "2020-05-06T16:55:33.000000Z"
            },
            {
                "id": 225,
                "drug_id": 55,
                "brand_id": 221,
                "created_at": "2020-05-06T16:55:35.000000Z",
                "updated_at": "2020-05-06T16:55:35.000000Z"
            },
            {
                "id": 226,
                "drug_id": 56,
                "brand_id": 222,
                "created_at": "2020-05-06T16:56:27.000000Z",
                "updated_at": "2020-05-06T16:56:27.000000Z"
            },
            {
                "id": 227,
                "drug_id": 56,
                "brand_id": 222,
                "created_at": "2020-05-06T16:56:27.000000Z",
                "updated_at": "2020-05-06T16:56:27.000000Z"
            },
            {
                "id": 228,
                "drug_id": 56,
                "brand_id": 222,
                "created_at": "2020-05-06T16:56:27.000000Z",
                "updated_at": "2020-05-06T16:56:27.000000Z"
            },
            {
                "id": 232,
                "drug_id": 59,
                "brand_id": 226,
                "created_at": "2020-05-06T17:00:31.000000Z",
                "updated_at": "2020-05-06T17:00:31.000000Z"
            },
            {
                "id": 233,
                "drug_id": 59,
                "brand_id": 227,
                "created_at": "2020-05-06T17:00:33.000000Z",
                "updated_at": "2020-05-06T17:00:33.000000Z"
            },
            {
                "id": 239,
                "drug_id": 61,
                "brand_id": 233,
                "created_at": "2020-05-06T17:02:03.000000Z",
                "updated_at": "2020-05-06T17:02:03.000000Z"
            },
            {
                "id": 252,
                "drug_id": 64,
                "brand_id": 245,
                "created_at": "2020-05-06T17:08:52.000000Z",
                "updated_at": "2020-05-06T17:08:52.000000Z"
            },
            {
                "id": 253,
                "drug_id": 64,
                "brand_id": 246,
                "created_at": "2020-05-06T17:08:55.000000Z",
                "updated_at": "2020-05-06T17:08:55.000000Z"
            },
            {
                "id": 265,
                "drug_id": 67,
                "brand_id": 258,
                "created_at": "2020-05-06T17:14:53.000000Z",
                "updated_at": "2020-05-06T17:14:53.000000Z"
            },
            {
                "id": 266,
                "drug_id": 67,
                "brand_id": 259,
                "created_at": "2020-05-06T17:14:56.000000Z",
                "updated_at": "2020-05-06T17:14:56.000000Z"
            },
            {
                "id": 267,
                "drug_id": 67,
                "brand_id": 260,
                "created_at": "2020-05-06T17:14:58.000000Z",
                "updated_at": "2020-05-06T17:14:58.000000Z"
            },
            {
                "id": 268,
                "drug_id": 67,
                "brand_id": 261,
                "created_at": "2020-05-06T17:15:01.000000Z",
                "updated_at": "2020-05-06T17:15:01.000000Z"
            },
            {
                "id": 269,
                "drug_id": 67,
                "brand_id": 262,
                "created_at": "2020-05-06T17:15:03.000000Z",
                "updated_at": "2020-05-06T17:15:03.000000Z"
            },
            {
                "id": 270,
                "drug_id": 67,
                "brand_id": 263,
                "created_at": "2020-05-06T17:15:07.000000Z",
                "updated_at": "2020-05-06T17:15:07.000000Z"
            },
            {
                "id": 275,
                "drug_id": 69,
                "brand_id": 268,
                "created_at": "2020-05-06T17:16:52.000000Z",
                "updated_at": "2020-05-06T17:16:52.000000Z"
            },
            {
                "id": 276,
                "drug_id": 69,
                "brand_id": 269,
                "created_at": "2020-05-06T17:16:54.000000Z",
                "updated_at": "2020-05-06T17:16:54.000000Z"
            },
            {
                "id": 277,
                "drug_id": 69,
                "brand_id": 270,
                "created_at": "2020-05-06T17:16:57.000000Z",
                "updated_at": "2020-05-06T17:16:57.000000Z"
            },
            {
                "id": 278,
                "drug_id": 69,
                "brand_id": 271,
                "created_at": "2020-05-06T17:16:59.000000Z",
                "updated_at": "2020-05-06T17:16:59.000000Z"
            },
            {
                "id": 279,
                "drug_id": 69,
                "brand_id": 272,
                "created_at": "2020-05-06T17:17:01.000000Z",
                "updated_at": "2020-05-06T17:17:01.000000Z"
            },
            {
                "id": 280,
                "drug_id": 69,
                "brand_id": 273,
                "created_at": "2020-05-06T17:17:03.000000Z",
                "updated_at": "2020-05-06T17:17:03.000000Z"
            },
            {
                "id": 281,
                "drug_id": 69,
                "brand_id": 274,
                "created_at": "2020-05-06T17:17:07.000000Z",
                "updated_at": "2020-05-06T17:17:07.000000Z"
            },
            {
                "id": 282,
                "drug_id": 69,
                "brand_id": 275,
                "created_at": "2020-05-06T17:17:09.000000Z",
                "updated_at": "2020-05-06T17:17:09.000000Z"
            },
            {
                "id": 283,
                "drug_id": 69,
                "brand_id": 276,
                "created_at": "2020-05-06T17:17:11.000000Z",
                "updated_at": "2020-05-06T17:17:11.000000Z"
            },
            {
                "id": 284,
                "drug_id": 69,
                "brand_id": 277,
                "created_at": "2020-05-06T17:17:13.000000Z",
                "updated_at": "2020-05-06T17:17:13.000000Z"
            },
            {
                "id": 285,
                "drug_id": 69,
                "brand_id": 278,
                "created_at": "2020-05-06T17:17:16.000000Z",
                "updated_at": "2020-05-06T17:17:16.000000Z"
            },
            {
                "id": 286,
                "drug_id": 69,
                "brand_id": 279,
                "created_at": "2020-05-06T17:17:18.000000Z",
                "updated_at": "2020-05-06T17:17:18.000000Z"
            },
            {
                "id": 287,
                "drug_id": 69,
                "brand_id": 280,
                "created_at": "2020-05-06T17:17:21.000000Z",
                "updated_at": "2020-05-06T17:17:21.000000Z"
            },
            {
                "id": 288,
                "drug_id": 69,
                "brand_id": 281,
                "created_at": "2020-05-06T17:17:23.000000Z",
                "updated_at": "2020-05-06T17:17:23.000000Z"
            },
            {
                "id": 289,
                "drug_id": 69,
                "brand_id": 282,
                "created_at": "2020-05-06T17:17:25.000000Z",
                "updated_at": "2020-05-06T17:17:25.000000Z"
            },
            {
                "id": 290,
                "drug_id": 69,
                "brand_id": 283,
                "created_at": "2020-05-06T17:17:27.000000Z",
                "updated_at": "2020-05-06T17:17:27.000000Z"
            },
            {
                "id": 291,
                "drug_id": 69,
                "brand_id": 284,
                "created_at": "2020-05-06T17:17:30.000000Z",
                "updated_at": "2020-05-06T17:17:30.000000Z"
            },
            {
                "id": 292,
                "drug_id": 69,
                "brand_id": 285,
                "created_at": "2020-05-06T17:17:32.000000Z",
                "updated_at": "2020-05-06T17:17:32.000000Z"
            },
            {
                "id": 293,
                "drug_id": 69,
                "brand_id": 286,
                "created_at": "2020-05-06T17:17:35.000000Z",
                "updated_at": "2020-05-06T17:17:35.000000Z"
            },
            {
                "id": 294,
                "drug_id": 69,
                "brand_id": 287,
                "created_at": "2020-05-06T17:17:37.000000Z",
                "updated_at": "2020-05-06T17:17:37.000000Z"
            },
            {
                "id": 295,
                "drug_id": 69,
                "brand_id": 288,
                "created_at": "2020-05-06T17:17:39.000000Z",
                "updated_at": "2020-05-06T17:17:39.000000Z"
            },
            {
                "id": 296,
                "drug_id": 69,
                "brand_id": 289,
                "created_at": "2020-05-06T17:17:42.000000Z",
                "updated_at": "2020-05-06T17:17:42.000000Z"
            },
            {
                "id": 297,
                "drug_id": 69,
                "brand_id": 290,
                "created_at": "2020-05-06T17:17:44.000000Z",
                "updated_at": "2020-05-06T17:17:44.000000Z"
            },
            {
                "id": 298,
                "drug_id": 69,
                "brand_id": 291,
                "created_at": "2020-05-06T17:17:47.000000Z",
                "updated_at": "2020-05-06T17:17:47.000000Z"
            },
            {
                "id": 299,
                "drug_id": 69,
                "brand_id": 292,
                "created_at": "2020-05-06T17:17:49.000000Z",
                "updated_at": "2020-05-06T17:17:49.000000Z"
            },
            {
                "id": 300,
                "drug_id": 69,
                "brand_id": 293,
                "created_at": "2020-05-06T17:17:51.000000Z",
                "updated_at": "2020-05-06T17:17:51.000000Z"
            },
            {
                "id": 301,
                "drug_id": 69,
                "brand_id": 293,
                "created_at": "2020-05-06T17:17:51.000000Z",
                "updated_at": "2020-05-06T17:17:51.000000Z"
            },
            {
                "id": 302,
                "drug_id": 69,
                "brand_id": 294,
                "created_at": "2020-05-06T17:17:54.000000Z",
                "updated_at": "2020-05-06T17:17:54.000000Z"
            },
            {
                "id": 303,
                "drug_id": 69,
                "brand_id": 295,
                "created_at": "2020-05-06T17:17:56.000000Z",
                "updated_at": "2020-05-06T17:17:56.000000Z"
            },
            {
                "id": 304,
                "drug_id": 69,
                "brand_id": 296,
                "created_at": "2020-05-06T17:17:59.000000Z",
                "updated_at": "2020-05-06T17:17:59.000000Z"
            },
            {
                "id": 305,
                "drug_id": 69,
                "brand_id": 297,
                "created_at": "2020-05-06T17:18:01.000000Z",
                "updated_at": "2020-05-06T17:18:01.000000Z"
            },
            {
                "id": 306,
                "drug_id": 69,
                "brand_id": 297,
                "created_at": "2020-05-06T17:18:01.000000Z",
                "updated_at": "2020-05-06T17:18:01.000000Z"
            },
            {
                "id": 307,
                "drug_id": 69,
                "brand_id": 298,
                "created_at": "2020-05-06T17:18:03.000000Z",
                "updated_at": "2020-05-06T17:18:03.000000Z"
            },
            {
                "id": 308,
                "drug_id": 69,
                "brand_id": 299,
                "created_at": "2020-05-06T17:18:06.000000Z",
                "updated_at": "2020-05-06T17:18:06.000000Z"
            },
            {
                "id": 309,
                "drug_id": 69,
                "brand_id": 300,
                "created_at": "2020-05-06T17:18:08.000000Z",
                "updated_at": "2020-05-06T17:18:08.000000Z"
            },
            {
                "id": 310,
                "drug_id": 69,
                "brand_id": 301,
                "created_at": "2020-05-06T17:18:11.000000Z",
                "updated_at": "2020-05-06T17:18:11.000000Z"
            },
            {
                "id": 311,
                "drug_id": 69,
                "brand_id": 302,
                "created_at": "2020-05-06T17:18:14.000000Z",
                "updated_at": "2020-05-06T17:18:14.000000Z"
            },
            {
                "id": 312,
                "drug_id": 69,
                "brand_id": 302,
                "created_at": "2020-05-06T17:18:14.000000Z",
                "updated_at": "2020-05-06T17:18:14.000000Z"
            },
            {
                "id": 313,
                "drug_id": 69,
                "brand_id": 302,
                "created_at": "2020-05-06T17:18:14.000000Z",
                "updated_at": "2020-05-06T17:18:14.000000Z"
            },
            {
                "id": 314,
                "drug_id": 69,
                "brand_id": 303,
                "created_at": "2020-05-06T17:18:17.000000Z",
                "updated_at": "2020-05-06T17:18:17.000000Z"
            },
            {
                "id": 315,
                "drug_id": 69,
                "brand_id": 304,
                "created_at": "2020-05-06T17:18:19.000000Z",
                "updated_at": "2020-05-06T17:18:19.000000Z"
            },
            {
                "id": 316,
                "drug_id": 69,
                "brand_id": 305,
                "created_at": "2020-05-06T17:18:21.000000Z",
                "updated_at": "2020-05-06T17:18:21.000000Z"
            },
            {
                "id": 317,
                "drug_id": 69,
                "brand_id": 306,
                "created_at": "2020-05-06T17:18:24.000000Z",
                "updated_at": "2020-05-06T17:18:24.000000Z"
            },
            {
                "id": 318,
                "drug_id": 69,
                "brand_id": 307,
                "created_at": "2020-05-06T17:18:27.000000Z",
                "updated_at": "2020-05-06T17:18:27.000000Z"
            },
            {
                "id": 319,
                "drug_id": 69,
                "brand_id": 308,
                "created_at": "2020-05-06T17:18:29.000000Z",
                "updated_at": "2020-05-06T17:18:29.000000Z"
            },
            {
                "id": 320,
                "drug_id": 69,
                "brand_id": 309,
                "created_at": "2020-05-06T17:18:31.000000Z",
                "updated_at": "2020-05-06T17:18:31.000000Z"
            },
            {
                "id": 321,
                "drug_id": 69,
                "brand_id": 310,
                "created_at": "2020-05-06T17:18:34.000000Z",
                "updated_at": "2020-05-06T17:18:34.000000Z"
            },
            {
                "id": 322,
                "drug_id": 69,
                "brand_id": 311,
                "created_at": "2020-05-06T17:18:37.000000Z",
                "updated_at": "2020-05-06T17:18:37.000000Z"
            },
            {
                "id": 323,
                "drug_id": 69,
                "brand_id": 312,
                "created_at": "2020-05-06T17:18:39.000000Z",
                "updated_at": "2020-05-06T17:18:39.000000Z"
            },
            {
                "id": 337,
                "drug_id": 71,
                "brand_id": 324,
                "created_at": "2020-05-06T17:20:56.000000Z",
                "updated_at": "2020-05-06T17:20:56.000000Z"
            },
            {
                "id": 338,
                "drug_id": 72,
                "brand_id": 325,
                "created_at": "2020-05-06T17:22:49.000000Z",
                "updated_at": "2020-05-06T17:22:49.000000Z"
            },
            {
                "id": 339,
                "drug_id": 72,
                "brand_id": 325,
                "created_at": "2020-05-06T17:22:49.000000Z",
                "updated_at": "2020-05-06T17:22:49.000000Z"
            },
            {
                "id": 340,
                "drug_id": 72,
                "brand_id": 326,
                "created_at": "2020-05-06T17:22:52.000000Z",
                "updated_at": "2020-05-06T17:22:52.000000Z"
            },
            {
                "id": 341,
                "drug_id": 72,
                "brand_id": 326,
                "created_at": "2020-05-06T17:22:52.000000Z",
                "updated_at": "2020-05-06T17:22:52.000000Z"
            },
            {
                "id": 342,
                "drug_id": 72,
                "brand_id": 327,
                "created_at": "2020-05-06T17:22:55.000000Z",
                "updated_at": "2020-05-06T17:22:55.000000Z"
            },
            {
                "id": 343,
                "drug_id": 72,
                "brand_id": 327,
                "created_at": "2020-05-06T17:22:55.000000Z",
                "updated_at": "2020-05-06T17:22:55.000000Z"
            },
            {
                "id": 344,
                "drug_id": 72,
                "brand_id": 327,
                "created_at": "2020-05-06T17:22:55.000000Z",
                "updated_at": "2020-05-06T17:22:55.000000Z"
            },
            {
                "id": 345,
                "drug_id": 72,
                "brand_id": 328,
                "created_at": "2020-05-06T17:22:58.000000Z",
                "updated_at": "2020-05-06T17:22:58.000000Z"
            },
            {
                "id": 346,
                "drug_id": 72,
                "brand_id": 329,
                "created_at": "2020-05-06T17:23:00.000000Z",
                "updated_at": "2020-05-06T17:23:00.000000Z"
            },
            {
                "id": 347,
                "drug_id": 72,
                "brand_id": 330,
                "created_at": "2020-05-06T17:23:02.000000Z",
                "updated_at": "2020-05-06T17:23:02.000000Z"
            },
            {
                "id": 348,
                "drug_id": 72,
                "brand_id": 331,
                "created_at": "2020-05-06T17:23:05.000000Z",
                "updated_at": "2020-05-06T17:23:05.000000Z"
            },
            {
                "id": 349,
                "drug_id": 73,
                "brand_id": 332,
                "created_at": "2020-05-06T17:23:53.000000Z",
                "updated_at": "2020-05-06T17:23:53.000000Z"
            },
            {
                "id": 350,
                "drug_id": 73,
                "brand_id": 333,
                "created_at": "2020-05-06T17:23:55.000000Z",
                "updated_at": "2020-05-06T17:23:55.000000Z"
            },
            {
                "id": 351,
                "drug_id": 73,
                "brand_id": 334,
                "created_at": "2020-05-06T17:23:58.000000Z",
                "updated_at": "2020-05-06T17:23:58.000000Z"
            },
            {
                "id": 352,
                "drug_id": 73,
                "brand_id": 335,
                "created_at": "2020-05-06T17:24:00.000000Z",
                "updated_at": "2020-05-06T17:24:00.000000Z"
            },
            {
                "id": 353,
                "drug_id": 73,
                "brand_id": 336,
                "created_at": "2020-05-06T17:24:02.000000Z",
                "updated_at": "2020-05-06T17:24:02.000000Z"
            },
            {
                "id": 354,
                "drug_id": 73,
                "brand_id": 337,
                "created_at": "2020-05-06T17:24:05.000000Z",
                "updated_at": "2020-05-06T17:24:05.000000Z"
            },
            {
                "id": 358,
                "drug_id": 77,
                "brand_id": 341,
                "created_at": "2020-05-06T17:28:57.000000Z",
                "updated_at": "2020-05-06T17:28:57.000000Z"
            },
            {
                "id": 359,
                "drug_id": 77,
                "brand_id": 342,
                "created_at": "2020-05-06T17:28:59.000000Z",
                "updated_at": "2020-05-06T17:28:59.000000Z"
            },
            {
                "id": 372,
                "drug_id": 80,
                "brand_id": 355,
                "created_at": "2020-05-06T17:33:07.000000Z",
                "updated_at": "2020-05-06T17:33:07.000000Z"
            },
            {
                "id": 373,
                "drug_id": 80,
                "brand_id": 356,
                "created_at": "2020-05-06T17:33:10.000000Z",
                "updated_at": "2020-05-06T17:33:10.000000Z"
            },
            {
                "id": 374,
                "drug_id": 81,
                "brand_id": 357,
                "created_at": "2020-05-06T17:33:39.000000Z",
                "updated_at": "2020-05-06T17:33:39.000000Z"
            },
            {
                "id": 375,
                "drug_id": 82,
                "brand_id": 358,
                "created_at": "2020-05-06T17:34:14.000000Z",
                "updated_at": "2020-05-06T17:34:14.000000Z"
            },
            {
                "id": 376,
                "drug_id": 82,
                "brand_id": 359,
                "created_at": "2020-05-06T17:34:16.000000Z",
                "updated_at": "2020-05-06T17:34:16.000000Z"
            },
            {
                "id": 377,
                "drug_id": 82,
                "brand_id": 360,
                "created_at": "2020-05-06T17:34:20.000000Z",
                "updated_at": "2020-05-06T17:34:20.000000Z"
            },
            {
                "id": 378,
                "drug_id": 82,
                "brand_id": 361,
                "created_at": "2020-05-06T17:34:22.000000Z",
                "updated_at": "2020-05-06T17:34:22.000000Z"
            },
            {
                "id": 379,
                "drug_id": 82,
                "brand_id": 362,
                "created_at": "2020-05-06T17:34:24.000000Z",
                "updated_at": "2020-05-06T17:34:24.000000Z"
            },
            {
                "id": 385,
                "drug_id": 86,
                "brand_id": 368,
                "created_at": "2020-05-06T17:38:11.000000Z",
                "updated_at": "2020-05-06T17:38:11.000000Z"
            },
            {
                "id": 386,
                "drug_id": 87,
                "brand_id": 369,
                "created_at": "2020-05-06T17:39:05.000000Z",
                "updated_at": "2020-05-06T17:39:05.000000Z"
            },
            {
                "id": 387,
                "drug_id": 88,
                "brand_id": 370,
                "created_at": "2020-05-06T17:39:40.000000Z",
                "updated_at": "2020-05-06T17:39:40.000000Z"
            },
            {
                "id": 388,
                "drug_id": 89,
                "brand_id": 371,
                "created_at": "2020-05-06T17:40:15.000000Z",
                "updated_at": "2020-05-06T17:40:15.000000Z"
            },
            {
                "id": 389,
                "drug_id": 90,
                "brand_id": 372,
                "created_at": "2020-05-06T17:41:01.000000Z",
                "updated_at": "2020-05-06T17:41:01.000000Z"
            },
            {
                "id": 395,
                "drug_id": 94,
                "brand_id": 378,
                "created_at": "2020-05-06T17:44:31.000000Z",
                "updated_at": "2020-05-06T17:44:31.000000Z"
            },
            {
                "id": 396,
                "drug_id": 94,
                "brand_id": 379,
                "created_at": "2020-05-06T17:44:33.000000Z",
                "updated_at": "2020-05-06T17:44:33.000000Z"
            },
            {
                "id": 397,
                "drug_id": 94,
                "brand_id": 380,
                "created_at": "2020-05-06T17:44:36.000000Z",
                "updated_at": "2020-05-06T17:44:36.000000Z"
            },
            {
                "id": 398,
                "drug_id": 94,
                "brand_id": 381,
                "created_at": "2020-05-06T17:44:38.000000Z",
                "updated_at": "2020-05-06T17:44:38.000000Z"
            },
            {
                "id": 399,
                "drug_id": 94,
                "brand_id": 382,
                "created_at": "2020-05-06T17:44:41.000000Z",
                "updated_at": "2020-05-06T17:44:41.000000Z"
            },
            {
                "id": 400,
                "drug_id": 94,
                "brand_id": 383,
                "created_at": "2020-05-06T17:44:43.000000Z",
                "updated_at": "2020-05-06T17:44:43.000000Z"
            },
            {
                "id": 401,
                "drug_id": 95,
                "brand_id": 384,
                "created_at": "2020-05-06T17:45:14.000000Z",
                "updated_at": "2020-05-06T17:45:14.000000Z"
            },
            {
                "id": 402,
                "drug_id": 95,
                "brand_id": 385,
                "created_at": "2020-05-06T17:45:16.000000Z",
                "updated_at": "2020-05-06T17:45:16.000000Z"
            },
            {
                "id": 403,
                "drug_id": 95,
                "brand_id": 386,
                "created_at": "2020-05-06T17:45:19.000000Z",
                "updated_at": "2020-05-06T17:45:19.000000Z"
            },
            {
                "id": 404,
                "drug_id": 96,
                "brand_id": 387,
                "created_at": "2020-05-06T17:46:17.000000Z",
                "updated_at": "2020-05-06T17:46:17.000000Z"
            },
            {
                "id": 405,
                "drug_id": 97,
                "brand_id": 388,
                "created_at": "2020-05-06T17:47:04.000000Z",
                "updated_at": "2020-05-06T17:47:04.000000Z"
            },
            {
                "id": 406,
                "drug_id": 97,
                "brand_id": 389,
                "created_at": "2020-05-06T17:47:06.000000Z",
                "updated_at": "2020-05-06T17:47:06.000000Z"
            },
            {
                "id": 407,
                "drug_id": 97,
                "brand_id": 390,
                "created_at": "2020-05-06T17:47:09.000000Z",
                "updated_at": "2020-05-06T17:47:09.000000Z"
            },
            {
                "id": 417,
                "drug_id": 99,
                "brand_id": 400,
                "created_at": "2020-05-06T17:48:59.000000Z",
                "updated_at": "2020-05-06T17:48:59.000000Z"
            },
            {
                "id": 418,
                "drug_id": 99,
                "brand_id": 401,
                "created_at": "2020-05-06T17:49:01.000000Z",
                "updated_at": "2020-05-06T17:49:01.000000Z"
            },
            {
                "id": 431,
                "drug_id": 101,
                "brand_id": 414,
                "created_at": "2020-05-06T17:50:43.000000Z",
                "updated_at": "2020-05-06T17:50:43.000000Z"
            },
            {
                "id": 432,
                "drug_id": 101,
                "brand_id": 415,
                "created_at": "2020-05-06T17:50:45.000000Z",
                "updated_at": "2020-05-06T17:50:45.000000Z"
            },
            {
                "id": 434,
                "drug_id": 103,
                "brand_id": 417,
                "created_at": "2020-05-06T17:53:05.000000Z",
                "updated_at": "2020-05-06T17:53:05.000000Z"
            },
            {
                "id": 435,
                "drug_id": 103,
                "brand_id": 418,
                "created_at": "2020-05-06T17:53:08.000000Z",
                "updated_at": "2020-05-06T17:53:08.000000Z"
            },
            {
                "id": 436,
                "drug_id": 103,
                "brand_id": 419,
                "created_at": "2020-05-06T17:53:10.000000Z",
                "updated_at": "2020-05-06T17:53:10.000000Z"
            },
            {
                "id": 437,
                "drug_id": 103,
                "brand_id": 420,
                "created_at": "2020-05-06T17:53:14.000000Z",
                "updated_at": "2020-05-06T17:53:14.000000Z"
            },
            {
                "id": 438,
                "drug_id": 103,
                "brand_id": 421,
                "created_at": "2020-05-06T17:53:16.000000Z",
                "updated_at": "2020-05-06T17:53:16.000000Z"
            },
            {
                "id": 439,
                "drug_id": 103,
                "brand_id": 422,
                "created_at": "2020-05-06T17:53:19.000000Z",
                "updated_at": "2020-05-06T17:53:19.000000Z"
            },
            {
                "id": 440,
                "drug_id": 103,
                "brand_id": 423,
                "created_at": "2020-05-06T17:53:21.000000Z",
                "updated_at": "2020-05-06T17:53:21.000000Z"
            },
            {
                "id": 441,
                "drug_id": 103,
                "brand_id": 424,
                "created_at": "2020-05-06T17:53:23.000000Z",
                "updated_at": "2020-05-06T17:53:23.000000Z"
            },
            {
                "id": 442,
                "drug_id": 103,
                "brand_id": 425,
                "created_at": "2020-05-06T17:53:26.000000Z",
                "updated_at": "2020-05-06T17:53:26.000000Z"
            },
            {
                "id": 443,
                "drug_id": 103,
                "brand_id": 426,
                "created_at": "2020-05-06T17:53:28.000000Z",
                "updated_at": "2020-05-06T17:53:28.000000Z"
            },
            {
                "id": 444,
                "drug_id": 103,
                "brand_id": 427,
                "created_at": "2020-05-06T17:53:30.000000Z",
                "updated_at": "2020-05-06T17:53:30.000000Z"
            },
            {
                "id": 445,
                "drug_id": 103,
                "brand_id": 428,
                "created_at": "2020-05-06T17:53:33.000000Z",
                "updated_at": "2020-05-06T17:53:33.000000Z"
            },
            {
                "id": 446,
                "drug_id": 103,
                "brand_id": 429,
                "created_at": "2020-05-06T17:53:35.000000Z",
                "updated_at": "2020-05-06T17:53:35.000000Z"
            },
            {
                "id": 447,
                "drug_id": 103,
                "brand_id": 430,
                "created_at": "2020-05-06T17:53:38.000000Z",
                "updated_at": "2020-05-06T17:53:38.000000Z"
            },
            {
                "id": 448,
                "drug_id": 103,
                "brand_id": 431,
                "created_at": "2020-05-06T17:53:40.000000Z",
                "updated_at": "2020-05-06T17:53:40.000000Z"
            },
            {
                "id": 449,
                "drug_id": 103,
                "brand_id": 432,
                "created_at": "2020-05-06T17:53:43.000000Z",
                "updated_at": "2020-05-06T17:53:43.000000Z"
            },
            {
                "id": 450,
                "drug_id": 103,
                "brand_id": 433,
                "created_at": "2020-05-06T17:53:46.000000Z",
                "updated_at": "2020-05-06T17:53:46.000000Z"
            },
            {
                "id": 451,
                "drug_id": 104,
                "brand_id": 434,
                "created_at": "2020-05-06T17:54:54.000000Z",
                "updated_at": "2020-05-06T17:54:54.000000Z"
            },
            {
                "id": 452,
                "drug_id": 104,
                "brand_id": 435,
                "created_at": "2020-05-06T17:54:56.000000Z",
                "updated_at": "2020-05-06T17:54:56.000000Z"
            },
            {
                "id": 473,
                "drug_id": 106,
                "brand_id": 456,
                "created_at": "2020-05-06T17:57:21.000000Z",
                "updated_at": "2020-05-06T17:57:21.000000Z"
            },
            {
                "id": 474,
                "drug_id": 106,
                "brand_id": 457,
                "created_at": "2020-05-06T17:57:24.000000Z",
                "updated_at": "2020-05-06T17:57:24.000000Z"
            },
            {
                "id": 475,
                "drug_id": 107,
                "brand_id": 458,
                "created_at": "2020-05-06T17:58:06.000000Z",
                "updated_at": "2020-05-06T17:58:06.000000Z"
            },
            {
                "id": 480,
                "drug_id": 109,
                "brand_id": 463,
                "created_at": "2020-05-06T18:00:29.000000Z",
                "updated_at": "2020-05-06T18:00:29.000000Z"
            },
            {
                "id": 481,
                "drug_id": 109,
                "brand_id": 464,
                "created_at": "2020-05-06T18:00:32.000000Z",
                "updated_at": "2020-05-06T18:00:32.000000Z"
            },
            {
                "id": 482,
                "drug_id": 109,
                "brand_id": 465,
                "created_at": "2020-05-06T18:00:34.000000Z",
                "updated_at": "2020-05-06T18:00:34.000000Z"
            },
            {
                "id": 483,
                "drug_id": 109,
                "brand_id": 466,
                "created_at": "2020-05-06T18:00:37.000000Z",
                "updated_at": "2020-05-06T18:00:37.000000Z"
            },
            {
                "id": 484,
                "drug_id": 109,
                "brand_id": 467,
                "created_at": "2020-05-06T18:00:40.000000Z",
                "updated_at": "2020-05-06T18:00:40.000000Z"
            },
            {
                "id": 485,
                "drug_id": 109,
                "brand_id": 468,
                "created_at": "2020-05-06T18:00:42.000000Z",
                "updated_at": "2020-05-06T18:00:42.000000Z"
            },
            {
                "id": 486,
                "drug_id": 109,
                "brand_id": 469,
                "created_at": "2020-05-06T18:00:44.000000Z",
                "updated_at": "2020-05-06T18:00:44.000000Z"
            },
            {
                "id": 498,
                "drug_id": 115,
                "brand_id": 481,
                "created_at": "2020-05-06T18:07:16.000000Z",
                "updated_at": "2020-05-06T18:07:16.000000Z"
            },
            {
                "id": 499,
                "drug_id": 115,
                "brand_id": 482,
                "created_at": "2020-05-06T18:07:18.000000Z",
                "updated_at": "2020-05-06T18:07:18.000000Z"
            },
            {
                "id": 500,
                "drug_id": 115,
                "brand_id": 483,
                "created_at": "2020-05-06T18:07:21.000000Z",
                "updated_at": "2020-05-06T18:07:21.000000Z"
            },
            {
                "id": 501,
                "drug_id": 115,
                "brand_id": 484,
                "created_at": "2020-05-06T18:07:23.000000Z",
                "updated_at": "2020-05-06T18:07:23.000000Z"
            },
            {
                "id": 502,
                "drug_id": 115,
                "brand_id": 485,
                "created_at": "2020-05-06T18:07:26.000000Z",
                "updated_at": "2020-05-06T18:07:26.000000Z"
            },
            {
                "id": 503,
                "drug_id": 116,
                "brand_id": 486,
                "created_at": "2020-05-06T18:09:37.000000Z",
                "updated_at": "2020-05-06T18:09:37.000000Z"
            },
            {
                "id": 504,
                "drug_id": 116,
                "brand_id": 487,
                "created_at": "2020-05-06T18:09:39.000000Z",
                "updated_at": "2020-05-06T18:09:39.000000Z"
            },
            {
                "id": 505,
                "drug_id": 116,
                "brand_id": 488,
                "created_at": "2020-05-06T18:09:41.000000Z",
                "updated_at": "2020-05-06T18:09:41.000000Z"
            },
            {
                "id": 506,
                "drug_id": 116,
                "brand_id": 489,
                "created_at": "2020-05-06T18:09:44.000000Z",
                "updated_at": "2020-05-06T18:09:44.000000Z"
            },
            {
                "id": 507,
                "drug_id": 116,
                "brand_id": 490,
                "created_at": "2020-05-06T18:09:47.000000Z",
                "updated_at": "2020-05-06T18:09:47.000000Z"
            },
            {
                "id": 508,
                "drug_id": 116,
                "brand_id": 491,
                "created_at": "2020-05-06T18:09:49.000000Z",
                "updated_at": "2020-05-06T18:09:49.000000Z"
            },
            {
                "id": 509,
                "drug_id": 116,
                "brand_id": 492,
                "created_at": "2020-05-06T18:09:51.000000Z",
                "updated_at": "2020-05-06T18:09:51.000000Z"
            },
            {
                "id": 510,
                "drug_id": 116,
                "brand_id": 493,
                "created_at": "2020-05-06T18:09:54.000000Z",
                "updated_at": "2020-05-06T18:09:54.000000Z"
            },
            {
                "id": 511,
                "drug_id": 116,
                "brand_id": 494,
                "created_at": "2020-05-06T18:09:56.000000Z",
                "updated_at": "2020-05-06T18:09:56.000000Z"
            },
            {
                "id": 512,
                "drug_id": 116,
                "brand_id": 495,
                "created_at": "2020-05-06T18:09:59.000000Z",
                "updated_at": "2020-05-06T18:09:59.000000Z"
            },
            {
                "id": 513,
                "drug_id": 116,
                "brand_id": 496,
                "created_at": "2020-05-06T18:10:01.000000Z",
                "updated_at": "2020-05-06T18:10:01.000000Z"
            },
            {
                "id": 514,
                "drug_id": 116,
                "brand_id": 497,
                "created_at": "2020-05-06T18:10:04.000000Z",
                "updated_at": "2020-05-06T18:10:04.000000Z"
            },
            {
                "id": 515,
                "drug_id": 116,
                "brand_id": 498,
                "created_at": "2020-05-06T18:10:07.000000Z",
                "updated_at": "2020-05-06T18:10:07.000000Z"
            },
            {
                "id": 516,
                "drug_id": 116,
                "brand_id": 499,
                "created_at": "2020-05-06T18:10:09.000000Z",
                "updated_at": "2020-05-06T18:10:09.000000Z"
            },
            {
                "id": 517,
                "drug_id": 116,
                "brand_id": 500,
                "created_at": "2020-05-06T18:10:11.000000Z",
                "updated_at": "2020-05-06T18:10:11.000000Z"
            },
            {
                "id": 518,
                "drug_id": 116,
                "brand_id": 501,
                "created_at": "2020-05-06T18:10:14.000000Z",
                "updated_at": "2020-05-06T18:10:14.000000Z"
            },
            {
                "id": 519,
                "drug_id": 117,
                "brand_id": 502,
                "created_at": "2020-05-06T18:10:56.000000Z",
                "updated_at": "2020-05-06T18:10:56.000000Z"
            },
            {
                "id": 520,
                "drug_id": 118,
                "brand_id": 503,
                "created_at": "2020-05-06T18:13:14.000000Z",
                "updated_at": "2020-05-06T18:13:14.000000Z"
            },
            {
                "id": 521,
                "drug_id": 118,
                "brand_id": 504,
                "created_at": "2020-05-06T18:13:17.000000Z",
                "updated_at": "2020-05-06T18:13:17.000000Z"
            },
            {
                "id": 522,
                "drug_id": 119,
                "brand_id": 505,
                "created_at": "2020-05-06T18:13:45.000000Z",
                "updated_at": "2020-05-06T18:13:45.000000Z"
            },
            {
                "id": 523,
                "drug_id": 119,
                "brand_id": 506,
                "created_at": "2020-05-06T18:13:47.000000Z",
                "updated_at": "2020-05-06T18:13:47.000000Z"
            },
            {
                "id": 524,
                "drug_id": 119,
                "brand_id": 507,
                "created_at": "2020-05-06T18:13:49.000000Z",
                "updated_at": "2020-05-06T18:13:49.000000Z"
            },
            {
                "id": 527,
                "drug_id": 121,
                "brand_id": 510,
                "created_at": "2020-05-06T18:15:33.000000Z",
                "updated_at": "2020-05-06T18:15:33.000000Z"
            },
            {
                "id": 528,
                "drug_id": 121,
                "brand_id": 511,
                "created_at": "2020-05-06T18:15:35.000000Z",
                "updated_at": "2020-05-06T18:15:35.000000Z"
            },
            {
                "id": 529,
                "drug_id": 121,
                "brand_id": 512,
                "created_at": "2020-05-06T18:15:38.000000Z",
                "updated_at": "2020-05-06T18:15:38.000000Z"
            },
            {
                "id": 530,
                "drug_id": 121,
                "brand_id": 513,
                "created_at": "2020-05-06T18:15:40.000000Z",
                "updated_at": "2020-05-06T18:15:40.000000Z"
            },
            {
                "id": 590,
                "drug_id": 129,
                "brand_id": 569,
                "created_at": "2020-05-06T18:28:51.000000Z",
                "updated_at": "2020-05-06T18:28:51.000000Z"
            },
            {
                "id": 598,
                "drug_id": 133,
                "brand_id": 577,
                "created_at": "2020-05-06T18:33:46.000000Z",
                "updated_at": "2020-05-06T18:33:46.000000Z"
            },
            {
                "id": 599,
                "drug_id": 134,
                "brand_id": 578,
                "created_at": "2020-05-06T18:34:14.000000Z",
                "updated_at": "2020-05-06T18:34:14.000000Z"
            },
            {
                "id": 601,
                "drug_id": 136,
                "brand_id": 580,
                "created_at": "2020-05-06T18:35:20.000000Z",
                "updated_at": "2020-05-06T18:35:20.000000Z"
            },
            {
                "id": 602,
                "drug_id": 137,
                "brand_id": 581,
                "created_at": "2020-05-06T18:36:02.000000Z",
                "updated_at": "2020-05-06T18:36:02.000000Z"
            },
            {
                "id": 603,
                "drug_id": 138,
                "brand_id": 582,
                "created_at": "2020-05-06T18:37:07.000000Z",
                "updated_at": "2020-05-06T18:37:07.000000Z"
            },
            {
                "id": 648,
                "drug_id": 144,
                "brand_id": 625,
                "created_at": "2020-05-06T18:49:16.000000Z",
                "updated_at": "2020-05-06T18:49:16.000000Z"
            },
            {
                "id": 649,
                "drug_id": 144,
                "brand_id": 626,
                "created_at": "2020-05-06T18:49:18.000000Z",
                "updated_at": "2020-05-06T18:49:18.000000Z"
            },
            {
                "id": 650,
                "drug_id": 144,
                "brand_id": 627,
                "created_at": "2020-05-06T18:49:20.000000Z",
                "updated_at": "2020-05-06T18:49:20.000000Z"
            },
            {
                "id": 651,
                "drug_id": 145,
                "brand_id": 628,
                "created_at": "2020-05-06T18:50:03.000000Z",
                "updated_at": "2020-05-06T18:50:03.000000Z"
            },
            {
                "id": 652,
                "drug_id": 145,
                "brand_id": 629,
                "created_at": "2020-05-06T18:50:06.000000Z",
                "updated_at": "2020-05-06T18:50:06.000000Z"
            },
            {
                "id": 653,
                "drug_id": 145,
                "brand_id": 630,
                "created_at": "2020-05-06T18:50:08.000000Z",
                "updated_at": "2020-05-06T18:50:08.000000Z"
            },
            {
                "id": 654,
                "drug_id": 146,
                "brand_id": 631,
                "created_at": "2020-05-06T18:50:40.000000Z",
                "updated_at": "2020-05-06T18:50:40.000000Z"
            },
            {
                "id": 655,
                "drug_id": 146,
                "brand_id": 632,
                "created_at": "2020-05-06T18:50:43.000000Z",
                "updated_at": "2020-05-06T18:50:43.000000Z"
            },
            {
                "id": 656,
                "drug_id": 146,
                "brand_id": 633,
                "created_at": "2020-05-06T18:50:45.000000Z",
                "updated_at": "2020-05-06T18:50:45.000000Z"
            },
            {
                "id": 657,
                "drug_id": 146,
                "brand_id": 634,
                "created_at": "2020-05-06T18:50:47.000000Z",
                "updated_at": "2020-05-06T18:50:47.000000Z"
            },
            {
                "id": 658,
                "drug_id": 146,
                "brand_id": 635,
                "created_at": "2020-05-06T18:50:50.000000Z",
                "updated_at": "2020-05-06T18:50:50.000000Z"
            },
            {
                "id": 659,
                "drug_id": 146,
                "brand_id": 636,
                "created_at": "2020-05-06T18:50:52.000000Z",
                "updated_at": "2020-05-06T18:50:52.000000Z"
            },
            {
                "id": 660,
                "drug_id": 146,
                "brand_id": 637,
                "created_at": "2020-05-06T18:50:55.000000Z",
                "updated_at": "2020-05-06T18:50:55.000000Z"
            },
            {
                "id": 661,
                "drug_id": 146,
                "brand_id": 638,
                "created_at": "2020-05-06T18:50:57.000000Z",
                "updated_at": "2020-05-06T18:50:57.000000Z"
            },
            {
                "id": 662,
                "drug_id": 146,
                "brand_id": 639,
                "created_at": "2020-05-06T18:50:59.000000Z",
                "updated_at": "2020-05-06T18:50:59.000000Z"
            },
            {
                "id": 663,
                "drug_id": 146,
                "brand_id": 640,
                "created_at": "2020-05-06T18:51:02.000000Z",
                "updated_at": "2020-05-06T18:51:02.000000Z"
            },
            {
                "id": 664,
                "drug_id": 146,
                "brand_id": 641,
                "created_at": "2020-05-06T18:51:04.000000Z",
                "updated_at": "2020-05-06T18:51:04.000000Z"
            },
            {
                "id": 665,
                "drug_id": 146,
                "brand_id": 642,
                "created_at": "2020-05-06T18:51:06.000000Z",
                "updated_at": "2020-05-06T18:51:06.000000Z"
            },
            {
                "id": 666,
                "drug_id": 146,
                "brand_id": 643,
                "created_at": "2020-05-06T18:51:09.000000Z",
                "updated_at": "2020-05-06T18:51:09.000000Z"
            },
            {
                "id": 667,
                "drug_id": 146,
                "brand_id": 644,
                "created_at": "2020-05-06T18:51:11.000000Z",
                "updated_at": "2020-05-06T18:51:11.000000Z"
            },
            {
                "id": 668,
                "drug_id": 146,
                "brand_id": 645,
                "created_at": "2020-05-06T18:51:13.000000Z",
                "updated_at": "2020-05-06T18:51:13.000000Z"
            },
            {
                "id": 669,
                "drug_id": 146,
                "brand_id": 646,
                "created_at": "2020-05-06T18:51:15.000000Z",
                "updated_at": "2020-05-06T18:51:15.000000Z"
            },
            {
                "id": 670,
                "drug_id": 146,
                "brand_id": 647,
                "created_at": "2020-05-06T18:51:18.000000Z",
                "updated_at": "2020-05-06T18:51:18.000000Z"
            },
            {
                "id": 671,
                "drug_id": 146,
                "brand_id": 648,
                "created_at": "2020-05-06T18:51:20.000000Z",
                "updated_at": "2020-05-06T18:51:20.000000Z"
            },
            {
                "id": 672,
                "drug_id": 146,
                "brand_id": 649,
                "created_at": "2020-05-06T18:51:22.000000Z",
                "updated_at": "2020-05-06T18:51:22.000000Z"
            },
            {
                "id": 673,
                "drug_id": 146,
                "brand_id": 650,
                "created_at": "2020-05-06T18:51:25.000000Z",
                "updated_at": "2020-05-06T18:51:25.000000Z"
            },
            {
                "id": 674,
                "drug_id": 146,
                "brand_id": 651,
                "created_at": "2020-05-06T18:51:27.000000Z",
                "updated_at": "2020-05-06T18:51:27.000000Z"
            },
            {
                "id": 675,
                "drug_id": 146,
                "brand_id": 652,
                "created_at": "2020-05-06T18:51:29.000000Z",
                "updated_at": "2020-05-06T18:51:29.000000Z"
            },
            {
                "id": 676,
                "drug_id": 146,
                "brand_id": 653,
                "created_at": "2020-05-06T18:51:31.000000Z",
                "updated_at": "2020-05-06T18:51:31.000000Z"
            },
            {
                "id": 677,
                "drug_id": 146,
                "brand_id": 654,
                "created_at": "2020-05-06T18:51:34.000000Z",
                "updated_at": "2020-05-06T18:51:34.000000Z"
            },
            {
                "id": 678,
                "drug_id": 146,
                "brand_id": 655,
                "created_at": "2020-05-06T18:51:36.000000Z",
                "updated_at": "2020-05-06T18:51:36.000000Z"
            },
            {
                "id": 679,
                "drug_id": 146,
                "brand_id": 656,
                "created_at": "2020-05-06T18:51:38.000000Z",
                "updated_at": "2020-05-06T18:51:38.000000Z"
            },
            {
                "id": 680,
                "drug_id": 146,
                "brand_id": 657,
                "created_at": "2020-05-06T18:51:41.000000Z",
                "updated_at": "2020-05-06T18:51:41.000000Z"
            },
            {
                "id": 681,
                "drug_id": 146,
                "brand_id": 658,
                "created_at": "2020-05-06T18:51:43.000000Z",
                "updated_at": "2020-05-06T18:51:43.000000Z"
            },
            {
                "id": 682,
                "drug_id": 146,
                "brand_id": 659,
                "created_at": "2020-05-06T18:51:45.000000Z",
                "updated_at": "2020-05-06T18:51:45.000000Z"
            },
            {
                "id": 683,
                "drug_id": 146,
                "brand_id": 660,
                "created_at": "2020-05-06T18:51:47.000000Z",
                "updated_at": "2020-05-06T18:51:47.000000Z"
            },
            {
                "id": 684,
                "drug_id": 146,
                "brand_id": 661,
                "created_at": "2020-05-06T18:51:50.000000Z",
                "updated_at": "2020-05-06T18:51:50.000000Z"
            },
            {
                "id": 685,
                "drug_id": 146,
                "brand_id": 662,
                "created_at": "2020-05-06T18:51:52.000000Z",
                "updated_at": "2020-05-06T18:51:52.000000Z"
            },
            {
                "id": 686,
                "drug_id": 146,
                "brand_id": 663,
                "created_at": "2020-05-06T18:51:56.000000Z",
                "updated_at": "2020-05-06T18:51:56.000000Z"
            },
            {
                "id": 687,
                "drug_id": 146,
                "brand_id": 664,
                "created_at": "2020-05-06T18:51:58.000000Z",
                "updated_at": "2020-05-06T18:51:58.000000Z"
            },
            {
                "id": 688,
                "drug_id": 146,
                "brand_id": 665,
                "created_at": "2020-05-06T18:52:00.000000Z",
                "updated_at": "2020-05-06T18:52:00.000000Z"
            },
            {
                "id": 689,
                "drug_id": 146,
                "brand_id": 666,
                "created_at": "2020-05-06T18:52:03.000000Z",
                "updated_at": "2020-05-06T18:52:03.000000Z"
            },
            {
                "id": 690,
                "drug_id": 146,
                "brand_id": 667,
                "created_at": "2020-05-06T18:52:06.000000Z",
                "updated_at": "2020-05-06T18:52:06.000000Z"
            },
            {
                "id": 691,
                "drug_id": 146,
                "brand_id": 668,
                "created_at": "2020-05-06T18:52:08.000000Z",
                "updated_at": "2020-05-06T18:52:08.000000Z"
            },
            {
                "id": 692,
                "drug_id": 146,
                "brand_id": 669,
                "created_at": "2020-05-06T18:52:10.000000Z",
                "updated_at": "2020-05-06T18:52:10.000000Z"
            },
            {
                "id": 693,
                "drug_id": 146,
                "brand_id": 670,
                "created_at": "2020-05-06T18:52:13.000000Z",
                "updated_at": "2020-05-06T18:52:13.000000Z"
            },
            {
                "id": 694,
                "drug_id": 146,
                "brand_id": 671,
                "created_at": "2020-05-06T18:52:15.000000Z",
                "updated_at": "2020-05-06T18:52:15.000000Z"
            },
            {
                "id": 695,
                "drug_id": 146,
                "brand_id": 672,
                "created_at": "2020-05-06T18:52:18.000000Z",
                "updated_at": "2020-05-06T18:52:18.000000Z"
            },
            {
                "id": 696,
                "drug_id": 146,
                "brand_id": 673,
                "created_at": "2020-05-06T18:52:20.000000Z",
                "updated_at": "2020-05-06T18:52:20.000000Z"
            },
            {
                "id": 697,
                "drug_id": 146,
                "brand_id": 674,
                "created_at": "2020-05-06T18:52:23.000000Z",
                "updated_at": "2020-05-06T18:52:23.000000Z"
            },
            {
                "id": 698,
                "drug_id": 146,
                "brand_id": 675,
                "created_at": "2020-05-06T18:52:25.000000Z",
                "updated_at": "2020-05-06T18:52:25.000000Z"
            },
            {
                "id": 699,
                "drug_id": 146,
                "brand_id": 676,
                "created_at": "2020-05-06T18:52:28.000000Z",
                "updated_at": "2020-05-06T18:52:28.000000Z"
            },
            {
                "id": 700,
                "drug_id": 146,
                "brand_id": 677,
                "created_at": "2020-05-06T18:52:30.000000Z",
                "updated_at": "2020-05-06T18:52:30.000000Z"
            },
            {
                "id": 701,
                "drug_id": 146,
                "brand_id": 678,
                "created_at": "2020-05-06T18:52:33.000000Z",
                "updated_at": "2020-05-06T18:52:33.000000Z"
            },
            {
                "id": 702,
                "drug_id": 146,
                "brand_id": 679,
                "created_at": "2020-05-06T18:52:35.000000Z",
                "updated_at": "2020-05-06T18:52:35.000000Z"
            },
            {
                "id": 703,
                "drug_id": 146,
                "brand_id": 680,
                "created_at": "2020-05-06T18:52:37.000000Z",
                "updated_at": "2020-05-06T18:52:37.000000Z"
            },
            {
                "id": 704,
                "drug_id": 146,
                "brand_id": 681,
                "created_at": "2020-05-06T18:52:40.000000Z",
                "updated_at": "2020-05-06T18:52:40.000000Z"
            },
            {
                "id": 705,
                "drug_id": 146,
                "brand_id": 682,
                "created_at": "2020-05-06T18:52:42.000000Z",
                "updated_at": "2020-05-06T18:52:42.000000Z"
            },
            {
                "id": 706,
                "drug_id": 146,
                "brand_id": 683,
                "created_at": "2020-05-06T18:52:44.000000Z",
                "updated_at": "2020-05-06T18:52:44.000000Z"
            },
            {
                "id": 707,
                "drug_id": 146,
                "brand_id": 684,
                "created_at": "2020-05-06T18:52:47.000000Z",
                "updated_at": "2020-05-06T18:52:47.000000Z"
            },
            {
                "id": 708,
                "drug_id": 146,
                "brand_id": 685,
                "created_at": "2020-05-06T18:52:49.000000Z",
                "updated_at": "2020-05-06T18:52:49.000000Z"
            },
            {
                "id": 709,
                "drug_id": 146,
                "brand_id": 686,
                "created_at": "2020-05-06T18:52:51.000000Z",
                "updated_at": "2020-05-06T18:52:51.000000Z"
            },
            {
                "id": 710,
                "drug_id": 146,
                "brand_id": 687,
                "created_at": "2020-05-06T18:52:54.000000Z",
                "updated_at": "2020-05-06T18:52:54.000000Z"
            },
            {
                "id": 711,
                "drug_id": 146,
                "brand_id": 688,
                "created_at": "2020-05-06T18:52:56.000000Z",
                "updated_at": "2020-05-06T18:52:56.000000Z"
            },
            {
                "id": 712,
                "drug_id": 146,
                "brand_id": 689,
                "created_at": "2020-05-06T18:52:58.000000Z",
                "updated_at": "2020-05-06T18:52:58.000000Z"
            },
            {
                "id": 713,
                "drug_id": 146,
                "brand_id": 690,
                "created_at": "2020-05-06T18:53:00.000000Z",
                "updated_at": "2020-05-06T18:53:00.000000Z"
            },
            {
                "id": 714,
                "drug_id": 146,
                "brand_id": 691,
                "created_at": "2020-05-06T18:53:03.000000Z",
                "updated_at": "2020-05-06T18:53:03.000000Z"
            },
            {
                "id": 715,
                "drug_id": 146,
                "brand_id": 692,
                "created_at": "2020-05-06T18:53:05.000000Z",
                "updated_at": "2020-05-06T18:53:05.000000Z"
            },
            {
                "id": 716,
                "drug_id": 146,
                "brand_id": 693,
                "created_at": "2020-05-06T18:53:07.000000Z",
                "updated_at": "2020-05-06T18:53:07.000000Z"
            },
            {
                "id": 717,
                "drug_id": 146,
                "brand_id": 694,
                "created_at": "2020-05-06T18:53:10.000000Z",
                "updated_at": "2020-05-06T18:53:10.000000Z"
            },
            {
                "id": 718,
                "drug_id": 146,
                "brand_id": 695,
                "created_at": "2020-05-06T18:53:12.000000Z",
                "updated_at": "2020-05-06T18:53:12.000000Z"
            },
            {
                "id": 719,
                "drug_id": 146,
                "brand_id": 696,
                "created_at": "2020-05-06T18:53:14.000000Z",
                "updated_at": "2020-05-06T18:53:14.000000Z"
            },
            {
                "id": 720,
                "drug_id": 146,
                "brand_id": 697,
                "created_at": "2020-05-06T18:53:17.000000Z",
                "updated_at": "2020-05-06T18:53:17.000000Z"
            },
            {
                "id": 721,
                "drug_id": 146,
                "brand_id": 698,
                "created_at": "2020-05-06T18:53:19.000000Z",
                "updated_at": "2020-05-06T18:53:19.000000Z"
            },
            {
                "id": 722,
                "drug_id": 146,
                "brand_id": 699,
                "created_at": "2020-05-06T18:53:21.000000Z",
                "updated_at": "2020-05-06T18:53:21.000000Z"
            },
            {
                "id": 723,
                "drug_id": 146,
                "brand_id": 700,
                "created_at": "2020-05-06T18:53:23.000000Z",
                "updated_at": "2020-05-06T18:53:23.000000Z"
            },
            {
                "id": 724,
                "drug_id": 146,
                "brand_id": 701,
                "created_at": "2020-05-06T18:53:26.000000Z",
                "updated_at": "2020-05-06T18:53:26.000000Z"
            },
            {
                "id": 725,
                "drug_id": 146,
                "brand_id": 702,
                "created_at": "2020-05-06T18:53:28.000000Z",
                "updated_at": "2020-05-06T18:53:28.000000Z"
            },
            {
                "id": 726,
                "drug_id": 146,
                "brand_id": 703,
                "created_at": "2020-05-06T18:53:30.000000Z",
                "updated_at": "2020-05-06T18:53:30.000000Z"
            },
            {
                "id": 727,
                "drug_id": 146,
                "brand_id": 704,
                "created_at": "2020-05-06T18:53:33.000000Z",
                "updated_at": "2020-05-06T18:53:33.000000Z"
            },
            {
                "id": 728,
                "drug_id": 146,
                "brand_id": 705,
                "created_at": "2020-05-06T18:53:35.000000Z",
                "updated_at": "2020-05-06T18:53:35.000000Z"
            },
            {
                "id": 729,
                "drug_id": 146,
                "brand_id": 706,
                "created_at": "2020-05-06T18:53:38.000000Z",
                "updated_at": "2020-05-06T18:53:38.000000Z"
            },
            {
                "id": 730,
                "drug_id": 146,
                "brand_id": 707,
                "created_at": "2020-05-06T18:53:41.000000Z",
                "updated_at": "2020-05-06T18:53:41.000000Z"
            },
            {
                "id": 731,
                "drug_id": 146,
                "brand_id": 708,
                "created_at": "2020-05-06T18:53:43.000000Z",
                "updated_at": "2020-05-06T18:53:43.000000Z"
            },
            {
                "id": 732,
                "drug_id": 146,
                "brand_id": 709,
                "created_at": "2020-05-06T18:53:45.000000Z",
                "updated_at": "2020-05-06T18:53:45.000000Z"
            },
            {
                "id": 733,
                "drug_id": 146,
                "brand_id": 710,
                "created_at": "2020-05-06T18:53:47.000000Z",
                "updated_at": "2020-05-06T18:53:47.000000Z"
            },
            {
                "id": 734,
                "drug_id": 146,
                "brand_id": 711,
                "created_at": "2020-05-06T18:53:50.000000Z",
                "updated_at": "2020-05-06T18:53:50.000000Z"
            },
            {
                "id": 735,
                "drug_id": 147,
                "brand_id": 712,
                "created_at": "2020-05-06T18:55:03.000000Z",
                "updated_at": "2020-05-06T18:55:03.000000Z"
            },
            {
                "id": 736,
                "drug_id": 147,
                "brand_id": 713,
                "created_at": "2020-05-06T18:55:06.000000Z",
                "updated_at": "2020-05-06T18:55:06.000000Z"
            },
            {
                "id": 737,
                "drug_id": 147,
                "brand_id": 714,
                "created_at": "2020-05-06T18:55:08.000000Z",
                "updated_at": "2020-05-06T18:55:08.000000Z"
            },
            {
                "id": 738,
                "drug_id": 147,
                "brand_id": 715,
                "created_at": "2020-05-06T18:55:10.000000Z",
                "updated_at": "2020-05-06T18:55:10.000000Z"
            },
            {
                "id": 739,
                "drug_id": 147,
                "brand_id": 716,
                "created_at": "2020-05-06T18:55:13.000000Z",
                "updated_at": "2020-05-06T18:55:13.000000Z"
            },
            {
                "id": 740,
                "drug_id": 147,
                "brand_id": 717,
                "created_at": "2020-05-06T18:55:15.000000Z",
                "updated_at": "2020-05-06T18:55:15.000000Z"
            },
            {
                "id": 741,
                "drug_id": 147,
                "brand_id": 718,
                "created_at": "2020-05-06T18:55:17.000000Z",
                "updated_at": "2020-05-06T18:55:17.000000Z"
            },
            {
                "id": 742,
                "drug_id": 147,
                "brand_id": 719,
                "created_at": "2020-05-06T18:55:20.000000Z",
                "updated_at": "2020-05-06T18:55:20.000000Z"
            },
            {
                "id": 743,
                "drug_id": 147,
                "brand_id": 720,
                "created_at": "2020-05-06T18:55:22.000000Z",
                "updated_at": "2020-05-06T18:55:22.000000Z"
            },
            {
                "id": 744,
                "drug_id": 147,
                "brand_id": 721,
                "created_at": "2020-05-06T18:55:24.000000Z",
                "updated_at": "2020-05-06T18:55:24.000000Z"
            },
            {
                "id": 745,
                "drug_id": 147,
                "brand_id": 722,
                "created_at": "2020-05-06T18:55:27.000000Z",
                "updated_at": "2020-05-06T18:55:27.000000Z"
            },
            {
                "id": 746,
                "drug_id": 147,
                "brand_id": 723,
                "created_at": "2020-05-06T18:55:29.000000Z",
                "updated_at": "2020-05-06T18:55:29.000000Z"
            },
            {
                "id": 747,
                "drug_id": 147,
                "brand_id": 724,
                "created_at": "2020-05-06T18:55:31.000000Z",
                "updated_at": "2020-05-06T18:55:31.000000Z"
            },
            {
                "id": 758,
                "drug_id": 149,
                "brand_id": 735,
                "created_at": "2020-05-06T18:59:33.000000Z",
                "updated_at": "2020-05-06T18:59:33.000000Z"
            },
            {
                "id": 759,
                "drug_id": 149,
                "brand_id": 736,
                "created_at": "2020-05-06T18:59:35.000000Z",
                "updated_at": "2020-05-06T18:59:35.000000Z"
            },
            {
                "id": 760,
                "drug_id": 149,
                "brand_id": 737,
                "created_at": "2020-05-06T18:59:37.000000Z",
                "updated_at": "2020-05-06T18:59:37.000000Z"
            },
            {
                "id": 761,
                "drug_id": 150,
                "brand_id": 738,
                "created_at": "2020-05-06T19:00:11.000000Z",
                "updated_at": "2020-05-06T19:00:11.000000Z"
            },
            {
                "id": 762,
                "drug_id": 151,
                "brand_id": 739,
                "created_at": "2020-05-06T19:00:39.000000Z",
                "updated_at": "2020-05-06T19:00:39.000000Z"
            },
            {
                "id": 772,
                "drug_id": 153,
                "brand_id": 749,
                "created_at": "2020-05-06T19:03:05.000000Z",
                "updated_at": "2020-05-06T19:03:05.000000Z"
            },
            {
                "id": 773,
                "drug_id": 154,
                "brand_id": 750,
                "created_at": "2020-05-06T19:03:33.000000Z",
                "updated_at": "2020-05-06T19:03:33.000000Z"
            },
            {
                "id": 774,
                "drug_id": 155,
                "brand_id": 751,
                "created_at": "2020-05-06T19:04:55.000000Z",
                "updated_at": "2020-05-06T19:04:55.000000Z"
            },
            {
                "id": 794,
                "drug_id": 158,
                "brand_id": 771,
                "created_at": "2020-05-06T19:08:47.000000Z",
                "updated_at": "2020-05-06T19:08:47.000000Z"
            },
            {
                "id": 795,
                "drug_id": 158,
                "brand_id": 772,
                "created_at": "2020-05-06T19:08:49.000000Z",
                "updated_at": "2020-05-06T19:08:49.000000Z"
            },
            {
                "id": 796,
                "drug_id": 159,
                "brand_id": 773,
                "created_at": "2020-05-06T19:09:30.000000Z",
                "updated_at": "2020-05-06T19:09:30.000000Z"
            },
            {
                "id": 797,
                "drug_id": 159,
                "brand_id": 774,
                "created_at": "2020-05-06T19:09:32.000000Z",
                "updated_at": "2020-05-06T19:09:32.000000Z"
            },
            {
                "id": 798,
                "drug_id": 159,
                "brand_id": 775,
                "created_at": "2020-05-06T19:09:35.000000Z",
                "updated_at": "2020-05-06T19:09:35.000000Z"
            },
            {
                "id": 799,
                "drug_id": 159,
                "brand_id": 776,
                "created_at": "2020-05-06T19:09:37.000000Z",
                "updated_at": "2020-05-06T19:09:37.000000Z"
            },
            {
                "id": 800,
                "drug_id": 159,
                "brand_id": 777,
                "created_at": "2020-05-06T19:09:39.000000Z",
                "updated_at": "2020-05-06T19:09:39.000000Z"
            },
            {
                "id": 801,
                "drug_id": 159,
                "brand_id": 778,
                "created_at": "2020-05-06T19:09:42.000000Z",
                "updated_at": "2020-05-06T19:09:42.000000Z"
            },
            {
                "id": 802,
                "drug_id": 159,
                "brand_id": 779,
                "created_at": "2020-05-06T19:09:44.000000Z",
                "updated_at": "2020-05-06T19:09:44.000000Z"
            },
            {
                "id": 803,
                "drug_id": 159,
                "brand_id": 780,
                "created_at": "2020-05-06T19:09:46.000000Z",
                "updated_at": "2020-05-06T19:09:46.000000Z"
            },
            {
                "id": 804,
                "drug_id": 159,
                "brand_id": 781,
                "created_at": "2020-05-06T19:09:49.000000Z",
                "updated_at": "2020-05-06T19:09:49.000000Z"
            },
            {
                "id": 805,
                "drug_id": 159,
                "brand_id": 782,
                "created_at": "2020-05-06T19:09:51.000000Z",
                "updated_at": "2020-05-06T19:09:51.000000Z"
            },
            {
                "id": 806,
                "drug_id": 159,
                "brand_id": 783,
                "created_at": "2020-05-06T19:09:53.000000Z",
                "updated_at": "2020-05-06T19:09:53.000000Z"
            },
            {
                "id": 807,
                "drug_id": 159,
                "brand_id": 784,
                "created_at": "2020-05-06T19:09:55.000000Z",
                "updated_at": "2020-05-06T19:09:55.000000Z"
            },
            {
                "id": 808,
                "drug_id": 160,
                "brand_id": 785,
                "created_at": "2020-05-06T19:10:32.000000Z",
                "updated_at": "2020-05-06T19:10:32.000000Z"
            },
            {
                "id": 809,
                "drug_id": 161,
                "brand_id": 786,
                "created_at": "2020-05-06T19:11:10.000000Z",
                "updated_at": "2020-05-06T19:11:10.000000Z"
            },
            {
                "id": 810,
                "drug_id": 161,
                "brand_id": 787,
                "created_at": "2020-05-06T19:11:12.000000Z",
                "updated_at": "2020-05-06T19:11:12.000000Z"
            },
            {
                "id": 811,
                "drug_id": 161,
                "brand_id": 788,
                "created_at": "2020-05-06T19:11:15.000000Z",
                "updated_at": "2020-05-06T19:11:15.000000Z"
            },
            {
                "id": 812,
                "drug_id": 161,
                "brand_id": 789,
                "created_at": "2020-05-06T19:11:17.000000Z",
                "updated_at": "2020-05-06T19:11:17.000000Z"
            },
            {
                "id": 813,
                "drug_id": 161,
                "brand_id": 790,
                "created_at": "2020-05-06T19:11:19.000000Z",
                "updated_at": "2020-05-06T19:11:19.000000Z"
            },
            {
                "id": 814,
                "drug_id": 161,
                "brand_id": 791,
                "created_at": "2020-05-06T19:11:22.000000Z",
                "updated_at": "2020-05-06T19:11:22.000000Z"
            },
            {
                "id": 881,
                "drug_id": 164,
                "brand_id": 858,
                "created_at": "2020-05-06T19:17:36.000000Z",
                "updated_at": "2020-05-06T19:17:36.000000Z"
            },
            {
                "id": 882,
                "drug_id": 165,
                "brand_id": 859,
                "created_at": "2020-05-06T19:18:25.000000Z",
                "updated_at": "2020-05-06T19:18:25.000000Z"
            },
            {
                "id": 883,
                "drug_id": 166,
                "brand_id": 860,
                "created_at": "2020-05-06T19:19:01.000000Z",
                "updated_at": "2020-05-06T19:19:01.000000Z"
            },
            {
                "id": 888,
                "drug_id": 170,
                "brand_id": 865,
                "created_at": "2020-05-06T19:23:41.000000Z",
                "updated_at": "2020-05-06T19:23:41.000000Z"
            },
            {
                "id": 889,
                "drug_id": 170,
                "brand_id": 866,
                "created_at": "2020-05-06T19:23:43.000000Z",
                "updated_at": "2020-05-06T19:23:43.000000Z"
            },
            {
                "id": 890,
                "drug_id": 170,
                "brand_id": 867,
                "created_at": "2020-05-06T19:23:45.000000Z",
                "updated_at": "2020-05-06T19:23:45.000000Z"
            },
            {
                "id": 891,
                "drug_id": 170,
                "brand_id": 868,
                "created_at": "2020-05-06T19:23:48.000000Z",
                "updated_at": "2020-05-06T19:23:48.000000Z"
            },
            {
                "id": 906,
                "drug_id": 172,
                "brand_id": 883,
                "created_at": "2020-05-06T19:29:09.000000Z",
                "updated_at": "2020-05-06T19:29:09.000000Z"
            },
            {
                "id": 907,
                "drug_id": 172,
                "brand_id": 884,
                "created_at": "2020-05-06T19:29:11.000000Z",
                "updated_at": "2020-05-06T19:29:11.000000Z"
            },
            {
                "id": 908,
                "drug_id": 172,
                "brand_id": 885,
                "created_at": "2020-05-06T19:29:13.000000Z",
                "updated_at": "2020-05-06T19:29:13.000000Z"
            },
            {
                "id": 913,
                "drug_id": 174,
                "brand_id": 890,
                "created_at": "2020-05-06T19:31:36.000000Z",
                "updated_at": "2020-05-06T19:31:36.000000Z"
            },
            {
                "id": 914,
                "drug_id": 175,
                "brand_id": 891,
                "created_at": "2020-05-06T19:35:49.000000Z",
                "updated_at": "2020-05-06T19:35:49.000000Z"
            },
            {
                "id": 915,
                "drug_id": 175,
                "brand_id": 892,
                "created_at": "2020-05-06T19:35:51.000000Z",
                "updated_at": "2020-05-06T19:35:51.000000Z"
            },
            {
                "id": 916,
                "drug_id": 175,
                "brand_id": 893,
                "created_at": "2020-05-06T19:35:53.000000Z",
                "updated_at": "2020-05-06T19:35:53.000000Z"
            },
            {
                "id": 917,
                "drug_id": 175,
                "brand_id": 894,
                "created_at": "2020-05-06T19:35:56.000000Z",
                "updated_at": "2020-05-06T19:35:56.000000Z"
            },
            {
                "id": 918,
                "drug_id": 175,
                "brand_id": 895,
                "created_at": "2020-05-06T19:35:58.000000Z",
                "updated_at": "2020-05-06T19:35:58.000000Z"
            },
            {
                "id": 919,
                "drug_id": 175,
                "brand_id": 896,
                "created_at": "2020-05-06T19:36:00.000000Z",
                "updated_at": "2020-05-06T19:36:00.000000Z"
            },
            {
                "id": 920,
                "drug_id": 176,
                "brand_id": 897,
                "created_at": "2020-05-06T19:36:41.000000Z",
                "updated_at": "2020-05-06T19:36:41.000000Z"
            },
            {
                "id": 921,
                "drug_id": 176,
                "brand_id": 898,
                "created_at": "2020-05-06T19:36:44.000000Z",
                "updated_at": "2020-05-06T19:36:44.000000Z"
            },
            {
                "id": 931,
                "drug_id": 179,
                "brand_id": 908,
                "created_at": "2020-05-06T19:40:55.000000Z",
                "updated_at": "2020-05-06T19:40:55.000000Z"
            },
            {
                "id": 932,
                "drug_id": 179,
                "brand_id": 909,
                "created_at": "2020-05-06T19:40:58.000000Z",
                "updated_at": "2020-05-06T19:40:58.000000Z"
            },
            {
                "id": 933,
                "drug_id": 179,
                "brand_id": 910,
                "created_at": "2020-05-06T19:41:00.000000Z",
                "updated_at": "2020-05-06T19:41:00.000000Z"
            },
            {
                "id": 934,
                "drug_id": 179,
                "brand_id": 911,
                "created_at": "2020-05-06T19:41:02.000000Z",
                "updated_at": "2020-05-06T19:41:02.000000Z"
            },
            {
                "id": 935,
                "drug_id": 179,
                "brand_id": 912,
                "created_at": "2020-05-06T19:41:05.000000Z",
                "updated_at": "2020-05-06T19:41:05.000000Z"
            },
            {
                "id": 936,
                "drug_id": 179,
                "brand_id": 913,
                "created_at": "2020-05-06T19:41:07.000000Z",
                "updated_at": "2020-05-06T19:41:07.000000Z"
            },
            {
                "id": 937,
                "drug_id": 179,
                "brand_id": 914,
                "created_at": "2020-05-06T19:41:09.000000Z",
                "updated_at": "2020-05-06T19:41:09.000000Z"
            },
            {
                "id": 938,
                "drug_id": 179,
                "brand_id": 915,
                "created_at": "2020-05-06T19:41:12.000000Z",
                "updated_at": "2020-05-06T19:41:12.000000Z"
            },
            {
                "id": 939,
                "drug_id": 179,
                "brand_id": 916,
                "created_at": "2020-05-06T19:41:14.000000Z",
                "updated_at": "2020-05-06T19:41:14.000000Z"
            },
            {
                "id": 940,
                "drug_id": 179,
                "brand_id": 917,
                "created_at": "2020-05-06T19:41:16.000000Z",
                "updated_at": "2020-05-06T19:41:16.000000Z"
            },
            {
                "id": 941,
                "drug_id": 179,
                "brand_id": 918,
                "created_at": "2020-05-06T19:41:18.000000Z",
                "updated_at": "2020-05-06T19:41:18.000000Z"
            },
            {
                "id": 942,
                "drug_id": 179,
                "brand_id": 919,
                "created_at": "2020-05-06T19:41:21.000000Z",
                "updated_at": "2020-05-06T19:41:21.000000Z"
            },
            {
                "id": 943,
                "drug_id": 179,
                "brand_id": 920,
                "created_at": "2020-05-06T19:41:23.000000Z",
                "updated_at": "2020-05-06T19:41:23.000000Z"
            },
            {
                "id": 944,
                "drug_id": 179,
                "brand_id": 921,
                "created_at": "2020-05-06T19:41:25.000000Z",
                "updated_at": "2020-05-06T19:41:25.000000Z"
            },
            {
                "id": 945,
                "drug_id": 179,
                "brand_id": 922,
                "created_at": "2020-05-06T19:41:28.000000Z",
                "updated_at": "2020-05-06T19:41:28.000000Z"
            },
            {
                "id": 946,
                "drug_id": 179,
                "brand_id": 923,
                "created_at": "2020-05-06T19:41:30.000000Z",
                "updated_at": "2020-05-06T19:41:30.000000Z"
            },
            {
                "id": 947,
                "drug_id": 179,
                "brand_id": 924,
                "created_at": "2020-05-06T19:41:32.000000Z",
                "updated_at": "2020-05-06T19:41:32.000000Z"
            },
            {
                "id": 948,
                "drug_id": 179,
                "brand_id": 925,
                "created_at": "2020-05-06T19:41:35.000000Z",
                "updated_at": "2020-05-06T19:41:35.000000Z"
            },
            {
                "id": 949,
                "drug_id": 179,
                "brand_id": 926,
                "created_at": "2020-05-06T19:41:37.000000Z",
                "updated_at": "2020-05-06T19:41:37.000000Z"
            },
            {
                "id": 950,
                "drug_id": 179,
                "brand_id": 927,
                "created_at": "2020-05-06T19:41:40.000000Z",
                "updated_at": "2020-05-06T19:41:40.000000Z"
            },
            {
                "id": 951,
                "drug_id": 179,
                "brand_id": 928,
                "created_at": "2020-05-06T19:41:43.000000Z",
                "updated_at": "2020-05-06T19:41:43.000000Z"
            },
            {
                "id": 952,
                "drug_id": 179,
                "brand_id": 929,
                "created_at": "2020-05-06T19:41:45.000000Z",
                "updated_at": "2020-05-06T19:41:45.000000Z"
            },
            {
                "id": 953,
                "drug_id": 180,
                "brand_id": 930,
                "created_at": "2020-05-06T19:43:01.000000Z",
                "updated_at": "2020-05-06T19:43:01.000000Z"
            },
            {
                "id": 954,
                "drug_id": 180,
                "brand_id": 931,
                "created_at": "2020-05-06T19:43:03.000000Z",
                "updated_at": "2020-05-06T19:43:03.000000Z"
            },
            {
                "id": 955,
                "drug_id": 180,
                "brand_id": 932,
                "created_at": "2020-05-06T19:43:05.000000Z",
                "updated_at": "2020-05-06T19:43:05.000000Z"
            },
            {
                "id": 956,
                "drug_id": 180,
                "brand_id": 933,
                "created_at": "2020-05-06T19:43:08.000000Z",
                "updated_at": "2020-05-06T19:43:08.000000Z"
            },
            {
                "id": 957,
                "drug_id": 180,
                "brand_id": 934,
                "created_at": "2020-05-06T19:43:10.000000Z",
                "updated_at": "2020-05-06T19:43:10.000000Z"
            },
            {
                "id": 958,
                "drug_id": 180,
                "brand_id": 935,
                "created_at": "2020-05-06T19:43:13.000000Z",
                "updated_at": "2020-05-06T19:43:13.000000Z"
            },
            {
                "id": 959,
                "drug_id": 180,
                "brand_id": 936,
                "created_at": "2020-05-06T19:43:15.000000Z",
                "updated_at": "2020-05-06T19:43:15.000000Z"
            },
            {
                "id": 961,
                "drug_id": 183,
                "brand_id": 938,
                "created_at": "2020-05-06T19:46:11.000000Z",
                "updated_at": "2020-05-06T19:46:11.000000Z"
            },
            {
                "id": 962,
                "drug_id": 183,
                "brand_id": 939,
                "created_at": "2020-05-06T19:46:14.000000Z",
                "updated_at": "2020-05-06T19:46:14.000000Z"
            },
            {
                "id": 963,
                "drug_id": 183,
                "brand_id": 940,
                "created_at": "2020-05-06T19:46:16.000000Z",
                "updated_at": "2020-05-06T19:46:16.000000Z"
            },
            {
                "id": 964,
                "drug_id": 183,
                "brand_id": 941,
                "created_at": "2020-05-06T19:46:18.000000Z",
                "updated_at": "2020-05-06T19:46:18.000000Z"
            },
            {
                "id": 965,
                "drug_id": 184,
                "brand_id": 942,
                "created_at": "2020-05-06T19:46:58.000000Z",
                "updated_at": "2020-05-06T19:46:58.000000Z"
            },
            {
                "id": 973,
                "drug_id": 187,
                "brand_id": 950,
                "created_at": "2020-05-06T19:52:31.000000Z",
                "updated_at": "2020-05-06T19:52:31.000000Z"
            },
            {
                "id": 974,
                "drug_id": 187,
                "brand_id": 950,
                "created_at": "2020-05-06T19:52:31.000000Z",
                "updated_at": "2020-05-06T19:52:31.000000Z"
            },
            {
                "id": 975,
                "drug_id": 187,
                "brand_id": 950,
                "created_at": "2020-05-06T19:52:31.000000Z",
                "updated_at": "2020-05-06T19:52:31.000000Z"
            },
            {
                "id": 976,
                "drug_id": 187,
                "brand_id": 951,
                "created_at": "2020-05-06T19:52:34.000000Z",
                "updated_at": "2020-05-06T19:52:34.000000Z"
            },
            {
                "id": 977,
                "drug_id": 187,
                "brand_id": 952,
                "created_at": "2020-05-06T19:52:36.000000Z",
                "updated_at": "2020-05-06T19:52:36.000000Z"
            },
            {
                "id": 978,
                "drug_id": 187,
                "brand_id": 953,
                "created_at": "2020-05-06T19:52:39.000000Z",
                "updated_at": "2020-05-06T19:52:39.000000Z"
            },
            {
                "id": 979,
                "drug_id": 187,
                "brand_id": 953,
                "created_at": "2020-05-06T19:52:39.000000Z",
                "updated_at": "2020-05-06T19:52:39.000000Z"
            },
            {
                "id": 980,
                "drug_id": 187,
                "brand_id": 954,
                "created_at": "2020-05-06T19:52:41.000000Z",
                "updated_at": "2020-05-06T19:52:41.000000Z"
            },
            {
                "id": 981,
                "drug_id": 187,
                "brand_id": 954,
                "created_at": "2020-05-06T19:52:41.000000Z",
                "updated_at": "2020-05-06T19:52:41.000000Z"
            },
            {
                "id": 982,
                "drug_id": 187,
                "brand_id": 954,
                "created_at": "2020-05-06T19:52:41.000000Z",
                "updated_at": "2020-05-06T19:52:41.000000Z"
            },
            {
                "id": 983,
                "drug_id": 187,
                "brand_id": 955,
                "created_at": "2020-05-06T19:52:44.000000Z",
                "updated_at": "2020-05-06T19:52:44.000000Z"
            },
            {
                "id": 984,
                "drug_id": 188,
                "brand_id": 956,
                "created_at": "2020-05-06T19:53:14.000000Z",
                "updated_at": "2020-05-06T19:53:14.000000Z"
            },
            {
                "id": 1009,
                "drug_id": 191,
                "brand_id": 981,
                "created_at": "2020-05-06T20:01:55.000000Z",
                "updated_at": "2020-05-06T20:01:55.000000Z"
            },
            {
                "id": 1010,
                "drug_id": 191,
                "brand_id": 982,
                "created_at": "2020-05-06T20:01:57.000000Z",
                "updated_at": "2020-05-06T20:01:57.000000Z"
            },
            {
                "id": 1011,
                "drug_id": 191,
                "brand_id": 983,
                "created_at": "2020-05-06T20:02:00.000000Z",
                "updated_at": "2020-05-06T20:02:00.000000Z"
            },
            {
                "id": 1012,
                "drug_id": 191,
                "brand_id": 984,
                "created_at": "2020-05-06T20:02:02.000000Z",
                "updated_at": "2020-05-06T20:02:02.000000Z"
            },
            {
                "id": 1013,
                "drug_id": 191,
                "brand_id": 985,
                "created_at": "2020-05-06T20:02:04.000000Z",
                "updated_at": "2020-05-06T20:02:04.000000Z"
            },
            {
                "id": 1014,
                "drug_id": 191,
                "brand_id": 986,
                "created_at": "2020-05-06T20:02:06.000000Z",
                "updated_at": "2020-05-06T20:02:06.000000Z"
            },
            {
                "id": 1015,
                "drug_id": 191,
                "brand_id": 987,
                "created_at": "2020-05-06T20:02:09.000000Z",
                "updated_at": "2020-05-06T20:02:09.000000Z"
            },
            {
                "id": 1016,
                "drug_id": 191,
                "brand_id": 988,
                "created_at": "2020-05-06T20:02:11.000000Z",
                "updated_at": "2020-05-06T20:02:11.000000Z"
            },
            {
                "id": 1017,
                "drug_id": 191,
                "brand_id": 989,
                "created_at": "2020-05-06T20:02:13.000000Z",
                "updated_at": "2020-05-06T20:02:13.000000Z"
            },
            {
                "id": 1018,
                "drug_id": 191,
                "brand_id": 990,
                "created_at": "2020-05-06T20:02:16.000000Z",
                "updated_at": "2020-05-06T20:02:16.000000Z"
            },
            {
                "id": 1019,
                "drug_id": 191,
                "brand_id": 991,
                "created_at": "2020-05-06T20:02:18.000000Z",
                "updated_at": "2020-05-06T20:02:18.000000Z"
            },
            {
                "id": 1020,
                "drug_id": 191,
                "brand_id": 992,
                "created_at": "2020-05-06T20:02:21.000000Z",
                "updated_at": "2020-05-06T20:02:21.000000Z"
            },
            {
                "id": 1021,
                "drug_id": 191,
                "brand_id": 993,
                "created_at": "2020-05-06T20:02:23.000000Z",
                "updated_at": "2020-05-06T20:02:23.000000Z"
            },
            {
                "id": 1027,
                "drug_id": 193,
                "brand_id": 999,
                "created_at": "2020-05-06T20:04:32.000000Z",
                "updated_at": "2020-05-06T20:04:32.000000Z"
            },
            {
                "id": 1028,
                "drug_id": 193,
                "brand_id": 1000,
                "created_at": "2020-05-06T20:04:34.000000Z",
                "updated_at": "2020-05-06T20:04:34.000000Z"
            },
            {
                "id": 1037,
                "drug_id": 198,
                "brand_id": 1008,
                "created_at": "2020-05-06T20:10:43.000000Z",
                "updated_at": "2020-05-06T20:10:43.000000Z"
            },
            {
                "id": 1038,
                "drug_id": 198,
                "brand_id": 1009,
                "created_at": "2020-05-06T20:10:46.000000Z",
                "updated_at": "2020-05-06T20:10:46.000000Z"
            },
            {
                "id": 1039,
                "drug_id": 198,
                "brand_id": 1010,
                "created_at": "2020-05-06T20:10:49.000000Z",
                "updated_at": "2020-05-06T20:10:49.000000Z"
            },
            {
                "id": 1040,
                "drug_id": 198,
                "brand_id": 1011,
                "created_at": "2020-05-06T20:10:51.000000Z",
                "updated_at": "2020-05-06T20:10:51.000000Z"
            },
            {
                "id": 1041,
                "drug_id": 198,
                "brand_id": 1012,
                "created_at": "2020-05-06T20:10:53.000000Z",
                "updated_at": "2020-05-06T20:10:53.000000Z"
            },
            {
                "id": 1066,
                "drug_id": 203,
                "brand_id": 1037,
                "created_at": "2020-05-06T20:17:18.000000Z",
                "updated_at": "2020-05-06T20:17:18.000000Z"
            },
            {
                "id": 1067,
                "drug_id": 203,
                "brand_id": 1038,
                "created_at": "2020-05-06T20:17:20.000000Z",
                "updated_at": "2020-05-06T20:17:20.000000Z"
            },
            {
                "id": 1068,
                "drug_id": 204,
                "brand_id": 1039,
                "created_at": "2020-05-06T20:17:45.000000Z",
                "updated_at": "2020-05-06T20:17:45.000000Z"
            },
            {
                "id": 1081,
                "drug_id": 207,
                "brand_id": 1052,
                "created_at": "2020-05-06T20:24:36.000000Z",
                "updated_at": "2020-05-06T20:24:36.000000Z"
            },
            {
                "id": 1082,
                "drug_id": 208,
                "brand_id": 1053,
                "created_at": "2020-05-06T20:26:13.000000Z",
                "updated_at": "2020-05-06T20:26:13.000000Z"
            },
            {
                "id": 1083,
                "drug_id": 208,
                "brand_id": 1054,
                "created_at": "2020-05-06T20:26:16.000000Z",
                "updated_at": "2020-05-06T20:26:16.000000Z"
            },
            {
                "id": 1084,
                "drug_id": 208,
                "brand_id": 1055,
                "created_at": "2020-05-06T20:26:18.000000Z",
                "updated_at": "2020-05-06T20:26:18.000000Z"
            },
            {
                "id": 1085,
                "drug_id": 208,
                "brand_id": 1056,
                "created_at": "2020-05-06T20:26:20.000000Z",
                "updated_at": "2020-05-06T20:26:20.000000Z"
            },
            {
                "id": 1086,
                "drug_id": 208,
                "brand_id": 1057,
                "created_at": "2020-05-06T20:26:22.000000Z",
                "updated_at": "2020-05-06T20:26:22.000000Z"
            },
            {
                "id": 1087,
                "drug_id": 208,
                "brand_id": 1058,
                "created_at": "2020-05-06T20:26:25.000000Z",
                "updated_at": "2020-05-06T20:26:25.000000Z"
            },
            {
                "id": 1088,
                "drug_id": 208,
                "brand_id": 1059,
                "created_at": "2020-05-06T20:26:27.000000Z",
                "updated_at": "2020-05-06T20:26:27.000000Z"
            },
            {
                "id": 1089,
                "drug_id": 208,
                "brand_id": 1060,
                "created_at": "2020-05-06T20:26:29.000000Z",
                "updated_at": "2020-05-06T20:26:29.000000Z"
            },
            {
                "id": 1090,
                "drug_id": 208,
                "brand_id": 1061,
                "created_at": "2020-05-06T20:26:31.000000Z",
                "updated_at": "2020-05-06T20:26:31.000000Z"
            },
            {
                "id": 1091,
                "drug_id": 208,
                "brand_id": 1062,
                "created_at": "2020-05-06T20:26:34.000000Z",
                "updated_at": "2020-05-06T20:26:34.000000Z"
            },
            {
                "id": 1092,
                "drug_id": 208,
                "brand_id": 1063,
                "created_at": "2020-05-06T20:26:37.000000Z",
                "updated_at": "2020-05-06T20:26:37.000000Z"
            },
            {
                "id": 1093,
                "drug_id": 208,
                "brand_id": 1064,
                "created_at": "2020-05-06T20:26:39.000000Z",
                "updated_at": "2020-05-06T20:26:39.000000Z"
            },
            {
                "id": 1094,
                "drug_id": 208,
                "brand_id": 1065,
                "created_at": "2020-05-06T20:26:41.000000Z",
                "updated_at": "2020-05-06T20:26:41.000000Z"
            },
            {
                "id": 1095,
                "drug_id": 208,
                "brand_id": 1066,
                "created_at": "2020-05-06T20:26:44.000000Z",
                "updated_at": "2020-05-06T20:26:44.000000Z"
            },
            {
                "id": 1096,
                "drug_id": 208,
                "brand_id": 1067,
                "created_at": "2020-05-06T20:26:46.000000Z",
                "updated_at": "2020-05-06T20:26:46.000000Z"
            },
            {
                "id": 1097,
                "drug_id": 209,
                "brand_id": 1068,
                "created_at": "2020-05-06T20:27:29.000000Z",
                "updated_at": "2020-05-06T20:27:29.000000Z"
            },
            {
                "id": 1098,
                "drug_id": 209,
                "brand_id": 1069,
                "created_at": "2020-05-06T20:27:32.000000Z",
                "updated_at": "2020-05-06T20:27:32.000000Z"
            },
            {
                "id": 1104,
                "drug_id": 212,
                "brand_id": 1075,
                "created_at": "2020-05-06T20:30:52.000000Z",
                "updated_at": "2020-05-06T20:30:52.000000Z"
            },
            {
                "id": 1105,
                "drug_id": 213,
                "brand_id": 1076,
                "created_at": "2020-05-06T20:31:31.000000Z",
                "updated_at": "2020-05-06T20:31:31.000000Z"
            },
            {
                "id": 1106,
                "drug_id": 213,
                "brand_id": 1077,
                "created_at": "2020-05-06T20:31:33.000000Z",
                "updated_at": "2020-05-06T20:31:33.000000Z"
            },
            {
                "id": 1107,
                "drug_id": 213,
                "brand_id": 1078,
                "created_at": "2020-05-06T20:31:35.000000Z",
                "updated_at": "2020-05-06T20:31:35.000000Z"
            },
            {
                "id": 1108,
                "drug_id": 214,
                "brand_id": 1079,
                "created_at": "2020-05-06T20:33:57.000000Z",
                "updated_at": "2020-05-06T20:33:57.000000Z"
            },
            {
                "id": 1109,
                "drug_id": 214,
                "brand_id": 1080,
                "created_at": "2020-05-06T20:34:00.000000Z",
                "updated_at": "2020-05-06T20:34:00.000000Z"
            },
            {
                "id": 1110,
                "drug_id": 214,
                "brand_id": 1081,
                "created_at": "2020-05-06T20:34:02.000000Z",
                "updated_at": "2020-05-06T20:34:02.000000Z"
            },
            {
                "id": 1111,
                "drug_id": 214,
                "brand_id": 1082,
                "created_at": "2020-05-06T20:34:04.000000Z",
                "updated_at": "2020-05-06T20:34:04.000000Z"
            },
            {
                "id": 1112,
                "drug_id": 214,
                "brand_id": 1083,
                "created_at": "2020-05-06T20:34:06.000000Z",
                "updated_at": "2020-05-06T20:34:06.000000Z"
            },
            {
                "id": 1113,
                "drug_id": 215,
                "brand_id": 1084,
                "created_at": "2020-05-06T20:34:48.000000Z",
                "updated_at": "2020-05-06T20:34:48.000000Z"
            },
            {
                "id": 1114,
                "drug_id": 215,
                "brand_id": 1085,
                "created_at": "2020-05-06T20:34:50.000000Z",
                "updated_at": "2020-05-06T20:34:50.000000Z"
            },
            {
                "id": 1115,
                "drug_id": 215,
                "brand_id": 1086,
                "created_at": "2020-05-06T20:34:53.000000Z",
                "updated_at": "2020-05-06T20:34:53.000000Z"
            },
            {
                "id": 1123,
                "drug_id": 217,
                "brand_id": 1094,
                "created_at": "2020-05-06T20:37:25.000000Z",
                "updated_at": "2020-05-06T20:37:25.000000Z"
            },
            {
                "id": 1129,
                "drug_id": 219,
                "brand_id": 1100,
                "created_at": "2020-05-06T20:40:41.000000Z",
                "updated_at": "2020-05-06T20:40:41.000000Z"
            },
            {
                "id": 1130,
                "drug_id": 219,
                "brand_id": 1101,
                "created_at": "2020-05-06T20:40:44.000000Z",
                "updated_at": "2020-05-06T20:40:44.000000Z"
            },
            {
                "id": 1131,
                "drug_id": 219,
                "brand_id": 1102,
                "created_at": "2020-05-06T20:40:46.000000Z",
                "updated_at": "2020-05-06T20:40:46.000000Z"
            },
            {
                "id": 1132,
                "drug_id": 220,
                "brand_id": 1103,
                "created_at": "2020-05-06T20:41:11.000000Z",
                "updated_at": "2020-05-06T20:41:11.000000Z"
            },
            {
                "id": 1134,
                "drug_id": 222,
                "brand_id": 1105,
                "created_at": "2020-05-06T20:44:08.000000Z",
                "updated_at": "2020-05-06T20:44:08.000000Z"
            },
            {
                "id": 1135,
                "drug_id": 222,
                "brand_id": 1106,
                "created_at": "2020-05-06T20:44:10.000000Z",
                "updated_at": "2020-05-06T20:44:10.000000Z"
            },
            {
                "id": 1136,
                "drug_id": 222,
                "brand_id": 1107,
                "created_at": "2020-05-06T20:44:13.000000Z",
                "updated_at": "2020-05-06T20:44:13.000000Z"
            },
            {
                "id": 1137,
                "drug_id": 222,
                "brand_id": 1108,
                "created_at": "2020-05-06T20:44:15.000000Z",
                "updated_at": "2020-05-06T20:44:15.000000Z"
            },
            {
                "id": 1138,
                "drug_id": 222,
                "brand_id": 1109,
                "created_at": "2020-05-06T20:44:17.000000Z",
                "updated_at": "2020-05-06T20:44:17.000000Z"
            },
            {
                "id": 1139,
                "drug_id": 223,
                "brand_id": 1110,
                "created_at": "2020-05-06T20:44:55.000000Z",
                "updated_at": "2020-05-06T20:44:55.000000Z"
            },
            {
                "id": 1140,
                "drug_id": 223,
                "brand_id": 1111,
                "created_at": "2020-05-06T20:44:57.000000Z",
                "updated_at": "2020-05-06T20:44:57.000000Z"
            },
            {
                "id": 1141,
                "drug_id": 224,
                "brand_id": 1112,
                "created_at": "2020-05-06T20:46:11.000000Z",
                "updated_at": "2020-05-06T20:46:11.000000Z"
            },
            {
                "id": 1142,
                "drug_id": 224,
                "brand_id": 1113,
                "created_at": "2020-05-06T20:46:13.000000Z",
                "updated_at": "2020-05-06T20:46:13.000000Z"
            },
            {
                "id": 1143,
                "drug_id": 224,
                "brand_id": 1114,
                "created_at": "2020-05-06T20:46:15.000000Z",
                "updated_at": "2020-05-06T20:46:15.000000Z"
            },
            {
                "id": 1144,
                "drug_id": 226,
                "brand_id": 1115,
                "created_at": "2020-05-06T20:48:30.000000Z",
                "updated_at": "2020-05-06T20:48:30.000000Z"
            },
            {
                "id": 1145,
                "drug_id": 226,
                "brand_id": 1116,
                "created_at": "2020-05-06T20:48:32.000000Z",
                "updated_at": "2020-05-06T20:48:32.000000Z"
            },
            {
                "id": 1146,
                "drug_id": 226,
                "brand_id": 1117,
                "created_at": "2020-05-06T20:48:34.000000Z",
                "updated_at": "2020-05-06T20:48:34.000000Z"
            },
            {
                "id": 1147,
                "drug_id": 226,
                "brand_id": 1118,
                "created_at": "2020-05-06T20:48:36.000000Z",
                "updated_at": "2020-05-06T20:48:36.000000Z"
            },
            {
                "id": 1148,
                "drug_id": 227,
                "brand_id": 1119,
                "created_at": "2020-05-06T20:49:44.000000Z",
                "updated_at": "2020-05-06T20:49:44.000000Z"
            },
            {
                "id": 1149,
                "drug_id": 227,
                "brand_id": 1120,
                "created_at": "2020-05-06T20:49:47.000000Z",
                "updated_at": "2020-05-06T20:49:47.000000Z"
            },
            {
                "id": 1150,
                "drug_id": 227,
                "brand_id": 1121,
                "created_at": "2020-05-06T20:49:49.000000Z",
                "updated_at": "2020-05-06T20:49:49.000000Z"
            },
            {
                "id": 1151,
                "drug_id": 227,
                "brand_id": 1122,
                "created_at": "2020-05-06T20:49:52.000000Z",
                "updated_at": "2020-05-06T20:49:52.000000Z"
            },
            {
                "id": 1152,
                "drug_id": 227,
                "brand_id": 1123,
                "created_at": "2020-05-06T20:49:54.000000Z",
                "updated_at": "2020-05-06T20:49:54.000000Z"
            },
            {
                "id": 1153,
                "drug_id": 227,
                "brand_id": 1124,
                "created_at": "2020-05-06T20:49:56.000000Z",
                "updated_at": "2020-05-06T20:49:56.000000Z"
            },
            {
                "id": 1154,
                "drug_id": 227,
                "brand_id": 1125,
                "created_at": "2020-05-06T20:49:58.000000Z",
                "updated_at": "2020-05-06T20:49:58.000000Z"
            },
            {
                "id": 1155,
                "drug_id": 227,
                "brand_id": 1126,
                "created_at": "2020-05-06T20:50:01.000000Z",
                "updated_at": "2020-05-06T20:50:01.000000Z"
            },
            {
                "id": 1156,
                "drug_id": 227,
                "brand_id": 1127,
                "created_at": "2020-05-06T20:50:03.000000Z",
                "updated_at": "2020-05-06T20:50:03.000000Z"
            },
            {
                "id": 1157,
                "drug_id": 227,
                "brand_id": 1128,
                "created_at": "2020-05-06T20:50:05.000000Z",
                "updated_at": "2020-05-06T20:50:05.000000Z"
            },
            {
                "id": 1158,
                "drug_id": 227,
                "brand_id": 1129,
                "created_at": "2020-05-06T20:50:08.000000Z",
                "updated_at": "2020-05-06T20:50:08.000000Z"
            },
            {
                "id": 1159,
                "drug_id": 227,
                "brand_id": 1130,
                "created_at": "2020-05-06T20:50:10.000000Z",
                "updated_at": "2020-05-06T20:50:10.000000Z"
            },
            {
                "id": 1160,
                "drug_id": 228,
                "brand_id": 1131,
                "created_at": "2020-05-06T20:52:30.000000Z",
                "updated_at": "2020-05-06T20:52:30.000000Z"
            },
            {
                "id": 1161,
                "drug_id": 228,
                "brand_id": 1132,
                "created_at": "2020-05-06T20:52:33.000000Z",
                "updated_at": "2020-05-06T20:52:33.000000Z"
            },
            {
                "id": 1162,
                "drug_id": 228,
                "brand_id": 1133,
                "created_at": "2020-05-06T20:52:35.000000Z",
                "updated_at": "2020-05-06T20:52:35.000000Z"
            },
            {
                "id": 1163,
                "drug_id": 229,
                "brand_id": 1134,
                "created_at": "2020-05-06T20:53:28.000000Z",
                "updated_at": "2020-05-06T20:53:28.000000Z"
            },
            {
                "id": 1164,
                "drug_id": 229,
                "brand_id": 1135,
                "created_at": "2020-05-06T20:53:31.000000Z",
                "updated_at": "2020-05-06T20:53:31.000000Z"
            },
            {
                "id": 1165,
                "drug_id": 229,
                "brand_id": 1136,
                "created_at": "2020-05-06T20:53:33.000000Z",
                "updated_at": "2020-05-06T20:53:33.000000Z"
            },
            {
                "id": 1166,
                "drug_id": 230,
                "brand_id": 1137,
                "created_at": "2020-05-06T20:54:13.000000Z",
                "updated_at": "2020-05-06T20:54:13.000000Z"
            },
            {
                "id": 1205,
                "drug_id": 234,
                "brand_id": 1176,
                "created_at": "2020-05-06T20:58:16.000000Z",
                "updated_at": "2020-05-06T20:58:16.000000Z"
            },
            {
                "id": 1206,
                "drug_id": 234,
                "brand_id": 1177,
                "created_at": "2020-05-06T20:58:19.000000Z",
                "updated_at": "2020-05-06T20:58:19.000000Z"
            },
            {
                "id": 1208,
                "drug_id": 236,
                "brand_id": 1179,
                "created_at": "2020-05-06T21:00:49.000000Z",
                "updated_at": "2020-05-06T21:00:49.000000Z"
            },
            {
                "id": 1209,
                "drug_id": 237,
                "brand_id": 1180,
                "created_at": "2020-05-06T21:01:50.000000Z",
                "updated_at": "2020-05-06T21:01:50.000000Z"
            },
            {
                "id": 1210,
                "drug_id": 237,
                "brand_id": 1181,
                "created_at": "2020-05-06T21:01:53.000000Z",
                "updated_at": "2020-05-06T21:01:53.000000Z"
            },
            {
                "id": 1212,
                "drug_id": 239,
                "brand_id": 1183,
                "created_at": "2020-05-06T21:05:04.000000Z",
                "updated_at": "2020-05-06T21:05:04.000000Z"
            },
            {
                "id": 1216,
                "drug_id": 242,
                "brand_id": 1187,
                "created_at": "2020-05-06T21:07:12.000000Z",
                "updated_at": "2020-05-06T21:07:12.000000Z"
            },
            {
                "id": 1217,
                "drug_id": 243,
                "brand_id": 1188,
                "created_at": "2020-05-06T21:08:03.000000Z",
                "updated_at": "2020-05-06T21:08:03.000000Z"
            },
            {
                "id": 1218,
                "drug_id": 243,
                "brand_id": 1189,
                "created_at": "2020-05-06T21:08:07.000000Z",
                "updated_at": "2020-05-06T21:08:07.000000Z"
            },
            {
                "id": 1219,
                "drug_id": 243,
                "brand_id": 1190,
                "created_at": "2020-05-06T21:08:09.000000Z",
                "updated_at": "2020-05-06T21:08:09.000000Z"
            },
            {
                "id": 1220,
                "drug_id": 244,
                "brand_id": 1191,
                "created_at": "2020-05-06T21:09:00.000000Z",
                "updated_at": "2020-05-06T21:09:00.000000Z"
            },
            {
                "id": 1221,
                "drug_id": 244,
                "brand_id": 1192,
                "created_at": "2020-05-06T21:09:02.000000Z",
                "updated_at": "2020-05-06T21:09:02.000000Z"
            },
            {
                "id": 1222,
                "drug_id": 246,
                "brand_id": 1193,
                "created_at": "2020-05-06T21:11:16.000000Z",
                "updated_at": "2020-05-06T21:11:16.000000Z"
            },
            {
                "id": 1235,
                "drug_id": 251,
                "brand_id": 1206,
                "created_at": "2020-05-06T21:18:13.000000Z",
                "updated_at": "2020-05-06T21:18:13.000000Z"
            },
            {
                "id": 1236,
                "drug_id": 251,
                "brand_id": 1207,
                "created_at": "2020-05-06T21:18:15.000000Z",
                "updated_at": "2020-05-06T21:18:15.000000Z"
            },
            {
                "id": 1237,
                "drug_id": 251,
                "brand_id": 1208,
                "created_at": "2020-05-06T21:18:18.000000Z",
                "updated_at": "2020-05-06T21:18:18.000000Z"
            },
            {
                "id": 1238,
                "drug_id": 251,
                "brand_id": 1209,
                "created_at": "2020-05-06T21:18:20.000000Z",
                "updated_at": "2020-05-06T21:18:20.000000Z"
            },
            {
                "id": 1239,
                "drug_id": 251,
                "brand_id": 1210,
                "created_at": "2020-05-06T21:18:22.000000Z",
                "updated_at": "2020-05-06T21:18:22.000000Z"
            },
            {
                "id": 1240,
                "drug_id": 251,
                "brand_id": 1211,
                "created_at": "2020-05-06T21:18:24.000000Z",
                "updated_at": "2020-05-06T21:18:24.000000Z"
            },
            {
                "id": 1241,
                "drug_id": 251,
                "brand_id": 1212,
                "created_at": "2020-05-06T21:18:27.000000Z",
                "updated_at": "2020-05-06T21:18:27.000000Z"
            },
            {
                "id": 1242,
                "drug_id": 251,
                "brand_id": 1213,
                "created_at": "2020-05-06T21:18:29.000000Z",
                "updated_at": "2020-05-06T21:18:29.000000Z"
            },
            {
                "id": 1243,
                "drug_id": 251,
                "brand_id": 1214,
                "created_at": "2020-05-06T21:18:31.000000Z",
                "updated_at": "2020-05-06T21:18:31.000000Z"
            },
            {
                "id": 1244,
                "drug_id": 251,
                "brand_id": 1215,
                "created_at": "2020-05-06T21:18:33.000000Z",
                "updated_at": "2020-05-06T21:18:33.000000Z"
            },
            {
                "id": 1245,
                "drug_id": 251,
                "brand_id": 1216,
                "created_at": "2020-05-06T21:18:36.000000Z",
                "updated_at": "2020-05-06T21:18:36.000000Z"
            },
            {
                "id": 1246,
                "drug_id": 251,
                "brand_id": 1217,
                "created_at": "2020-05-06T21:18:38.000000Z",
                "updated_at": "2020-05-06T21:18:38.000000Z"
            },
            {
                "id": 1247,
                "drug_id": 251,
                "brand_id": 1218,
                "created_at": "2020-05-06T21:18:40.000000Z",
                "updated_at": "2020-05-06T21:18:40.000000Z"
            },
            {
                "id": 1248,
                "drug_id": 251,
                "brand_id": 1219,
                "created_at": "2020-05-06T21:18:43.000000Z",
                "updated_at": "2020-05-06T21:18:43.000000Z"
            },
            {
                "id": 1249,
                "drug_id": 251,
                "brand_id": 1220,
                "created_at": "2020-05-06T21:18:45.000000Z",
                "updated_at": "2020-05-06T21:18:45.000000Z"
            },
            {
                "id": 1251,
                "drug_id": 254,
                "brand_id": 1222,
                "created_at": "2020-05-06T22:04:39.000000Z",
                "updated_at": "2020-05-06T22:04:39.000000Z"
            },
            {
                "id": 1252,
                "drug_id": 254,
                "brand_id": 1223,
                "created_at": "2020-05-06T22:04:41.000000Z",
                "updated_at": "2020-05-06T22:04:41.000000Z"
            },
            {
                "id": 1253,
                "drug_id": 254,
                "brand_id": 1224,
                "created_at": "2020-05-06T22:04:44.000000Z",
                "updated_at": "2020-05-06T22:04:44.000000Z"
            },
            {
                "id": 1254,
                "drug_id": 254,
                "brand_id": 1225,
                "created_at": "2020-05-06T22:04:46.000000Z",
                "updated_at": "2020-05-06T22:04:46.000000Z"
            },
            {
                "id": 1255,
                "drug_id": 254,
                "brand_id": 1226,
                "created_at": "2020-05-06T22:04:48.000000Z",
                "updated_at": "2020-05-06T22:04:48.000000Z"
            },
            {
                "id": 1256,
                "drug_id": 254,
                "brand_id": 1227,
                "created_at": "2020-05-06T22:04:51.000000Z",
                "updated_at": "2020-05-06T22:04:51.000000Z"
            },
            {
                "id": 1257,
                "drug_id": 254,
                "brand_id": 1228,
                "created_at": "2020-05-06T22:04:53.000000Z",
                "updated_at": "2020-05-06T22:04:53.000000Z"
            },
            {
                "id": 1281,
                "drug_id": 257,
                "brand_id": 1252,
                "created_at": "2020-05-06T22:15:19.000000Z",
                "updated_at": "2020-05-06T22:15:19.000000Z"
            },
            {
                "id": 1282,
                "drug_id": 257,
                "brand_id": 1253,
                "created_at": "2020-05-06T22:15:21.000000Z",
                "updated_at": "2020-05-06T22:15:21.000000Z"
            },
            {
                "id": 1283,
                "drug_id": 257,
                "brand_id": 1253,
                "created_at": "2020-05-06T22:15:21.000000Z",
                "updated_at": "2020-05-06T22:15:21.000000Z"
            },
            {
                "id": 1284,
                "drug_id": 258,
                "brand_id": 1254,
                "created_at": "2020-05-06T22:18:09.000000Z",
                "updated_at": "2020-05-06T22:18:09.000000Z"
            },
            {
                "id": 1285,
                "drug_id": 258,
                "brand_id": 1255,
                "created_at": "2020-05-06T22:18:11.000000Z",
                "updated_at": "2020-05-06T22:18:11.000000Z"
            },
            {
                "id": 1286,
                "drug_id": 258,
                "brand_id": 1256,
                "created_at": "2020-05-06T22:18:14.000000Z",
                "updated_at": "2020-05-06T22:18:14.000000Z"
            },
            {
                "id": 1287,
                "drug_id": 258,
                "brand_id": 1257,
                "created_at": "2020-05-06T22:18:16.000000Z",
                "updated_at": "2020-05-06T22:18:16.000000Z"
            },
            {
                "id": 1288,
                "drug_id": 258,
                "brand_id": 1258,
                "created_at": "2020-05-06T22:18:20.000000Z",
                "updated_at": "2020-05-06T22:18:20.000000Z"
            },
            {
                "id": 1289,
                "drug_id": 258,
                "brand_id": 1259,
                "created_at": "2020-05-06T22:18:22.000000Z",
                "updated_at": "2020-05-06T22:18:22.000000Z"
            },
            {
                "id": 1290,
                "drug_id": 258,
                "brand_id": 1260,
                "created_at": "2020-05-06T22:18:24.000000Z",
                "updated_at": "2020-05-06T22:18:24.000000Z"
            },
            {
                "id": 1291,
                "drug_id": 258,
                "brand_id": 1261,
                "created_at": "2020-05-06T22:18:27.000000Z",
                "updated_at": "2020-05-06T22:18:27.000000Z"
            },
            {
                "id": 1292,
                "drug_id": 258,
                "brand_id": 1262,
                "created_at": "2020-05-06T22:18:29.000000Z",
                "updated_at": "2020-05-06T22:18:29.000000Z"
            },
            {
                "id": 1293,
                "drug_id": 259,
                "brand_id": 1263,
                "created_at": "2020-05-06T22:21:08.000000Z",
                "updated_at": "2020-05-06T22:21:08.000000Z"
            },
            {
                "id": 1294,
                "drug_id": 259,
                "brand_id": 1264,
                "created_at": "2020-05-06T22:21:10.000000Z",
                "updated_at": "2020-05-06T22:21:10.000000Z"
            },
            {
                "id": 1295,
                "drug_id": 259,
                "brand_id": 1265,
                "created_at": "2020-05-06T22:21:12.000000Z",
                "updated_at": "2020-05-06T22:21:12.000000Z"
            },
            {
                "id": 1296,
                "drug_id": 259,
                "brand_id": 1266,
                "created_at": "2020-05-06T22:21:15.000000Z",
                "updated_at": "2020-05-06T22:21:15.000000Z"
            },
            {
                "id": 1297,
                "drug_id": 259,
                "brand_id": 1267,
                "created_at": "2020-05-06T22:21:17.000000Z",
                "updated_at": "2020-05-06T22:21:17.000000Z"
            },
            {
                "id": 1298,
                "drug_id": 259,
                "brand_id": 1268,
                "created_at": "2020-05-06T22:21:20.000000Z",
                "updated_at": "2020-05-06T22:21:20.000000Z"
            },
            {
                "id": 1299,
                "drug_id": 259,
                "brand_id": 1269,
                "created_at": "2020-05-06T22:21:22.000000Z",
                "updated_at": "2020-05-06T22:21:22.000000Z"
            },
            {
                "id": 1300,
                "drug_id": 260,
                "brand_id": 1270,
                "created_at": "2020-05-06T22:22:40.000000Z",
                "updated_at": "2020-05-06T22:22:40.000000Z"
            },
            {
                "id": 1301,
                "drug_id": 260,
                "brand_id": 1271,
                "created_at": "2020-05-06T22:22:42.000000Z",
                "updated_at": "2020-05-06T22:22:42.000000Z"
            },
            {
                "id": 1302,
                "drug_id": 260,
                "brand_id": 1272,
                "created_at": "2020-05-06T22:22:44.000000Z",
                "updated_at": "2020-05-06T22:22:44.000000Z"
            },
            {
                "id": 1303,
                "drug_id": 260,
                "brand_id": 1273,
                "created_at": "2020-05-06T22:22:46.000000Z",
                "updated_at": "2020-05-06T22:22:46.000000Z"
            },
            {
                "id": 1304,
                "drug_id": 260,
                "brand_id": 1274,
                "created_at": "2020-05-06T22:22:49.000000Z",
                "updated_at": "2020-05-06T22:22:49.000000Z"
            },
            {
                "id": 1305,
                "drug_id": 260,
                "brand_id": 1275,
                "created_at": "2020-05-06T22:22:51.000000Z",
                "updated_at": "2020-05-06T22:22:51.000000Z"
            },
            {
                "id": 1306,
                "drug_id": 260,
                "brand_id": 1276,
                "created_at": "2020-05-06T22:22:53.000000Z",
                "updated_at": "2020-05-06T22:22:53.000000Z"
            },
            {
                "id": 1307,
                "drug_id": 260,
                "brand_id": 1277,
                "created_at": "2020-05-06T22:22:56.000000Z",
                "updated_at": "2020-05-06T22:22:56.000000Z"
            },
            {
                "id": 1308,
                "drug_id": 260,
                "brand_id": 1278,
                "created_at": "2020-05-06T22:22:58.000000Z",
                "updated_at": "2020-05-06T22:22:58.000000Z"
            },
            {
                "id": 1309,
                "drug_id": 260,
                "brand_id": 1279,
                "created_at": "2020-05-06T22:23:00.000000Z",
                "updated_at": "2020-05-06T22:23:00.000000Z"
            },
            {
                "id": 1310,
                "drug_id": 260,
                "brand_id": 1280,
                "created_at": "2020-05-06T22:23:03.000000Z",
                "updated_at": "2020-05-06T22:23:03.000000Z"
            },
            {
                "id": 1311,
                "drug_id": 260,
                "brand_id": 1281,
                "created_at": "2020-05-06T22:23:05.000000Z",
                "updated_at": "2020-05-06T22:23:05.000000Z"
            },
            {
                "id": 1312,
                "drug_id": 260,
                "brand_id": 1282,
                "created_at": "2020-05-06T22:23:07.000000Z",
                "updated_at": "2020-05-06T22:23:07.000000Z"
            },
            {
                "id": 1313,
                "drug_id": 260,
                "brand_id": 1283,
                "created_at": "2020-05-06T22:23:10.000000Z",
                "updated_at": "2020-05-06T22:23:10.000000Z"
            },
            {
                "id": 1314,
                "drug_id": 260,
                "brand_id": 1284,
                "created_at": "2020-05-06T22:23:13.000000Z",
                "updated_at": "2020-05-06T22:23:13.000000Z"
            },
            {
                "id": 1315,
                "drug_id": 262,
                "brand_id": 1285,
                "created_at": "2020-05-06T22:26:06.000000Z",
                "updated_at": "2020-05-06T22:26:06.000000Z"
            },
            {
                "id": 1316,
                "drug_id": 262,
                "brand_id": 1286,
                "created_at": "2020-05-06T22:26:08.000000Z",
                "updated_at": "2020-05-06T22:26:08.000000Z"
            },
            {
                "id": 1317,
                "drug_id": 262,
                "brand_id": 1287,
                "created_at": "2020-05-06T22:26:10.000000Z",
                "updated_at": "2020-05-06T22:26:10.000000Z"
            },
            {
                "id": 1318,
                "drug_id": 262,
                "brand_id": 1288,
                "created_at": "2020-05-06T22:26:13.000000Z",
                "updated_at": "2020-05-06T22:26:13.000000Z"
            },
            {
                "id": 1319,
                "drug_id": 262,
                "brand_id": 1289,
                "created_at": "2020-05-06T22:26:15.000000Z",
                "updated_at": "2020-05-06T22:26:15.000000Z"
            },
            {
                "id": 1320,
                "drug_id": 262,
                "brand_id": 1290,
                "created_at": "2020-05-06T22:26:17.000000Z",
                "updated_at": "2020-05-06T22:26:17.000000Z"
            },
            {
                "id": 1321,
                "drug_id": 262,
                "brand_id": 1291,
                "created_at": "2020-05-06T22:26:19.000000Z",
                "updated_at": "2020-05-06T22:26:19.000000Z"
            },
            {
                "id": 1322,
                "drug_id": 262,
                "brand_id": 1292,
                "created_at": "2020-05-06T22:26:22.000000Z",
                "updated_at": "2020-05-06T22:26:22.000000Z"
            },
            {
                "id": 1323,
                "drug_id": 262,
                "brand_id": 1293,
                "created_at": "2020-05-06T22:26:24.000000Z",
                "updated_at": "2020-05-06T22:26:24.000000Z"
            },
            {
                "id": 1324,
                "drug_id": 262,
                "brand_id": 1294,
                "created_at": "2020-05-06T22:26:26.000000Z",
                "updated_at": "2020-05-06T22:26:26.000000Z"
            },
            {
                "id": 1325,
                "drug_id": 262,
                "brand_id": 1295,
                "created_at": "2020-05-06T22:26:29.000000Z",
                "updated_at": "2020-05-06T22:26:29.000000Z"
            },
            {
                "id": 1326,
                "drug_id": 262,
                "brand_id": 1296,
                "created_at": "2020-05-06T22:26:31.000000Z",
                "updated_at": "2020-05-06T22:26:31.000000Z"
            },
            {
                "id": 1327,
                "drug_id": 262,
                "brand_id": 1297,
                "created_at": "2020-05-06T22:26:33.000000Z",
                "updated_at": "2020-05-06T22:26:33.000000Z"
            },
            {
                "id": 1328,
                "drug_id": 263,
                "brand_id": 1298,
                "created_at": "2020-05-06T22:28:14.000000Z",
                "updated_at": "2020-05-06T22:28:14.000000Z"
            },
            {
                "id": 1329,
                "drug_id": 264,
                "brand_id": 1299,
                "created_at": "2020-05-06T22:29:12.000000Z",
                "updated_at": "2020-05-06T22:29:12.000000Z"
            },
            {
                "id": 1330,
                "drug_id": 264,
                "brand_id": 1300,
                "created_at": "2020-05-06T22:29:14.000000Z",
                "updated_at": "2020-05-06T22:29:14.000000Z"
            },
            {
                "id": 1331,
                "drug_id": 264,
                "brand_id": 1301,
                "created_at": "2020-05-06T22:29:17.000000Z",
                "updated_at": "2020-05-06T22:29:17.000000Z"
            },
            {
                "id": 1332,
                "drug_id": 264,
                "brand_id": 1302,
                "created_at": "2020-05-06T22:29:19.000000Z",
                "updated_at": "2020-05-06T22:29:19.000000Z"
            },
            {
                "id": 1333,
                "drug_id": 264,
                "brand_id": 1303,
                "created_at": "2020-05-06T22:29:22.000000Z",
                "updated_at": "2020-05-06T22:29:22.000000Z"
            },
            {
                "id": 1334,
                "drug_id": 265,
                "brand_id": 1304,
                "created_at": "2020-05-06T22:30:56.000000Z",
                "updated_at": "2020-05-06T22:30:56.000000Z"
            },
            {
                "id": 1335,
                "drug_id": 265,
                "brand_id": 1305,
                "created_at": "2020-05-06T22:30:58.000000Z",
                "updated_at": "2020-05-06T22:30:58.000000Z"
            },
            {
                "id": 1336,
                "drug_id": 265,
                "brand_id": 1306,
                "created_at": "2020-05-06T22:31:00.000000Z",
                "updated_at": "2020-05-06T22:31:00.000000Z"
            },
            {
                "id": 1337,
                "drug_id": 265,
                "brand_id": 1307,
                "created_at": "2020-05-06T22:31:03.000000Z",
                "updated_at": "2020-05-06T22:31:03.000000Z"
            },
            {
                "id": 1338,
                "drug_id": 265,
                "brand_id": 1308,
                "created_at": "2020-05-06T22:31:05.000000Z",
                "updated_at": "2020-05-06T22:31:05.000000Z"
            },
            {
                "id": 1339,
                "drug_id": 265,
                "brand_id": 1309,
                "created_at": "2020-05-06T22:31:07.000000Z",
                "updated_at": "2020-05-06T22:31:07.000000Z"
            },
            {
                "id": 1340,
                "drug_id": 265,
                "brand_id": 1310,
                "created_at": "2020-05-06T22:31:10.000000Z",
                "updated_at": "2020-05-06T22:31:10.000000Z"
            },
            {
                "id": 1341,
                "drug_id": 266,
                "brand_id": 1311,
                "created_at": "2020-05-06T22:32:10.000000Z",
                "updated_at": "2020-05-06T22:32:10.000000Z"
            },
            {
                "id": 1342,
                "drug_id": 267,
                "brand_id": 1312,
                "created_at": "2020-05-06T22:34:40.000000Z",
                "updated_at": "2020-05-06T22:34:40.000000Z"
            },
            {
                "id": 1343,
                "drug_id": 267,
                "brand_id": 1313,
                "created_at": "2020-05-06T22:34:43.000000Z",
                "updated_at": "2020-05-06T22:34:43.000000Z"
            },
            {
                "id": 1344,
                "drug_id": 267,
                "brand_id": 1314,
                "created_at": "2020-05-06T22:34:45.000000Z",
                "updated_at": "2020-05-06T22:34:45.000000Z"
            },
            {
                "id": 1345,
                "drug_id": 267,
                "brand_id": 1315,
                "created_at": "2020-05-06T22:34:48.000000Z",
                "updated_at": "2020-05-06T22:34:48.000000Z"
            },
            {
                "id": 1346,
                "drug_id": 267,
                "brand_id": 1316,
                "created_at": "2020-05-06T22:34:50.000000Z",
                "updated_at": "2020-05-06T22:34:50.000000Z"
            },
            {
                "id": 1347,
                "drug_id": 267,
                "brand_id": 1317,
                "created_at": "2020-05-06T22:34:53.000000Z",
                "updated_at": "2020-05-06T22:34:53.000000Z"
            },
            {
                "id": 1348,
                "drug_id": 267,
                "brand_id": 1318,
                "created_at": "2020-05-06T22:34:55.000000Z",
                "updated_at": "2020-05-06T22:34:55.000000Z"
            },
            {
                "id": 1349,
                "drug_id": 267,
                "brand_id": 1319,
                "created_at": "2020-05-06T22:34:59.000000Z",
                "updated_at": "2020-05-06T22:34:59.000000Z"
            },
            {
                "id": 1350,
                "drug_id": 267,
                "brand_id": 1320,
                "created_at": "2020-05-06T22:35:01.000000Z",
                "updated_at": "2020-05-06T22:35:01.000000Z"
            },
            {
                "id": 1351,
                "drug_id": 267,
                "brand_id": 1321,
                "created_at": "2020-05-06T22:35:03.000000Z",
                "updated_at": "2020-05-06T22:35:03.000000Z"
            },
            {
                "id": 1352,
                "drug_id": 267,
                "brand_id": 1322,
                "created_at": "2020-05-06T22:35:05.000000Z",
                "updated_at": "2020-05-06T22:35:05.000000Z"
            },
            {
                "id": 1353,
                "drug_id": 267,
                "brand_id": 1323,
                "created_at": "2020-05-06T22:35:08.000000Z",
                "updated_at": "2020-05-06T22:35:08.000000Z"
            },
            {
                "id": 1354,
                "drug_id": 267,
                "brand_id": 1324,
                "created_at": "2020-05-06T22:35:10.000000Z",
                "updated_at": "2020-05-06T22:35:10.000000Z"
            },
            {
                "id": 1355,
                "drug_id": 268,
                "brand_id": 1325,
                "created_at": "2020-05-06T22:37:21.000000Z",
                "updated_at": "2020-05-06T22:37:21.000000Z"
            },
            {
                "id": 1356,
                "drug_id": 268,
                "brand_id": 1326,
                "created_at": "2020-05-06T22:37:23.000000Z",
                "updated_at": "2020-05-06T22:37:23.000000Z"
            },
            {
                "id": 1357,
                "drug_id": 269,
                "brand_id": 1327,
                "created_at": "2020-05-06T22:37:58.000000Z",
                "updated_at": "2020-05-06T22:37:58.000000Z"
            },
            {
                "id": 1358,
                "drug_id": 269,
                "brand_id": 1328,
                "created_at": "2020-05-06T22:38:00.000000Z",
                "updated_at": "2020-05-06T22:38:00.000000Z"
            },
            {
                "id": 1359,
                "drug_id": 269,
                "brand_id": 1329,
                "created_at": "2020-05-06T22:38:02.000000Z",
                "updated_at": "2020-05-06T22:38:02.000000Z"
            },
            {
                "id": 1360,
                "drug_id": 270,
                "brand_id": 1330,
                "created_at": "2020-05-06T22:38:44.000000Z",
                "updated_at": "2020-05-06T22:38:44.000000Z"
            },
            {
                "id": 1361,
                "drug_id": 270,
                "brand_id": 1331,
                "created_at": "2020-05-06T22:38:46.000000Z",
                "updated_at": "2020-05-06T22:38:46.000000Z"
            },
            {
                "id": 1362,
                "drug_id": 271,
                "brand_id": 1332,
                "created_at": "2020-05-06T22:40:03.000000Z",
                "updated_at": "2020-05-06T22:40:03.000000Z"
            },
            {
                "id": 1363,
                "drug_id": 271,
                "brand_id": 1333,
                "created_at": "2020-05-06T22:40:05.000000Z",
                "updated_at": "2020-05-06T22:40:05.000000Z"
            },
            {
                "id": 1364,
                "drug_id": 271,
                "brand_id": 1334,
                "created_at": "2020-05-06T22:40:07.000000Z",
                "updated_at": "2020-05-06T22:40:07.000000Z"
            },
            {
                "id": 1365,
                "drug_id": 271,
                "brand_id": 1335,
                "created_at": "2020-05-06T22:40:10.000000Z",
                "updated_at": "2020-05-06T22:40:10.000000Z"
            },
            {
                "id": 1366,
                "drug_id": 271,
                "brand_id": 1336,
                "created_at": "2020-05-06T22:40:12.000000Z",
                "updated_at": "2020-05-06T22:40:12.000000Z"
            },
            {
                "id": 1367,
                "drug_id": 271,
                "brand_id": 1337,
                "created_at": "2020-05-06T22:40:14.000000Z",
                "updated_at": "2020-05-06T22:40:14.000000Z"
            },
            {
                "id": 1368,
                "drug_id": 271,
                "brand_id": 1338,
                "created_at": "2020-05-06T22:40:16.000000Z",
                "updated_at": "2020-05-06T22:40:16.000000Z"
            },
            {
                "id": 1369,
                "drug_id": 271,
                "brand_id": 1339,
                "created_at": "2020-05-06T22:40:19.000000Z",
                "updated_at": "2020-05-06T22:40:19.000000Z"
            },
            {
                "id": 1370,
                "drug_id": 271,
                "brand_id": 1340,
                "created_at": "2020-05-06T22:40:21.000000Z",
                "updated_at": "2020-05-06T22:40:21.000000Z"
            },
            {
                "id": 1371,
                "drug_id": 273,
                "brand_id": 1341,
                "created_at": "2020-05-06T22:43:14.000000Z",
                "updated_at": "2020-05-06T22:43:14.000000Z"
            },
            {
                "id": 1372,
                "drug_id": 273,
                "brand_id": 1342,
                "created_at": "2020-05-06T22:43:17.000000Z",
                "updated_at": "2020-05-06T22:43:17.000000Z"
            },
            {
                "id": 1373,
                "drug_id": 274,
                "brand_id": 1343,
                "created_at": "2020-05-06T22:43:50.000000Z",
                "updated_at": "2020-05-06T22:43:50.000000Z"
            },
            {
                "id": 1374,
                "drug_id": 274,
                "brand_id": 1344,
                "created_at": "2020-05-06T22:43:52.000000Z",
                "updated_at": "2020-05-06T22:43:52.000000Z"
            },
            {
                "id": 1375,
                "drug_id": 274,
                "brand_id": 1345,
                "created_at": "2020-05-06T22:43:55.000000Z",
                "updated_at": "2020-05-06T22:43:55.000000Z"
            },
            {
                "id": 1376,
                "drug_id": 274,
                "brand_id": 1346,
                "created_at": "2020-05-06T22:43:57.000000Z",
                "updated_at": "2020-05-06T22:43:57.000000Z"
            },
            {
                "id": 1377,
                "drug_id": 274,
                "brand_id": 1347,
                "created_at": "2020-05-06T22:44:00.000000Z",
                "updated_at": "2020-05-06T22:44:00.000000Z"
            },
            {
                "id": 1378,
                "drug_id": 274,
                "brand_id": 1348,
                "created_at": "2020-05-06T22:44:02.000000Z",
                "updated_at": "2020-05-06T22:44:02.000000Z"
            },
            {
                "id": 1379,
                "drug_id": 274,
                "brand_id": 1349,
                "created_at": "2020-05-06T22:44:04.000000Z",
                "updated_at": "2020-05-06T22:44:04.000000Z"
            },
            {
                "id": 1380,
                "drug_id": 274,
                "brand_id": 1350,
                "created_at": "2020-05-06T22:44:07.000000Z",
                "updated_at": "2020-05-06T22:44:07.000000Z"
            },
            {
                "id": 1381,
                "drug_id": 274,
                "brand_id": 1351,
                "created_at": "2020-05-06T22:44:09.000000Z",
                "updated_at": "2020-05-06T22:44:09.000000Z"
            },
            {
                "id": 1382,
                "drug_id": 274,
                "brand_id": 1352,
                "created_at": "2020-05-06T22:44:11.000000Z",
                "updated_at": "2020-05-06T22:44:11.000000Z"
            },
            {
                "id": 1383,
                "drug_id": 274,
                "brand_id": 1353,
                "created_at": "2020-05-06T22:44:14.000000Z",
                "updated_at": "2020-05-06T22:44:14.000000Z"
            },
            {
                "id": 1384,
                "drug_id": 274,
                "brand_id": 1354,
                "created_at": "2020-05-06T22:44:16.000000Z",
                "updated_at": "2020-05-06T22:44:16.000000Z"
            },
            {
                "id": 1385,
                "drug_id": 274,
                "brand_id": 1355,
                "created_at": "2020-05-06T22:44:18.000000Z",
                "updated_at": "2020-05-06T22:44:18.000000Z"
            },
            {
                "id": 1386,
                "drug_id": 274,
                "brand_id": 1356,
                "created_at": "2020-05-06T22:44:21.000000Z",
                "updated_at": "2020-05-06T22:44:21.000000Z"
            },
            {
                "id": 1387,
                "drug_id": 274,
                "brand_id": 1357,
                "created_at": "2020-05-06T22:44:23.000000Z",
                "updated_at": "2020-05-06T22:44:23.000000Z"
            },
            {
                "id": 1388,
                "drug_id": 274,
                "brand_id": 1358,
                "created_at": "2020-05-06T22:44:25.000000Z",
                "updated_at": "2020-05-06T22:44:25.000000Z"
            },
            {
                "id": 1389,
                "drug_id": 275,
                "brand_id": 1359,
                "created_at": "2020-05-06T22:45:25.000000Z",
                "updated_at": "2020-05-06T22:45:25.000000Z"
            },
            {
                "id": 1390,
                "drug_id": 276,
                "brand_id": 1360,
                "created_at": "2020-05-06T22:46:50.000000Z",
                "updated_at": "2020-05-06T22:46:50.000000Z"
            },
            {
                "id": 1391,
                "drug_id": 276,
                "brand_id": 1361,
                "created_at": "2020-05-06T22:46:52.000000Z",
                "updated_at": "2020-05-06T22:46:52.000000Z"
            },
            {
                "id": 1392,
                "drug_id": 276,
                "brand_id": 1362,
                "created_at": "2020-05-06T22:46:55.000000Z",
                "updated_at": "2020-05-06T22:46:55.000000Z"
            },
            {
                "id": 1393,
                "drug_id": 276,
                "brand_id": 1362,
                "created_at": "2020-05-06T22:46:55.000000Z",
                "updated_at": "2020-05-06T22:46:55.000000Z"
            },
            {
                "id": 1394,
                "drug_id": 277,
                "brand_id": 1363,
                "created_at": "2020-05-06T22:47:36.000000Z",
                "updated_at": "2020-05-06T22:47:36.000000Z"
            },
            {
                "id": 1395,
                "drug_id": 277,
                "brand_id": 1364,
                "created_at": "2020-05-06T22:47:38.000000Z",
                "updated_at": "2020-05-06T22:47:38.000000Z"
            },
            {
                "id": 1396,
                "drug_id": 279,
                "brand_id": 1365,
                "created_at": "2020-05-06T22:51:01.000000Z",
                "updated_at": "2020-05-06T22:51:01.000000Z"
            },
            {
                "id": 1397,
                "drug_id": 279,
                "brand_id": 1366,
                "created_at": "2020-05-06T22:51:03.000000Z",
                "updated_at": "2020-05-06T22:51:03.000000Z"
            },
            {
                "id": 1398,
                "drug_id": 280,
                "brand_id": 1367,
                "created_at": "2020-05-06T22:52:56.000000Z",
                "updated_at": "2020-05-06T22:52:56.000000Z"
            },
            {
                "id": 1399,
                "drug_id": 280,
                "brand_id": 1367,
                "created_at": "2020-05-06T22:52:56.000000Z",
                "updated_at": "2020-05-06T22:52:56.000000Z"
            },
            {
                "id": 1400,
                "drug_id": 280,
                "brand_id": 1367,
                "created_at": "2020-05-06T22:52:56.000000Z",
                "updated_at": "2020-05-06T22:52:56.000000Z"
            },
            {
                "id": 1401,
                "drug_id": 280,
                "brand_id": 1368,
                "created_at": "2020-05-06T22:52:59.000000Z",
                "updated_at": "2020-05-06T22:52:59.000000Z"
            },
            {
                "id": 1402,
                "drug_id": 280,
                "brand_id": 1369,
                "created_at": "2020-05-06T22:53:01.000000Z",
                "updated_at": "2020-05-06T22:53:01.000000Z"
            },
            {
                "id": 1403,
                "drug_id": 280,
                "brand_id": 1370,
                "created_at": "2020-05-06T22:53:04.000000Z",
                "updated_at": "2020-05-06T22:53:04.000000Z"
            },
            {
                "id": 1404,
                "drug_id": 280,
                "brand_id": 1371,
                "created_at": "2020-05-06T22:53:06.000000Z",
                "updated_at": "2020-05-06T22:53:06.000000Z"
            },
            {
                "id": 1405,
                "drug_id": 280,
                "brand_id": 1372,
                "created_at": "2020-05-06T22:53:08.000000Z",
                "updated_at": "2020-05-06T22:53:08.000000Z"
            },
            {
                "id": 1406,
                "drug_id": 280,
                "brand_id": 1373,
                "created_at": "2020-05-06T22:53:11.000000Z",
                "updated_at": "2020-05-06T22:53:11.000000Z"
            },
            {
                "id": 1407,
                "drug_id": 280,
                "brand_id": 1374,
                "created_at": "2020-05-06T22:53:13.000000Z",
                "updated_at": "2020-05-06T22:53:13.000000Z"
            },
            {
                "id": 1408,
                "drug_id": 281,
                "brand_id": 1375,
                "created_at": "2020-05-06T22:55:06.000000Z",
                "updated_at": "2020-05-06T22:55:06.000000Z"
            },
            {
                "id": 1409,
                "drug_id": 282,
                "brand_id": 1376,
                "created_at": "2020-05-06T22:56:08.000000Z",
                "updated_at": "2020-05-06T22:56:08.000000Z"
            },
            {
                "id": 1410,
                "drug_id": 282,
                "brand_id": 1377,
                "created_at": "2020-05-06T22:56:10.000000Z",
                "updated_at": "2020-05-06T22:56:10.000000Z"
            },
            {
                "id": 1411,
                "drug_id": 283,
                "brand_id": 1378,
                "created_at": "2020-05-06T22:57:20.000000Z",
                "updated_at": "2020-05-06T22:57:20.000000Z"
            },
            {
                "id": 1412,
                "drug_id": 283,
                "brand_id": 1379,
                "created_at": "2020-05-06T22:57:22.000000Z",
                "updated_at": "2020-05-06T22:57:22.000000Z"
            },
            {
                "id": 1413,
                "drug_id": 283,
                "brand_id": 1380,
                "created_at": "2020-05-06T22:57:24.000000Z",
                "updated_at": "2020-05-06T22:57:24.000000Z"
            },
            {
                "id": 1414,
                "drug_id": 283,
                "brand_id": 1381,
                "created_at": "2020-05-06T22:57:27.000000Z",
                "updated_at": "2020-05-06T22:57:27.000000Z"
            },
            {
                "id": 1415,
                "drug_id": 283,
                "brand_id": 1382,
                "created_at": "2020-05-06T22:57:29.000000Z",
                "updated_at": "2020-05-06T22:57:29.000000Z"
            },
            {
                "id": 1416,
                "drug_id": 283,
                "brand_id": 1383,
                "created_at": "2020-05-06T22:57:31.000000Z",
                "updated_at": "2020-05-06T22:57:31.000000Z"
            },
            {
                "id": 1417,
                "drug_id": 284,
                "brand_id": 1384,
                "created_at": "2020-05-06T22:58:45.000000Z",
                "updated_at": "2020-05-06T22:58:45.000000Z"
            },
            {
                "id": 1418,
                "drug_id": 284,
                "brand_id": 1385,
                "created_at": "2020-05-06T22:58:48.000000Z",
                "updated_at": "2020-05-06T22:58:48.000000Z"
            },
            {
                "id": 1419,
                "drug_id": 284,
                "brand_id": 1386,
                "created_at": "2020-05-06T22:58:50.000000Z",
                "updated_at": "2020-05-06T22:58:50.000000Z"
            },
            {
                "id": 1420,
                "drug_id": 286,
                "brand_id": 1387,
                "created_at": "2020-05-06T23:00:08.000000Z",
                "updated_at": "2020-05-06T23:00:08.000000Z"
            },
            {
                "id": 1421,
                "drug_id": 287,
                "brand_id": 1388,
                "created_at": "2020-05-06T23:01:04.000000Z",
                "updated_at": "2020-05-06T23:01:04.000000Z"
            },
            {
                "id": 1422,
                "drug_id": 287,
                "brand_id": 1389,
                "created_at": "2020-05-06T23:01:07.000000Z",
                "updated_at": "2020-05-06T23:01:07.000000Z"
            },
            {
                "id": 1423,
                "drug_id": 287,
                "brand_id": 1390,
                "created_at": "2020-05-06T23:01:09.000000Z",
                "updated_at": "2020-05-06T23:01:09.000000Z"
            },
            {
                "id": 1424,
                "drug_id": 287,
                "brand_id": 1391,
                "created_at": "2020-05-06T23:01:11.000000Z",
                "updated_at": "2020-05-06T23:01:11.000000Z"
            },
            {
                "id": 1425,
                "drug_id": 287,
                "brand_id": 1392,
                "created_at": "2020-05-06T23:01:14.000000Z",
                "updated_at": "2020-05-06T23:01:14.000000Z"
            },
            {
                "id": 1426,
                "drug_id": 288,
                "brand_id": 1393,
                "created_at": "2020-05-06T23:03:24.000000Z",
                "updated_at": "2020-05-06T23:03:24.000000Z"
            },
            {
                "id": 1427,
                "drug_id": 288,
                "brand_id": 1394,
                "created_at": "2020-05-06T23:03:26.000000Z",
                "updated_at": "2020-05-06T23:03:26.000000Z"
            },
            {
                "id": 1428,
                "drug_id": 288,
                "brand_id": 1395,
                "created_at": "2020-05-06T23:03:29.000000Z",
                "updated_at": "2020-05-06T23:03:29.000000Z"
            },
            {
                "id": 1429,
                "drug_id": 288,
                "brand_id": 1396,
                "created_at": "2020-05-06T23:03:31.000000Z",
                "updated_at": "2020-05-06T23:03:31.000000Z"
            },
            {
                "id": 1430,
                "drug_id": 288,
                "brand_id": 1397,
                "created_at": "2020-05-06T23:03:33.000000Z",
                "updated_at": "2020-05-06T23:03:33.000000Z"
            },
            {
                "id": 1431,
                "drug_id": 288,
                "brand_id": 1398,
                "created_at": "2020-05-06T23:03:36.000000Z",
                "updated_at": "2020-05-06T23:03:36.000000Z"
            },
            {
                "id": 1432,
                "drug_id": 288,
                "brand_id": 1399,
                "created_at": "2020-05-06T23:03:38.000000Z",
                "updated_at": "2020-05-06T23:03:38.000000Z"
            },
            {
                "id": 1433,
                "drug_id": 288,
                "brand_id": 1400,
                "created_at": "2020-05-06T23:03:40.000000Z",
                "updated_at": "2020-05-06T23:03:40.000000Z"
            },
            {
                "id": 1434,
                "drug_id": 288,
                "brand_id": 1401,
                "created_at": "2020-05-06T23:03:43.000000Z",
                "updated_at": "2020-05-06T23:03:43.000000Z"
            },
            {
                "id": 1435,
                "drug_id": 289,
                "brand_id": 1402,
                "created_at": "2020-05-06T23:05:30.000000Z",
                "updated_at": "2020-05-06T23:05:30.000000Z"
            },
            {
                "id": 1436,
                "drug_id": 290,
                "brand_id": 1403,
                "created_at": "2020-05-06T23:06:39.000000Z",
                "updated_at": "2020-05-06T23:06:39.000000Z"
            },
            {
                "id": 1437,
                "drug_id": 291,
                "brand_id": 1404,
                "created_at": "2020-05-06T23:07:04.000000Z",
                "updated_at": "2020-05-06T23:07:04.000000Z"
            },
            {
                "id": 1438,
                "drug_id": 291,
                "brand_id": 1405,
                "created_at": "2020-05-06T23:07:07.000000Z",
                "updated_at": "2020-05-06T23:07:07.000000Z"
            },
            {
                "id": 1439,
                "drug_id": 291,
                "brand_id": 1406,
                "created_at": "2020-05-06T23:07:09.000000Z",
                "updated_at": "2020-05-06T23:07:09.000000Z"
            },
            {
                "id": 1440,
                "drug_id": 292,
                "brand_id": 1407,
                "created_at": "2020-05-06T23:07:58.000000Z",
                "updated_at": "2020-05-06T23:07:58.000000Z"
            },
            {
                "id": 1441,
                "drug_id": 292,
                "brand_id": 1408,
                "created_at": "2020-05-06T23:08:01.000000Z",
                "updated_at": "2020-05-06T23:08:01.000000Z"
            },
            {
                "id": 1442,
                "drug_id": 292,
                "brand_id": 1409,
                "created_at": "2020-05-06T23:08:03.000000Z",
                "updated_at": "2020-05-06T23:08:03.000000Z"
            },
            {
                "id": 1443,
                "drug_id": 292,
                "brand_id": 1410,
                "created_at": "2020-05-06T23:08:06.000000Z",
                "updated_at": "2020-05-06T23:08:06.000000Z"
            },
            {
                "id": 1444,
                "drug_id": 292,
                "brand_id": 1411,
                "created_at": "2020-05-06T23:08:08.000000Z",
                "updated_at": "2020-05-06T23:08:08.000000Z"
            },
            {
                "id": 1445,
                "drug_id": 292,
                "brand_id": 1412,
                "created_at": "2020-05-06T23:08:11.000000Z",
                "updated_at": "2020-05-06T23:08:11.000000Z"
            },
            {
                "id": 1446,
                "drug_id": 292,
                "brand_id": 1413,
                "created_at": "2020-05-06T23:08:13.000000Z",
                "updated_at": "2020-05-06T23:08:13.000000Z"
            },
            {
                "id": 1447,
                "drug_id": 292,
                "brand_id": 1414,
                "created_at": "2020-05-06T23:08:16.000000Z",
                "updated_at": "2020-05-06T23:08:16.000000Z"
            },
            {
                "id": 1448,
                "drug_id": 292,
                "brand_id": 1415,
                "created_at": "2020-05-06T23:08:18.000000Z",
                "updated_at": "2020-05-06T23:08:18.000000Z"
            },
            {
                "id": 1449,
                "drug_id": 292,
                "brand_id": 1416,
                "created_at": "2020-05-06T23:08:21.000000Z",
                "updated_at": "2020-05-06T23:08:21.000000Z"
            },
            {
                "id": 1450,
                "drug_id": 292,
                "brand_id": 1417,
                "created_at": "2020-05-06T23:08:23.000000Z",
                "updated_at": "2020-05-06T23:08:23.000000Z"
            },
            {
                "id": 1451,
                "drug_id": 293,
                "brand_id": 1418,
                "created_at": "2020-05-06T23:09:14.000000Z",
                "updated_at": "2020-05-06T23:09:14.000000Z"
            },
            {
                "id": 1452,
                "drug_id": 293,
                "brand_id": 1419,
                "created_at": "2020-05-06T23:09:16.000000Z",
                "updated_at": "2020-05-06T23:09:16.000000Z"
            },
            {
                "id": 1453,
                "drug_id": 293,
                "brand_id": 1420,
                "created_at": "2020-05-06T23:09:18.000000Z",
                "updated_at": "2020-05-06T23:09:18.000000Z"
            },
            {
                "id": 1454,
                "drug_id": 293,
                "brand_id": 1421,
                "created_at": "2020-05-06T23:09:21.000000Z",
                "updated_at": "2020-05-06T23:09:21.000000Z"
            },
            {
                "id": 1455,
                "drug_id": 293,
                "brand_id": 1422,
                "created_at": "2020-05-06T23:09:23.000000Z",
                "updated_at": "2020-05-06T23:09:23.000000Z"
            },
            {
                "id": 1456,
                "drug_id": 293,
                "brand_id": 1423,
                "created_at": "2020-05-06T23:09:25.000000Z",
                "updated_at": "2020-05-06T23:09:25.000000Z"
            },
            {
                "id": 1457,
                "drug_id": 293,
                "brand_id": 1424,
                "created_at": "2020-05-06T23:09:27.000000Z",
                "updated_at": "2020-05-06T23:09:27.000000Z"
            },
            {
                "id": 1458,
                "drug_id": 293,
                "brand_id": 1425,
                "created_at": "2020-05-06T23:09:30.000000Z",
                "updated_at": "2020-05-06T23:09:30.000000Z"
            },
            {
                "id": 1459,
                "drug_id": 295,
                "brand_id": 1426,
                "created_at": "2020-05-06T23:11:10.000000Z",
                "updated_at": "2020-05-06T23:11:10.000000Z"
            },
            {
                "id": 1460,
                "drug_id": 295,
                "brand_id": 1427,
                "created_at": "2020-05-06T23:11:12.000000Z",
                "updated_at": "2020-05-06T23:11:12.000000Z"
            },
            {
                "id": 1461,
                "drug_id": 295,
                "brand_id": 1428,
                "created_at": "2020-05-06T23:11:14.000000Z",
                "updated_at": "2020-05-06T23:11:14.000000Z"
            },
            {
                "id": 1462,
                "drug_id": 296,
                "brand_id": 1429,
                "created_at": "2020-05-06T23:11:48.000000Z",
                "updated_at": "2020-05-06T23:11:48.000000Z"
            },
            {
                "id": 1463,
                "drug_id": 296,
                "brand_id": 1430,
                "created_at": "2020-05-06T23:11:50.000000Z",
                "updated_at": "2020-05-06T23:11:50.000000Z"
            },
            {
                "id": 1464,
                "drug_id": 296,
                "brand_id": 1431,
                "created_at": "2020-05-06T23:11:53.000000Z",
                "updated_at": "2020-05-06T23:11:53.000000Z"
            },
            {
                "id": 1465,
                "drug_id": 298,
                "brand_id": 1432,
                "created_at": "2020-05-06T23:15:21.000000Z",
                "updated_at": "2020-05-06T23:15:21.000000Z"
            },
            {
                "id": 1466,
                "drug_id": 299,
                "brand_id": 1433,
                "created_at": "2020-05-06T23:16:58.000000Z",
                "updated_at": "2020-05-06T23:16:58.000000Z"
            },
            {
                "id": 1467,
                "drug_id": 299,
                "brand_id": 1434,
                "created_at": "2020-05-06T23:17:00.000000Z",
                "updated_at": "2020-05-06T23:17:00.000000Z"
            },
            {
                "id": 1468,
                "drug_id": 299,
                "brand_id": 1435,
                "created_at": "2020-05-06T23:17:02.000000Z",
                "updated_at": "2020-05-06T23:17:02.000000Z"
            },
            {
                "id": 1469,
                "drug_id": 299,
                "brand_id": 1436,
                "created_at": "2020-05-06T23:17:05.000000Z",
                "updated_at": "2020-05-06T23:17:05.000000Z"
            },
            {
                "id": 1470,
                "drug_id": 301,
                "brand_id": 1437,
                "created_at": "2020-05-06T23:18:52.000000Z",
                "updated_at": "2020-05-06T23:18:52.000000Z"
            },
            {
                "id": 1471,
                "drug_id": 301,
                "brand_id": 1438,
                "created_at": "2020-05-06T23:18:54.000000Z",
                "updated_at": "2020-05-06T23:18:54.000000Z"
            },
            {
                "id": 1472,
                "drug_id": 301,
                "brand_id": 1439,
                "created_at": "2020-05-06T23:18:56.000000Z",
                "updated_at": "2020-05-06T23:18:56.000000Z"
            },
            {
                "id": 1473,
                "drug_id": 301,
                "brand_id": 1440,
                "created_at": "2020-05-06T23:18:59.000000Z",
                "updated_at": "2020-05-06T23:18:59.000000Z"
            },
            {
                "id": 1474,
                "drug_id": 301,
                "brand_id": 1441,
                "created_at": "2020-05-06T23:19:01.000000Z",
                "updated_at": "2020-05-06T23:19:01.000000Z"
            },
            {
                "id": 1475,
                "drug_id": 301,
                "brand_id": 1442,
                "created_at": "2020-05-06T23:19:04.000000Z",
                "updated_at": "2020-05-06T23:19:04.000000Z"
            },
            {
                "id": 1476,
                "drug_id": 301,
                "brand_id": 1443,
                "created_at": "2020-05-06T23:19:06.000000Z",
                "updated_at": "2020-05-06T23:19:06.000000Z"
            },
            {
                "id": 1477,
                "drug_id": 302,
                "brand_id": 1444,
                "created_at": "2020-05-06T23:19:39.000000Z",
                "updated_at": "2020-05-06T23:19:39.000000Z"
            },
            {
                "id": 1478,
                "drug_id": 302,
                "brand_id": 1444,
                "created_at": "2020-05-06T23:19:39.000000Z",
                "updated_at": "2020-05-06T23:19:39.000000Z"
            },
            {
                "id": 1479,
                "drug_id": 302,
                "brand_id": 1445,
                "created_at": "2020-05-06T23:19:41.000000Z",
                "updated_at": "2020-05-06T23:19:41.000000Z"
            },
            {
                "id": 1480,
                "drug_id": 302,
                "brand_id": 1446,
                "created_at": "2020-05-06T23:19:44.000000Z",
                "updated_at": "2020-05-06T23:19:44.000000Z"
            },
            {
                "id": 1481,
                "drug_id": 303,
                "brand_id": 1447,
                "created_at": "2020-05-06T23:22:07.000000Z",
                "updated_at": "2020-05-06T23:22:07.000000Z"
            },
            {
                "id": 1482,
                "drug_id": 303,
                "brand_id": 1448,
                "created_at": "2020-05-06T23:22:09.000000Z",
                "updated_at": "2020-05-06T23:22:09.000000Z"
            },
            {
                "id": 1483,
                "drug_id": 303,
                "brand_id": 1449,
                "created_at": "2020-05-06T23:22:12.000000Z",
                "updated_at": "2020-05-06T23:22:12.000000Z"
            },
            {
                "id": 1484,
                "drug_id": 303,
                "brand_id": 1450,
                "created_at": "2020-05-06T23:22:14.000000Z",
                "updated_at": "2020-05-06T23:22:14.000000Z"
            },
            {
                "id": 1485,
                "drug_id": 303,
                "brand_id": 1451,
                "created_at": "2020-05-06T23:22:16.000000Z",
                "updated_at": "2020-05-06T23:22:16.000000Z"
            },
            {
                "id": 1486,
                "drug_id": 304,
                "brand_id": 1452,
                "created_at": "2020-05-06T23:24:01.000000Z",
                "updated_at": "2020-05-06T23:24:01.000000Z"
            },
            {
                "id": 1487,
                "drug_id": 304,
                "brand_id": 1453,
                "created_at": "2020-05-06T23:24:03.000000Z",
                "updated_at": "2020-05-06T23:24:03.000000Z"
            },
            {
                "id": 1488,
                "drug_id": 305,
                "brand_id": 1454,
                "created_at": "2020-05-06T23:24:37.000000Z",
                "updated_at": "2020-05-06T23:24:37.000000Z"
            },
            {
                "id": 1489,
                "drug_id": 305,
                "brand_id": 1455,
                "created_at": "2020-05-06T23:24:39.000000Z",
                "updated_at": "2020-05-06T23:24:39.000000Z"
            },
            {
                "id": 1490,
                "drug_id": 305,
                "brand_id": 1456,
                "created_at": "2020-05-06T23:24:41.000000Z",
                "updated_at": "2020-05-06T23:24:41.000000Z"
            },
            {
                "id": 1491,
                "drug_id": 305,
                "brand_id": 1457,
                "created_at": "2020-05-06T23:24:43.000000Z",
                "updated_at": "2020-05-06T23:24:43.000000Z"
            },
            {
                "id": 1492,
                "drug_id": 306,
                "brand_id": 1458,
                "created_at": "2020-05-06T23:25:55.000000Z",
                "updated_at": "2020-05-06T23:25:55.000000Z"
            },
            {
                "id": 1493,
                "drug_id": 306,
                "brand_id": 1459,
                "created_at": "2020-05-06T23:25:58.000000Z",
                "updated_at": "2020-05-06T23:25:58.000000Z"
            },
            {
                "id": 1494,
                "drug_id": 306,
                "brand_id": 1460,
                "created_at": "2020-05-06T23:26:00.000000Z",
                "updated_at": "2020-05-06T23:26:00.000000Z"
            },
            {
                "id": 1495,
                "drug_id": 306,
                "brand_id": 1461,
                "created_at": "2020-05-06T23:26:02.000000Z",
                "updated_at": "2020-05-06T23:26:02.000000Z"
            },
            {
                "id": 1496,
                "drug_id": 306,
                "brand_id": 1462,
                "created_at": "2020-05-06T23:26:05.000000Z",
                "updated_at": "2020-05-06T23:26:05.000000Z"
            },
            {
                "id": 1497,
                "drug_id": 306,
                "brand_id": 1463,
                "created_at": "2020-05-06T23:26:07.000000Z",
                "updated_at": "2020-05-06T23:26:07.000000Z"
            },
            {
                "id": 1498,
                "drug_id": 306,
                "brand_id": 1464,
                "created_at": "2020-05-06T23:26:09.000000Z",
                "updated_at": "2020-05-06T23:26:09.000000Z"
            },
            {
                "id": 1499,
                "drug_id": 307,
                "brand_id": 1465,
                "created_at": "2020-05-06T23:27:54.000000Z",
                "updated_at": "2020-05-06T23:27:54.000000Z"
            },
            {
                "id": 1500,
                "drug_id": 307,
                "brand_id": 1466,
                "created_at": "2020-05-06T23:27:56.000000Z",
                "updated_at": "2020-05-06T23:27:56.000000Z"
            },
            {
                "id": 1501,
                "drug_id": 307,
                "brand_id": 1467,
                "created_at": "2020-05-06T23:27:58.000000Z",
                "updated_at": "2020-05-06T23:27:58.000000Z"
            },
            {
                "id": 1502,
                "drug_id": 307,
                "brand_id": 1468,
                "created_at": "2020-05-06T23:28:01.000000Z",
                "updated_at": "2020-05-06T23:28:01.000000Z"
            },
            {
                "id": 1503,
                "drug_id": 308,
                "brand_id": 1469,
                "created_at": "2020-05-06T23:30:24.000000Z",
                "updated_at": "2020-05-06T23:30:24.000000Z"
            },
            {
                "id": 1504,
                "drug_id": 308,
                "brand_id": 1470,
                "created_at": "2020-05-06T23:30:27.000000Z",
                "updated_at": "2020-05-06T23:30:27.000000Z"
            },
            {
                "id": 1505,
                "drug_id": 308,
                "brand_id": 1471,
                "created_at": "2020-05-06T23:30:29.000000Z",
                "updated_at": "2020-05-06T23:30:29.000000Z"
            },
            {
                "id": 1506,
                "drug_id": 308,
                "brand_id": 1472,
                "created_at": "2020-05-06T23:30:32.000000Z",
                "updated_at": "2020-05-06T23:30:32.000000Z"
            },
            {
                "id": 1507,
                "drug_id": 308,
                "brand_id": 1473,
                "created_at": "2020-05-06T23:30:34.000000Z",
                "updated_at": "2020-05-06T23:30:34.000000Z"
            },
            {
                "id": 1508,
                "drug_id": 308,
                "brand_id": 1474,
                "created_at": "2020-05-06T23:30:37.000000Z",
                "updated_at": "2020-05-06T23:30:37.000000Z"
            },
            {
                "id": 1509,
                "drug_id": 308,
                "brand_id": 1475,
                "created_at": "2020-05-06T23:30:39.000000Z",
                "updated_at": "2020-05-06T23:30:39.000000Z"
            },
            {
                "id": 1510,
                "drug_id": 308,
                "brand_id": 1476,
                "created_at": "2020-05-06T23:30:41.000000Z",
                "updated_at": "2020-05-06T23:30:41.000000Z"
            },
            {
                "id": 1511,
                "drug_id": 308,
                "brand_id": 1477,
                "created_at": "2020-05-06T23:30:44.000000Z",
                "updated_at": "2020-05-06T23:30:44.000000Z"
            },
            {
                "id": 1512,
                "drug_id": 308,
                "brand_id": 1478,
                "created_at": "2020-05-06T23:30:46.000000Z",
                "updated_at": "2020-05-06T23:30:46.000000Z"
            },
            {
                "id": 1513,
                "drug_id": 308,
                "brand_id": 1479,
                "created_at": "2020-05-06T23:30:49.000000Z",
                "updated_at": "2020-05-06T23:30:49.000000Z"
            },
            {
                "id": 1514,
                "drug_id": 308,
                "brand_id": 1480,
                "created_at": "2020-05-06T23:30:51.000000Z",
                "updated_at": "2020-05-06T23:30:51.000000Z"
            },
            {
                "id": 1515,
                "drug_id": 308,
                "brand_id": 1481,
                "created_at": "2020-05-06T23:30:53.000000Z",
                "updated_at": "2020-05-06T23:30:53.000000Z"
            },
            {
                "id": 1516,
                "drug_id": 308,
                "brand_id": 1482,
                "created_at": "2020-05-06T23:30:56.000000Z",
                "updated_at": "2020-05-06T23:30:56.000000Z"
            },
            {
                "id": 1517,
                "drug_id": 308,
                "brand_id": 1483,
                "created_at": "2020-05-06T23:30:58.000000Z",
                "updated_at": "2020-05-06T23:30:58.000000Z"
            },
            {
                "id": 1518,
                "drug_id": 308,
                "brand_id": 1484,
                "created_at": "2020-05-06T23:31:00.000000Z",
                "updated_at": "2020-05-06T23:31:00.000000Z"
            },
            {
                "id": 1519,
                "drug_id": 308,
                "brand_id": 1485,
                "created_at": "2020-05-06T23:31:02.000000Z",
                "updated_at": "2020-05-06T23:31:02.000000Z"
            },
            {
                "id": 1520,
                "drug_id": 308,
                "brand_id": 1486,
                "created_at": "2020-05-06T23:31:04.000000Z",
                "updated_at": "2020-05-06T23:31:04.000000Z"
            },
            {
                "id": 1521,
                "drug_id": 308,
                "brand_id": 1487,
                "created_at": "2020-05-06T23:31:08.000000Z",
                "updated_at": "2020-05-06T23:31:08.000000Z"
            },
            {
                "id": 1522,
                "drug_id": 308,
                "brand_id": 1488,
                "created_at": "2020-05-06T23:31:10.000000Z",
                "updated_at": "2020-05-06T23:31:10.000000Z"
            },
            {
                "id": 1523,
                "drug_id": 308,
                "brand_id": 1489,
                "created_at": "2020-05-06T23:31:12.000000Z",
                "updated_at": "2020-05-06T23:31:12.000000Z"
            },
            {
                "id": 1524,
                "drug_id": 308,
                "brand_id": 1490,
                "created_at": "2020-05-06T23:31:15.000000Z",
                "updated_at": "2020-05-06T23:31:15.000000Z"
            },
            {
                "id": 1525,
                "drug_id": 308,
                "brand_id": 1491,
                "created_at": "2020-05-06T23:31:17.000000Z",
                "updated_at": "2020-05-06T23:31:17.000000Z"
            },
            {
                "id": 1526,
                "drug_id": 308,
                "brand_id": 1492,
                "created_at": "2020-05-06T23:31:20.000000Z",
                "updated_at": "2020-05-06T23:31:20.000000Z"
            },
            {
                "id": 1527,
                "drug_id": 309,
                "brand_id": 1493,
                "created_at": "2020-05-06T23:31:45.000000Z",
                "updated_at": "2020-05-06T23:31:45.000000Z"
            },
            {
                "id": 1528,
                "drug_id": 310,
                "brand_id": 1494,
                "created_at": "2020-05-06T23:32:37.000000Z",
                "updated_at": "2020-05-06T23:32:37.000000Z"
            },
            {
                "id": 1529,
                "drug_id": 311,
                "brand_id": 1495,
                "created_at": "2020-05-06T23:34:55.000000Z",
                "updated_at": "2020-05-06T23:34:55.000000Z"
            },
            {
                "id": 1530,
                "drug_id": 312,
                "brand_id": 1496,
                "created_at": "2020-05-06T23:35:43.000000Z",
                "updated_at": "2020-05-06T23:35:43.000000Z"
            },
            {
                "id": 1531,
                "drug_id": 312,
                "brand_id": 1497,
                "created_at": "2020-05-06T23:35:45.000000Z",
                "updated_at": "2020-05-06T23:35:45.000000Z"
            },
            {
                "id": 1532,
                "drug_id": 313,
                "brand_id": 1498,
                "created_at": "2020-05-06T23:38:10.000000Z",
                "updated_at": "2020-05-06T23:38:10.000000Z"
            },
            {
                "id": 1533,
                "drug_id": 313,
                "brand_id": 1498,
                "created_at": "2020-05-06T23:38:10.000000Z",
                "updated_at": "2020-05-06T23:38:10.000000Z"
            },
            {
                "id": 1534,
                "drug_id": 313,
                "brand_id": 1499,
                "created_at": "2020-05-06T23:38:13.000000Z",
                "updated_at": "2020-05-06T23:38:13.000000Z"
            },
            {
                "id": 1535,
                "drug_id": 313,
                "brand_id": 1500,
                "created_at": "2020-05-06T23:38:15.000000Z",
                "updated_at": "2020-05-06T23:38:15.000000Z"
            },
            {
                "id": 1536,
                "drug_id": 313,
                "brand_id": 1501,
                "created_at": "2020-05-06T23:38:17.000000Z",
                "updated_at": "2020-05-06T23:38:17.000000Z"
            },
            {
                "id": 1537,
                "drug_id": 313,
                "brand_id": 1502,
                "created_at": "2020-05-06T23:38:19.000000Z",
                "updated_at": "2020-05-06T23:38:19.000000Z"
            },
            {
                "id": 1538,
                "drug_id": 313,
                "brand_id": 1502,
                "created_at": "2020-05-06T23:38:19.000000Z",
                "updated_at": "2020-05-06T23:38:19.000000Z"
            },
            {
                "id": 1539,
                "drug_id": 313,
                "brand_id": 1503,
                "created_at": "2020-05-06T23:38:22.000000Z",
                "updated_at": "2020-05-06T23:38:22.000000Z"
            },
            {
                "id": 1540,
                "drug_id": 314,
                "brand_id": 1504,
                "created_at": "2020-05-06T23:38:59.000000Z",
                "updated_at": "2020-05-06T23:38:59.000000Z"
            },
            {
                "id": 1541,
                "drug_id": 314,
                "brand_id": 1505,
                "created_at": "2020-05-06T23:39:01.000000Z",
                "updated_at": "2020-05-06T23:39:01.000000Z"
            },
            {
                "id": 1542,
                "drug_id": 315,
                "brand_id": 1506,
                "created_at": "2020-05-06T23:40:31.000000Z",
                "updated_at": "2020-05-06T23:40:31.000000Z"
            },
            {
                "id": 1543,
                "drug_id": 316,
                "brand_id": 1507,
                "created_at": "2020-05-06T23:42:20.000000Z",
                "updated_at": "2020-05-06T23:42:20.000000Z"
            },
            {
                "id": 1544,
                "drug_id": 316,
                "brand_id": 1508,
                "created_at": "2020-05-06T23:42:23.000000Z",
                "updated_at": "2020-05-06T23:42:23.000000Z"
            },
            {
                "id": 1545,
                "drug_id": 318,
                "brand_id": 1509,
                "created_at": "2020-05-06T23:45:21.000000Z",
                "updated_at": "2020-05-06T23:45:21.000000Z"
            },
            {
                "id": 1546,
                "drug_id": 318,
                "brand_id": 1510,
                "created_at": "2020-05-06T23:45:23.000000Z",
                "updated_at": "2020-05-06T23:45:23.000000Z"
            },
            {
                "id": 1547,
                "drug_id": 319,
                "brand_id": 1511,
                "created_at": "2020-05-06T23:46:56.000000Z",
                "updated_at": "2020-05-06T23:46:56.000000Z"
            },
            {
                "id": 1548,
                "drug_id": 319,
                "brand_id": 1512,
                "created_at": "2020-05-06T23:46:58.000000Z",
                "updated_at": "2020-05-06T23:46:58.000000Z"
            },
            {
                "id": 1549,
                "drug_id": 320,
                "brand_id": 1513,
                "created_at": "2020-05-06T23:48:09.000000Z",
                "updated_at": "2020-05-06T23:48:09.000000Z"
            },
            {
                "id": 1550,
                "drug_id": 320,
                "brand_id": 1513,
                "created_at": "2020-05-06T23:48:09.000000Z",
                "updated_at": "2020-05-06T23:48:09.000000Z"
            },
            {
                "id": 1551,
                "drug_id": 320,
                "brand_id": 1514,
                "created_at": "2020-05-06T23:48:11.000000Z",
                "updated_at": "2020-05-06T23:48:11.000000Z"
            },
            {
                "id": 1552,
                "drug_id": 320,
                "brand_id": 1515,
                "created_at": "2020-05-06T23:48:14.000000Z",
                "updated_at": "2020-05-06T23:48:14.000000Z"
            },
            {
                "id": 1553,
                "drug_id": 320,
                "brand_id": 1516,
                "created_at": "2020-05-06T23:48:17.000000Z",
                "updated_at": "2020-05-06T23:48:17.000000Z"
            },
            {
                "id": 1554,
                "drug_id": 321,
                "brand_id": 1517,
                "created_at": "2020-05-06T23:48:31.000000Z",
                "updated_at": "2020-05-06T23:48:31.000000Z"
            },
            {
                "id": 1555,
                "drug_id": 321,
                "brand_id": 1518,
                "created_at": "2020-05-06T23:48:33.000000Z",
                "updated_at": "2020-05-06T23:48:33.000000Z"
            },
            {
                "id": 1556,
                "drug_id": 321,
                "brand_id": 1519,
                "created_at": "2020-05-06T23:48:36.000000Z",
                "updated_at": "2020-05-06T23:48:36.000000Z"
            },
            {
                "id": 1557,
                "drug_id": 321,
                "brand_id": 1520,
                "created_at": "2020-05-06T23:48:38.000000Z",
                "updated_at": "2020-05-06T23:48:38.000000Z"
            },
            {
                "id": 1558,
                "drug_id": 321,
                "brand_id": 1521,
                "created_at": "2020-05-06T23:48:40.000000Z",
                "updated_at": "2020-05-06T23:48:40.000000Z"
            },
            {
                "id": 1559,
                "drug_id": 321,
                "brand_id": 1521,
                "created_at": "2020-05-06T23:48:40.000000Z",
                "updated_at": "2020-05-06T23:48:40.000000Z"
            },
            {
                "id": 1560,
                "drug_id": 321,
                "brand_id": 1522,
                "created_at": "2020-05-06T23:48:42.000000Z",
                "updated_at": "2020-05-06T23:48:42.000000Z"
            },
            {
                "id": 1561,
                "drug_id": 321,
                "brand_id": 1523,
                "created_at": "2020-05-06T23:48:45.000000Z",
                "updated_at": "2020-05-06T23:48:45.000000Z"
            },
            {
                "id": 1562,
                "drug_id": 321,
                "brand_id": 1523,
                "created_at": "2020-05-06T23:48:45.000000Z",
                "updated_at": "2020-05-06T23:48:45.000000Z"
            },
            {
                "id": 1563,
                "drug_id": 321,
                "brand_id": 1524,
                "created_at": "2020-05-06T23:48:47.000000Z",
                "updated_at": "2020-05-06T23:48:47.000000Z"
            },
            {
                "id": 1564,
                "drug_id": 321,
                "brand_id": 1525,
                "created_at": "2020-05-06T23:48:49.000000Z",
                "updated_at": "2020-05-06T23:48:49.000000Z"
            },
            {
                "id": 1565,
                "drug_id": 321,
                "brand_id": 1526,
                "created_at": "2020-05-06T23:48:51.000000Z",
                "updated_at": "2020-05-06T23:48:51.000000Z"
            },
            {
                "id": 1566,
                "drug_id": 321,
                "brand_id": 1527,
                "created_at": "2020-05-06T23:48:54.000000Z",
                "updated_at": "2020-05-06T23:48:54.000000Z"
            },
            {
                "id": 1567,
                "drug_id": 322,
                "brand_id": 1528,
                "created_at": "2020-05-06T23:50:46.000000Z",
                "updated_at": "2020-05-06T23:50:46.000000Z"
            },
            {
                "id": 1568,
                "drug_id": 322,
                "brand_id": 1529,
                "created_at": "2020-05-06T23:50:48.000000Z",
                "updated_at": "2020-05-06T23:50:48.000000Z"
            },
            {
                "id": 1569,
                "drug_id": 322,
                "brand_id": 1530,
                "created_at": "2020-05-06T23:50:50.000000Z",
                "updated_at": "2020-05-06T23:50:50.000000Z"
            },
            {
                "id": 1570,
                "drug_id": 322,
                "brand_id": 1531,
                "created_at": "2020-05-06T23:50:53.000000Z",
                "updated_at": "2020-05-06T23:50:53.000000Z"
            },
            {
                "id": 1571,
                "drug_id": 323,
                "brand_id": 1532,
                "created_at": "2020-05-06T23:52:33.000000Z",
                "updated_at": "2020-05-06T23:52:33.000000Z"
            },
            {
                "id": 1572,
                "drug_id": 323,
                "brand_id": 1533,
                "created_at": "2020-05-06T23:52:35.000000Z",
                "updated_at": "2020-05-06T23:52:35.000000Z"
            },
            {
                "id": 1573,
                "drug_id": 323,
                "brand_id": 1534,
                "created_at": "2020-05-06T23:52:38.000000Z",
                "updated_at": "2020-05-06T23:52:38.000000Z"
            },
            {
                "id": 1574,
                "drug_id": 323,
                "brand_id": 1535,
                "created_at": "2020-05-06T23:52:40.000000Z",
                "updated_at": "2020-05-06T23:52:40.000000Z"
            },
            {
                "id": 1575,
                "drug_id": 323,
                "brand_id": 1536,
                "created_at": "2020-05-06T23:52:42.000000Z",
                "updated_at": "2020-05-06T23:52:42.000000Z"
            },
            {
                "id": 1576,
                "drug_id": 323,
                "brand_id": 1537,
                "created_at": "2020-05-06T23:52:45.000000Z",
                "updated_at": "2020-05-06T23:52:45.000000Z"
            },
            {
                "id": 1577,
                "drug_id": 324,
                "brand_id": 1538,
                "created_at": "2020-05-06T23:53:19.000000Z",
                "updated_at": "2020-05-06T23:53:19.000000Z"
            },
            {
                "id": 1578,
                "drug_id": 324,
                "brand_id": 1539,
                "created_at": "2020-05-06T23:53:22.000000Z",
                "updated_at": "2020-05-06T23:53:22.000000Z"
            },
            {
                "id": 1579,
                "drug_id": 324,
                "brand_id": 1540,
                "created_at": "2020-05-06T23:53:24.000000Z",
                "updated_at": "2020-05-06T23:53:24.000000Z"
            },
            {
                "id": 1580,
                "drug_id": 324,
                "brand_id": 1541,
                "created_at": "2020-05-06T23:53:26.000000Z",
                "updated_at": "2020-05-06T23:53:26.000000Z"
            },
            {
                "id": 1581,
                "drug_id": 324,
                "brand_id": 1542,
                "created_at": "2020-05-06T23:53:28.000000Z",
                "updated_at": "2020-05-06T23:53:28.000000Z"
            },
            {
                "id": 1582,
                "drug_id": 324,
                "brand_id": 1543,
                "created_at": "2020-05-06T23:53:31.000000Z",
                "updated_at": "2020-05-06T23:53:31.000000Z"
            },
            {
                "id": 1583,
                "drug_id": 324,
                "brand_id": 1544,
                "created_at": "2020-05-06T23:53:33.000000Z",
                "updated_at": "2020-05-06T23:53:33.000000Z"
            },
            {
                "id": 1584,
                "drug_id": 324,
                "brand_id": 1545,
                "created_at": "2020-05-06T23:53:35.000000Z",
                "updated_at": "2020-05-06T23:53:35.000000Z"
            },
            {
                "id": 1585,
                "drug_id": 324,
                "brand_id": 1546,
                "created_at": "2020-05-06T23:53:38.000000Z",
                "updated_at": "2020-05-06T23:53:38.000000Z"
            },
            {
                "id": 1586,
                "drug_id": 324,
                "brand_id": 1547,
                "created_at": "2020-05-06T23:53:40.000000Z",
                "updated_at": "2020-05-06T23:53:40.000000Z"
            },
            {
                "id": 1587,
                "drug_id": 324,
                "brand_id": 1548,
                "created_at": "2020-05-06T23:53:43.000000Z",
                "updated_at": "2020-05-06T23:53:43.000000Z"
            },
            {
                "id": 1588,
                "drug_id": 324,
                "brand_id": 1549,
                "created_at": "2020-05-06T23:53:45.000000Z",
                "updated_at": "2020-05-06T23:53:45.000000Z"
            },
            {
                "id": 1589,
                "drug_id": 324,
                "brand_id": 1550,
                "created_at": "2020-05-06T23:53:48.000000Z",
                "updated_at": "2020-05-06T23:53:48.000000Z"
            },
            {
                "id": 1590,
                "drug_id": 324,
                "brand_id": 1551,
                "created_at": "2020-05-06T23:53:50.000000Z",
                "updated_at": "2020-05-06T23:53:50.000000Z"
            },
            {
                "id": 1591,
                "drug_id": 325,
                "brand_id": 1552,
                "created_at": "2020-05-06T23:54:30.000000Z",
                "updated_at": "2020-05-06T23:54:30.000000Z"
            },
            {
                "id": 1592,
                "drug_id": 327,
                "brand_id": 1553,
                "created_at": "2020-05-06T23:56:44.000000Z",
                "updated_at": "2020-05-06T23:56:44.000000Z"
            },
            {
                "id": 1593,
                "drug_id": 327,
                "brand_id": 1554,
                "created_at": "2020-05-06T23:56:46.000000Z",
                "updated_at": "2020-05-06T23:56:46.000000Z"
            },
            {
                "id": 1594,
                "drug_id": 328,
                "brand_id": 1555,
                "created_at": "2020-05-06T23:57:28.000000Z",
                "updated_at": "2020-05-06T23:57:28.000000Z"
            },
            {
                "id": 1595,
                "drug_id": 329,
                "brand_id": 1556,
                "created_at": "2020-05-06T23:58:07.000000Z",
                "updated_at": "2020-05-06T23:58:07.000000Z"
            },
            {
                "id": 1596,
                "drug_id": 330,
                "brand_id": 1557,
                "created_at": "2020-05-06T23:59:10.000000Z",
                "updated_at": "2020-05-06T23:59:10.000000Z"
            },
            {
                "id": 1597,
                "drug_id": 330,
                "brand_id": 1558,
                "created_at": "2020-05-06T23:59:12.000000Z",
                "updated_at": "2020-05-06T23:59:12.000000Z"
            },
            {
                "id": 1598,
                "drug_id": 330,
                "brand_id": 1559,
                "created_at": "2020-05-06T23:59:14.000000Z",
                "updated_at": "2020-05-06T23:59:14.000000Z"
            },
            {
                "id": 1599,
                "drug_id": 331,
                "brand_id": 1560,
                "created_at": "2020-05-07T00:00:01.000000Z",
                "updated_at": "2020-05-07T00:00:01.000000Z"
            },
            {
                "id": 1600,
                "drug_id": 331,
                "brand_id": 1561,
                "created_at": "2020-05-07T00:00:03.000000Z",
                "updated_at": "2020-05-07T00:00:03.000000Z"
            },
            {
                "id": 1601,
                "drug_id": 331,
                "brand_id": 1562,
                "created_at": "2020-05-07T00:00:05.000000Z",
                "updated_at": "2020-05-07T00:00:05.000000Z"
            },
            {
                "id": 1602,
                "drug_id": 331,
                "brand_id": 1563,
                "created_at": "2020-05-07T00:00:08.000000Z",
                "updated_at": "2020-05-07T00:00:08.000000Z"
            },
            {
                "id": 1603,
                "drug_id": 331,
                "brand_id": 1564,
                "created_at": "2020-05-07T00:00:10.000000Z",
                "updated_at": "2020-05-07T00:00:10.000000Z"
            },
            {
                "id": 1604,
                "drug_id": 331,
                "brand_id": 1565,
                "created_at": "2020-05-07T00:00:12.000000Z",
                "updated_at": "2020-05-07T00:00:12.000000Z"
            },
            {
                "id": 1605,
                "drug_id": 331,
                "brand_id": 1566,
                "created_at": "2020-05-07T00:00:15.000000Z",
                "updated_at": "2020-05-07T00:00:15.000000Z"
            },
            {
                "id": 1606,
                "drug_id": 332,
                "brand_id": 1567,
                "created_at": "2020-05-07T00:01:14.000000Z",
                "updated_at": "2020-05-07T00:01:14.000000Z"
            },
            {
                "id": 1607,
                "drug_id": 333,
                "brand_id": 1568,
                "created_at": "2020-05-07T00:02:00.000000Z",
                "updated_at": "2020-05-07T00:02:00.000000Z"
            },
            {
                "id": 1608,
                "drug_id": 333,
                "brand_id": 1569,
                "created_at": "2020-05-07T00:02:03.000000Z",
                "updated_at": "2020-05-07T00:02:03.000000Z"
            },
            {
                "id": 1609,
                "drug_id": 333,
                "brand_id": 1570,
                "created_at": "2020-05-07T00:02:05.000000Z",
                "updated_at": "2020-05-07T00:02:05.000000Z"
            },
            {
                "id": 1610,
                "drug_id": 333,
                "brand_id": 1571,
                "created_at": "2020-05-07T00:02:07.000000Z",
                "updated_at": "2020-05-07T00:02:07.000000Z"
            },
            {
                "id": 1611,
                "drug_id": 333,
                "brand_id": 1572,
                "created_at": "2020-05-07T00:02:10.000000Z",
                "updated_at": "2020-05-07T00:02:10.000000Z"
            },
            {
                "id": 1612,
                "drug_id": 334,
                "brand_id": 1573,
                "created_at": "2020-05-07T00:02:40.000000Z",
                "updated_at": "2020-05-07T00:02:40.000000Z"
            },
            {
                "id": 1613,
                "drug_id": 335,
                "brand_id": 1574,
                "created_at": "2020-05-07T00:04:27.000000Z",
                "updated_at": "2020-05-07T00:04:27.000000Z"
            },
            {
                "id": 1614,
                "drug_id": 335,
                "brand_id": 1575,
                "created_at": "2020-05-07T00:04:29.000000Z",
                "updated_at": "2020-05-07T00:04:29.000000Z"
            },
            {
                "id": 1615,
                "drug_id": 335,
                "brand_id": 1576,
                "created_at": "2020-05-07T00:04:31.000000Z",
                "updated_at": "2020-05-07T00:04:31.000000Z"
            },
            {
                "id": 1616,
                "drug_id": 335,
                "brand_id": 1577,
                "created_at": "2020-05-07T00:04:33.000000Z",
                "updated_at": "2020-05-07T00:04:33.000000Z"
            },
            {
                "id": 1617,
                "drug_id": 336,
                "brand_id": 1578,
                "created_at": "2020-05-07T00:05:37.000000Z",
                "updated_at": "2020-05-07T00:05:37.000000Z"
            },
            {
                "id": 1618,
                "drug_id": 336,
                "brand_id": 1579,
                "created_at": "2020-05-07T00:05:39.000000Z",
                "updated_at": "2020-05-07T00:05:39.000000Z"
            },
            {
                "id": 1619,
                "drug_id": 337,
                "brand_id": 1580,
                "created_at": "2020-05-07T00:06:53.000000Z",
                "updated_at": "2020-05-07T00:06:53.000000Z"
            },
            {
                "id": 1620,
                "drug_id": 338,
                "brand_id": 1581,
                "created_at": "2020-05-07T00:07:52.000000Z",
                "updated_at": "2020-05-07T00:07:52.000000Z"
            },
            {
                "id": 1621,
                "drug_id": 338,
                "brand_id": 1582,
                "created_at": "2020-05-07T00:07:54.000000Z",
                "updated_at": "2020-05-07T00:07:54.000000Z"
            },
            {
                "id": 1622,
                "drug_id": 339,
                "brand_id": 1583,
                "created_at": "2020-05-07T00:08:26.000000Z",
                "updated_at": "2020-05-07T00:08:26.000000Z"
            },
            {
                "id": 1623,
                "drug_id": 340,
                "brand_id": 1584,
                "created_at": "2020-05-07T00:09:01.000000Z",
                "updated_at": "2020-05-07T00:09:01.000000Z"
            },
            {
                "id": 1624,
                "drug_id": 341,
                "brand_id": 1585,
                "created_at": "2020-05-07T00:09:39.000000Z",
                "updated_at": "2020-05-07T00:09:39.000000Z"
            },
            {
                "id": 1625,
                "drug_id": 342,
                "brand_id": 1586,
                "created_at": "2020-05-07T00:11:28.000000Z",
                "updated_at": "2020-05-07T00:11:28.000000Z"
            },
            {
                "id": 1626,
                "drug_id": 342,
                "brand_id": 1587,
                "created_at": "2020-05-07T00:11:30.000000Z",
                "updated_at": "2020-05-07T00:11:30.000000Z"
            },
            {
                "id": 1627,
                "drug_id": 343,
                "brand_id": 1588,
                "created_at": "2020-05-07T00:12:19.000000Z",
                "updated_at": "2020-05-07T00:12:19.000000Z"
            },
            {
                "id": 1628,
                "drug_id": 343,
                "brand_id": 1589,
                "created_at": "2020-05-07T00:12:21.000000Z",
                "updated_at": "2020-05-07T00:12:21.000000Z"
            },
            {
                "id": 1629,
                "drug_id": 343,
                "brand_id": 1590,
                "created_at": "2020-05-07T00:12:23.000000Z",
                "updated_at": "2020-05-07T00:12:23.000000Z"
            },
            {
                "id": 1630,
                "drug_id": 343,
                "brand_id": 1591,
                "created_at": "2020-05-07T00:12:26.000000Z",
                "updated_at": "2020-05-07T00:12:26.000000Z"
            },
            {
                "id": 1631,
                "drug_id": 343,
                "brand_id": 1592,
                "created_at": "2020-05-07T00:12:29.000000Z",
                "updated_at": "2020-05-07T00:12:29.000000Z"
            },
            {
                "id": 1632,
                "drug_id": 343,
                "brand_id": 1593,
                "created_at": "2020-05-07T00:12:31.000000Z",
                "updated_at": "2020-05-07T00:12:31.000000Z"
            },
            {
                "id": 1633,
                "drug_id": 343,
                "brand_id": 1594,
                "created_at": "2020-05-07T00:12:34.000000Z",
                "updated_at": "2020-05-07T00:12:34.000000Z"
            },
            {
                "id": 1634,
                "drug_id": 343,
                "brand_id": 1595,
                "created_at": "2020-05-07T00:12:37.000000Z",
                "updated_at": "2020-05-07T00:12:37.000000Z"
            },
            {
                "id": 1635,
                "drug_id": 343,
                "brand_id": 1596,
                "created_at": "2020-05-07T00:12:39.000000Z",
                "updated_at": "2020-05-07T00:12:39.000000Z"
            },
            {
                "id": 1636,
                "drug_id": 343,
                "brand_id": 1597,
                "created_at": "2020-05-07T00:12:41.000000Z",
                "updated_at": "2020-05-07T00:12:41.000000Z"
            },
            {
                "id": 1637,
                "drug_id": 343,
                "brand_id": 1598,
                "created_at": "2020-05-07T00:12:44.000000Z",
                "updated_at": "2020-05-07T00:12:44.000000Z"
            },
            {
                "id": 1638,
                "drug_id": 344,
                "brand_id": 1599,
                "created_at": "2020-05-07T00:13:48.000000Z",
                "updated_at": "2020-05-07T00:13:48.000000Z"
            },
            {
                "id": 1639,
                "drug_id": 344,
                "brand_id": 1600,
                "created_at": "2020-05-07T00:13:50.000000Z",
                "updated_at": "2020-05-07T00:13:50.000000Z"
            },
            {
                "id": 1640,
                "drug_id": 344,
                "brand_id": 1601,
                "created_at": "2020-05-07T00:13:52.000000Z",
                "updated_at": "2020-05-07T00:13:52.000000Z"
            },
            {
                "id": 1641,
                "drug_id": 344,
                "brand_id": 1602,
                "created_at": "2020-05-07T00:13:54.000000Z",
                "updated_at": "2020-05-07T00:13:54.000000Z"
            },
            {
                "id": 1642,
                "drug_id": 344,
                "brand_id": 1603,
                "created_at": "2020-05-07T00:13:57.000000Z",
                "updated_at": "2020-05-07T00:13:57.000000Z"
            },
            {
                "id": 1643,
                "drug_id": 344,
                "brand_id": 1604,
                "created_at": "2020-05-07T00:13:59.000000Z",
                "updated_at": "2020-05-07T00:13:59.000000Z"
            },
            {
                "id": 1644,
                "drug_id": 345,
                "brand_id": 1605,
                "created_at": "2020-05-07T00:14:25.000000Z",
                "updated_at": "2020-05-07T00:14:25.000000Z"
            },
            {
                "id": 1645,
                "drug_id": 346,
                "brand_id": 1606,
                "created_at": "2020-05-07T00:15:17.000000Z",
                "updated_at": "2020-05-07T00:15:17.000000Z"
            },
            {
                "id": 1646,
                "drug_id": 347,
                "brand_id": 1607,
                "created_at": "2020-05-07T00:16:22.000000Z",
                "updated_at": "2020-05-07T00:16:22.000000Z"
            },
            {
                "id": 1647,
                "drug_id": 347,
                "brand_id": 1608,
                "created_at": "2020-05-07T00:16:24.000000Z",
                "updated_at": "2020-05-07T00:16:24.000000Z"
            },
            {
                "id": 1648,
                "drug_id": 347,
                "brand_id": 1609,
                "created_at": "2020-05-07T00:16:27.000000Z",
                "updated_at": "2020-05-07T00:16:27.000000Z"
            },
            {
                "id": 1649,
                "drug_id": 347,
                "brand_id": 1610,
                "created_at": "2020-05-07T00:16:29.000000Z",
                "updated_at": "2020-05-07T00:16:29.000000Z"
            },
            {
                "id": 1650,
                "drug_id": 347,
                "brand_id": 1611,
                "created_at": "2020-05-07T00:16:31.000000Z",
                "updated_at": "2020-05-07T00:16:31.000000Z"
            },
            {
                "id": 1651,
                "drug_id": 347,
                "brand_id": 1612,
                "created_at": "2020-05-07T00:16:33.000000Z",
                "updated_at": "2020-05-07T00:16:33.000000Z"
            },
            {
                "id": 1652,
                "drug_id": 347,
                "brand_id": 1613,
                "created_at": "2020-05-07T00:16:36.000000Z",
                "updated_at": "2020-05-07T00:16:36.000000Z"
            },
            {
                "id": 1653,
                "drug_id": 347,
                "brand_id": 1614,
                "created_at": "2020-05-07T00:16:38.000000Z",
                "updated_at": "2020-05-07T00:16:38.000000Z"
            },
            {
                "id": 1654,
                "drug_id": 347,
                "brand_id": 1615,
                "created_at": "2020-05-07T00:16:40.000000Z",
                "updated_at": "2020-05-07T00:16:40.000000Z"
            },
            {
                "id": 1655,
                "drug_id": 347,
                "brand_id": 1616,
                "created_at": "2020-05-07T00:16:42.000000Z",
                "updated_at": "2020-05-07T00:16:42.000000Z"
            },
            {
                "id": 1656,
                "drug_id": 347,
                "brand_id": 1617,
                "created_at": "2020-05-07T00:16:45.000000Z",
                "updated_at": "2020-05-07T00:16:45.000000Z"
            },
            {
                "id": 1657,
                "drug_id": 347,
                "brand_id": 1618,
                "created_at": "2020-05-07T00:16:47.000000Z",
                "updated_at": "2020-05-07T00:16:47.000000Z"
            },
            {
                "id": 1658,
                "drug_id": 347,
                "brand_id": 1619,
                "created_at": "2020-05-07T00:16:49.000000Z",
                "updated_at": "2020-05-07T00:16:49.000000Z"
            },
            {
                "id": 1659,
                "drug_id": 347,
                "brand_id": 1620,
                "created_at": "2020-05-07T00:16:52.000000Z",
                "updated_at": "2020-05-07T00:16:52.000000Z"
            },
            {
                "id": 1660,
                "drug_id": 347,
                "brand_id": 1621,
                "created_at": "2020-05-07T00:16:54.000000Z",
                "updated_at": "2020-05-07T00:16:54.000000Z"
            },
            {
                "id": 1661,
                "drug_id": 347,
                "brand_id": 1622,
                "created_at": "2020-05-07T00:16:56.000000Z",
                "updated_at": "2020-05-07T00:16:56.000000Z"
            },
            {
                "id": 1662,
                "drug_id": 347,
                "brand_id": 1623,
                "created_at": "2020-05-07T00:16:58.000000Z",
                "updated_at": "2020-05-07T00:16:58.000000Z"
            },
            {
                "id": 1663,
                "drug_id": 347,
                "brand_id": 1624,
                "created_at": "2020-05-07T00:17:01.000000Z",
                "updated_at": "2020-05-07T00:17:01.000000Z"
            },
            {
                "id": 1664,
                "drug_id": 347,
                "brand_id": 1625,
                "created_at": "2020-05-07T00:17:03.000000Z",
                "updated_at": "2020-05-07T00:17:03.000000Z"
            },
            {
                "id": 1665,
                "drug_id": 347,
                "brand_id": 1626,
                "created_at": "2020-05-07T00:17:05.000000Z",
                "updated_at": "2020-05-07T00:17:05.000000Z"
            },
            {
                "id": 1666,
                "drug_id": 347,
                "brand_id": 1627,
                "created_at": "2020-05-07T00:17:07.000000Z",
                "updated_at": "2020-05-07T00:17:07.000000Z"
            },
            {
                "id": 1667,
                "drug_id": 347,
                "brand_id": 1628,
                "created_at": "2020-05-07T00:17:10.000000Z",
                "updated_at": "2020-05-07T00:17:10.000000Z"
            },
            {
                "id": 1668,
                "drug_id": 347,
                "brand_id": 1629,
                "created_at": "2020-05-07T00:17:12.000000Z",
                "updated_at": "2020-05-07T00:17:12.000000Z"
            },
            {
                "id": 1669,
                "drug_id": 348,
                "brand_id": 1630,
                "created_at": "2020-05-07T00:17:42.000000Z",
                "updated_at": "2020-05-07T00:17:42.000000Z"
            },
            {
                "id": 1670,
                "drug_id": 348,
                "brand_id": 1631,
                "created_at": "2020-05-07T00:17:44.000000Z",
                "updated_at": "2020-05-07T00:17:44.000000Z"
            },
            {
                "id": 1671,
                "drug_id": 348,
                "brand_id": 1632,
                "created_at": "2020-05-07T00:17:46.000000Z",
                "updated_at": "2020-05-07T00:17:46.000000Z"
            },
            {
                "id": 1672,
                "drug_id": 348,
                "brand_id": 1633,
                "created_at": "2020-05-07T00:17:48.000000Z",
                "updated_at": "2020-05-07T00:17:48.000000Z"
            },
            {
                "id": 1673,
                "drug_id": 348,
                "brand_id": 1634,
                "created_at": "2020-05-07T00:17:51.000000Z",
                "updated_at": "2020-05-07T00:17:51.000000Z"
            },
            {
                "id": 1674,
                "drug_id": 348,
                "brand_id": 1635,
                "created_at": "2020-05-07T00:17:53.000000Z",
                "updated_at": "2020-05-07T00:17:53.000000Z"
            },
            {
                "id": 1675,
                "drug_id": 349,
                "brand_id": 1636,
                "created_at": "2020-05-07T00:19:05.000000Z",
                "updated_at": "2020-05-07T00:19:05.000000Z"
            },
            {
                "id": 1676,
                "drug_id": 350,
                "brand_id": 1637,
                "created_at": "2020-05-07T00:19:35.000000Z",
                "updated_at": "2020-05-07T00:19:35.000000Z"
            },
            {
                "id": 1677,
                "drug_id": 350,
                "brand_id": 1638,
                "created_at": "2020-05-07T00:19:37.000000Z",
                "updated_at": "2020-05-07T00:19:37.000000Z"
            },
            {
                "id": 1678,
                "drug_id": 350,
                "brand_id": 1639,
                "created_at": "2020-05-07T00:19:39.000000Z",
                "updated_at": "2020-05-07T00:19:39.000000Z"
            },
            {
                "id": 1679,
                "drug_id": 351,
                "brand_id": 1640,
                "created_at": "2020-05-07T00:20:41.000000Z",
                "updated_at": "2020-05-07T00:20:41.000000Z"
            },
            {
                "id": 1680,
                "drug_id": 351,
                "brand_id": 1641,
                "created_at": "2020-05-07T00:20:43.000000Z",
                "updated_at": "2020-05-07T00:20:43.000000Z"
            },
            {
                "id": 1681,
                "drug_id": 351,
                "brand_id": 1642,
                "created_at": "2020-05-07T00:20:45.000000Z",
                "updated_at": "2020-05-07T00:20:45.000000Z"
            },
            {
                "id": 1682,
                "drug_id": 352,
                "brand_id": 1643,
                "created_at": "2020-05-07T00:22:28.000000Z",
                "updated_at": "2020-05-07T00:22:28.000000Z"
            },
            {
                "id": 1683,
                "drug_id": 352,
                "brand_id": 1644,
                "created_at": "2020-05-07T00:22:31.000000Z",
                "updated_at": "2020-05-07T00:22:31.000000Z"
            },
            {
                "id": 1684,
                "drug_id": 353,
                "brand_id": 1645,
                "created_at": "2020-05-07T00:23:47.000000Z",
                "updated_at": "2020-05-07T00:23:47.000000Z"
            },
            {
                "id": 1685,
                "drug_id": 353,
                "brand_id": 1646,
                "created_at": "2020-05-07T00:23:50.000000Z",
                "updated_at": "2020-05-07T00:23:50.000000Z"
            },
            {
                "id": 1686,
                "drug_id": 353,
                "brand_id": 1647,
                "created_at": "2020-05-07T00:23:52.000000Z",
                "updated_at": "2020-05-07T00:23:52.000000Z"
            },
            {
                "id": 1687,
                "drug_id": 353,
                "brand_id": 1648,
                "created_at": "2020-05-07T00:23:54.000000Z",
                "updated_at": "2020-05-07T00:23:54.000000Z"
            },
            {
                "id": 1688,
                "drug_id": 353,
                "brand_id": 1649,
                "created_at": "2020-05-07T00:23:57.000000Z",
                "updated_at": "2020-05-07T00:23:57.000000Z"
            },
            {
                "id": 1689,
                "drug_id": 353,
                "brand_id": 1650,
                "created_at": "2020-05-07T00:23:59.000000Z",
                "updated_at": "2020-05-07T00:23:59.000000Z"
            },
            {
                "id": 1690,
                "drug_id": 353,
                "brand_id": 1651,
                "created_at": "2020-05-07T00:24:01.000000Z",
                "updated_at": "2020-05-07T00:24:01.000000Z"
            },
            {
                "id": 1691,
                "drug_id": 353,
                "brand_id": 1652,
                "created_at": "2020-05-07T00:24:04.000000Z",
                "updated_at": "2020-05-07T00:24:04.000000Z"
            },
            {
                "id": 1692,
                "drug_id": 353,
                "brand_id": 1653,
                "created_at": "2020-05-07T00:24:06.000000Z",
                "updated_at": "2020-05-07T00:24:06.000000Z"
            },
            {
                "id": 1693,
                "drug_id": 353,
                "brand_id": 1654,
                "created_at": "2020-05-07T00:24:08.000000Z",
                "updated_at": "2020-05-07T00:24:08.000000Z"
            },
            {
                "id": 1694,
                "drug_id": 354,
                "brand_id": 1655,
                "created_at": "2020-05-07T00:25:45.000000Z",
                "updated_at": "2020-05-07T00:25:45.000000Z"
            },
            {
                "id": 1695,
                "drug_id": 354,
                "brand_id": 1656,
                "created_at": "2020-05-07T00:25:47.000000Z",
                "updated_at": "2020-05-07T00:25:47.000000Z"
            },
            {
                "id": 1696,
                "drug_id": 354,
                "brand_id": 1657,
                "created_at": "2020-05-07T00:25:50.000000Z",
                "updated_at": "2020-05-07T00:25:50.000000Z"
            },
            {
                "id": 1697,
                "drug_id": 354,
                "brand_id": 1658,
                "created_at": "2020-05-07T00:25:52.000000Z",
                "updated_at": "2020-05-07T00:25:52.000000Z"
            },
            {
                "id": 1698,
                "drug_id": 354,
                "brand_id": 1658,
                "created_at": "2020-05-07T00:25:52.000000Z",
                "updated_at": "2020-05-07T00:25:52.000000Z"
            },
            {
                "id": 1699,
                "drug_id": 354,
                "brand_id": 1659,
                "created_at": "2020-05-07T00:25:54.000000Z",
                "updated_at": "2020-05-07T00:25:54.000000Z"
            },
            {
                "id": 1700,
                "drug_id": 354,
                "brand_id": 1660,
                "created_at": "2020-05-07T00:25:57.000000Z",
                "updated_at": "2020-05-07T00:25:57.000000Z"
            },
            {
                "id": 1701,
                "drug_id": 354,
                "brand_id": 1661,
                "created_at": "2020-05-07T00:25:59.000000Z",
                "updated_at": "2020-05-07T00:25:59.000000Z"
            },
            {
                "id": 1702,
                "drug_id": 354,
                "brand_id": 1662,
                "created_at": "2020-05-07T00:26:02.000000Z",
                "updated_at": "2020-05-07T00:26:02.000000Z"
            },
            {
                "id": 1703,
                "drug_id": 354,
                "brand_id": 1663,
                "created_at": "2020-05-07T00:26:04.000000Z",
                "updated_at": "2020-05-07T00:26:04.000000Z"
            },
            {
                "id": 1704,
                "drug_id": 354,
                "brand_id": 1664,
                "created_at": "2020-05-07T00:26:07.000000Z",
                "updated_at": "2020-05-07T00:26:07.000000Z"
            },
            {
                "id": 1705,
                "drug_id": 354,
                "brand_id": 1665,
                "created_at": "2020-05-07T00:26:09.000000Z",
                "updated_at": "2020-05-07T00:26:09.000000Z"
            },
            {
                "id": 1706,
                "drug_id": 354,
                "brand_id": 1666,
                "created_at": "2020-05-07T00:26:11.000000Z",
                "updated_at": "2020-05-07T00:26:11.000000Z"
            },
            {
                "id": 1707,
                "drug_id": 354,
                "brand_id": 1667,
                "created_at": "2020-05-07T00:26:14.000000Z",
                "updated_at": "2020-05-07T00:26:14.000000Z"
            },
            {
                "id": 1708,
                "drug_id": 354,
                "brand_id": 1668,
                "created_at": "2020-05-07T00:26:16.000000Z",
                "updated_at": "2020-05-07T00:26:16.000000Z"
            },
            {
                "id": 1709,
                "drug_id": 354,
                "brand_id": 1669,
                "created_at": "2020-05-07T00:26:18.000000Z",
                "updated_at": "2020-05-07T00:26:18.000000Z"
            },
            {
                "id": 1710,
                "drug_id": 355,
                "brand_id": 1670,
                "created_at": "2020-05-07T00:27:01.000000Z",
                "updated_at": "2020-05-07T00:27:01.000000Z"
            },
            {
                "id": 1711,
                "drug_id": 355,
                "brand_id": 1671,
                "created_at": "2020-05-07T00:27:03.000000Z",
                "updated_at": "2020-05-07T00:27:03.000000Z"
            },
            {
                "id": 1712,
                "drug_id": 356,
                "brand_id": 1672,
                "created_at": "2020-05-07T00:27:46.000000Z",
                "updated_at": "2020-05-07T00:27:46.000000Z"
            },
            {
                "id": 1713,
                "drug_id": 356,
                "brand_id": 1673,
                "created_at": "2020-05-07T00:27:48.000000Z",
                "updated_at": "2020-05-07T00:27:48.000000Z"
            },
            {
                "id": 1714,
                "drug_id": 356,
                "brand_id": 1674,
                "created_at": "2020-05-07T00:27:51.000000Z",
                "updated_at": "2020-05-07T00:27:51.000000Z"
            },
            {
                "id": 1715,
                "drug_id": 356,
                "brand_id": 1675,
                "created_at": "2020-05-07T00:27:53.000000Z",
                "updated_at": "2020-05-07T00:27:53.000000Z"
            },
            {
                "id": 1716,
                "drug_id": 357,
                "brand_id": 1676,
                "created_at": "2020-05-07T00:30:23.000000Z",
                "updated_at": "2020-05-07T00:30:23.000000Z"
            },
            {
                "id": 1717,
                "drug_id": 357,
                "brand_id": 1677,
                "created_at": "2020-05-07T00:30:26.000000Z",
                "updated_at": "2020-05-07T00:30:26.000000Z"
            },
            {
                "id": 1718,
                "drug_id": 358,
                "brand_id": 1678,
                "created_at": "2020-05-07T00:31:38.000000Z",
                "updated_at": "2020-05-07T00:31:38.000000Z"
            },
            {
                "id": 1719,
                "drug_id": 358,
                "brand_id": 1679,
                "created_at": "2020-05-07T00:31:40.000000Z",
                "updated_at": "2020-05-07T00:31:40.000000Z"
            },
            {
                "id": 1720,
                "drug_id": 359,
                "brand_id": 1680,
                "created_at": "2020-05-07T00:32:19.000000Z",
                "updated_at": "2020-05-07T00:32:19.000000Z"
            },
            {
                "id": 1721,
                "drug_id": 360,
                "brand_id": 1681,
                "created_at": "2020-05-07T00:33:06.000000Z",
                "updated_at": "2020-05-07T00:33:06.000000Z"
            },
            {
                "id": 1722,
                "drug_id": 361,
                "brand_id": 1682,
                "created_at": "2020-05-07T00:34:32.000000Z",
                "updated_at": "2020-05-07T00:34:32.000000Z"
            },
            {
                "id": 1723,
                "drug_id": 361,
                "brand_id": 1683,
                "created_at": "2020-05-07T00:34:34.000000Z",
                "updated_at": "2020-05-07T00:34:34.000000Z"
            },
            {
                "id": 1724,
                "drug_id": 361,
                "brand_id": 1684,
                "created_at": "2020-05-07T00:34:37.000000Z",
                "updated_at": "2020-05-07T00:34:37.000000Z"
            },
            {
                "id": 1725,
                "drug_id": 362,
                "brand_id": 1685,
                "created_at": "2020-05-07T00:35:16.000000Z",
                "updated_at": "2020-05-07T00:35:16.000000Z"
            },
            {
                "id": 1726,
                "drug_id": 362,
                "brand_id": 1686,
                "created_at": "2020-05-07T00:35:18.000000Z",
                "updated_at": "2020-05-07T00:35:18.000000Z"
            },
            {
                "id": 1727,
                "drug_id": 362,
                "brand_id": 1687,
                "created_at": "2020-05-07T00:35:20.000000Z",
                "updated_at": "2020-05-07T00:35:20.000000Z"
            },
            {
                "id": 1728,
                "drug_id": 362,
                "brand_id": 1688,
                "created_at": "2020-05-07T00:35:23.000000Z",
                "updated_at": "2020-05-07T00:35:23.000000Z"
            },
            {
                "id": 1729,
                "drug_id": 363,
                "brand_id": 1689,
                "created_at": "2020-05-07T00:37:11.000000Z",
                "updated_at": "2020-05-07T00:37:11.000000Z"
            },
            {
                "id": 1730,
                "drug_id": 363,
                "brand_id": 1690,
                "created_at": "2020-05-07T00:37:13.000000Z",
                "updated_at": "2020-05-07T00:37:13.000000Z"
            },
            {
                "id": 1731,
                "drug_id": 365,
                "brand_id": 1691,
                "created_at": "2020-05-07T00:38:09.000000Z",
                "updated_at": "2020-05-07T00:38:09.000000Z"
            },
            {
                "id": 1732,
                "drug_id": 365,
                "brand_id": 1692,
                "created_at": "2020-05-07T00:38:12.000000Z",
                "updated_at": "2020-05-07T00:38:12.000000Z"
            },
            {
                "id": 1733,
                "drug_id": 366,
                "brand_id": 1693,
                "created_at": "2020-05-07T00:40:20.000000Z",
                "updated_at": "2020-05-07T00:40:20.000000Z"
            },
            {
                "id": 1734,
                "drug_id": 366,
                "brand_id": 1694,
                "created_at": "2020-05-07T00:40:23.000000Z",
                "updated_at": "2020-05-07T00:40:23.000000Z"
            },
            {
                "id": 1735,
                "drug_id": 366,
                "brand_id": 1695,
                "created_at": "2020-05-07T00:40:25.000000Z",
                "updated_at": "2020-05-07T00:40:25.000000Z"
            },
            {
                "id": 1736,
                "drug_id": 366,
                "brand_id": 1696,
                "created_at": "2020-05-07T00:40:27.000000Z",
                "updated_at": "2020-05-07T00:40:27.000000Z"
            },
            {
                "id": 1737,
                "drug_id": 366,
                "brand_id": 1697,
                "created_at": "2020-05-07T00:40:29.000000Z",
                "updated_at": "2020-05-07T00:40:29.000000Z"
            },
            {
                "id": 1738,
                "drug_id": 366,
                "brand_id": 1698,
                "created_at": "2020-05-07T00:40:32.000000Z",
                "updated_at": "2020-05-07T00:40:32.000000Z"
            },
            {
                "id": 1739,
                "drug_id": 366,
                "brand_id": 1699,
                "created_at": "2020-05-07T00:40:34.000000Z",
                "updated_at": "2020-05-07T00:40:34.000000Z"
            },
            {
                "id": 1740,
                "drug_id": 367,
                "brand_id": 1700,
                "created_at": "2020-05-07T00:43:46.000000Z",
                "updated_at": "2020-05-07T00:43:46.000000Z"
            },
            {
                "id": 1741,
                "drug_id": 367,
                "brand_id": 1701,
                "created_at": "2020-05-07T00:43:48.000000Z",
                "updated_at": "2020-05-07T00:43:48.000000Z"
            },
            {
                "id": 1742,
                "drug_id": 367,
                "brand_id": 1702,
                "created_at": "2020-05-07T00:43:50.000000Z",
                "updated_at": "2020-05-07T00:43:50.000000Z"
            },
            {
                "id": 1743,
                "drug_id": 367,
                "brand_id": 1703,
                "created_at": "2020-05-07T00:43:52.000000Z",
                "updated_at": "2020-05-07T00:43:52.000000Z"
            },
            {
                "id": 1744,
                "drug_id": 372,
                "brand_id": 1704,
                "created_at": "2020-05-07T00:48:45.000000Z",
                "updated_at": "2020-05-07T00:48:45.000000Z"
            },
            {
                "id": 1745,
                "drug_id": 373,
                "brand_id": 1705,
                "created_at": "2020-05-07T00:49:38.000000Z",
                "updated_at": "2020-05-07T00:49:38.000000Z"
            },
            {
                "id": 1746,
                "drug_id": 374,
                "brand_id": 1706,
                "created_at": "2020-05-07T00:51:25.000000Z",
                "updated_at": "2020-05-07T00:51:25.000000Z"
            },
            {
                "id": 1747,
                "drug_id": 374,
                "brand_id": 1706,
                "created_at": "2020-05-07T00:51:25.000000Z",
                "updated_at": "2020-05-07T00:51:25.000000Z"
            },
            {
                "id": 1748,
                "drug_id": 374,
                "brand_id": 1706,
                "created_at": "2020-05-07T00:51:25.000000Z",
                "updated_at": "2020-05-07T00:51:25.000000Z"
            },
            {
                "id": 1749,
                "drug_id": 374,
                "brand_id": 1707,
                "created_at": "2020-05-07T00:51:27.000000Z",
                "updated_at": "2020-05-07T00:51:27.000000Z"
            },
            {
                "id": 1750,
                "drug_id": 374,
                "brand_id": 1707,
                "created_at": "2020-05-07T00:51:27.000000Z",
                "updated_at": "2020-05-07T00:51:27.000000Z"
            },
            {
                "id": 1751,
                "drug_id": 374,
                "brand_id": 1707,
                "created_at": "2020-05-07T00:51:27.000000Z",
                "updated_at": "2020-05-07T00:51:27.000000Z"
            },
            {
                "id": 1752,
                "drug_id": 374,
                "brand_id": 1708,
                "created_at": "2020-05-07T00:51:30.000000Z",
                "updated_at": "2020-05-07T00:51:30.000000Z"
            },
            {
                "id": 1753,
                "drug_id": 374,
                "brand_id": 1709,
                "created_at": "2020-05-07T00:51:33.000000Z",
                "updated_at": "2020-05-07T00:51:33.000000Z"
            },
            {
                "id": 1754,
                "drug_id": 374,
                "brand_id": 1710,
                "created_at": "2020-05-07T00:51:35.000000Z",
                "updated_at": "2020-05-07T00:51:35.000000Z"
            },
            {
                "id": 1755,
                "drug_id": 374,
                "brand_id": 1711,
                "created_at": "2020-05-07T00:51:38.000000Z",
                "updated_at": "2020-05-07T00:51:38.000000Z"
            },
            {
                "id": 1756,
                "drug_id": 374,
                "brand_id": 1711,
                "created_at": "2020-05-07T00:51:38.000000Z",
                "updated_at": "2020-05-07T00:51:38.000000Z"
            },
            {
                "id": 1757,
                "drug_id": 374,
                "brand_id": 1712,
                "created_at": "2020-05-07T00:51:40.000000Z",
                "updated_at": "2020-05-07T00:51:40.000000Z"
            },
            {
                "id": 1758,
                "drug_id": 374,
                "brand_id": 1713,
                "created_at": "2020-05-07T00:51:42.000000Z",
                "updated_at": "2020-05-07T00:51:42.000000Z"
            },
            {
                "id": 1759,
                "drug_id": 374,
                "brand_id": 1714,
                "created_at": "2020-05-07T00:51:45.000000Z",
                "updated_at": "2020-05-07T00:51:45.000000Z"
            },
            {
                "id": 1760,
                "drug_id": 374,
                "brand_id": 1714,
                "created_at": "2020-05-07T00:51:45.000000Z",
                "updated_at": "2020-05-07T00:51:45.000000Z"
            },
            {
                "id": 1761,
                "drug_id": 374,
                "brand_id": 1715,
                "created_at": "2020-05-07T00:51:47.000000Z",
                "updated_at": "2020-05-07T00:51:47.000000Z"
            },
            {
                "id": 1762,
                "drug_id": 374,
                "brand_id": 1715,
                "created_at": "2020-05-07T00:51:47.000000Z",
                "updated_at": "2020-05-07T00:51:47.000000Z"
            },
            {
                "id": 1763,
                "drug_id": 375,
                "brand_id": 1716,
                "created_at": "2020-05-07T00:53:11.000000Z",
                "updated_at": "2020-05-07T00:53:11.000000Z"
            },
            {
                "id": 1764,
                "drug_id": 375,
                "brand_id": 1717,
                "created_at": "2020-05-07T00:53:13.000000Z",
                "updated_at": "2020-05-07T00:53:13.000000Z"
            },
            {
                "id": 1765,
                "drug_id": 376,
                "brand_id": 1718,
                "created_at": "2020-05-07T00:55:49.000000Z",
                "updated_at": "2020-05-07T00:55:49.000000Z"
            },
            {
                "id": 1766,
                "drug_id": 376,
                "brand_id": 1719,
                "created_at": "2020-05-07T00:55:51.000000Z",
                "updated_at": "2020-05-07T00:55:51.000000Z"
            },
            {
                "id": 1767,
                "drug_id": 376,
                "brand_id": 1720,
                "created_at": "2020-05-07T00:55:53.000000Z",
                "updated_at": "2020-05-07T00:55:53.000000Z"
            },
            {
                "id": 1768,
                "drug_id": 376,
                "brand_id": 1721,
                "created_at": "2020-05-07T00:55:56.000000Z",
                "updated_at": "2020-05-07T00:55:56.000000Z"
            },
            {
                "id": 1769,
                "drug_id": 376,
                "brand_id": 1722,
                "created_at": "2020-05-07T00:55:58.000000Z",
                "updated_at": "2020-05-07T00:55:58.000000Z"
            },
            {
                "id": 1770,
                "drug_id": 376,
                "brand_id": 1723,
                "created_at": "2020-05-07T00:56:00.000000Z",
                "updated_at": "2020-05-07T00:56:00.000000Z"
            },
            {
                "id": 1771,
                "drug_id": 376,
                "brand_id": 1724,
                "created_at": "2020-05-07T00:56:02.000000Z",
                "updated_at": "2020-05-07T00:56:02.000000Z"
            },
            {
                "id": 1772,
                "drug_id": 376,
                "brand_id": 1725,
                "created_at": "2020-05-07T00:56:05.000000Z",
                "updated_at": "2020-05-07T00:56:05.000000Z"
            },
            {
                "id": 1773,
                "drug_id": 376,
                "brand_id": 1726,
                "created_at": "2020-05-07T00:56:07.000000Z",
                "updated_at": "2020-05-07T00:56:07.000000Z"
            },
            {
                "id": 1774,
                "drug_id": 376,
                "brand_id": 1727,
                "created_at": "2020-05-07T00:56:09.000000Z",
                "updated_at": "2020-05-07T00:56:09.000000Z"
            },
            {
                "id": 1775,
                "drug_id": 376,
                "brand_id": 1728,
                "created_at": "2020-05-07T00:56:12.000000Z",
                "updated_at": "2020-05-07T00:56:12.000000Z"
            },
            {
                "id": 1776,
                "drug_id": 376,
                "brand_id": 1729,
                "created_at": "2020-05-07T00:56:15.000000Z",
                "updated_at": "2020-05-07T00:56:15.000000Z"
            },
            {
                "id": 1777,
                "drug_id": 376,
                "brand_id": 1730,
                "created_at": "2020-05-07T00:56:17.000000Z",
                "updated_at": "2020-05-07T00:56:17.000000Z"
            },
            {
                "id": 1778,
                "drug_id": 376,
                "brand_id": 1731,
                "created_at": "2020-05-07T00:56:20.000000Z",
                "updated_at": "2020-05-07T00:56:20.000000Z"
            },
            {
                "id": 1779,
                "drug_id": 376,
                "brand_id": 1732,
                "created_at": "2020-05-07T00:56:22.000000Z",
                "updated_at": "2020-05-07T00:56:22.000000Z"
            },
            {
                "id": 1780,
                "drug_id": 376,
                "brand_id": 1733,
                "created_at": "2020-05-07T00:56:24.000000Z",
                "updated_at": "2020-05-07T00:56:24.000000Z"
            },
            {
                "id": 1781,
                "drug_id": 376,
                "brand_id": 1734,
                "created_at": "2020-05-07T00:56:27.000000Z",
                "updated_at": "2020-05-07T00:56:27.000000Z"
            },
            {
                "id": 1782,
                "drug_id": 376,
                "brand_id": 1735,
                "created_at": "2020-05-07T00:56:29.000000Z",
                "updated_at": "2020-05-07T00:56:29.000000Z"
            },
            {
                "id": 1783,
                "drug_id": 376,
                "brand_id": 1736,
                "created_at": "2020-05-07T00:56:32.000000Z",
                "updated_at": "2020-05-07T00:56:32.000000Z"
            },
            {
                "id": 1784,
                "drug_id": 376,
                "brand_id": 1737,
                "created_at": "2020-05-07T00:56:34.000000Z",
                "updated_at": "2020-05-07T00:56:34.000000Z"
            },
            {
                "id": 1785,
                "drug_id": 376,
                "brand_id": 1738,
                "created_at": "2020-05-07T00:56:36.000000Z",
                "updated_at": "2020-05-07T00:56:36.000000Z"
            },
            {
                "id": 1786,
                "drug_id": 376,
                "brand_id": 1739,
                "created_at": "2020-05-07T00:56:39.000000Z",
                "updated_at": "2020-05-07T00:56:39.000000Z"
            },
            {
                "id": 1787,
                "drug_id": 376,
                "brand_id": 1740,
                "created_at": "2020-05-07T00:56:41.000000Z",
                "updated_at": "2020-05-07T00:56:41.000000Z"
            },
            {
                "id": 1788,
                "drug_id": 376,
                "brand_id": 1741,
                "created_at": "2020-05-07T00:56:43.000000Z",
                "updated_at": "2020-05-07T00:56:43.000000Z"
            },
            {
                "id": 1789,
                "drug_id": 376,
                "brand_id": 1742,
                "created_at": "2020-05-07T00:56:46.000000Z",
                "updated_at": "2020-05-07T00:56:46.000000Z"
            },
            {
                "id": 1790,
                "drug_id": 376,
                "brand_id": 1743,
                "created_at": "2020-05-07T00:56:48.000000Z",
                "updated_at": "2020-05-07T00:56:48.000000Z"
            },
            {
                "id": 1791,
                "drug_id": 376,
                "brand_id": 1744,
                "created_at": "2020-05-07T00:56:50.000000Z",
                "updated_at": "2020-05-07T00:56:50.000000Z"
            },
            {
                "id": 1792,
                "drug_id": 376,
                "brand_id": 1745,
                "created_at": "2020-05-07T00:56:53.000000Z",
                "updated_at": "2020-05-07T00:56:53.000000Z"
            },
            {
                "id": 1793,
                "drug_id": 376,
                "brand_id": 1746,
                "created_at": "2020-05-07T00:56:55.000000Z",
                "updated_at": "2020-05-07T00:56:55.000000Z"
            },
            {
                "id": 1794,
                "drug_id": 376,
                "brand_id": 1747,
                "created_at": "2020-05-07T00:56:58.000000Z",
                "updated_at": "2020-05-07T00:56:58.000000Z"
            },
            {
                "id": 1795,
                "drug_id": 377,
                "brand_id": 1748,
                "created_at": "2020-05-07T00:58:07.000000Z",
                "updated_at": "2020-05-07T00:58:07.000000Z"
            },
            {
                "id": 1796,
                "drug_id": 378,
                "brand_id": 1749,
                "created_at": "2020-05-07T00:58:48.000000Z",
                "updated_at": "2020-05-07T00:58:48.000000Z"
            },
            {
                "id": 1797,
                "drug_id": 379,
                "brand_id": 1750,
                "created_at": "2020-05-07T01:00:26.000000Z",
                "updated_at": "2020-05-07T01:00:26.000000Z"
            },
            {
                "id": 1798,
                "drug_id": 379,
                "brand_id": 1751,
                "created_at": "2020-05-07T01:00:28.000000Z",
                "updated_at": "2020-05-07T01:00:28.000000Z"
            },
            {
                "id": 1799,
                "drug_id": 380,
                "brand_id": 1752,
                "created_at": "2020-05-07T01:01:22.000000Z",
                "updated_at": "2020-05-07T01:01:22.000000Z"
            },
            {
                "id": 1800,
                "drug_id": 381,
                "brand_id": 1753,
                "created_at": "2020-05-07T01:02:12.000000Z",
                "updated_at": "2020-05-07T01:02:12.000000Z"
            },
            {
                "id": 1801,
                "drug_id": 381,
                "brand_id": 1754,
                "created_at": "2020-05-07T01:02:15.000000Z",
                "updated_at": "2020-05-07T01:02:15.000000Z"
            },
            {
                "id": 1802,
                "drug_id": 381,
                "brand_id": 1755,
                "created_at": "2020-05-07T01:02:17.000000Z",
                "updated_at": "2020-05-07T01:02:17.000000Z"
            },
            {
                "id": 1803,
                "drug_id": 381,
                "brand_id": 1756,
                "created_at": "2020-05-07T01:02:19.000000Z",
                "updated_at": "2020-05-07T01:02:19.000000Z"
            },
            {
                "id": 1804,
                "drug_id": 381,
                "brand_id": 1757,
                "created_at": "2020-05-07T01:02:21.000000Z",
                "updated_at": "2020-05-07T01:02:21.000000Z"
            },
            {
                "id": 1805,
                "drug_id": 382,
                "brand_id": 1758,
                "created_at": "2020-05-07T01:03:02.000000Z",
                "updated_at": "2020-05-07T01:03:02.000000Z"
            },
            {
                "id": 1806,
                "drug_id": 383,
                "brand_id": 1759,
                "created_at": "2020-05-07T01:05:36.000000Z",
                "updated_at": "2020-05-07T01:05:36.000000Z"
            },
            {
                "id": 1807,
                "drug_id": 383,
                "brand_id": 1760,
                "created_at": "2020-05-07T01:05:38.000000Z",
                "updated_at": "2020-05-07T01:05:38.000000Z"
            },
            {
                "id": 1808,
                "drug_id": 383,
                "brand_id": 1761,
                "created_at": "2020-05-07T01:05:40.000000Z",
                "updated_at": "2020-05-07T01:05:40.000000Z"
            },
            {
                "id": 1809,
                "drug_id": 383,
                "brand_id": 1762,
                "created_at": "2020-05-07T01:05:43.000000Z",
                "updated_at": "2020-05-07T01:05:43.000000Z"
            },
            {
                "id": 1810,
                "drug_id": 383,
                "brand_id": 1763,
                "created_at": "2020-05-07T01:05:46.000000Z",
                "updated_at": "2020-05-07T01:05:46.000000Z"
            },
            {
                "id": 1811,
                "drug_id": 384,
                "brand_id": 1764,
                "created_at": "2020-05-07T01:07:11.000000Z",
                "updated_at": "2020-05-07T01:07:11.000000Z"
            },
            {
                "id": 1812,
                "drug_id": 384,
                "brand_id": 1765,
                "created_at": "2020-05-07T01:07:13.000000Z",
                "updated_at": "2020-05-07T01:07:13.000000Z"
            },
            {
                "id": 1813,
                "drug_id": 384,
                "brand_id": 1766,
                "created_at": "2020-05-07T01:07:16.000000Z",
                "updated_at": "2020-05-07T01:07:16.000000Z"
            },
            {
                "id": 1814,
                "drug_id": 384,
                "brand_id": 1767,
                "created_at": "2020-05-07T01:07:18.000000Z",
                "updated_at": "2020-05-07T01:07:18.000000Z"
            },
            {
                "id": 1815,
                "drug_id": 384,
                "brand_id": 1768,
                "created_at": "2020-05-07T01:07:20.000000Z",
                "updated_at": "2020-05-07T01:07:20.000000Z"
            },
            {
                "id": 1816,
                "drug_id": 384,
                "brand_id": 1769,
                "created_at": "2020-05-07T01:07:22.000000Z",
                "updated_at": "2020-05-07T01:07:22.000000Z"
            },
            {
                "id": 1817,
                "drug_id": 384,
                "brand_id": 1770,
                "created_at": "2020-05-07T01:07:25.000000Z",
                "updated_at": "2020-05-07T01:07:25.000000Z"
            },
            {
                "id": 1818,
                "drug_id": 384,
                "brand_id": 1771,
                "created_at": "2020-05-07T01:07:27.000000Z",
                "updated_at": "2020-05-07T01:07:27.000000Z"
            },
            {
                "id": 1819,
                "drug_id": 384,
                "brand_id": 1772,
                "created_at": "2020-05-07T01:07:29.000000Z",
                "updated_at": "2020-05-07T01:07:29.000000Z"
            },
            {
                "id": 1820,
                "drug_id": 386,
                "brand_id": 1773,
                "created_at": "2020-05-07T01:09:07.000000Z",
                "updated_at": "2020-05-07T01:09:07.000000Z"
            },
            {
                "id": 1821,
                "drug_id": 386,
                "brand_id": 1774,
                "created_at": "2020-05-07T01:09:09.000000Z",
                "updated_at": "2020-05-07T01:09:09.000000Z"
            },
            {
                "id": 1822,
                "drug_id": 386,
                "brand_id": 1775,
                "created_at": "2020-05-07T01:09:11.000000Z",
                "updated_at": "2020-05-07T01:09:11.000000Z"
            },
            {
                "id": 1823,
                "drug_id": 386,
                "brand_id": 1776,
                "created_at": "2020-05-07T01:09:13.000000Z",
                "updated_at": "2020-05-07T01:09:13.000000Z"
            },
            {
                "id": 1824,
                "drug_id": 386,
                "brand_id": 1777,
                "created_at": "2020-05-07T01:09:16.000000Z",
                "updated_at": "2020-05-07T01:09:16.000000Z"
            },
            {
                "id": 1825,
                "drug_id": 386,
                "brand_id": 1778,
                "created_at": "2020-05-07T01:09:18.000000Z",
                "updated_at": "2020-05-07T01:09:18.000000Z"
            },
            {
                "id": 1826,
                "drug_id": 386,
                "brand_id": 1779,
                "created_at": "2020-05-07T01:09:21.000000Z",
                "updated_at": "2020-05-07T01:09:21.000000Z"
            },
            {
                "id": 1827,
                "drug_id": 386,
                "brand_id": 1780,
                "created_at": "2020-05-07T01:09:23.000000Z",
                "updated_at": "2020-05-07T01:09:23.000000Z"
            },
            {
                "id": 1828,
                "drug_id": 386,
                "brand_id": 1781,
                "created_at": "2020-05-07T01:09:25.000000Z",
                "updated_at": "2020-05-07T01:09:25.000000Z"
            },
            {
                "id": 1829,
                "drug_id": 386,
                "brand_id": 1782,
                "created_at": "2020-05-07T01:09:27.000000Z",
                "updated_at": "2020-05-07T01:09:27.000000Z"
            },
            {
                "id": 1830,
                "drug_id": 386,
                "brand_id": 1783,
                "created_at": "2020-05-07T01:09:30.000000Z",
                "updated_at": "2020-05-07T01:09:30.000000Z"
            },
            {
                "id": 1831,
                "drug_id": 386,
                "brand_id": 1784,
                "created_at": "2020-05-07T01:09:32.000000Z",
                "updated_at": "2020-05-07T01:09:32.000000Z"
            },
            {
                "id": 1832,
                "drug_id": 387,
                "brand_id": 1785,
                "created_at": "2020-05-07T01:11:02.000000Z",
                "updated_at": "2020-05-07T01:11:02.000000Z"
            },
            {
                "id": 1833,
                "drug_id": 387,
                "brand_id": 1785,
                "created_at": "2020-05-07T01:11:02.000000Z",
                "updated_at": "2020-05-07T01:11:02.000000Z"
            },
            {
                "id": 1834,
                "drug_id": 387,
                "brand_id": 1785,
                "created_at": "2020-05-07T01:11:02.000000Z",
                "updated_at": "2020-05-07T01:11:02.000000Z"
            },
            {
                "id": 1835,
                "drug_id": 387,
                "brand_id": 1786,
                "created_at": "2020-05-07T01:11:05.000000Z",
                "updated_at": "2020-05-07T01:11:05.000000Z"
            },
            {
                "id": 1836,
                "drug_id": 387,
                "brand_id": 1786,
                "created_at": "2020-05-07T01:11:05.000000Z",
                "updated_at": "2020-05-07T01:11:05.000000Z"
            },
            {
                "id": 1837,
                "drug_id": 387,
                "brand_id": 1787,
                "created_at": "2020-05-07T01:11:07.000000Z",
                "updated_at": "2020-05-07T01:11:07.000000Z"
            },
            {
                "id": 1838,
                "drug_id": 387,
                "brand_id": 1787,
                "created_at": "2020-05-07T01:11:07.000000Z",
                "updated_at": "2020-05-07T01:11:07.000000Z"
            },
            {
                "id": 1839,
                "drug_id": 387,
                "brand_id": 1787,
                "created_at": "2020-05-07T01:11:07.000000Z",
                "updated_at": "2020-05-07T01:11:07.000000Z"
            },
            {
                "id": 1840,
                "drug_id": 387,
                "brand_id": 1788,
                "created_at": "2020-05-07T01:11:09.000000Z",
                "updated_at": "2020-05-07T01:11:09.000000Z"
            },
            {
                "id": 1841,
                "drug_id": 387,
                "brand_id": 1788,
                "created_at": "2020-05-07T01:11:09.000000Z",
                "updated_at": "2020-05-07T01:11:09.000000Z"
            },
            {
                "id": 1842,
                "drug_id": 387,
                "brand_id": 1789,
                "created_at": "2020-05-07T01:11:12.000000Z",
                "updated_at": "2020-05-07T01:11:12.000000Z"
            },
            {
                "id": 1843,
                "drug_id": 387,
                "brand_id": 1789,
                "created_at": "2020-05-07T01:11:12.000000Z",
                "updated_at": "2020-05-07T01:11:12.000000Z"
            },
            {
                "id": 1844,
                "drug_id": 387,
                "brand_id": 1790,
                "created_at": "2020-05-07T01:11:14.000000Z",
                "updated_at": "2020-05-07T01:11:14.000000Z"
            },
            {
                "id": 1845,
                "drug_id": 387,
                "brand_id": 1790,
                "created_at": "2020-05-07T01:11:14.000000Z",
                "updated_at": "2020-05-07T01:11:14.000000Z"
            },
            {
                "id": 1846,
                "drug_id": 387,
                "brand_id": 1791,
                "created_at": "2020-05-07T01:11:16.000000Z",
                "updated_at": "2020-05-07T01:11:16.000000Z"
            },
            {
                "id": 1847,
                "drug_id": 387,
                "brand_id": 1792,
                "created_at": "2020-05-07T01:11:19.000000Z",
                "updated_at": "2020-05-07T01:11:19.000000Z"
            },
            {
                "id": 1848,
                "drug_id": 387,
                "brand_id": 1793,
                "created_at": "2020-05-07T01:11:21.000000Z",
                "updated_at": "2020-05-07T01:11:21.000000Z"
            },
            {
                "id": 1849,
                "drug_id": 387,
                "brand_id": 1794,
                "created_at": "2020-05-07T01:11:23.000000Z",
                "updated_at": "2020-05-07T01:11:23.000000Z"
            },
            {
                "id": 1850,
                "drug_id": 387,
                "brand_id": 1795,
                "created_at": "2020-05-07T01:11:25.000000Z",
                "updated_at": "2020-05-07T01:11:25.000000Z"
            },
            {
                "id": 1851,
                "drug_id": 387,
                "brand_id": 1796,
                "created_at": "2020-05-07T01:11:28.000000Z",
                "updated_at": "2020-05-07T01:11:28.000000Z"
            },
            {
                "id": 1852,
                "drug_id": 387,
                "brand_id": 1797,
                "created_at": "2020-05-07T01:11:30.000000Z",
                "updated_at": "2020-05-07T01:11:30.000000Z"
            },
            {
                "id": 1853,
                "drug_id": 387,
                "brand_id": 1798,
                "created_at": "2020-05-07T01:11:33.000000Z",
                "updated_at": "2020-05-07T01:11:33.000000Z"
            },
            {
                "id": 1854,
                "drug_id": 387,
                "brand_id": 1799,
                "created_at": "2020-05-07T01:11:35.000000Z",
                "updated_at": "2020-05-07T01:11:35.000000Z"
            },
            {
                "id": 1855,
                "drug_id": 387,
                "brand_id": 1800,
                "created_at": "2020-05-07T01:11:38.000000Z",
                "updated_at": "2020-05-07T01:11:38.000000Z"
            },
            {
                "id": 1856,
                "drug_id": 387,
                "brand_id": 1801,
                "created_at": "2020-05-07T01:11:40.000000Z",
                "updated_at": "2020-05-07T01:11:40.000000Z"
            },
            {
                "id": 1857,
                "drug_id": 388,
                "brand_id": 1802,
                "created_at": "2020-05-07T01:12:49.000000Z",
                "updated_at": "2020-05-07T01:12:49.000000Z"
            },
            {
                "id": 1858,
                "drug_id": 388,
                "brand_id": 1803,
                "created_at": "2020-05-07T01:12:51.000000Z",
                "updated_at": "2020-05-07T01:12:51.000000Z"
            },
            {
                "id": 1859,
                "drug_id": 389,
                "brand_id": 1804,
                "created_at": "2020-05-07T01:13:43.000000Z",
                "updated_at": "2020-05-07T01:13:43.000000Z"
            },
            {
                "id": 1860,
                "drug_id": 389,
                "brand_id": 1805,
                "created_at": "2020-05-07T01:13:45.000000Z",
                "updated_at": "2020-05-07T01:13:45.000000Z"
            },
            {
                "id": 1861,
                "drug_id": 391,
                "brand_id": 1806,
                "created_at": "2020-05-07T01:16:07.000000Z",
                "updated_at": "2020-05-07T01:16:07.000000Z"
            },
            {
                "id": 1862,
                "drug_id": 391,
                "brand_id": 1807,
                "created_at": "2020-05-07T01:16:09.000000Z",
                "updated_at": "2020-05-07T01:16:09.000000Z"
            },
            {
                "id": 1863,
                "drug_id": 391,
                "brand_id": 1808,
                "created_at": "2020-05-07T01:16:12.000000Z",
                "updated_at": "2020-05-07T01:16:12.000000Z"
            },
            {
                "id": 1864,
                "drug_id": 392,
                "brand_id": 1809,
                "created_at": "2020-05-07T01:17:23.000000Z",
                "updated_at": "2020-05-07T01:17:23.000000Z"
            },
            {
                "id": 1865,
                "drug_id": 392,
                "brand_id": 1810,
                "created_at": "2020-05-07T01:17:25.000000Z",
                "updated_at": "2020-05-07T01:17:25.000000Z"
            },
            {
                "id": 1866,
                "drug_id": 392,
                "brand_id": 1811,
                "created_at": "2020-05-07T01:17:27.000000Z",
                "updated_at": "2020-05-07T01:17:27.000000Z"
            },
            {
                "id": 1867,
                "drug_id": 392,
                "brand_id": 1812,
                "created_at": "2020-05-07T01:17:30.000000Z",
                "updated_at": "2020-05-07T01:17:30.000000Z"
            },
            {
                "id": 1868,
                "drug_id": 392,
                "brand_id": 1813,
                "created_at": "2020-05-07T01:17:32.000000Z",
                "updated_at": "2020-05-07T01:17:32.000000Z"
            },
            {
                "id": 1869,
                "drug_id": 392,
                "brand_id": 1814,
                "created_at": "2020-05-07T01:17:35.000000Z",
                "updated_at": "2020-05-07T01:17:35.000000Z"
            },
            {
                "id": 1870,
                "drug_id": 393,
                "brand_id": 1815,
                "created_at": "2020-05-07T01:18:24.000000Z",
                "updated_at": "2020-05-07T01:18:24.000000Z"
            },
            {
                "id": 1871,
                "drug_id": 393,
                "brand_id": 1816,
                "created_at": "2020-05-07T01:18:27.000000Z",
                "updated_at": "2020-05-07T01:18:27.000000Z"
            },
            {
                "id": 1872,
                "drug_id": 393,
                "brand_id": 1817,
                "created_at": "2020-05-07T01:18:29.000000Z",
                "updated_at": "2020-05-07T01:18:29.000000Z"
            },
            {
                "id": 1873,
                "drug_id": 394,
                "brand_id": 1818,
                "created_at": "2020-05-07T01:19:35.000000Z",
                "updated_at": "2020-05-07T01:19:35.000000Z"
            },
            {
                "id": 1874,
                "drug_id": 396,
                "brand_id": 1819,
                "created_at": "2020-05-07T01:21:08.000000Z",
                "updated_at": "2020-05-07T01:21:08.000000Z"
            },
            {
                "id": 1875,
                "drug_id": 396,
                "brand_id": 1820,
                "created_at": "2020-05-07T01:21:11.000000Z",
                "updated_at": "2020-05-07T01:21:11.000000Z"
            },
            {
                "id": 1876,
                "drug_id": 396,
                "brand_id": 1821,
                "created_at": "2020-05-07T01:21:13.000000Z",
                "updated_at": "2020-05-07T01:21:13.000000Z"
            },
            {
                "id": 1877,
                "drug_id": 397,
                "brand_id": 1822,
                "created_at": "2020-05-07T01:21:53.000000Z",
                "updated_at": "2020-05-07T01:21:53.000000Z"
            },
            {
                "id": 1878,
                "drug_id": 398,
                "brand_id": 1823,
                "created_at": "2020-05-07T01:24:22.000000Z",
                "updated_at": "2020-05-07T01:24:22.000000Z"
            },
            {
                "id": 1879,
                "drug_id": 398,
                "brand_id": 1824,
                "created_at": "2020-05-07T01:24:24.000000Z",
                "updated_at": "2020-05-07T01:24:24.000000Z"
            },
            {
                "id": 1880,
                "drug_id": 399,
                "brand_id": 1825,
                "created_at": "2020-05-07T01:25:35.000000Z",
                "updated_at": "2020-05-07T01:25:35.000000Z"
            },
            {
                "id": 1881,
                "drug_id": 399,
                "brand_id": 1826,
                "created_at": "2020-05-07T01:25:37.000000Z",
                "updated_at": "2020-05-07T01:25:37.000000Z"
            },
            {
                "id": 1882,
                "drug_id": 399,
                "brand_id": 1827,
                "created_at": "2020-05-07T01:25:40.000000Z",
                "updated_at": "2020-05-07T01:25:40.000000Z"
            },
            {
                "id": 1883,
                "drug_id": 399,
                "brand_id": 1828,
                "created_at": "2020-05-07T01:25:43.000000Z",
                "updated_at": "2020-05-07T01:25:43.000000Z"
            },
            {
                "id": 1884,
                "drug_id": 399,
                "brand_id": 1829,
                "created_at": "2020-05-07T01:25:45.000000Z",
                "updated_at": "2020-05-07T01:25:45.000000Z"
            },
            {
                "id": 1885,
                "drug_id": 399,
                "brand_id": 1830,
                "created_at": "2020-05-07T01:25:47.000000Z",
                "updated_at": "2020-05-07T01:25:47.000000Z"
            },
            {
                "id": 1886,
                "drug_id": 400,
                "brand_id": 1831,
                "created_at": "2020-05-07T01:26:55.000000Z",
                "updated_at": "2020-05-07T01:26:55.000000Z"
            },
            {
                "id": 1887,
                "drug_id": 400,
                "brand_id": 1832,
                "created_at": "2020-05-07T01:26:58.000000Z",
                "updated_at": "2020-05-07T01:26:58.000000Z"
            },
            {
                "id": 1888,
                "drug_id": 403,
                "brand_id": 1833,
                "created_at": "2020-05-07T01:31:10.000000Z",
                "updated_at": "2020-05-07T01:31:10.000000Z"
            },
            {
                "id": 1889,
                "drug_id": 403,
                "brand_id": 1834,
                "created_at": "2020-05-07T01:31:12.000000Z",
                "updated_at": "2020-05-07T01:31:12.000000Z"
            },
            {
                "id": 1890,
                "drug_id": 403,
                "brand_id": 1835,
                "created_at": "2020-05-07T01:31:15.000000Z",
                "updated_at": "2020-05-07T01:31:15.000000Z"
            },
            {
                "id": 1891,
                "drug_id": 403,
                "brand_id": 1836,
                "created_at": "2020-05-07T01:31:17.000000Z",
                "updated_at": "2020-05-07T01:31:17.000000Z"
            },
            {
                "id": 1892,
                "drug_id": 404,
                "brand_id": 1837,
                "created_at": "2020-05-07T01:31:58.000000Z",
                "updated_at": "2020-05-07T01:31:58.000000Z"
            },
            {
                "id": 1893,
                "drug_id": 404,
                "brand_id": 1837,
                "created_at": "2020-05-07T01:31:58.000000Z",
                "updated_at": "2020-05-07T01:31:58.000000Z"
            },
            {
                "id": 1894,
                "drug_id": 404,
                "brand_id": 1838,
                "created_at": "2020-05-07T01:32:00.000000Z",
                "updated_at": "2020-05-07T01:32:00.000000Z"
            },
            {
                "id": 1895,
                "drug_id": 405,
                "brand_id": 1839,
                "created_at": "2020-05-07T01:33:08.000000Z",
                "updated_at": "2020-05-07T01:33:08.000000Z"
            },
            {
                "id": 1896,
                "drug_id": 405,
                "brand_id": 1840,
                "created_at": "2020-05-07T01:33:11.000000Z",
                "updated_at": "2020-05-07T01:33:11.000000Z"
            },
            {
                "id": 1897,
                "drug_id": 405,
                "brand_id": 1841,
                "created_at": "2020-05-07T01:33:13.000000Z",
                "updated_at": "2020-05-07T01:33:13.000000Z"
            },
            {
                "id": 1898,
                "drug_id": 405,
                "brand_id": 1842,
                "created_at": "2020-05-07T01:33:16.000000Z",
                "updated_at": "2020-05-07T01:33:16.000000Z"
            },
            {
                "id": 1899,
                "drug_id": 406,
                "brand_id": 1843,
                "created_at": "2020-05-07T01:33:52.000000Z",
                "updated_at": "2020-05-07T01:33:52.000000Z"
            },
            {
                "id": 1900,
                "drug_id": 407,
                "brand_id": 1844,
                "created_at": "2020-05-07T01:34:22.000000Z",
                "updated_at": "2020-05-07T01:34:22.000000Z"
            },
            {
                "id": 1901,
                "drug_id": 408,
                "brand_id": 1845,
                "created_at": "2020-05-07T01:35:08.000000Z",
                "updated_at": "2020-05-07T01:35:08.000000Z"
            },
            {
                "id": 1902,
                "drug_id": 409,
                "brand_id": 1846,
                "created_at": "2020-05-07T01:35:57.000000Z",
                "updated_at": "2020-05-07T01:35:57.000000Z"
            },
            {
                "id": 1903,
                "drug_id": 410,
                "brand_id": 1847,
                "created_at": "2020-05-07T01:36:40.000000Z",
                "updated_at": "2020-05-07T01:36:40.000000Z"
            },
            {
                "id": 1904,
                "drug_id": 411,
                "brand_id": 1848,
                "created_at": "2020-05-07T01:38:22.000000Z",
                "updated_at": "2020-05-07T01:38:22.000000Z"
            },
            {
                "id": 1905,
                "drug_id": 411,
                "brand_id": 1849,
                "created_at": "2020-05-07T01:38:24.000000Z",
                "updated_at": "2020-05-07T01:38:24.000000Z"
            },
            {
                "id": 1906,
                "drug_id": 411,
                "brand_id": 1850,
                "created_at": "2020-05-07T01:38:26.000000Z",
                "updated_at": "2020-05-07T01:38:26.000000Z"
            },
            {
                "id": 1907,
                "drug_id": 412,
                "brand_id": 1851,
                "created_at": "2020-05-07T01:40:41.000000Z",
                "updated_at": "2020-05-07T01:40:41.000000Z"
            },
            {
                "id": 1908,
                "drug_id": 412,
                "brand_id": 1852,
                "created_at": "2020-05-07T01:40:43.000000Z",
                "updated_at": "2020-05-07T01:40:43.000000Z"
            },
            {
                "id": 1909,
                "drug_id": 412,
                "brand_id": 1853,
                "created_at": "2020-05-07T01:40:45.000000Z",
                "updated_at": "2020-05-07T01:40:45.000000Z"
            },
            {
                "id": 1910,
                "drug_id": 412,
                "brand_id": 1854,
                "created_at": "2020-05-07T01:40:48.000000Z",
                "updated_at": "2020-05-07T01:40:48.000000Z"
            },
            {
                "id": 1911,
                "drug_id": 412,
                "brand_id": 1855,
                "created_at": "2020-05-07T01:40:50.000000Z",
                "updated_at": "2020-05-07T01:40:50.000000Z"
            },
            {
                "id": 1912,
                "drug_id": 412,
                "brand_id": 1856,
                "created_at": "2020-05-07T01:40:52.000000Z",
                "updated_at": "2020-05-07T01:40:52.000000Z"
            },
            {
                "id": 1913,
                "drug_id": 413,
                "brand_id": 1857,
                "created_at": "2020-05-07T01:41:41.000000Z",
                "updated_at": "2020-05-07T01:41:41.000000Z"
            },
            {
                "id": 1914,
                "drug_id": 413,
                "brand_id": 1858,
                "created_at": "2020-05-07T01:41:43.000000Z",
                "updated_at": "2020-05-07T01:41:43.000000Z"
            },
            {
                "id": 1915,
                "drug_id": 414,
                "brand_id": 1859,
                "created_at": "2020-05-07T01:42:27.000000Z",
                "updated_at": "2020-05-07T01:42:27.000000Z"
            },
            {
                "id": 1916,
                "drug_id": 415,
                "brand_id": 1860,
                "created_at": "2020-05-07T01:43:32.000000Z",
                "updated_at": "2020-05-07T01:43:32.000000Z"
            },
            {
                "id": 1917,
                "drug_id": 415,
                "brand_id": 1861,
                "created_at": "2020-05-07T01:43:35.000000Z",
                "updated_at": "2020-05-07T01:43:35.000000Z"
            },
            {
                "id": 1918,
                "drug_id": 415,
                "brand_id": 1862,
                "created_at": "2020-05-07T01:43:37.000000Z",
                "updated_at": "2020-05-07T01:43:37.000000Z"
            },
            {
                "id": 1919,
                "drug_id": 415,
                "brand_id": 1863,
                "created_at": "2020-05-07T01:43:40.000000Z",
                "updated_at": "2020-05-07T01:43:40.000000Z"
            },
            {
                "id": 1920,
                "drug_id": 415,
                "brand_id": 1864,
                "created_at": "2020-05-07T01:43:42.000000Z",
                "updated_at": "2020-05-07T01:43:42.000000Z"
            },
            {
                "id": 1921,
                "drug_id": 415,
                "brand_id": 1865,
                "created_at": "2020-05-07T01:43:44.000000Z",
                "updated_at": "2020-05-07T01:43:44.000000Z"
            },
            {
                "id": 1922,
                "drug_id": 415,
                "brand_id": 1866,
                "created_at": "2020-05-07T01:43:47.000000Z",
                "updated_at": "2020-05-07T01:43:47.000000Z"
            },
            {
                "id": 1923,
                "drug_id": 416,
                "brand_id": 1867,
                "created_at": "2020-05-07T01:45:54.000000Z",
                "updated_at": "2020-05-07T01:45:54.000000Z"
            },
            {
                "id": 1924,
                "drug_id": 416,
                "brand_id": 1868,
                "created_at": "2020-05-07T01:45:56.000000Z",
                "updated_at": "2020-05-07T01:45:56.000000Z"
            },
            {
                "id": 1925,
                "drug_id": 416,
                "brand_id": 1869,
                "created_at": "2020-05-07T01:45:59.000000Z",
                "updated_at": "2020-05-07T01:45:59.000000Z"
            },
            {
                "id": 1926,
                "drug_id": 416,
                "brand_id": 1870,
                "created_at": "2020-05-07T01:46:01.000000Z",
                "updated_at": "2020-05-07T01:46:01.000000Z"
            },
            {
                "id": 1927,
                "drug_id": 416,
                "brand_id": 1871,
                "created_at": "2020-05-07T01:46:03.000000Z",
                "updated_at": "2020-05-07T01:46:03.000000Z"
            },
            {
                "id": 1928,
                "drug_id": 417,
                "brand_id": 1872,
                "created_at": "2020-05-07T01:46:32.000000Z",
                "updated_at": "2020-05-07T01:46:32.000000Z"
            },
            {
                "id": 1929,
                "drug_id": 417,
                "brand_id": 1873,
                "created_at": "2020-05-07T01:46:34.000000Z",
                "updated_at": "2020-05-07T01:46:34.000000Z"
            },
            {
                "id": 1930,
                "drug_id": 418,
                "brand_id": 1874,
                "created_at": "2020-05-07T01:47:10.000000Z",
                "updated_at": "2020-05-07T01:47:10.000000Z"
            },
            {
                "id": 1931,
                "drug_id": 418,
                "brand_id": 1875,
                "created_at": "2020-05-07T01:47:12.000000Z",
                "updated_at": "2020-05-07T01:47:12.000000Z"
            },
            {
                "id": 1932,
                "drug_id": 418,
                "brand_id": 1876,
                "created_at": "2020-05-07T01:47:14.000000Z",
                "updated_at": "2020-05-07T01:47:14.000000Z"
            },
            {
                "id": 1933,
                "drug_id": 418,
                "brand_id": 1877,
                "created_at": "2020-05-07T01:47:16.000000Z",
                "updated_at": "2020-05-07T01:47:16.000000Z"
            },
            {
                "id": 1934,
                "drug_id": 418,
                "brand_id": 1878,
                "created_at": "2020-05-07T01:47:19.000000Z",
                "updated_at": "2020-05-07T01:47:19.000000Z"
            },
            {
                "id": 1935,
                "drug_id": 418,
                "brand_id": 1879,
                "created_at": "2020-05-07T01:47:21.000000Z",
                "updated_at": "2020-05-07T01:47:21.000000Z"
            },
            {
                "id": 1936,
                "drug_id": 418,
                "brand_id": 1880,
                "created_at": "2020-05-07T01:47:23.000000Z",
                "updated_at": "2020-05-07T01:47:23.000000Z"
            },
            {
                "id": 1937,
                "drug_id": 420,
                "brand_id": 1881,
                "created_at": "2020-05-07T01:49:55.000000Z",
                "updated_at": "2020-05-07T01:49:55.000000Z"
            },
            {
                "id": 1938,
                "drug_id": 420,
                "brand_id": 1882,
                "created_at": "2020-05-07T01:49:58.000000Z",
                "updated_at": "2020-05-07T01:49:58.000000Z"
            },
            {
                "id": 1939,
                "drug_id": 420,
                "brand_id": 1883,
                "created_at": "2020-05-07T01:50:00.000000Z",
                "updated_at": "2020-05-07T01:50:00.000000Z"
            },
            {
                "id": 1940,
                "drug_id": 421,
                "brand_id": 1884,
                "created_at": "2020-05-07T01:51:36.000000Z",
                "updated_at": "2020-05-07T01:51:36.000000Z"
            },
            {
                "id": 1941,
                "drug_id": 422,
                "brand_id": 1885,
                "created_at": "2020-05-07T01:52:37.000000Z",
                "updated_at": "2020-05-07T01:52:37.000000Z"
            },
            {
                "id": 1942,
                "drug_id": 422,
                "brand_id": 1886,
                "created_at": "2020-05-07T01:52:39.000000Z",
                "updated_at": "2020-05-07T01:52:39.000000Z"
            },
            {
                "id": 1943,
                "drug_id": 422,
                "brand_id": 1887,
                "created_at": "2020-05-07T01:52:41.000000Z",
                "updated_at": "2020-05-07T01:52:41.000000Z"
            },
            {
                "id": 1944,
                "drug_id": 422,
                "brand_id": 1888,
                "created_at": "2020-05-07T01:52:44.000000Z",
                "updated_at": "2020-05-07T01:52:44.000000Z"
            },
            {
                "id": 1945,
                "drug_id": 422,
                "brand_id": 1889,
                "created_at": "2020-05-07T01:52:46.000000Z",
                "updated_at": "2020-05-07T01:52:46.000000Z"
            },
            {
                "id": 1946,
                "drug_id": 422,
                "brand_id": 1890,
                "created_at": "2020-05-07T01:52:49.000000Z",
                "updated_at": "2020-05-07T01:52:49.000000Z"
            },
            {
                "id": 1947,
                "drug_id": 422,
                "brand_id": 1891,
                "created_at": "2020-05-07T01:52:52.000000Z",
                "updated_at": "2020-05-07T01:52:52.000000Z"
            },
            {
                "id": 1948,
                "drug_id": 422,
                "brand_id": 1892,
                "created_at": "2020-05-07T01:52:54.000000Z",
                "updated_at": "2020-05-07T01:52:54.000000Z"
            },
            {
                "id": 1949,
                "drug_id": 422,
                "brand_id": 1893,
                "created_at": "2020-05-07T01:52:56.000000Z",
                "updated_at": "2020-05-07T01:52:56.000000Z"
            },
            {
                "id": 1950,
                "drug_id": 422,
                "brand_id": 1894,
                "created_at": "2020-05-07T01:52:59.000000Z",
                "updated_at": "2020-05-07T01:52:59.000000Z"
            },
            {
                "id": 1951,
                "drug_id": 422,
                "brand_id": 1895,
                "created_at": "2020-05-07T01:53:01.000000Z",
                "updated_at": "2020-05-07T01:53:01.000000Z"
            },
            {
                "id": 1952,
                "drug_id": 422,
                "brand_id": 1896,
                "created_at": "2020-05-07T01:53:04.000000Z",
                "updated_at": "2020-05-07T01:53:04.000000Z"
            },
            {
                "id": 1953,
                "drug_id": 422,
                "brand_id": 1897,
                "created_at": "2020-05-07T01:53:06.000000Z",
                "updated_at": "2020-05-07T01:53:06.000000Z"
            },
            {
                "id": 1954,
                "drug_id": 422,
                "brand_id": 1898,
                "created_at": "2020-05-07T01:53:09.000000Z",
                "updated_at": "2020-05-07T01:53:09.000000Z"
            },
            {
                "id": 1955,
                "drug_id": 422,
                "brand_id": 1899,
                "created_at": "2020-05-07T01:53:11.000000Z",
                "updated_at": "2020-05-07T01:53:11.000000Z"
            },
            {
                "id": 1956,
                "drug_id": 422,
                "brand_id": 1900,
                "created_at": "2020-05-07T01:53:13.000000Z",
                "updated_at": "2020-05-07T01:53:13.000000Z"
            },
            {
                "id": 1957,
                "drug_id": 422,
                "brand_id": 1901,
                "created_at": "2020-05-07T01:53:16.000000Z",
                "updated_at": "2020-05-07T01:53:16.000000Z"
            },
            {
                "id": 1958,
                "drug_id": 422,
                "brand_id": 1902,
                "created_at": "2020-05-07T01:53:18.000000Z",
                "updated_at": "2020-05-07T01:53:18.000000Z"
            },
            {
                "id": 1959,
                "drug_id": 422,
                "brand_id": 1903,
                "created_at": "2020-05-07T01:53:21.000000Z",
                "updated_at": "2020-05-07T01:53:21.000000Z"
            },
            {
                "id": 1960,
                "drug_id": 422,
                "brand_id": 1904,
                "created_at": "2020-05-07T01:53:23.000000Z",
                "updated_at": "2020-05-07T01:53:23.000000Z"
            },
            {
                "id": 1961,
                "drug_id": 422,
                "brand_id": 1905,
                "created_at": "2020-05-07T01:53:25.000000Z",
                "updated_at": "2020-05-07T01:53:25.000000Z"
            },
            {
                "id": 1962,
                "drug_id": 423,
                "brand_id": 1906,
                "created_at": "2020-05-07T01:54:29.000000Z",
                "updated_at": "2020-05-07T01:54:29.000000Z"
            },
            {
                "id": 1963,
                "drug_id": 423,
                "brand_id": 1907,
                "created_at": "2020-05-07T01:54:31.000000Z",
                "updated_at": "2020-05-07T01:54:31.000000Z"
            },
            {
                "id": 1964,
                "drug_id": 423,
                "brand_id": 1908,
                "created_at": "2020-05-07T01:54:34.000000Z",
                "updated_at": "2020-05-07T01:54:34.000000Z"
            },
            {
                "id": 1965,
                "drug_id": 423,
                "brand_id": 1909,
                "created_at": "2020-05-07T01:54:36.000000Z",
                "updated_at": "2020-05-07T01:54:36.000000Z"
            },
            {
                "id": 1966,
                "drug_id": 423,
                "brand_id": 1910,
                "created_at": "2020-05-07T01:54:38.000000Z",
                "updated_at": "2020-05-07T01:54:38.000000Z"
            },
            {
                "id": 1967,
                "drug_id": 423,
                "brand_id": 1911,
                "created_at": "2020-05-07T01:54:40.000000Z",
                "updated_at": "2020-05-07T01:54:40.000000Z"
            },
            {
                "id": 1968,
                "drug_id": 423,
                "brand_id": 1912,
                "created_at": "2020-05-07T01:54:43.000000Z",
                "updated_at": "2020-05-07T01:54:43.000000Z"
            },
            {
                "id": 1969,
                "drug_id": 423,
                "brand_id": 1913,
                "created_at": "2020-05-07T01:54:45.000000Z",
                "updated_at": "2020-05-07T01:54:45.000000Z"
            },
            {
                "id": 1970,
                "drug_id": 423,
                "brand_id": 1914,
                "created_at": "2020-05-07T01:54:47.000000Z",
                "updated_at": "2020-05-07T01:54:47.000000Z"
            },
            {
                "id": 1971,
                "drug_id": 423,
                "brand_id": 1915,
                "created_at": "2020-05-07T01:54:49.000000Z",
                "updated_at": "2020-05-07T01:54:49.000000Z"
            },
            {
                "id": 1972,
                "drug_id": 423,
                "brand_id": 1916,
                "created_at": "2020-05-07T01:54:52.000000Z",
                "updated_at": "2020-05-07T01:54:52.000000Z"
            },
            {
                "id": 1973,
                "drug_id": 423,
                "brand_id": 1917,
                "created_at": "2020-05-07T01:54:54.000000Z",
                "updated_at": "2020-05-07T01:54:54.000000Z"
            },
            {
                "id": 1974,
                "drug_id": 424,
                "brand_id": 1918,
                "created_at": "2020-05-07T01:56:25.000000Z",
                "updated_at": "2020-05-07T01:56:25.000000Z"
            },
            {
                "id": 1975,
                "drug_id": 424,
                "brand_id": 1919,
                "created_at": "2020-05-07T01:56:28.000000Z",
                "updated_at": "2020-05-07T01:56:28.000000Z"
            },
            {
                "id": 1976,
                "drug_id": 424,
                "brand_id": 1920,
                "created_at": "2020-05-07T01:56:30.000000Z",
                "updated_at": "2020-05-07T01:56:30.000000Z"
            },
            {
                "id": 1977,
                "drug_id": 424,
                "brand_id": 1921,
                "created_at": "2020-05-07T01:56:32.000000Z",
                "updated_at": "2020-05-07T01:56:32.000000Z"
            },
            {
                "id": 1978,
                "drug_id": 424,
                "brand_id": 1922,
                "created_at": "2020-05-07T01:56:35.000000Z",
                "updated_at": "2020-05-07T01:56:35.000000Z"
            },
            {
                "id": 1979,
                "drug_id": 424,
                "brand_id": 1923,
                "created_at": "2020-05-07T01:56:37.000000Z",
                "updated_at": "2020-05-07T01:56:37.000000Z"
            },
            {
                "id": 1980,
                "drug_id": 424,
                "brand_id": 1924,
                "created_at": "2020-05-07T01:56:40.000000Z",
                "updated_at": "2020-05-07T01:56:40.000000Z"
            },
            {
                "id": 1981,
                "drug_id": 424,
                "brand_id": 1925,
                "created_at": "2020-05-07T01:56:42.000000Z",
                "updated_at": "2020-05-07T01:56:42.000000Z"
            },
            {
                "id": 1982,
                "drug_id": 424,
                "brand_id": 1926,
                "created_at": "2020-05-07T01:56:45.000000Z",
                "updated_at": "2020-05-07T01:56:45.000000Z"
            },
            {
                "id": 1983,
                "drug_id": 424,
                "brand_id": 1927,
                "created_at": "2020-05-07T01:56:47.000000Z",
                "updated_at": "2020-05-07T01:56:47.000000Z"
            },
            {
                "id": 1984,
                "drug_id": 424,
                "brand_id": 1928,
                "created_at": "2020-05-07T01:56:50.000000Z",
                "updated_at": "2020-05-07T01:56:50.000000Z"
            },
            {
                "id": 1985,
                "drug_id": 424,
                "brand_id": 1929,
                "created_at": "2020-05-07T01:56:52.000000Z",
                "updated_at": "2020-05-07T01:56:52.000000Z"
            },
            {
                "id": 1986,
                "drug_id": 424,
                "brand_id": 1930,
                "created_at": "2020-05-07T01:56:55.000000Z",
                "updated_at": "2020-05-07T01:56:55.000000Z"
            },
            {
                "id": 1987,
                "drug_id": 424,
                "brand_id": 1931,
                "created_at": "2020-05-07T01:56:57.000000Z",
                "updated_at": "2020-05-07T01:56:57.000000Z"
            },
            {
                "id": 1988,
                "drug_id": 424,
                "brand_id": 1932,
                "created_at": "2020-05-07T01:57:00.000000Z",
                "updated_at": "2020-05-07T01:57:00.000000Z"
            },
            {
                "id": 1989,
                "drug_id": 425,
                "brand_id": 1933,
                "created_at": "2020-05-07T01:58:15.000000Z",
                "updated_at": "2020-05-07T01:58:15.000000Z"
            },
            {
                "id": 1990,
                "drug_id": 425,
                "brand_id": 1934,
                "created_at": "2020-05-07T01:58:18.000000Z",
                "updated_at": "2020-05-07T01:58:18.000000Z"
            },
            {
                "id": 1991,
                "drug_id": 425,
                "brand_id": 1935,
                "created_at": "2020-05-07T01:58:20.000000Z",
                "updated_at": "2020-05-07T01:58:20.000000Z"
            },
            {
                "id": 1992,
                "drug_id": 426,
                "brand_id": 1936,
                "created_at": "2020-05-07T01:59:11.000000Z",
                "updated_at": "2020-05-07T01:59:11.000000Z"
            },
            {
                "id": 1993,
                "drug_id": 426,
                "brand_id": 1937,
                "created_at": "2020-05-07T01:59:13.000000Z",
                "updated_at": "2020-05-07T01:59:13.000000Z"
            },
            {
                "id": 1994,
                "drug_id": 426,
                "brand_id": 1938,
                "created_at": "2020-05-07T01:59:16.000000Z",
                "updated_at": "2020-05-07T01:59:16.000000Z"
            },
            {
                "id": 1995,
                "drug_id": 427,
                "brand_id": 1939,
                "created_at": "2020-05-07T02:00:28.000000Z",
                "updated_at": "2020-05-07T02:00:28.000000Z"
            },
            {
                "id": 1996,
                "drug_id": 427,
                "brand_id": 1939,
                "created_at": "2020-05-07T02:00:28.000000Z",
                "updated_at": "2020-05-07T02:00:28.000000Z"
            },
            {
                "id": 1997,
                "drug_id": 427,
                "brand_id": 1940,
                "created_at": "2020-05-07T02:00:32.000000Z",
                "updated_at": "2020-05-07T02:00:32.000000Z"
            },
            {
                "id": 1998,
                "drug_id": 427,
                "brand_id": 1941,
                "created_at": "2020-05-07T02:00:34.000000Z",
                "updated_at": "2020-05-07T02:00:34.000000Z"
            },
            {
                "id": 1999,
                "drug_id": 427,
                "brand_id": 1942,
                "created_at": "2020-05-07T02:00:37.000000Z",
                "updated_at": "2020-05-07T02:00:37.000000Z"
            },
            {
                "id": 2000,
                "drug_id": 428,
                "brand_id": 1943,
                "created_at": "2020-05-07T02:01:33.000000Z",
                "updated_at": "2020-05-07T02:01:33.000000Z"
            },
            {
                "id": 2001,
                "drug_id": 428,
                "brand_id": 1944,
                "created_at": "2020-05-07T02:01:35.000000Z",
                "updated_at": "2020-05-07T02:01:35.000000Z"
            },
            {
                "id": 2002,
                "drug_id": 429,
                "brand_id": 1945,
                "created_at": "2020-05-07T02:02:29.000000Z",
                "updated_at": "2020-05-07T02:02:29.000000Z"
            },
            {
                "id": 2003,
                "drug_id": 429,
                "brand_id": 1946,
                "created_at": "2020-05-07T02:02:31.000000Z",
                "updated_at": "2020-05-07T02:02:31.000000Z"
            },
            {
                "id": 2004,
                "drug_id": 430,
                "brand_id": 1947,
                "created_at": "2020-05-07T02:03:05.000000Z",
                "updated_at": "2020-05-07T02:03:05.000000Z"
            },
            {
                "id": 2005,
                "drug_id": 431,
                "brand_id": 1948,
                "created_at": "2020-05-07T02:04:46.000000Z",
                "updated_at": "2020-05-07T02:04:46.000000Z"
            },
            {
                "id": 2006,
                "drug_id": 431,
                "brand_id": 1949,
                "created_at": "2020-05-07T02:04:48.000000Z",
                "updated_at": "2020-05-07T02:04:48.000000Z"
            },
            {
                "id": 2007,
                "drug_id": 432,
                "brand_id": 1950,
                "created_at": "2020-05-07T02:04:57.000000Z",
                "updated_at": "2020-05-07T02:04:57.000000Z"
            },
            {
                "id": 2008,
                "drug_id": 432,
                "brand_id": 1951,
                "created_at": "2020-05-07T02:04:59.000000Z",
                "updated_at": "2020-05-07T02:04:59.000000Z"
            },
            {
                "id": 2009,
                "drug_id": 432,
                "brand_id": 1952,
                "created_at": "2020-05-07T02:05:02.000000Z",
                "updated_at": "2020-05-07T02:05:02.000000Z"
            },
            {
                "id": 2010,
                "drug_id": 432,
                "brand_id": 1953,
                "created_at": "2020-05-07T02:05:04.000000Z",
                "updated_at": "2020-05-07T02:05:04.000000Z"
            },
            {
                "id": 2011,
                "drug_id": 433,
                "brand_id": 1954,
                "created_at": "2020-05-07T02:06:11.000000Z",
                "updated_at": "2020-05-07T02:06:11.000000Z"
            },
            {
                "id": 2012,
                "drug_id": 433,
                "brand_id": 1955,
                "created_at": "2020-05-07T02:06:13.000000Z",
                "updated_at": "2020-05-07T02:06:13.000000Z"
            },
            {
                "id": 2013,
                "drug_id": 433,
                "brand_id": 1956,
                "created_at": "2020-05-07T02:06:16.000000Z",
                "updated_at": "2020-05-07T02:06:16.000000Z"
            },
            {
                "id": 2014,
                "drug_id": 433,
                "brand_id": 1957,
                "created_at": "2020-05-07T02:06:18.000000Z",
                "updated_at": "2020-05-07T02:06:18.000000Z"
            },
            {
                "id": 2015,
                "drug_id": 433,
                "brand_id": 1958,
                "created_at": "2020-05-07T02:06:20.000000Z",
                "updated_at": "2020-05-07T02:06:20.000000Z"
            },
            {
                "id": 2016,
                "drug_id": 434,
                "brand_id": 1959,
                "created_at": "2020-05-07T02:07:01.000000Z",
                "updated_at": "2020-05-07T02:07:01.000000Z"
            },
            {
                "id": 2017,
                "drug_id": 435,
                "brand_id": 1960,
                "created_at": "2020-05-07T02:07:54.000000Z",
                "updated_at": "2020-05-07T02:07:54.000000Z"
            },
            {
                "id": 2018,
                "drug_id": 436,
                "brand_id": 1961,
                "created_at": "2020-05-07T02:09:05.000000Z",
                "updated_at": "2020-05-07T02:09:05.000000Z"
            },
            {
                "id": 2019,
                "drug_id": 436,
                "brand_id": 1962,
                "created_at": "2020-05-07T02:09:07.000000Z",
                "updated_at": "2020-05-07T02:09:07.000000Z"
            },
            {
                "id": 2020,
                "drug_id": 436,
                "brand_id": 1963,
                "created_at": "2020-05-07T02:09:09.000000Z",
                "updated_at": "2020-05-07T02:09:09.000000Z"
            },
            {
                "id": 2021,
                "drug_id": 437,
                "brand_id": 1964,
                "created_at": "2020-05-07T02:09:51.000000Z",
                "updated_at": "2020-05-07T02:09:51.000000Z"
            },
            {
                "id": 2022,
                "drug_id": 437,
                "brand_id": 1965,
                "created_at": "2020-05-07T02:09:53.000000Z",
                "updated_at": "2020-05-07T02:09:53.000000Z"
            },
            {
                "id": 2023,
                "drug_id": 437,
                "brand_id": 1966,
                "created_at": "2020-05-07T02:09:55.000000Z",
                "updated_at": "2020-05-07T02:09:55.000000Z"
            },
            {
                "id": 2024,
                "drug_id": 438,
                "brand_id": 1967,
                "created_at": "2020-05-07T02:10:52.000000Z",
                "updated_at": "2020-05-07T02:10:52.000000Z"
            },
            {
                "id": 2025,
                "drug_id": 438,
                "brand_id": 1968,
                "created_at": "2020-05-07T02:10:55.000000Z",
                "updated_at": "2020-05-07T02:10:55.000000Z"
            },
            {
                "id": 2026,
                "drug_id": 439,
                "brand_id": 1969,
                "created_at": "2020-05-07T02:13:40.000000Z",
                "updated_at": "2020-05-07T02:13:40.000000Z"
            },
            {
                "id": 2027,
                "drug_id": 439,
                "brand_id": 1970,
                "created_at": "2020-05-07T02:13:42.000000Z",
                "updated_at": "2020-05-07T02:13:42.000000Z"
            },
            {
                "id": 2028,
                "drug_id": 439,
                "brand_id": 1971,
                "created_at": "2020-05-07T02:13:44.000000Z",
                "updated_at": "2020-05-07T02:13:44.000000Z"
            },
            {
                "id": 2029,
                "drug_id": 439,
                "brand_id": 1972,
                "created_at": "2020-05-07T02:13:46.000000Z",
                "updated_at": "2020-05-07T02:13:46.000000Z"
            },
            {
                "id": 2030,
                "drug_id": 439,
                "brand_id": 1973,
                "created_at": "2020-05-07T02:13:49.000000Z",
                "updated_at": "2020-05-07T02:13:49.000000Z"
            },
            {
                "id": 2031,
                "drug_id": 439,
                "brand_id": 1974,
                "created_at": "2020-05-07T02:13:51.000000Z",
                "updated_at": "2020-05-07T02:13:51.000000Z"
            },
            {
                "id": 2032,
                "drug_id": 439,
                "brand_id": 1975,
                "created_at": "2020-05-07T02:13:53.000000Z",
                "updated_at": "2020-05-07T02:13:53.000000Z"
            },
            {
                "id": 2033,
                "drug_id": 439,
                "brand_id": 1976,
                "created_at": "2020-05-07T02:13:56.000000Z",
                "updated_at": "2020-05-07T02:13:56.000000Z"
            },
            {
                "id": 2034,
                "drug_id": 439,
                "brand_id": 1977,
                "created_at": "2020-05-07T02:13:58.000000Z",
                "updated_at": "2020-05-07T02:13:58.000000Z"
            },
            {
                "id": 2035,
                "drug_id": 439,
                "brand_id": 1978,
                "created_at": "2020-05-07T02:14:01.000000Z",
                "updated_at": "2020-05-07T02:14:01.000000Z"
            },
            {
                "id": 2036,
                "drug_id": 439,
                "brand_id": 1979,
                "created_at": "2020-05-07T02:14:03.000000Z",
                "updated_at": "2020-05-07T02:14:03.000000Z"
            },
            {
                "id": 2037,
                "drug_id": 439,
                "brand_id": 1980,
                "created_at": "2020-05-07T02:14:06.000000Z",
                "updated_at": "2020-05-07T02:14:06.000000Z"
            },
            {
                "id": 2038,
                "drug_id": 439,
                "brand_id": 1981,
                "created_at": "2020-05-07T02:14:08.000000Z",
                "updated_at": "2020-05-07T02:14:08.000000Z"
            },
            {
                "id": 2039,
                "drug_id": 439,
                "brand_id": 1982,
                "created_at": "2020-05-07T02:14:11.000000Z",
                "updated_at": "2020-05-07T02:14:11.000000Z"
            },
            {
                "id": 2040,
                "drug_id": 439,
                "brand_id": 1983,
                "created_at": "2020-05-07T02:14:13.000000Z",
                "updated_at": "2020-05-07T02:14:13.000000Z"
            },
            {
                "id": 2041,
                "drug_id": 439,
                "brand_id": 1984,
                "created_at": "2020-05-07T02:14:15.000000Z",
                "updated_at": "2020-05-07T02:14:15.000000Z"
            },
            {
                "id": 2042,
                "drug_id": 439,
                "brand_id": 1985,
                "created_at": "2020-05-07T02:14:18.000000Z",
                "updated_at": "2020-05-07T02:14:18.000000Z"
            },
            {
                "id": 2043,
                "drug_id": 439,
                "brand_id": 1986,
                "created_at": "2020-05-07T02:14:20.000000Z",
                "updated_at": "2020-05-07T02:14:20.000000Z"
            },
            {
                "id": 2044,
                "drug_id": 440,
                "brand_id": 1987,
                "created_at": "2020-05-07T02:15:02.000000Z",
                "updated_at": "2020-05-07T02:15:02.000000Z"
            },
            {
                "id": 2045,
                "drug_id": 440,
                "brand_id": 1988,
                "created_at": "2020-05-07T02:15:04.000000Z",
                "updated_at": "2020-05-07T02:15:04.000000Z"
            },
            {
                "id": 2046,
                "drug_id": 440,
                "brand_id": 1989,
                "created_at": "2020-05-07T02:15:06.000000Z",
                "updated_at": "2020-05-07T02:15:06.000000Z"
            },
            {
                "id": 2047,
                "drug_id": 441,
                "brand_id": 1990,
                "created_at": "2020-05-07T02:16:22.000000Z",
                "updated_at": "2020-05-07T02:16:22.000000Z"
            },
            {
                "id": 2048,
                "drug_id": 442,
                "brand_id": 1991,
                "created_at": "2020-05-07T02:18:07.000000Z",
                "updated_at": "2020-05-07T02:18:07.000000Z"
            },
            {
                "id": 2049,
                "drug_id": 442,
                "brand_id": 1992,
                "created_at": "2020-05-07T02:18:10.000000Z",
                "updated_at": "2020-05-07T02:18:10.000000Z"
            },
            {
                "id": 2050,
                "drug_id": 443,
                "brand_id": 1993,
                "created_at": "2020-05-07T02:19:20.000000Z",
                "updated_at": "2020-05-07T02:19:20.000000Z"
            },
            {
                "id": 2051,
                "drug_id": 443,
                "brand_id": 1994,
                "created_at": "2020-05-07T02:19:23.000000Z",
                "updated_at": "2020-05-07T02:19:23.000000Z"
            },
            {
                "id": 2052,
                "drug_id": 443,
                "brand_id": 1995,
                "created_at": "2020-05-07T02:19:25.000000Z",
                "updated_at": "2020-05-07T02:19:25.000000Z"
            },
            {
                "id": 2053,
                "drug_id": 443,
                "brand_id": 1996,
                "created_at": "2020-05-07T02:19:28.000000Z",
                "updated_at": "2020-05-07T02:19:28.000000Z"
            },
            {
                "id": 2054,
                "drug_id": 444,
                "brand_id": 1997,
                "created_at": "2020-05-07T02:21:14.000000Z",
                "updated_at": "2020-05-07T02:21:14.000000Z"
            },
            {
                "id": 2055,
                "drug_id": 444,
                "brand_id": 1998,
                "created_at": "2020-05-07T02:21:16.000000Z",
                "updated_at": "2020-05-07T02:21:16.000000Z"
            },
            {
                "id": 2056,
                "drug_id": 444,
                "brand_id": 1999,
                "created_at": "2020-05-07T02:21:18.000000Z",
                "updated_at": "2020-05-07T02:21:18.000000Z"
            },
            {
                "id": 2057,
                "drug_id": 444,
                "brand_id": 2000,
                "created_at": "2020-05-07T02:21:21.000000Z",
                "updated_at": "2020-05-07T02:21:21.000000Z"
            },
            {
                "id": 2058,
                "drug_id": 444,
                "brand_id": 2001,
                "created_at": "2020-05-07T02:21:23.000000Z",
                "updated_at": "2020-05-07T02:21:23.000000Z"
            },
            {
                "id": 2059,
                "drug_id": 444,
                "brand_id": 2002,
                "created_at": "2020-05-07T02:21:26.000000Z",
                "updated_at": "2020-05-07T02:21:26.000000Z"
            },
            {
                "id": 2060,
                "drug_id": 445,
                "brand_id": 2003,
                "created_at": "2020-05-07T02:21:44.000000Z",
                "updated_at": "2020-05-07T02:21:44.000000Z"
            },
            {
                "id": 2061,
                "drug_id": 446,
                "brand_id": 2004,
                "created_at": "2020-05-07T02:22:45.000000Z",
                "updated_at": "2020-05-07T02:22:45.000000Z"
            },
            {
                "id": 2062,
                "drug_id": 446,
                "brand_id": 2005,
                "created_at": "2020-05-07T02:22:47.000000Z",
                "updated_at": "2020-05-07T02:22:47.000000Z"
            },
            {
                "id": 2063,
                "drug_id": 447,
                "brand_id": 2006,
                "created_at": "2020-05-07T02:23:42.000000Z",
                "updated_at": "2020-05-07T02:23:42.000000Z"
            },
            {
                "id": 2064,
                "drug_id": 447,
                "brand_id": 2007,
                "created_at": "2020-05-07T02:23:44.000000Z",
                "updated_at": "2020-05-07T02:23:44.000000Z"
            },
            {
                "id": 2065,
                "drug_id": 447,
                "brand_id": 2008,
                "created_at": "2020-05-07T02:23:47.000000Z",
                "updated_at": "2020-05-07T02:23:47.000000Z"
            },
            {
                "id": 2066,
                "drug_id": 448,
                "brand_id": 2009,
                "created_at": "2020-05-07T02:25:18.000000Z",
                "updated_at": "2020-05-07T02:25:18.000000Z"
            },
            {
                "id": 2067,
                "drug_id": 448,
                "brand_id": 2010,
                "created_at": "2020-05-07T02:25:20.000000Z",
                "updated_at": "2020-05-07T02:25:20.000000Z"
            },
            {
                "id": 2068,
                "drug_id": 448,
                "brand_id": 2011,
                "created_at": "2020-05-07T02:25:23.000000Z",
                "updated_at": "2020-05-07T02:25:23.000000Z"
            },
            {
                "id": 2069,
                "drug_id": 448,
                "brand_id": 2012,
                "created_at": "2020-05-07T02:25:25.000000Z",
                "updated_at": "2020-05-07T02:25:25.000000Z"
            },
            {
                "id": 2070,
                "drug_id": 448,
                "brand_id": 2013,
                "created_at": "2020-05-07T02:25:27.000000Z",
                "updated_at": "2020-05-07T02:25:27.000000Z"
            },
            {
                "id": 2071,
                "drug_id": 448,
                "brand_id": 2014,
                "created_at": "2020-05-07T02:25:29.000000Z",
                "updated_at": "2020-05-07T02:25:29.000000Z"
            },
            {
                "id": 2072,
                "drug_id": 448,
                "brand_id": 2015,
                "created_at": "2020-05-07T02:25:32.000000Z",
                "updated_at": "2020-05-07T02:25:32.000000Z"
            },
            {
                "id": 2073,
                "drug_id": 448,
                "brand_id": 2016,
                "created_at": "2020-05-07T02:25:34.000000Z",
                "updated_at": "2020-05-07T02:25:34.000000Z"
            },
            {
                "id": 2074,
                "drug_id": 448,
                "brand_id": 2017,
                "created_at": "2020-05-07T02:25:36.000000Z",
                "updated_at": "2020-05-07T02:25:36.000000Z"
            },
            {
                "id": 2075,
                "drug_id": 448,
                "brand_id": 2018,
                "created_at": "2020-05-07T02:25:38.000000Z",
                "updated_at": "2020-05-07T02:25:38.000000Z"
            },
            {
                "id": 2076,
                "drug_id": 448,
                "brand_id": 2019,
                "created_at": "2020-05-07T02:25:41.000000Z",
                "updated_at": "2020-05-07T02:25:41.000000Z"
            },
            {
                "id": 2077,
                "drug_id": 448,
                "brand_id": 2020,
                "created_at": "2020-05-07T02:25:43.000000Z",
                "updated_at": "2020-05-07T02:25:43.000000Z"
            },
            {
                "id": 2078,
                "drug_id": 449,
                "brand_id": 2021,
                "created_at": "2020-05-07T02:26:53.000000Z",
                "updated_at": "2020-05-07T02:26:53.000000Z"
            },
            {
                "id": 2079,
                "drug_id": 449,
                "brand_id": 2022,
                "created_at": "2020-05-07T02:26:56.000000Z",
                "updated_at": "2020-05-07T02:26:56.000000Z"
            },
            {
                "id": 2080,
                "drug_id": 450,
                "brand_id": 2023,
                "created_at": "2020-05-07T02:28:58.000000Z",
                "updated_at": "2020-05-07T02:28:58.000000Z"
            },
            {
                "id": 2081,
                "drug_id": 450,
                "brand_id": 2024,
                "created_at": "2020-05-07T02:29:01.000000Z",
                "updated_at": "2020-05-07T02:29:01.000000Z"
            },
            {
                "id": 2082,
                "drug_id": 451,
                "brand_id": 2025,
                "created_at": "2020-05-07T02:30:38.000000Z",
                "updated_at": "2020-05-07T02:30:38.000000Z"
            },
            {
                "id": 2083,
                "drug_id": 452,
                "brand_id": 2026,
                "created_at": "2020-05-07T02:32:05.000000Z",
                "updated_at": "2020-05-07T02:32:05.000000Z"
            },
            {
                "id": 2084,
                "drug_id": 452,
                "brand_id": 2027,
                "created_at": "2020-05-07T02:32:08.000000Z",
                "updated_at": "2020-05-07T02:32:08.000000Z"
            },
            {
                "id": 2085,
                "drug_id": 452,
                "brand_id": 2028,
                "created_at": "2020-05-07T02:32:10.000000Z",
                "updated_at": "2020-05-07T02:32:10.000000Z"
            },
            {
                "id": 2086,
                "drug_id": 452,
                "brand_id": 2029,
                "created_at": "2020-05-07T02:32:12.000000Z",
                "updated_at": "2020-05-07T02:32:12.000000Z"
            },
            {
                "id": 2087,
                "drug_id": 453,
                "brand_id": 2030,
                "created_at": "2020-05-07T02:32:58.000000Z",
                "updated_at": "2020-05-07T02:32:58.000000Z"
            },
            {
                "id": 2088,
                "drug_id": 454,
                "brand_id": 2031,
                "created_at": "2020-05-07T02:33:48.000000Z",
                "updated_at": "2020-05-07T02:33:48.000000Z"
            },
            {
                "id": 2089,
                "drug_id": 454,
                "brand_id": 2032,
                "created_at": "2020-05-07T02:33:50.000000Z",
                "updated_at": "2020-05-07T02:33:50.000000Z"
            },
            {
                "id": 2090,
                "drug_id": 454,
                "brand_id": 2033,
                "created_at": "2020-05-07T02:33:53.000000Z",
                "updated_at": "2020-05-07T02:33:53.000000Z"
            },
            {
                "id": 2091,
                "drug_id": 455,
                "brand_id": 2034,
                "created_at": "2020-05-07T02:35:35.000000Z",
                "updated_at": "2020-05-07T02:35:35.000000Z"
            },
            {
                "id": 2092,
                "drug_id": 455,
                "brand_id": 2035,
                "created_at": "2020-05-07T02:35:38.000000Z",
                "updated_at": "2020-05-07T02:35:38.000000Z"
            },
            {
                "id": 2093,
                "drug_id": 455,
                "brand_id": 2036,
                "created_at": "2020-05-07T02:35:40.000000Z",
                "updated_at": "2020-05-07T02:35:40.000000Z"
            },
            {
                "id": 2094,
                "drug_id": 455,
                "brand_id": 2037,
                "created_at": "2020-05-07T02:35:42.000000Z",
                "updated_at": "2020-05-07T02:35:42.000000Z"
            },
            {
                "id": 2095,
                "drug_id": 455,
                "brand_id": 2038,
                "created_at": "2020-05-07T02:35:44.000000Z",
                "updated_at": "2020-05-07T02:35:44.000000Z"
            },
            {
                "id": 2096,
                "drug_id": 455,
                "brand_id": 2039,
                "created_at": "2020-05-07T02:35:47.000000Z",
                "updated_at": "2020-05-07T02:35:47.000000Z"
            },
            {
                "id": 2097,
                "drug_id": 455,
                "brand_id": 2040,
                "created_at": "2020-05-07T02:35:49.000000Z",
                "updated_at": "2020-05-07T02:35:49.000000Z"
            },
            {
                "id": 2098,
                "drug_id": 455,
                "brand_id": 2041,
                "created_at": "2020-05-07T02:35:51.000000Z",
                "updated_at": "2020-05-07T02:35:51.000000Z"
            },
            {
                "id": 2099,
                "drug_id": 455,
                "brand_id": 2042,
                "created_at": "2020-05-07T02:35:54.000000Z",
                "updated_at": "2020-05-07T02:35:54.000000Z"
            },
            {
                "id": 2100,
                "drug_id": 456,
                "brand_id": 2043,
                "created_at": "2020-05-07T02:36:43.000000Z",
                "updated_at": "2020-05-07T02:36:43.000000Z"
            },
            {
                "id": 2101,
                "drug_id": 456,
                "brand_id": 2044,
                "created_at": "2020-05-07T02:36:45.000000Z",
                "updated_at": "2020-05-07T02:36:45.000000Z"
            },
            {
                "id": 2102,
                "drug_id": 456,
                "brand_id": 2045,
                "created_at": "2020-05-07T02:36:48.000000Z",
                "updated_at": "2020-05-07T02:36:48.000000Z"
            },
            {
                "id": 2103,
                "drug_id": 456,
                "brand_id": 2046,
                "created_at": "2020-05-07T02:36:51.000000Z",
                "updated_at": "2020-05-07T02:36:51.000000Z"
            },
            {
                "id": 2104,
                "drug_id": 456,
                "brand_id": 2047,
                "created_at": "2020-05-07T02:36:53.000000Z",
                "updated_at": "2020-05-07T02:36:53.000000Z"
            },
            {
                "id": 2105,
                "drug_id": 457,
                "brand_id": 2048,
                "created_at": "2020-05-07T02:37:34.000000Z",
                "updated_at": "2020-05-07T02:37:34.000000Z"
            },
            {
                "id": 2106,
                "drug_id": 458,
                "brand_id": 2049,
                "created_at": "2020-05-07T02:38:25.000000Z",
                "updated_at": "2020-05-07T02:38:25.000000Z"
            },
            {
                "id": 2107,
                "drug_id": 459,
                "brand_id": 2050,
                "created_at": "2020-05-07T02:39:04.000000Z",
                "updated_at": "2020-05-07T02:39:04.000000Z"
            },
            {
                "id": 2108,
                "drug_id": 462,
                "brand_id": 2051,
                "created_at": "2020-05-07T02:40:57.000000Z",
                "updated_at": "2020-05-07T02:40:57.000000Z"
            },
            {
                "id": 2109,
                "drug_id": 463,
                "brand_id": 2052,
                "created_at": "2020-05-07T02:41:42.000000Z",
                "updated_at": "2020-05-07T02:41:42.000000Z"
            },
            {
                "id": 2110,
                "drug_id": 465,
                "brand_id": 2053,
                "created_at": "2020-05-07T02:43:45.000000Z",
                "updated_at": "2020-05-07T02:43:45.000000Z"
            },
            {
                "id": 2111,
                "drug_id": 466,
                "brand_id": 2054,
                "created_at": "2020-05-07T02:44:56.000000Z",
                "updated_at": "2020-05-07T02:44:56.000000Z"
            },
            {
                "id": 2112,
                "drug_id": 466,
                "brand_id": 2055,
                "created_at": "2020-05-07T02:44:58.000000Z",
                "updated_at": "2020-05-07T02:44:58.000000Z"
            },
            {
                "id": 2113,
                "drug_id": 467,
                "brand_id": 2056,
                "created_at": "2020-05-07T02:45:55.000000Z",
                "updated_at": "2020-05-07T02:45:55.000000Z"
            },
            {
                "id": 2114,
                "drug_id": 468,
                "brand_id": 2057,
                "created_at": "2020-05-07T02:46:35.000000Z",
                "updated_at": "2020-05-07T02:46:35.000000Z"
            },
            {
                "id": 2115,
                "drug_id": 468,
                "brand_id": 2058,
                "created_at": "2020-05-07T02:46:37.000000Z",
                "updated_at": "2020-05-07T02:46:37.000000Z"
            },
            {
                "id": 2116,
                "drug_id": 469,
                "brand_id": 2059,
                "created_at": "2020-05-07T02:47:15.000000Z",
                "updated_at": "2020-05-07T02:47:15.000000Z"
            },
            {
                "id": 2117,
                "drug_id": 469,
                "brand_id": 2060,
                "created_at": "2020-05-07T02:47:17.000000Z",
                "updated_at": "2020-05-07T02:47:17.000000Z"
            },
            {
                "id": 2118,
                "drug_id": 469,
                "brand_id": 2061,
                "created_at": "2020-05-07T02:47:19.000000Z",
                "updated_at": "2020-05-07T02:47:19.000000Z"
            },
            {
                "id": 2119,
                "drug_id": 469,
                "brand_id": 2062,
                "created_at": "2020-05-07T02:47:21.000000Z",
                "updated_at": "2020-05-07T02:47:21.000000Z"
            },
            {
                "id": 2120,
                "drug_id": 469,
                "brand_id": 2063,
                "created_at": "2020-05-07T02:47:24.000000Z",
                "updated_at": "2020-05-07T02:47:24.000000Z"
            },
            {
                "id": 2121,
                "drug_id": 469,
                "brand_id": 2064,
                "created_at": "2020-05-07T02:47:26.000000Z",
                "updated_at": "2020-05-07T02:47:26.000000Z"
            },
            {
                "id": 2122,
                "drug_id": 469,
                "brand_id": 2065,
                "created_at": "2020-05-07T02:47:28.000000Z",
                "updated_at": "2020-05-07T02:47:28.000000Z"
            },
            {
                "id": 2123,
                "drug_id": 469,
                "brand_id": 2066,
                "created_at": "2020-05-07T02:47:30.000000Z",
                "updated_at": "2020-05-07T02:47:30.000000Z"
            },
            {
                "id": 2124,
                "drug_id": 469,
                "brand_id": 2067,
                "created_at": "2020-05-07T02:47:33.000000Z",
                "updated_at": "2020-05-07T02:47:33.000000Z"
            },
            {
                "id": 2125,
                "drug_id": 469,
                "brand_id": 2068,
                "created_at": "2020-05-07T02:47:35.000000Z",
                "updated_at": "2020-05-07T02:47:35.000000Z"
            },
            {
                "id": 2126,
                "drug_id": 469,
                "brand_id": 2069,
                "created_at": "2020-05-07T02:47:37.000000Z",
                "updated_at": "2020-05-07T02:47:37.000000Z"
            },
            {
                "id": 2127,
                "drug_id": 469,
                "brand_id": 2070,
                "created_at": "2020-05-07T02:47:39.000000Z",
                "updated_at": "2020-05-07T02:47:39.000000Z"
            },
            {
                "id": 2128,
                "drug_id": 469,
                "brand_id": 2070,
                "created_at": "2020-05-07T02:47:39.000000Z",
                "updated_at": "2020-05-07T02:47:39.000000Z"
            },
            {
                "id": 2129,
                "drug_id": 469,
                "brand_id": 2071,
                "created_at": "2020-05-07T02:47:42.000000Z",
                "updated_at": "2020-05-07T02:47:42.000000Z"
            },
            {
                "id": 2130,
                "drug_id": 469,
                "brand_id": 2072,
                "created_at": "2020-05-07T02:47:44.000000Z",
                "updated_at": "2020-05-07T02:47:44.000000Z"
            },
            {
                "id": 2131,
                "drug_id": 470,
                "brand_id": 2073,
                "created_at": "2020-05-07T02:48:11.000000Z",
                "updated_at": "2020-05-07T02:48:11.000000Z"
            },
            {
                "id": 2132,
                "drug_id": 471,
                "brand_id": 2074,
                "created_at": "2020-05-07T02:49:06.000000Z",
                "updated_at": "2020-05-07T02:49:06.000000Z"
            },
            {
                "id": 2133,
                "drug_id": 471,
                "brand_id": 2075,
                "created_at": "2020-05-07T02:49:09.000000Z",
                "updated_at": "2020-05-07T02:49:09.000000Z"
            },
            {
                "id": 2134,
                "drug_id": 473,
                "brand_id": 2076,
                "created_at": "2020-05-07T02:50:30.000000Z",
                "updated_at": "2020-05-07T02:50:30.000000Z"
            },
            {
                "id": 2135,
                "drug_id": 473,
                "brand_id": 2076,
                "created_at": "2020-05-07T02:50:30.000000Z",
                "updated_at": "2020-05-07T02:50:30.000000Z"
            },
            {
                "id": 2136,
                "drug_id": 473,
                "brand_id": 2076,
                "created_at": "2020-05-07T02:50:30.000000Z",
                "updated_at": "2020-05-07T02:50:30.000000Z"
            },
            {
                "id": 2137,
                "drug_id": 473,
                "brand_id": 2077,
                "created_at": "2020-05-07T02:50:32.000000Z",
                "updated_at": "2020-05-07T02:50:32.000000Z"
            },
            {
                "id": 2138,
                "drug_id": 473,
                "brand_id": 2078,
                "created_at": "2020-05-07T02:50:35.000000Z",
                "updated_at": "2020-05-07T02:50:35.000000Z"
            },
            {
                "id": 2139,
                "drug_id": 474,
                "brand_id": 2079,
                "created_at": "2020-05-07T02:52:05.000000Z",
                "updated_at": "2020-05-07T02:52:05.000000Z"
            },
            {
                "id": 2140,
                "drug_id": 474,
                "brand_id": 2079,
                "created_at": "2020-05-07T02:52:05.000000Z",
                "updated_at": "2020-05-07T02:52:05.000000Z"
            },
            {
                "id": 2141,
                "drug_id": 474,
                "brand_id": 2080,
                "created_at": "2020-05-07T02:52:07.000000Z",
                "updated_at": "2020-05-07T02:52:07.000000Z"
            },
            {
                "id": 2142,
                "drug_id": 475,
                "brand_id": 2081,
                "created_at": "2020-05-07T02:55:01.000000Z",
                "updated_at": "2020-05-07T02:55:01.000000Z"
            },
            {
                "id": 2143,
                "drug_id": 475,
                "brand_id": 2082,
                "created_at": "2020-05-07T02:55:04.000000Z",
                "updated_at": "2020-05-07T02:55:04.000000Z"
            },
            {
                "id": 2144,
                "drug_id": 476,
                "brand_id": 2083,
                "created_at": "2020-05-07T02:55:51.000000Z",
                "updated_at": "2020-05-07T02:55:51.000000Z"
            },
            {
                "id": 2145,
                "drug_id": 476,
                "brand_id": 2084,
                "created_at": "2020-05-07T02:55:53.000000Z",
                "updated_at": "2020-05-07T02:55:53.000000Z"
            },
            {
                "id": 2146,
                "drug_id": 476,
                "brand_id": 2085,
                "created_at": "2020-05-07T02:55:56.000000Z",
                "updated_at": "2020-05-07T02:55:56.000000Z"
            },
            {
                "id": 2147,
                "drug_id": 476,
                "brand_id": 2086,
                "created_at": "2020-05-07T02:55:58.000000Z",
                "updated_at": "2020-05-07T02:55:58.000000Z"
            },
            {
                "id": 2148,
                "drug_id": 476,
                "brand_id": 2087,
                "created_at": "2020-05-07T02:56:00.000000Z",
                "updated_at": "2020-05-07T02:56:00.000000Z"
            },
            {
                "id": 2149,
                "drug_id": 476,
                "brand_id": 2088,
                "created_at": "2020-05-07T02:56:03.000000Z",
                "updated_at": "2020-05-07T02:56:03.000000Z"
            },
            {
                "id": 2150,
                "drug_id": 476,
                "brand_id": 2089,
                "created_at": "2020-05-07T02:56:06.000000Z",
                "updated_at": "2020-05-07T02:56:06.000000Z"
            },
            {
                "id": 2151,
                "drug_id": 476,
                "brand_id": 2090,
                "created_at": "2020-05-07T02:56:09.000000Z",
                "updated_at": "2020-05-07T02:56:09.000000Z"
            },
            {
                "id": 2152,
                "drug_id": 477,
                "brand_id": 2091,
                "created_at": "2020-05-07T02:56:53.000000Z",
                "updated_at": "2020-05-07T02:56:53.000000Z"
            },
            {
                "id": 2153,
                "drug_id": 477,
                "brand_id": 2092,
                "created_at": "2020-05-07T02:56:56.000000Z",
                "updated_at": "2020-05-07T02:56:56.000000Z"
            },
            {
                "id": 2154,
                "drug_id": 478,
                "brand_id": 2093,
                "created_at": "2020-05-07T02:57:41.000000Z",
                "updated_at": "2020-05-07T02:57:41.000000Z"
            },
            {
                "id": 2155,
                "drug_id": 479,
                "brand_id": 2094,
                "created_at": "2020-05-07T02:58:24.000000Z",
                "updated_at": "2020-05-07T02:58:24.000000Z"
            },
            {
                "id": 2156,
                "drug_id": 481,
                "brand_id": 2095,
                "created_at": "2020-05-07T03:00:10.000000Z",
                "updated_at": "2020-05-07T03:00:10.000000Z"
            },
            {
                "id": 2157,
                "drug_id": 481,
                "brand_id": 2096,
                "created_at": "2020-05-07T03:00:12.000000Z",
                "updated_at": "2020-05-07T03:00:12.000000Z"
            },
            {
                "id": 2158,
                "drug_id": 481,
                "brand_id": 2097,
                "created_at": "2020-05-07T03:00:14.000000Z",
                "updated_at": "2020-05-07T03:00:14.000000Z"
            },
            {
                "id": 2159,
                "drug_id": 481,
                "brand_id": 2098,
                "created_at": "2020-05-07T03:00:16.000000Z",
                "updated_at": "2020-05-07T03:00:16.000000Z"
            },
            {
                "id": 2160,
                "drug_id": 481,
                "brand_id": 2099,
                "created_at": "2020-05-07T03:00:19.000000Z",
                "updated_at": "2020-05-07T03:00:19.000000Z"
            },
            {
                "id": 2161,
                "drug_id": 481,
                "brand_id": 2100,
                "created_at": "2020-05-07T03:00:21.000000Z",
                "updated_at": "2020-05-07T03:00:21.000000Z"
            },
            {
                "id": 2162,
                "drug_id": 482,
                "brand_id": 2101,
                "created_at": "2020-05-07T03:00:56.000000Z",
                "updated_at": "2020-05-07T03:00:56.000000Z"
            },
            {
                "id": 2163,
                "drug_id": 483,
                "brand_id": 2102,
                "created_at": "2020-05-07T03:01:57.000000Z",
                "updated_at": "2020-05-07T03:01:57.000000Z"
            },
            {
                "id": 2164,
                "drug_id": 483,
                "brand_id": 2103,
                "created_at": "2020-05-07T03:02:00.000000Z",
                "updated_at": "2020-05-07T03:02:00.000000Z"
            },
            {
                "id": 2165,
                "drug_id": 483,
                "brand_id": 2104,
                "created_at": "2020-05-07T03:02:02.000000Z",
                "updated_at": "2020-05-07T03:02:02.000000Z"
            },
            {
                "id": 2166,
                "drug_id": 483,
                "brand_id": 2105,
                "created_at": "2020-05-07T03:02:05.000000Z",
                "updated_at": "2020-05-07T03:02:05.000000Z"
            },
            {
                "id": 2167,
                "drug_id": 483,
                "brand_id": 2106,
                "created_at": "2020-05-07T03:02:07.000000Z",
                "updated_at": "2020-05-07T03:02:07.000000Z"
            },
            {
                "id": 2168,
                "drug_id": 483,
                "brand_id": 2107,
                "created_at": "2020-05-07T03:02:10.000000Z",
                "updated_at": "2020-05-07T03:02:10.000000Z"
            },
            {
                "id": 2169,
                "drug_id": 483,
                "brand_id": 2108,
                "created_at": "2020-05-07T03:02:12.000000Z",
                "updated_at": "2020-05-07T03:02:12.000000Z"
            },
            {
                "id": 2170,
                "drug_id": 485,
                "brand_id": 2109,
                "created_at": "2020-05-07T03:03:47.000000Z",
                "updated_at": "2020-05-07T03:03:47.000000Z"
            },
            {
                "id": 2171,
                "drug_id": 485,
                "brand_id": 2110,
                "created_at": "2020-05-07T03:03:50.000000Z",
                "updated_at": "2020-05-07T03:03:50.000000Z"
            },
            {
                "id": 2172,
                "drug_id": 488,
                "brand_id": 2111,
                "created_at": "2020-05-07T03:05:29.000000Z",
                "updated_at": "2020-05-07T03:05:29.000000Z"
            },
            {
                "id": 2173,
                "drug_id": 489,
                "brand_id": 2112,
                "created_at": "2020-05-07T03:06:04.000000Z",
                "updated_at": "2020-05-07T03:06:04.000000Z"
            },
            {
                "id": 2174,
                "drug_id": 489,
                "brand_id": 2113,
                "created_at": "2020-05-07T03:06:06.000000Z",
                "updated_at": "2020-05-07T03:06:06.000000Z"
            },
            {
                "id": 2175,
                "drug_id": 490,
                "brand_id": 2114,
                "created_at": "2020-05-07T03:07:24.000000Z",
                "updated_at": "2020-05-07T03:07:24.000000Z"
            },
            {
                "id": 2176,
                "drug_id": 491,
                "brand_id": 2115,
                "created_at": "2020-05-07T03:09:05.000000Z",
                "updated_at": "2020-05-07T03:09:05.000000Z"
            },
            {
                "id": 2177,
                "drug_id": 492,
                "brand_id": 2116,
                "created_at": "2020-05-07T03:10:15.000000Z",
                "updated_at": "2020-05-07T03:10:15.000000Z"
            },
            {
                "id": 2178,
                "drug_id": 492,
                "brand_id": 2117,
                "created_at": "2020-05-07T03:10:18.000000Z",
                "updated_at": "2020-05-07T03:10:18.000000Z"
            },
            {
                "id": 2179,
                "drug_id": 492,
                "brand_id": 2118,
                "created_at": "2020-05-07T03:10:20.000000Z",
                "updated_at": "2020-05-07T03:10:20.000000Z"
            },
            {
                "id": 2185,
                "drug_id": 495,
                "brand_id": 2123,
                "created_at": "2020-05-07T03:14:30.000000Z",
                "updated_at": "2020-05-07T03:14:30.000000Z"
            },
            {
                "id": 2186,
                "drug_id": 495,
                "brand_id": 2124,
                "created_at": "2020-05-07T03:14:32.000000Z",
                "updated_at": "2020-05-07T03:14:32.000000Z"
            },
            {
                "id": 2187,
                "drug_id": 496,
                "brand_id": 2125,
                "created_at": "2020-05-07T03:15:12.000000Z",
                "updated_at": "2020-05-07T03:15:12.000000Z"
            },
            {
                "id": 2188,
                "drug_id": 496,
                "brand_id": 2126,
                "created_at": "2020-05-07T03:15:14.000000Z",
                "updated_at": "2020-05-07T03:15:14.000000Z"
            },
            {
                "id": 2189,
                "drug_id": 497,
                "brand_id": 2127,
                "created_at": "2020-05-07T03:16:09.000000Z",
                "updated_at": "2020-05-07T03:16:09.000000Z"
            },
            {
                "id": 2190,
                "drug_id": 497,
                "brand_id": 2128,
                "created_at": "2020-05-07T03:16:11.000000Z",
                "updated_at": "2020-05-07T03:16:11.000000Z"
            },
            {
                "id": 2191,
                "drug_id": 497,
                "brand_id": 2129,
                "created_at": "2020-05-07T03:16:13.000000Z",
                "updated_at": "2020-05-07T03:16:13.000000Z"
            },
            {
                "id": 2192,
                "drug_id": 498,
                "brand_id": 2130,
                "created_at": "2020-05-07T03:19:36.000000Z",
                "updated_at": "2020-05-07T03:19:36.000000Z"
            },
            {
                "id": 2193,
                "drug_id": 498,
                "brand_id": 2131,
                "created_at": "2020-05-07T03:19:39.000000Z",
                "updated_at": "2020-05-07T03:19:39.000000Z"
            },
            {
                "id": 2194,
                "drug_id": 498,
                "brand_id": 2132,
                "created_at": "2020-05-07T03:19:42.000000Z",
                "updated_at": "2020-05-07T03:19:42.000000Z"
            },
            {
                "id": 2195,
                "drug_id": 498,
                "brand_id": 2133,
                "created_at": "2020-05-07T03:19:44.000000Z",
                "updated_at": "2020-05-07T03:19:44.000000Z"
            },
            {
                "id": 2196,
                "drug_id": 499,
                "brand_id": 2134,
                "created_at": "2020-05-07T03:20:42.000000Z",
                "updated_at": "2020-05-07T03:20:42.000000Z"
            },
            {
                "id": 2197,
                "drug_id": 499,
                "brand_id": 2135,
                "created_at": "2020-05-07T03:20:44.000000Z",
                "updated_at": "2020-05-07T03:20:44.000000Z"
            },
            {
                "id": 2198,
                "drug_id": 499,
                "brand_id": 2136,
                "created_at": "2020-05-07T03:20:46.000000Z",
                "updated_at": "2020-05-07T03:20:46.000000Z"
            },
            {
                "id": 2199,
                "drug_id": 499,
                "brand_id": 2137,
                "created_at": "2020-05-07T03:20:49.000000Z",
                "updated_at": "2020-05-07T03:20:49.000000Z"
            },
            {
                "id": 2200,
                "drug_id": 499,
                "brand_id": 2138,
                "created_at": "2020-05-07T03:20:51.000000Z",
                "updated_at": "2020-05-07T03:20:51.000000Z"
            },
            {
                "id": 2201,
                "drug_id": 499,
                "brand_id": 2139,
                "created_at": "2020-05-07T03:20:53.000000Z",
                "updated_at": "2020-05-07T03:20:53.000000Z"
            },
            {
                "id": 2202,
                "drug_id": 500,
                "brand_id": 2140,
                "created_at": "2020-05-07T03:22:36.000000Z",
                "updated_at": "2020-05-07T03:22:36.000000Z"
            },
            {
                "id": 2203,
                "drug_id": 500,
                "brand_id": 2140,
                "created_at": "2020-05-07T03:22:36.000000Z",
                "updated_at": "2020-05-07T03:22:36.000000Z"
            },
            {
                "id": 2204,
                "drug_id": 500,
                "brand_id": 2141,
                "created_at": "2020-05-07T03:22:38.000000Z",
                "updated_at": "2020-05-07T03:22:38.000000Z"
            },
            {
                "id": 2205,
                "drug_id": 500,
                "brand_id": 2141,
                "created_at": "2020-05-07T03:22:38.000000Z",
                "updated_at": "2020-05-07T03:22:38.000000Z"
            },
            {
                "id": 2206,
                "drug_id": 500,
                "brand_id": 2142,
                "created_at": "2020-05-07T03:22:41.000000Z",
                "updated_at": "2020-05-07T03:22:41.000000Z"
            },
            {
                "id": 2207,
                "drug_id": 500,
                "brand_id": 2143,
                "created_at": "2020-05-07T03:22:43.000000Z",
                "updated_at": "2020-05-07T03:22:43.000000Z"
            },
            {
                "id": 2208,
                "drug_id": 500,
                "brand_id": 2144,
                "created_at": "2020-05-07T03:22:46.000000Z",
                "updated_at": "2020-05-07T03:22:46.000000Z"
            },
            {
                "id": 2209,
                "drug_id": 500,
                "brand_id": 2145,
                "created_at": "2020-05-07T03:22:53.000000Z",
                "updated_at": "2020-05-07T03:22:53.000000Z"
            },
            {
                "id": 2210,
                "drug_id": 500,
                "brand_id": 2146,
                "created_at": "2020-05-07T03:22:55.000000Z",
                "updated_at": "2020-05-07T03:22:55.000000Z"
            },
            {
                "id": 2211,
                "drug_id": 501,
                "brand_id": 2147,
                "created_at": "2020-05-07T03:23:52.000000Z",
                "updated_at": "2020-05-07T03:23:52.000000Z"
            },
            {
                "id": 2212,
                "drug_id": 501,
                "brand_id": 2148,
                "created_at": "2020-05-07T03:23:54.000000Z",
                "updated_at": "2020-05-07T03:23:54.000000Z"
            },
            {
                "id": 2213,
                "drug_id": 502,
                "brand_id": 2149,
                "created_at": "2020-05-07T03:24:20.000000Z",
                "updated_at": "2020-05-07T03:24:20.000000Z"
            },
            {
                "id": 2214,
                "drug_id": 503,
                "brand_id": 2150,
                "created_at": "2020-10-30T19:33:08.000000Z",
                "updated_at": "2020-10-30T19:33:08.000000Z"
            },
            {
                "id": 2215,
                "drug_id": 503,
                "brand_id": 2151,
                "created_at": "2020-10-30T19:33:08.000000Z",
                "updated_at": "2020-10-30T19:33:08.000000Z"
            },
            {
                "id": 2216,
                "drug_id": 503,
                "brand_id": 2152,
                "created_at": "2020-10-30T19:33:08.000000Z",
                "updated_at": "2020-10-30T19:33:08.000000Z"
            },
            {
                "id": 2217,
                "drug_id": 504,
                "brand_id": 2153,
                "created_at": "2020-10-30T19:41:08.000000Z",
                "updated_at": "2020-10-30T19:41:08.000000Z"
            },
            {
                "id": 2245,
                "drug_id": 505,
                "brand_id": 2160,
                "created_at": "2020-10-30T20:27:23.000000Z",
                "updated_at": "2020-10-30T20:27:23.000000Z"
            },
            {
                "id": 2246,
                "drug_id": 505,
                "brand_id": 2161,
                "created_at": "2020-10-30T20:27:23.000000Z",
                "updated_at": "2020-10-30T20:27:23.000000Z"
            },
            {
                "id": 2247,
                "drug_id": 505,
                "brand_id": 2162,
                "created_at": "2020-10-30T20:27:23.000000Z",
                "updated_at": "2020-10-30T20:27:23.000000Z"
            },
            {
                "id": 2249,
                "drug_id": 507,
                "brand_id": 2164,
                "created_at": "2020-10-30T20:33:00.000000Z",
                "updated_at": "2020-10-30T20:33:00.000000Z"
            },
            {
                "id": 2250,
                "drug_id": 508,
                "brand_id": 2165,
                "created_at": "2020-10-31T18:18:17.000000Z",
                "updated_at": "2020-10-31T18:18:17.000000Z"
            },
            {
                "id": 2251,
                "drug_id": 509,
                "brand_id": 2166,
                "created_at": "2020-10-31T18:20:29.000000Z",
                "updated_at": "2020-10-31T18:20:29.000000Z"
            },
            {
                "id": 2252,
                "drug_id": 511,
                "brand_id": 2167,
                "created_at": "2020-10-31T18:24:08.000000Z",
                "updated_at": "2020-10-31T18:24:08.000000Z"
            },
            {
                "id": 2253,
                "drug_id": 511,
                "brand_id": 2168,
                "created_at": "2020-10-31T18:24:08.000000Z",
                "updated_at": "2020-10-31T18:24:08.000000Z"
            },
            {
                "id": 2254,
                "drug_id": 511,
                "brand_id": 2169,
                "created_at": "2020-10-31T18:24:08.000000Z",
                "updated_at": "2020-10-31T18:24:08.000000Z"
            },
            {
                "id": 2255,
                "drug_id": 511,
                "brand_id": 2170,
                "created_at": "2020-10-31T18:24:09.000000Z",
                "updated_at": "2020-10-31T18:24:09.000000Z"
            },
            {
                "id": 2256,
                "drug_id": 511,
                "brand_id": 2171,
                "created_at": "2020-10-31T18:24:09.000000Z",
                "updated_at": "2020-10-31T18:24:09.000000Z"
            },
            {
                "id": 2257,
                "drug_id": 512,
                "brand_id": 2172,
                "created_at": "2020-10-31T18:25:07.000000Z",
                "updated_at": "2020-10-31T18:25:07.000000Z"
            },
            {
                "id": 2266,
                "drug_id": 514,
                "brand_id": 2181,
                "created_at": "2020-10-31T18:39:35.000000Z",
                "updated_at": "2020-10-31T18:39:35.000000Z"
            },
            {
                "id": 2267,
                "drug_id": 514,
                "brand_id": 2182,
                "created_at": "2020-10-31T18:39:35.000000Z",
                "updated_at": "2020-10-31T18:39:35.000000Z"
            },
            {
                "id": 2268,
                "drug_id": 514,
                "brand_id": 2183,
                "created_at": "2020-10-31T18:39:35.000000Z",
                "updated_at": "2020-10-31T18:39:35.000000Z"
            },
            {
                "id": 2269,
                "drug_id": 514,
                "brand_id": 2184,
                "created_at": "2020-10-31T18:39:35.000000Z",
                "updated_at": "2020-10-31T18:39:35.000000Z"
            },
            {
                "id": 2270,
                "drug_id": 514,
                "brand_id": 2185,
                "created_at": "2020-10-31T18:39:35.000000Z",
                "updated_at": "2020-10-31T18:39:35.000000Z"
            },
            {
                "id": 2271,
                "drug_id": 514,
                "brand_id": 2186,
                "created_at": "2020-10-31T18:39:35.000000Z",
                "updated_at": "2020-10-31T18:39:35.000000Z"
            },
            {
                "id": 2272,
                "drug_id": 514,
                "brand_id": 2187,
                "created_at": "2020-10-31T18:39:35.000000Z",
                "updated_at": "2020-10-31T18:39:35.000000Z"
            },
            {
                "id": 2273,
                "drug_id": 514,
                "brand_id": 2188,
                "created_at": "2020-10-31T18:39:35.000000Z",
                "updated_at": "2020-10-31T18:39:35.000000Z"
            },
            {
                "id": 2274,
                "drug_id": 515,
                "brand_id": 2189,
                "created_at": "2020-10-31T19:12:34.000000Z",
                "updated_at": "2020-10-31T19:12:34.000000Z"
            },
            {
                "id": 2275,
                "drug_id": 515,
                "brand_id": 2190,
                "created_at": "2020-10-31T19:12:34.000000Z",
                "updated_at": "2020-10-31T19:12:34.000000Z"
            },
            {
                "id": 2276,
                "drug_id": 515,
                "brand_id": 2191,
                "created_at": "2020-10-31T19:12:34.000000Z",
                "updated_at": "2020-10-31T19:12:34.000000Z"
            },
            {
                "id": 2277,
                "drug_id": 516,
                "brand_id": 2192,
                "created_at": "2020-11-03T15:11:32.000000Z",
                "updated_at": "2020-11-03T15:11:32.000000Z"
            },
            {
                "id": 2278,
                "drug_id": 516,
                "brand_id": 2193,
                "created_at": "2020-11-03T15:11:32.000000Z",
                "updated_at": "2020-11-03T15:11:32.000000Z"
            },
            {
                "id": 2279,
                "drug_id": 516,
                "brand_id": 2194,
                "created_at": "2020-11-03T15:11:32.000000Z",
                "updated_at": "2020-11-03T15:11:32.000000Z"
            },
            {
                "id": 2280,
                "drug_id": 516,
                "brand_id": 2195,
                "created_at": "2020-11-03T15:11:32.000000Z",
                "updated_at": "2020-11-03T15:11:32.000000Z"
            },
            {
                "id": 2281,
                "drug_id": 516,
                "brand_id": 2196,
                "created_at": "2020-11-03T15:11:32.000000Z",
                "updated_at": "2020-11-03T15:11:32.000000Z"
            },
            {
                "id": 2282,
                "drug_id": 516,
                "brand_id": 2197,
                "created_at": "2020-11-03T15:11:32.000000Z",
                "updated_at": "2020-11-03T15:11:32.000000Z"
            },
            {
                "id": 2283,
                "drug_id": 516,
                "brand_id": 2198,
                "created_at": "2020-11-03T15:11:32.000000Z",
                "updated_at": "2020-11-03T15:11:32.000000Z"
            },
            {
                "id": 2284,
                "drug_id": 516,
                "brand_id": 2199,
                "created_at": "2020-11-03T15:11:33.000000Z",
                "updated_at": "2020-11-03T15:11:33.000000Z"
            },
            {
                "id": 2285,
                "drug_id": 516,
                "brand_id": 2200,
                "created_at": "2020-11-03T15:11:33.000000Z",
                "updated_at": "2020-11-03T15:11:33.000000Z"
            },
            {
                "id": 2286,
                "drug_id": 516,
                "brand_id": 2201,
                "created_at": "2020-11-03T15:11:33.000000Z",
                "updated_at": "2020-11-03T15:11:33.000000Z"
            },
            {
                "id": 2287,
                "drug_id": 516,
                "brand_id": 2202,
                "created_at": "2020-11-03T15:11:33.000000Z",
                "updated_at": "2020-11-03T15:11:33.000000Z"
            },
            {
                "id": 2288,
                "drug_id": 516,
                "brand_id": 2203,
                "created_at": "2020-11-03T15:11:33.000000Z",
                "updated_at": "2020-11-03T15:11:33.000000Z"
            },
            {
                "id": 2289,
                "drug_id": 516,
                "brand_id": 2204,
                "created_at": "2020-11-03T15:11:33.000000Z",
                "updated_at": "2020-11-03T15:11:33.000000Z"
            },
            {
                "id": 2290,
                "drug_id": 516,
                "brand_id": 2205,
                "created_at": "2020-11-03T15:11:33.000000Z",
                "updated_at": "2020-11-03T15:11:33.000000Z"
            },
            {
                "id": 2291,
                "drug_id": 516,
                "brand_id": 2206,
                "created_at": "2020-11-03T15:11:33.000000Z",
                "updated_at": "2020-11-03T15:11:33.000000Z"
            },
            {
                "id": 2292,
                "drug_id": 517,
                "brand_id": 2207,
                "created_at": "2020-11-03T15:13:16.000000Z",
                "updated_at": "2020-11-03T15:13:16.000000Z"
            },
            {
                "id": 2293,
                "drug_id": 518,
                "brand_id": 2208,
                "created_at": "2020-11-03T15:14:06.000000Z",
                "updated_at": "2020-11-03T15:14:06.000000Z"
            },
            {
                "id": 2294,
                "drug_id": 518,
                "brand_id": 2209,
                "created_at": "2020-11-03T15:14:06.000000Z",
                "updated_at": "2020-11-03T15:14:06.000000Z"
            },
            {
                "id": 2295,
                "drug_id": 518,
                "brand_id": 2210,
                "created_at": "2020-11-03T15:14:06.000000Z",
                "updated_at": "2020-11-03T15:14:06.000000Z"
            },
            {
                "id": 2296,
                "drug_id": 519,
                "brand_id": 2211,
                "created_at": "2020-11-03T15:32:27.000000Z",
                "updated_at": "2020-11-03T15:32:27.000000Z"
            },
            {
                "id": 2297,
                "drug_id": 520,
                "brand_id": 2212,
                "created_at": "2020-11-03T15:54:06.000000Z",
                "updated_at": "2020-11-03T15:54:06.000000Z"
            },
            {
                "id": 2298,
                "drug_id": 520,
                "brand_id": 2213,
                "created_at": "2020-11-03T15:54:06.000000Z",
                "updated_at": "2020-11-03T15:54:06.000000Z"
            },
            {
                "id": 2299,
                "drug_id": 521,
                "brand_id": 2214,
                "created_at": "2020-11-03T15:55:28.000000Z",
                "updated_at": "2020-11-03T15:55:28.000000Z"
            },
            {
                "id": 2300,
                "drug_id": 522,
                "brand_id": 2215,
                "created_at": "2020-11-03T16:00:28.000000Z",
                "updated_at": "2020-11-03T16:00:28.000000Z"
            },
            {
                "id": 2301,
                "drug_id": 523,
                "brand_id": 2216,
                "created_at": "2020-11-03T16:03:40.000000Z",
                "updated_at": "2020-11-03T16:03:40.000000Z"
            },
            {
                "id": 2302,
                "drug_id": 524,
                "brand_id": 2217,
                "created_at": "2020-11-03T16:09:23.000000Z",
                "updated_at": "2020-11-03T16:09:23.000000Z"
            },
            {
                "id": 2303,
                "drug_id": 524,
                "brand_id": 2218,
                "created_at": "2020-11-03T16:09:23.000000Z",
                "updated_at": "2020-11-03T16:09:23.000000Z"
            },
            {
                "id": 2304,
                "drug_id": 524,
                "brand_id": 2219,
                "created_at": "2020-11-03T16:09:23.000000Z",
                "updated_at": "2020-11-03T16:09:23.000000Z"
            },
            {
                "id": 2305,
                "drug_id": 525,
                "brand_id": 2220,
                "created_at": "2020-11-03T16:11:35.000000Z",
                "updated_at": "2020-11-03T16:11:35.000000Z"
            },
            {
                "id": 2306,
                "drug_id": 526,
                "brand_id": 2221,
                "created_at": "2020-11-03T16:33:24.000000Z",
                "updated_at": "2020-11-03T16:33:24.000000Z"
            },
            {
                "id": 2307,
                "drug_id": 527,
                "brand_id": 2222,
                "created_at": "2020-11-03T16:34:20.000000Z",
                "updated_at": "2020-11-03T16:34:20.000000Z"
            },
            {
                "id": 2308,
                "drug_id": 528,
                "brand_id": 2223,
                "created_at": "2020-11-03T16:34:56.000000Z",
                "updated_at": "2020-11-03T16:34:56.000000Z"
            },
            {
                "id": 2309,
                "drug_id": 529,
                "brand_id": 2224,
                "created_at": "2020-11-03T16:36:33.000000Z",
                "updated_at": "2020-11-03T16:36:33.000000Z"
            },
            {
                "id": 2310,
                "drug_id": 529,
                "brand_id": 2225,
                "created_at": "2020-11-03T16:36:33.000000Z",
                "updated_at": "2020-11-03T16:36:33.000000Z"
            },
            {
                "id": 2311,
                "drug_id": 530,
                "brand_id": 2226,
                "created_at": "2020-11-03T16:37:57.000000Z",
                "updated_at": "2020-11-03T16:37:57.000000Z"
            },
            {
                "id": 2312,
                "drug_id": 530,
                "brand_id": 2227,
                "created_at": "2020-11-03T16:37:57.000000Z",
                "updated_at": "2020-11-03T16:37:57.000000Z"
            },
            {
                "id": 2313,
                "drug_id": 531,
                "brand_id": 2228,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2314,
                "drug_id": 531,
                "brand_id": 2229,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2315,
                "drug_id": 531,
                "brand_id": 2230,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2316,
                "drug_id": 531,
                "brand_id": 2231,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2317,
                "drug_id": 531,
                "brand_id": 2232,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2318,
                "drug_id": 531,
                "brand_id": 2233,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2319,
                "drug_id": 531,
                "brand_id": 2234,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2320,
                "drug_id": 531,
                "brand_id": 2235,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2321,
                "drug_id": 531,
                "brand_id": 2236,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2322,
                "drug_id": 531,
                "brand_id": 2237,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2323,
                "drug_id": 531,
                "brand_id": 2238,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2324,
                "drug_id": 531,
                "brand_id": 2239,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2325,
                "drug_id": 531,
                "brand_id": 2240,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2326,
                "drug_id": 531,
                "brand_id": 2241,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2327,
                "drug_id": 531,
                "brand_id": 2242,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2328,
                "drug_id": 531,
                "brand_id": 2243,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z"
            },
            {
                "id": 2329,
                "drug_id": 532,
                "brand_id": 2244,
                "created_at": "2020-11-03T17:09:16.000000Z",
                "updated_at": "2020-11-03T17:09:16.000000Z"
            },
            {
                "id": 2330,
                "drug_id": 532,
                "brand_id": 2245,
                "created_at": "2020-11-03T17:09:17.000000Z",
                "updated_at": "2020-11-03T17:09:17.000000Z"
            },
            {
                "id": 2331,
                "drug_id": 533,
                "brand_id": 2246,
                "created_at": "2020-11-03T17:10:33.000000Z",
                "updated_at": "2020-11-03T17:10:33.000000Z"
            },
            {
                "id": 2332,
                "drug_id": 534,
                "brand_id": 2247,
                "created_at": "2020-11-03T17:13:56.000000Z",
                "updated_at": "2020-11-03T17:13:56.000000Z"
            },
            {
                "id": 2333,
                "drug_id": 534,
                "brand_id": 2248,
                "created_at": "2020-11-03T17:13:57.000000Z",
                "updated_at": "2020-11-03T17:13:57.000000Z"
            },
            {
                "id": 2334,
                "drug_id": 535,
                "brand_id": 2249,
                "created_at": "2020-11-03T17:14:55.000000Z",
                "updated_at": "2020-11-03T17:14:55.000000Z"
            },
            {
                "id": 2335,
                "drug_id": 535,
                "brand_id": 2250,
                "created_at": "2020-11-03T17:14:55.000000Z",
                "updated_at": "2020-11-03T17:14:55.000000Z"
            },
            {
                "id": 2336,
                "drug_id": 536,
                "brand_id": 2251,
                "created_at": "2020-11-03T17:16:19.000000Z",
                "updated_at": "2020-11-03T17:16:19.000000Z"
            },
            {
                "id": 2337,
                "drug_id": 536,
                "brand_id": 2252,
                "created_at": "2020-11-03T17:16:19.000000Z",
                "updated_at": "2020-11-03T17:16:19.000000Z"
            },
            {
                "id": 2338,
                "drug_id": 536,
                "brand_id": 2253,
                "created_at": "2020-11-03T17:16:19.000000Z",
                "updated_at": "2020-11-03T17:16:19.000000Z"
            },
            {
                "id": 2339,
                "drug_id": 537,
                "brand_id": 2254,
                "created_at": "2020-11-03T17:17:31.000000Z",
                "updated_at": "2020-11-03T17:17:31.000000Z"
            },
            {
                "id": 2340,
                "drug_id": 537,
                "brand_id": 2255,
                "created_at": "2020-11-03T17:17:31.000000Z",
                "updated_at": "2020-11-03T17:17:31.000000Z"
            },
            {
                "id": 2341,
                "drug_id": 537,
                "brand_id": 2256,
                "created_at": "2020-11-03T17:17:31.000000Z",
                "updated_at": "2020-11-03T17:17:31.000000Z"
            },
            {
                "id": 2342,
                "drug_id": 537,
                "brand_id": 2257,
                "created_at": "2020-11-03T17:17:31.000000Z",
                "updated_at": "2020-11-03T17:17:31.000000Z"
            },
            {
                "id": 2343,
                "drug_id": 538,
                "brand_id": 2258,
                "created_at": "2020-11-03T17:18:18.000000Z",
                "updated_at": "2020-11-03T17:18:18.000000Z"
            },
            {
                "id": 2344,
                "drug_id": 539,
                "brand_id": 2259,
                "created_at": "2020-11-03T17:19:42.000000Z",
                "updated_at": "2020-11-03T17:19:42.000000Z"
            },
            {
                "id": 2345,
                "drug_id": 540,
                "brand_id": 2260,
                "created_at": "2020-11-03T17:20:05.000000Z",
                "updated_at": "2020-11-03T17:20:05.000000Z"
            },
            {
                "id": 2346,
                "drug_id": 541,
                "brand_id": 2261,
                "created_at": "2020-11-03T17:20:25.000000Z",
                "updated_at": "2020-11-03T17:20:25.000000Z"
            },
            {
                "id": 2347,
                "drug_id": 542,
                "brand_id": 2262,
                "created_at": "2020-11-03T17:22:07.000000Z",
                "updated_at": "2020-11-03T17:22:07.000000Z"
            },
            {
                "id": 2348,
                "drug_id": 542,
                "brand_id": 2263,
                "created_at": "2020-11-03T17:22:07.000000Z",
                "updated_at": "2020-11-03T17:22:07.000000Z"
            },
            {
                "id": 2349,
                "drug_id": 543,
                "brand_id": 2264,
                "created_at": "2020-11-03T19:17:27.000000Z",
                "updated_at": "2020-11-03T19:17:27.000000Z"
            },
            {
                "id": 2350,
                "drug_id": 544,
                "brand_id": 2265,
                "created_at": "2020-11-03T19:19:33.000000Z",
                "updated_at": "2020-11-03T19:19:33.000000Z"
            },
            {
                "id": 2351,
                "drug_id": 544,
                "brand_id": 2266,
                "created_at": "2020-11-03T19:19:33.000000Z",
                "updated_at": "2020-11-03T19:19:33.000000Z"
            },
            {
                "id": 2352,
                "drug_id": 546,
                "brand_id": 2267,
                "created_at": "2020-11-03T19:26:22.000000Z",
                "updated_at": "2020-11-03T19:26:22.000000Z"
            },
            {
                "id": 2353,
                "drug_id": 547,
                "brand_id": 2268,
                "created_at": "2020-11-03T19:29:15.000000Z",
                "updated_at": "2020-11-03T19:29:15.000000Z"
            },
            {
                "id": 2354,
                "drug_id": 547,
                "brand_id": 2269,
                "created_at": "2020-11-03T19:29:15.000000Z",
                "updated_at": "2020-11-03T19:29:15.000000Z"
            },
            {
                "id": 2355,
                "drug_id": 547,
                "brand_id": 2270,
                "created_at": "2020-11-03T19:29:15.000000Z",
                "updated_at": "2020-11-03T19:29:15.000000Z"
            },
            {
                "id": 2356,
                "drug_id": 547,
                "brand_id": 2271,
                "created_at": "2020-11-03T19:29:15.000000Z",
                "updated_at": "2020-11-03T19:29:15.000000Z"
            },
            {
                "id": 2357,
                "drug_id": 547,
                "brand_id": 2272,
                "created_at": "2020-11-03T19:29:15.000000Z",
                "updated_at": "2020-11-03T19:29:15.000000Z"
            },
            {
                "id": 2358,
                "drug_id": 548,
                "brand_id": 2273,
                "created_at": "2020-11-03T19:30:45.000000Z",
                "updated_at": "2020-11-03T19:30:45.000000Z"
            },
            {
                "id": 2359,
                "drug_id": 548,
                "brand_id": 2274,
                "created_at": "2020-11-03T19:30:45.000000Z",
                "updated_at": "2020-11-03T19:30:45.000000Z"
            },
            {
                "id": 2360,
                "drug_id": 549,
                "brand_id": 2275,
                "created_at": "2020-11-03T19:35:56.000000Z",
                "updated_at": "2020-11-03T19:35:56.000000Z"
            },
            {
                "id": 2361,
                "drug_id": 549,
                "brand_id": 2276,
                "created_at": "2020-11-03T19:35:56.000000Z",
                "updated_at": "2020-11-03T19:35:56.000000Z"
            },
            {
                "id": 2362,
                "drug_id": 550,
                "brand_id": 2277,
                "created_at": "2020-11-03T19:36:40.000000Z",
                "updated_at": "2020-11-03T19:36:40.000000Z"
            },
            {
                "id": 2363,
                "drug_id": 550,
                "brand_id": 2278,
                "created_at": "2020-11-03T19:36:40.000000Z",
                "updated_at": "2020-11-03T19:36:40.000000Z"
            },
            {
                "id": 2364,
                "drug_id": 551,
                "brand_id": 2279,
                "created_at": "2020-11-03T20:25:39.000000Z",
                "updated_at": "2020-11-03T20:25:39.000000Z"
            },
            {
                "id": 2365,
                "drug_id": 551,
                "brand_id": 2280,
                "created_at": "2020-11-03T20:25:39.000000Z",
                "updated_at": "2020-11-03T20:25:39.000000Z"
            },
            {
                "id": 2366,
                "drug_id": 551,
                "brand_id": 2281,
                "created_at": "2020-11-03T20:25:39.000000Z",
                "updated_at": "2020-11-03T20:25:39.000000Z"
            },
            {
                "id": 2367,
                "drug_id": 551,
                "brand_id": 2282,
                "created_at": "2020-11-03T20:25:40.000000Z",
                "updated_at": "2020-11-03T20:25:40.000000Z"
            },
            {
                "id": 2368,
                "drug_id": 551,
                "brand_id": 2283,
                "created_at": "2020-11-03T20:25:40.000000Z",
                "updated_at": "2020-11-03T20:25:40.000000Z"
            },
            {
                "id": 2369,
                "drug_id": 552,
                "brand_id": 2284,
                "created_at": "2020-11-03T20:48:34.000000Z",
                "updated_at": "2020-11-03T20:48:34.000000Z"
            },
            {
                "id": 2370,
                "drug_id": 552,
                "brand_id": 2285,
                "created_at": "2020-11-03T20:48:34.000000Z",
                "updated_at": "2020-11-03T20:48:34.000000Z"
            },
            {
                "id": 2385,
                "drug_id": 18,
                "brand_id": 66,
                "created_at": "2020-11-04T01:56:15.000000Z",
                "updated_at": "2020-11-04T01:56:15.000000Z"
            },
            {
                "id": 2386,
                "drug_id": 18,
                "brand_id": 67,
                "created_at": "2020-11-04T01:56:15.000000Z",
                "updated_at": "2020-11-04T01:56:15.000000Z"
            },
            {
                "id": 2387,
                "drug_id": 18,
                "brand_id": 68,
                "created_at": "2020-11-04T01:56:15.000000Z",
                "updated_at": "2020-11-04T01:56:15.000000Z"
            },
            {
                "id": 2388,
                "drug_id": 18,
                "brand_id": 69,
                "created_at": "2020-11-04T01:56:15.000000Z",
                "updated_at": "2020-11-04T01:56:15.000000Z"
            },
            {
                "id": 2389,
                "drug_id": 18,
                "brand_id": 70,
                "created_at": "2020-11-04T01:56:15.000000Z",
                "updated_at": "2020-11-04T01:56:15.000000Z"
            },
            {
                "id": 2390,
                "drug_id": 18,
                "brand_id": 71,
                "created_at": "2020-11-04T01:56:15.000000Z",
                "updated_at": "2020-11-04T01:56:15.000000Z"
            },
            {
                "id": 2391,
                "drug_id": 18,
                "brand_id": 72,
                "created_at": "2020-11-04T01:56:15.000000Z",
                "updated_at": "2020-11-04T01:56:15.000000Z"
            },
            {
                "id": 2392,
                "drug_id": 3,
                "brand_id": 4,
                "created_at": "2020-11-04T01:57:44.000000Z",
                "updated_at": "2020-11-04T01:57:44.000000Z"
            },
            {
                "id": 2477,
                "drug_id": 5,
                "brand_id": 25,
                "created_at": "2020-11-04T02:01:14.000000Z",
                "updated_at": "2020-11-04T02:01:14.000000Z"
            },
            {
                "id": 2478,
                "drug_id": 6,
                "brand_id": 26,
                "created_at": "2020-11-04T02:01:58.000000Z",
                "updated_at": "2020-11-04T02:01:58.000000Z"
            },
            {
                "id": 2479,
                "drug_id": 6,
                "brand_id": 27,
                "created_at": "2020-11-04T02:01:58.000000Z",
                "updated_at": "2020-11-04T02:01:58.000000Z"
            },
            {
                "id": 2480,
                "drug_id": 6,
                "brand_id": 28,
                "created_at": "2020-11-04T02:01:58.000000Z",
                "updated_at": "2020-11-04T02:01:58.000000Z"
            },
            {
                "id": 2481,
                "drug_id": 7,
                "brand_id": 29,
                "created_at": "2020-11-04T02:02:41.000000Z",
                "updated_at": "2020-11-04T02:02:41.000000Z"
            },
            {
                "id": 2482,
                "drug_id": 7,
                "brand_id": 30,
                "created_at": "2020-11-04T02:02:41.000000Z",
                "updated_at": "2020-11-04T02:02:41.000000Z"
            },
            {
                "id": 2483,
                "drug_id": 7,
                "brand_id": 31,
                "created_at": "2020-11-04T02:02:41.000000Z",
                "updated_at": "2020-11-04T02:02:41.000000Z"
            },
            {
                "id": 2484,
                "drug_id": 7,
                "brand_id": 32,
                "created_at": "2020-11-04T02:02:41.000000Z",
                "updated_at": "2020-11-04T02:02:41.000000Z"
            },
            {
                "id": 2485,
                "drug_id": 7,
                "brand_id": 33,
                "created_at": "2020-11-04T02:02:41.000000Z",
                "updated_at": "2020-11-04T02:02:41.000000Z"
            },
            {
                "id": 2486,
                "drug_id": 7,
                "brand_id": 33,
                "created_at": "2020-11-04T02:02:41.000000Z",
                "updated_at": "2020-11-04T02:02:41.000000Z"
            },
            {
                "id": 2487,
                "drug_id": 9,
                "brand_id": 36,
                "created_at": "2020-11-04T02:16:27.000000Z",
                "updated_at": "2020-11-04T02:16:27.000000Z"
            },
            {
                "id": 2488,
                "drug_id": 11,
                "brand_id": 38,
                "created_at": "2020-11-04T02:16:59.000000Z",
                "updated_at": "2020-11-04T02:16:59.000000Z"
            },
            {
                "id": 2489,
                "drug_id": 11,
                "brand_id": 39,
                "created_at": "2020-11-04T02:16:59.000000Z",
                "updated_at": "2020-11-04T02:16:59.000000Z"
            },
            {
                "id": 2490,
                "drug_id": 11,
                "brand_id": 40,
                "created_at": "2020-11-04T02:16:59.000000Z",
                "updated_at": "2020-11-04T02:16:59.000000Z"
            },
            {
                "id": 2491,
                "drug_id": 11,
                "brand_id": 41,
                "created_at": "2020-11-04T02:16:59.000000Z",
                "updated_at": "2020-11-04T02:16:59.000000Z"
            },
            {
                "id": 2492,
                "drug_id": 11,
                "brand_id": 42,
                "created_at": "2020-11-04T02:16:59.000000Z",
                "updated_at": "2020-11-04T02:16:59.000000Z"
            },
            {
                "id": 2493,
                "drug_id": 11,
                "brand_id": 43,
                "created_at": "2020-11-04T02:16:59.000000Z",
                "updated_at": "2020-11-04T02:16:59.000000Z"
            },
            {
                "id": 2494,
                "drug_id": 13,
                "brand_id": 45,
                "created_at": "2020-11-04T02:19:08.000000Z",
                "updated_at": "2020-11-04T02:19:08.000000Z"
            },
            {
                "id": 2503,
                "drug_id": 14,
                "brand_id": 46,
                "created_at": "2020-11-04T02:22:41.000000Z",
                "updated_at": "2020-11-04T02:22:41.000000Z"
            },
            {
                "id": 2504,
                "drug_id": 14,
                "brand_id": 47,
                "created_at": "2020-11-04T02:22:41.000000Z",
                "updated_at": "2020-11-04T02:22:41.000000Z"
            },
            {
                "id": 2505,
                "drug_id": 14,
                "brand_id": 48,
                "created_at": "2020-11-04T02:22:41.000000Z",
                "updated_at": "2020-11-04T02:22:41.000000Z"
            },
            {
                "id": 2506,
                "drug_id": 14,
                "brand_id": 49,
                "created_at": "2020-11-04T02:22:41.000000Z",
                "updated_at": "2020-11-04T02:22:41.000000Z"
            },
            {
                "id": 2508,
                "drug_id": 22,
                "brand_id": 84,
                "created_at": "2020-11-04T02:23:40.000000Z",
                "updated_at": "2020-11-04T02:23:40.000000Z"
            },
            {
                "id": 2509,
                "drug_id": 22,
                "brand_id": 85,
                "created_at": "2020-11-04T02:23:40.000000Z",
                "updated_at": "2020-11-04T02:23:40.000000Z"
            },
            {
                "id": 2510,
                "drug_id": 23,
                "brand_id": 86,
                "created_at": "2020-11-04T02:26:49.000000Z",
                "updated_at": "2020-11-04T02:26:49.000000Z"
            },
            {
                "id": 2511,
                "drug_id": 26,
                "brand_id": 90,
                "created_at": "2020-11-04T02:27:43.000000Z",
                "updated_at": "2020-11-04T02:27:43.000000Z"
            },
            {
                "id": 2512,
                "drug_id": 26,
                "brand_id": 91,
                "created_at": "2020-11-04T02:27:43.000000Z",
                "updated_at": "2020-11-04T02:27:43.000000Z"
            },
            {
                "id": 2513,
                "drug_id": 26,
                "brand_id": 92,
                "created_at": "2020-11-04T02:27:43.000000Z",
                "updated_at": "2020-11-04T02:27:43.000000Z"
            },
            {
                "id": 2514,
                "drug_id": 26,
                "brand_id": 93,
                "created_at": "2020-11-04T02:27:43.000000Z",
                "updated_at": "2020-11-04T02:27:43.000000Z"
            },
            {
                "id": 2515,
                "drug_id": 42,
                "brand_id": 151,
                "created_at": "2020-11-04T02:28:02.000000Z",
                "updated_at": "2020-11-04T02:28:02.000000Z"
            },
            {
                "id": 2516,
                "drug_id": 42,
                "brand_id": 152,
                "created_at": "2020-11-04T02:28:02.000000Z",
                "updated_at": "2020-11-04T02:28:02.000000Z"
            },
            {
                "id": 2517,
                "drug_id": 42,
                "brand_id": 153,
                "created_at": "2020-11-04T02:28:02.000000Z",
                "updated_at": "2020-11-04T02:28:02.000000Z"
            },
            {
                "id": 2518,
                "drug_id": 43,
                "brand_id": 154,
                "created_at": "2020-11-04T02:28:14.000000Z",
                "updated_at": "2020-11-04T02:28:14.000000Z"
            },
            {
                "id": 2519,
                "drug_id": 43,
                "brand_id": 155,
                "created_at": "2020-11-04T02:28:14.000000Z",
                "updated_at": "2020-11-04T02:28:14.000000Z"
            },
            {
                "id": 2520,
                "drug_id": 43,
                "brand_id": 156,
                "created_at": "2020-11-04T02:28:14.000000Z",
                "updated_at": "2020-11-04T02:28:14.000000Z"
            },
            {
                "id": 2521,
                "drug_id": 43,
                "brand_id": 157,
                "created_at": "2020-11-04T02:28:14.000000Z",
                "updated_at": "2020-11-04T02:28:14.000000Z"
            },
            {
                "id": 2522,
                "drug_id": 44,
                "brand_id": 158,
                "created_at": "2020-11-04T02:28:22.000000Z",
                "updated_at": "2020-11-04T02:28:22.000000Z"
            },
            {
                "id": 2523,
                "drug_id": 44,
                "brand_id": 159,
                "created_at": "2020-11-04T02:28:22.000000Z",
                "updated_at": "2020-11-04T02:28:22.000000Z"
            },
            {
                "id": 2526,
                "drug_id": 51,
                "brand_id": 173,
                "created_at": "2020-11-04T02:29:14.000000Z",
                "updated_at": "2020-11-04T02:29:14.000000Z"
            },
            {
                "id": 2527,
                "drug_id": 51,
                "brand_id": 174,
                "created_at": "2020-11-04T02:29:14.000000Z",
                "updated_at": "2020-11-04T02:29:14.000000Z"
            },
            {
                "id": 2528,
                "drug_id": 51,
                "brand_id": 175,
                "created_at": "2020-11-04T02:29:14.000000Z",
                "updated_at": "2020-11-04T02:29:14.000000Z"
            },
            {
                "id": 2529,
                "drug_id": 51,
                "brand_id": 176,
                "created_at": "2020-11-04T02:29:14.000000Z",
                "updated_at": "2020-11-04T02:29:14.000000Z"
            },
            {
                "id": 2535,
                "drug_id": 52,
                "brand_id": 177,
                "created_at": "2020-11-04T16:01:52.000000Z",
                "updated_at": "2020-11-04T16:01:52.000000Z"
            },
            {
                "id": 2536,
                "drug_id": 52,
                "brand_id": 178,
                "created_at": "2020-11-04T16:01:52.000000Z",
                "updated_at": "2020-11-04T16:01:52.000000Z"
            },
            {
                "id": 2537,
                "drug_id": 52,
                "brand_id": 179,
                "created_at": "2020-11-04T16:01:52.000000Z",
                "updated_at": "2020-11-04T16:01:52.000000Z"
            },
            {
                "id": 2538,
                "drug_id": 52,
                "brand_id": 180,
                "created_at": "2020-11-04T16:01:52.000000Z",
                "updated_at": "2020-11-04T16:01:52.000000Z"
            },
            {
                "id": 2539,
                "drug_id": 52,
                "brand_id": 181,
                "created_at": "2020-11-04T16:01:52.000000Z",
                "updated_at": "2020-11-04T16:01:52.000000Z"
            },
            {
                "id": 2542,
                "drug_id": 57,
                "brand_id": 223,
                "created_at": "2020-11-04T16:18:38.000000Z",
                "updated_at": "2020-11-04T16:18:38.000000Z"
            },
            {
                "id": 2543,
                "drug_id": 57,
                "brand_id": 224,
                "created_at": "2020-11-04T16:18:38.000000Z",
                "updated_at": "2020-11-04T16:18:38.000000Z"
            },
            {
                "id": 2546,
                "drug_id": 58,
                "brand_id": 225,
                "created_at": "2020-11-04T16:49:01.000000Z",
                "updated_at": "2020-11-04T16:49:01.000000Z"
            },
            {
                "id": 2547,
                "drug_id": 50,
                "brand_id": 171,
                "created_at": "2020-11-04T16:50:57.000000Z",
                "updated_at": "2020-11-04T16:50:57.000000Z"
            },
            {
                "id": 2548,
                "drug_id": 50,
                "brand_id": 172,
                "created_at": "2020-11-04T16:50:57.000000Z",
                "updated_at": "2020-11-04T16:50:57.000000Z"
            },
            {
                "id": 2549,
                "drug_id": 32,
                "brand_id": 118,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2550,
                "drug_id": 32,
                "brand_id": 119,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2551,
                "drug_id": 32,
                "brand_id": 120,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2552,
                "drug_id": 32,
                "brand_id": 121,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2553,
                "drug_id": 32,
                "brand_id": 122,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2554,
                "drug_id": 32,
                "brand_id": 123,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2555,
                "drug_id": 32,
                "brand_id": 124,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2556,
                "drug_id": 32,
                "brand_id": 125,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2557,
                "drug_id": 32,
                "brand_id": 126,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2558,
                "drug_id": 32,
                "brand_id": 127,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2559,
                "drug_id": 32,
                "brand_id": 128,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2560,
                "drug_id": 32,
                "brand_id": 129,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2561,
                "drug_id": 32,
                "brand_id": 130,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2562,
                "drug_id": 32,
                "brand_id": 131,
                "created_at": "2020-11-04T16:52:26.000000Z",
                "updated_at": "2020-11-04T16:52:26.000000Z"
            },
            {
                "id": 2563,
                "drug_id": 16,
                "brand_id": 64,
                "created_at": "2020-11-04T16:53:51.000000Z",
                "updated_at": "2020-11-04T16:53:51.000000Z"
            },
            {
                "id": 2585,
                "drug_id": 4,
                "brand_id": 5,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2586,
                "drug_id": 4,
                "brand_id": 6,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2587,
                "drug_id": 4,
                "brand_id": 7,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2588,
                "drug_id": 4,
                "brand_id": 8,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2589,
                "drug_id": 4,
                "brand_id": 9,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2590,
                "drug_id": 4,
                "brand_id": 10,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2591,
                "drug_id": 4,
                "brand_id": 11,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2592,
                "drug_id": 4,
                "brand_id": 12,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2593,
                "drug_id": 4,
                "brand_id": 13,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2594,
                "drug_id": 4,
                "brand_id": 14,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2595,
                "drug_id": 4,
                "brand_id": 15,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2596,
                "drug_id": 4,
                "brand_id": 16,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2597,
                "drug_id": 4,
                "brand_id": 17,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2598,
                "drug_id": 4,
                "brand_id": 18,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2599,
                "drug_id": 4,
                "brand_id": 19,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2600,
                "drug_id": 4,
                "brand_id": 20,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2601,
                "drug_id": 4,
                "brand_id": 21,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2602,
                "drug_id": 4,
                "brand_id": 22,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2603,
                "drug_id": 4,
                "brand_id": 23,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2604,
                "drug_id": 4,
                "brand_id": 24,
                "created_at": "2020-11-04T16:59:50.000000Z",
                "updated_at": "2020-11-04T16:59:50.000000Z"
            },
            {
                "id": 2605,
                "drug_id": 4,
                "brand_id": 24,
                "created_at": "2020-11-04T16:59:51.000000Z",
                "updated_at": "2020-11-04T16:59:51.000000Z"
            },
            {
                "id": 2606,
                "drug_id": 60,
                "brand_id": 228,
                "created_at": "2020-11-04T17:23:32.000000Z",
                "updated_at": "2020-11-04T17:23:32.000000Z"
            },
            {
                "id": 2607,
                "drug_id": 60,
                "brand_id": 229,
                "created_at": "2020-11-04T17:23:32.000000Z",
                "updated_at": "2020-11-04T17:23:32.000000Z"
            },
            {
                "id": 2608,
                "drug_id": 60,
                "brand_id": 230,
                "created_at": "2020-11-04T17:23:32.000000Z",
                "updated_at": "2020-11-04T17:23:32.000000Z"
            },
            {
                "id": 2609,
                "drug_id": 60,
                "brand_id": 231,
                "created_at": "2020-11-04T17:23:32.000000Z",
                "updated_at": "2020-11-04T17:23:32.000000Z"
            },
            {
                "id": 2610,
                "drug_id": 60,
                "brand_id": 232,
                "created_at": "2020-11-04T17:23:32.000000Z",
                "updated_at": "2020-11-04T17:23:32.000000Z"
            },
            {
                "id": 2615,
                "drug_id": 62,
                "brand_id": 234,
                "created_at": "2020-11-04T18:21:10.000000Z",
                "updated_at": "2020-11-04T18:21:10.000000Z"
            },
            {
                "id": 2616,
                "drug_id": 62,
                "brand_id": 235,
                "created_at": "2020-11-04T18:21:10.000000Z",
                "updated_at": "2020-11-04T18:21:10.000000Z"
            },
            {
                "id": 2617,
                "drug_id": 62,
                "brand_id": 236,
                "created_at": "2020-11-04T18:21:10.000000Z",
                "updated_at": "2020-11-04T18:21:10.000000Z"
            },
            {
                "id": 2618,
                "drug_id": 62,
                "brand_id": 237,
                "created_at": "2020-11-04T18:21:10.000000Z",
                "updated_at": "2020-11-04T18:21:10.000000Z"
            },
            {
                "id": 2619,
                "drug_id": 63,
                "brand_id": 238,
                "created_at": "2020-11-04T20:17:15.000000Z",
                "updated_at": "2020-11-04T20:17:15.000000Z"
            },
            {
                "id": 2620,
                "drug_id": 63,
                "brand_id": 239,
                "created_at": "2020-11-04T20:17:15.000000Z",
                "updated_at": "2020-11-04T20:17:15.000000Z"
            },
            {
                "id": 2621,
                "drug_id": 63,
                "brand_id": 240,
                "created_at": "2020-11-04T20:17:15.000000Z",
                "updated_at": "2020-11-04T20:17:15.000000Z"
            },
            {
                "id": 2622,
                "drug_id": 63,
                "brand_id": 240,
                "created_at": "2020-11-04T20:17:15.000000Z",
                "updated_at": "2020-11-04T20:17:15.000000Z"
            },
            {
                "id": 2623,
                "drug_id": 63,
                "brand_id": 241,
                "created_at": "2020-11-04T20:17:15.000000Z",
                "updated_at": "2020-11-04T20:17:15.000000Z"
            },
            {
                "id": 2624,
                "drug_id": 63,
                "brand_id": 242,
                "created_at": "2020-11-04T20:17:15.000000Z",
                "updated_at": "2020-11-04T20:17:15.000000Z"
            },
            {
                "id": 2625,
                "drug_id": 63,
                "brand_id": 243,
                "created_at": "2020-11-04T20:17:15.000000Z",
                "updated_at": "2020-11-04T20:17:15.000000Z"
            },
            {
                "id": 2626,
                "drug_id": 63,
                "brand_id": 244,
                "created_at": "2020-11-04T20:17:15.000000Z",
                "updated_at": "2020-11-04T20:17:15.000000Z"
            },
            {
                "id": 2627,
                "drug_id": 65,
                "brand_id": 247,
                "created_at": "2020-11-04T20:18:42.000000Z",
                "updated_at": "2020-11-04T20:18:42.000000Z"
            },
            {
                "id": 2628,
                "drug_id": 65,
                "brand_id": 248,
                "created_at": "2020-11-04T20:18:42.000000Z",
                "updated_at": "2020-11-04T20:18:42.000000Z"
            },
            {
                "id": 2629,
                "drug_id": 65,
                "brand_id": 249,
                "created_at": "2020-11-04T20:18:42.000000Z",
                "updated_at": "2020-11-04T20:18:42.000000Z"
            },
            {
                "id": 2630,
                "drug_id": 65,
                "brand_id": 250,
                "created_at": "2020-11-04T20:18:42.000000Z",
                "updated_at": "2020-11-04T20:18:42.000000Z"
            },
            {
                "id": 2631,
                "drug_id": 65,
                "brand_id": 251,
                "created_at": "2020-11-04T20:18:42.000000Z",
                "updated_at": "2020-11-04T20:18:42.000000Z"
            },
            {
                "id": 2632,
                "drug_id": 65,
                "brand_id": 252,
                "created_at": "2020-11-04T20:18:42.000000Z",
                "updated_at": "2020-11-04T20:18:42.000000Z"
            },
            {
                "id": 2633,
                "drug_id": 65,
                "brand_id": 253,
                "created_at": "2020-11-04T20:18:42.000000Z",
                "updated_at": "2020-11-04T20:18:42.000000Z"
            },
            {
                "id": 2634,
                "drug_id": 65,
                "brand_id": 254,
                "created_at": "2020-11-04T20:18:42.000000Z",
                "updated_at": "2020-11-04T20:18:42.000000Z"
            },
            {
                "id": 2635,
                "drug_id": 66,
                "brand_id": 255,
                "created_at": "2020-11-04T20:22:04.000000Z",
                "updated_at": "2020-11-04T20:22:04.000000Z"
            },
            {
                "id": 2636,
                "drug_id": 66,
                "brand_id": 256,
                "created_at": "2020-11-04T20:22:04.000000Z",
                "updated_at": "2020-11-04T20:22:04.000000Z"
            },
            {
                "id": 2637,
                "drug_id": 66,
                "brand_id": 257,
                "created_at": "2020-11-04T20:22:04.000000Z",
                "updated_at": "2020-11-04T20:22:04.000000Z"
            },
            {
                "id": 2638,
                "drug_id": 68,
                "brand_id": 264,
                "created_at": "2020-11-04T20:40:43.000000Z",
                "updated_at": "2020-11-04T20:40:43.000000Z"
            },
            {
                "id": 2639,
                "drug_id": 68,
                "brand_id": 265,
                "created_at": "2020-11-04T20:40:43.000000Z",
                "updated_at": "2020-11-04T20:40:43.000000Z"
            },
            {
                "id": 2640,
                "drug_id": 68,
                "brand_id": 266,
                "created_at": "2020-11-04T20:40:43.000000Z",
                "updated_at": "2020-11-04T20:40:43.000000Z"
            },
            {
                "id": 2641,
                "drug_id": 68,
                "brand_id": 267,
                "created_at": "2020-11-04T20:40:43.000000Z",
                "updated_at": "2020-11-04T20:40:43.000000Z"
            },
            {
                "id": 2642,
                "drug_id": 70,
                "brand_id": 313,
                "created_at": "2020-11-04T20:44:24.000000Z",
                "updated_at": "2020-11-04T20:44:24.000000Z"
            },
            {
                "id": 2643,
                "drug_id": 70,
                "brand_id": 313,
                "created_at": "2020-11-04T20:44:24.000000Z",
                "updated_at": "2020-11-04T20:44:24.000000Z"
            },
            {
                "id": 2644,
                "drug_id": 70,
                "brand_id": 313,
                "created_at": "2020-11-04T20:44:24.000000Z",
                "updated_at": "2020-11-04T20:44:24.000000Z"
            },
            {
                "id": 2645,
                "drug_id": 70,
                "brand_id": 314,
                "created_at": "2020-11-04T20:44:24.000000Z",
                "updated_at": "2020-11-04T20:44:24.000000Z"
            },
            {
                "id": 2646,
                "drug_id": 70,
                "brand_id": 315,
                "created_at": "2020-11-04T20:44:24.000000Z",
                "updated_at": "2020-11-04T20:44:24.000000Z"
            },
            {
                "id": 2647,
                "drug_id": 70,
                "brand_id": 316,
                "created_at": "2020-11-04T20:44:24.000000Z",
                "updated_at": "2020-11-04T20:44:24.000000Z"
            },
            {
                "id": 2648,
                "drug_id": 70,
                "brand_id": 317,
                "created_at": "2020-11-04T20:44:24.000000Z",
                "updated_at": "2020-11-04T20:44:24.000000Z"
            },
            {
                "id": 2649,
                "drug_id": 70,
                "brand_id": 318,
                "created_at": "2020-11-04T20:44:24.000000Z",
                "updated_at": "2020-11-04T20:44:24.000000Z"
            },
            {
                "id": 2650,
                "drug_id": 70,
                "brand_id": 319,
                "created_at": "2020-11-04T20:44:24.000000Z",
                "updated_at": "2020-11-04T20:44:24.000000Z"
            },
            {
                "id": 2651,
                "drug_id": 70,
                "brand_id": 320,
                "created_at": "2020-11-04T20:44:24.000000Z",
                "updated_at": "2020-11-04T20:44:24.000000Z"
            },
            {
                "id": 2652,
                "drug_id": 70,
                "brand_id": 321,
                "created_at": "2020-11-04T20:44:24.000000Z",
                "updated_at": "2020-11-04T20:44:24.000000Z"
            },
            {
                "id": 2653,
                "drug_id": 70,
                "brand_id": 322,
                "created_at": "2020-11-04T20:44:24.000000Z",
                "updated_at": "2020-11-04T20:44:24.000000Z"
            },
            {
                "id": 2654,
                "drug_id": 70,
                "brand_id": 323,
                "created_at": "2020-11-04T20:44:24.000000Z",
                "updated_at": "2020-11-04T20:44:24.000000Z"
            },
            {
                "id": 2655,
                "drug_id": 75,
                "brand_id": 338,
                "created_at": "2020-11-04T20:47:21.000000Z",
                "updated_at": "2020-11-04T20:47:21.000000Z"
            },
            {
                "id": 2656,
                "drug_id": 75,
                "brand_id": 339,
                "created_at": "2020-11-04T20:47:21.000000Z",
                "updated_at": "2020-11-04T20:47:21.000000Z"
            },
            {
                "id": 2660,
                "drug_id": 76,
                "brand_id": 340,
                "created_at": "2020-11-04T21:23:48.000000Z",
                "updated_at": "2020-11-04T21:23:48.000000Z"
            },
            {
                "id": 2669,
                "drug_id": 78,
                "brand_id": 343,
                "created_at": "2020-11-04T21:39:21.000000Z",
                "updated_at": "2020-11-04T21:39:21.000000Z"
            },
            {
                "id": 2670,
                "drug_id": 78,
                "brand_id": 344,
                "created_at": "2020-11-04T21:39:21.000000Z",
                "updated_at": "2020-11-04T21:39:21.000000Z"
            },
            {
                "id": 2671,
                "drug_id": 79,
                "brand_id": 345,
                "created_at": "2020-11-04T21:44:43.000000Z",
                "updated_at": "2020-11-04T21:44:43.000000Z"
            },
            {
                "id": 2672,
                "drug_id": 79,
                "brand_id": 346,
                "created_at": "2020-11-04T21:44:43.000000Z",
                "updated_at": "2020-11-04T21:44:43.000000Z"
            },
            {
                "id": 2673,
                "drug_id": 79,
                "brand_id": 347,
                "created_at": "2020-11-04T21:44:43.000000Z",
                "updated_at": "2020-11-04T21:44:43.000000Z"
            },
            {
                "id": 2674,
                "drug_id": 79,
                "brand_id": 348,
                "created_at": "2020-11-04T21:44:43.000000Z",
                "updated_at": "2020-11-04T21:44:43.000000Z"
            },
            {
                "id": 2675,
                "drug_id": 79,
                "brand_id": 349,
                "created_at": "2020-11-04T21:44:43.000000Z",
                "updated_at": "2020-11-04T21:44:43.000000Z"
            },
            {
                "id": 2676,
                "drug_id": 79,
                "brand_id": 350,
                "created_at": "2020-11-04T21:44:43.000000Z",
                "updated_at": "2020-11-04T21:44:43.000000Z"
            },
            {
                "id": 2677,
                "drug_id": 79,
                "brand_id": 351,
                "created_at": "2020-11-04T21:44:43.000000Z",
                "updated_at": "2020-11-04T21:44:43.000000Z"
            },
            {
                "id": 2678,
                "drug_id": 79,
                "brand_id": 352,
                "created_at": "2020-11-04T21:44:43.000000Z",
                "updated_at": "2020-11-04T21:44:43.000000Z"
            },
            {
                "id": 2679,
                "drug_id": 79,
                "brand_id": 353,
                "created_at": "2020-11-04T21:44:43.000000Z",
                "updated_at": "2020-11-04T21:44:43.000000Z"
            },
            {
                "id": 2680,
                "drug_id": 79,
                "brand_id": 354,
                "created_at": "2020-11-04T21:44:43.000000Z",
                "updated_at": "2020-11-04T21:44:43.000000Z"
            },
            {
                "id": 2681,
                "drug_id": 83,
                "brand_id": 363,
                "created_at": "2020-11-04T21:46:11.000000Z",
                "updated_at": "2020-11-04T21:46:11.000000Z"
            },
            {
                "id": 2682,
                "drug_id": 83,
                "brand_id": 364,
                "created_at": "2020-11-04T21:46:11.000000Z",
                "updated_at": "2020-11-04T21:46:11.000000Z"
            },
            {
                "id": 2683,
                "drug_id": 83,
                "brand_id": 365,
                "created_at": "2020-11-04T21:46:11.000000Z",
                "updated_at": "2020-11-04T21:46:11.000000Z"
            },
            {
                "id": 2684,
                "drug_id": 83,
                "brand_id": 366,
                "created_at": "2020-11-04T21:46:11.000000Z",
                "updated_at": "2020-11-04T21:46:11.000000Z"
            },
            {
                "id": 2685,
                "drug_id": 85,
                "brand_id": 367,
                "created_at": "2020-11-04T21:48:53.000000Z",
                "updated_at": "2020-11-04T21:48:53.000000Z"
            },
            {
                "id": 2687,
                "drug_id": 91,
                "brand_id": 373,
                "created_at": "2020-11-05T19:49:28.000000Z",
                "updated_at": "2020-11-05T19:49:28.000000Z"
            },
            {
                "id": 2688,
                "drug_id": 92,
                "brand_id": 374,
                "created_at": "2020-11-05T19:53:24.000000Z",
                "updated_at": "2020-11-05T19:53:24.000000Z"
            },
            {
                "id": 2689,
                "drug_id": 93,
                "brand_id": 375,
                "created_at": "2020-11-05T20:30:51.000000Z",
                "updated_at": "2020-11-05T20:30:51.000000Z"
            },
            {
                "id": 2690,
                "drug_id": 93,
                "brand_id": 376,
                "created_at": "2020-11-05T20:30:51.000000Z",
                "updated_at": "2020-11-05T20:30:51.000000Z"
            },
            {
                "id": 2691,
                "drug_id": 93,
                "brand_id": 377,
                "created_at": "2020-11-05T20:30:51.000000Z",
                "updated_at": "2020-11-05T20:30:51.000000Z"
            },
            {
                "id": 2692,
                "drug_id": 98,
                "brand_id": 391,
                "created_at": "2020-11-05T20:32:27.000000Z",
                "updated_at": "2020-11-05T20:32:27.000000Z"
            },
            {
                "id": 2693,
                "drug_id": 98,
                "brand_id": 392,
                "created_at": "2020-11-05T20:32:27.000000Z",
                "updated_at": "2020-11-05T20:32:27.000000Z"
            },
            {
                "id": 2694,
                "drug_id": 98,
                "brand_id": 393,
                "created_at": "2020-11-05T20:32:27.000000Z",
                "updated_at": "2020-11-05T20:32:27.000000Z"
            },
            {
                "id": 2695,
                "drug_id": 98,
                "brand_id": 394,
                "created_at": "2020-11-05T20:32:27.000000Z",
                "updated_at": "2020-11-05T20:32:27.000000Z"
            },
            {
                "id": 2696,
                "drug_id": 98,
                "brand_id": 395,
                "created_at": "2020-11-05T20:32:27.000000Z",
                "updated_at": "2020-11-05T20:32:27.000000Z"
            },
            {
                "id": 2697,
                "drug_id": 98,
                "brand_id": 396,
                "created_at": "2020-11-05T20:32:27.000000Z",
                "updated_at": "2020-11-05T20:32:27.000000Z"
            },
            {
                "id": 2698,
                "drug_id": 98,
                "brand_id": 397,
                "created_at": "2020-11-05T20:32:27.000000Z",
                "updated_at": "2020-11-05T20:32:27.000000Z"
            },
            {
                "id": 2699,
                "drug_id": 98,
                "brand_id": 398,
                "created_at": "2020-11-05T20:32:27.000000Z",
                "updated_at": "2020-11-05T20:32:27.000000Z"
            },
            {
                "id": 2700,
                "drug_id": 98,
                "brand_id": 399,
                "created_at": "2020-11-05T20:32:27.000000Z",
                "updated_at": "2020-11-05T20:32:27.000000Z"
            },
            {
                "id": 2725,
                "drug_id": 100,
                "brand_id": 402,
                "created_at": "2020-11-05T20:37:57.000000Z",
                "updated_at": "2020-11-05T20:37:57.000000Z"
            },
            {
                "id": 2726,
                "drug_id": 100,
                "brand_id": 403,
                "created_at": "2020-11-05T20:37:57.000000Z",
                "updated_at": "2020-11-05T20:37:57.000000Z"
            },
            {
                "id": 2727,
                "drug_id": 100,
                "brand_id": 404,
                "created_at": "2020-11-05T20:37:57.000000Z",
                "updated_at": "2020-11-05T20:37:57.000000Z"
            },
            {
                "id": 2728,
                "drug_id": 100,
                "brand_id": 405,
                "created_at": "2020-11-05T20:37:57.000000Z",
                "updated_at": "2020-11-05T20:37:57.000000Z"
            },
            {
                "id": 2729,
                "drug_id": 100,
                "brand_id": 406,
                "created_at": "2020-11-05T20:37:57.000000Z",
                "updated_at": "2020-11-05T20:37:57.000000Z"
            },
            {
                "id": 2730,
                "drug_id": 100,
                "brand_id": 407,
                "created_at": "2020-11-05T20:37:57.000000Z",
                "updated_at": "2020-11-05T20:37:57.000000Z"
            },
            {
                "id": 2731,
                "drug_id": 100,
                "brand_id": 408,
                "created_at": "2020-11-05T20:37:57.000000Z",
                "updated_at": "2020-11-05T20:37:57.000000Z"
            },
            {
                "id": 2732,
                "drug_id": 100,
                "brand_id": 409,
                "created_at": "2020-11-05T20:37:57.000000Z",
                "updated_at": "2020-11-05T20:37:57.000000Z"
            },
            {
                "id": 2733,
                "drug_id": 100,
                "brand_id": 410,
                "created_at": "2020-11-05T20:37:57.000000Z",
                "updated_at": "2020-11-05T20:37:57.000000Z"
            },
            {
                "id": 2734,
                "drug_id": 100,
                "brand_id": 411,
                "created_at": "2020-11-05T20:37:57.000000Z",
                "updated_at": "2020-11-05T20:37:57.000000Z"
            },
            {
                "id": 2735,
                "drug_id": 100,
                "brand_id": 412,
                "created_at": "2020-11-05T20:37:57.000000Z",
                "updated_at": "2020-11-05T20:37:57.000000Z"
            },
            {
                "id": 2736,
                "drug_id": 100,
                "brand_id": 413,
                "created_at": "2020-11-05T20:37:57.000000Z",
                "updated_at": "2020-11-05T20:37:57.000000Z"
            },
            {
                "id": 2738,
                "drug_id": 102,
                "brand_id": 416,
                "created_at": "2020-11-07T18:25:22.000000Z",
                "updated_at": "2020-11-07T18:25:22.000000Z"
            },
            {
                "id": 2759,
                "drug_id": 105,
                "brand_id": 436,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2760,
                "drug_id": 105,
                "brand_id": 437,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2761,
                "drug_id": 105,
                "brand_id": 438,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2762,
                "drug_id": 105,
                "brand_id": 439,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2763,
                "drug_id": 105,
                "brand_id": 440,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2764,
                "drug_id": 105,
                "brand_id": 441,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2765,
                "drug_id": 105,
                "brand_id": 442,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2766,
                "drug_id": 105,
                "brand_id": 443,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2767,
                "drug_id": 105,
                "brand_id": 444,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2768,
                "drug_id": 105,
                "brand_id": 445,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2769,
                "drug_id": 105,
                "brand_id": 446,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2770,
                "drug_id": 105,
                "brand_id": 447,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2771,
                "drug_id": 105,
                "brand_id": 448,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2772,
                "drug_id": 105,
                "brand_id": 449,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2773,
                "drug_id": 105,
                "brand_id": 450,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2774,
                "drug_id": 105,
                "brand_id": 451,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2775,
                "drug_id": 105,
                "brand_id": 452,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2776,
                "drug_id": 105,
                "brand_id": 453,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2777,
                "drug_id": 105,
                "brand_id": 454,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2778,
                "drug_id": 105,
                "brand_id": 455,
                "created_at": "2020-11-07T18:41:01.000000Z",
                "updated_at": "2020-11-07T18:41:01.000000Z"
            },
            {
                "id": 2779,
                "drug_id": 108,
                "brand_id": 459,
                "created_at": "2020-11-07T18:45:08.000000Z",
                "updated_at": "2020-11-07T18:45:08.000000Z"
            },
            {
                "id": 2780,
                "drug_id": 108,
                "brand_id": 460,
                "created_at": "2020-11-07T18:45:08.000000Z",
                "updated_at": "2020-11-07T18:45:08.000000Z"
            },
            {
                "id": 2781,
                "drug_id": 108,
                "brand_id": 461,
                "created_at": "2020-11-07T18:45:08.000000Z",
                "updated_at": "2020-11-07T18:45:08.000000Z"
            },
            {
                "id": 2782,
                "drug_id": 108,
                "brand_id": 462,
                "created_at": "2020-11-07T18:45:08.000000Z",
                "updated_at": "2020-11-07T18:45:08.000000Z"
            },
            {
                "id": 2783,
                "drug_id": 110,
                "brand_id": 470,
                "created_at": "2020-11-07T18:48:00.000000Z",
                "updated_at": "2020-11-07T18:48:00.000000Z"
            },
            {
                "id": 2784,
                "drug_id": 110,
                "brand_id": 471,
                "created_at": "2020-11-07T18:48:00.000000Z",
                "updated_at": "2020-11-07T18:48:00.000000Z"
            },
            {
                "id": 2785,
                "drug_id": 110,
                "brand_id": 472,
                "created_at": "2020-11-07T18:48:00.000000Z",
                "updated_at": "2020-11-07T18:48:00.000000Z"
            },
            {
                "id": 2786,
                "drug_id": 110,
                "brand_id": 473,
                "created_at": "2020-11-07T18:48:00.000000Z",
                "updated_at": "2020-11-07T18:48:00.000000Z"
            },
            {
                "id": 2787,
                "drug_id": 111,
                "brand_id": 474,
                "created_at": "2020-11-07T18:50:01.000000Z",
                "updated_at": "2020-11-07T18:50:01.000000Z"
            },
            {
                "id": 2788,
                "drug_id": 111,
                "brand_id": 475,
                "created_at": "2020-11-07T18:50:01.000000Z",
                "updated_at": "2020-11-07T18:50:01.000000Z"
            },
            {
                "id": 2789,
                "drug_id": 112,
                "brand_id": 476,
                "created_at": "2020-11-07T18:52:34.000000Z",
                "updated_at": "2020-11-07T18:52:34.000000Z"
            },
            {
                "id": 2790,
                "drug_id": 112,
                "brand_id": 477,
                "created_at": "2020-11-07T18:52:34.000000Z",
                "updated_at": "2020-11-07T18:52:34.000000Z"
            },
            {
                "id": 2791,
                "drug_id": 114,
                "brand_id": 478,
                "created_at": "2020-11-07T18:56:54.000000Z",
                "updated_at": "2020-11-07T18:56:54.000000Z"
            },
            {
                "id": 2792,
                "drug_id": 114,
                "brand_id": 479,
                "created_at": "2020-11-07T18:56:54.000000Z",
                "updated_at": "2020-11-07T18:56:54.000000Z"
            },
            {
                "id": 2793,
                "drug_id": 114,
                "brand_id": 480,
                "created_at": "2020-11-07T18:56:54.000000Z",
                "updated_at": "2020-11-07T18:56:54.000000Z"
            },
            {
                "id": 2796,
                "drug_id": 120,
                "brand_id": 508,
                "created_at": "2020-11-07T19:09:47.000000Z",
                "updated_at": "2020-11-07T19:09:47.000000Z"
            },
            {
                "id": 2797,
                "drug_id": 120,
                "brand_id": 509,
                "created_at": "2020-11-07T19:09:47.000000Z",
                "updated_at": "2020-11-07T19:09:47.000000Z"
            },
            {
                "id": 2798,
                "drug_id": 122,
                "brand_id": 514,
                "created_at": "2020-11-07T19:12:24.000000Z",
                "updated_at": "2020-11-07T19:12:24.000000Z"
            },
            {
                "id": 2799,
                "drug_id": 123,
                "brand_id": 515,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2800,
                "drug_id": 123,
                "brand_id": 516,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2801,
                "drug_id": 123,
                "brand_id": 517,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2802,
                "drug_id": 123,
                "brand_id": 518,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2803,
                "drug_id": 123,
                "brand_id": 519,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2804,
                "drug_id": 123,
                "brand_id": 519,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2805,
                "drug_id": 123,
                "brand_id": 520,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2806,
                "drug_id": 123,
                "brand_id": 521,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2807,
                "drug_id": 123,
                "brand_id": 522,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2808,
                "drug_id": 123,
                "brand_id": 523,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2809,
                "drug_id": 123,
                "brand_id": 524,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2810,
                "drug_id": 123,
                "brand_id": 525,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2811,
                "drug_id": 123,
                "brand_id": 526,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2812,
                "drug_id": 123,
                "brand_id": 527,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2813,
                "drug_id": 123,
                "brand_id": 528,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2814,
                "drug_id": 123,
                "brand_id": 529,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2815,
                "drug_id": 123,
                "brand_id": 529,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2816,
                "drug_id": 123,
                "brand_id": 529,
                "created_at": "2020-11-07T19:17:21.000000Z",
                "updated_at": "2020-11-07T19:17:21.000000Z"
            },
            {
                "id": 2817,
                "drug_id": 124,
                "brand_id": 530,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2818,
                "drug_id": 124,
                "brand_id": 531,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2819,
                "drug_id": 124,
                "brand_id": 532,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2820,
                "drug_id": 124,
                "brand_id": 533,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2821,
                "drug_id": 124,
                "brand_id": 534,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2822,
                "drug_id": 124,
                "brand_id": 535,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2823,
                "drug_id": 124,
                "brand_id": 536,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2824,
                "drug_id": 124,
                "brand_id": 537,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2825,
                "drug_id": 124,
                "brand_id": 538,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2826,
                "drug_id": 124,
                "brand_id": 539,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2827,
                "drug_id": 124,
                "brand_id": 540,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2828,
                "drug_id": 124,
                "brand_id": 541,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2829,
                "drug_id": 124,
                "brand_id": 542,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2830,
                "drug_id": 124,
                "brand_id": 543,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2831,
                "drug_id": 124,
                "brand_id": 544,
                "created_at": "2020-11-08T14:15:21.000000Z",
                "updated_at": "2020-11-08T14:15:21.000000Z"
            },
            {
                "id": 2832,
                "drug_id": 124,
                "brand_id": 545,
                "created_at": "2020-11-08T14:15:22.000000Z",
                "updated_at": "2020-11-08T14:15:22.000000Z"
            },
            {
                "id": 2833,
                "drug_id": 124,
                "brand_id": 546,
                "created_at": "2020-11-08T14:15:22.000000Z",
                "updated_at": "2020-11-08T14:15:22.000000Z"
            },
            {
                "id": 2834,
                "drug_id": 124,
                "brand_id": 547,
                "created_at": "2020-11-08T14:15:22.000000Z",
                "updated_at": "2020-11-08T14:15:22.000000Z"
            },
            {
                "id": 2835,
                "drug_id": 124,
                "brand_id": 548,
                "created_at": "2020-11-08T14:15:22.000000Z",
                "updated_at": "2020-11-08T14:15:22.000000Z"
            },
            {
                "id": 2836,
                "drug_id": 124,
                "brand_id": 549,
                "created_at": "2020-11-08T14:15:22.000000Z",
                "updated_at": "2020-11-08T14:15:22.000000Z"
            },
            {
                "id": 2837,
                "drug_id": 124,
                "brand_id": 550,
                "created_at": "2020-11-08T14:15:22.000000Z",
                "updated_at": "2020-11-08T14:15:22.000000Z"
            },
            {
                "id": 2838,
                "drug_id": 124,
                "brand_id": 551,
                "created_at": "2020-11-08T14:15:22.000000Z",
                "updated_at": "2020-11-08T14:15:22.000000Z"
            },
            {
                "id": 2839,
                "drug_id": 125,
                "brand_id": 552,
                "created_at": "2020-11-08T14:17:16.000000Z",
                "updated_at": "2020-11-08T14:17:16.000000Z"
            },
            {
                "id": 2840,
                "drug_id": 125,
                "brand_id": 552,
                "created_at": "2020-11-08T14:17:16.000000Z",
                "updated_at": "2020-11-08T14:17:16.000000Z"
            },
            {
                "id": 2841,
                "drug_id": 125,
                "brand_id": 553,
                "created_at": "2020-11-08T14:17:16.000000Z",
                "updated_at": "2020-11-08T14:17:16.000000Z"
            },
            {
                "id": 2842,
                "drug_id": 125,
                "brand_id": 554,
                "created_at": "2020-11-08T14:17:16.000000Z",
                "updated_at": "2020-11-08T14:17:16.000000Z"
            },
            {
                "id": 2843,
                "drug_id": 125,
                "brand_id": 555,
                "created_at": "2020-11-08T14:17:16.000000Z",
                "updated_at": "2020-11-08T14:17:16.000000Z"
            },
            {
                "id": 2845,
                "drug_id": 126,
                "brand_id": 556,
                "created_at": "2020-11-08T14:20:06.000000Z",
                "updated_at": "2020-11-08T14:20:06.000000Z"
            },
            {
                "id": 2850,
                "drug_id": 127,
                "brand_id": 557,
                "created_at": "2020-11-08T14:57:59.000000Z",
                "updated_at": "2020-11-08T14:57:59.000000Z"
            },
            {
                "id": 2851,
                "drug_id": 127,
                "brand_id": 558,
                "created_at": "2020-11-08T14:57:59.000000Z",
                "updated_at": "2020-11-08T14:57:59.000000Z"
            },
            {
                "id": 2852,
                "drug_id": 127,
                "brand_id": 559,
                "created_at": "2020-11-08T14:57:59.000000Z",
                "updated_at": "2020-11-08T14:57:59.000000Z"
            },
            {
                "id": 2853,
                "drug_id": 127,
                "brand_id": 560,
                "created_at": "2020-11-08T14:57:59.000000Z",
                "updated_at": "2020-11-08T14:57:59.000000Z"
            },
            {
                "id": 2854,
                "drug_id": 128,
                "brand_id": 561,
                "created_at": "2020-11-08T15:19:11.000000Z",
                "updated_at": "2020-11-08T15:19:11.000000Z"
            },
            {
                "id": 2855,
                "drug_id": 128,
                "brand_id": 562,
                "created_at": "2020-11-08T15:19:11.000000Z",
                "updated_at": "2020-11-08T15:19:11.000000Z"
            },
            {
                "id": 2856,
                "drug_id": 128,
                "brand_id": 563,
                "created_at": "2020-11-08T15:19:11.000000Z",
                "updated_at": "2020-11-08T15:19:11.000000Z"
            },
            {
                "id": 2857,
                "drug_id": 128,
                "brand_id": 564,
                "created_at": "2020-11-08T15:19:11.000000Z",
                "updated_at": "2020-11-08T15:19:11.000000Z"
            },
            {
                "id": 2858,
                "drug_id": 128,
                "brand_id": 565,
                "created_at": "2020-11-08T15:19:11.000000Z",
                "updated_at": "2020-11-08T15:19:11.000000Z"
            },
            {
                "id": 2859,
                "drug_id": 128,
                "brand_id": 566,
                "created_at": "2020-11-08T15:19:11.000000Z",
                "updated_at": "2020-11-08T15:19:11.000000Z"
            },
            {
                "id": 2860,
                "drug_id": 128,
                "brand_id": 567,
                "created_at": "2020-11-08T15:19:11.000000Z",
                "updated_at": "2020-11-08T15:19:11.000000Z"
            },
            {
                "id": 2861,
                "drug_id": 128,
                "brand_id": 568,
                "created_at": "2020-11-08T15:19:11.000000Z",
                "updated_at": "2020-11-08T15:19:11.000000Z"
            },
            {
                "id": 2862,
                "drug_id": 130,
                "brand_id": 570,
                "created_at": "2020-11-08T18:41:40.000000Z",
                "updated_at": "2020-11-08T18:41:40.000000Z"
            },
            {
                "id": 2863,
                "drug_id": 130,
                "brand_id": 571,
                "created_at": "2020-11-08T18:41:40.000000Z",
                "updated_at": "2020-11-08T18:41:40.000000Z"
            },
            {
                "id": 2864,
                "drug_id": 130,
                "brand_id": 572,
                "created_at": "2020-11-08T18:41:40.000000Z",
                "updated_at": "2020-11-08T18:41:40.000000Z"
            },
            {
                "id": 2869,
                "drug_id": 131,
                "brand_id": 573,
                "created_at": "2020-11-08T19:00:53.000000Z",
                "updated_at": "2020-11-08T19:00:53.000000Z"
            },
            {
                "id": 2870,
                "drug_id": 131,
                "brand_id": 574,
                "created_at": "2020-11-08T19:00:53.000000Z",
                "updated_at": "2020-11-08T19:00:53.000000Z"
            },
            {
                "id": 2871,
                "drug_id": 132,
                "brand_id": 575,
                "created_at": "2020-11-08T19:02:15.000000Z",
                "updated_at": "2020-11-08T19:02:15.000000Z"
            },
            {
                "id": 2872,
                "drug_id": 132,
                "brand_id": 576,
                "created_at": "2020-11-08T19:02:15.000000Z",
                "updated_at": "2020-11-08T19:02:15.000000Z"
            },
            {
                "id": 2873,
                "drug_id": 135,
                "brand_id": 579,
                "created_at": "2020-11-08T19:04:13.000000Z",
                "updated_at": "2020-11-08T19:04:13.000000Z"
            },
            {
                "id": 2874,
                "drug_id": 139,
                "brand_id": 583,
                "created_at": "2020-11-08T19:25:25.000000Z",
                "updated_at": "2020-11-08T19:25:25.000000Z"
            },
            {
                "id": 2875,
                "drug_id": 493,
                "brand_id": 2119,
                "created_at": "2020-11-08T19:34:23.000000Z",
                "updated_at": "2020-11-08T19:34:23.000000Z"
            },
            {
                "id": 2876,
                "drug_id": 493,
                "brand_id": 2120,
                "created_at": "2020-11-08T19:34:23.000000Z",
                "updated_at": "2020-11-08T19:34:23.000000Z"
            },
            {
                "id": 2877,
                "drug_id": 140,
                "brand_id": 584,
                "created_at": "2020-11-08T19:51:30.000000Z",
                "updated_at": "2020-11-08T19:51:30.000000Z"
            },
            {
                "id": 2878,
                "drug_id": 140,
                "brand_id": 585,
                "created_at": "2020-11-08T19:51:30.000000Z",
                "updated_at": "2020-11-08T19:51:30.000000Z"
            },
            {
                "id": 2879,
                "drug_id": 140,
                "brand_id": 586,
                "created_at": "2020-11-08T19:51:30.000000Z",
                "updated_at": "2020-11-08T19:51:30.000000Z"
            },
            {
                "id": 2880,
                "drug_id": 140,
                "brand_id": 587,
                "created_at": "2020-11-08T19:51:30.000000Z",
                "updated_at": "2020-11-08T19:51:30.000000Z"
            },
            {
                "id": 2881,
                "drug_id": 140,
                "brand_id": 588,
                "created_at": "2020-11-08T19:51:30.000000Z",
                "updated_at": "2020-11-08T19:51:30.000000Z"
            },
            {
                "id": 2882,
                "drug_id": 140,
                "brand_id": 589,
                "created_at": "2020-11-08T19:51:30.000000Z",
                "updated_at": "2020-11-08T19:51:30.000000Z"
            },
            {
                "id": 2883,
                "drug_id": 140,
                "brand_id": 590,
                "created_at": "2020-11-08T19:51:30.000000Z",
                "updated_at": "2020-11-08T19:51:30.000000Z"
            },
            {
                "id": 2884,
                "drug_id": 140,
                "brand_id": 591,
                "created_at": "2020-11-08T19:51:30.000000Z",
                "updated_at": "2020-11-08T19:51:30.000000Z"
            },
            {
                "id": 2885,
                "drug_id": 140,
                "brand_id": 592,
                "created_at": "2020-11-08T19:51:30.000000Z",
                "updated_at": "2020-11-08T19:51:30.000000Z"
            },
            {
                "id": 2886,
                "drug_id": 140,
                "brand_id": 593,
                "created_at": "2020-11-08T19:51:30.000000Z",
                "updated_at": "2020-11-08T19:51:30.000000Z"
            },
            {
                "id": 2887,
                "drug_id": 141,
                "brand_id": 594,
                "created_at": "2020-11-08T19:52:34.000000Z",
                "updated_at": "2020-11-08T19:52:34.000000Z"
            },
            {
                "id": 2888,
                "drug_id": 142,
                "brand_id": 595,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2889,
                "drug_id": 142,
                "brand_id": 595,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2890,
                "drug_id": 142,
                "brand_id": 595,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2891,
                "drug_id": 142,
                "brand_id": 596,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2892,
                "drug_id": 142,
                "brand_id": 597,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2893,
                "drug_id": 142,
                "brand_id": 598,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2894,
                "drug_id": 142,
                "brand_id": 599,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2895,
                "drug_id": 142,
                "brand_id": 600,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2896,
                "drug_id": 142,
                "brand_id": 601,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2897,
                "drug_id": 142,
                "brand_id": 602,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2898,
                "drug_id": 142,
                "brand_id": 603,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2899,
                "drug_id": 142,
                "brand_id": 604,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2900,
                "drug_id": 142,
                "brand_id": 605,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2901,
                "drug_id": 142,
                "brand_id": 606,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2902,
                "drug_id": 142,
                "brand_id": 607,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2903,
                "drug_id": 142,
                "brand_id": 608,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2904,
                "drug_id": 142,
                "brand_id": 609,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2905,
                "drug_id": 142,
                "brand_id": 610,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2906,
                "drug_id": 142,
                "brand_id": 611,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2907,
                "drug_id": 142,
                "brand_id": 612,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2908,
                "drug_id": 142,
                "brand_id": 613,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2909,
                "drug_id": 142,
                "brand_id": 614,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2910,
                "drug_id": 142,
                "brand_id": 615,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2911,
                "drug_id": 142,
                "brand_id": 616,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2912,
                "drug_id": 142,
                "brand_id": 617,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2913,
                "drug_id": 142,
                "brand_id": 618,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2914,
                "drug_id": 142,
                "brand_id": 619,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2915,
                "drug_id": 142,
                "brand_id": 620,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2916,
                "drug_id": 142,
                "brand_id": 621,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2917,
                "drug_id": 142,
                "brand_id": 622,
                "created_at": "2020-11-08T19:55:15.000000Z",
                "updated_at": "2020-11-08T19:55:15.000000Z"
            },
            {
                "id": 2918,
                "drug_id": 143,
                "brand_id": 623,
                "created_at": "2020-11-08T20:06:29.000000Z",
                "updated_at": "2020-11-08T20:06:29.000000Z"
            },
            {
                "id": 2919,
                "drug_id": 143,
                "brand_id": 624,
                "created_at": "2020-11-08T20:06:29.000000Z",
                "updated_at": "2020-11-08T20:06:29.000000Z"
            },
            {
                "id": 2920,
                "drug_id": 148,
                "brand_id": 725,
                "created_at": "2020-11-08T20:12:52.000000Z",
                "updated_at": "2020-11-08T20:12:52.000000Z"
            },
            {
                "id": 2921,
                "drug_id": 148,
                "brand_id": 726,
                "created_at": "2020-11-08T20:12:52.000000Z",
                "updated_at": "2020-11-08T20:12:52.000000Z"
            },
            {
                "id": 2922,
                "drug_id": 148,
                "brand_id": 727,
                "created_at": "2020-11-08T20:12:52.000000Z",
                "updated_at": "2020-11-08T20:12:52.000000Z"
            },
            {
                "id": 2923,
                "drug_id": 148,
                "brand_id": 728,
                "created_at": "2020-11-08T20:12:52.000000Z",
                "updated_at": "2020-11-08T20:12:52.000000Z"
            },
            {
                "id": 2924,
                "drug_id": 148,
                "brand_id": 729,
                "created_at": "2020-11-08T20:12:52.000000Z",
                "updated_at": "2020-11-08T20:12:52.000000Z"
            },
            {
                "id": 2925,
                "drug_id": 148,
                "brand_id": 730,
                "created_at": "2020-11-08T20:12:52.000000Z",
                "updated_at": "2020-11-08T20:12:52.000000Z"
            },
            {
                "id": 2926,
                "drug_id": 148,
                "brand_id": 731,
                "created_at": "2020-11-08T20:12:52.000000Z",
                "updated_at": "2020-11-08T20:12:52.000000Z"
            },
            {
                "id": 2927,
                "drug_id": 148,
                "brand_id": 732,
                "created_at": "2020-11-08T20:12:52.000000Z",
                "updated_at": "2020-11-08T20:12:52.000000Z"
            },
            {
                "id": 2928,
                "drug_id": 148,
                "brand_id": 733,
                "created_at": "2020-11-08T20:12:52.000000Z",
                "updated_at": "2020-11-08T20:12:52.000000Z"
            },
            {
                "id": 2929,
                "drug_id": 148,
                "brand_id": 734,
                "created_at": "2020-11-08T20:12:52.000000Z",
                "updated_at": "2020-11-08T20:12:52.000000Z"
            },
            {
                "id": 2930,
                "drug_id": 152,
                "brand_id": 740,
                "created_at": "2020-11-08T20:14:10.000000Z",
                "updated_at": "2020-11-08T20:14:10.000000Z"
            },
            {
                "id": 2931,
                "drug_id": 152,
                "brand_id": 741,
                "created_at": "2020-11-08T20:14:10.000000Z",
                "updated_at": "2020-11-08T20:14:10.000000Z"
            },
            {
                "id": 2932,
                "drug_id": 152,
                "brand_id": 742,
                "created_at": "2020-11-08T20:14:10.000000Z",
                "updated_at": "2020-11-08T20:14:10.000000Z"
            },
            {
                "id": 2933,
                "drug_id": 152,
                "brand_id": 743,
                "created_at": "2020-11-08T20:14:10.000000Z",
                "updated_at": "2020-11-08T20:14:10.000000Z"
            },
            {
                "id": 2934,
                "drug_id": 152,
                "brand_id": 744,
                "created_at": "2020-11-08T20:14:10.000000Z",
                "updated_at": "2020-11-08T20:14:10.000000Z"
            },
            {
                "id": 2935,
                "drug_id": 152,
                "brand_id": 745,
                "created_at": "2020-11-08T20:14:10.000000Z",
                "updated_at": "2020-11-08T20:14:10.000000Z"
            },
            {
                "id": 2936,
                "drug_id": 152,
                "brand_id": 746,
                "created_at": "2020-11-08T20:14:10.000000Z",
                "updated_at": "2020-11-08T20:14:10.000000Z"
            },
            {
                "id": 2937,
                "drug_id": 152,
                "brand_id": 747,
                "created_at": "2020-11-08T20:14:10.000000Z",
                "updated_at": "2020-11-08T20:14:10.000000Z"
            },
            {
                "id": 2938,
                "drug_id": 152,
                "brand_id": 748,
                "created_at": "2020-11-08T20:14:10.000000Z",
                "updated_at": "2020-11-08T20:14:10.000000Z"
            },
            {
                "id": 2939,
                "drug_id": 157,
                "brand_id": 752,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2940,
                "drug_id": 157,
                "brand_id": 753,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2941,
                "drug_id": 157,
                "brand_id": 754,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2942,
                "drug_id": 157,
                "brand_id": 755,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2943,
                "drug_id": 157,
                "brand_id": 756,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2944,
                "drug_id": 157,
                "brand_id": 757,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2945,
                "drug_id": 157,
                "brand_id": 758,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2946,
                "drug_id": 157,
                "brand_id": 759,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2947,
                "drug_id": 157,
                "brand_id": 760,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2948,
                "drug_id": 157,
                "brand_id": 761,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2949,
                "drug_id": 157,
                "brand_id": 762,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2950,
                "drug_id": 157,
                "brand_id": 763,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2951,
                "drug_id": 157,
                "brand_id": 764,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2952,
                "drug_id": 157,
                "brand_id": 765,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2953,
                "drug_id": 157,
                "brand_id": 766,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2954,
                "drug_id": 157,
                "brand_id": 767,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2955,
                "drug_id": 157,
                "brand_id": 768,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2956,
                "drug_id": 157,
                "brand_id": 769,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2957,
                "drug_id": 157,
                "brand_id": 770,
                "created_at": "2020-11-08T20:17:12.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z"
            },
            {
                "id": 2958,
                "drug_id": 162,
                "brand_id": 792,
                "created_at": "2020-11-08T20:23:39.000000Z",
                "updated_at": "2020-11-08T20:23:39.000000Z"
            },
            {
                "id": 2959,
                "drug_id": 163,
                "brand_id": 793,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2960,
                "drug_id": 163,
                "brand_id": 794,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2961,
                "drug_id": 163,
                "brand_id": 795,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2962,
                "drug_id": 163,
                "brand_id": 796,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2963,
                "drug_id": 163,
                "brand_id": 797,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2964,
                "drug_id": 163,
                "brand_id": 798,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2965,
                "drug_id": 163,
                "brand_id": 799,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2966,
                "drug_id": 163,
                "brand_id": 800,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2967,
                "drug_id": 163,
                "brand_id": 801,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2968,
                "drug_id": 163,
                "brand_id": 802,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2969,
                "drug_id": 163,
                "brand_id": 803,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2970,
                "drug_id": 163,
                "brand_id": 804,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2971,
                "drug_id": 163,
                "brand_id": 805,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2972,
                "drug_id": 163,
                "brand_id": 806,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2973,
                "drug_id": 163,
                "brand_id": 807,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2974,
                "drug_id": 163,
                "brand_id": 808,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2975,
                "drug_id": 163,
                "brand_id": 809,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2976,
                "drug_id": 163,
                "brand_id": 810,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2977,
                "drug_id": 163,
                "brand_id": 811,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2978,
                "drug_id": 163,
                "brand_id": 812,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2979,
                "drug_id": 163,
                "brand_id": 813,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2980,
                "drug_id": 163,
                "brand_id": 814,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2981,
                "drug_id": 163,
                "brand_id": 815,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2982,
                "drug_id": 163,
                "brand_id": 816,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2983,
                "drug_id": 163,
                "brand_id": 817,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2984,
                "drug_id": 163,
                "brand_id": 818,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2985,
                "drug_id": 163,
                "brand_id": 819,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2986,
                "drug_id": 163,
                "brand_id": 820,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2987,
                "drug_id": 163,
                "brand_id": 821,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2988,
                "drug_id": 163,
                "brand_id": 822,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2989,
                "drug_id": 163,
                "brand_id": 823,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2990,
                "drug_id": 163,
                "brand_id": 824,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2991,
                "drug_id": 163,
                "brand_id": 825,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2992,
                "drug_id": 163,
                "brand_id": 826,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2993,
                "drug_id": 163,
                "brand_id": 827,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2994,
                "drug_id": 163,
                "brand_id": 828,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2995,
                "drug_id": 163,
                "brand_id": 829,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2996,
                "drug_id": 163,
                "brand_id": 830,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2997,
                "drug_id": 163,
                "brand_id": 831,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2998,
                "drug_id": 163,
                "brand_id": 832,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 2999,
                "drug_id": 163,
                "brand_id": 833,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3000,
                "drug_id": 163,
                "brand_id": 834,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3001,
                "drug_id": 163,
                "brand_id": 835,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3002,
                "drug_id": 163,
                "brand_id": 836,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3003,
                "drug_id": 163,
                "brand_id": 837,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3004,
                "drug_id": 163,
                "brand_id": 838,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3005,
                "drug_id": 163,
                "brand_id": 839,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3006,
                "drug_id": 163,
                "brand_id": 840,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3007,
                "drug_id": 163,
                "brand_id": 841,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3008,
                "drug_id": 163,
                "brand_id": 842,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3009,
                "drug_id": 163,
                "brand_id": 843,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3010,
                "drug_id": 163,
                "brand_id": 844,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3011,
                "drug_id": 163,
                "brand_id": 845,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3012,
                "drug_id": 163,
                "brand_id": 846,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3013,
                "drug_id": 163,
                "brand_id": 847,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3014,
                "drug_id": 163,
                "brand_id": 848,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3015,
                "drug_id": 163,
                "brand_id": 849,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3016,
                "drug_id": 163,
                "brand_id": 850,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3017,
                "drug_id": 163,
                "brand_id": 851,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3018,
                "drug_id": 163,
                "brand_id": 852,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3019,
                "drug_id": 163,
                "brand_id": 853,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3020,
                "drug_id": 163,
                "brand_id": 854,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3021,
                "drug_id": 163,
                "brand_id": 855,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3022,
                "drug_id": 163,
                "brand_id": 856,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3023,
                "drug_id": 163,
                "brand_id": 857,
                "created_at": "2020-11-08T20:27:05.000000Z",
                "updated_at": "2020-11-08T20:27:05.000000Z"
            },
            {
                "id": 3024,
                "drug_id": 168,
                "brand_id": 861,
                "created_at": "2020-11-08T20:32:59.000000Z",
                "updated_at": "2020-11-08T20:32:59.000000Z"
            },
            {
                "id": 3025,
                "drug_id": 169,
                "brand_id": 862,
                "created_at": "2020-11-08T20:35:57.000000Z",
                "updated_at": "2020-11-08T20:35:57.000000Z"
            },
            {
                "id": 3026,
                "drug_id": 169,
                "brand_id": 863,
                "created_at": "2020-11-08T20:35:57.000000Z",
                "updated_at": "2020-11-08T20:35:57.000000Z"
            },
            {
                "id": 3027,
                "drug_id": 169,
                "brand_id": 864,
                "created_at": "2020-11-08T20:35:57.000000Z",
                "updated_at": "2020-11-08T20:35:57.000000Z"
            },
            {
                "id": 3028,
                "drug_id": 171,
                "brand_id": 869,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3029,
                "drug_id": 171,
                "brand_id": 870,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3030,
                "drug_id": 171,
                "brand_id": 871,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3031,
                "drug_id": 171,
                "brand_id": 872,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3032,
                "drug_id": 171,
                "brand_id": 873,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3033,
                "drug_id": 171,
                "brand_id": 874,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3034,
                "drug_id": 171,
                "brand_id": 875,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3035,
                "drug_id": 171,
                "brand_id": 876,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3036,
                "drug_id": 171,
                "brand_id": 877,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3037,
                "drug_id": 171,
                "brand_id": 878,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3038,
                "drug_id": 171,
                "brand_id": 879,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3039,
                "drug_id": 171,
                "brand_id": 880,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3040,
                "drug_id": 171,
                "brand_id": 881,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3041,
                "drug_id": 171,
                "brand_id": 882,
                "created_at": "2020-11-08T20:50:02.000000Z",
                "updated_at": "2020-11-08T20:50:02.000000Z"
            },
            {
                "id": 3042,
                "drug_id": 173,
                "brand_id": 886,
                "created_at": "2020-11-09T20:20:37.000000Z",
                "updated_at": "2020-11-09T20:20:37.000000Z"
            },
            {
                "id": 3043,
                "drug_id": 173,
                "brand_id": 887,
                "created_at": "2020-11-09T20:20:37.000000Z",
                "updated_at": "2020-11-09T20:20:37.000000Z"
            },
            {
                "id": 3044,
                "drug_id": 173,
                "brand_id": 888,
                "created_at": "2020-11-09T20:20:37.000000Z",
                "updated_at": "2020-11-09T20:20:37.000000Z"
            },
            {
                "id": 3045,
                "drug_id": 173,
                "brand_id": 889,
                "created_at": "2020-11-09T20:20:37.000000Z",
                "updated_at": "2020-11-09T20:20:37.000000Z"
            },
            {
                "id": 3046,
                "drug_id": 177,
                "brand_id": 899,
                "created_at": "2020-11-09T20:26:31.000000Z",
                "updated_at": "2020-11-09T20:26:31.000000Z"
            },
            {
                "id": 3047,
                "drug_id": 177,
                "brand_id": 900,
                "created_at": "2020-11-09T20:26:31.000000Z",
                "updated_at": "2020-11-09T20:26:31.000000Z"
            },
            {
                "id": 3048,
                "drug_id": 177,
                "brand_id": 901,
                "created_at": "2020-11-09T20:26:31.000000Z",
                "updated_at": "2020-11-09T20:26:31.000000Z"
            },
            {
                "id": 3049,
                "drug_id": 177,
                "brand_id": 902,
                "created_at": "2020-11-09T20:26:31.000000Z",
                "updated_at": "2020-11-09T20:26:31.000000Z"
            },
            {
                "id": 3050,
                "drug_id": 177,
                "brand_id": 903,
                "created_at": "2020-11-09T20:26:31.000000Z",
                "updated_at": "2020-11-09T20:26:31.000000Z"
            },
            {
                "id": 3051,
                "drug_id": 177,
                "brand_id": 904,
                "created_at": "2020-11-09T20:26:31.000000Z",
                "updated_at": "2020-11-09T20:26:31.000000Z"
            },
            {
                "id": 3052,
                "drug_id": 177,
                "brand_id": 905,
                "created_at": "2020-11-09T20:26:31.000000Z",
                "updated_at": "2020-11-09T20:26:31.000000Z"
            },
            {
                "id": 3055,
                "drug_id": 178,
                "brand_id": 906,
                "created_at": "2020-11-09T20:45:10.000000Z",
                "updated_at": "2020-11-09T20:45:10.000000Z"
            },
            {
                "id": 3056,
                "drug_id": 178,
                "brand_id": 907,
                "created_at": "2020-11-09T20:45:10.000000Z",
                "updated_at": "2020-11-09T20:45:10.000000Z"
            },
            {
                "id": 3057,
                "drug_id": 181,
                "brand_id": 937,
                "created_at": "2020-11-09T21:09:11.000000Z",
                "updated_at": "2020-11-09T21:09:11.000000Z"
            },
            {
                "id": 3058,
                "drug_id": 494,
                "brand_id": 2121,
                "created_at": "2020-11-11T18:44:40.000000Z",
                "updated_at": "2020-11-11T18:44:40.000000Z"
            },
            {
                "id": 3059,
                "drug_id": 494,
                "brand_id": 2121,
                "created_at": "2020-11-11T18:44:40.000000Z",
                "updated_at": "2020-11-11T18:44:40.000000Z"
            },
            {
                "id": 3060,
                "drug_id": 494,
                "brand_id": 2122,
                "created_at": "2020-11-11T18:44:40.000000Z",
                "updated_at": "2020-11-11T18:44:40.000000Z"
            },
            {
                "id": 3061,
                "drug_id": 185,
                "brand_id": 943,
                "created_at": "2020-11-11T18:54:32.000000Z",
                "updated_at": "2020-11-11T18:54:32.000000Z"
            },
            {
                "id": 3062,
                "drug_id": 185,
                "brand_id": 944,
                "created_at": "2020-11-11T18:54:32.000000Z",
                "updated_at": "2020-11-11T18:54:32.000000Z"
            },
            {
                "id": 3063,
                "drug_id": 185,
                "brand_id": 945,
                "created_at": "2020-11-11T18:54:32.000000Z",
                "updated_at": "2020-11-11T18:54:32.000000Z"
            },
            {
                "id": 3064,
                "drug_id": 185,
                "brand_id": 946,
                "created_at": "2020-11-11T18:54:32.000000Z",
                "updated_at": "2020-11-11T18:54:32.000000Z"
            },
            {
                "id": 3065,
                "drug_id": 185,
                "brand_id": 947,
                "created_at": "2020-11-11T18:54:32.000000Z",
                "updated_at": "2020-11-11T18:54:32.000000Z"
            },
            {
                "id": 3066,
                "drug_id": 186,
                "brand_id": 948,
                "created_at": "2020-11-11T18:58:33.000000Z",
                "updated_at": "2020-11-11T18:58:33.000000Z"
            },
            {
                "id": 3067,
                "drug_id": 186,
                "brand_id": 949,
                "created_at": "2020-11-11T18:58:33.000000Z",
                "updated_at": "2020-11-11T18:58:33.000000Z"
            },
            {
                "id": 3068,
                "drug_id": 189,
                "brand_id": 957,
                "created_at": "2020-11-11T19:38:13.000000Z",
                "updated_at": "2020-11-11T19:38:13.000000Z"
            },
            {
                "id": 3069,
                "drug_id": 189,
                "brand_id": 958,
                "created_at": "2020-11-11T19:38:13.000000Z",
                "updated_at": "2020-11-11T19:38:13.000000Z"
            },
            {
                "id": 3070,
                "drug_id": 189,
                "brand_id": 959,
                "created_at": "2020-11-11T19:38:13.000000Z",
                "updated_at": "2020-11-11T19:38:13.000000Z"
            },
            {
                "id": 3071,
                "drug_id": 189,
                "brand_id": 960,
                "created_at": "2020-11-11T19:38:13.000000Z",
                "updated_at": "2020-11-11T19:38:13.000000Z"
            },
            {
                "id": 3072,
                "drug_id": 189,
                "brand_id": 961,
                "created_at": "2020-11-11T19:38:13.000000Z",
                "updated_at": "2020-11-11T19:38:13.000000Z"
            },
            {
                "id": 3073,
                "drug_id": 189,
                "brand_id": 962,
                "created_at": "2020-11-11T19:38:13.000000Z",
                "updated_at": "2020-11-11T19:38:13.000000Z"
            },
            {
                "id": 3074,
                "drug_id": 189,
                "brand_id": 963,
                "created_at": "2020-11-11T19:38:13.000000Z",
                "updated_at": "2020-11-11T19:38:13.000000Z"
            },
            {
                "id": 3109,
                "drug_id": 190,
                "brand_id": 964,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3110,
                "drug_id": 190,
                "brand_id": 965,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3111,
                "drug_id": 190,
                "brand_id": 966,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3112,
                "drug_id": 190,
                "brand_id": 967,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3113,
                "drug_id": 190,
                "brand_id": 968,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3114,
                "drug_id": 190,
                "brand_id": 969,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3115,
                "drug_id": 190,
                "brand_id": 970,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3116,
                "drug_id": 190,
                "brand_id": 971,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3117,
                "drug_id": 190,
                "brand_id": 972,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3118,
                "drug_id": 190,
                "brand_id": 973,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3119,
                "drug_id": 190,
                "brand_id": 974,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3120,
                "drug_id": 190,
                "brand_id": 975,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3121,
                "drug_id": 190,
                "brand_id": 976,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3122,
                "drug_id": 190,
                "brand_id": 977,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3123,
                "drug_id": 190,
                "brand_id": 978,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3124,
                "drug_id": 190,
                "brand_id": 979,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3125,
                "drug_id": 190,
                "brand_id": 980,
                "created_at": "2020-11-11T20:06:38.000000Z",
                "updated_at": "2020-11-11T20:06:38.000000Z"
            },
            {
                "id": 3126,
                "drug_id": 192,
                "brand_id": 994,
                "created_at": "2020-11-11T20:10:32.000000Z",
                "updated_at": "2020-11-11T20:10:32.000000Z"
            },
            {
                "id": 3127,
                "drug_id": 192,
                "brand_id": 995,
                "created_at": "2020-11-11T20:10:32.000000Z",
                "updated_at": "2020-11-11T20:10:32.000000Z"
            },
            {
                "id": 3128,
                "drug_id": 192,
                "brand_id": 996,
                "created_at": "2020-11-11T20:10:32.000000Z",
                "updated_at": "2020-11-11T20:10:32.000000Z"
            },
            {
                "id": 3129,
                "drug_id": 192,
                "brand_id": 997,
                "created_at": "2020-11-11T20:10:32.000000Z",
                "updated_at": "2020-11-11T20:10:32.000000Z"
            },
            {
                "id": 3130,
                "drug_id": 192,
                "brand_id": 998,
                "created_at": "2020-11-11T20:10:32.000000Z",
                "updated_at": "2020-11-11T20:10:32.000000Z"
            },
            {
                "id": 3131,
                "drug_id": 194,
                "brand_id": 1001,
                "created_at": "2020-11-11T20:30:28.000000Z",
                "updated_at": "2020-11-11T20:30:28.000000Z"
            },
            {
                "id": 3132,
                "drug_id": 195,
                "brand_id": 1002,
                "created_at": "2020-11-11T20:42:59.000000Z",
                "updated_at": "2020-11-11T20:42:59.000000Z"
            },
            {
                "id": 3133,
                "drug_id": 195,
                "brand_id": 1002,
                "created_at": "2020-11-11T20:42:59.000000Z",
                "updated_at": "2020-11-11T20:42:59.000000Z"
            },
            {
                "id": 3134,
                "drug_id": 195,
                "brand_id": 1003,
                "created_at": "2020-11-11T20:42:59.000000Z",
                "updated_at": "2020-11-11T20:42:59.000000Z"
            },
            {
                "id": 3135,
                "drug_id": 195,
                "brand_id": 1004,
                "created_at": "2020-11-11T20:42:59.000000Z",
                "updated_at": "2020-11-11T20:42:59.000000Z"
            },
            {
                "id": 3137,
                "drug_id": 196,
                "brand_id": 1005,
                "created_at": "2020-11-11T20:58:41.000000Z",
                "updated_at": "2020-11-11T20:58:41.000000Z"
            },
            {
                "id": 3138,
                "drug_id": 197,
                "brand_id": 1006,
                "created_at": "2020-11-11T21:00:58.000000Z",
                "updated_at": "2020-11-11T21:00:58.000000Z"
            },
            {
                "id": 3139,
                "drug_id": 197,
                "brand_id": 1007,
                "created_at": "2020-11-11T21:00:58.000000Z",
                "updated_at": "2020-11-11T21:00:58.000000Z"
            },
            {
                "id": 3140,
                "drug_id": 199,
                "brand_id": 1013,
                "created_at": "2020-11-11T21:01:57.000000Z",
                "updated_at": "2020-11-11T21:01:57.000000Z"
            },
            {
                "id": 3141,
                "drug_id": 199,
                "brand_id": 1014,
                "created_at": "2020-11-11T21:01:57.000000Z",
                "updated_at": "2020-11-11T21:01:57.000000Z"
            },
            {
                "id": 3142,
                "drug_id": 199,
                "brand_id": 1015,
                "created_at": "2020-11-11T21:01:57.000000Z",
                "updated_at": "2020-11-11T21:01:57.000000Z"
            },
            {
                "id": 3143,
                "drug_id": 199,
                "brand_id": 1016,
                "created_at": "2020-11-11T21:01:57.000000Z",
                "updated_at": "2020-11-11T21:01:57.000000Z"
            },
            {
                "id": 3144,
                "drug_id": 199,
                "brand_id": 1017,
                "created_at": "2020-11-11T21:01:57.000000Z",
                "updated_at": "2020-11-11T21:01:57.000000Z"
            },
            {
                "id": 3152,
                "drug_id": 200,
                "brand_id": 1018,
                "created_at": "2020-11-11T21:11:47.000000Z",
                "updated_at": "2020-11-11T21:11:47.000000Z"
            },
            {
                "id": 3153,
                "drug_id": 200,
                "brand_id": 1019,
                "created_at": "2020-11-11T21:11:47.000000Z",
                "updated_at": "2020-11-11T21:11:47.000000Z"
            },
            {
                "id": 3154,
                "drug_id": 200,
                "brand_id": 1020,
                "created_at": "2020-11-11T21:11:47.000000Z",
                "updated_at": "2020-11-11T21:11:47.000000Z"
            },
            {
                "id": 3155,
                "drug_id": 200,
                "brand_id": 1021,
                "created_at": "2020-11-11T21:11:47.000000Z",
                "updated_at": "2020-11-11T21:11:47.000000Z"
            },
            {
                "id": 3156,
                "drug_id": 200,
                "brand_id": 1022,
                "created_at": "2020-11-11T21:11:47.000000Z",
                "updated_at": "2020-11-11T21:11:47.000000Z"
            },
            {
                "id": 3157,
                "drug_id": 200,
                "brand_id": 1023,
                "created_at": "2020-11-11T21:11:47.000000Z",
                "updated_at": "2020-11-11T21:11:47.000000Z"
            },
            {
                "id": 3158,
                "drug_id": 200,
                "brand_id": 1024,
                "created_at": "2020-11-11T21:11:47.000000Z",
                "updated_at": "2020-11-11T21:11:47.000000Z"
            },
            {
                "id": 3159,
                "drug_id": 202,
                "brand_id": 1033,
                "created_at": "2020-11-11T21:15:05.000000Z",
                "updated_at": "2020-11-11T21:15:05.000000Z"
            },
            {
                "id": 3160,
                "drug_id": 202,
                "brand_id": 1034,
                "created_at": "2020-11-11T21:15:05.000000Z",
                "updated_at": "2020-11-11T21:15:05.000000Z"
            },
            {
                "id": 3161,
                "drug_id": 202,
                "brand_id": 1035,
                "created_at": "2020-11-11T21:15:05.000000Z",
                "updated_at": "2020-11-11T21:15:05.000000Z"
            },
            {
                "id": 3162,
                "drug_id": 202,
                "brand_id": 1036,
                "created_at": "2020-11-11T21:15:05.000000Z",
                "updated_at": "2020-11-11T21:15:05.000000Z"
            },
            {
                "id": 3171,
                "drug_id": 201,
                "brand_id": 1025,
                "created_at": "2020-11-11T21:21:10.000000Z",
                "updated_at": "2020-11-11T21:21:10.000000Z"
            },
            {
                "id": 3172,
                "drug_id": 201,
                "brand_id": 1026,
                "created_at": "2020-11-11T21:21:10.000000Z",
                "updated_at": "2020-11-11T21:21:10.000000Z"
            },
            {
                "id": 3173,
                "drug_id": 201,
                "brand_id": 1027,
                "created_at": "2020-11-11T21:21:10.000000Z",
                "updated_at": "2020-11-11T21:21:10.000000Z"
            },
            {
                "id": 3174,
                "drug_id": 201,
                "brand_id": 1028,
                "created_at": "2020-11-11T21:21:10.000000Z",
                "updated_at": "2020-11-11T21:21:10.000000Z"
            },
            {
                "id": 3175,
                "drug_id": 201,
                "brand_id": 1029,
                "created_at": "2020-11-11T21:21:10.000000Z",
                "updated_at": "2020-11-11T21:21:10.000000Z"
            },
            {
                "id": 3176,
                "drug_id": 201,
                "brand_id": 1030,
                "created_at": "2020-11-11T21:21:10.000000Z",
                "updated_at": "2020-11-11T21:21:10.000000Z"
            },
            {
                "id": 3177,
                "drug_id": 201,
                "brand_id": 1031,
                "created_at": "2020-11-11T21:21:10.000000Z",
                "updated_at": "2020-11-11T21:21:10.000000Z"
            },
            {
                "id": 3178,
                "drug_id": 201,
                "brand_id": 1032,
                "created_at": "2020-11-11T21:21:10.000000Z",
                "updated_at": "2020-11-11T21:21:10.000000Z"
            },
            {
                "id": 3189,
                "drug_id": 205,
                "brand_id": 1040,
                "created_at": "2020-11-11T21:24:29.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z"
            },
            {
                "id": 3190,
                "drug_id": 205,
                "brand_id": 1041,
                "created_at": "2020-11-11T21:24:29.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z"
            },
            {
                "id": 3191,
                "drug_id": 205,
                "brand_id": 1042,
                "created_at": "2020-11-11T21:24:29.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z"
            },
            {
                "id": 3192,
                "drug_id": 205,
                "brand_id": 1043,
                "created_at": "2020-11-11T21:24:29.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z"
            },
            {
                "id": 3193,
                "drug_id": 205,
                "brand_id": 1044,
                "created_at": "2020-11-11T21:24:29.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z"
            },
            {
                "id": 3194,
                "drug_id": 205,
                "brand_id": 1045,
                "created_at": "2020-11-11T21:24:29.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z"
            },
            {
                "id": 3195,
                "drug_id": 205,
                "brand_id": 1046,
                "created_at": "2020-11-11T21:24:29.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z"
            },
            {
                "id": 3196,
                "drug_id": 205,
                "brand_id": 1047,
                "created_at": "2020-11-11T21:24:29.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z"
            },
            {
                "id": 3197,
                "drug_id": 205,
                "brand_id": 1048,
                "created_at": "2020-11-11T21:24:29.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z"
            },
            {
                "id": 3198,
                "drug_id": 205,
                "brand_id": 1049,
                "created_at": "2020-11-11T21:24:29.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z"
            },
            {
                "id": 3199,
                "drug_id": 206,
                "brand_id": 1050,
                "created_at": "2020-11-12T19:10:29.000000Z",
                "updated_at": "2020-11-12T19:10:29.000000Z"
            },
            {
                "id": 3200,
                "drug_id": 206,
                "brand_id": 1051,
                "created_at": "2020-11-12T19:10:29.000000Z",
                "updated_at": "2020-11-12T19:10:29.000000Z"
            },
            {
                "id": 3201,
                "drug_id": 210,
                "brand_id": 1070,
                "created_at": "2020-11-12T19:25:52.000000Z",
                "updated_at": "2020-11-12T19:25:52.000000Z"
            },
            {
                "id": 3203,
                "drug_id": 211,
                "brand_id": 1072,
                "created_at": "2020-11-12T20:39:03.000000Z",
                "updated_at": "2020-11-12T20:39:03.000000Z"
            },
            {
                "id": 3204,
                "drug_id": 211,
                "brand_id": 1071,
                "created_at": "2020-11-12T20:39:03.000000Z",
                "updated_at": "2020-11-12T20:39:03.000000Z"
            },
            {
                "id": 3205,
                "drug_id": 211,
                "brand_id": 1073,
                "created_at": "2020-11-12T20:39:03.000000Z",
                "updated_at": "2020-11-12T20:39:03.000000Z"
            },
            {
                "id": 3206,
                "drug_id": 211,
                "brand_id": 1072,
                "created_at": "2020-11-12T20:39:03.000000Z",
                "updated_at": "2020-11-12T20:39:03.000000Z"
            },
            {
                "id": 3207,
                "drug_id": 211,
                "brand_id": 1074,
                "created_at": "2020-11-12T20:39:03.000000Z",
                "updated_at": "2020-11-12T20:39:03.000000Z"
            },
            {
                "id": 3208,
                "drug_id": 211,
                "brand_id": 1073,
                "created_at": "2020-11-12T20:39:03.000000Z",
                "updated_at": "2020-11-12T20:39:03.000000Z"
            },
            {
                "id": 3209,
                "drug_id": 211,
                "brand_id": 1074,
                "created_at": "2020-11-12T20:39:03.000000Z",
                "updated_at": "2020-11-12T20:39:03.000000Z"
            },
            {
                "id": 3210,
                "drug_id": 216,
                "brand_id": 1087,
                "created_at": "2020-11-12T20:41:04.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z"
            },
            {
                "id": 3211,
                "drug_id": 216,
                "brand_id": 1088,
                "created_at": "2020-11-12T20:41:04.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z"
            },
            {
                "id": 3212,
                "drug_id": 216,
                "brand_id": 1089,
                "created_at": "2020-11-12T20:41:04.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z"
            },
            {
                "id": 3213,
                "drug_id": 216,
                "brand_id": 1090,
                "created_at": "2020-11-12T20:41:04.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z"
            },
            {
                "id": 3214,
                "drug_id": 216,
                "brand_id": 1091,
                "created_at": "2020-11-12T20:41:04.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z"
            },
            {
                "id": 3215,
                "drug_id": 216,
                "brand_id": 1092,
                "created_at": "2020-11-12T20:41:04.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z"
            },
            {
                "id": 3216,
                "drug_id": 216,
                "brand_id": 1093,
                "created_at": "2020-11-12T20:41:04.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z"
            },
            {
                "id": 3217,
                "drug_id": 218,
                "brand_id": 1095,
                "created_at": "2020-11-12T20:50:11.000000Z",
                "updated_at": "2020-11-12T20:50:11.000000Z"
            },
            {
                "id": 3218,
                "drug_id": 218,
                "brand_id": 1096,
                "created_at": "2020-11-12T20:50:11.000000Z",
                "updated_at": "2020-11-12T20:50:11.000000Z"
            },
            {
                "id": 3219,
                "drug_id": 218,
                "brand_id": 1097,
                "created_at": "2020-11-12T20:50:11.000000Z",
                "updated_at": "2020-11-12T20:50:11.000000Z"
            },
            {
                "id": 3220,
                "drug_id": 218,
                "brand_id": 1098,
                "created_at": "2020-11-12T20:50:11.000000Z",
                "updated_at": "2020-11-12T20:50:11.000000Z"
            },
            {
                "id": 3221,
                "drug_id": 218,
                "brand_id": 1099,
                "created_at": "2020-11-12T20:50:11.000000Z",
                "updated_at": "2020-11-12T20:50:11.000000Z"
            },
            {
                "id": 3222,
                "drug_id": 221,
                "brand_id": 1104,
                "created_at": "2020-11-12T20:59:50.000000Z",
                "updated_at": "2020-11-12T20:59:50.000000Z"
            },
            {
                "id": 3259,
                "drug_id": 231,
                "brand_id": 1138,
                "created_at": "2020-11-16T00:44:22.000000Z",
                "updated_at": "2020-11-16T00:44:22.000000Z"
            },
            {
                "id": 3260,
                "drug_id": 231,
                "brand_id": 1139,
                "created_at": "2020-11-16T00:44:22.000000Z",
                "updated_at": "2020-11-16T00:44:22.000000Z"
            },
            {
                "id": 3261,
                "drug_id": 231,
                "brand_id": 1140,
                "created_at": "2020-11-16T00:44:22.000000Z",
                "updated_at": "2020-11-16T00:44:22.000000Z"
            },
            {
                "id": 3262,
                "drug_id": 231,
                "brand_id": 1141,
                "created_at": "2020-11-16T00:44:22.000000Z",
                "updated_at": "2020-11-16T00:44:22.000000Z"
            },
            {
                "id": 3263,
                "drug_id": 231,
                "brand_id": 1142,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3264,
                "drug_id": 231,
                "brand_id": 1143,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3265,
                "drug_id": 231,
                "brand_id": 1144,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3266,
                "drug_id": 231,
                "brand_id": 1145,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3267,
                "drug_id": 231,
                "brand_id": 1146,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3268,
                "drug_id": 231,
                "brand_id": 1147,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3269,
                "drug_id": 231,
                "brand_id": 1148,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3270,
                "drug_id": 231,
                "brand_id": 1149,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3271,
                "drug_id": 231,
                "brand_id": 1150,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3272,
                "drug_id": 231,
                "brand_id": 1151,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3273,
                "drug_id": 231,
                "brand_id": 1152,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3274,
                "drug_id": 231,
                "brand_id": 1153,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3275,
                "drug_id": 231,
                "brand_id": 1154,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3276,
                "drug_id": 231,
                "brand_id": 1155,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3277,
                "drug_id": 231,
                "brand_id": 1156,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3278,
                "drug_id": 231,
                "brand_id": 1157,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3279,
                "drug_id": 231,
                "brand_id": 1158,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3280,
                "drug_id": 231,
                "brand_id": 1159,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3281,
                "drug_id": 231,
                "brand_id": 1160,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3282,
                "drug_id": 231,
                "brand_id": 1161,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3283,
                "drug_id": 231,
                "brand_id": 1162,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3284,
                "drug_id": 231,
                "brand_id": 1163,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3285,
                "drug_id": 231,
                "brand_id": 1164,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3286,
                "drug_id": 231,
                "brand_id": 1165,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3287,
                "drug_id": 231,
                "brand_id": 1166,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3288,
                "drug_id": 231,
                "brand_id": 1167,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3289,
                "drug_id": 231,
                "brand_id": 1168,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3290,
                "drug_id": 231,
                "brand_id": 1169,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3291,
                "drug_id": 231,
                "brand_id": 1170,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3292,
                "drug_id": 231,
                "brand_id": 1171,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3293,
                "drug_id": 231,
                "brand_id": 1172,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3294,
                "drug_id": 231,
                "brand_id": 1173,
                "created_at": "2020-11-16T00:44:23.000000Z",
                "updated_at": "2020-11-16T00:44:23.000000Z"
            },
            {
                "id": 3295,
                "drug_id": 232,
                "brand_id": 1174,
                "created_at": "2020-11-16T01:35:01.000000Z",
                "updated_at": "2020-11-16T01:35:01.000000Z"
            },
            {
                "id": 3296,
                "drug_id": 233,
                "brand_id": 1175,
                "created_at": "2020-11-16T01:38:02.000000Z",
                "updated_at": "2020-11-16T01:38:02.000000Z"
            },
            {
                "id": 3297,
                "drug_id": 235,
                "brand_id": 1178,
                "created_at": "2020-11-16T01:48:10.000000Z",
                "updated_at": "2020-11-16T01:48:10.000000Z"
            },
            {
                "id": 3298,
                "drug_id": 238,
                "brand_id": 1182,
                "created_at": "2020-11-16T01:50:27.000000Z",
                "updated_at": "2020-11-16T01:50:27.000000Z"
            },
            {
                "id": 3299,
                "drug_id": 240,
                "brand_id": 1184,
                "created_at": "2020-11-16T02:02:13.000000Z",
                "updated_at": "2020-11-16T02:02:13.000000Z"
            },
            {
                "id": 3300,
                "drug_id": 241,
                "brand_id": 1185,
                "created_at": "2020-11-16T02:05:57.000000Z",
                "updated_at": "2020-11-16T02:05:57.000000Z"
            },
            {
                "id": 3301,
                "drug_id": 241,
                "brand_id": 1186,
                "created_at": "2020-11-16T02:05:57.000000Z",
                "updated_at": "2020-11-16T02:05:57.000000Z"
            },
            {
                "id": 3324,
                "drug_id": 247,
                "brand_id": 1194,
                "created_at": "2020-11-16T02:16:30.000000Z",
                "updated_at": "2020-11-16T02:16:30.000000Z"
            },
            {
                "id": 3325,
                "drug_id": 247,
                "brand_id": 1195,
                "created_at": "2020-11-16T02:16:30.000000Z",
                "updated_at": "2020-11-16T02:16:30.000000Z"
            },
            {
                "id": 3326,
                "drug_id": 247,
                "brand_id": 1196,
                "created_at": "2020-11-16T02:16:30.000000Z",
                "updated_at": "2020-11-16T02:16:30.000000Z"
            },
            {
                "id": 3327,
                "drug_id": 247,
                "brand_id": 1197,
                "created_at": "2020-11-16T02:16:30.000000Z",
                "updated_at": "2020-11-16T02:16:30.000000Z"
            },
            {
                "id": 3328,
                "drug_id": 247,
                "brand_id": 1198,
                "created_at": "2020-11-16T02:16:30.000000Z",
                "updated_at": "2020-11-16T02:16:30.000000Z"
            },
            {
                "id": 3329,
                "drug_id": 247,
                "brand_id": 1199,
                "created_at": "2020-11-16T02:16:30.000000Z",
                "updated_at": "2020-11-16T02:16:30.000000Z"
            },
            {
                "id": 3330,
                "drug_id": 247,
                "brand_id": 1200,
                "created_at": "2020-11-16T02:16:30.000000Z",
                "updated_at": "2020-11-16T02:16:30.000000Z"
            },
            {
                "id": 3331,
                "drug_id": 247,
                "brand_id": 1201,
                "created_at": "2020-11-16T02:16:30.000000Z",
                "updated_at": "2020-11-16T02:16:30.000000Z"
            },
            {
                "id": 3332,
                "drug_id": 247,
                "brand_id": 1202,
                "created_at": "2020-11-16T02:16:30.000000Z",
                "updated_at": "2020-11-16T02:16:30.000000Z"
            },
            {
                "id": 3333,
                "drug_id": 247,
                "brand_id": 1203,
                "created_at": "2020-11-16T02:16:30.000000Z",
                "updated_at": "2020-11-16T02:16:30.000000Z"
            },
            {
                "id": 3334,
                "drug_id": 247,
                "brand_id": 1204,
                "created_at": "2020-11-16T02:16:30.000000Z",
                "updated_at": "2020-11-16T02:16:30.000000Z"
            },
            {
                "id": 3337,
                "drug_id": 248,
                "brand_id": 1205,
                "created_at": "2020-11-16T02:32:56.000000Z",
                "updated_at": "2020-11-16T02:32:56.000000Z"
            },
            {
                "id": 3338,
                "drug_id": 252,
                "brand_id": 1221,
                "created_at": "2020-11-16T02:38:27.000000Z",
                "updated_at": "2020-11-16T02:38:27.000000Z"
            },
            {
                "id": 3339,
                "drug_id": 255,
                "brand_id": 1229,
                "created_at": "2020-11-16T02:56:04.000000Z",
                "updated_at": "2020-11-16T02:56:04.000000Z"
            },
            {
                "id": 3340,
                "drug_id": 255,
                "brand_id": 1230,
                "created_at": "2020-11-16T02:56:04.000000Z",
                "updated_at": "2020-11-16T02:56:04.000000Z"
            },
            {
                "id": 3341,
                "drug_id": 256,
                "brand_id": 1231,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3342,
                "drug_id": 256,
                "brand_id": 1232,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3343,
                "drug_id": 256,
                "brand_id": 1233,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3344,
                "drug_id": 256,
                "brand_id": 1234,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3345,
                "drug_id": 256,
                "brand_id": 1235,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3346,
                "drug_id": 256,
                "brand_id": 1236,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3347,
                "drug_id": 256,
                "brand_id": 1237,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3348,
                "drug_id": 256,
                "brand_id": 1238,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3349,
                "drug_id": 256,
                "brand_id": 1239,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3350,
                "drug_id": 256,
                "brand_id": 1240,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3351,
                "drug_id": 256,
                "brand_id": 1241,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3352,
                "drug_id": 256,
                "brand_id": 1242,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3353,
                "drug_id": 256,
                "brand_id": 1243,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3354,
                "drug_id": 256,
                "brand_id": 1244,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3355,
                "drug_id": 256,
                "brand_id": 1245,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3356,
                "drug_id": 256,
                "brand_id": 1246,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3357,
                "drug_id": 256,
                "brand_id": 1247,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3358,
                "drug_id": 256,
                "brand_id": 1248,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3359,
                "drug_id": 256,
                "brand_id": 1249,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3360,
                "drug_id": 256,
                "brand_id": 1250,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                "id": 3361,
                "drug_id": 256,
                "brand_id": 1251,
                "created_at": "2020-11-16T03:01:08.000000Z",
                "updated_at": "2020-11-16T03:01:08.000000Z"
            }
        ];

      let query = "INSERT INTO vdi_brand_drug (id,drug_id,brand_id,created_at,updated_at) VALUES";
      for (let i = 0; i < data.length; ++i) {
            query = query + "('"
                  + data[i].id //id
                  + "','"
                  + data[i].drug_id //name
                  + "','"
                  + data[i].brand_id
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
      let brandsInserted = await ExecuteQuery(query, []);
      console.log('Charles Inserting brands Drugs.................................', brandsInserted);
      console.log('....................................................................');

}
export const brandDrug ={
      insertBrandDrugAsync
}