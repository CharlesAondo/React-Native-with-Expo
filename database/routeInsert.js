import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Inserting Routes into the database Sucessfully!!!', results);
            },
            (error) => {
                reject('Failed to inserts Routes into the database!', error);
            });
    });
});

const insertRoutesAsync = async() => {

    let routes = [{
            "id": 1,
            "name": "PO",
            "created_at": "2020-05-22T15:04:24.000000Z",
            "updated_at": "2020-05-22T15:04:24.000000Z"
        },
        {
            "id": 2,
            "name": "IV, SC",
            "created_at": "2020-05-22T15:04:24.000000Z",
            "updated_at": "2020-05-22T15:04:24.000000Z"
        }
    ];
    let query2 = "INSERT INTO vdi_routes (id, name, created_at, updated_at) VALUES";
    for (let i = 0; i < routes.length; ++i) {
        query2 = query2 + "('" +
            routes[i].id //id
            +
            "','" +
            routes[i].name //first_name
            +
            "','" +
            routes[i].created_at //last_name
            +
            "','" +
            routes[i].updated_at //is_deleted
            +
            "')";
        if (i != routes.length - 1) {
            query2 = query2 + ",";
        }
    }
    query2 = query2 + ";";

    let insertedRoutes = await ExecuteQuery(query2, []);
    console.log('Charles Inserting vdi_routes.................................', insertedRoutes);
    console.log('....................................................................');
}

export const routeInsert = {
    insertRoutesAsync

}