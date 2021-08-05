import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Treatment Species Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Treatment Species into the database!', error);
            });
    });
});

const insertTreatmentSpeciesToDatabaseAsync = async() => {

    let data = [{
            "id": 1,
            "treatment_id": 1,
            "species_id": 1,
            "created_at": "2020-05-06T15:45:09.000000Z",
            "updated_at": "2020-05-06T15:45:09.000000Z"
        },
        {
            "id": 2,
            "treatment_id": 2,
            "species_id": 1,
            "created_at": "2020-05-06T15:45:21.000000Z",
            "updated_at": "2020-05-06T15:45:21.000000Z"
        }
    ];

    let query = "INSERT INTO vdi_treatment_species (id,treatment_id,species_id,created_at,updated_at) VALUES";
    for (let i = 0; i < data.length; ++i) {
        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].treatment_id //name
            +
            "','" +
            data[i].species_id //name
            +
            "','" +
            data[i].created_at //date
            +
            "','" +
            data[i].updated_at //date
            +
            "')";
        if (i != data.length - 1) {
            query = query + ",";
        }
    }
    query = query + ";";
    let treatmentSpeciesInserted = await ExecuteQuery(query, []);
    console.log('Charles Inserting  Treatment Species.................................', treatmentSpeciesInserted);
    console.log('....................................................................');

}
export const treatment_species = {
    insertTreatmentSpeciesToDatabaseAsync

}