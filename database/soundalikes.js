import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')


const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Sound alikes Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Sound alikes into the database!', error);
            });
    });
});


const insertSoundAlikesAsync = async() => {
    let data = [

        {
            "id": 458,
            "drug_id": 14,
            "word": "Fomepizole",
            "notes": "ethylene glycol antidote",
            "created_at": "2020-11-04T02:21:14.000000Z",
            "updated_at": "2020-11-04T02:21:14.000000Z",
            "deleted_at": null
        },
        {
            "id": 459,
            "drug_id": 14,
            "word": "Fenbendazole",
            "notes": "other benzimidazole antiparasitic",
            "created_at": "2020-11-04T02:21:14.000000Z",
            "updated_at": "2020-11-04T02:21:14.000000Z",
            "deleted_at": null
        }
    ];


    let query = "INSERT INTO vdi_soundalikes (id,drug_id,word,notes,created_at,updated_at) VALUES";
    for (let i = 0; i < data.length; ++i) {
        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].drug_id //drug id
            +
            "','" +
            data[i].word +
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

    let insertedSoundAlikes = await ExecuteQuery(query, []);
    console.log('Charles Inserting Soundalikes.................................', insertedSoundAlikes);
    console.log('....................................................................');


}
export const soundalikes = {
    insertSoundAlikesAsync

}