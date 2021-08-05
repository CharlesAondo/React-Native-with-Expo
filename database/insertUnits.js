import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Inserting UNITS into the database Sucessfully!!!', results);
            },
            (error) => {
                reject('Failed to inserts UNITS into the database!', error);
            });
    });
});

const insertUnitsAsync = async() => {
    let data = [{
            "id": 1,
            "name": "%",
            "created_at": "2020-05-06T15:44:46.000000Z",
            "updated_at": "2020-05-06T15:44:46.000000Z",
            "deleted_at": null
        },
        {
            "id": 2,
            "name": "% of diet",
            "created_at": "2020-05-06T15:44:46.000000Z",
            "updated_at": "2020-05-06T15:44:46.000000Z",
            "deleted_at": null
        }
    ];
    let query = "INSERT INTO vdi_units (id, name, created_at, updated_at,deleted_at) VALUES";
    for (let i = 0; i < data.length; ++i) {
        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].name //first_name
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

    let insertedUnits = await ExecuteQuery(query, []);
    console.log('Charles Inserting Units.................................', insertedUnits);
    console.log('....................................................................');


}
export const insertUnits = {
    insertUnitsAsync

}