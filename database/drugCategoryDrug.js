import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Drug Category Drugs Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Drug Category Drug into the database!', error);
            });
    });
});

const insertDrugCategoriesAsync = async() => {

    let data = [{
            "id": 1,
            "category_id": 1,
            "drug_id": 1,
            "created_at": "2020-05-06 15:45:56",
            "updated_at": "2020-05-06 15:45:56"
        },
        {
            "id": 8,
            "category_id": 8,
            "drug_id": 8,
            "created_at": "2020-05-06 15:57:15",
            "updated_at": "2020-05-06 15:57:15"
        },
        {
            "id": 10,
            "category_id": 10,
            "drug_id": 10,
            "created_at": "2020-05-06 15:58:51",
            "updated_at": "2020-05-06 15:58:51"
        },
        {
            "id": 12,
            "category_id": 12,
            "drug_id": 12,
            "created_at": "2020-05-06 16:01:14",
            "updated_at": "2020-05-06 16:01:14"
        },
        {
            "id": 15,
            "category_id": 15,
            "drug_id": 15,
            "created_at": "2020-05-06 16:06:21",
            "updated_at": "2020-05-06 16:06:21"
        },
        {
            "id": 17,
            "category_id": 17,
            "drug_id": 17,
            "created_at": "2020-05-06 16:08:28",
            "updated_at": "2020-05-06 16:08:28"
        },
        {
            "id": 19,
            "category_id": 19,
            "drug_id": 19,
            "created_at": "2020-05-06 16:10:19",
            "updated_at": "2020-05-06 16:10:19"
        },
        {
            "id": 20,
            "category_id": 20,
            "drug_id": 20,
            "created_at": "2020-05-06 16:11:45",
            "updated_at": "2020-05-06 16:11:45"
        },
        {
            "id": 21,
            "category_id": 21,
            "drug_id": 21,
            "created_at": "2020-05-06 16:12:26",
            "updated_at": "2020-05-06 16:12:26"
        },
        {
            "id": 24,
            "category_id": 24,
            "drug_id": 24,
            "created_at": "2020-05-06 16:15:10",
            "updated_at": "2020-05-06 16:15:10"
        },
        {
            "id": 25,
            "category_id": 25,
            "drug_id": 25,
            "created_at": "2020-05-06 16:16:24",
            "updated_at": "2020-05-06 16:16:24"
        }

    ];
    let query = "INSERT INTO vdi_drug_category_drug (id,category_id,drug_id,created_at,updated_at) VALUES";


    for (let i = 0; i < data.length; ++i) {

        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].category_id +
            "','" +
            data[i].drug_id +
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
    console.log('Charles Inserting Drug  Categories.................................', categories)

    console.log('....................................................................');
}

export const drugCategoryDrug = {
    insertDrugCategoriesAsync
}