import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"
import { cos } from 'react-native-reanimated';

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Treatments Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Treatments into the database!', error);
            });
    });
});

const insertTreatmentsToDatabaseAsync = async() => {
    let data = [{
            "id": 1,
            "drug_id": 1,
            "indication_name": "Diabetes mellitus",
            "expected_effects": "Reduction of hyperglycemia",
            "common_combinations": "High-fiber diet;SC insulin",
            "is_contraindicated": 0,
            "vdi_display_order": 1,
            "created_at": "2020-09-16T00:15:11.000000Z",
            "updated_at": "2020-09-16T00:15:11.000000Z"
        },
        {
            "id": 2,
            "drug_id": 1,
            "indication_name": "Diabetes mellitus",
            "expected_effects": "Reduction of hyperglycemia",
            "common_combinations": "High-fiber diet;SC insulin",
            "is_contraindicated": 0,
            "vdi_display_order": 2,
            "created_at": "2020-09-16T00:15:13.000000Z",
            "updated_at": "2020-09-16T00:15:13.000000Z"
        }
    ];


    let query = "INSERT INTO vdi_treatments (id,drug_id,indication_name,expected_effects,common_combinations,is_contraindicated,vdi_display_order,created_at,updated_at) VALUES";


    for (let i = 0; i < data.length; ++i) {

        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].drug_id //name
            +
            "','" +
            (data[i].indication_name == null ? null : data[i].indication_name.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            (data[i].expected_effects == null ? null : data[i].expected_effects.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            (data[i].common_combinations == null ? null : data[i].common_combinations.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            data[i].is_contraindicated +
            "','" +
            data[i].vdi_display_order +
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
    let treatments = await ExecuteQuery(query, []);;
    console.log('Charles Inserting Treatments.................................')

    console.log('....................................................................');
}

export const insertTreatments = {
    insertTreatmentsToDatabaseAsync
}