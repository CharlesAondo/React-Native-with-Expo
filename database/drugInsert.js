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

const insertDrugsToDatabaseAsync = async () => {

      let drugs = [
            {
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
            },
            {
                  "id": 6,
                  "guid": "6",
                  "name": "Acetylcysteine",
                  "formulation_species_id": 1,
                  "notes": null,
                  "target_serum_levels": "",
                  "reversal_agent": "",
                  "teratogenicity": "No teratogenicity/lactation restrictions reported",
                  "contraindications": "Nebulization (400 mg/CAT nebulized via endotracheal tube) for mucolytic effect actually triggers bronchoconstriction in cats \n Hypersensitivity to the drug",
                  "interactions": "Incompatible (do not mix) with ampicillin, amphotericin B",
                  "adverse_effects": "500 mg/kg IV is lethal as single dose in dogs",
                  "deleted_at": null,
                  "created_at": "2020-05-06T15:52:57.000000Z",
                  "updated_at": "2020-11-04T02:01:58.000000Z"
            },
            {
                  "id": 7,
                  "guid": "7",
                  "name": "Acetylsalicylic acid",
                  "formulation_species_id": 1,
                  "notes": null,
                  "target_serum_levels": "5-12 (cats and 12-18 (dogs) mg/dL\nnot clinically proven and rarely used",
                  "reversal_agent": "",
                  "teratogenicity": "No teratogenic effects at clinical dosages",
                  "contraindications": "Hypersensitivity to the drug \n Anorexia \n Dehydration \n Platelet function disorder, thrombocytopenia, or coagulopathy \n Gastrointestinal disease (relative contraindication) \n For anti-inflammatory effects, many safer alternatives exist (same or greater anti-inflammatory effect with lower risk of adverse effects): carprofen, deracoxib, meloxicam, etc.",
                  "interactions": "Corticosteroids (potentiate gastrointestinal ulceration), aminoglycoside antibiotics, diuretics, and potentially nephrotoxic drugs (aggravate renal injury)",
                  "adverse_effects": "Gastrointestinal ulceration, especially if administered on an empty stomach or in a dehydrated animal \n Renal injury",
                  "deleted_at": null,
                  "created_at": "2020-05-06T15:54:31.000000Z",
                  "updated_at": "2020-11-04T02:02:41.000000Z"
            },
            {
                  "id": 8,
                  "guid": "8",
                  "name": "ACTH gel",
                  "formulation_species_id": 1,
                  "notes": null,
                  "target_serum_levels": null,
                  "reversal_agent": null,
                  "teratogenicity": null,
                  "contraindications": "Hypersensitivity to the drug",
                  "interactions": null,
                  "adverse_effects": null,
                  "deleted_at": null,
                  "created_at": "2020-05-06T15:56:27.000000Z",
                  "updated_at": "2020-05-06T15:56:27.000000Z"
            }
      ];

      let query2 = "INSERT INTO vdi_drugs (id, guid, name,formulation_species_id,notes,target_serum_levels,reversal_agent,contraindications,interactions,adverse_effects,deleted_at,created_at,updated_at) VALUES";
      for (let i = 0; i < drugs.length; ++i) {
            query2 = query2 + "('"
                  + drugs[i].id //id
                  + "','"
                  + drugs[i].guid
                  + "','"
                  + drugs[i].name
                  + "','"
                  + drugs[i].formulation_species_id
                  + "','"
                  + drugs[i].notes
                  + "','"
                  + drugs[i].target_serum_levels
                  + "','"
                  + drugs[i].reversal_agent
                  + "','"
                  + drugs[i].contraindications
                  + "','"
                  + drugs[i].interactions
                  + "','"
                  + drugs[i].adverse_effects
                  + "','"
                  + drugs[i].deleted_at 
                  + "','"
                  + drugs[i].created_at 
                  + "','"
                  + drugs[i].updated_at 
                  + "')";
            if (i != drugs.length - 1) {
                  query2 = query2 + ",";
            }
      }
      query2 = query2 + ";";
      console.log(query2);

      let insertedDrugs = await ExecuteQuery(query2, []);
      console.log('Charles Inserting VDI DRUGS!!.................................', insertedDrugs);
      console.log('....................................................................');

}
export const drugInsert = {
      insertDrugsToDatabaseAsync

}

