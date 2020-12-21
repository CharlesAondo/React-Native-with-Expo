import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Inserting UNITS into the database Sucessfully!!!', results);
            },
                  (error) => {
                        reject('Failed to inserts UNITS into the database!', error);
                  });
      });
});

const insertUnitsAsync = async () => {
     let data = [
      {
          "id": 1,
          "name": "%",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 2,
          "name": "% of diet",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 3,
          "name": "application",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 4,
          "name": "cm strip of ointment/10 kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 5,
          "name": "drop",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 6,
          "name": "g",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 7,
          "name": "g/5 kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 8,
          "name": "g/CAT",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 9,
          "name": "g/DOG",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 10,
          "name": "g/kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 11,
          "name": "g/kg/day",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 12,
          "name": "g/kg/h",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 13,
          "name": "g/m²",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 14,
          "name": "g/MEAL",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 15,
          "name": "g/teaspoon",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 16,
          "name": "g/tub",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 17,
          "name": "g/vial",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 18,
          "name": "IU",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 19,
          "name": "IU/CAT",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 20,
          "name": "IU/DOG",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 21,
          "name": "IU/kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 22,
          "name": "IU/kg/day",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 23,
          "name": "IU/kg/h",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 24,
          "name": "IU/m²",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 25,
          "name": "IU/mL",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 26,
          "name": "IU/vial",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 27,
          "name": "kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 28,
          "name": "lb",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 29,
          "name": "mEq",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 30,
          "name": "mEq/CAT",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 31,
          "name": "mEq/kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 32,
          "name": "mEq/kg/h",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 33,
          "name": "mEq/mL",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 34,
          "name": "mEq/teaspoon",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 35,
          "name": "mg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 36,
          "name": "mg/0.65g",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 37,
          "name": "mg/10 cm",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 38,
          "name": "mg/945 mg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 39,
          "name": "mg/actuation",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 40,
          "name": "mg/CAT",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 41,
          "name": "mg/CAT/h",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 42,
          "name": "mg/cm³ of tumor tissue",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 43,
          "name": "mg/day",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 44,
          "name": "mg/DOG",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 45,
          "name": "mg/DOSE",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 46,
          "name": "mg/EAR",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 47,
          "name": "mg/EYE",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 48,
          "name": "mg/g",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 49,
          "name": "mg/kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 50,
          "name": "mg/kg/h",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 51,
          "name": "mg/kg/min",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 52,
          "name": "mg/kg/testis",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 53,
          "name": "mg/m²",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 54,
          "name": "mg/m²/day",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 55,
          "name": "mg/mL",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 56,
          "name": "mg/vial",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 57,
          "name": "µg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 58,
          "name": "µg/actuation",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 59,
          "name": "µg/CAT",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 60,
          "name": "µg/DOG",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 61,
          "name": "µg/h",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 62,
          "name": "µg/kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 63,
          "name": "µg/kg/h",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 64,
          "name": "µg/kg/min",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 65,
          "name": "µg/m²",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 66,
          "name": "µg/m²/h",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 67,
          "name": "µg/mL",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 68,
          "name": "µg/vial",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 69,
          "name": "MIU/CAT",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 70,
          "name": "MIU/DOG",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 71,
          "name": "MIU/kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 72,
          "name": "MIU/mL",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 73,
          "name": "MIU/vial",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 74,
          "name": "mL",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 75,
          "name": "mL/CAT",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 76,
          "name": "mL/DOG",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 77,
          "name": "mL/EAR",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 78,
          "name": "mL/h",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 79,
          "name": "mL/kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 80,
          "name": "mL/kg/h",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 81,
          "name": "mL/nasal passage",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 82,
          "name": "mL/testicle",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 83,
          "name": "mmol/kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 84,
          "name": "mmol/kg/h",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 85,
          "name": "mmol/mL ",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 86,
          "name": "ng/kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 87,
          "name": "tablets",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 88,
          "name": "teaspoon",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 89,
          "name": "topical application",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 90,
          "name": "units/mL",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 91,
          "name": "U/CAT",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 92,
          "name": "U/DOG",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 93,
          "name": "U/h",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 94,
          "name": "U/kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 95,
          "name": "U/m²",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 96,
          "name": "U/min",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 97,
          "name": "U/mL",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 98,
          "name": "U/vial",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 99,
          "name": "ng/kg/min",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 100,
          "name": "% of IER",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 101,
          "name": "µmol/kg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 102,
          "name": "mL/kg/day",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 103,
          "name": "mL/kg/min",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 104,
          "name": "IU/µg",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 105,
          "name": "g/pkt",
          "created_at": "2020-05-06T15:44:46.000000Z",
          "updated_at": "2020-05-06T15:44:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 106,
          "name": "mg iodine/kg",
          "created_at": "2020-09-27T22:28:44.000000Z",
          "updated_at": "2020-09-27T22:28:44.000000Z",
          "deleted_at": null
      },
      {
          "id": 109,
          "name": "mg iodine/joint",
          "created_at": "2020-09-27T22:36:13.000000Z",
          "updated_at": "2020-09-27T22:36:13.000000Z",
          "deleted_at": null
      },
      {
          "id": 110,
          "name": "mg iodine/mL",
          "created_at": "2020-09-29T19:45:23.000000Z",
          "updated_at": "2020-09-29T19:45:23.000000Z",
          "deleted_at": null
      },
      {
          "id": 111,
          "name": "2.5 microg/kg/hr",
          "created_at": "2020-09-30T00:49:45.000000Z",
          "updated_at": "2020-09-30T00:49:45.000000Z",
          "deleted_at": null
      },
      {
          "id": 112,
          "name": "g/L PEG",
          "created_at": "2020-09-30T01:07:07.000000Z",
          "updated_at": "2020-09-30T01:07:07.000000Z",
          "deleted_at": null
      },
      {
          "id": 113,
          "name": "g packet",
          "created_at": "2020-10-01T01:09:40.000000Z",
          "updated_at": "2020-10-01T01:09:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 114,
          "name": "g secnidazole",
          "created_at": "2020-10-01T01:09:55.000000Z",
          "updated_at": "2020-10-01T01:09:55.000000Z",
          "deleted_at": null
      },
      {
          "id": 115,
          "name": "million units/tablet",
          "created_at": "2020-10-01T01:25:00.000000Z",
          "updated_at": "2020-10-01T01:25:00.000000Z",
          "deleted_at": null
      },
      {
          "id": 116,
          "name": "units/kg",
          "created_at": "2020-10-01T01:32:03.000000Z",
          "updated_at": "2020-10-01T01:32:03.000000Z",
          "deleted_at": null
      },
      {
          "id": 117,
          "name": "drop/eye",
          "created_at": "2020-11-16T02:31:31.000000Z",
          "updated_at": "2020-11-16T02:31:31.000000Z",
          "deleted_at": null
      }
  ];
let query = "INSERT INTO vdi_units (id, name, created_at, updated_at,deleted_at) VALUES";
      for (let i = 0; i < data.length; ++i) {
            query = query + "('"
                  + data[i].id //id
                  + "','"
                  + data[i].name //first_name
                  + "','"
                  + data[i].created_at //name
                  + "','"
                  + data[i].updated_at //updated at
                  + "','"
                  + data[i].deleted_at //is_deleted
                  + "')";
            if (i != data.length - 1) {
                  query = query + ",";
            }
      }
      query = query + ";";

      let insertedUnits = await ExecuteQuery(query, []);
      console.log('Charles Inserting Units.................................', insertedUnits);
      console.log('....................................................................');


}
export const insertUnits = {
      insertUnitsAsync

}
