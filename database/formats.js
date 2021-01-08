import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')


const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Formats Succesfully inserted into the database', results);
            },
                  (error) => {
                        reject('Failed to inserts Formats into the database!', error);
                  });
      });
});


const insertFormatsAsync = async () => {
     let data = [
      {
          "id": 1,
          "target": "veterinary",
          "name": "Tab",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 2,
          "target": "veterinary",
          "name": "Inj",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 3,
          "target": "veterinary",
          "name": "Oral solution",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 4,
          "target": "veterinary",
          "name": "Cap (sustained-release)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 5,
          "target": "veterinary",
          "name": "Oral granules, or oral powder for reconstitution",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 6,
          "target": "veterinary",
          "name": "Ocular ointment",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 7,
          "target": "veterinary",
          "name": "Inhalant aerosol",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 8,
          "target": "veterinary",
          "name": "Cap",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 9,
          "target": "veterinary",
          "name": "Liquid concentrate",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 10,
          "target": "veterinary",
          "name": "Oral powder",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 11,
          "target": "veterinary",
          "name": "Oral powder for suspension",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 12,
          "target": "veterinary",
          "name": "Topical inserts",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 13,
          "target": "veterinary",
          "name": "Oral suspension",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 14,
          "target": "veterinary",
          "name": "Caplets",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 15,
          "target": "veterinary",
          "name": "Chewable tabs",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 16,
          "target": "veterinary",
          "name": "Soft gelatin caps",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 17,
          "target": "veterinary",
          "name": "Topical solution in polyethylene glycol",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 18,
          "target": "veterinary",
          "name": "Topical solution",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 19,
          "target": "veterinary",
          "name": "Oral pellets",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 20,
          "target": "veterinary",
          "name": "Oral granules",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 21,
          "target": "veterinary",
          "name": "Oral paste",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 22,
          "target": "veterinary",
          "name": "Inj (recombinant human)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 23,
          "target": "veterinary",
          "name": "Inj (recombinant canine)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 24,
          "target": "veterinary",
          "name": "Non-prescription",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 25,
          "target": "veterinary",
          "name": "Transdermal patch",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 26,
          "target": "veterinary",
          "name": "Transdermal solution",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 27,
          "target": "veterinary",
          "name": "Aerosol",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 28,
          "target": "veterinary",
          "name": "Inj (buserelin)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 29,
          "target": "veterinary",
          "name": "Inj (gonadorelin)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 30,
          "target": "veterinary",
          "name": "Inj (Dalteparin)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 31,
          "target": "veterinary",
          "name": "Inj (Dalteparin multidose vials)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 32,
          "target": "veterinary",
          "name": "Inj (Enoxaprin)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 33,
          "target": "veterinary",
          "name": "Topical/oral",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 34,
          "target": "veterinary",
          "name": "Oral gel",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 35,
          "target": "veterinary",
          "name": "Inj (given PO)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 36,
          "target": "veterinary",
          "name": "Oral chewable",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 37,
          "target": "veterinary",
          "name": "Topical cream or shampoo",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 38,
          "target": "veterinary",
          "name": "Oral suspension ampoules",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 39,
          "target": "veterinary",
          "name": "Chew treat",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 40,
          "target": "veterinary",
          "name": "Otic suspension",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 41,
          "target": "veterinary",
          "name": "Emulsion for infusion",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 42,
          "target": "veterinary",
          "name": "Oral liquid",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 43,
          "target": "veterinary",
          "name": "SC implant",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 44,
          "target": "veterinary",
          "name": "Cap (controlled-release)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 45,
          "target": "veterinary",
          "name": "Tab (controlled-release)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 46,
          "target": "veterinary",
          "name": "Suppositories",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 47,
          "target": "veterinary",
          "name": "Tab (chewable)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 48,
          "target": "veterinary",
          "name": "Otic solution",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 49,
          "target": "veterinary",
          "name": "Topical ointment/cream",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 50,
          "target": "veterinary",
          "name": "Ophthalmic solution",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 51,
          "target": "veterinary",
          "name": "Inj (therapeutic formulation)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 52,
          "target": "veterinary",
          "name": "Inj (euthanasia formulation)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 53,
          "target": "veterinary",
          "name": "Chewable",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 54,
          "target": "veterinary",
          "name": "Caplet",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 55,
          "target": "veterinary",
          "name": "Inj (phosphate and potassium)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 56,
          "target": "veterinary",
          "name": "Tab (extended-release)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 57,
          "target": "veterinary",
          "name": "Human decongestant formulas",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 58,
          "target": "veterinary",
          "name": "Tab (sulfate)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 59,
          "target": "veterinary",
          "name": "Tab (gluconate)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 60,
          "target": "veterinary",
          "name": "Tab (for dogs)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 61,
          "target": "veterinary",
          "name": "Tab (for cats)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 62,
          "target": "veterinary",
          "name": "Powder",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 63,
          "target": "veterinary",
          "name": "Inhaler",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 64,
          "target": "veterinary",
          "name": "Powder for solution",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 65,
          "target": "veterinary",
          "name": "Cap (extended-release)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 66,
          "target": "veterinary",
          "name": "Topical ointment",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 67,
          "target": "veterinary",
          "name": "Topical cream",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 68,
          "target": "veterinary",
          "name": "Topical spray",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 69,
          "target": "veterinary",
          "name": "Inj (cypionate)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 70,
          "target": "veterinary",
          "name": "Inj (propionate)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 71,
          "target": "veterinary",
          "name": "Inj (enanthate)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 72,
          "target": "veterinary",
          "name": "Topical otic",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 73,
          "target": "veterinary",
          "name": "Tab (multivitamin)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 74,
          "target": "veterinary",
          "name": "Granule",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 75,
          "target": "veterinary",
          "name": "Powder for compounding",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 76,
          "target": "veterinary",
          "name": "Susp",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 77,
          "target": "veterinary",
          "name": "Cap (delayed release)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 78,
          "target": "veterinary",
          "name": "Tab (delayed release)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 79,
          "target": "veterinary",
          "name": "IV",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 80,
          "target": "veterinary",
          "name": "Oral solution (delayed release)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 81,
          "target": "veterinary",
          "name": "Paste",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 82,
          "target": "veterinary",
          "name": "Tab (combined with 250mg sulfamethazole)",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 83,
          "target": "veterinary",
          "name": " inhalational solution",
          "abbreviation": null,
          "created_at": "2020-05-06T15:44:49.000000Z",
          "updated_at": "2020-05-06T15:44:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 84,
          "target": "veterinary",
          "name": "Inj., oral solution",
          "abbreviation": null,
          "created_at": null,
          "updated_at": null,
          "deleted_at": null
      },
      {
          "id": 85,
          "target": "veterinary",
          "name": "Oral suspension",
          "abbreviation": null,
          "created_at": null,
          "updated_at": null,
          "deleted_at": null
      },
      {
          "id": 86,
          "target": "veterinary",
          "name": "Oral tablet chewable",
          "abbreviation": null,
          "created_at": null,
          "updated_at": null,
          "deleted_at": null
      },
      {
          "id": 87,
          "target": "veterinary",
          "name": "Tablets (delayed-release)",
          "abbreviation": null,
          "created_at": null,
          "updated_at": null,
          "deleted_at": null
      },
      {
          "id": 88,
          "target": "veterinary",
          "name": "Tablets",
          "abbreviation": null,
          "created_at": null,
          "updated_at": null,
          "deleted_at": null
      }
  ]
let query = "INSERT INTO vdi_available_drug_forms (id, target, name,abbreviation,created_at, updated_at,deleted_at) VALUES";
      for (let i = 0; i < data.length; ++i) {
            query = query + "('"
                  + data[i].id //id
                  + "','"
                  + data[i].target //first_name
                  + "','"
                  + data[i].name //first_name
                  + "','"
                  + data[i].abbreviation //first_name
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

      let insertedFormats = await ExecuteQuery(query, []);
      console.log('Charles Inserting Formats.................................', insertedFormats);
      console.log('....................................................................');


}
export const formats = {
      insertFormatsAsync

}
