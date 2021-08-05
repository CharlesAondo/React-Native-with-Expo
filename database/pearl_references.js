import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Pearl References Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Pearl References into the database!', error);
            });
    });
});

const insertPearlReferenceToDatabaseAsync = async() => {
    let data = [{
            "id": 1,
            "pearl_id": 354,
            "title": null,
            "pub_med_id": 8961524,
            "url": null,
            "ebm": 1,
            "display_order": 1,
            "created_at": "2020-05-06T18:37:05.000000Z",
            "updated_at": "2020-05-06T18:37:05.000000Z",
            "deleted_at": null
        },
        {
            "id": 2,
            "pearl_id": 396,
            "title": null,
            "pub_med_id": 17186841,
            "url": null,
            "ebm": 1,
            "display_order": 1,
            "created_at": "2020-05-06T19:03:31.000000Z",
            "updated_at": "2020-05-06T19:03:31.000000Z",
            "deleted_at": null
        }
    ];

    let query = "INSERT INTO vdi_pearl_references (id,pearl_id,title,pub_med_id,url,ebm,display_order, created_at, updated_at,deleted_at) VALUES";


    for (let i = 0; i < data.length; ++i) {
        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].pearl_id //id
            +
            "','" +
            (data[i].title == null ? null : data[i].title.replace(/[`~!@#$^?'"\\]/gi, '\\')) +
            "','" +
            (data[i].pub_med_id !== null ? data[i].pub_med_id : null) +
            "'," +
            (data[i].url !== null ? "'" + data[i].url + "'" : null) +
            ",'" +
            data[i].ebm +
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
    let pearlsReferencesInserted = await ExecuteQuery(query, []);
    console.log('Charles Inserting Pearls Reference.................................', pearlsReferencesInserted);
    console.log('....................................................................');

}
export const pearl_references = {
    insertPearlReferenceToDatabaseAsync
}