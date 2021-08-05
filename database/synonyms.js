import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('vdi_drug_synonyms  Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts vdi_drug_synonyms into the database!', error);
            });
    });
});

const insertDrugSynonymsToDatabaseAsync = async() => {

    let data = [

        {
            "id": 123,
            "drug_id": 491,
            "name": "Protirelin",
            "is_visible": 0,
            "created_at": "2020-05-07T03:07:36.000000Z",
            "updated_at": "2020-05-07T03:07:36.000000Z",
            "deleted_at": null
        }
    ];

    let query = "INSERT INTO vdi_drug_synonyms (id,drug_id,is_visible,name,created_at,updated_at,deleted_at) VALUES";
    for (let i = 0; i < data.length; ++i) {
        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].drug_id +
            "','" +
            data[i].is_visible +
            "','" +
            data[i].name //name
            +
            "','" +
            data[i].created_at //date
            +
            "','" +
            data[i].updated_at //date
            +
            "','" +
            data[i].deleted_at //date
            +
            "')";
        if (i != data.length - 1) {
            query = query + ",";
        }
    }
    query = query + ";";
    let synonymsInserted = await ExecuteQuery(query, []);
    console.log('Charles Inserting Drug Synonyms.................................', synonymsInserted);
    console.log('....................................................................');

}
export const synonyms = {
    insertDrugSynonymsToDatabaseAsync

}