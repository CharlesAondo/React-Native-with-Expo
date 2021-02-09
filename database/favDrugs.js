import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Favourite Drugs Succesfully inserted into the database', results);
            },
                  (error) => {
                        reject('Failed to inserts Favourite Drugs into the database!', error);
                  });
      });
});

const insertFavDrugsToDatabaseAsync = async () => {

      let data = [
            {
                  "id": 3358,
                  "drug_id": 1,
                  "created_at": "2020-11-16T03:01:08.000000Z",
                  "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                  "id": 3359,
                  "drug_id": 2,
                  "created_at": "2020-11-16T03:01:08.000000Z",
                  "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                  "id": 3360,
                  "drug_id": 3,
                  "created_at": "2020-11-16T03:01:08.000000Z",
                  "updated_at": "2020-11-16T03:01:08.000000Z"
            },
            {
                  "id": 3361,
                  "drug_id": 7,
                  "created_at": "2020-11-16T03:01:08.000000Z",
                  "updated_at": "2020-11-16T03:01:08.000000Z"
            }
      ];
      let query = "INSERT INTO vdi_user_favourite_drugs (id,drug_id,created_at,updated_at) VALUES";
      for (let i = 0; i < data.length; ++i) {
            query = query + "('"
                  + data[i].id //id
                  + "','"
                  + data[i].drug_id //name
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
      let favDrugsInserted = await ExecuteQuery(query, []);
      console.log('Charles Inserting Favourite Drugs.................................', favDrugsInserted);
      console.log('....................................................................');

}
export const favDrugs = {
      insertFavDrugsToDatabaseAsync

}