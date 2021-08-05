import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')


const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Formulations Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Formulations into the database!', error);
            });
    });
});


const insertFormulationsAsync = async() => {
    let data = [{
            "id": 1,
            "drug_id": 1,
            "available_drug_form_id": 1,
            "target": "Veterinary",
            "concentrations": "25;50;100",
            "unit_id": 35,
            "notes": "",
            "created_at": "2020-05-06T15:45:07.000000Z",
            "updated_at": "2020-05-06T15:45:07.000000Z"
        },
        {
            "id": 2,
            "drug_id": 2,
            "available_drug_form_id": 2,
            "target": "Human",
            "concentrations": "1",
            "unit_id": 55,
            "notes": "lyophilized powder",
            "created_at": "2020-05-06T15:46:04.000000Z",
            "updated_at": "2020-11-04T01:53:13.000000Z"
        },
        {
            "id": 3,
            "drug_id": 2,
            "available_drug_form_id": 3,
            "target": "Human",
            "concentrations": "1",
            "unit_id": 55,
            "notes": "lyophilized powder",
            "created_at": "2020-05-06T15:46:12.000000Z",
            "updated_at": "2020-11-04T01:53:13.000000Z"
        },
        {
            "id": 4,
            "drug_id": 3,
            "available_drug_form_id": 2,
            "target": "Human",
            "concentrations": "2;10",
            "unit_id": 55,
            "notes": "",
            "created_at": "2020-05-06T15:47:25.000000Z",
            "updated_at": "2020-11-04T01:57:44.000000Z"
        },
        {
            "id": 5,
            "drug_id": 3,
            "available_drug_form_id": 1,
            "target": "Human",
            "concentrations": "10;25",
            "unit_id": 35,
            "notes": "",
            "created_at": "2020-05-06T15:47:33.000000Z",
            "updated_at": "2020-11-04T01:57:44.000000Z"
        },
        {
            "id": 6,
            "drug_id": 4,
            "available_drug_form_id": 1,
            "target": "Human",
            "concentrations": "325",
            "unit_id": 35,
            "notes": "",
            "created_at": "2020-05-06T15:50:20.000000Z",
            "updated_at": "2020-11-04T16:59:50.000000Z"
        }
    ];


    let query = "INSERT INTO vdi_drug_forms (id,drug_id,available_drug_form_id,target,concentrations,unit_id,notes,created_at,updated_at) VALUES";
    for (let i = 0; i < data.length; ++i) {
        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].drug_id //drug id
            +
            "','" +
            data[i].available_drug_form_id //formats references id
            +
            "','" +
            data[i].target //formulation target
            +
            "','" +
            data[i].concentrations //drug id
            +
            "','" +
            data[i].unit_id //unit references table id
            +
            "','" +
            (data[i].notes == null ? null : data[i].notes.replace(/[`~!@#$^?'"\\]/gi, '\\')) +
            "','" +
            data[i].created_at +
            "','" +
            data[i].updated_at +
            "')";
        if (i != data.length - 1) {
            query = query + ",";
        }
    }
    query = query + ";";

    let insertedFormulations = await ExecuteQuery(query, []);
    console.log('Charles Inserting Formulations.................................', insertedFormulations);
    console.log('....................................................................');


}
export const formulations = {
    insertFormulationsAsync

}