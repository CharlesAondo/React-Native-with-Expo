import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')


const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Formulation Species Succesfully inserted into the database', results);
            },
                  (error) => {
                        reject('Failed to inserts Formulation Species into the database!', error);
                  });
      });
});


const insertFormulationSpecieAsync = async () => {
     let data = [
      {
          "id": 1,
          "specie": "Human",
          "created_at": null,
          "updated_at": null,
          "deleted_at": null
      },
      {
          "id": 2,
          "specie": "Vet",
          "created_at": null,
          "updated_at": null,
          "deleted_at": null
      },
      {
          "id": 3,
          "specie": "Vet/Human",
          "created_at": null,
          "updated_at": null,
          "deleted_at": null
      }
  ];
let query = "INSERT INTO vdi_formulation_specie (id, specie,created_at, updated_at) VALUES";
      for (let i = 0; i < data.length; ++i) {
            query = query + "('"
                  + data[i].id //id
                  + "','"
                  + data[i].specie //specie type
                  + "','"
                  + data[i].created_at //dates
                  + "','"
                  + data[i].updated_at //updated at
                  + "')";
            if (i != data.length - 1) {
                  query = query + ",";
            }
      }
      query = query + ";";

      let insertedSpecies= await ExecuteQuery(query, []);
      console.log('Charles Inserting Formulation Species.................................', insertedSpecies);
      console.log('....................................................................');


}
export const formulationSpecie = {
      insertFormulationSpecieAsync

}
