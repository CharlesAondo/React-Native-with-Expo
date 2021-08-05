import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Brand Drugs Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Brand Drug into the database!', error);
            });
    });
});

const insertBrandDrugAsync = async() => {

    let data = [{
            "id": 3350,
            "drug_id": 256,
            "brand_id": 1240,
            "created_at": "2020-11-16T03:01:08.000000Z",
            "updated_at": "2020-11-16T03:01:08.000000Z"
        },
        {
            "id": 3351,
            "drug_id": 256,
            "brand_id": 1241,
            "created_at": "2020-11-16T03:01:08.000000Z",
            "updated_at": "2020-11-16T03:01:08.000000Z"
        },
        {
            "id": 3352,
            "drug_id": 256,
            "brand_id": 1242,
            "created_at": "2020-11-16T03:01:08.000000Z",
            "updated_at": "2020-11-16T03:01:08.000000Z"
        },
        {
            "id": 3353,
            "drug_id": 256,
            "brand_id": 1243,
            "created_at": "2020-11-16T03:01:08.000000Z",
            "updated_at": "2020-11-16T03:01:08.000000Z"
        },
        {
            "id": 3354,
            "drug_id": 256,
            "brand_id": 1244,
            "created_at": "2020-11-16T03:01:08.000000Z",
            "updated_at": "2020-11-16T03:01:08.000000Z"
        },
        {
            "id": 3355,
            "drug_id": 256,
            "brand_id": 1245,
            "created_at": "2020-11-16T03:01:08.000000Z",
            "updated_at": "2020-11-16T03:01:08.000000Z"
        },
        {
            "id": 3356,
            "drug_id": 256,
            "brand_id": 1246,
            "created_at": "2020-11-16T03:01:08.000000Z",
            "updated_at": "2020-11-16T03:01:08.000000Z"
        },
        {
            "id": 3357,
            "drug_id": 256,
            "brand_id": 1247,
            "created_at": "2020-11-16T03:01:08.000000Z",
            "updated_at": "2020-11-16T03:01:08.000000Z"
        },
        {
            "id": 3358,
            "drug_id": 256,
            "brand_id": 1248,
            "created_at": "2020-11-16T03:01:08.000000Z",
            "updated_at": "2020-11-16T03:01:08.000000Z"
        },
        {
            "id": 3359,
            "drug_id": 256,
            "brand_id": 1249,
            "created_at": "2020-11-16T03:01:08.000000Z",
            "updated_at": "2020-11-16T03:01:08.000000Z"
        },
        {
            "id": 3360,
            "drug_id": 256,
            "brand_id": 1250,
            "created_at": "2020-11-16T03:01:08.000000Z",
            "updated_at": "2020-11-16T03:01:08.000000Z"
        },
        {
            "id": 3361,
            "drug_id": 256,
            "brand_id": 1251,
            "created_at": "2020-11-16T03:01:08.000000Z",
            "updated_at": "2020-11-16T03:01:08.000000Z"
        }
    ];

    let query = "INSERT INTO vdi_brand_drug (id,drug_id,brand_id,created_at,updated_at) VALUES";
    for (let i = 0; i < data.length; ++i) {
        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].drug_id //name
            +
            "','" +
            data[i].brand_id +
            "','" +
            data[i].created_at //date
            +
            "','" +
            data[i].updated_at //date
            +
            "')";
        if (i != data.length - 1) {
            query = query + ",";
        }
    }
    query = query + ";";
    let brandsInserted = await ExecuteQuery(query, []);
    console.log('Charles Inserting brands Drugs.................................', brandsInserted);
    console.log('....................................................................');

}
export const brandDrug = {
    insertBrandDrugAsync
}