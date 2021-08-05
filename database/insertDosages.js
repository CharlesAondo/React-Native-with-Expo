import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Inserting Dosages into the database Sucessfully!!!', results);
            },
            (error) => {
                reject('Failed to inserts Dosages into the database!', error);
            });
    });
});

const insertDosagesAsync = async() => {
    let data = [{
            "id": 1,
            "treatment_id": 1,
            "label": "Body weight ≤10 kg",
            "dose_min": "25",
            "dose_max": "50",
            "unit": "44",
            "route": "1",
            "duration": "As long as effective for diabetes control, without side-effects",
            "interval": "q meal",
            "display_order": 1,
            "administrative_notes": "",
            "pretreatment_notes": "",
            "created_at": "2020-05-06T15:45:19.000000Z",
            "updated_at": "2020-05-06T15:45:19.000000Z"
        },
        {
            "id": 2,
            "treatment_id": 2,
            "label": "Body weight >10 kg",
            "dose_min": "50",
            "dose_max": "110",
            "unit": "44",
            "route": "1",
            "duration": "As long as effective for diabetes control, without side-effects",
            "interval": "q meal",
            "display_order": 1,
            "administrative_notes": "",
            "pretreatment_notes": "",
            "created_at": "2020-05-06T15:45:31.000000Z",
            "updated_at": "2020-05-06T15:45:31.000000Z"
        },
        {
            "id": 3,
            "treatment_id": 3,
            "label": null,
            "dose_min": "12.5",
            "dose_max": "",
            "unit": "40",
            "route": "1",
            "duration": "As long as effective for diabetes control, without side-effects",
            "interval": "q 12h",
            "display_order": 1,
            "administrative_notes": "",
            "pretreatment_notes": "",
            "created_at": "2020-05-06T15:45:44.000000Z",
            "updated_at": "2020-05-06T15:45:44.000000Z"
        },
    ];

    let query = "INSERT INTO vdi_dosages (id,treatment_id,label,dose_min,dose_max,unit,route,duration,interval,display_order,administrative_notes,pretreatment_notes,created_at,updated_at) VALUES";


    for (let i = 0; i < data.length; ++i) {
        query = query + "('" +
            data[i].id //id
            +
            "','" +
            data[i].treatment_id //foreign key
            +
            "','" +
            (data[i].label == null ? null : data[i].label.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            data[i].dose_min //values for calculator
            +
            "','" +
            data[i].dose_max //values for calculator
            +
            "','" +
            data[i].unit //values for calculator
            +
            "','" +
            data[i].route //values for calculator
            +
            "','" +
            (data[i].duration == null ? null : data[i].duration.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            (data[i].interval == null ? null : data[i].interval.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            (data[i].display_order) +
            "','" +
            (data[i].administrative_notes == null ? null : data[i].administrative_notes.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            (data[i].pretreatment_notes == null ? null : data[i].pretreatment_notes.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
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
    let insertDosages = await ExecuteQuery(query, []);;
    console.log('Charles Inserting Dosages.................................', insertDosages)

    console.log('....................................................................');

}



export const insertDosages = {
    insertDosagesAsync
}