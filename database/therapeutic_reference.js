import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Therapeutic References Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Therapeutic References into the database!', error);
            });
    });
});

const insertTherapeuticReferencesAsync = async() => {
    let query = "INSERT INTO vdi_therapeutic_references (id,drug_id,title,pub_med_id,url,ebm, created_at, updated_at,deleted_at) VALUES";
    let data = [{
            "id": 30,
            "drug_id": 126,
            "title": null,
            "pub_med_id": 25379734,
            "url": null,
            "ebm": null,
            "created_at": "2020-11-08T14:20:06.000000Z",
            "updated_at": "2020-11-08T14:20:06.000000Z",
            "deleted_at": null
        },
        {
            "id": 31,
            "drug_id": 231,
            "title": null,
            "pub_med_id": 24446399,
            "url": null,
            "ebm": null,
            "created_at": "2020-11-16T00:41:57.000000Z",
            "updated_at": "2020-11-16T00:41:57.000000Z",
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
    console.log('Charles Inserting Therapeutic References.................................', precautionReferencesInserted);
    console.log('....................................................................');


}
export const therapeutic_references = {
    insertTherapeuticReferencesAsync
}