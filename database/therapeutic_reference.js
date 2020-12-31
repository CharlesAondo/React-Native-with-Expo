import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Therapeutic References Succesfully inserted into the database', results);
            },
                  (error) => {
                        reject('Failed to inserts Therapeutic References into the database!', error);
                  });
      });
});

const insertTherapeuticReferencesAsync = async() =>{
      let query = "INSERT INTO vdi_therapeutic_references (id,drug_id,title,pub_med_id,url,ebm, created_at, updated_at,deleted_at) VALUES";
      let data = [
            {
                "id": 1,
                "drug_id": 76,
                "title": null,
                "pub_med_id": 20433382,
                "url": null,
                "ebm": null,
                "created_at": "2020-05-06T17:26:01.000000Z",
                "updated_at": "2020-11-04T20:51:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 2,
                "drug_id": 157,
                "title": null,
                "pub_med_id": 2071087,
                "url": null,
                "ebm": null,
                "created_at": "2020-05-06T19:06:16.000000Z",
                "updated_at": "2020-11-08T20:17:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 3,
                "drug_id": 208,
                "title": null,
                "pub_med_id": 17803742,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-06T20:24:51.000000Z",
                "updated_at": "2020-05-06T20:24:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 4,
                "drug_id": 223,
                "title": null,
                "pub_med_id": 23098635,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-06T20:44:35.000000Z",
                "updated_at": "2020-05-06T20:44:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 5,
                "drug_id": 228,
                "title": null,
                "pub_med_id": 18339090,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-06T20:50:33.000000Z",
                "updated_at": "2020-05-06T20:50:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 6,
                "drug_id": 273,
                "title": null,
                "pub_med_id": 21461200,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-06T22:41:11.000000Z",
                "updated_at": "2020-05-06T22:41:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 7,
                "drug_id": 273,
                "title": null,
                "pub_med_id": 19222832,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-06T22:41:13.000000Z",
                "updated_at": "2020-05-06T22:41:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 8,
                "drug_id": 311,
                "title": null,
                "pub_med_id": 17931228,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-06T23:32:51.000000Z",
                "updated_at": "2020-05-06T23:32:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 9,
                "drug_id": 311,
                "title": null,
                "pub_med_id": 19897392,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-06T23:32:54.000000Z",
                "updated_at": "2020-05-06T23:32:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 10,
                "drug_id": 363,
                "title": null,
                "pub_med_id": 19737179,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-07T00:35:42.000000Z",
                "updated_at": "2020-05-07T00:35:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 11,
                "drug_id": 369,
                "title": null,
                "pub_med_id": 19000262,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-07T00:45:08.000000Z",
                "updated_at": "2020-05-07T00:45:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 12,
                "drug_id": 379,
                "title": null,
                "pub_med_id": 7891362,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-07T00:59:19.000000Z",
                "updated_at": "2020-05-07T00:59:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 13,
                "drug_id": 379,
                "title": null,
                "pub_med_id": 3806778,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-07T00:59:21.000000Z",
                "updated_at": "2020-05-07T00:59:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 14,
                "drug_id": 416,
                "title": null,
                "pub_med_id": 12174182,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-07T01:44:21.000000Z",
                "updated_at": "2020-05-07T01:44:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 15,
                "drug_id": 416,
                "title": null,
                "pub_med_id": 14736903,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-07T01:44:23.000000Z",
                "updated_at": "2020-05-07T01:44:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 16,
                "drug_id": 416,
                "title": null,
                "pub_med_id": 12856780,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-07T01:44:25.000000Z",
                "updated_at": "2020-05-07T01:44:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 17,
                "drug_id": 439,
                "title": null,
                "pub_med_id": 12552202,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-07T02:11:27.000000Z",
                "updated_at": "2020-05-07T02:11:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 18,
                "drug_id": 439,
                "title": null,
                "pub_med_id": 1927541,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-07T02:11:30.000000Z",
                "updated_at": "2020-05-07T02:11:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 19,
                "drug_id": 442,
                "title": null,
                "pub_med_id": 20919845,
                "url": null,
                "ebm": 0,
                "created_at": "2020-05-07T02:16:36.000000Z",
                "updated_at": "2020-05-07T02:16:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 25,
                "drug_id": 514,
                "title": null,
                "pub_med_id": 22809214,
                "url": null,
                "ebm": null,
                "created_at": "2020-10-31T18:39:36.000000Z",
                "updated_at": "2020-10-31T18:39:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 26,
                "drug_id": 514,
                "title": null,
                "pub_med_id": 830325,
                "url": null,
                "ebm": null,
                "created_at": "2020-10-31T18:39:36.000000Z",
                "updated_at": "2020-10-31T18:39:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 27,
                "drug_id": 514,
                "title": null,
                "pub_med_id": 7407811,
                "url": null,
                "ebm": null,
                "created_at": "2020-10-31T18:39:36.000000Z",
                "updated_at": "2020-10-31T18:39:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 28,
                "drug_id": 514,
                "title": null,
                "pub_med_id": 8204767,
                "url": null,
                "ebm": null,
                "created_at": "2020-10-31T18:39:36.000000Z",
                "updated_at": "2020-10-31T18:39:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 29,
                "drug_id": 514,
                "title": null,
                "pub_med_id": 1769878,
                "url": null,
                "ebm": null,
                "created_at": "2020-10-31T18:39:36.000000Z",
                "updated_at": "2020-10-31T18:39:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 30,
                "drug_id": 126,
                "title": null,
                "pub_med_id": 25379734,
                "url": null,
                "ebm": null,
                "created_at": "2020-11-08T14:20:06.000000Z",
                "updated_at": "2020-11-08T14:20:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 31,
                "drug_id": 231,
                "title": null,
                "pub_med_id": 24446399,
                "url": null,
                "ebm": null,
                "created_at": "2020-11-16T00:41:57.000000Z",
                "updated_at": "2020-11-16T00:41:57.000000Z",
                "deleted_at": null
            }
        ];

        for(let i = 0; i < data.length; ++i) {
            query = query + "('"
                  + data[i].id //id
                  + "','"
                  + data[i].drug_id //id
                  + "','"
                  + (data[i].title == null ? null : data[i].title.replace(/[`~!@#$^?'"\\]/gi, '\\'))
                  + "','"
                  + data[i].pub_med_id
                  + "','"
                  + data[i].url
                  + "','"
                  + data[i].ebm
                  + "','"
                  + data[i].created_at
                  + "','"
                  + data[i].updated_at
                  + "','"
                  + data[i].deleted_at
                  + "')";
            if (i != data.length - 1) {
                  query = query + ",";
            }
      }
      query = query + ";";
      let precautionReferencesInserted = await ExecuteQuery(query, []);
      console.log('Charles Inserting Therapeutic References.................................', precautionReferencesInserted);
      console.log('....................................................................');


}
export const therapeutic_references = {
      insertTherapeuticReferencesAsync
}