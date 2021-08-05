import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')


const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Formats Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Formats into the database!', error);
            });
    });
});


const insertFormatsAsync = async() => {
    let data = [{
            "id": 1,
            "target": "veterinary",
            "name": "Tab",
            "abbreviation": null,
            "created_at": "2020-05-06T15:44:49.000000Z",
            "updated_at": "2020-05-06T15:44:49.000000Z",
            "deleted_at": null
        },
        {
            "id": 2,
            "target": "veterinary",
            "name": "Inj",
            "abbreviation": null,
            "created_at": "2020-05-06T15:44:49.000000Z",
            "updated_at": "2020-05-06T15:44:49.000000Z",
            "deleted_at": null
        },
        {
            "id": 3,
            "target": "veterinary",
            "name": "Oral solution",
            "abbreviation": null,
            "created_at": "2020-05-06T15:44:49.000000Z",
            "updated_at": "2020-05-06T15:44:49.000000Z",
            "deleted_at": null
        },
        {
            "id": 4,
            "target": "veterinary",
            "name": "Cap (sustained-release)",
            "abbreviation": null,
            "created_at": "2020-05-06T15:44:49.000000Z",
            "updated_at": "2020-05-06T15:44:49.000000Z",
            "deleted_at": null
        }
    ]
    let query = "INSERT INTO vdi_available_drug_forms (id, target, name,abbreviation,created_at, updated_at,deleted_at) VALUES";
    for (let i = 0; i < data.length; ++i) {
        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].target //first_name
            +
            "','" +
            data[i].name //first_name
            +
            "','" +
            data[i].abbreviation //first_name
            +
            "','" +
            data[i].created_at //name
            +
            "','" +
            data[i].updated_at //updated at
            +
            "','" +
            data[i].deleted_at //is_deleted
            +
            "')";
        if (i != data.length - 1) {
            query = query + ",";
        }
    }
    query = query + ";";

    let insertedFormats = await ExecuteQuery(query, []);
    console.log('Charles Inserting Formats.................................', insertedFormats);
    console.log('....................................................................');


}
export const formats = {
    insertFormatsAsync

}