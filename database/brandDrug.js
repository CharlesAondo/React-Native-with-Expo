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

         let data =   [
            {
                "id": 1,
                "drug_id": 1,
                "brand_id": 1,
                "created_at": "2020-05-06T15:45:49.000000Z",
                "updated_at": "2020-05-06T15:45:49.000000Z"
            },
            {
                "id": 57,
                "drug_id": 15,
                "brand_id": 55,
                "created_at": "2020-05-06T16:06:00.000000Z",
                "updated_at": "2020-05-06T16:06:00.000000Z"
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