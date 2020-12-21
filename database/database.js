import React, { useEffect } from 'react';

import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')


const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Database Succesfully Initating', results);
            },
                  (error) => {
                        reject('Fail to Create Table', error);
                  });
      });
});


const dropDatabaseTablesAsync = async () => {
      /*
      let vdiRoutes = await ExecuteQuery("DROP TABLE vdi_routes", []);
      console.log('Dropping vdi_routes_table.......', vdiRoutes);

      let vdiCalculators = await ExecuteQuery("DROP TABLE vdi_calculators", []);
      console.log('Dropping vdi_calculators.......', vdiCalculators);

      let species =  ExecuteQuery("DROP TABLE vdi_animal_types", []);
      console.log('Dropping vdi_animal_types.......', species);

      let drugFormat = await ExecuteQuery("DROP TABLE vdi_available_drug_forms", []);
      console.log('Dropping vdi_available_drug_forms.......', drugFormat);

      let units = await ExecuteQuery("DROP TABLE vdi_unit", []);
      console.log('Dropping vdi_unit.......', units);
      */

      let drugs = await ExecuteQuery("DROP TABLE vdi_drugs", []);
      // console.log('Dropping vdi_drugs.......',drugs);

}


const setupCreateTablesAsync = async () => {

      let RoutesTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_routes (id INTEGER PRIMARY KEY AUTOINCREMENT,name varchar(128)  NOT NULL,created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL)", []);
      console.log("Charles Creating VDI Routes! Table...........", RoutesTable);
      console.log('....................................................................');




      let CalculatorTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_calculators(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL)", []);
      console.log("Charles Creating Calculator! Table...........", CalculatorTable);
      console.log('....................................................................');



      let AnimalTypes = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_animal_types (id INTEGER PRIMARY KEY AUTOINCREMENT, guid varchar(24),name varchar(191),adjective varchar(191),latin_name varchar(191),created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL,deleted_at timestamp NULL DEFAULT NULL)", []);
      console.log("Charles Creating Animal Type! Table...........", AnimalTypes);
      console.log('....................................................................');


      let drugFormatTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_available_drug_forms (id INTEGER PRIMARY KEY AUTOINCREMENT,target  varchar(128)  NOT NULL,name varchar(255),created_at timestamp NULL DEFAULT NULL,abbreviation varchar(24),updated_at timestamp NULL DEFAULT NULL,deleted_at timestamp NULL DEFAULT NULL)", []);
      console.log("Charles Creating vdi_available_drug_forms! Table...........", drugFormatTable);
      console.log('....................................................................');


      let drugsUnits = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_unit (id INTEGER PRIMARY KEY AUTOINCREMENT,name varchar(255),created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL,deleted_at timestamp NULL DEFAULT NULL)", []);
      console.log("Charles Creating VDI Drug Units! Table...........", drugsUnits);
      console.log('....................................................................');



      let drugsTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_drugs (id INTEGER PRIMARY KEY AUTOINCREMENT,guid varchar(25),name varchar(255),formulation_species_id INTEGER(10),notes string,target_serum_levels string,reversal_agent string,teratogenicity string,contraindications string,interactions string,adverse_effects string,deleted_at timestamp NULL DEFAULT NULL,created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL)", []);      console.log("Charles Creating VDI Drugs! Table...........", drugsTable);
      console.log('....................................................................');

      let brandsTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_brands (id INTEGER PRIMARY KEY AUTOINCREMENT,name varchar(255),vdi_is_human_ca_brand INTEGER(10),vdi_is_human_uk_brand INTEGER(10),vdi_is_human_us_brand INTEGER(10),vdi_is_vet_ca_brand INTEGER(10),vdi_is_vet_us_brand INTEGER(10),vdi_is_vet_uk_brand INTEGER(10),vdi_is_other_countries INTEGER(10),deleted_at timestamp NULL DEFAULT NULL,created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL)", []);
      console.log("Charles Creating VDI Brands! Table...........", brandsTable);
      console.log('....................................................................');


      let brandDrugsTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_brand_drug (id INTEGER PRIMARY KEY AUTOINCREMENT,drug_id INTEGER(10),brand_id INTEGER(10),created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL,FOREIGN KEY (brand_id) REFERENCES vdi_brands(id),FOREIGN KEY (drug_id) REFERENCES vdi_drugs(id))",'PRAGMA foreign_keys = ON', []);
      console.log("Charles Creating VDI Brands Drug! Table...........", brandDrugsTable);
      console.log('....................................................................');


      let categoryTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_drug_categories (id INTEGER PRIMARY KEY AUTOINCREMENT,guid varchar(24),name varchar(255),created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL)", []);
      console.log("Charles Creating VDI  Categories! Table...........", categoryTable);
      console.log('....................................................................');

      let drugCategoryDrug = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_drug_category_drug (id INTEGER PRIMARY KEY AUTOINCREMENT,category_id INTERGER(10),drug_id INTERGER(10),created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL,FOREIGN KEY (category_id) REFERENCES vdi_drug_categories(id),FOREIGN KEY (drug_id) REFERENCES vdi_drugs(id))",'PRAGMA foreign_keys = ON', []);
      console.log("Charles Creating VDI  Drug Cateogries Drugs! Table...........", drugCategoryDrug);
      console.log('....................................................................');



      let treatmentTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_treatments (id INTEGER PRIMARY KEY AUTOINCREMENT,drug_id INTEGER,indication_name text,expected_effects BLOB,common_combinations text,is_contraindicated INTEGER,vdi_display_order INTEGER,created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL, FOREIGN KEY (drug_id) REFERENCES vdi_drugs(id))",'PRAGMA foreign_keys = ON', []);
      console.log("Charles Creating Treatments! Table...........", treatmentTable);
      console.log('....................................................................');


      let pearlsTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_pearls (id INTEGER PRIMARY KEY AUTOINCREMENT,drug_id INTEGER,notes text,is_visible INTEGER,display_order INTEGER,created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL,deleted_at timestamp NULL DEFAULT NULL,FOREIGN KEY (drug_id) REFERENCES vdi_drugs(id))",'PRAGMA foreign_keys = ON', []);
      console.log("Charles Creating Pearls! Table...........", pearlsTable);
      console.log('....................................................................');


      let pearlReferences = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_pearl_references (id INTEGER PRIMARY KEY AUTOINCREMENT,pearl_id INTERGER(10),title varchar(255),pub_med_id INTERGER(10),url varchar(255),ebm INTERGER(10),display_order INTERGER(10),created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL,deleted_at timestamp NULL DEFAULT NULL,FOREIGN KEY (pearl_id) REFERENCES vdi_pearls(id))",'PRAGMA foreign_keys = ON', []);
      console.log("Charles Creating VDI  Pearl References! Table...........", pearlReferences);
      console.log('....................................................................');



      let precautionReferences = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_precaution_references (id INTEGER PRIMARY KEY AUTOINCREMENT,drug_id INTERGER(10),title varchar(255),pub_med_id INTERGER(10),url varchar(255),ebm INTERGER(10),display_order INTERGER(10),created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL,deleted_at timestamp NULL DEFAULT NULL,FOREIGN KEY (drug_id) REFERENCES vdi_drugs(id))",'PRAGMA foreign_keys = ON', []);
      console.log("Charles Creating VDI  Pearl References! Table...........", precautionReferences);
      console.log('....................................................................');


      let units = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_units (id INTEGER PRIMARY KEY AUTOINCREMENT,name varchar(255),created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL,deleted_at timestamp NULL DEFAULT NULL)", []);
      console.log("Charles Creating VDI  UNITS! Table...........", units);
      console.log('....................................................................');


      let dosageTables = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_dosages (id INTEGER PRIMARY KEY AUTOINCREMENT,treatment_id INTEGER,label text,dose_min varchar,dose_max varchar,unit INTEGER,route INTEGER,duration text,interval text,display_order INTEGER,administrative_notes text,pretreatment_notes text,created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL,FOREIGN KEY (treatment_id) REFERENCES vdi_treatments(id))",'PRAGMA foreign_keys = ON', []);
      console.log("Charles Creating Dosages! Table...........", dosageTables);
      console.log('....................................................................');



}
const insertCalculator = async () => {
      let query = "INSERT INTO vdi_calculators (id, name, created_at, updated_at) VALUES";
      let calculators =
            [
                  {
                        "id": 1,
                        "name": "Basic Calculator",
                        "created_at": "2020-05-06T15:44:54.000000Z",
                        "updated_at": "2020-05-06T15:44:54.000000Z"
                  },
                  {
                        "id": 2,
                        "name": "CRI Calculator",
                        "created_at": "2020-05-06T15:44:54.000000Z",
                        "updated_at": "2020-05-06T15:44:54.000000Z"
                  },
                  {
                        "id": 3,
                        "name": "CRI/Basic",
                        "created_at": "2020-05-06T15:44:58.000000Z",
                        "updated_at": "2020-05-06T15:44:50.000000Z"
                  }
            ];
      for (let i = 0; i < calculators.length; ++i) {
            query = query + "('"
                  + calculators[i].id //id
                  + "','"
                  + calculators[i].name //name
                  + "','"
                  + calculators[i].created_at //date
                  + "','"
                  + calculators[i].updated_at //date
                  + "')";
            if (i != calculators.length - 1) {
                  query = query + ",";
            }
      }
      query = query + ";";
      let calculatorInsert = await ExecuteQuery(query, []);
      console.log('Charles Inserting Calculators.................................', calculatorInsert);
      console.log('....................................................................');
}
const insertAnimalTypes = async () => {
      let query = "INSERT INTO vdi_animal_types (id, guid,name, adjective,latin_name,created_at, updated_at) VALUES";
      let animalTypes =
            [
                  {
                        "id": 1,
                        "name": "CAT",
                        "created_at": "2020-05-06T15:44:54.000000Z",
                        "updated_at": "2020-05-06T15:44:54.000000Z"
                  },

            ];
      for (let i = 0; i < calculators.length; ++i) {
            query = query + "('"
                  + calculators[i].id //id
                  + "','"
                  + calculators[i].name //name
                  + "','"
                  + calculators[i].created_at //date
                  + "','"
                  + calculators[i].updated_at //date
                  + "')";
            if (i != calculators.length - 1) {
                  query = query + ",";
            }
      }
      query = query + ";";
      let calculatorInsert = await ExecuteQuery(query, []);
      console.log('Charles Inserting Calculators.................................', calculatorInsert);
      console.log('....................................................................');
}



export const database = {
      dropDatabaseTablesAsync,
      setupCreateTablesAsync,
      insertCalculator,
      insertAnimalTypes

}