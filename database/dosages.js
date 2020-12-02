import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Dosages Succesfully inserted into the database', results);
            },
                  (error) => {
                        reject('Failed to inserts Dosagess into the database!', error);
                  });
      });
});

const insertDosagesToDatabaseAsync = async() ={
      
}