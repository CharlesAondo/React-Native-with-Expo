import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
                resolve('Database Succesfully inserted into the database', results);
            },
            (error) => {
                reject('Failed to inserts Drugs into the database!', error);
            });
    });
});

const insertDrugsToDatabaseAsync = async() => {



    let drugs = [{
            "id": 1,
            "guid": "1",
            "name": "Acarbose",
            "formulation_species_id": 1,
            "notes": null,
            "target_serum_levels": null,
            "reversal_agent": "Dextrose",
            "teratogenicity": null,
            "contraindications": "Hypoglycemia\nHypersensitivity to the drug",
            "interactions": "Insulin: cumulative effects\nMay decrease bioavailability of digoxin, metformin by approximately 20%",
            "adverse_effects": "Diarrhea in 3/5 dogs",
            "deleted_at": null,
            "created_at": "2020-05-06T15:44:59.000000Z",
            "updated_at": "2020-05-06T15:44:59.000000Z"
        },
        {
            "id": 2,
            "guid": "2",
            "name": "Acemannan",
            "formulation_species_id": 2,
            "notes": null,
            "target_serum_levels": "",
            "reversal_agent": "",
            "teratogenicity": "",
            "contraindications": "Hypersensitivity to the drug",
            "interactions": "",
            "adverse_effects": "No adverse effects at 1 mg/kg IV repeated, or 10 mg/kg IV once, in healthy dogs \n 5 mg/kg IP or 10 mg/kg repeated doses IV causes abdominal discomfort and vomiting in dogs, no deaths \n No adverse effects at 1500 mg/kg/day PO for 90 days in healthy dogs",
            "deleted_at": null,
            "created_at": "2020-05-06T15:45:56.000000Z",
            "updated_at": "2020-11-04T01:53:13.000000Z"
        },
        {
            "id": 3,
            "guid": "3",
            "name": "Acepromazine",
            "formulation_species_id": 2,
            "notes": null,
            "target_serum_levels": "",
            "reversal_agent": "For hypotension: circulatory volume expansion (IV fluid therapy) if needed\n vasopressors (e.g., infusion of dopamine or phenylephrine)",
            "teratogenicity": "",
            "contraindications": "Organophosphate-induced tremors (acepromazine potentiates toxicity) \n hypotension \n systemic illness \n hypersensitivity to the drug",
            "interactions": "Potentiates effects of other CNS depressants",
            "adverse_effects": "Older patients may have excessively long duration of action (relative contraindication) \n Caution with liver disease (prolonged/excessive effect) \n Rare incidence of reverse sneezing \n Rare mania/aggression \n Mild hypotensive effects at 0.1 mg/kg SC, often accentuated if IV, older patients, or systemic illness",
            "deleted_at": null,
            "created_at": "2020-05-06T15:47:16.000000Z",
            "updated_at": "2020-11-04T01:57:44.000000Z"
        },
        {
            "id": 4,
            "guid": "4",
            "name": "Acetaminophen",
            "formulation_species_id": 1,
            "notes": null,
            "target_serum_levels": "",
            "reversal_agent": "s-adenosylmethionine, acetylcysteine",
            "teratogenicity": "",
            "contraindications": "",
            "interactions": "",
            "adverse_effects": "Methemoglobinemia  \n  Acute hepatic injury  \n  Hemolytic anemia",
            "deleted_at": null,
            "created_at": "2020-05-06T15:50:12.000000Z",
            "updated_at": "2020-11-04T16:58:29.000000Z"
        },
        {
            "id": 5,
            "guid": "5",
            "name": "Acetazolamide",
            "formulation_species_id": 1,
            "notes": null,
            "target_serum_levels": "",
            "reversal_agent": "",
            "teratogenicity": "Teratogenic (limb deformities) in mice and rats\ndrug is shed in milk",
            "contraindications": "Hypokalemia \n Hyponatremia \n Hypotension/dehydration (may be potentiated by drug) \n Chronic hepatopathies (increased risk of hepatic encephalopathy) \n Renal disease (electrolyte and hypovolemic effects) \n Hypoadrenocorticism \n Hypersensitivity to the drug",
            "interactions": "Cisapride\n\r\nAnticonvulsants, digoxin, cyclosporine (altered hepatic metabolism)\n\r\nDiuretics (potentiate hypovolemia/dehydration, hyponatremia, hypokalemia)",
            "adverse_effects": "At 10-25 mg/kg, frequent adverse effects in cats (metabolic acidosis-induced panting, mentation changes) are prohibitive",
            "deleted_at": null,
            "created_at": "2020-05-06T15:51:59.000000Z",
            "updated_at": "2020-11-04T02:01:14.000000Z"
        }
    ];


    let query2 = "INSERT INTO vdi_drugs (id, guid, name,formulation_species_id,notes,target_serum_levels,reversal_agent,contraindications,teratogenicity,interactions,adverse_effects,deleted_at,created_at,updated_at) VALUES";


    //alert(target.replace("'", "\\'"));

    for (let i = 0; i < drugs.length; ++i) {
        query2 = query2 + "('" +
            drugs[i].id //id
            +
            "','" +
            drugs[i].guid +
            "','" +
            (drugs[i].name == null ? null : drugs[i].name.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            drugs[i].formulation_species_id +
            "','" +
            (drugs[i].notes == null ? null : drugs[i].notes.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            (drugs[i].target_serum_levels == null ? null : drugs[i].target_serum_levels.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            (drugs[i].reversal_agent == null ? null : drugs[i].reversal_agent.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            (drugs[i].contraindications == null ? null : drugs[i].contraindications.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            (drugs[i].teratogenicity == null ? null : drugs[i].teratogenicity.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            (drugs[i].interactions == null ? null : drugs[i].interactions.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            (drugs[i].adverse_effects == null ? null : drugs[i].adverse_effects.replace(/[`~!@#$^_?'"\\]/gi, '\\')) +
            "','" +
            drugs[i].deleted_at +
            "','" +
            drugs[i].created_at +
            "','" +
            drugs[i].updated_at +
            "')";
        if (i != drugs.length - 1) {
            query2 = query2 + ",";
        }
    }
    query2 = query2 + ";";

    let insertedDrugs = await ExecuteQuery(query2, []);
    console.log('Charles Inserting VDI DRUGS!!.................................', insertedDrugs);
    console.log('....................................................................');

}
export const drugInsert = {
    insertDrugsToDatabaseAsync

}