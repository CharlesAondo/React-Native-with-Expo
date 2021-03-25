import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('vdi_drug_synonyms  Succesfully inserted into the database', results);
            },
                  (error) => {
                        reject('Failed to inserts vdi_drug_synonyms into the database!', error);
                  });
      });
});

const insertDrugSynonymsToDatabaseAsync = async () => {

      let data = [
            {
                  "id": 1,
                  "drug_id": 3,
                  "name": "Ace",
                  "is_visible": 0,
                  "created_at": "2020-05-06T15:47:37.000000Z",
                  "updated_at": "2020-11-04T01:57:44.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 2,
                  "drug_id": 3,
                  "name": "Acetylpromazine",
                  "is_visible": 0,
                  "created_at": "2020-05-06T15:47:40.000000Z",
                  "updated_at": "2020-11-04T01:57:44.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 3,
                  "drug_id": 3,
                  "name": "ACP",
                  "is_visible": 0,
                  "created_at": "2020-05-06T15:47:42.000000Z",
                  "updated_at": "2020-11-04T01:57:44.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 4,
                  "drug_id": 4,
                  "name": "APAP",
                  "is_visible": 0,
                  "created_at": "2020-05-06T15:50:35.000000Z",
                  "updated_at": "2020-11-04T16:59:51.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 5,
                  "drug_id": 4,
                  "name": "Aspirin-free formulations",
                  "is_visible": 0,
                  "created_at": "2020-05-06T15:50:37.000000Z",
                  "updated_at": "2020-11-04T16:59:51.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 6,
                  "drug_id": 4,
                  "name": "Paracetamol",
                  "is_visible": 1,
                  "created_at": "2020-05-06T15:50:39.000000Z",
                  "updated_at": "2020-11-04T16:59:51.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 7,
                  "drug_id": 7,
                  "name": "Aspirin",
                  "is_visible": 1,
                  "created_at": "2020-05-06T15:54:48.000000Z",
                  "updated_at": "2020-11-04T02:02:41.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 8,
                  "drug_id": 7,
                  "name": "ASA",
                  "is_visible": 0,
                  "created_at": "2020-05-06T15:54:50.000000Z",
                  "updated_at": "2020-11-04T02:02:41.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 9,
                  "drug_id": 9,
                  "name": "Cosyntropin",
                  "is_visible": 1,
                  "created_at": "2020-05-06T15:57:30.000000Z",
                  "updated_at": "2020-11-04T02:16:27.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 10,
                  "drug_id": 9,
                  "name": "Tetracosactrin",
                  "is_visible": 0,
                  "created_at": "2020-05-06T15:57:32.000000Z",
                  "updated_at": "2020-11-04T02:16:27.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 11,
                  "drug_id": 10,
                  "name": "Dactinomycin",
                  "is_visible": 1,
                  "created_at": "2020-05-06T15:58:28.000000Z",
                  "updated_at": "2020-05-06T15:58:28.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 12,
                  "drug_id": 11,
                  "name": "Charcoal",
                  "is_visible": 0,
                  "created_at": "2020-05-06T15:59:18.000000Z",
                  "updated_at": "2020-11-04T02:16:59.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 13,
                  "drug_id": 11,
                  "name": "Universal antidote",
                  "is_visible": 0,
                  "created_at": "2020-05-06T15:59:21.000000Z",
                  "updated_at": "2020-11-04T02:16:59.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 14,
                  "drug_id": 12,
                  "name": "Aciclovir",
                  "is_visible": 0,
                  "created_at": "2020-05-06T16:00:27.000000Z",
                  "updated_at": "2020-05-06T16:00:27.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 15,
                  "drug_id": 13,
                  "name": "RU-46534",
                  "is_visible": 1,
                  "created_at": "2020-05-06T16:01:24.000000Z",
                  "updated_at": "2020-11-04T02:19:08.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 16,
                  "drug_id": 15,
                  "name": "Salbutamol",
                  "is_visible": 1,
                  "created_at": "2020-05-06T16:05:02.000000Z",
                  "updated_at": "2020-05-06T16:05:02.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 17,
                  "drug_id": 17,
                  "name": "Alphaxalone",
                  "is_visible": 1,
                  "created_at": "2020-05-06T16:07:39.000000Z",
                  "updated_at": "2020-05-06T16:07:39.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 18,
                  "drug_id": 20,
                  "name": "Aluminium hydroxide",
                  "is_visible": 0,
                  "created_at": "2020-05-06T16:10:36.000000Z",
                  "updated_at": "2020-05-06T16:10:36.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 19,
                  "drug_id": 23,
                  "name": "Epsilon aminocaproic acid",
                  "is_visible": 1,
                  "created_at": "2020-05-06T16:13:49.000000Z",
                  "updated_at": "2020-11-04T02:26:49.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 20,
                  "drug_id": 31,
                  "name": "Amoxycillin",
                  "is_visible": 1,
                  "created_at": "2020-05-06T16:22:53.000000Z",
                  "updated_at": "2020-05-06T16:22:53.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 21,
                  "drug_id": 32,
                  "name": "Amoxi-clav",
                  "is_visible": 0,
                  "created_at": "2020-05-06T16:25:26.000000Z",
                  "updated_at": "2020-11-04T16:52:26.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 22,
                  "drug_id": 40,
                  "name": "Ascorbate",
                  "is_visible": 0,
                  "created_at": "2020-05-06T16:34:57.000000Z",
                  "updated_at": "2020-05-06T16:34:57.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 23,
                  "drug_id": 40,
                  "name": "Vitamin C",
                  "is_visible": 1,
                  "created_at": "2020-05-06T16:35:00.000000Z",
                  "updated_at": "2020-05-06T16:35:00.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 24,
                  "drug_id": 56,
                  "name": "Bismuth subcarbonate with kanamycin and attapulgite",
                  "is_visible": 0,
                  "created_at": "2020-05-06T16:55:49.000000Z",
                  "updated_at": "2020-05-06T16:55:49.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 25,
                  "drug_id": 59,
                  "name": "Bromocryptine",
                  "is_visible": 0,
                  "created_at": "2020-05-06T16:59:08.000000Z",
                  "updated_at": "2020-05-06T16:59:08.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 26,
                  "drug_id": 68,
                  "name": "1,25-Dihydroxycholecalciferol",
                  "is_visible": 0,
                  "created_at": "2020-05-06T17:15:29.000000Z",
                  "updated_at": "2020-11-04T20:40:43.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 27,
                  "drug_id": 68,
                  "name": "1,25-Dihydroxy-vitamin D3",
                  "is_visible": 0,
                  "created_at": "2020-05-06T17:15:31.000000Z",
                  "updated_at": "2020-11-04T20:40:43.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 28,
                  "drug_id": 70,
                  "name": "3-Sulvit",
                  "is_visible": 0,
                  "created_at": "2020-05-06T17:19:02.000000Z",
                  "updated_at": "2020-11-04T20:44:24.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 29,
                  "drug_id": 71,
                  "name": "Calcium disodium versenate",
                  "is_visible": 0,
                  "created_at": "2020-05-06T17:20:26.000000Z",
                  "updated_at": "2020-05-06T17:20:26.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 30,
                  "drug_id": 84,
                  "name": "Cephamandole",
                  "is_visible": 0,
                  "created_at": "2020-05-06T17:36:12.000000Z",
                  "updated_at": "2020-05-06T17:36:12.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 31,
                  "drug_id": 98,
                  "name": "Cefalexin",
                  "is_visible": 1,
                  "created_at": "2020-05-06T17:47:21.000000Z",
                  "updated_at": "2020-11-05T20:32:27.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 32,
                  "drug_id": 108,
                  "name": "Chorionic gonadotrophin (human)",
                  "is_visible": 0,
                  "created_at": "2020-05-06T17:58:19.000000Z",
                  "updated_at": "2020-11-07T18:45:08.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 33,
                  "drug_id": 113,
                  "name": "SPI-77",
                  "is_visible": 0,
                  "created_at": "2020-05-06T18:04:52.000000Z",
                  "updated_at": "2020-05-06T18:04:52.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 34,
                  "drug_id": 113,
                  "name": "STEALTH liposome-encapsulted cisplatin",
                  "is_visible": 0,
                  "created_at": "2020-05-06T18:04:55.000000Z",
                  "updated_at": "2020-05-06T18:04:55.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 35,
                  "drug_id": 124,
                  "name": "Vitamin B12",
                  "is_visible": 1,
                  "created_at": "2020-05-06T18:17:56.000000Z",
                  "updated_at": "2020-11-08T14:15:22.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 36,
                  "drug_id": 128,
                  "name": "Ciclosporin",
                  "is_visible": 0,
                  "created_at": "2020-05-06T18:24:30.000000Z",
                  "updated_at": "2020-11-08T15:19:11.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 37,
                  "drug_id": 128,
                  "name": "Cyclosporin",
                  "is_visible": 0,
                  "created_at": "2020-05-06T18:24:33.000000Z",
                  "updated_at": "2020-11-08T15:19:11.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 38,
                  "drug_id": 130,
                  "name": "Cytarabine",
                  "is_visible": 1,
                  "created_at": "2020-05-06T18:29:14.000000Z",
                  "updated_at": "2020-11-08T18:41:40.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 39,
                  "drug_id": 137,
                  "name": "Desferrioxamine",
                  "is_visible": 0,
                  "created_at": "2020-05-06T18:35:34.000000Z",
                  "updated_at": "2020-05-06T18:35:34.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 40,
                  "drug_id": 140,
                  "name": "1-(3-mercaptopropionic acid)-8-D-arginine-vasopressin)",
                  "is_visible": 0,
                  "created_at": "2020-05-06T18:38:36.000000Z",
                  "updated_at": "2020-11-08T19:51:30.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 41,
                  "drug_id": 141,
                  "name": "DOCP",
                  "is_visible": 1,
                  "created_at": "2020-05-06T18:41:09.000000Z",
                  "updated_at": "2020-11-08T19:52:35.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 42,
                  "drug_id": 141,
                  "name": "Desoxycortone pivalate",
                  "is_visible": 0,
                  "created_at": "2020-05-06T18:41:11.000000Z",
                  "updated_at": "2020-11-08T19:52:35.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 43,
                  "drug_id": 150,
                  "name": "Diclofenamide",
                  "is_visible": 0,
                  "created_at": "2020-05-06T18:59:49.000000Z",
                  "updated_at": "2020-05-06T18:59:49.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 44,
                  "drug_id": 152,
                  "name": "DEC",
                  "is_visible": 1,
                  "created_at": "2020-05-06T19:00:50.000000Z",
                  "updated_at": "2020-11-08T20:14:10.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 45,
                  "drug_id": 156,
                  "name": "DHT",
                  "is_visible": 1,
                  "created_at": "2020-05-06T19:05:23.000000Z",
                  "updated_at": "2020-05-06T19:05:23.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 46,
                  "drug_id": 160,
                  "name": "British Anti-Lewisite",
                  "is_visible": 1,
                  "created_at": "2020-05-06T19:10:07.000000Z",
                  "updated_at": "2020-05-06T19:10:07.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 47,
                  "drug_id": 160,
                  "name": "BAL",
                  "is_visible": 1,
                  "created_at": "2020-05-06T19:10:09.000000Z",
                  "updated_at": "2020-05-06T19:10:09.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 48,
                  "drug_id": 161,
                  "name": "DMSO",
                  "is_visible": 1,
                  "created_at": "2020-05-06T19:10:44.000000Z",
                  "updated_at": "2020-05-06T19:10:44.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 49,
                  "drug_id": 162,
                  "name": "Diminazen",
                  "is_visible": 0,
                  "created_at": "2020-05-06T19:11:35.000000Z",
                  "updated_at": "2020-11-08T20:23:39.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 50,
                  "drug_id": 170,
                  "name": "Hydroxydaunorubicin",
                  "is_visible": 0,
                  "created_at": "2020-05-06T19:21:42.000000Z",
                  "updated_at": "2020-05-06T19:21:42.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 51,
                  "drug_id": 177,
                  "name": "Adrenaline",
                  "is_visible": 0,
                  "created_at": "2020-05-06T19:37:01.000000Z",
                  "updated_at": "2020-11-09T20:26:31.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 52,
                  "drug_id": 180,
                  "name": "Epoietin",
                  "is_visible": 1,
                  "created_at": "2020-05-06T19:42:07.000000Z",
                  "updated_at": "2020-05-06T19:42:07.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 53,
                  "drug_id": 180,
                  "name": "EPO",
                  "is_visible": 1,
                  "created_at": "2020-05-06T19:42:09.000000Z",
                  "updated_at": "2020-05-06T19:42:09.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 54,
                  "drug_id": 182,
                  "name": "Ethyl alcohol",
                  "is_visible": 0,
                  "created_at": "2020-05-06T19:44:30.000000Z",
                  "updated_at": "2020-11-11T18:49:44.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 55,
                  "drug_id": 186,
                  "name": "Marine oil",
                  "is_visible": 0,
                  "created_at": "2020-05-06T19:48:58.000000Z",
                  "updated_at": "2020-11-11T18:58:33.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 56,
                  "drug_id": 186,
                  "name": "Omega-3 fatty acid supplement",
                  "is_visible": 1,
                  "created_at": "2020-05-06T19:49:01.000000Z",
                  "updated_at": "2020-11-11T18:58:33.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 57,
                  "drug_id": 192,
                  "name": "Granulocyte-colony stimulating factor",
                  "is_visible": 1,
                  "created_at": "2020-05-06T20:02:36.000000Z",
                  "updated_at": "2020-11-11T20:10:32.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 58,
                  "drug_id": 199,
                  "name": "5-Fluorouracil",
                  "is_visible": 1,
                  "created_at": "2020-05-06T20:11:08.000000Z",
                  "updated_at": "2020-11-11T21:01:57.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 59,
                  "drug_id": 202,
                  "name": "Folic acid",
                  "is_visible": 0,
                  "created_at": "2020-05-06T20:15:47.000000Z",
                  "updated_at": "2020-11-11T21:15:05.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 60,
                  "drug_id": 203,
                  "name": "4-Methylpyrazole",
                  "is_visible": 1,
                  "created_at": "2020-05-06T20:16:34.000000Z",
                  "updated_at": "2020-05-06T20:16:34.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 61,
                  "drug_id": 203,
                  "name": "4-MP",
                  "is_visible": 1,
                  "created_at": "2020-05-06T20:16:36.000000Z",
                  "updated_at": "2020-05-06T20:16:36.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 62,
                  "drug_id": 203,
                  "name": "4-Methylpyrrolate",
                  "is_visible": 1,
                  "created_at": "2020-05-06T20:16:39.000000Z",
                  "updated_at": "2020-05-06T20:16:39.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 63,
                  "drug_id": 217,
                  "name": "Bovine polymerized hemoglobin",
                  "is_visible": 1,
                  "created_at": "2020-05-06T20:36:28.000000Z",
                  "updated_at": "2020-05-06T20:36:28.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 64,
                  "drug_id": 228,
                  "name": "Hydroxycarbamide",
                  "is_visible": 0,
                  "created_at": "2020-05-06T20:50:31.000000Z",
                  "updated_at": "2020-05-06T20:50:31.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 65,
                  "drug_id": 243,
                  "name": "Insulin-isophane",
                  "is_visible": 0,
                  "created_at": "2020-05-06T21:07:26.000000Z",
                  "updated_at": "2020-05-06T21:07:26.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 66,
                  "drug_id": 243,
                  "name": "Insulin-neutral protamine Hagedorn",
                  "is_visible": 0,
                  "created_at": "2020-05-06T21:07:28.000000Z",
                  "updated_at": "2020-05-06T21:07:28.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 67,
                  "drug_id": 244,
                  "name": "PZI",
                  "is_visible": 0,
                  "created_at": "2020-05-06T21:08:24.000000Z",
                  "updated_at": "2020-05-06T21:08:24.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 68,
                  "drug_id": 244,
                  "name": "Protamine zinc insulin",
                  "is_visible": 0,
                  "created_at": "2020-05-06T21:08:27.000000Z",
                  "updated_at": "2020-05-06T21:08:27.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 69,
                  "drug_id": 245,
                  "name": "Insulin-Toronto",
                  "is_visible": 0,
                  "created_at": "2020-05-06T21:09:16.000000Z",
                  "updated_at": "2020-05-06T21:09:16.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 70,
                  "drug_id": 245,
                  "name": "Insulin, crystalline",
                  "is_visible": 0,
                  "created_at": "2020-05-06T21:09:19.000000Z",
                  "updated_at": "2020-05-06T21:09:19.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 71,
                  "drug_id": 264,
                  "name": "Calcium folinate",
                  "is_visible": 1,
                  "created_at": "2020-05-06T22:28:32.000000Z",
                  "updated_at": "2020-05-06T22:28:32.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 72,
                  "drug_id": 267,
                  "name": "Thyroxine",
                  "is_visible": 1,
                  "created_at": "2020-05-06T22:32:29.000000Z",
                  "updated_at": "2020-05-06T22:32:29.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 73,
                  "drug_id": 267,
                  "name": "L-thyroxine",
                  "is_visible": 1,
                  "created_at": "2020-05-06T22:32:31.000000Z",
                  "updated_at": "2020-05-06T22:32:31.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 74,
                  "drug_id": 267,
                  "name": "T4",
                  "is_visible": 1,
                  "created_at": "2020-05-06T22:32:33.000000Z",
                  "updated_at": "2020-05-06T22:32:33.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 75,
                  "drug_id": 268,
                  "name": "Xylocaine",
                  "is_visible": 1,
                  "created_at": "2020-05-06T22:35:23.000000Z",
                  "updated_at": "2020-05-06T22:35:23.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 76,
                  "drug_id": 268,
                  "name": "Lignocaine",
                  "is_visible": 1,
                  "created_at": "2020-05-06T22:35:25.000000Z",
                  "updated_at": "2020-05-06T22:35:25.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 77,
                  "drug_id": 278,
                  "name": "Magnesium sulphate",
                  "is_visible": 0,
                  "created_at": "2020-05-06T22:47:52.000000Z",
                  "updated_at": "2020-05-06T22:47:52.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 78,
                  "drug_id": 282,
                  "name": "Medium-chain fatty acids",
                  "is_visible": 0,
                  "created_at": "2020-05-06T22:55:24.000000Z",
                  "updated_at": "2020-05-06T22:55:24.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 79,
                  "drug_id": 282,
                  "name": "MCT oil",
                  "is_visible": 1,
                  "created_at": "2020-05-06T22:55:27.000000Z",
                  "updated_at": "2020-05-06T22:55:27.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 80,
                  "drug_id": 283,
                  "name": "MPA",
                  "is_visible": 0,
                  "created_at": "2020-05-06T22:56:31.000000Z",
                  "updated_at": "2020-05-06T22:56:31.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 81,
                  "drug_id": 290,
                  "name": "Pethidine",
                  "is_visible": 1,
                  "created_at": "2020-05-06T23:05:52.000000Z",
                  "updated_at": "2020-05-06T23:05:52.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 82,
                  "drug_id": 292,
                  "name": "Mesalazine",
                  "is_visible": 0,
                  "created_at": "2020-05-06T23:07:34.000000Z",
                  "updated_at": "2020-05-06T23:07:34.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 83,
                  "drug_id": 292,
                  "name": "5-ASA",
                  "is_visible": 1,
                  "created_at": "2020-05-06T23:07:36.000000Z",
                  "updated_at": "2020-05-06T23:07:36.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 84,
                  "drug_id": 297,
                  "name": "S-adenosylmethionine",
                  "is_visible": 1,
                  "created_at": "2020-05-06T23:12:06.000000Z",
                  "updated_at": "2020-05-06T23:12:06.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 85,
                  "drug_id": 297,
                  "name": "Adenosylmethionine S-",
                  "is_visible": 0,
                  "created_at": "2020-05-06T23:12:09.000000Z",
                  "updated_at": "2020-05-06T23:12:09.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 86,
                  "drug_id": 299,
                  "name": "Amethopterin",
                  "is_visible": 1,
                  "created_at": "2020-05-06T23:15:43.000000Z",
                  "updated_at": "2020-05-06T23:15:43.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 87,
                  "drug_id": 300,
                  "name": "Methylthioninium chloride",
                  "is_visible": 0,
                  "created_at": "2020-05-06T23:17:16.000000Z",
                  "updated_at": "2020-05-06T23:17:16.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 88,
                  "drug_id": 312,
                  "name": "RU-486",
                  "is_visible": 1,
                  "created_at": "2020-05-06T23:35:10.000000Z",
                  "updated_at": "2020-05-06T23:35:10.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 89,
                  "drug_id": 317,
                  "name": "Morphine sulphate",
                  "is_visible": 0,
                  "created_at": "2020-05-06T23:42:39.000000Z",
                  "updated_at": "2020-05-06T23:42:39.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 90,
                  "drug_id": 323,
                  "name": "Nicotinamide",
                  "is_visible": 1,
                  "created_at": "2020-05-06T23:51:07.000000Z",
                  "updated_at": "2020-05-06T23:51:07.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 91,
                  "drug_id": 337,
                  "name": "Mitotane",
                  "is_visible": 1,
                  "created_at": "2020-05-07T00:05:54.000000Z",
                  "updated_at": "2020-05-07T00:05:54.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 92,
                  "drug_id": 344,
                  "name": "Pituitrin",
                  "is_visible": 1,
                  "created_at": "2020-05-07T00:12:58.000000Z",
                  "updated_at": "2020-05-07T00:12:58.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 93,
                  "drug_id": 349,
                  "name": "Aminosidine",
                  "is_visible": 1,
                  "created_at": "2020-05-07T00:18:16.000000Z",
                  "updated_at": "2020-05-07T00:18:16.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 94,
                  "drug_id": 351,
                  "name": "D-penicillamine",
                  "is_visible": 0,
                  "created_at": "2020-05-07T00:20:00.000000Z",
                  "updated_at": "2020-05-07T00:20:00.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 95,
                  "drug_id": 359,
                  "name": "Bute",
                  "is_visible": 0,
                  "created_at": "2020-05-07T00:32:01.000000Z",
                  "updated_at": "2020-05-07T00:32:01.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 96,
                  "drug_id": 362,
                  "name": "Diphenylhydantoin",
                  "is_visible": 0,
                  "created_at": "2020-05-07T00:34:41.000000Z",
                  "updated_at": "2020-05-07T00:34:41.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 97,
                  "drug_id": 373,
                  "name": "2-Pyridine aldoxime methyl chloride",
                  "is_visible": 0,
                  "created_at": "2020-05-07T00:49:02.000000Z",
                  "updated_at": "2020-05-07T00:49:02.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 98,
                  "drug_id": 373,
                  "name": "2-PAM",
                  "is_visible": 1,
                  "created_at": "2020-05-07T00:49:04.000000Z",
                  "updated_at": "2020-05-07T00:49:04.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 99,
                  "drug_id": 399,
                  "name": "L-deprenyl",
                  "is_visible": 1,
                  "created_at": "2020-05-07T01:24:39.000000Z",
                  "updated_at": "2020-05-07T01:24:39.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 100,
                  "drug_id": 401,
                  "name": "Milk thistle",
                  "is_visible": 1,
                  "created_at": "2020-05-07T01:27:13.000000Z",
                  "updated_at": "2020-05-07T01:27:13.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 101,
                  "drug_id": 402,
                  "name": "Baking soda",
                  "is_visible": 0,
                  "created_at": "2020-05-07T01:28:41.000000Z",
                  "updated_at": "2020-05-07T01:28:41.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 102,
                  "drug_id": 402,
                  "name": "Bread soda",
                  "is_visible": 0,
                  "created_at": "2020-05-07T01:28:44.000000Z",
                  "updated_at": "2020-05-07T01:28:44.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 103,
                  "drug_id": 402,
                  "name": "Cooking soda",
                  "is_visible": 0,
                  "created_at": "2020-05-07T01:28:46.000000Z",
                  "updated_at": "2020-05-07T01:28:46.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 104,
                  "drug_id": 410,
                  "name": "Dimercaptosuccinic acid",
                  "is_visible": 1,
                  "created_at": "2020-05-07T01:36:08.000000Z",
                  "updated_at": "2020-05-07T01:36:08.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 105,
                  "drug_id": 410,
                  "name": "DMSA",
                  "is_visible": 1,
                  "created_at": "2020-05-07T01:36:11.000000Z",
                  "updated_at": "2020-05-07T01:36:11.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 106,
                  "drug_id": 415,
                  "name": "Co-trimoxazol",
                  "is_visible": 0,
                  "created_at": "2020-05-07T01:42:55.000000Z",
                  "updated_at": "2020-05-07T01:42:55.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 107,
                  "drug_id": 415,
                  "name": "SMZ-TMP",
                  "is_visible": 1,
                  "created_at": "2020-05-07T01:42:57.000000Z",
                  "updated_at": "2020-05-07T01:42:57.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 108,
                  "drug_id": 416,
                  "name": "FK506",
                  "is_visible": 0,
                  "created_at": "2020-05-07T01:44:18.000000Z",
                  "updated_at": "2020-05-07T01:44:18.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 109,
                  "drug_id": 426,
                  "name": "Thiamin",
                  "is_visible": 0,
                  "created_at": "2020-05-07T01:58:36.000000Z",
                  "updated_at": "2020-05-07T01:58:36.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 110,
                  "drug_id": 426,
                  "name": "Vitamin B1",
                  "is_visible": 1,
                  "created_at": "2020-05-07T01:58:38.000000Z",
                  "updated_at": "2020-05-07T01:58:38.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 111,
                  "drug_id": 427,
                  "name": "Pentothal",
                  "is_visible": 1,
                  "created_at": "2020-05-07T01:59:27.000000Z",
                  "updated_at": "2020-05-07T01:59:27.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 112,
                  "drug_id": 427,
                  "name": "Thiopentone",
                  "is_visible": 0,
                  "created_at": "2020-05-07T01:59:29.000000Z",
                  "updated_at": "2020-05-07T01:59:29.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 113,
                  "drug_id": 428,
                  "name": "Thyroid-stimulating hormone",
                  "is_visible": 0,
                  "created_at": "2020-05-07T02:00:51.000000Z",
                  "updated_at": "2020-05-07T02:00:51.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 114,
                  "drug_id": 428,
                  "name": "TSH",
                  "is_visible": 1,
                  "created_at": "2020-05-07T02:00:53.000000Z",
                  "updated_at": "2020-05-07T02:00:53.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 115,
                  "drug_id": 438,
                  "name": "Torasemide",
                  "is_visible": 0,
                  "created_at": "2020-05-07T02:10:08.000000Z",
                  "updated_at": "2020-05-07T02:10:08.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 116,
                  "drug_id": 444,
                  "name": "Ursodiol",
                  "is_visible": 0,
                  "created_at": "2020-05-07T02:19:53.000000Z",
                  "updated_at": "2020-05-07T02:19:53.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 117,
                  "drug_id": 447,
                  "name": "Antidiuretic hormone",
                  "is_visible": 1,
                  "created_at": "2020-05-07T02:23:00.000000Z",
                  "updated_at": "2020-05-07T02:23:00.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 118,
                  "drug_id": 451,
                  "name": "Tocopherol",
                  "is_visible": 1,
                  "created_at": "2020-05-07T02:29:19.000000Z",
                  "updated_at": "2020-05-07T02:29:19.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 119,
                  "drug_id": 451,
                  "name": "Alpha-tocopherol",
                  "is_visible": 1,
                  "created_at": "2020-05-07T02:29:21.000000Z",
                  "updated_at": "2020-05-07T02:29:21.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 120,
                  "drug_id": 452,
                  "name": "Phytonadione",
                  "is_visible": 1,
                  "created_at": "2020-05-07T02:30:50.000000Z",
                  "updated_at": "2020-05-07T02:30:50.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 121,
                  "drug_id": 458,
                  "name": "Azidothymidine",
                  "is_visible": 1,
                  "created_at": "2020-05-07T02:38:01.000000Z",
                  "updated_at": "2020-05-07T02:38:01.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 122,
                  "drug_id": 476,
                  "name": "Meclozine",
                  "is_visible": 0,
                  "created_at": "2020-05-07T02:55:16.000000Z",
                  "updated_at": "2020-05-07T02:55:16.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 123,
                  "drug_id": 491,
                  "name": "Protirelin",
                  "is_visible": 0,
                  "created_at": "2020-05-07T03:07:36.000000Z",
                  "updated_at": "2020-05-07T03:07:36.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 124,
                  "drug_id": 501,
                  "name": "Tioguanine",
                  "is_visible": 0,
                  "created_at": "2020-05-07T03:23:06.000000Z",
                  "updated_at": "2020-05-07T03:23:06.000000Z",
                  "deleted_at": null
            },
            {
                  "id": 125,
                  "drug_id": 505,
                  "name": "ddsd",
                  "is_visible": 0,
                  "created_at": "2020-10-30T20:26:14.000000Z",
                  "updated_at": "2020-10-30T20:26:14.000000Z",
                  "deleted_at": null
            }
      ];

      let query = "INSERT INTO vdi_drug_synonyms (id,drug_id,is_visible,name,created_at,updated_at,deleted_at) VALUES";
      for (let i = 0; i < data.length; ++i) {
            query = query + "('"
                  + data[i].id //id
                  + "','"
                  + data[i].drug_id
                  + "','"
                  + data[i].is_visible
                  + "','"
                  + data[i].name //name
                  + "','"
                  + data[i].created_at //date
                  + "','"
                  + data[i].updated_at //date
                  + "','"
                  + data[i].deleted_at //date
                  + "')";
            if (i != data.length - 1) {
                  query = query + ",";
            }
      }
      query = query + ";";
      let synonymsInserted = await ExecuteQuery(query, []);
      console.log('Charles Inserting Drug Synonyms.................................', synonymsInserted);
      console.log('....................................................................');

}
export const synonyms = {
      insertDrugSynonymsToDatabaseAsync

}