import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Categories Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Categories into the database!', error);
            });
    });
});

const insertCategoriesAsync = async() => {

    let data = [

        {
            "id": 511,
            "guid": "new_vdi_category",
            "name": "nonsteroidal anti-inflammatory (prostaglandin E2 antagonist)",
            "created_at": "2020-09-29T13:18:59.000000Z",
            "updated_at": "2020-09-29T13:18:59.000000Z"
        },
        {
            "id": 512,
            "guid": "new_vdi_category",
            "name": "monoclonal antibody",
            "created_at": "2020-09-29T23:18:38.000000Z",
            "updated_at": "2020-09-29T23:18:38.000000Z"
        },
        {
            "id": 513,
            "guid": "new_vdi_category",
            "name": "anorexigenic",
            "created_at": "2020-09-29T23:53:41.000000Z",
            "updated_at": "2020-09-29T23:53:41.000000Z"
        },
        {
            "id": 514,
            "guid": "new_vdi_category",
            "name": "bowel preparation agent, laxative",
            "created_at": "2020-09-30T01:02:11.000000Z",
            "updated_at": "2020-09-30T01:02:11.000000Z"
        },
        {
            "id": 515,
            "guid": "new_vdi_category",
            "name": "antineoplastic chemotherapeutic (acyclic nucleotide phosphonate)",
            "created_at": "2020-10-01T00:26:55.000000Z",
            "updated_at": "2020-10-01T00:26:55.000000Z"
        },
        {
            "id": 516,
            "guid": "new_vdi_category",
            "name": "antibacterial (rifamycin class)",
            "created_at": "2020-10-01T00:44:45.000000Z",
            "updated_at": "2020-10-01T00:44:45.000000Z"
        },
        {
            "id": 517,
            "guid": "new_vdi_category",
            "name": "antibacterial (aminocyclitol)",
            "created_at": "2020-10-01T01:18:45.000000Z",
            "updated_at": "2020-10-01T01:18:45.000000Z"
        },
    ];
    let query = "INSERT INTO vdi_drug_categories (id,guid,name,created_at,updated_at) VALUES";


    for (let i = 0; i < data.length; ++i) {

        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].guid +
            "','" +
            (data[i].name == null ? null : data[i].name.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
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
    let categories = await ExecuteQuery(query, []);;
    console.log('Charles Inserting Categories.................................', categories)

    console.log('....................................................................');
}

export const categories = {
    insertCategoriesAsync
}