import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Brands Succesfully inserted into the database', results);
            },
                  (error) => {
                        reject('Failed to inserts Brands into the database!', error);
                  });
      });
});


const insertBrandsToDatabaseAsync = async() =>{
      let query = "INSERT INTO vdi_brands (id, name,vdi_is_human_ca_brand,vdi_is_human_us_brand,vdi_is_human_uk_brand,vdi_is_vet_ca_brand,vdi_is_vet_us_brand,vdi_is_vet_uk_brand,vdi_is_other_countries, created_at, updated_at,deleted_at) VALUES";
      let brands =
            [
                  {
                        "id": 1,
                        "name": "Precose",
                        "vdi_is_human_ca_brand": 0,
                        "vdi_is_human_uk_brand": 0,
                        "vdi_is_human_us_brand": 1,
                        "vdi_is_vet_ca_brand": 0,
                        "vdi_is_vet_us_brand": 0,
                        "vdi_is_vet_uk_brand": 0,
                        "vdi_is_other_countries": 0,
                        "created_at": "2020-05-06T15:45:49.000000Z",
                        "updated_at": "2020-05-06T15:45:49.000000Z",
                        "deleted_at": null
                    },
                    {
                        "id": 2,
                        "name": "Glucobay",
                        "vdi_is_human_ca_brand": 1,
                        "vdi_is_human_uk_brand": 1,
                        "vdi_is_human_us_brand": 0,
                        "vdi_is_vet_ca_brand": 0,
                        "vdi_is_vet_us_brand": 0,
                        "vdi_is_vet_uk_brand": 0,
                        "vdi_is_other_countries": 0,
                        "created_at": "2020-05-06T15:45:51.000000Z",
                        "updated_at": "2020-05-06T15:45:51.000000Z",
                        "deleted_at": null
                    },
                    {
                        "id": 3,
                        "name": "Prandase",
                        "vdi_is_human_ca_brand": 1,
                        "vdi_is_human_uk_brand": 0,
                        "vdi_is_human_us_brand": 0,
                        "vdi_is_vet_ca_brand": 0,
                        "vdi_is_vet_us_brand": 0,
                        "vdi_is_vet_uk_brand": 0,
                        "vdi_is_other_countries": 0,
                        "created_at": "2020-05-06T15:45:54.000000Z",
                        "updated_at": "2020-05-06T15:45:54.000000Z",
                        "deleted_at": null
                    },
                    {
                        "id": 4,
                        "name": "PromAce",
                        "vdi_is_human_ca_brand": 0,
                        "vdi_is_human_uk_brand": 0,
                        "vdi_is_human_us_brand": 0,
                        "vdi_is_vet_ca_brand": 1,
                        "vdi_is_vet_us_brand": 0,
                        "vdi_is_vet_uk_brand": 1,
                        "vdi_is_other_countries": 0,
                        "created_at": "2020-05-06T15:50:09.000000Z",
                        "updated_at": "2020-05-06T15:50:09.000000Z",
                        "deleted_at": null
                    },
                    {
                        "id": 5,
                        "name": "Acephen",
                        "vdi_is_human_ca_brand": 0,
                        "vdi_is_human_uk_brand": 0,
                        "vdi_is_human_us_brand": 1,
                        "vdi_is_vet_ca_brand": 0,
                        "vdi_is_vet_us_brand": 0,
                        "vdi_is_vet_uk_brand": 0,
                        "vdi_is_other_countries": 0,
                        "created_at": "2020-05-06T15:51:10.000000Z",
                        "updated_at": "2020-05-06T15:51:10.000000Z",
                        "deleted_at": null
                    },
                    {
                        "id": 6,
                        "name": "Aceta",
                        "vdi_is_human_ca_brand": 0,
                        "vdi_is_human_uk_brand": 0,
                        "vdi_is_human_us_brand": 1,
                        "vdi_is_vet_ca_brand": 0,
                        "vdi_is_vet_us_brand": 0,
                        "vdi_is_vet_uk_brand": 0,
                        "vdi_is_other_countries": 0,
                        "created_at": "2020-05-06T15:51:12.000000Z",
                        "updated_at": "2020-05-06T15:51:12.000000Z",
                        "deleted_at": null
                    },
                    {
                        "id": 7,
                        "name": "Bromo-Seltzer",
                        "vdi_is_human_ca_brand": 0,
                        "vdi_is_human_uk_brand": 0,
                        "vdi_is_human_us_brand": 1,
                        "vdi_is_vet_ca_brand": 0,
                        "vdi_is_vet_us_brand": 0,
                        "vdi_is_vet_uk_brand": 0,
                        "vdi_is_other_countries": 0,
                        "created_at": "2020-05-06T15:51:15.000000Z",
                        "updated_at": "2020-05-06T15:51:15.000000Z",
                        "deleted_at": null
                    }
            ];
      for (let i = 0; i < brands.length; ++i) {
            query = query + "('"
                  + brands[i].id //id
                  + "','"
                  + brands[i].name //name
                  + "','"
                  + brands[i].vdi_is_human_ca_brand
                  + "','"
                  + brands[i].vdi_is_human_uk_brand
                  + "','"
                  + brands[i].vdi_is_human_us_brand
                  + "','"
                  + brands[i].vdi_is_vet_ca_brand
                  + "','"
                  + brands[i].vdi_is_vet_us_brand
                  + "','"
                  + brands[i].vdi_is_vet_uk_brand
                  + "','"
                  + brands[i].vdi_is_other_countries
                  + "','"
                  + brands[i].created_at //date
                  + "','"
                  + brands[i].updated_at //date
                  + "','"
                  + brands[i].deleted_at 
                  + "')";
            if (i != brands.length - 1) {
                  query = query + ",";
            }
      }
      query = query + ";";
      let brandsInserted =  await ExecuteQuery(query, []);
      console.log('Charles Inserting BRANDS.................................', brandsInserted);
      console.log('....................................................................');


      }

export const brands ={
      insertBrandsToDatabaseAsync
}