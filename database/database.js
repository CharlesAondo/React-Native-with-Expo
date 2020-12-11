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



      let drugsTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_drugs (id INTEGER PRIMARY KEY AUTOINCREMENT,guid varchar(25),name varchar(255),formulation_species_id INTEGER(10),notes string,target_serum_levels string,reversal_agent string,teratogenicity string,contraindications string,interactions string,adverse_effects string,deleted_at timestamp NULL DEFAULT NULL,created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL)", []);
      console.log("Charles Creating VDI Drugs! Table...........", drugsTable);
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



      let treatmentTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_treatments (id INTEGER PRIMARY KEY AUTOINCREMENT,drug_id INTEGER,indication_name text,expected_effects BLOB,common_combinations text,is_contraindicated INTEGER,vdi_display_order INTEGER,created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL)", []);
      console.log("Charles Creating Treatments! Table...........", treatmentTable);
      console.log('....................................................................');


      let pearlsTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_pearls (id INTEGER PRIMARY KEY AUTOINCREMENT,drug_id INTEGER,notes text,is_visible INTEGER,display_order INTEGER,created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL,deleted_at timestamp NULL DEFAULT NULL)", []);
      console.log("Charles Creating Pearls! Table...........", pearlsTable);
      console.log('....................................................................');


      let pearlReferences = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_pearl_references (id INTEGER PRIMARY KEY AUTOINCREMENT,pearl_id INTERGER(10),title varchar(255),pub_med_id INTERGER(10),url varchar(255),ebm INTERGER(10),display_order INTERGER(10),created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL,deleted_at timestamp NULL DEFAULT NULL,FOREIGN KEY (pearl_id) REFERENCES vdi_pearls(id))",'PRAGMA foreign_keys = ON', []);
      console.log("Charles Creating VDI  Pearl References! Table...........", pearlReferences);
      console.log('....................................................................');



      let precautionReferences = await ExecuteQuery("CREATE TABLE IF NOT EXISTS vdi_precaution_references (id INTEGER PRIMARY KEY AUTOINCREMENT,drug_id INTERGER(10),title varchar(255),pub_med_id INTERGER(10),url varchar(255),ebm INTERGER(10),created_at timestamp NULL DEFAULT NULL,updated_at timestamp NULL DEFAULT NULL,deleted_at timestamp NULL DEFAULT NULL,FOREIGN KEY (drug_id) REFERENCES vdi_drugs(id))",'PRAGMA foreign_keys = ON', []);
      console.log("Charles Creating VDI  Precaution References! Table...........", precautionReferences);
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

