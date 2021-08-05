import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Treatment References Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Treatment References into the database!', error);
            });
    });
});

const insertTreatmentReferenceToDatabaseAsync = async() => {
    let data = [{
            "id": 2081,
            "treatment_id": 2085,
            "title": null,
            "pub_med_id": 24146058,
            "url": null,
            "ebm": 4,
            "created_at": "2020-11-12T20:39:03.000000Z",
            "updated_at": "2020-11-12T20:39:03.000000Z",
            "deleted_at": null
        },
        {
            "id": 2082,
            "treatment_id": 2086,
            "title": null,
            "pub_med_id": 24146058,
            "url": null,
            "ebm": 4,
            "created_at": "2020-11-12T20:39:03.000000Z",
            "updated_at": "2020-11-12T20:39:03.000000Z",
            "deleted_at": null
        },
        {
            "id": 2083,
            "treatment_id": 2087,
            "title": null,
            "pub_med_id": 24016312,
            "url": null,
            "ebm": 4,
            "created_at": "2020-11-12T20:50:11.000000Z",
            "updated_at": "2020-11-12T20:50:11.000000Z",
            "deleted_at": null
        }
    ];


    let query = "INSERT INTO vdi_treatment_references (id,treatment_id,title,pub_med_id,url,ebm, created_at, updated_at,deleted_at) VALUES";


    for (let i = 0; i < data.length; ++i) {
        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].treatment_id //id
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
    let referencesInserted = await ExecuteQuery(query, []);
    console.log('Charles Inserting Treatment R Reference.................................', referencesInserted);
    console.log('....................................................................');

}
export const treatment_references = {
    insertTreatmentReferenceToDatabaseAsync
}