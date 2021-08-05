import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Precaution References Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Precaution References into the database!', error);
            });
    });
});

const insertPrecautionReferences = async() => {
    let query = "INSERT INTO vdi_precaution_references (id,drug_id,title,pub_med_id,url,ebm, created_at, updated_at,deleted_at) VALUES";
    let data = [

        {
            "id": 459,
            "drug_id": 192,
            "title": null,
            "pub_med_id": 28750787,
            "url": null,
            "ebm": null,
            "created_at": "2020-11-11T20:10:32.000000Z",
            "updated_at": "2020-11-11T20:10:32.000000Z",
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
            (data[i].title == null ? null : data[i].title.replace(/[`~!@#$^?'"\\]/gi, '\\')) +
            "','" +
            data[i].pub_med_id +
            "','" +
            data[i].url +
            "','" +
            data[i].ebm +
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
    let precautionReferencesInserted = await ExecuteQuery(query, []);
    console.log('Charles Inserting Preacaution References.................................', precautionReferencesInserted);
    console.log('....................................................................');

}
export const precaution_references = {
    insertPrecautionReferences
}