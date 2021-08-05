import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Pearls Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Pearls into the database!', error);
            });
    });
});


const insertPearlsToDatabaseAsync = async() => {

    let query = "INSERT INTO vdi_pearls (id,drug_id,notes,is_visible,display_order,created_at,updated_at,deleted_at) VALUES";
    let data = [{
            "id": 1,
            "drug_id": 1,
            "notes": "Limited efficacy over time; most patients need concurrent insulin initially or eventually",
            "is_visible": 0,
            "display_order": 1,
            "created_at": "2020-05-06T15:45:47.000000Z",
            "updated_at": "2020-05-06T15:45:47.000000Z",
            "deleted_at": null
        },
        {
            "id": 2,
            "drug_id": 2,
            "notes": "Efficacy debated but safety margin appears high",
            "is_visible": 0,
            "display_order": 1,
            "created_at": "2020-05-06T15:47:14.000000Z",
            "updated_at": "2020-05-06T15:47:14.000000Z",
            "deleted_at": null
        }
    ];

    for (let i = 0; i < data.length; ++i) {
        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].drug_id //id
            +
            "','" +
            (data[i].notes == null ? null : data[i].notes.replace(/[`~!@#$^?'"\\]/gi, '\\')) +
            "','" +
            data[i].is_visible +
            "','" +
            data[i].display_order +
            "','" +
            data[i].created_at +
            "','" +
            data[i].updated_at +
            "','" +
            data[i].deleted_at +
            "')";
        if (i != data.length - 1) {
            query = query + ",";
        }
    }
    query = query + ";";
    let pearlssInserted = await ExecuteQuery(query, []);
    console.log('Charles Inserting Pearls.................................', pearlssInserted);
    console.log('....................................................................');


}

export const pearls = {
    insertPearlsToDatabaseAsync
}