const insertRoutes = async () => {

      let routes = [
            {
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
            },
            {
                  "id": 3,
                  "name": "IP",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 4,
                  "name": "IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 5,
                  "name": "IM",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 6,
                  "name": "SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 7,
                  "name": "PO, slow IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 8,
                  "name": "slow IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 9,
                  "name": "IV, IM",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 10,
                  "name": "PO, gastric tube",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 11,
                  "name": "(ocular)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 12,
                  "name": "inhaled",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 13,
                  "name": "IM, IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 14,
                  "name": "IV, IM, SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 15,
                  "name": "topical",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 16,
                  "name": "dip",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 17,
                  "name": "topical in conjunctival sac",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 18,
                  "name": "IM, SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 19,
                  "name": "intralesional injection",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 20,
                  "name": "local",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 21,
                  "name": "local (inferior temporal retrobulbar block)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 22,
                  "name": "local (at middle mental foramen)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 23,
                  "name": "intrathoracic (interpleural)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 24,
                  "name": "injection on intercostal nerve",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 25,
                  "name": "intraarticular",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 26,
                  "name": "local (peri-incisional)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 27,
                  "name": "epidural",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 28,
                  "name": "intratesticular",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 29,
                  "name": "transdermal patch",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 30,
                  "name": "oral transmucosal",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 31,
                  "name": "PO (on food)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 32,
                  "name": "intratesticular injection",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 33,
                  "name": "IV, PO",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 34,
                  "name": "transdermal",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 35,
                  "name": "SC catheter",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 36,
                  "name": "intracavitary",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 37,
                  "name": "intralesional",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 38,
                  "name": "IV, SC, IM",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 39,
                  "name": "SC, IM, IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 40,
                  "name": "intracavitary (interpleural, intraabdominal)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 41,
                  "name": "implant",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 42,
                  "name": "intranasal",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 43,
                  "name": "intravesicular",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 44,
                  "name": "PO, IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 45,
                  "name": "PO, per rectum",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 46,
                  "name": "intrathecal",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 47,
                  "name": "topical conjunctival",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 48,
                  "name": "per rectum",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 49,
                  "name": "deep IM",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 50,
                  "name": "PO, SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 51,
                  "name": "IV, SC, PO",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 52,
                  "name": "topical intranasal",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 53,
                  "name": "SC, PO",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 54,
                  "name": "transdermal solution",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 55,
                  "name": "IM, sublingual, per rectum",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 56,
                  "name": "intra-arterial infusion",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 57,
                  "name": "SC implant",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 58,
                  "name": "lavage",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 59,
                  "name": "SC, IV",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 60,
                  "name": "topical OU",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 61,
                  "name": "intralesional, SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 62,
                  "name": "perilesionally and intradermally, SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 63,
                  "name": "AU",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 64,
                  "name": "topical (to gingiva)",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 65,
                  "name": "via orogastric tube",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 66,
                  "name": "IV, PO, SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 67,
                  "name": "peritendinous",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 68,
                  "name": "subconj",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 69,
                  "name": "intravaginal",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 70,
                  "name": "intrathecal, slow injection",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 71,
                  "name": "intraarterial",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 72,
                  "name": "SC, IM",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 73,
                  "name": "PO, via gastrostomy tube",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 74,
                  "name": "topical cutaneous",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 75,
                  "name": "IM, PO",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 76,
                  "name": "intra-articular",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 77,
                  "name": "IM, epidural",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 78,
                  "name": "Retrobulbar",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 79,
                  "name": "Intrathrombus",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 80,
                  "name": "IM or SC",
                  "created_at": "2020-05-22T15:04:24.000000Z",
                  "updated_at": "2020-05-22T15:04:24.000000Z"
            },
            {
                  "id": 81,
                  "name": "Intrarenal (renal pelvis)",
                  "created_at": "2020-09-27T22:52:43.000000Z",
                  "updated_at": "2020-09-27T22:52:43.000000Z"
            },
            {
                  "id": 82,
                  "name": "subarachnoid (intrathecal)",
                  "created_at": "2020-09-29T21:43:56.000000Z",
                  "updated_at": "2020-09-29T21:43:56.000000Z"
            },
            {
                  "id": 83,
                  "name": "Intrarenal: into ureter and renal pelvis via catheter/stent",
                  "created_at": "2020-09-29T22:21:44.000000Z",
                  "updated_at": "2020-09-29T22:21:44.000000Z"
            },
            {
                  "id": 84,
                  "name": "IG (orogastric intubation)",
                  "created_at": "2020-09-30T01:02:41.000000Z",
                  "updated_at": "2020-09-30T01:02:41.000000Z"
            },
            {
                  "id": 85,
                  "name": "PO (mixed with food)",
                  "created_at": "2020-09-30T01:02:54.000000Z",
                  "updated_at": "2020-09-30T01:02:54.000000Z"
            },
            {
                  "id": 86,
                  "name": "IV CRI",
                  "created_at": "2020-10-01T12:32:13.000000Z",
                  "updated_at": "2020-10-01T12:32:13.000000Z"
            },
            {
                  "id": 87,
                  "name": "Inhalation",
                  "created_at": "2020-11-04T17:23:02.000000Z",
                  "updated_at": "2020-11-04T17:23:02.000000Z"
            },
            {
                  "id": 88,
                  "name": "once intraoperatively",
                  "created_at": "2020-11-04T18:11:33.000000Z",
                  "updated_at": "2020-11-04T18:11:33.000000Z"
            },
            {
                  "id": 89,
                  "name": "Buccally",
                  "created_at": "2020-11-04T18:13:42.000000Z",
                  "updated_at": "2020-11-04T20:13:33.000000Z"
            },
            {
                  "id": 90,
                  "name": "Intraarticular (stifle joint)",
                  "created_at": "2020-11-08T19:57:55.000000Z",
                  "updated_at": "2020-11-08T19:57:55.000000Z"
            },
            {
                  "id": 91,
                  "name": "Nebulization",
                  "created_at": "2020-11-09T20:24:07.000000Z",
                  "updated_at": "2020-11-09T20:24:07.000000Z"
            },
            {
                  "id": 92,
                  "name": "Intra-nodule",
                  "created_at": "2020-11-11T18:47:45.000000Z",
                  "updated_at": "2020-11-11T18:47:45.000000Z"
            },
            {
                  "id": 93,
                  "name": "Inhalant",
                  "created_at": "2020-11-11T21:19:56.000000Z",
                  "updated_at": "2020-11-11T21:19:56.000000Z"
            },
            {
                  "id": 94,
                  "name": "IV bolus",
                  "created_at": "2020-11-12T19:24:00.000000Z",
                  "updated_at": "2020-11-12T19:24:00.000000Z"
            },
            {
                  "id": 95,
                  "name": "topical ocular",
                  "created_at": "2020-11-16T02:32:05.000000Z",
                  "updated_at": "2020-11-16T02:32:05.000000Z"
            }
      ];
      let query2 = "INSERT INTO vdi_routes (id, name, created_at, updated_at) VALUES";
      for (let i = 0; i < routes.length; ++i) {
            query2 = query2 + "('"
                  + routes[i].id //id
                  + "','"
                  + routes[i].name //first_name
                  + "','"
                  + routes[i].created_at //last_name
                  + "','"
                  + routes[i].upd //is_deleted
                  + "')";
            if (i != routes.length - 1) {
                  query2 = query2 + ",";
            }
      }
      query2 = query2 + ";";

      let RoutesInsert = await ExecuteQuery(query2, []);
      console.log('Charles Inserting vdi_routes.................................', RoutesInsert);


      console.log('....................................................................');

}


export const database = {
      dropDatabaseTablesAsync,
      setupCreateTablesAsync,
      insertRoutes,
      insertCalculator,

}