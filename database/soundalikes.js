import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')


const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Sound alikes Succesfully inserted into the database', results);
            },
                  (error) => {
                        reject('Failed to inserts Sound alikes into the database!', error);
                  });
      });
});


const insertSoundAlikesAsync = async () => {
     let data =[
      {
          "id": 1,
          "drug_id": 3,
          "word": "Apresoline",
          "notes": "hydralazine, a vasodilator",
          "created_at": "2020-05-06T15:47:35.000000Z",
          "updated_at": "2020-05-06T15:47:35.000000Z",
          "deleted_at": null
      },
      {
          "id": 2,
          "drug_id": 4,
          "word": "Aspirin-free",
          "notes": "sounds like Aspirin (nonsteroidal anti-inflammatory)",
          "created_at": "2020-05-06T15:50:30.000000Z",
          "updated_at": "2020-05-06T15:50:30.000000Z",
          "deleted_at": null
      },
      {
          "id": 3,
          "drug_id": 4,
          "word": "Panadol",
          "notes": "sounds like Panacur (antiparasitic)",
          "created_at": "2020-05-06T15:50:32.000000Z",
          "updated_at": "2020-05-06T15:50:32.000000Z",
          "deleted_at": null
      },
      {
          "id": 4,
          "drug_id": 8,
          "word": "ACTH-like, aqueous",
          "notes": "cosyntropin, Cortrosyn",
          "created_at": "2020-05-06T15:56:37.000000Z",
          "updated_at": "2020-05-06T15:56:37.000000Z",
          "deleted_at": null
      },
      {
          "id": 5,
          "drug_id": 8,
          "word": "ACTH, synthetic",
          "notes": "tetracosactrin",
          "created_at": "2020-05-06T15:56:40.000000Z",
          "updated_at": "2020-05-06T15:56:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 6,
          "drug_id": 9,
          "word": "ACTH gel",
          "notes": "ACTHar",
          "created_at": "2020-05-06T15:57:25.000000Z",
          "updated_at": "2020-05-06T15:57:25.000000Z",
          "deleted_at": null
      },
      {
          "id": 7,
          "drug_id": 9,
          "word": "ACTH, synthetic",
          "notes": "tetracosactrin",
          "created_at": "2020-05-06T15:57:28.000000Z",
          "updated_at": "2020-05-06T15:57:28.000000Z",
          "deleted_at": null
      },
      {
          "id": 8,
          "drug_id": 10,
          "word": "Dactinomycin",
          "notes": "sounds like Daunorubicin",
          "created_at": "2020-05-06T15:58:26.000000Z",
          "updated_at": "2020-05-06T15:58:26.000000Z",
          "deleted_at": null
      },
      {
          "id": 9,
          "drug_id": 11,
          "word": "Antidose",
          "notes": "sounds like Antirobe (clindamycin)",
          "created_at": "2020-05-06T15:59:14.000000Z",
          "updated_at": "2020-05-06T15:59:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 10,
          "drug_id": 11,
          "word": "Liqui-Char",
          "notes": "sounds like Liquiprin (acetaminophen)",
          "created_at": "2020-05-06T15:59:16.000000Z",
          "updated_at": "2020-05-06T15:59:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 11,
          "drug_id": 14,
          "word": "Fomepizole",
          "notes": "ethylene glycol antidote",
          "created_at": "2020-05-06T16:03:20.000000Z",
          "updated_at": "2020-05-06T16:03:20.000000Z",
          "deleted_at": null
      },
      {
          "id": 12,
          "drug_id": 14,
          "word": "Fenbendazole",
          "notes": "other benzimidazole antiparasitic",
          "created_at": "2020-05-06T16:03:23.000000Z",
          "updated_at": "2020-05-06T16:03:23.000000Z",
          "deleted_at": null
      },
      {
          "id": 13,
          "drug_id": 15,
          "word": "Atenolol",
          "notes": "beta-blocker",
          "created_at": "2020-05-06T16:04:59.000000Z",
          "updated_at": "2020-05-06T16:04:59.000000Z",
          "deleted_at": null
      },
      {
          "id": 14,
          "drug_id": 16,
          "word": "Fosamax",
          "notes": "sounds like Fondaparinux (low molecular-weight heparin)",
          "created_at": "2020-05-06T16:06:36.000000Z",
          "updated_at": "2020-05-06T16:06:36.000000Z",
          "deleted_at": null
      },
      {
          "id": 15,
          "drug_id": 21,
          "word": "Ranitidine",
          "notes": "H2 blocker antacid",
          "created_at": "2020-05-06T16:12:03.000000Z",
          "updated_at": "2020-05-06T16:12:03.000000Z",
          "deleted_at": null
      },
      {
          "id": 16,
          "drug_id": 21,
          "word": "Amitriptyline",
          "notes": "tricyclic antidepressant",
          "created_at": "2020-05-06T16:12:06.000000Z",
          "updated_at": "2020-05-06T16:12:06.000000Z",
          "deleted_at": null
      },
      {
          "id": 17,
          "drug_id": 22,
          "word": "Amicar",
          "notes": "sounds like Aminocaproic acid, an antifibrinolytic and lysine analog",
          "created_at": "2020-05-06T16:12:36.000000Z",
          "updated_at": "2020-05-06T16:12:36.000000Z",
          "deleted_at": null
      },
      {
          "id": 18,
          "drug_id": 23,
          "word": "Amikin",
          "notes": "sounds like Amikacin, an aminoglycoside antibiotic",
          "created_at": "2020-05-06T16:13:46.000000Z",
          "updated_at": "2020-05-06T16:13:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 19,
          "drug_id": 25,
          "word": "Aminocaproic acid",
          "notes": "lysine analog",
          "created_at": "2020-05-06T16:15:27.000000Z",
          "updated_at": "2020-05-06T16:15:27.000000Z",
          "deleted_at": null
      },
      {
          "id": 20,
          "drug_id": 25,
          "word": "Aminopentamide",
          "notes": "gastrointestinal antispasmodic",
          "created_at": "2020-05-06T16:15:29.000000Z",
          "updated_at": "2020-05-06T16:15:29.000000Z",
          "deleted_at": null
      },
      {
          "id": 21,
          "drug_id": 25,
          "word": "Aminopropazine",
          "notes": "urinary antispasmodic",
          "created_at": "2020-05-06T16:15:31.000000Z",
          "updated_at": "2020-05-06T16:15:31.000000Z",
          "deleted_at": null
      },
      {
          "id": 22,
          "drug_id": 28,
          "word": "Elavil",
          "notes": "sounds like Enalapril (ACE inhibitor)",
          "created_at": "2020-05-06T16:18:46.000000Z",
          "updated_at": "2020-05-06T16:18:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 23,
          "drug_id": 29,
          "word": "Norvasc",
          "notes": "sounds like Norpace (disopyramide)",
          "created_at": "2020-05-06T16:19:45.000000Z",
          "updated_at": "2020-05-06T16:19:45.000000Z",
          "deleted_at": null
      },
      {
          "id": 24,
          "drug_id": 31,
          "word": "Ampicillin",
          "notes": null,
          "created_at": "2020-05-06T16:22:48.000000Z",
          "updated_at": "2020-05-06T16:22:48.000000Z",
          "deleted_at": null
      },
      {
          "id": 25,
          "drug_id": 31,
          "word": "Amoxicillin-clavulanic acid",
          "notes": null,
          "created_at": "2020-05-06T16:22:51.000000Z",
          "updated_at": "2020-05-06T16:22:51.000000Z",
          "deleted_at": null
      },
      {
          "id": 26,
          "drug_id": 32,
          "word": "Amoxicillin",
          "notes": "",
          "created_at": "2020-05-06T16:25:23.000000Z",
          "updated_at": "2020-11-04T16:52:26.000000Z",
          "deleted_at": null
      },
      {
          "id": 27,
          "drug_id": 36,
          "word": "Ampicillin trihydrate",
          "notes": "fatal if given by wrong route - see Pearls",
          "created_at": "2020-05-06T16:30:59.000000Z",
          "updated_at": "2020-05-06T16:30:59.000000Z",
          "deleted_at": null
      },
      {
          "id": 28,
          "drug_id": 36,
          "word": "Amoxicillin",
          "notes": null,
          "created_at": "2020-05-06T16:31:01.000000Z",
          "updated_at": "2020-05-06T16:31:01.000000Z",
          "deleted_at": null
      },
      {
          "id": 29,
          "drug_id": 38,
          "word": "Corid",
          "notes": "sounds like Coreg (carvedilol, a beta-blocker)",
          "created_at": "2020-05-06T16:33:12.000000Z",
          "updated_at": "2020-05-06T16:33:12.000000Z",
          "deleted_at": null
      },
      {
          "id": 30,
          "drug_id": 39,
          "word": "Hydromorphone",
          "notes": "opiate",
          "created_at": "2020-05-06T16:33:55.000000Z",
          "updated_at": "2020-05-06T16:33:55.000000Z",
          "deleted_at": null
      },
      {
          "id": 31,
          "drug_id": 39,
          "word": "Morphine",
          "notes": "opiate",
          "created_at": "2020-05-06T16:33:57.000000Z",
          "updated_at": "2020-05-06T16:33:57.000000Z",
          "deleted_at": null
      },
      {
          "id": 32,
          "drug_id": 39,
          "word": "Oxymorphone",
          "notes": "opiate",
          "created_at": "2020-05-06T16:34:00.000000Z",
          "updated_at": "2020-05-06T16:34:00.000000Z",
          "deleted_at": null
      },
      {
          "id": 33,
          "drug_id": 41,
          "word": "",
          "notes": "Caution: in some citations, CHOP (cyclophosphamide + hydroxydaunorubicin [doxorubicin] + Oncovin [vincristine] + prednisone) is identical to COAP, because hydroxydaunorubicin = doxorubicin = Adriamycin. However, in others, the A in COAP refers to ara-C, i.e., cytosine arabinoside, whereas in still others, the A in COPA refers to asparaginase.",
          "created_at": "2020-05-06T16:35:47.000000Z",
          "updated_at": "2020-05-06T16:35:47.000000Z",
          "deleted_at": null
      },
      {
          "id": 34,
          "drug_id": 44,
          "word": "Malarone",
          "notes": "sounds like Milrinone (positive inotrope)",
          "created_at": "2020-05-06T16:40:14.000000Z",
          "updated_at": "2020-05-06T16:40:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 35,
          "drug_id": 50,
          "word": "Azithromycin",
          "notes": "an antibacterial",
          "created_at": "2020-05-06T16:45:38.000000Z",
          "updated_at": "2020-05-06T16:45:38.000000Z",
          "deleted_at": null
      },
      {
          "id": 36,
          "drug_id": 51,
          "word": "Azathioprine",
          "notes": "an immunosuppressant",
          "created_at": "2020-05-06T16:47:11.000000Z",
          "updated_at": "2020-05-06T16:47:11.000000Z",
          "deleted_at": null
      },
      {
          "id": 37,
          "drug_id": 51,
          "word": "Clamelle",
          "notes": "sounds like Clavamox and Clavaseptin (amoxicillin-clavulanate)",
          "created_at": "2020-05-06T16:47:13.000000Z",
          "updated_at": "2020-05-06T16:47:13.000000Z",
          "deleted_at": null
      },
      {
          "id": 38,
          "drug_id": 52,
          "word": "Fortekor",
          "notes": "sounds like Fortical (calcitonin)",
          "created_at": "2020-05-06T16:49:18.000000Z",
          "updated_at": "2020-05-06T16:49:18.000000Z",
          "deleted_at": null
      },
      {
          "id": 39,
          "drug_id": 52,
          "word": "Enalapril",
          "notes": "and all other ACE inhibitors, which end with the syllable \"pril\" (lisinopril, quinapril, ramipril, etc.)",
          "created_at": "2020-05-06T16:49:21.000000Z",
          "updated_at": "2020-05-06T16:49:21.000000Z",
          "deleted_at": null
      },
      {
          "id": 40,
          "drug_id": 52,
          "word": "Anipryl",
          "notes": "selegiline/deprenyl, a monoamine oxidase inhibitor for treating cognitive dysfunction",
          "created_at": "2020-05-06T16:49:23.000000Z",
          "updated_at": "2020-05-06T16:49:23.000000Z",
          "deleted_at": null
      },
      {
          "id": 41,
          "drug_id": 53,
          "word": "Butorphanol",
          "notes": "opiate agonist-antagonist",
          "created_at": "2020-05-06T16:51:40.000000Z",
          "updated_at": "2020-05-06T16:51:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 42,
          "drug_id": 60,
          "word": "Buspirone",
          "notes": "anxiolytic",
          "created_at": "2020-05-06T17:00:45.000000Z",
          "updated_at": "2020-05-06T17:00:45.000000Z",
          "deleted_at": null
      },
      {
          "id": 43,
          "drug_id": 62,
          "word": "Bupivacaine-epinephrine",
          "notes": "combined formulation; exercise caution to select the correct product",
          "created_at": "2020-05-06T17:02:16.000000Z",
          "updated_at": "2020-05-06T17:02:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 44,
          "drug_id": 62,
          "word": "Bupivacaine, preservative-free",
          "notes": "exists as single use vials",
          "created_at": "2020-05-06T17:02:18.000000Z",
          "updated_at": "2020-05-06T17:02:18.000000Z",
          "deleted_at": null
      },
      {
          "id": 45,
          "drug_id": 62,
          "word": "Bupivacaine, preservative-containing",
          "notes": "exists as multidose vials; avoid preservative-containing formulation in central neurologic applications",
          "created_at": "2020-05-06T17:02:21.000000Z",
          "updated_at": "2020-05-06T17:02:21.000000Z",
          "deleted_at": null
      },
      {
          "id": 46,
          "drug_id": 64,
          "word": "Butorphanol",
          "notes": "opiates",
          "created_at": "2020-05-06T17:08:14.000000Z",
          "updated_at": "2020-05-06T17:08:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 47,
          "drug_id": 64,
          "word": "Buprenorphine",
          "notes": "opiates",
          "created_at": "2020-05-06T17:08:16.000000Z",
          "updated_at": "2020-05-06T17:08:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 48,
          "drug_id": 65,
          "word": "Bethanechol",
          "notes": "cholinergic/parasympathomimetic",
          "created_at": "2020-05-06T17:09:15.000000Z",
          "updated_at": "2020-05-06T17:09:15.000000Z",
          "deleted_at": null
      },
      {
          "id": 49,
          "drug_id": 66,
          "word": "Galastop",
          "notes": "sounds like Vasotop (ramipril, an ACE inhibitor)",
          "created_at": "2020-05-06T17:12:08.000000Z",
          "updated_at": "2020-05-06T17:12:08.000000Z",
          "deleted_at": null
      },
      {
          "id": 50,
          "drug_id": 68,
          "word": "Calcijex",
          "notes": "sounds like Calciject (calcium chloride)",
          "created_at": "2020-05-06T17:15:26.000000Z",
          "updated_at": "2020-05-06T17:15:26.000000Z",
          "deleted_at": null
      },
      {
          "id": 51,
          "drug_id": 70,
          "word": "Calciject",
          "notes": "sounds like Calcijex (calcitriol)",
          "created_at": "2020-05-06T17:18:59.000000Z",
          "updated_at": "2020-05-06T17:18:59.000000Z",
          "deleted_at": null
      },
      {
          "id": 52,
          "drug_id": 74,
          "word": "Pyopen",
          "notes": "sounds like Pyoben (benzoyl peroxide shampoo)",
          "created_at": "2020-05-06T17:24:17.000000Z",
          "updated_at": "2020-05-06T17:24:17.000000Z",
          "deleted_at": null
      },
      {
          "id": 53,
          "drug_id": 75,
          "word": "Felimazole",
          "notes": "sounds like Feliway (synthetic pheromone)",
          "created_at": "2020-05-06T17:24:43.000000Z",
          "updated_at": "2020-05-06T17:24:43.000000Z",
          "deleted_at": null
      },
      {
          "id": 54,
          "drug_id": 76,
          "word": "Paraplatin",
          "notes": "sounds like Platinol (cisplatin)",
          "created_at": "2020-05-06T17:25:58.000000Z",
          "updated_at": "2020-05-06T17:25:58.000000Z",
          "deleted_at": null
      },
      {
          "id": 55,
          "drug_id": 77,
          "word": "Carnitine",
          "notes": "a nutrient",
          "created_at": "2020-05-06T17:28:40.000000Z",
          "updated_at": "2020-05-06T17:28:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 56,
          "drug_id": 78,
          "word": "Carmustine",
          "notes": "antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T17:29:16.000000Z",
          "updated_at": "2020-05-06T17:29:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 57,
          "drug_id": 79,
          "word": "Cartrophen",
          "notes": "pentosan polysulfate, a joint health supplement (Canada, UK)",
          "created_at": "2020-05-06T17:30:09.000000Z",
          "updated_at": "2020-05-06T17:30:09.000000Z",
          "deleted_at": null
      },
      {
          "id": 58,
          "drug_id": 79,
          "word": "Ketoprofen",
          "notes": "",
          "created_at": "2020-05-06T17:30:11.000000Z",
          "updated_at": "2020-11-04T21:44:43.000000Z",
          "deleted_at": null
      },
      {
          "id": 59,
          "drug_id": 87,
          "word": "Cefotaxime",
          "notes": null,
          "created_at": "2020-05-06T17:38:37.000000Z",
          "updated_at": "2020-05-06T17:38:37.000000Z",
          "deleted_at": null
      },
      {
          "id": 60,
          "drug_id": 87,
          "word": "Cefoxitin",
          "notes": null,
          "created_at": "2020-05-06T17:38:40.000000Z",
          "updated_at": "2020-05-06T17:38:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 61,
          "drug_id": 87,
          "word": "Suprax",
          "notes": "sounds like Serax (oxazepam, a benzodiazepine)",
          "created_at": "2020-05-06T17:38:42.000000Z",
          "updated_at": "2020-05-06T17:38:42.000000Z",
          "deleted_at": null
      },
      {
          "id": 62,
          "drug_id": 89,
          "word": "Cefixime",
          "notes": null,
          "created_at": "2020-05-06T17:39:52.000000Z",
          "updated_at": "2020-05-06T17:39:52.000000Z",
          "deleted_at": null
      },
      {
          "id": 63,
          "drug_id": 89,
          "word": "Cefoxitin",
          "notes": null,
          "created_at": "2020-05-06T17:39:55.000000Z",
          "updated_at": "2020-05-06T17:39:55.000000Z",
          "deleted_at": null
      },
      {
          "id": 64,
          "drug_id": 89,
          "word": "Cefuroxime",
          "notes": null,
          "created_at": "2020-05-06T17:39:57.000000Z",
          "updated_at": "2020-05-06T17:39:57.000000Z",
          "deleted_at": null
      },
      {
          "id": 65,
          "drug_id": 90,
          "word": "Cefovecin",
          "notes": null,
          "created_at": "2020-05-06T17:40:28.000000Z",
          "updated_at": "2020-05-06T17:40:28.000000Z",
          "deleted_at": null
      },
      {
          "id": 66,
          "drug_id": 91,
          "word": "Cefotetan",
          "notes": "",
          "created_at": "2020-05-06T17:41:13.000000Z",
          "updated_at": "2020-11-05T19:46:43.000000Z",
          "deleted_at": null
      },
      {
          "id": 67,
          "drug_id": 92,
          "word": "Cefixime",
          "notes": "",
          "created_at": "2020-05-06T17:42:22.000000Z",
          "updated_at": "2020-11-05T19:53:24.000000Z",
          "deleted_at": null
      },
      {
          "id": 68,
          "drug_id": 92,
          "word": "Cefotaxime",
          "notes": "",
          "created_at": "2020-05-06T17:42:25.000000Z",
          "updated_at": "2020-11-05T19:53:24.000000Z",
          "deleted_at": null
      },
      {
          "id": 69,
          "drug_id": 92,
          "word": "Cefuroxime",
          "notes": "",
          "created_at": "2020-05-06T17:42:27.000000Z",
          "updated_at": "2020-11-05T19:53:24.000000Z",
          "deleted_at": null
      },
      {
          "id": 70,
          "drug_id": 97,
          "word": "Cefoxitin",
          "notes": null,
          "created_at": "2020-05-06T17:46:43.000000Z",
          "updated_at": "2020-05-06T17:46:43.000000Z",
          "deleted_at": null
      },
      {
          "id": 71,
          "drug_id": 97,
          "word": "Cefixime",
          "notes": null,
          "created_at": "2020-05-06T17:46:45.000000Z",
          "updated_at": "2020-05-06T17:46:45.000000Z",
          "deleted_at": null
      },
      {
          "id": 72,
          "drug_id": 97,
          "word": "Cefotaxime",
          "notes": null,
          "created_at": "2020-05-06T17:46:47.000000Z",
          "updated_at": "2020-05-06T17:46:47.000000Z",
          "deleted_at": null
      },
      {
          "id": 73,
          "drug_id": 99,
          "word": "Cefazolin",
          "notes": null,
          "created_at": "2020-05-06T17:48:43.000000Z",
          "updated_at": "2020-05-06T17:48:43.000000Z",
          "deleted_at": null
      },
      {
          "id": 74,
          "drug_id": 102,
          "word": "Chloramphenicol",
          "notes": "",
          "created_at": "2020-05-06T17:50:58.000000Z",
          "updated_at": "2020-11-07T18:24:13.000000Z",
          "deleted_at": null
      },
      {
          "id": 75,
          "drug_id": 103,
          "word": "Chlorambucil",
          "notes": null,
          "created_at": "2020-05-06T17:52:13.000000Z",
          "updated_at": "2020-05-06T17:52:13.000000Z",
          "deleted_at": null
      },
      {
          "id": 76,
          "drug_id": 104,
          "word": "Chlorpromazine",
          "notes": null,
          "created_at": "2020-05-06T17:54:05.000000Z",
          "updated_at": "2020-05-06T17:54:05.000000Z",
          "deleted_at": null
      },
      {
          "id": 77,
          "drug_id": 104,
          "word": "Chlorpropamide",
          "notes": null,
          "created_at": "2020-05-06T17:54:07.000000Z",
          "updated_at": "2020-05-06T17:54:07.000000Z",
          "deleted_at": null
      },
      {
          "id": 78,
          "drug_id": 104,
          "word": "Chlorpheniramine",
          "notes": null,
          "created_at": "2020-05-06T17:54:09.000000Z",
          "updated_at": "2020-05-06T17:54:09.000000Z",
          "deleted_at": null
      },
      {
          "id": 79,
          "drug_id": 105,
          "word": "Chlorpromazine",
          "notes": "",
          "created_at": "2020-05-06T17:55:08.000000Z",
          "updated_at": "2020-11-07T18:33:07.000000Z",
          "deleted_at": null
      },
      {
          "id": 80,
          "drug_id": 105,
          "word": "Chlorpropamide",
          "notes": "",
          "created_at": "2020-05-06T17:55:11.000000Z",
          "updated_at": "2020-11-07T18:33:07.000000Z",
          "deleted_at": null
      },
      {
          "id": 81,
          "drug_id": 105,
          "word": "Chlorothiazide",
          "notes": "",
          "created_at": "2020-05-06T17:55:13.000000Z",
          "updated_at": "2020-11-07T18:33:07.000000Z",
          "deleted_at": null
      },
      {
          "id": 82,
          "drug_id": 106,
          "word": "Chlorpropamide",
          "notes": null,
          "created_at": "2020-05-06T17:57:04.000000Z",
          "updated_at": "2020-05-06T17:57:04.000000Z",
          "deleted_at": null
      },
      {
          "id": 83,
          "drug_id": 107,
          "word": "Chlorpromazine",
          "notes": null,
          "created_at": "2020-05-06T17:57:36.000000Z",
          "updated_at": "2020-05-06T17:57:36.000000Z",
          "deleted_at": null
      },
      {
          "id": 84,
          "drug_id": 112,
          "word": "Platinol",
          "notes": "sounds like Paraplatin (carboplatin)",
          "created_at": "2020-05-06T18:02:36.000000Z",
          "updated_at": "2020-05-06T18:02:36.000000Z",
          "deleted_at": null
      },
      {
          "id": 85,
          "drug_id": 114,
          "word": "Clindamycin",
          "notes": "",
          "created_at": "2020-05-06T18:05:33.000000Z",
          "updated_at": "2020-11-07T18:56:54.000000Z",
          "deleted_at": null
      },
      {
          "id": 86,
          "drug_id": 114,
          "word": "Biaxin",
          "notes": "sounds like Cytoxan (cyclophosphamide, an antineoplastic chemotherapeutic)",
          "created_at": "2020-05-06T18:05:35.000000Z",
          "updated_at": "2020-05-06T18:05:35.000000Z",
          "deleted_at": null
      },
      {
          "id": 87,
          "drug_id": 116,
          "word": "Clarithromycin",
          "notes": null,
          "created_at": "2020-05-06T18:07:47.000000Z",
          "updated_at": "2020-05-06T18:07:47.000000Z",
          "deleted_at": null
      },
      {
          "id": 88,
          "drug_id": 117,
          "word": "Clomipramine",
          "notes": null,
          "created_at": "2020-05-06T18:10:26.000000Z",
          "updated_at": "2020-05-06T18:10:26.000000Z",
          "deleted_at": null
      },
      {
          "id": 89,
          "drug_id": 118,
          "word": "Clofazimine",
          "notes": null,
          "created_at": "2020-05-06T18:11:16.000000Z",
          "updated_at": "2020-05-06T18:11:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 90,
          "drug_id": 119,
          "word": "Clorazepate",
          "notes": null,
          "created_at": "2020-05-06T18:13:29.000000Z",
          "updated_at": "2020-05-06T18:13:29.000000Z",
          "deleted_at": null
      },
      {
          "id": 91,
          "drug_id": 122,
          "word": "Clonazepam",
          "notes": "",
          "created_at": "2020-05-06T18:15:52.000000Z",
          "updated_at": "2020-11-07T19:12:24.000000Z",
          "deleted_at": null
      },
      {
          "id": 92,
          "drug_id": 123,
          "word": "Fomepizole",
          "notes": "4-MP, antidote to ethylene glycol",
          "created_at": "2020-05-06T18:16:28.000000Z",
          "updated_at": "2020-05-06T18:16:28.000000Z",
          "deleted_at": null
      },
      {
          "id": 93,
          "drug_id": 127,
          "word": "Cyclosporine",
          "notes": "an immunosuppressant",
          "created_at": "2020-05-06T18:21:50.000000Z",
          "updated_at": "2020-05-06T18:21:50.000000Z",
          "deleted_at": null
      },
      {
          "id": 94,
          "drug_id": 127,
          "word": "Cytoxan",
          "notes": "sounds like Cytosar (cytosine arabinoside, another antineoplastic chemotherapeutic)",
          "created_at": "2020-05-06T18:21:52.000000Z",
          "updated_at": "2020-05-06T18:21:52.000000Z",
          "deleted_at": null
      },
      {
          "id": 95,
          "drug_id": 128,
          "word": "Cyclophosphamide",
          "notes": "an antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T18:24:23.000000Z",
          "updated_at": "2020-05-06T18:24:23.000000Z",
          "deleted_at": null
      },
      {
          "id": 96,
          "drug_id": 128,
          "word": "Cytoxan",
          "notes": "cyclophosphamide, an antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T18:24:26.000000Z",
          "updated_at": "2020-05-06T18:24:26.000000Z",
          "deleted_at": null
      },
      {
          "id": 97,
          "drug_id": 128,
          "word": "Neoral",
          "notes": "sounds like Neosar (cyclophosphamide)",
          "created_at": "2020-05-06T18:24:28.000000Z",
          "updated_at": "2020-05-06T18:24:28.000000Z",
          "deleted_at": null
      },
      {
          "id": 98,
          "drug_id": 129,
          "word": "Cipro",
          "notes": "ciprofloxacin, an antibacterial",
          "created_at": "2020-05-06T18:27:34.000000Z",
          "updated_at": "2020-05-06T18:27:34.000000Z",
          "deleted_at": null
      },
      {
          "id": 99,
          "drug_id": 130,
          "word": "Cytosar",
          "notes": "sounds like Cytoxan and Neosar (both cyclophosphamide, another antineoplastic chemotherapeutic)",
          "created_at": "2020-05-06T18:29:09.000000Z",
          "updated_at": "2020-05-06T18:29:09.000000Z",
          "deleted_at": null
      },
      {
          "id": 100,
          "drug_id": 130,
          "word": "",
          "notes": "Caution: in some citations, CHOP (cyclophosphamide + hydroxydaunorubicin [doxorubicin] + Oncovin [vincristine] + prednisone) is identical to COAP, because hydroxydaunorubicin = doxorubicin = Adriamycin.  However, in others, the A in COAP refers to ara-C, i.e., cytosine arabinoside, whereas in still others, the A in COPA refers to asparaginase.",
          "created_at": "2020-05-06T18:29:11.000000Z",
          "updated_at": "2020-05-06T18:29:11.000000Z",
          "deleted_at": null
      },
      {
          "id": 101,
          "drug_id": 131,
          "word": "Diethylcarbamazine",
          "notes": "a daily heartworm prophylactic drug",
          "created_at": "2020-05-06T18:31:24.000000Z",
          "updated_at": "2020-05-06T18:31:24.000000Z",
          "deleted_at": null
      },
      {
          "id": 102,
          "drug_id": 131,
          "word": "Carbamazepine",
          "notes": "an anticonvulsant",
          "created_at": "2020-05-06T18:31:26.000000Z",
          "updated_at": "2020-05-06T18:31:26.000000Z",
          "deleted_at": null
      },
      {
          "id": 103,
          "drug_id": 131,
          "word": "Darbazine",
          "notes": "prochlorperazine, a phenothiazine tranquilizer/antiemetic",
          "created_at": "2020-05-06T18:31:28.000000Z",
          "updated_at": "2020-05-06T18:31:28.000000Z",
          "deleted_at": null
      },
      {
          "id": 104,
          "drug_id": 132,
          "word": "Stanozolol",
          "notes": "an anabolic steroid",
          "created_at": "2020-05-06T18:32:12.000000Z",
          "updated_at": "2020-05-06T18:32:12.000000Z",
          "deleted_at": null
      },
      {
          "id": 105,
          "drug_id": 137,
          "word": "Dexrazoxane",
          "notes": "chemotherapy antidote",
          "created_at": "2020-05-06T18:35:32.000000Z",
          "updated_at": "2020-05-06T18:35:32.000000Z",
          "deleted_at": null
      },
      {
          "id": 106,
          "drug_id": 138,
          "word": "Diphacinone",
          "notes": "anticoagulant rodenticide",
          "created_at": "2020-05-06T18:36:14.000000Z",
          "updated_at": "2020-05-06T18:36:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 107,
          "drug_id": 142,
          "word": "\"Dex\"",
          "notes": "sounds like dextrose, dexmedetomidine, others",
          "created_at": "2020-05-06T18:42:05.000000Z",
          "updated_at": "2020-05-06T18:42:05.000000Z",
          "deleted_at": null
      },
      {
          "id": 108,
          "drug_id": 143,
          "word": "\"Dex\"",
          "notes": "sounds like dextrose, dexamethasone, others",
          "created_at": "2020-05-06T18:46:41.000000Z",
          "updated_at": "2020-05-06T18:46:41.000000Z",
          "deleted_at": null
      },
      {
          "id": 109,
          "drug_id": 145,
          "word": "Dextromethorphan",
          "notes": null,
          "created_at": "2020-05-06T18:49:32.000000Z",
          "updated_at": "2020-05-06T18:49:32.000000Z",
          "deleted_at": null
      },
      {
          "id": 110,
          "drug_id": 146,
          "word": "Dextroamphetamine",
          "notes": null,
          "created_at": "2020-05-06T18:50:22.000000Z",
          "updated_at": "2020-05-06T18:50:22.000000Z",
          "deleted_at": null
      },
      {
          "id": 111,
          "drug_id": 147,
          "word": "\"Dex\"",
          "notes": "sounds like dexamethasone, dexmedetomidine, others",
          "created_at": "2020-05-06T18:54:08.000000Z",
          "updated_at": "2020-05-06T18:54:08.000000Z",
          "deleted_at": null
      },
      {
          "id": 112,
          "drug_id": 155,
          "word": "Digitoxin",
          "notes": "obsolete cardiac glycoside drug",
          "created_at": "2020-05-06T19:03:51.000000Z",
          "updated_at": "2020-05-06T19:03:51.000000Z",
          "deleted_at": null
      },
      {
          "id": 113,
          "drug_id": 155,
          "word": "Dioxin",
          "notes": "environmental pollutant and carcinogen",
          "created_at": "2020-05-06T19:03:53.000000Z",
          "updated_at": "2020-05-06T19:03:53.000000Z",
          "deleted_at": null
      },
      {
          "id": 114,
          "drug_id": 156,
          "word": "DHT",
          "notes": "common abbreviation, not to be confused with Dihydrotestosterone (also DHT)",
          "created_at": "2020-05-06T19:05:20.000000Z",
          "updated_at": "2020-05-06T19:05:20.000000Z",
          "deleted_at": null
      },
      {
          "id": 115,
          "drug_id": 157,
          "word": "Diltiazem, sustained release",
          "notes": "",
          "created_at": "2020-05-06T19:06:13.000000Z",
          "updated_at": "2020-11-08T20:17:12.000000Z",
          "deleted_at": null
      },
      {
          "id": 116,
          "drug_id": 158,
          "word": "Diltiazem, regular",
          "notes": null,
          "created_at": "2020-05-06T19:08:16.000000Z",
          "updated_at": "2020-05-06T19:08:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 117,
          "drug_id": 159,
          "word": "Diphenhydramine",
          "notes": "an antihistamine",
          "created_at": "2020-05-06T19:09:09.000000Z",
          "updated_at": "2020-05-06T19:09:09.000000Z",
          "deleted_at": null
      },
      {
          "id": 118,
          "drug_id": 159,
          "word": "Diphenylhydantoin",
          "notes": "an anticonvulsant",
          "created_at": "2020-05-06T19:09:12.000000Z",
          "updated_at": "2020-05-06T19:09:12.000000Z",
          "deleted_at": null
      },
      {
          "id": 119,
          "drug_id": 162,
          "word": "Berenil",
          "notes": "sounds like Deprenyl (selegiline, a monoamine oxidase inhibitor)",
          "created_at": "2020-05-06T19:11:33.000000Z",
          "updated_at": "2020-05-06T19:11:33.000000Z",
          "deleted_at": null
      },
      {
          "id": 120,
          "drug_id": 163,
          "word": "Dimenhydrinate",
          "notes": "an antiemetic",
          "created_at": "2020-05-06T19:13:02.000000Z",
          "updated_at": "2020-05-06T19:13:02.000000Z",
          "deleted_at": null
      },
      {
          "id": 121,
          "drug_id": 163,
          "word": "Diphenylhydantoin",
          "notes": "an anticonvulsant",
          "created_at": "2020-05-06T19:13:05.000000Z",
          "updated_at": "2020-05-06T19:13:05.000000Z",
          "deleted_at": null
      },
      {
          "id": 122,
          "drug_id": 165,
          "word": "Dopamine",
          "notes": "a catecholamine (often spelled doBUTamine to reduce the risk of confusion)",
          "created_at": "2020-05-06T19:17:47.000000Z",
          "updated_at": "2020-05-06T19:17:47.000000Z",
          "deleted_at": null
      },
      {
          "id": 123,
          "drug_id": 167,
          "word": "Dobutamine",
          "notes": "a catecholamine",
          "created_at": "2020-05-06T19:19:13.000000Z",
          "updated_at": "2020-05-06T19:19:13.000000Z",
          "deleted_at": null
      },
      {
          "id": 124,
          "drug_id": 167,
          "word": "Dopram",
          "notes": "doxapram, a respiratory and central nervous system stimulant",
          "created_at": "2020-05-06T19:19:15.000000Z",
          "updated_at": "2020-05-06T19:19:15.000000Z",
          "deleted_at": null
      },
      {
          "id": 125,
          "drug_id": 168,
          "word": "Dectomax",
          "notes": "sounds like Deramaxx (deracoxib, a nonsteroidal anti-inflammatory)",
          "created_at": "2020-05-06T19:20:11.000000Z",
          "updated_at": "2020-05-06T19:20:11.000000Z",
          "deleted_at": null
      },
      {
          "id": 126,
          "drug_id": 169,
          "word": "Dopram",
          "notes": "sounds like Dopamine (a catecholamine)",
          "created_at": "2020-05-06T19:20:51.000000Z",
          "updated_at": "2020-05-06T19:20:51.000000Z",
          "deleted_at": null
      },
      {
          "id": 127,
          "drug_id": 170,
          "word": "Doxycycline",
          "notes": "an antibacterial",
          "created_at": "2020-05-06T19:21:39.000000Z",
          "updated_at": "2020-05-06T19:21:39.000000Z",
          "deleted_at": null
      },
      {
          "id": 128,
          "drug_id": 171,
          "word": "Doxorubicin",
          "notes": "an antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T19:24:13.000000Z",
          "updated_at": "2020-05-06T19:24:13.000000Z",
          "deleted_at": null
      },
      {
          "id": 129,
          "drug_id": 173,
          "word": "Imidapril",
          "notes": "and all other ACE inhibitors, which end with the syllable \"pril\" (benazepril, lisinopril, quinapril, ramipril, etc.)",
          "created_at": "2020-05-06T19:29:25.000000Z",
          "updated_at": "2020-05-06T19:29:25.000000Z",
          "deleted_at": null
      },
      {
          "id": 130,
          "drug_id": 173,
          "word": "Anipryl",
          "notes": "selegiline/deprenyl, a monoamine oxidase inhibitor for treating cognitive dysfunction",
          "created_at": "2020-05-06T19:29:28.000000Z",
          "updated_at": "2020-05-06T19:29:28.000000Z",
          "deleted_at": null
      },
      {
          "id": 131,
          "drug_id": 174,
          "word": "Ketoconazole",
          "notes": "and other azole antifungals",
          "created_at": "2020-05-06T19:30:56.000000Z",
          "updated_at": "2020-05-06T19:30:56.000000Z",
          "deleted_at": null
      },
      {
          "id": 132,
          "drug_id": 175,
          "word": "Ofloxacin",
          "notes": "and many other fluoroquinolones",
          "created_at": "2020-05-06T19:31:54.000000Z",
          "updated_at": "2020-05-06T19:31:54.000000Z",
          "deleted_at": null
      },
      {
          "id": 133,
          "drug_id": 175,
          "word": "Baytril",
          "notes": "sounds like DayQuil (over-the-counter human cold remedy)",
          "created_at": "2020-05-06T19:31:57.000000Z",
          "updated_at": "2020-05-06T19:31:57.000000Z",
          "deleted_at": null
      },
      {
          "id": 134,
          "drug_id": 177,
          "word": "Norepinephrine",
          "notes": "catecholamine used for treating critical hypotension",
          "created_at": "2020-05-06T19:36:56.000000Z",
          "updated_at": "2020-05-06T19:36:56.000000Z",
          "deleted_at": null
      },
      {
          "id": 135,
          "drug_id": 177,
          "word": "Ephedrine",
          "notes": "sympathomimetic amine used as a nasal decongestant",
          "created_at": "2020-05-06T19:36:59.000000Z",
          "updated_at": "2020-05-06T19:36:59.000000Z",
          "deleted_at": null
      },
      {
          "id": 136,
          "drug_id": 179,
          "word": "Erythropoietin",
          "notes": "a hormone that increases red blood cell production and release from the bone marrow",
          "created_at": "2020-05-06T19:39:44.000000Z",
          "updated_at": "2020-05-06T19:39:44.000000Z",
          "deleted_at": null
      },
      {
          "id": 137,
          "drug_id": 180,
          "word": "Erythromycin",
          "notes": "an antibacterial",
          "created_at": "2020-05-06T19:42:05.000000Z",
          "updated_at": "2020-05-06T19:42:05.000000Z",
          "deleted_at": null
      },
      {
          "id": 138,
          "drug_id": 184,
          "word": "Tegison",
          "notes": "sounds like Tussigon (hydrocodone, an antitussive)",
          "created_at": "2020-05-06T19:46:30.000000Z",
          "updated_at": "2020-05-06T19:46:30.000000Z",
          "deleted_at": null
      },
      {
          "id": 139,
          "drug_id": 187,
          "word": "Felbamate",
          "notes": "an antiseizure drug",
          "created_at": "2020-05-06T19:50:19.000000Z",
          "updated_at": "2020-05-06T19:50:19.000000Z",
          "deleted_at": null
      },
      {
          "id": 140,
          "drug_id": 187,
          "word": "Fenbendazole",
          "notes": "a different antiparasitic",
          "created_at": "2020-05-06T19:50:21.000000Z",
          "updated_at": "2020-05-06T19:50:21.000000Z",
          "deleted_at": null
      },
      {
          "id": 141,
          "drug_id": 187,
          "word": "Rintal",
          "notes": "sounds like Ritalin (methylphenidate, a dopaminergic stimulant)",
          "created_at": "2020-05-06T19:50:23.000000Z",
          "updated_at": "2020-05-06T19:50:23.000000Z",
          "deleted_at": null
      },
      {
          "id": 142,
          "drug_id": 188,
          "word": "Febantel",
          "notes": "an antiparasitic",
          "created_at": "2020-05-06T19:52:55.000000Z",
          "updated_at": "2020-05-06T19:52:55.000000Z",
          "deleted_at": null
      },
      {
          "id": 143,
          "drug_id": 189,
          "word": "Felbamate",
          "notes": "an antiseizure drug",
          "created_at": "2020-05-06T19:53:33.000000Z",
          "updated_at": "2020-05-06T19:53:33.000000Z",
          "deleted_at": null
      },
      {
          "id": 144,
          "drug_id": 189,
          "word": "Febantel",
          "notes": "a different antiparasitic",
          "created_at": "2020-05-06T19:53:35.000000Z",
          "updated_at": "2020-05-06T19:53:35.000000Z",
          "deleted_at": null
      },
      {
          "id": 145,
          "drug_id": 189,
          "word": "Ketoconazole",
          "notes": "and other benzimidazole anthelmintics (e.g., albendazole) or azole antifungals",
          "created_at": "2020-05-06T19:53:37.000000Z",
          "updated_at": "2020-05-06T19:53:37.000000Z",
          "deleted_at": null
      },
      {
          "id": 146,
          "drug_id": 191,
          "word": "Ferrous fumarate",
          "notes": null,
          "created_at": "2020-05-06T20:01:32.000000Z",
          "updated_at": "2020-05-06T20:01:32.000000Z",
          "deleted_at": null
      },
      {
          "id": 147,
          "drug_id": 191,
          "word": "Ferrous gluconate",
          "notes": null,
          "created_at": "2020-05-06T20:01:34.000000Z",
          "updated_at": "2020-05-06T20:01:34.000000Z",
          "deleted_at": null
      },
      {
          "id": 148,
          "drug_id": 192,
          "word": "Neupogen",
          "notes": "sounds like Epogen (erythropoietin)",
          "created_at": "2020-05-06T20:02:34.000000Z",
          "updated_at": "2020-05-06T20:02:34.000000Z",
          "deleted_at": null
      },
      {
          "id": 149,
          "drug_id": 193,
          "word": "Proscar",
          "notes": "sounds like Pronestyl (procainamide, a cardiac antiarrhythmic)",
          "created_at": "2020-05-06T20:04:06.000000Z",
          "updated_at": "2020-05-06T20:04:06.000000Z",
          "deleted_at": null
      },
      {
          "id": 150,
          "drug_id": 193,
          "word": "Procrit",
          "notes": "erythropoietin, a red blood cell promoting hormone",
          "created_at": "2020-05-06T20:04:08.000000Z",
          "updated_at": "2020-05-06T20:04:08.000000Z",
          "deleted_at": null
      },
      {
          "id": 151,
          "drug_id": 194,
          "word": "Previcox",
          "notes": "sounds like Prevacid (lansoprazole, a proton-pump inhibitor gastric acid reducer)",
          "created_at": "2020-05-06T20:04:46.000000Z",
          "updated_at": "2020-05-06T20:04:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 152,
          "drug_id": 195,
          "word": "Flucort",
          "notes": "flumethasone, a corticosteroid",
          "created_at": "2020-05-06T20:05:35.000000Z",
          "updated_at": "2020-05-06T20:05:35.000000Z",
          "deleted_at": null
      },
      {
          "id": 153,
          "drug_id": 195,
          "word": "Fluticasone",
          "notes": "an inhaled corticosteroid",
          "created_at": "2020-05-06T20:05:38.000000Z",
          "updated_at": "2020-05-06T20:05:38.000000Z",
          "deleted_at": null
      },
      {
          "id": 154,
          "drug_id": 195,
          "word": "Fludrocortisone",
          "notes": "a mineralocorticoid supplement",
          "created_at": "2020-05-06T20:05:40.000000Z",
          "updated_at": "2020-05-06T20:05:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 155,
          "drug_id": 195,
          "word": "Ketoconazole",
          "notes": "and other azole antifungals",
          "created_at": "2020-05-06T20:05:42.000000Z",
          "updated_at": "2020-05-06T20:05:42.000000Z",
          "deleted_at": null
      },
      {
          "id": 156,
          "drug_id": 196,
          "word": "Fluconazole",
          "notes": "an antifungal",
          "created_at": "2020-05-06T20:08:40.000000Z",
          "updated_at": "2020-05-06T20:08:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 157,
          "drug_id": 196,
          "word": "Flucort",
          "notes": "flumethasone, a corticosteroid",
          "created_at": "2020-05-06T20:08:42.000000Z",
          "updated_at": "2020-05-06T20:08:42.000000Z",
          "deleted_at": null
      },
      {
          "id": 158,
          "drug_id": 196,
          "word": "Fluticasone",
          "notes": "an inhaled corticosteroid",
          "created_at": "2020-05-06T20:08:45.000000Z",
          "updated_at": "2020-05-06T20:08:45.000000Z",
          "deleted_at": null
      },
      {
          "id": 159,
          "drug_id": 199,
          "word": "Fluoroacetate",
          "notes": "1080, a pesticide",
          "created_at": "2020-05-06T20:11:05.000000Z",
          "updated_at": "2020-05-06T20:11:05.000000Z",
          "deleted_at": null
      },
      {
          "id": 160,
          "drug_id": 201,
          "word": "Fludrocortisone",
          "notes": "a mineralocorticoid supplement",
          "created_at": "2020-05-06T20:14:13.000000Z",
          "updated_at": "2020-05-06T20:14:13.000000Z",
          "deleted_at": null
      },
      {
          "id": 161,
          "drug_id": 201,
          "word": "Fluconazole",
          "notes": "an antifungal",
          "created_at": "2020-05-06T20:14:15.000000Z",
          "updated_at": "2020-05-06T20:14:15.000000Z",
          "deleted_at": null
      },
      {
          "id": 162,
          "drug_id": 206,
          "word": "Pregabalin",
          "notes": "another anticonvulsant/analgesic",
          "created_at": "2020-05-06T20:21:58.000000Z",
          "updated_at": "2020-05-06T20:21:58.000000Z",
          "deleted_at": null
      },
      {
          "id": 163,
          "drug_id": 207,
          "word": "Gentamicin",
          "notes": "an antibacterial",
          "created_at": "2020-05-06T20:23:08.000000Z",
          "updated_at": "2020-05-06T20:23:08.000000Z",
          "deleted_at": null
      },
      {
          "id": 164,
          "drug_id": 207,
          "word": "Gemzar",
          "notes": "sounds like Cytosar (cytosine arabinoside, another antineoplastic chemotherapeutic)",
          "created_at": "2020-05-06T20:23:11.000000Z",
          "updated_at": "2020-05-06T20:23:11.000000Z",
          "deleted_at": null
      },
      {
          "id": 165,
          "drug_id": 208,
          "word": "Gemcitabine",
          "notes": "an antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T20:24:48.000000Z",
          "updated_at": "2020-05-06T20:24:48.000000Z",
          "deleted_at": null
      },
      {
          "id": 166,
          "drug_id": 209,
          "word": "Glucotrol",
          "notes": "sounds like Glucotrol XL (same active ingredient but sustained-release formula, not well evaluated in veterinary medicine)",
          "created_at": "2020-05-06T20:26:57.000000Z",
          "updated_at": "2020-05-06T20:26:57.000000Z",
          "deleted_at": null
      },
      {
          "id": 167,
          "drug_id": 209,
          "word": "Glyburide",
          "notes": "another oral antihyperglycemic drug",
          "created_at": "2020-05-06T20:27:00.000000Z",
          "updated_at": "2020-05-06T20:27:00.000000Z",
          "deleted_at": null
      },
      {
          "id": 168,
          "drug_id": 211,
          "word": "Glycosaminoglycan",
          "notes": "another osteoarthritis supplement",
          "created_at": "2020-05-06T20:29:16.000000Z",
          "updated_at": "2020-05-06T20:29:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 169,
          "drug_id": 213,
          "word": "Glucosamine",
          "notes": "another chondroprotective agent",
          "created_at": "2020-05-06T20:31:03.000000Z",
          "updated_at": "2020-05-06T20:31:03.000000Z",
          "deleted_at": null
      },
      {
          "id": 170,
          "drug_id": 215,
          "word": "Dolasetron",
          "notes": "another antiemetic",
          "created_at": "2020-05-06T20:34:25.000000Z",
          "updated_at": "2020-05-06T20:34:25.000000Z",
          "deleted_at": null
      },
      {
          "id": 171,
          "drug_id": 215,
          "word": "Granulocyte-colony stimulating factor",
          "notes": "filgrastim, a hormone to increase white blood cell production",
          "created_at": "2020-05-06T20:34:27.000000Z",
          "updated_at": "2020-05-06T20:34:27.000000Z",
          "deleted_at": null
      },
      {
          "id": 172,
          "drug_id": 216,
          "word": "Griseofulvin microsize",
          "notes": "(e.g., Fulvicin U/F) contain griseofulvin as the sole active ingredient but are manyfold different in bioavailability",
          "created_at": "2020-05-06T20:35:02.000000Z",
          "updated_at": "2020-05-06T20:35:02.000000Z",
          "deleted_at": null
      },
      {
          "id": 173,
          "drug_id": 216,
          "word": "Griseofulvin ultramicrosize",
          "notes": "(e.g., Gris-PEG) contain griseofulvin as the sole active ingredient but are manyfold different in bioavailability: ultramicrosize is much more bioavailable and therefore must be given at much lower dosages for the same effect and safety",
          "created_at": "2020-05-06T20:35:05.000000Z",
          "updated_at": "2020-05-06T20:35:05.000000Z",
          "deleted_at": null
      },
      {
          "id": 174,
          "drug_id": 218,
          "word": "Heparin, low-molecular-weight",
          "notes": "another anticoagulant but with different biological activity, different dosages and intervals",
          "created_at": "2020-05-06T20:37:36.000000Z",
          "updated_at": "2020-05-06T20:37:36.000000Z",
          "deleted_at": null
      },
      {
          "id": 175,
          "drug_id": 219,
          "word": "Heparin",
          "notes": "or unfractionated heparin, signifying regular heparin as opposed to low-molecular-weight heparin",
          "created_at": "2020-05-06T20:39:50.000000Z",
          "updated_at": "2020-05-06T20:39:50.000000Z",
          "deleted_at": null
      },
      {
          "id": 176,
          "drug_id": 221,
          "word": "Hydroxyzine",
          "notes": "an antihistamine)",
          "created_at": "2020-05-06T20:41:30.000000Z",
          "updated_at": "2020-05-06T20:41:30.000000Z",
          "deleted_at": null
      },
      {
          "id": 177,
          "drug_id": 221,
          "word": "Apresoline",
          "notes": "sounds like Acepromazine (a tranquilizer)",
          "created_at": "2020-05-06T20:41:32.000000Z",
          "updated_at": "2020-05-06T20:41:32.000000Z",
          "deleted_at": null
      },
      {
          "id": 178,
          "drug_id": 222,
          "word": "Chlorothiazide",
          "notes": "a different diuretic with 5-10 times lower potency",
          "created_at": "2020-05-06T20:43:04.000000Z",
          "updated_at": "2020-05-06T20:43:04.000000Z",
          "deleted_at": null
      },
      {
          "id": 179,
          "drug_id": 223,
          "word": "Hydromorphone",
          "notes": "an injectable opiate analgesic",
          "created_at": "2020-05-06T20:44:30.000000Z",
          "updated_at": "2020-05-06T20:44:30.000000Z",
          "deleted_at": null
      },
      {
          "id": 180,
          "drug_id": 223,
          "word": "Codeine",
          "notes": "a similar opioid but with 7-fold lower analgesic potency",
          "created_at": "2020-05-06T20:44:32.000000Z",
          "updated_at": "2020-05-06T20:44:32.000000Z",
          "deleted_at": null
      },
      {
          "id": 181,
          "drug_id": 224,
          "word": "Solu-Cortef",
          "notes": "sounds like Solu-Delta-Cortef (prednisolone sodium succinate, a different water-soluble glucocorticoid)",
          "created_at": "2020-05-06T20:45:09.000000Z",
          "updated_at": "2020-05-06T20:45:09.000000Z",
          "deleted_at": null
      },
      {
          "id": 182,
          "drug_id": 225,
          "word": "Hydrogen peroxide 30%",
          "notes": "hair bleaching products - caustic, and must be avoided",
          "created_at": "2020-05-06T20:46:27.000000Z",
          "updated_at": "2020-05-06T20:46:27.000000Z",
          "deleted_at": null
      },
      {
          "id": 183,
          "drug_id": 226,
          "word": "Morphine",
          "notes": "a 10-fold less-potent opiate",
          "created_at": "2020-05-06T20:46:53.000000Z",
          "updated_at": "2020-05-06T20:46:53.000000Z",
          "deleted_at": null
      },
      {
          "id": 184,
          "drug_id": 226,
          "word": "Hydrocodone",
          "notes": "an orally-administered opiate antitussive",
          "created_at": "2020-05-06T20:46:56.000000Z",
          "updated_at": "2020-05-06T20:46:56.000000Z",
          "deleted_at": null
      },
      {
          "id": 185,
          "drug_id": 227,
          "word": "Hetastarch",
          "notes": "sounds like Pentastarch (a similar synthetic carbohydrate colloid solution)",
          "created_at": "2020-05-06T20:48:48.000000Z",
          "updated_at": "2020-05-06T20:48:48.000000Z",
          "deleted_at": null
      },
      {
          "id": 186,
          "drug_id": 228,
          "word": "Hydroxyzine",
          "notes": "an antihistamine",
          "created_at": "2020-05-06T20:50:29.000000Z",
          "updated_at": "2020-05-06T20:50:29.000000Z",
          "deleted_at": null
      },
      {
          "id": 187,
          "drug_id": 229,
          "word": "Hydralazine",
          "notes": "a vasodilator (often spelled hydrOXYzine to reduce this risk of confusion)",
          "created_at": "2020-05-06T20:52:54.000000Z",
          "updated_at": "2020-05-06T20:52:54.000000Z",
          "deleted_at": null
      },
      {
          "id": 188,
          "drug_id": 230,
          "word": "Levofloxacin",
          "notes": "and other fluoroquinolone antibacterials (\"flox\" or \"-oxacin\" drugs)",
          "created_at": "2020-05-06T20:53:52.000000Z",
          "updated_at": "2020-05-06T20:53:52.000000Z",
          "deleted_at": null
      },
      {
          "id": 189,
          "drug_id": 231,
          "word": "",
          "notes": "Many cold/flu formulations contain ibuprofen and various decongestants, antihistamines, and other ingredients that may have toxic effects",
          "created_at": "2020-05-06T20:54:33.000000Z",
          "updated_at": "2020-05-06T20:54:33.000000Z",
          "deleted_at": null
      },
      {
          "id": 190,
          "drug_id": 233,
          "word": "Toceranib",
          "notes": "other tyrosine kinase inhibitor used for treatment of mast cell tumor",
          "created_at": "2020-05-06T20:57:19.000000Z",
          "updated_at": "2020-05-06T20:57:19.000000Z",
          "deleted_at": null
      },
      {
          "id": 191,
          "drug_id": 234,
          "word": "Enalapril",
          "notes": "and other ACE inhibitors (e.g., benazepril, etc.)",
          "created_at": "2020-05-06T20:57:47.000000Z",
          "updated_at": "2020-05-06T20:57:47.000000Z",
          "deleted_at": null
      },
      {
          "id": 192,
          "drug_id": 236,
          "word": "Imipramine",
          "notes": "a behavior-modifying drug",
          "created_at": "2020-05-06T21:00:05.000000Z",
          "updated_at": "2020-05-06T21:00:05.000000Z",
          "deleted_at": null
      },
      {
          "id": 193,
          "drug_id": 236,
          "word": "Meropenem",
          "notes": "a related antibacterial drug",
          "created_at": "2020-05-06T21:00:08.000000Z",
          "updated_at": "2020-05-06T21:00:08.000000Z",
          "deleted_at": null
      },
      {
          "id": 194,
          "drug_id": 237,
          "word": "Imipenem",
          "notes": "an antibiotic",
          "created_at": "2020-05-06T21:01:00.000000Z",
          "updated_at": "2020-05-06T21:01:00.000000Z",
          "deleted_at": null
      },
      {
          "id": 195,
          "drug_id": 237,
          "word": "Clomipramine",
          "notes": "another tricyclic antidepressant",
          "created_at": "2020-05-06T21:01:03.000000Z",
          "updated_at": "2020-05-06T21:01:03.000000Z",
          "deleted_at": null
      },
      {
          "id": 196,
          "drug_id": 239,
          "word": "",
          "notes": "All other insulins;caution if client seeks pharmacy refill of \"my 'regular' insulin\", which the client means as \"usual\" or \"customary\" but which may prompt prescription of crystalline/regular insulin",
          "created_at": "2020-05-06T21:04:13.000000Z",
          "updated_at": "2020-05-06T21:04:13.000000Z",
          "deleted_at": null
      },
      {
          "id": 197,
          "drug_id": 240,
          "word": "",
          "notes": "All other insulins;caution if client seeks pharmacy refill of \"my 'regular' insulin\", which the client means as \"usual\" or \"customary\" but which may prompt prescription of crystalline/regular insulin",
          "created_at": "2020-05-06T21:05:16.000000Z",
          "updated_at": "2020-05-06T21:05:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 198,
          "drug_id": 241,
          "word": "",
          "notes": "All other insulins;caution re. vet vs. human preparations, because human preparations tend to be 100 IU/mL whereas veterinary preparations tend to be 40 IU/mL;caution if client seeks pharmacy refill of \"my 'regular' insulin\", which the client means as \"usual\" or \"customary\" but which may prompt prescription of crystalline/regular insulin",
          "created_at": "2020-05-06T21:06:04.000000Z",
          "updated_at": "2020-05-06T21:06:04.000000Z",
          "deleted_at": null
      },
      {
          "id": 199,
          "drug_id": 242,
          "word": "",
          "notes": "All other insulins",
          "created_at": "2020-05-06T21:06:53.000000Z",
          "updated_at": "2020-05-06T21:06:53.000000Z",
          "deleted_at": null
      },
      {
          "id": 200,
          "drug_id": 243,
          "word": "",
          "notes": "All other insulins;caution if client seeks pharmacy refill of \"my 'regular' insulin\", which the client means as \"usual\" or \"customary\" but which may prompt prescription of crystalline/regular insulin",
          "created_at": "2020-05-06T21:07:24.000000Z",
          "updated_at": "2020-05-06T21:07:24.000000Z",
          "deleted_at": null
      },
      {
          "id": 201,
          "drug_id": 244,
          "word": "",
          "notes": "All other insulins;caution re. vet vs. human preparations, because human preparations tend to be 100 IU/mL whereas veterinary preparations tend to be 40 IU/mL;caution if client seeks pharmacy refill of \"my 'regular' insulin\", which the client means as \"usual\" or \"customary\" but which may prompt prescription of crystalline/regular insulin",
          "created_at": "2020-05-06T21:08:22.000000Z",
          "updated_at": "2020-05-06T21:08:22.000000Z",
          "deleted_at": null
      },
      {
          "id": 202,
          "drug_id": 245,
          "word": "",
          "notes": "All other insulins",
          "created_at": "2020-05-06T21:09:14.000000Z",
          "updated_at": "2020-05-06T21:09:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 203,
          "drug_id": 246,
          "word": "",
          "notes": "All other insulins;caution if client seeks pharmacy refill of \"my 'regular' insulin\", which the client means as \"usual\" or \"customary\" but which may prompt prescription of crystalline/regular insulin",
          "created_at": "2020-05-06T21:11:00.000000Z",
          "updated_at": "2020-05-06T21:11:00.000000Z",
          "deleted_at": null
      },
      {
          "id": 204,
          "drug_id": 247,
          "word": "Interferon-omega",
          "notes": "",
          "created_at": "2020-05-06T21:11:28.000000Z",
          "updated_at": "2020-11-16T02:13:07.000000Z",
          "deleted_at": null
      },
      {
          "id": 205,
          "drug_id": 248,
          "word": "Interferon-alpha",
          "notes": "",
          "created_at": "2020-05-06T21:13:42.000000Z",
          "updated_at": "2020-11-16T02:26:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 206,
          "drug_id": 249,
          "word": "Radioiodine",
          "notes": "a radiopharmaceutical for treating functional thyroid tumors",
          "created_at": "2020-05-06T21:16:02.000000Z",
          "updated_at": "2020-05-06T21:16:02.000000Z",
          "deleted_at": null
      },
      {
          "id": 207,
          "drug_id": 253,
          "word": "Isosorbide dinitrate",
          "notes": null,
          "created_at": "2020-05-06T22:03:13.000000Z",
          "updated_at": "2020-05-06T22:03:13.000000Z",
          "deleted_at": null
      },
      {
          "id": 208,
          "drug_id": 255,
          "word": "Fluconazole",
          "notes": "and other azole antifungals (e.g., ketoconazole, voriconazole)",
          "created_at": "2020-05-06T22:05:12.000000Z",
          "updated_at": "2020-05-06T22:05:12.000000Z",
          "deleted_at": null
      },
      {
          "id": 209,
          "drug_id": 256,
          "word": "Selamectin",
          "notes": "and other avermectin-class antiparasitics (e.g., doramectin, moxidectin)",
          "created_at": "2020-05-06T22:08:30.000000Z",
          "updated_at": "2020-05-06T22:08:30.000000Z",
          "deleted_at": null
      },
      {
          "id": 210,
          "drug_id": 257,
          "word": "Kaopectate, attapulgite",
          "notes": "Kaopectate (brand name of product) may contain kaolin-pectin, or attapulgite, or other active ingredients without kaolin or pectin",
          "created_at": "2020-05-06T22:15:00.000000Z",
          "updated_at": "2020-05-06T22:15:00.000000Z",
          "deleted_at": null
      },
      {
          "id": 211,
          "drug_id": 259,
          "word": "Fluconazole",
          "notes": "other azole antifungals (e.g., itraconazole, voriconazole)",
          "created_at": "2020-05-06T22:18:48.000000Z",
          "updated_at": "2020-05-06T22:18:48.000000Z",
          "deleted_at": null
      },
      {
          "id": 212,
          "drug_id": 260,
          "word": "Carprofen",
          "notes": "another nonsteroidal anti-inflammatory",
          "created_at": "2020-05-06T22:21:41.000000Z",
          "updated_at": "2020-05-06T22:21:41.000000Z",
          "deleted_at": null
      },
      {
          "id": 213,
          "drug_id": 260,
          "word": "Ketofen",
          "notes": "sounds like Ketaset (ketamine, a dissociative anesthetic)",
          "created_at": "2020-05-06T22:21:43.000000Z",
          "updated_at": "2020-05-06T22:21:43.000000Z",
          "deleted_at": null
      },
      {
          "id": 214,
          "drug_id": 263,
          "word": "Lufenuron",
          "notes": "an antiparasitic",
          "created_at": "2020-05-06T22:26:46.000000Z",
          "updated_at": "2020-05-06T22:26:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 215,
          "drug_id": 269,
          "word": "Clindamycin",
          "notes": "and similarly-named antibacterials",
          "created_at": "2020-05-06T22:37:35.000000Z",
          "updated_at": "2020-05-06T22:37:35.000000Z",
          "deleted_at": null
      },
      {
          "id": 216,
          "drug_id": 269,
          "word": "Gentamicin",
          "notes": "and similarly-named antibacterials",
          "created_at": "2020-05-06T22:37:38.000000Z",
          "updated_at": "2020-05-06T22:37:38.000000Z",
          "deleted_at": null
      },
      {
          "id": 217,
          "drug_id": 270,
          "word": "Enalapril",
          "notes": "and other ACE inhibitors (e.g., benazepril, etc.)",
          "created_at": "2020-05-06T22:38:14.000000Z",
          "updated_at": "2020-05-06T22:38:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 218,
          "drug_id": 270,
          "word": "Anipryl",
          "notes": "selegiline, a monoamine oxidase inhibitor",
          "created_at": "2020-05-06T22:38:16.000000Z",
          "updated_at": "2020-05-06T22:38:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 219,
          "drug_id": 272,
          "word": "Cisplatin",
          "notes": "another antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T22:40:34.000000Z",
          "updated_at": "2020-05-06T22:40:34.000000Z",
          "deleted_at": null
      },
      {
          "id": 220,
          "drug_id": 272,
          "word": "Carboplatin",
          "notes": "another antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T22:40:36.000000Z",
          "updated_at": "2020-05-06T22:40:36.000000Z",
          "deleted_at": null
      },
      {
          "id": 221,
          "drug_id": 272,
          "word": "Paraplatin",
          "notes": "brand name for carboplatin",
          "created_at": "2020-05-06T22:40:39.000000Z",
          "updated_at": "2020-05-06T22:40:39.000000Z",
          "deleted_at": null
      },
      {
          "id": 222,
          "drug_id": 273,
          "word": "Carmustine",
          "notes": "another antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T22:41:06.000000Z",
          "updated_at": "2020-05-06T22:41:06.000000Z",
          "deleted_at": null
      },
      {
          "id": 223,
          "drug_id": 273,
          "word": "CCNU",
          "notes": "sounds like BiCNU (brand name for carmustine)",
          "created_at": "2020-05-06T22:41:08.000000Z",
          "updated_at": "2020-05-06T22:41:08.000000Z",
          "deleted_at": null
      },
      {
          "id": 224,
          "drug_id": 276,
          "word": "Leflunomide",
          "notes": null,
          "created_at": "2020-05-06T22:45:52.000000Z",
          "updated_at": "2020-05-06T22:45:52.000000Z",
          "deleted_at": null
      },
      {
          "id": 225,
          "drug_id": 278,
          "word": "Magnesium chloride",
          "notes": null,
          "created_at": "2020-05-06T22:47:50.000000Z",
          "updated_at": "2020-05-06T22:47:50.000000Z",
          "deleted_at": null
      },
      {
          "id": 226,
          "drug_id": 280,
          "word": "Enrofloxacin",
          "notes": "and other fluoroquinolone antibacterials (e.g., ciprofloxacin, etc.)",
          "created_at": "2020-05-06T22:51:24.000000Z",
          "updated_at": "2020-05-06T22:51:24.000000Z",
          "deleted_at": null
      },
      {
          "id": 227,
          "drug_id": 283,
          "word": "Megestrol acetate",
          "notes": "another progestin",
          "created_at": "2020-05-06T22:56:29.000000Z",
          "updated_at": "2020-05-06T22:56:29.000000Z",
          "deleted_at": null
      },
      {
          "id": 228,
          "drug_id": 284,
          "word": "Medroxyprogesterone acetate",
          "notes": "another progestin",
          "created_at": "2020-05-06T22:57:43.000000Z",
          "updated_at": "2020-05-06T22:57:43.000000Z",
          "deleted_at": null
      },
      {
          "id": 229,
          "drug_id": 285,
          "word": "Glucantime",
          "notes": "sounds like Glucotrol (an antidiabetic drug)",
          "created_at": "2020-05-06T22:59:03.000000Z",
          "updated_at": "2020-05-06T22:59:03.000000Z",
          "deleted_at": null
      },
      {
          "id": 230,
          "drug_id": 285,
          "word": "Glucagon",
          "notes": "a catabolic hormone",
          "created_at": "2020-05-06T22:59:05.000000Z",
          "updated_at": "2020-05-06T22:59:05.000000Z",
          "deleted_at": null
      },
      {
          "id": 231,
          "drug_id": 285,
          "word": "Flunixin meglumine",
          "notes": "and other drugs in which the meglumine component is found that are completely unrelated to the antimony compounds (several injectable contrast agents, e.g., diatrizoate meglumine, etc.)",
          "created_at": "2020-05-06T22:59:08.000000Z",
          "updated_at": "2020-05-06T22:59:08.000000Z",
          "deleted_at": null
      },
      {
          "id": 232,
          "drug_id": 289,
          "word": "Alkeran",
          "notes": "sounds like Leukeran (chlorambucil, another alkylating-agent antineoplastic)",
          "created_at": "2020-05-06T23:04:02.000000Z",
          "updated_at": "2020-05-06T23:04:02.000000Z",
          "deleted_at": null
      },
      {
          "id": 233,
          "drug_id": 290,
          "word": "Demerol",
          "notes": "sounds like Daranide (dichlorphenamide, a carbonic anhydrase inhibitor used for treating glaucoma)",
          "created_at": "2020-05-06T23:05:50.000000Z",
          "updated_at": "2020-05-06T23:05:50.000000Z",
          "deleted_at": null
      },
      {
          "id": 234,
          "drug_id": 294,
          "word": "Methimazole",
          "notes": "an antithyroid drug",
          "created_at": "2020-05-06T23:09:42.000000Z",
          "updated_at": "2020-05-06T23:09:42.000000Z",
          "deleted_at": null
      },
      {
          "id": 235,
          "drug_id": 295,
          "word": "Methazolamide",
          "notes": "a carbonic anhydrase inhibitor used for treating glaucoma",
          "created_at": "2020-05-06T23:10:13.000000Z",
          "updated_at": "2020-05-06T23:10:13.000000Z",
          "deleted_at": null
      },
      {
          "id": 236,
          "drug_id": 296,
          "word": "Methionine, s-adenosyl",
          "notes": "a hepatoprotectant and antioxidant",
          "created_at": "2020-05-06T23:11:27.000000Z",
          "updated_at": "2020-05-06T23:11:27.000000Z",
          "deleted_at": null
      },
      {
          "id": 237,
          "drug_id": 297,
          "word": "Methionine, DL-",
          "notes": "a urinary acidifier",
          "created_at": "2020-05-06T23:12:04.000000Z",
          "updated_at": "2020-05-06T23:12:04.000000Z",
          "deleted_at": null
      },
      {
          "id": 238,
          "drug_id": 298,
          "word": "Robaxin",
          "notes": "sounds like Robinul (glycopyrrolate, an anticholinergic",
          "created_at": "2020-05-06T23:13:43.000000Z",
          "updated_at": "2020-05-06T23:13:43.000000Z",
          "deleted_at": null
      },
      {
          "id": 239,
          "drug_id": 299,
          "word": "Mitoxantrone",
          "notes": "a different antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T23:15:40.000000Z",
          "updated_at": "2020-05-06T23:15:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 240,
          "drug_id": 301,
          "word": "Methamphetamine",
          "notes": "an illicit drug, \"meth,\" whereas methylphenidate is best known as Ritalin, a common treatment for childhood attention-deficit-hyperactivity disorder",
          "created_at": "2020-05-06T23:18:20.000000Z",
          "updated_at": "2020-05-06T23:18:20.000000Z",
          "deleted_at": null
      },
      {
          "id": 241,
          "drug_id": 302,
          "word": "Methylprednisolone acetate",
          "notes": "another glucocorticoid",
          "created_at": "2020-05-06T23:19:18.000000Z",
          "updated_at": "2020-05-06T23:19:18.000000Z",
          "deleted_at": null
      },
      {
          "id": 242,
          "drug_id": 302,
          "word": "Methylprednisolone sodium succinate",
          "notes": "another glucocorticoid",
          "created_at": "2020-05-06T23:19:20.000000Z",
          "updated_at": "2020-05-06T23:19:20.000000Z",
          "deleted_at": null
      },
      {
          "id": 243,
          "drug_id": 303,
          "word": "Methylprednisolone sodium succinate",
          "notes": "and other methylprednisolones (same parent drug but profoundly different pharmacokinetics)",
          "created_at": "2020-05-06T23:19:56.000000Z",
          "updated_at": "2020-05-06T23:19:56.000000Z",
          "deleted_at": null
      },
      {
          "id": 244,
          "drug_id": 304,
          "word": "Prednisolone sodium succinate",
          "notes": "another water-soluble corticosteroid",
          "created_at": "2020-05-06T23:22:27.000000Z",
          "updated_at": "2020-05-06T23:22:27.000000Z",
          "deleted_at": null
      },
      {
          "id": 245,
          "drug_id": 304,
          "word": "Methylprednisolone acetate",
          "notes": "an opaque-white, long-acting corticosteroid that should NEVER be given IV (immediately fatal)",
          "created_at": "2020-05-06T23:22:30.000000Z",
          "updated_at": "2020-05-06T23:22:30.000000Z",
          "deleted_at": null
      },
      {
          "id": 246,
          "drug_id": 307,
          "word": "Propranolol",
          "notes": "other beta-adrenergic blockers (e.g., atenolol, etc.)",
          "created_at": "2020-05-06T23:26:28.000000Z",
          "updated_at": "2020-05-06T23:26:28.000000Z",
          "deleted_at": null
      },
      {
          "id": 247,
          "drug_id": 307,
          "word": "Lansoprazole",
          "notes": "other proton-pump inhibiting drugs (pantoprazole)",
          "created_at": "2020-05-06T23:26:30.000000Z",
          "updated_at": "2020-05-06T23:26:30.000000Z",
          "deleted_at": null
      },
      {
          "id": 248,
          "drug_id": 308,
          "word": "Fluconazole",
          "notes": "other azole antifungals (e.g., itraconazole, voriconazole)",
          "created_at": "2020-05-06T23:28:21.000000Z",
          "updated_at": "2020-05-06T23:28:21.000000Z",
          "deleted_at": null
      },
      {
          "id": 249,
          "drug_id": 310,
          "word": "Mifepristone",
          "notes": "an abortefacient drug",
          "created_at": "2020-05-06T23:31:57.000000Z",
          "updated_at": "2020-05-06T23:31:57.000000Z",
          "deleted_at": null
      },
      {
          "id": 250,
          "drug_id": 311,
          "word": "Versed",
          "notes": "sounds like Versenate (a form of calcium EDTA used for treating lead intoxication)",
          "created_at": "2020-05-06T23:32:49.000000Z",
          "updated_at": "2020-05-06T23:32:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 251,
          "drug_id": 312,
          "word": "Miltefosine",
          "notes": "an antiparasitic drug used for treating leishmaniasis",
          "created_at": "2020-05-06T23:35:08.000000Z",
          "updated_at": "2020-05-06T23:35:08.000000Z",
          "deleted_at": null
      },
      {
          "id": 252,
          "drug_id": 314,
          "word": "Remeron",
          "notes": "sounds like Demerol (meperidine, a narcotic analgesic) and Rompun (xylazine, an alpha-blocking tranquilizer)",
          "created_at": "2020-05-06T23:38:34.000000Z",
          "updated_at": "2020-05-06T23:38:34.000000Z",
          "deleted_at": null
      },
      {
          "id": 253,
          "drug_id": 315,
          "word": "Cytotec",
          "notes": "sounds like Cytosar (cytosine arabinoside, an antineoplastic chemotherapeutic) and Cytomel (triiodothyronine, a thyroid hormone)",
          "created_at": "2020-05-06T23:39:14.000000Z",
          "updated_at": "2020-05-06T23:39:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 254,
          "drug_id": 316,
          "word": "Methotrexate",
          "notes": "a different antineoplastic chemotherapeutic",
          "created_at": "2020-05-06T23:40:44.000000Z",
          "updated_at": "2020-05-06T23:40:44.000000Z",
          "deleted_at": null
      },
      {
          "id": 255,
          "drug_id": 316,
          "word": "Mitotane",
          "notes": "o,p'DDD, an adrenocorticolytic",
          "created_at": "2020-05-06T23:40:46.000000Z",
          "updated_at": "2020-05-06T23:40:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 256,
          "drug_id": 317,
          "word": "Hydromorphone",
          "notes": "more-potent opiate",
          "created_at": "2020-05-06T23:42:35.000000Z",
          "updated_at": "2020-05-06T23:42:35.000000Z",
          "deleted_at": null
      },
      {
          "id": 257,
          "drug_id": 317,
          "word": "Oxymorphone",
          "notes": "more-potent opiate",
          "created_at": "2020-05-06T23:42:37.000000Z",
          "updated_at": "2020-05-06T23:42:37.000000Z",
          "deleted_at": null
      },
      {
          "id": 258,
          "drug_id": 318,
          "word": "Pradofloxacin",
          "notes": "other fluoroquinolones (e.g., ciprofloxacin, etc.)",
          "created_at": "2020-05-06T23:45:00.000000Z",
          "updated_at": "2020-05-06T23:45:00.000000Z",
          "deleted_at": null
      },
      {
          "id": 259,
          "drug_id": 320,
          "word": "Naltrexone",
          "notes": "a much less potent, orally-administered opioid antagonist used in humans for opioid addiction/withdrawal",
          "created_at": "2020-05-06T23:47:11.000000Z",
          "updated_at": "2020-05-06T23:47:11.000000Z",
          "deleted_at": null
      },
      {
          "id": 260,
          "drug_id": 320,
          "word": "Naproxen",
          "notes": "a nonsteroidal anti-inflammatory",
          "created_at": "2020-05-06T23:47:13.000000Z",
          "updated_at": "2020-05-06T23:47:13.000000Z",
          "deleted_at": null
      },
      {
          "id": 261,
          "drug_id": 321,
          "word": "Naloxone",
          "notes": "an opiate reversal agent",
          "created_at": "2020-05-06T23:48:21.000000Z",
          "updated_at": "2020-05-06T23:48:21.000000Z",
          "deleted_at": null
      },
      {
          "id": 262,
          "drug_id": 322,
          "word": "Pyridostigmine",
          "notes": "an orally-administered acetylcholinesterase inhibitor",
          "created_at": "2020-05-06T23:49:19.000000Z",
          "updated_at": "2020-05-06T23:49:19.000000Z",
          "deleted_at": null
      },
      {
          "id": 263,
          "drug_id": 322,
          "word": "Neomycin",
          "notes": "antibacterial, and multiple other \"neo-\" prefix drugs (NeoSar = cyclophosphamide, etc.)",
          "created_at": "2020-05-06T23:49:21.000000Z",
          "updated_at": "2020-05-06T23:49:21.000000Z",
          "deleted_at": null
      },
      {
          "id": 264,
          "drug_id": 322,
          "word": "Prostigmin",
          "notes": "sounds like multiple \"pro-\" prefix drugs (Proscar [finasteride, a treatment for benign prostatic hyperplasia], Pronestyl [procainamide, a cardiac antiarrhythmic], Proglycem [diazoxide, a drug that increases blood glucose level], etc.)",
          "created_at": "2020-05-06T23:49:24.000000Z",
          "updated_at": "2020-05-06T23:49:24.000000Z",
          "deleted_at": null
      },
      {
          "id": 265,
          "drug_id": 323,
          "word": "Niacin",
          "notes": "vitamin B3, nicotinic acid",
          "created_at": "2020-05-06T23:51:05.000000Z",
          "updated_at": "2020-05-06T23:51:05.000000Z",
          "deleted_at": null
      },
      {
          "id": 266,
          "drug_id": 324,
          "word": "Nizatidine",
          "notes": "a gastric acid-reducing drug",
          "created_at": "2020-05-06T23:53:03.000000Z",
          "updated_at": "2020-05-06T23:53:03.000000Z",
          "deleted_at": null
      },
      {
          "id": 267,
          "drug_id": 326,
          "word": "Nitroprusside",
          "notes": "a different nitrate vasodilator",
          "created_at": "2020-05-06T23:54:48.000000Z",
          "updated_at": "2020-05-06T23:54:48.000000Z",
          "deleted_at": null
      },
      {
          "id": 268,
          "drug_id": 327,
          "word": "Nitroglycerin",
          "notes": "a different nitrate vasodilator",
          "created_at": "2020-05-06T23:55:48.000000Z",
          "updated_at": "2020-05-06T23:55:48.000000Z",
          "deleted_at": null
      },
      {
          "id": 269,
          "drug_id": 328,
          "word": "Ranitidine",
          "notes": "another promotility, H2-blocking gastric acid reducing drug",
          "created_at": "2020-05-06T23:57:05.000000Z",
          "updated_at": "2020-05-06T23:57:05.000000Z",
          "deleted_at": null
      },
      {
          "id": 270,
          "drug_id": 328,
          "word": "Nifedipine",
          "notes": "a calcium-channel blocker",
          "created_at": "2020-05-06T23:57:07.000000Z",
          "updated_at": "2020-05-06T23:57:07.000000Z",
          "deleted_at": null
      },
      {
          "id": 271,
          "drug_id": 330,
          "word": "Ofloxacin",
          "notes": "and other fluoroquinolone antibacterials (\"flox\", \"-oxacin\")",
          "created_at": "2020-05-06T23:58:26.000000Z",
          "updated_at": "2020-05-06T23:58:26.000000Z",
          "deleted_at": null
      },
      {
          "id": 272,
          "drug_id": 332,
          "word": "Octreoscan",
          "notes": "111-indium-pentetreotide diagnostic radiopharmaceutical/tracer",
          "created_at": "2020-05-07T00:00:27.000000Z",
          "updated_at": "2020-05-07T00:00:27.000000Z",
          "deleted_at": null
      },
      {
          "id": 273,
          "drug_id": 332,
          "word": "Sandostatin",
          "notes": "sounds like Sandimmune (cyclosporine oil suspension)",
          "created_at": "2020-05-07T00:00:29.000000Z",
          "updated_at": "2020-05-07T00:00:29.000000Z",
          "deleted_at": null
      },
      {
          "id": 274,
          "drug_id": 333,
          "word": "Levofloxacin",
          "notes": "and other fluoroquinolone antibacterials (\"flox\", \"-oxacin\")",
          "created_at": "2020-05-07T00:01:32.000000Z",
          "updated_at": "2020-05-07T00:01:32.000000Z",
          "deleted_at": null
      },
      {
          "id": 275,
          "drug_id": 334,
          "word": "Sulfasalazine",
          "notes": "an intestinal anti-inflammatory drug",
          "created_at": "2020-05-07T00:02:21.000000Z",
          "updated_at": "2020-05-07T00:02:21.000000Z",
          "deleted_at": null
      },
      {
          "id": 276,
          "drug_id": 335,
          "word": "Pantoprazole",
          "notes": "another proton-pump-inhibiting gastric acid suppressant",
          "created_at": "2020-05-07T00:02:58.000000Z",
          "updated_at": "2020-05-07T00:02:58.000000Z",
          "deleted_at": null
      },
      {
          "id": 277,
          "drug_id": 335,
          "word": "Lansoprazole",
          "notes": "another proton-pump-inhibiting gastric acid suppressant",
          "created_at": "2020-05-07T00:03:01.000000Z",
          "updated_at": "2020-05-07T00:03:01.000000Z",
          "deleted_at": null
      },
      {
          "id": 278,
          "drug_id": 335,
          "word": "Prilosec",
          "notes": "sounds like Trilostane (a medication for treating hyperadrenocorticism) and Pronestyl (procainamide, a cardiac antiarrhythmic)",
          "created_at": "2020-05-07T00:03:03.000000Z",
          "updated_at": "2020-05-07T00:03:03.000000Z",
          "deleted_at": null
      },
      {
          "id": 279,
          "drug_id": 336,
          "word": "Zofran",
          "notes": "sounds like Zoloft (sertraline, a selective serotonin reuptake inhibiting antidepressant)",
          "created_at": "2020-05-07T00:04:51.000000Z",
          "updated_at": "2020-05-07T00:04:51.000000Z",
          "deleted_at": null
      },
      {
          "id": 280,
          "drug_id": 337,
          "word": "Mitotane",
          "notes": "sounds like Mitaban (amitraz, a topical acaricide) and Trilostane (a different adrenocortical suppressant)",
          "created_at": "2020-05-07T00:05:51.000000Z",
          "updated_at": "2020-05-07T00:05:51.000000Z",
          "deleted_at": null
      },
      {
          "id": 281,
          "drug_id": 338,
          "word": "Ofloxacin",
          "notes": "and other fluoroquinolones",
          "created_at": "2020-05-07T00:07:12.000000Z",
          "updated_at": "2020-05-07T00:07:12.000000Z",
          "deleted_at": null
      },
      {
          "id": 282,
          "drug_id": 339,
          "word": "Oseltamivir",
          "notes": "an antiviral",
          "created_at": "2020-05-07T00:08:07.000000Z",
          "updated_at": "2020-05-07T00:08:07.000000Z",
          "deleted_at": null
      },
      {
          "id": 283,
          "drug_id": 340,
          "word": "Osaterone",
          "notes": "an antiandrogen",
          "created_at": "2020-05-07T00:08:44.000000Z",
          "updated_at": "2020-05-07T00:08:44.000000Z",
          "deleted_at": null
      },
      {
          "id": 284,
          "drug_id": 341,
          "word": "Diazepam",
          "notes": "another benzodiazepine tranquilizer",
          "created_at": "2020-05-07T00:09:20.000000Z",
          "updated_at": "2020-05-07T00:09:20.000000Z",
          "deleted_at": null
      },
      {
          "id": 285,
          "drug_id": 342,
          "word": "Hydromorphone",
          "notes": "another opiate analgesic",
          "created_at": "2020-05-07T00:09:50.000000Z",
          "updated_at": "2020-05-07T00:09:50.000000Z",
          "deleted_at": null
      },
      {
          "id": 286,
          "drug_id": 343,
          "word": "Oxytocin",
          "notes": "a uterotonic hormone",
          "created_at": "2020-05-07T00:11:42.000000Z",
          "updated_at": "2020-05-07T00:11:42.000000Z",
          "deleted_at": null
      },
      {
          "id": 287,
          "drug_id": 343,
          "word": "Tetracycline",
          "notes": "an antibacterial of similar class but different potency and route of administration (PO)",
          "created_at": "2020-05-07T00:11:44.000000Z",
          "updated_at": "2020-05-07T00:11:44.000000Z",
          "deleted_at": null
      },
      {
          "id": 288,
          "drug_id": 343,
          "word": "Terramycin",
          "notes": "sounds like Tobramycin (an aminoglycoside antibacterial)",
          "created_at": "2020-05-07T00:11:47.000000Z",
          "updated_at": "2020-05-07T00:11:47.000000Z",
          "deleted_at": null
      },
      {
          "id": 289,
          "drug_id": 344,
          "word": "Oxytetracycline",
          "notes": "a tetracycline-class antibacterial",
          "created_at": "2020-05-07T00:12:56.000000Z",
          "updated_at": "2020-05-07T00:12:56.000000Z",
          "deleted_at": null
      },
      {
          "id": 290,
          "drug_id": 348,
          "word": "Omeprazole",
          "notes": "another proton-pump-inhibiting gastric acid suppressant",
          "created_at": "2020-05-07T00:17:23.000000Z",
          "updated_at": "2020-05-07T00:17:23.000000Z",
          "deleted_at": null
      },
      {
          "id": 291,
          "drug_id": 348,
          "word": "Lansoprazole",
          "notes": "another proton-pump-inhibiting gastric acid suppressant",
          "created_at": "2020-05-07T00:17:26.000000Z",
          "updated_at": "2020-05-07T00:17:26.000000Z",
          "deleted_at": null
      },
      {
          "id": 292,
          "drug_id": 349,
          "word": "Terramycin",
          "notes": "oxytetracycline, a tetracycline-class antibacterial",
          "created_at": "2020-05-07T00:18:05.000000Z",
          "updated_at": "2020-05-07T00:18:05.000000Z",
          "deleted_at": null
      },
      {
          "id": 293,
          "drug_id": 349,
          "word": "Gentamicin",
          "notes": "and other aminoglycosides",
          "created_at": "2020-05-07T00:18:07.000000Z",
          "updated_at": "2020-05-07T00:18:07.000000Z",
          "deleted_at": null
      },
      {
          "id": 294,
          "drug_id": 349,
          "word": "Azithromycin",
          "notes": "and other macrolides",
          "created_at": "2020-05-07T00:18:10.000000Z",
          "updated_at": "2020-05-07T00:18:10.000000Z",
          "deleted_at": null
      },
      {
          "id": 295,
          "drug_id": 349,
          "word": "Clindamycin",
          "notes": "and other lincosamides",
          "created_at": "2020-05-07T00:18:12.000000Z",
          "updated_at": "2020-05-07T00:18:12.000000Z",
          "deleted_at": null
      },
      {
          "id": 296,
          "drug_id": 349,
          "word": "Humatin",
          "notes": "sounds like Humulin (insulin)",
          "created_at": "2020-05-07T00:18:14.000000Z",
          "updated_at": "2020-05-07T00:18:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 297,
          "drug_id": 350,
          "word": "Fluoxetine",
          "notes": "another behavioral modifying-SSRI",
          "created_at": "2020-05-07T00:19:16.000000Z",
          "updated_at": "2020-05-07T00:19:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 298,
          "drug_id": 351,
          "word": "Penicillin",
          "notes": "antibacterial",
          "created_at": "2020-05-07T00:19:57.000000Z",
          "updated_at": "2020-05-07T00:19:57.000000Z",
          "deleted_at": null
      },
      {
          "id": 299,
          "drug_id": 352,
          "word": "Penicillin G procaine",
          "notes": "CAUTION: Penicillin G sodium (or potassium) is a *transparent* solution for IV injection, whereas penicillin G procaine and penicillin G benzathine are opaque white solutions of sustained-release penicillin that are designed for IM or SC injection only;inadvertent injection of procaine or benzathine penicillin IV has been fatal",
          "created_at": "2020-05-07T00:20:58.000000Z",
          "updated_at": "2020-05-07T00:20:58.000000Z",
          "deleted_at": null
      },
      {
          "id": 300,
          "drug_id": 352,
          "word": "Penicillin G benzathine",
          "notes": "CAUTION: Penicillin G sodium (or potassium) is a *transparent* solution for IV injection, whereas penicillin G procaine and penicillin G benzathine are opaque white solutions of sustained-release penicillin that are designed for IM or SC injection only;inadvertent injection of procaine or benzathine penicillin IV has been fatal",
          "created_at": "2020-05-07T00:21:01.000000Z",
          "updated_at": "2020-05-07T00:21:01.000000Z",
          "deleted_at": null
      },
      {
          "id": 301,
          "drug_id": 352,
          "word": "Penicillamine",
          "notes": "a chelating agent",
          "created_at": "2020-05-07T00:21:03.000000Z",
          "updated_at": "2020-05-07T00:21:03.000000Z",
          "deleted_at": null
      },
      {
          "id": 302,
          "drug_id": 353,
          "word": "Penicillamine",
          "notes": "a chelating agent",
          "created_at": "2020-05-07T00:22:42.000000Z",
          "updated_at": "2020-05-07T00:22:42.000000Z",
          "deleted_at": null
      },
      {
          "id": 303,
          "drug_id": 353,
          "word": "Penicillin G (Na or K)",
          "notes": "different formulations of injectable penicillin",
          "created_at": "2020-05-07T00:22:44.000000Z",
          "updated_at": "2020-05-07T00:22:44.000000Z",
          "deleted_at": null
      },
      {
          "id": 304,
          "drug_id": 354,
          "word": "Phenobarbital",
          "notes": "another barbiturate",
          "created_at": "2020-05-07T00:24:27.000000Z",
          "updated_at": "2020-05-07T00:24:27.000000Z",
          "deleted_at": null
      },
      {
          "id": 305,
          "drug_id": 355,
          "word": "Pentostam",
          "notes": "sodium stilbogluconate, an antimony-based compound for treating leishmaniasis",
          "created_at": "2020-05-07T00:26:37.000000Z",
          "updated_at": "2020-05-07T00:26:37.000000Z",
          "deleted_at": null
      },
      {
          "id": 306,
          "drug_id": 355,
          "word": "Elmeron",
          "notes": "sounds like Remeron (mirtazapine, an appetite stimulant)",
          "created_at": "2020-05-07T00:26:39.000000Z",
          "updated_at": "2020-05-07T00:26:39.000000Z",
          "deleted_at": null
      },
      {
          "id": 307,
          "drug_id": 355,
          "word": "Cartrophen",
          "notes": "(Canada, UK) sounds like Carprofen, a nonsteroidal anti-inflammatory",
          "created_at": "2020-05-07T00:26:42.000000Z",
          "updated_at": "2020-05-07T00:26:42.000000Z",
          "deleted_at": null
      },
      {
          "id": 308,
          "drug_id": 356,
          "word": "Trental",
          "notes": "sounds like Trentinoin, Etretinate (retinoids used in dermatology and potent fetotoxins), and Drontal (praziquantel, an antiparasitic)",
          "created_at": "2020-05-07T00:27:14.000000Z",
          "updated_at": "2020-05-07T00:27:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 309,
          "drug_id": 357,
          "word": "Pentobarbital",
          "notes": "another barbiturate",
          "created_at": "2020-05-07T00:28:12.000000Z",
          "updated_at": "2020-05-07T00:28:12.000000Z",
          "deleted_at": null
      },
      {
          "id": 310,
          "drug_id": 358,
          "word": "Phenylbutazone",
          "notes": "a nonsteroidal anti-inflammatory",
          "created_at": "2020-05-07T00:30:38.000000Z",
          "updated_at": "2020-05-07T00:30:38.000000Z",
          "deleted_at": null
      },
      {
          "id": 311,
          "drug_id": 358,
          "word": "Phenylpropanolamine",
          "notes": "an alpha-1 adrenergic agonist, i.e., diametrically opposite mechanism to phenoxybenzamine",
          "created_at": "2020-05-07T00:30:40.000000Z",
          "updated_at": "2020-05-07T00:30:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 312,
          "drug_id": 359,
          "word": "\"Bute\"",
          "notes": "may be misinterpreted as butorphanol",
          "created_at": "2020-05-07T00:31:58.000000Z",
          "updated_at": "2020-05-07T00:31:58.000000Z",
          "deleted_at": null
      },
      {
          "id": 313,
          "drug_id": 360,
          "word": "Ephedrine",
          "notes": "another alpha-adrenergic agonist",
          "created_at": "2020-05-07T00:32:31.000000Z",
          "updated_at": "2020-05-07T00:32:31.000000Z",
          "deleted_at": null
      },
      {
          "id": 314,
          "drug_id": 360,
          "word": "Pseudoephedrine",
          "notes": "another alpha-adrenergic agonist",
          "created_at": "2020-05-07T00:32:34.000000Z",
          "updated_at": "2020-05-07T00:32:34.000000Z",
          "deleted_at": null
      },
      {
          "id": 315,
          "drug_id": 360,
          "word": "Phenylpropanolamine",
          "notes": "another alpha-adrenergic agonist",
          "created_at": "2020-05-07T00:32:36.000000Z",
          "updated_at": "2020-05-07T00:32:36.000000Z",
          "deleted_at": null
      },
      {
          "id": 316,
          "drug_id": 361,
          "word": "Phenylephrine",
          "notes": "another alpha-1 adrenergic agonist)",
          "created_at": "2020-05-07T00:33:25.000000Z",
          "updated_at": "2020-05-07T00:33:25.000000Z",
          "deleted_at": null
      },
      {
          "id": 317,
          "drug_id": 364,
          "word": "Pipracil",
          "notes": "sounds like Piperazine (an anthelmintic)",
          "created_at": "2020-05-07T00:37:25.000000Z",
          "updated_at": "2020-05-07T00:37:25.000000Z",
          "deleted_at": null
      },
      {
          "id": 318,
          "drug_id": 366,
          "word": "Piperacillin",
          "notes": "an antibacterial",
          "created_at": "2020-05-07T00:38:38.000000Z",
          "updated_at": "2020-05-07T00:38:38.000000Z",
          "deleted_at": null
      },
      {
          "id": 319,
          "drug_id": 367,
          "word": "Meloxicam",
          "notes": "another COX-2-inhibiting nonsteroidal anti-inflammatory drug",
          "created_at": "2020-05-07T00:40:47.000000Z",
          "updated_at": "2020-05-07T00:40:47.000000Z",
          "deleted_at": null
      },
      {
          "id": 320,
          "drug_id": 367,
          "word": "Pyrantel",
          "notes": "an anthelmintic",
          "created_at": "2020-05-07T00:40:49.000000Z",
          "updated_at": "2020-05-07T00:40:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 321,
          "drug_id": 367,
          "word": "Feldene",
          "notes": "sounds like Febantel (an anthelmintic) and Felbamate (an anticonvulsant)",
          "created_at": "2020-05-07T00:40:51.000000Z",
          "updated_at": "2020-05-07T00:40:51.000000Z",
          "deleted_at": null
      },
      {
          "id": 322,
          "drug_id": 368,
          "word": "Potassium citrate",
          "notes": "other potassium salts",
          "created_at": "2020-05-07T00:44:04.000000Z",
          "updated_at": "2020-05-07T00:44:04.000000Z",
          "deleted_at": null
      },
      {
          "id": 323,
          "drug_id": 368,
          "word": "Potassium gluconate",
          "notes": "other potassium salts",
          "created_at": "2020-05-07T00:44:07.000000Z",
          "updated_at": "2020-05-07T00:44:07.000000Z",
          "deleted_at": null
      },
      {
          "id": 324,
          "drug_id": 369,
          "word": "Calcium citrate",
          "notes": "other potassium salts",
          "created_at": "2020-05-07T00:45:06.000000Z",
          "updated_at": "2020-05-07T00:45:06.000000Z",
          "deleted_at": null
      },
      {
          "id": 325,
          "drug_id": 370,
          "word": "Potassium citrate",
          "notes": "other potassium salts",
          "created_at": "2020-05-07T00:46:19.000000Z",
          "updated_at": "2020-05-07T00:46:19.000000Z",
          "deleted_at": null
      },
      {
          "id": 326,
          "drug_id": 370,
          "word": "Glucose",
          "notes": "dextrose",
          "created_at": "2020-05-07T00:46:21.000000Z",
          "updated_at": "2020-05-07T00:46:21.000000Z",
          "deleted_at": null
      },
      {
          "id": 327,
          "drug_id": 371,
          "word": "Potassium chloride",
          "notes": "other potassium salts",
          "created_at": "2020-05-07T00:47:06.000000Z",
          "updated_at": "2020-05-07T00:47:06.000000Z",
          "deleted_at": null
      },
      {
          "id": 328,
          "drug_id": 372,
          "word": "Ofloxacin",
          "notes": "and other fluoroquinolone antibacterials (\"flox\"/\"-oxacin\" drugs)",
          "created_at": "2020-05-07T00:48:04.000000Z",
          "updated_at": "2020-05-07T00:48:04.000000Z",
          "deleted_at": null
      },
      {
          "id": 329,
          "drug_id": 373,
          "word": "Praziquantel",
          "notes": "an anthelmintic",
          "created_at": "2020-05-07T00:48:57.000000Z",
          "updated_at": "2020-05-07T00:48:57.000000Z",
          "deleted_at": null
      },
      {
          "id": 330,
          "drug_id": 373,
          "word": "Physostigmine",
          "notes": "acetylcholinesterase inhibitor used in the treatment of myasthenia gravis",
          "created_at": "2020-05-07T00:48:59.000000Z",
          "updated_at": "2020-05-07T00:48:59.000000Z",
          "deleted_at": null
      },
      {
          "id": 331,
          "drug_id": 374,
          "word": "Drontal",
          "notes": "sounds like Trental (pentoxifylline, a drug for improving hyperviscosity)",
          "created_at": "2020-05-07T00:50:02.000000Z",
          "updated_at": "2020-05-07T00:50:02.000000Z",
          "deleted_at": null
      },
      {
          "id": 332,
          "drug_id": 374,
          "word": "",
          "notes": "Caution: multiple combination products are available containing praziquantel, and their routes of administration vary greatly (some SC, some PO, some topical dermal application)",
          "created_at": "2020-05-07T00:50:05.000000Z",
          "updated_at": "2020-05-07T00:50:05.000000Z",
          "deleted_at": null
      },
      {
          "id": 333,
          "drug_id": 377,
          "word": "Prednisolone",
          "notes": "prednisolone acetate, the most common formulation of injectable prednisolone, is an opaque white suspension of prednisolone for SC or IM injection, is fatal if injected IV",
          "created_at": "2020-05-07T00:57:10.000000Z",
          "updated_at": "2020-05-07T00:57:10.000000Z",
          "deleted_at": null
      },
      {
          "id": 334,
          "drug_id": 378,
          "word": "Gabapentin",
          "notes": "a related but distinct anticonvulsant",
          "created_at": "2020-05-07T00:58:19.000000Z",
          "updated_at": "2020-05-07T00:58:19.000000Z",
          "deleted_at": null
      },
      {
          "id": 335,
          "drug_id": 379,
          "word": "Procaine",
          "notes": "an obsolete local anesthetic",
          "created_at": "2020-05-07T00:59:14.000000Z",
          "updated_at": "2020-05-07T00:59:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 336,
          "drug_id": 379,
          "word": "Procaine penicillin G",
          "notes": "an antibacterial for IM/SC injection",
          "created_at": "2020-05-07T00:59:17.000000Z",
          "updated_at": "2020-05-07T00:59:17.000000Z",
          "deleted_at": null
      },
      {
          "id": 337,
          "drug_id": 380,
          "word": "Prochlorperazine",
          "notes": "a phenothiazine tranquilizer and antiemetic",
          "created_at": "2020-05-07T01:00:40.000000Z",
          "updated_at": "2020-05-07T01:00:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 338,
          "drug_id": 381,
          "word": "Procarbazine",
          "notes": "an antineoplastic chemotherapeutic",
          "created_at": "2020-05-07T01:01:41.000000Z",
          "updated_at": "2020-05-07T01:01:41.000000Z",
          "deleted_at": null
      },
      {
          "id": 339,
          "drug_id": 381,
          "word": "Darbazine",
          "notes": "sounds like Dacarbazine (an antineoplastic chemotherapeutic)",
          "created_at": "2020-05-07T01:01:44.000000Z",
          "updated_at": "2020-05-07T01:01:44.000000Z",
          "deleted_at": null
      },
      {
          "id": 340,
          "drug_id": 385,
          "word": "Phenylephrine",
          "notes": "a vasopressor/arterial vasoconstrictor",
          "created_at": "2020-05-07T01:07:53.000000Z",
          "updated_at": "2020-05-07T01:07:53.000000Z",
          "deleted_at": null
      },
      {
          "id": 341,
          "drug_id": 385,
          "word": "phenylpropanolamine",
          "notes": "another alpha-adrenergic agonist",
          "created_at": "2020-05-07T01:07:56.000000Z",
          "updated_at": "2020-05-07T01:07:56.000000Z",
          "deleted_at": null
      },
      {
          "id": 342,
          "drug_id": 387,
          "word": "Febantel",
          "notes": "another antiparasitic",
          "created_at": "2020-05-07T01:09:52.000000Z",
          "updated_at": "2020-05-07T01:09:52.000000Z",
          "deleted_at": null
      },
      {
          "id": 343,
          "drug_id": 388,
          "word": "Pyrimethamine",
          "notes": "an antiprotozoal",
          "created_at": "2020-05-07T01:12:12.000000Z",
          "updated_at": "2020-05-07T01:12:12.000000Z",
          "deleted_at": null
      },
      {
          "id": 344,
          "drug_id": 388,
          "word": "Pyrantel",
          "notes": "an antiparasitic",
          "created_at": "2020-05-07T01:12:14.000000Z",
          "updated_at": "2020-05-07T01:12:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 345,
          "drug_id": 389,
          "word": "Pyridostigmine",
          "notes": "a cholinesterase inhibitor for treating myasthenia gravis",
          "created_at": "2020-05-07T01:13:03.000000Z",
          "updated_at": "2020-05-07T01:13:03.000000Z",
          "deleted_at": null
      },
      {
          "id": 346,
          "drug_id": 389,
          "word": "Daraprim",
          "notes": "sounds like Daranide (dichlorphenamide, an antiglaucoma drug)",
          "created_at": "2020-05-07T01:13:05.000000Z",
          "updated_at": "2020-05-07T01:13:05.000000Z",
          "deleted_at": null
      },
      {
          "id": 347,
          "drug_id": 390,
          "word": "Quinacrine",
          "notes": "an antiprotozoal",
          "created_at": "2020-05-07T01:14:13.000000Z",
          "updated_at": "2020-05-07T01:14:13.000000Z",
          "deleted_at": null
      },
      {
          "id": 348,
          "drug_id": 391,
          "word": "Anipryl",
          "notes": "selegiline/deprenyl, a monoamine oxidase inhibitor for treating cognitive dysfunction",
          "created_at": "2020-05-07T01:15:24.000000Z",
          "updated_at": "2020-05-07T01:15:24.000000Z",
          "deleted_at": null
      },
      {
          "id": 349,
          "drug_id": 391,
          "word": "Enalapril",
          "notes": "and other ACE inhibitors (\"-pril\")",
          "created_at": "2020-05-07T01:15:26.000000Z",
          "updated_at": "2020-05-07T01:15:26.000000Z",
          "deleted_at": null
      },
      {
          "id": 350,
          "drug_id": 392,
          "word": "Zantac",
          "notes": "sounds like Zyrtec (cetirizine, an antihistamine for treating allergy disorders)",
          "created_at": "2020-05-07T01:16:37.000000Z",
          "updated_at": "2020-05-07T01:16:37.000000Z",
          "deleted_at": null
      },
      {
          "id": 351,
          "drug_id": 394,
          "word": "Deracoxib",
          "notes": "and other COX-2-inhibiting nonsteroidal inflammatories of the coxib class (e.g., firocoxib)",
          "created_at": "2020-05-07T01:18:55.000000Z",
          "updated_at": "2020-05-07T01:18:55.000000Z",
          "deleted_at": null
      },
      {
          "id": 352,
          "drug_id": 397,
          "word": "Salbutamol",
          "notes": "synonym for albuterol, another bronchodilator",
          "created_at": "2020-05-07T01:21:24.000000Z",
          "updated_at": "2020-05-07T01:21:24.000000Z",
          "deleted_at": null
      },
      {
          "id": 353,
          "drug_id": 399,
          "word": "Anipryl",
          "notes": "sounds like Enalapril, Benazepril, and other ACE inhibitors",
          "created_at": "2020-05-07T01:24:37.000000Z",
          "updated_at": "2020-05-07T01:24:37.000000Z",
          "deleted_at": null
      },
      {
          "id": 354,
          "drug_id": 401,
          "word": "Silibinin",
          "notes": "various pharmacologically active derivatives of milk thistle have similar names (but different biological activities and therefore different dosages): silymarin and silibinin are the most common",
          "created_at": "2020-05-07T01:27:10.000000Z",
          "updated_at": "2020-05-07T01:27:10.000000Z",
          "deleted_at": null
      },
      {
          "id": 355,
          "drug_id": 406,
          "word": "Atenolol",
          "notes": "other beta-adrenergic blockers (suffix \"-olol\")",
          "created_at": "2020-05-07T01:33:34.000000Z",
          "updated_at": "2020-05-07T01:33:34.000000Z",
          "deleted_at": null
      },
      {
          "id": 356,
          "drug_id": 407,
          "word": "Calcium gluconate",
          "notes": "and other gluconate preparations (all unrelated to this drug)",
          "created_at": "2020-05-07T01:34:04.000000Z",
          "updated_at": "2020-05-07T01:34:04.000000Z",
          "deleted_at": null
      },
      {
          "id": 357,
          "drug_id": 407,
          "word": "Zinc gluconate",
          "notes": "and other gluconate preparations (all unrelated to this drug)",
          "created_at": "2020-05-07T01:34:06.000000Z",
          "updated_at": "2020-05-07T01:34:06.000000Z",
          "deleted_at": null
      },
      {
          "id": 358,
          "drug_id": 408,
          "word": "Streptomycin",
          "notes": "an antibacterial",
          "created_at": "2020-05-07T01:34:33.000000Z",
          "updated_at": "2020-05-07T01:34:33.000000Z",
          "deleted_at": null
      },
      {
          "id": 359,
          "drug_id": 408,
          "word": "Streptozotocin",
          "notes": "an antineoplastic",
          "created_at": "2020-05-07T01:34:36.000000Z",
          "updated_at": "2020-05-07T01:34:36.000000Z",
          "deleted_at": null
      },
      {
          "id": 360,
          "drug_id": 409,
          "word": "Streptomycin",
          "notes": "an antibacterial",
          "created_at": "2020-05-07T01:35:20.000000Z",
          "updated_at": "2020-05-07T01:35:20.000000Z",
          "deleted_at": null
      },
      {
          "id": 361,
          "drug_id": 409,
          "word": "Streptokinase",
          "notes": "a thrombolytic",
          "created_at": "2020-05-07T01:35:22.000000Z",
          "updated_at": "2020-05-07T01:35:22.000000Z",
          "deleted_at": null
      },
      {
          "id": 362,
          "drug_id": 412,
          "word": "Sulfadimethoxine",
          "notes": "(a coccidiostat) and all other sulfonamides",
          "created_at": "2020-05-07T01:38:38.000000Z",
          "updated_at": "2020-05-07T01:38:38.000000Z",
          "deleted_at": null
      },
      {
          "id": 363,
          "drug_id": 413,
          "word": "Sulfadimethoxine/ormetoprim",
          "notes": "(an antibacterial) and other sulfonamides",
          "created_at": "2020-05-07T01:41:11.000000Z",
          "updated_at": "2020-05-07T01:41:11.000000Z",
          "deleted_at": null
      },
      {
          "id": 364,
          "drug_id": 414,
          "word": "Sulfadimethoxine",
          "notes": "(a coccidiostat) and other sulfonamides",
          "created_at": "2020-05-07T01:41:55.000000Z",
          "updated_at": "2020-05-07T01:41:55.000000Z",
          "deleted_at": null
      },
      {
          "id": 365,
          "drug_id": 415,
          "word": "Sulfadimethoxine/trimethoprim",
          "notes": "(another virtually-identical antibacterial that is the veterinary equivalent to this drug) and other sulfonamides",
          "created_at": "2020-05-07T01:42:52.000000Z",
          "updated_at": "2020-05-07T01:42:52.000000Z",
          "deleted_at": null
      },
      {
          "id": 366,
          "drug_id": 417,
          "word": "Sildenafil",
          "notes": "another phosphodiesterase-inhibiting vasodilator",
          "created_at": "2020-05-07T01:46:16.000000Z",
          "updated_at": "2020-05-07T01:46:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 367,
          "drug_id": 420,
          "word": "Terbutaline",
          "notes": "a bronchodilator",
          "created_at": "2020-05-07T01:48:45.000000Z",
          "updated_at": "2020-05-07T01:48:45.000000Z",
          "deleted_at": null
      },
      {
          "id": 368,
          "drug_id": 421,
          "word": "Terbinafine",
          "notes": "an antifungal",
          "created_at": "2020-05-07T01:50:26.000000Z",
          "updated_at": "2020-05-07T01:50:26.000000Z",
          "deleted_at": null
      },
      {
          "id": 369,
          "drug_id": 423,
          "word": "Oxytetracycline",
          "notes": "antibacterial of the same class",
          "created_at": "2020-05-07T01:53:44.000000Z",
          "updated_at": "2020-05-07T01:53:44.000000Z",
          "deleted_at": null
      },
      {
          "id": 370,
          "drug_id": 423,
          "word": "Doxycycline",
          "notes": "antibacterial of the same class",
          "created_at": "2020-05-07T01:53:46.000000Z",
          "updated_at": "2020-05-07T01:53:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 371,
          "drug_id": 424,
          "word": "Aminophylline",
          "notes": "a nearly identical methylxanthine bronchodilator",
          "created_at": "2020-05-07T01:55:14.000000Z",
          "updated_at": "2020-05-07T01:55:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 372,
          "drug_id": 424,
          "word": "Theobromine",
          "notes": "a stimulant",
          "created_at": "2020-05-07T01:55:16.000000Z",
          "updated_at": "2020-05-07T01:55:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 373,
          "drug_id": 425,
          "word": "Fenbendazole",
          "notes": "other anthelmintics (e.g., albendazole)",
          "created_at": "2020-05-07T01:57:30.000000Z",
          "updated_at": "2020-05-07T01:57:30.000000Z",
          "deleted_at": null
      },
      {
          "id": 374,
          "drug_id": 425,
          "word": "Fluconazole",
          "notes": "other azole antifungals (e.g., itraconazole, voriconazole)",
          "created_at": "2020-05-07T01:57:32.000000Z",
          "updated_at": "2020-05-07T01:57:32.000000Z",
          "deleted_at": null
      },
      {
          "id": 375,
          "drug_id": 428,
          "word": "Thyrotropin-releasing hormone",
          "notes": "TRH; the stimulus for TSH secretion",
          "created_at": "2020-05-07T02:00:49.000000Z",
          "updated_at": "2020-05-07T02:00:49.000000Z",
          "deleted_at": null
      },
      {
          "id": 376,
          "drug_id": 429,
          "word": "Ticarcillin-clavulanate",
          "notes": "a similar, but potentiated, antibacterial",
          "created_at": "2020-05-07T02:01:47.000000Z",
          "updated_at": "2020-05-07T02:01:47.000000Z",
          "deleted_at": null
      },
      {
          "id": 377,
          "drug_id": 430,
          "word": "Ticarcillin",
          "notes": "a similar, but non-potentiated, antibacterial",
          "created_at": "2020-05-07T02:02:42.000000Z",
          "updated_at": "2020-05-07T02:02:42.000000Z",
          "deleted_at": null
      },
      {
          "id": 378,
          "drug_id": 431,
          "word": "Tiletamine",
          "notes": "sounds like Ketamine",
          "created_at": "2020-05-07T02:03:17.000000Z",
          "updated_at": "2020-05-07T02:03:17.000000Z",
          "deleted_at": null
      },
      {
          "id": 379,
          "drug_id": 431,
          "word": "Zolazepam",
          "notes": "sounds like Diazepam",
          "created_at": "2020-05-07T02:03:19.000000Z",
          "updated_at": "2020-05-07T02:03:19.000000Z",
          "deleted_at": null
      },
      {
          "id": 380,
          "drug_id": 431,
          "word": "Telazol",
          "notes": "sounds like Mintazol (thiabendazole, an anthelmintic) and azole antifungals (e.g., itraconazole, voriconazole)",
          "created_at": "2020-05-07T02:03:22.000000Z",
          "updated_at": "2020-05-07T02:03:22.000000Z",
          "deleted_at": null
      },
      {
          "id": 381,
          "drug_id": 436,
          "word": "Tranxenamic acid",
          "notes": "a procoagulant",
          "created_at": "2020-05-07T02:08:14.000000Z",
          "updated_at": "2020-05-07T02:08:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 382,
          "drug_id": 439,
          "word": "Toradol",
          "notes": "ketorolac, a nonsteroidal anti-inflammatory",
          "created_at": "2020-05-07T02:11:22.000000Z",
          "updated_at": "2020-05-07T02:11:22.000000Z",
          "deleted_at": null
      },
      {
          "id": 383,
          "drug_id": 439,
          "word": "Trazodone",
          "notes": "a selective serotonin reuptake inhibitor useful for post-op antianxiety effects",
          "created_at": "2020-05-07T02:11:25.000000Z",
          "updated_at": "2020-05-07T02:11:25.000000Z",
          "deleted_at": null
      },
      {
          "id": 384,
          "drug_id": 440,
          "word": "Tolfenamic acid",
          "notes": "a nonsteroidal anti-inflammatory",
          "created_at": "2020-05-07T02:14:31.000000Z",
          "updated_at": "2020-05-07T02:14:31.000000Z",
          "deleted_at": null
      },
      {
          "id": 385,
          "drug_id": 442,
          "word": "Mitotane",
          "notes": "o,p'DDD, a different adrenocorticolytic",
          "created_at": "2020-05-07T02:16:34.000000Z",
          "updated_at": "2020-05-07T02:16:34.000000Z",
          "deleted_at": null
      },
      {
          "id": 386,
          "drug_id": 445,
          "word": "Acyclovir",
          "notes": "a different antiviral",
          "created_at": "2020-05-07T02:21:37.000000Z",
          "updated_at": "2020-05-07T02:21:37.000000Z",
          "deleted_at": null
      },
      {
          "id": 387,
          "drug_id": 449,
          "word": "Vincristine",
          "notes": "another vinca alkaloid antineoplastic",
          "created_at": "2020-05-07T02:25:54.000000Z",
          "updated_at": "2020-05-07T02:25:54.000000Z",
          "deleted_at": null
      },
      {
          "id": 388,
          "drug_id": 450,
          "word": "Vinblastine",
          "notes": "another vinca alkaloid antineoplastic",
          "created_at": "2020-05-07T02:27:08.000000Z",
          "updated_at": "2020-05-07T02:27:08.000000Z",
          "deleted_at": null
      },
      {
          "id": 389,
          "drug_id": 453,
          "word": "Fluconazole",
          "notes": "other azole antifungals (e.g., itraconazole, voriconazole)",
          "created_at": "2020-05-07T02:32:25.000000Z",
          "updated_at": "2020-05-07T02:32:25.000000Z",
          "deleted_at": null
      },
      {
          "id": 390,
          "drug_id": 453,
          "word": "Albendazole",
          "notes": "and other anthelmintics",
          "created_at": "2020-05-07T02:32:27.000000Z",
          "updated_at": "2020-05-07T02:32:27.000000Z",
          "deleted_at": null
      },
      {
          "id": 391,
          "drug_id": 459,
          "word": "Zinc methionine",
          "notes": "and other zinc preparations",
          "created_at": "2020-05-07T02:38:36.000000Z",
          "updated_at": "2020-05-07T02:38:36.000000Z",
          "deleted_at": null
      },
      {
          "id": 392,
          "drug_id": 460,
          "word": "Zinc sulfate",
          "notes": "and other zinc preparations",
          "created_at": "2020-05-07T02:39:16.000000Z",
          "updated_at": "2020-05-07T02:39:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 393,
          "drug_id": 461,
          "word": "Zinc gluconate",
          "notes": "and other zinc preparations",
          "created_at": "2020-05-07T02:40:02.000000Z",
          "updated_at": "2020-05-07T02:40:02.000000Z",
          "deleted_at": null
      },
      {
          "id": 394,
          "drug_id": 463,
          "word": "Paclitaxel (Taxol)",
          "notes": "a different antineoplastic",
          "created_at": "2020-05-07T02:41:09.000000Z",
          "updated_at": "2020-05-07T02:41:09.000000Z",
          "deleted_at": null
      },
      {
          "id": 395,
          "drug_id": 465,
          "word": "Praziquantel",
          "notes": "another antiparasitic cestodicide",
          "created_at": "2020-05-07T02:42:17.000000Z",
          "updated_at": "2020-05-07T02:42:17.000000Z",
          "deleted_at": null
      },
      {
          "id": 396,
          "drug_id": 469,
          "word": "Hyoscine",
          "notes": "scopolamine, a different anticholinergic/antimuscarinic",
          "created_at": "2020-05-07T02:46:56.000000Z",
          "updated_at": "2020-05-07T02:46:56.000000Z",
          "deleted_at": null
      },
      {
          "id": 397,
          "drug_id": 470,
          "word": "Ipodate",
          "notes": "a related iodinated antithyroid compound",
          "created_at": "2020-05-07T02:47:54.000000Z",
          "updated_at": "2020-05-07T02:47:54.000000Z",
          "deleted_at": null
      },
      {
          "id": 398,
          "drug_id": 471,
          "word": "Iopanoic acid",
          "notes": "a related iodinated antithyroid compound",
          "created_at": "2020-05-07T02:48:29.000000Z",
          "updated_at": "2020-05-07T02:48:29.000000Z",
          "deleted_at": null
      },
      {
          "id": 399,
          "drug_id": 472,
          "word": "Metronidazole",
          "notes": "a related imidazole antimicrobial",
          "created_at": "2020-05-07T02:49:20.000000Z",
          "updated_at": "2020-05-07T02:49:20.000000Z",
          "deleted_at": null
      },
      {
          "id": 400,
          "drug_id": 474,
          "word": "Omeprazole, esomeprazole, pantoprazole",
          "notes": "and other \"-prazole\" proton pump inhibitors",
          "created_at": "2020-05-07T02:50:54.000000Z",
          "updated_at": "2020-05-07T02:50:54.000000Z",
          "deleted_at": null
      },
      {
          "id": 401,
          "drug_id": 480,
          "word": "Cisapride",
          "notes": "a similar prokinetic drug",
          "created_at": "2020-05-07T02:58:36.000000Z",
          "updated_at": "2020-05-07T02:58:36.000000Z",
          "deleted_at": null
      },
      {
          "id": 402,
          "drug_id": 481,
          "word": "Naloxone",
          "notes": "an injectable opioid antagonist used for acute reversal of opioid overdose",
          "created_at": "2020-05-07T02:59:31.000000Z",
          "updated_at": "2020-05-07T02:59:31.000000Z",
          "deleted_at": null
      },
      {
          "id": 403,
          "drug_id": 493,
          "word": "Desmopressin",
          "notes": "an antidiuretic hormone (vasopressin) analog",
          "created_at": "2020-05-07T03:10:32.000000Z",
          "updated_at": "2020-05-07T03:10:32.000000Z",
          "deleted_at": null
      },
      {
          "id": 404,
          "drug_id": 494,
          "word": "Omeprazole",
          "notes": "the parent (non-racemic-mixture) compound",
          "created_at": "2020-05-07T03:12:59.000000Z",
          "updated_at": "2020-05-07T03:12:59.000000Z",
          "deleted_at": null
      },
      {
          "id": 405,
          "drug_id": 500,
          "word": "Neoral",
          "notes": "cyclosporine, an immunosuppressant",
          "created_at": "2020-05-07T03:21:18.000000Z",
          "updated_at": "2020-05-07T03:21:18.000000Z",
          "deleted_at": null
      },
      {
          "id": 406,
          "drug_id": 500,
          "word": "Gentamicin, tobramycin",
          "notes": "and all other \"-mycin\" animoglycosides",
          "created_at": "2020-05-07T03:21:20.000000Z",
          "updated_at": "2020-05-07T03:21:20.000000Z",
          "deleted_at": null
      },
      {
          "id": 407,
          "drug_id": 505,
          "word": "Adenocard",
          "notes": "Tonocard (tocainaide, a different cardiac antiarrhythmic)",
          "created_at": "2020-10-30T19:57:13.000000Z",
          "updated_at": "2020-10-30T19:57:13.000000Z",
          "deleted_at": null
      },
      {
          "id": 408,
          "drug_id": 506,
          "word": "Nexium (esomeprazole, a gastric acid suppressant drug)",
          "notes": "",
          "created_at": "2020-10-30T20:30:19.000000Z",
          "updated_at": "2020-10-30T20:30:19.000000Z",
          "deleted_at": null
      },
      {
          "id": 409,
          "drug_id": 506,
          "word": "fluralane",
          "notes": "",
          "created_at": "2020-10-30T20:30:19.000000Z",
          "updated_at": "2020-10-30T20:30:19.000000Z",
          "deleted_at": null
      },
      {
          "id": 410,
          "drug_id": 507,
          "word": "Nexium (esomeprazole, a gastric acid suppressant drug)",
          "notes": "",
          "created_at": "2020-10-30T20:33:00.000000Z",
          "updated_at": "2020-10-30T20:33:00.000000Z",
          "deleted_at": null
      },
      {
          "id": 411,
          "drug_id": 507,
          "word": "fluralane",
          "notes": "",
          "created_at": "2020-10-30T20:33:00.000000Z",
          "updated_at": "2020-10-30T20:33:00.000000Z",
          "deleted_at": null
      },
      {
          "id": 412,
          "drug_id": 509,
          "word": "Rivaroxaban (a different factor Xa inhibiting anticoagulant)",
          "notes": "",
          "created_at": "2020-10-31T18:20:29.000000Z",
          "updated_at": "2020-10-31T18:20:29.000000Z",
          "deleted_at": null
      },
      {
          "id": 413,
          "drug_id": 511,
          "word": "Regular formulation and sustained formulation both exist",
          "notes": "canine/feline data only pertinent to regular formulation",
          "created_at": "2020-10-31T18:24:09.000000Z",
          "updated_at": "2020-10-31T18:24:09.000000Z",
          "deleted_at": null
      },
      {
          "id": 415,
          "drug_id": 514,
          "word": "Hypaque",
          "notes": "Omnipaque (iohexol), a nonionic iodinated contrast medium",
          "created_at": "2020-10-31T18:39:36.000000Z",
          "updated_at": "2020-10-31T18:39:36.000000Z",
          "deleted_at": null
      },
      {
          "id": 416,
          "drug_id": 515,
          "word": "Ponazuril, a similar but distinct antiprotozoal",
          "notes": "",
          "created_at": "2020-10-31T19:12:34.000000Z",
          "updated_at": "2020-10-31T19:12:34.000000Z",
          "deleted_at": null
      },
      {
          "id": 417,
          "drug_id": 516,
          "word": "Fenoldopam",
          "notes": "a renal dopamine antaagonist formerly used for treating anuric renal failure",
          "created_at": "2020-11-03T15:11:33.000000Z",
          "updated_at": "2020-11-03T15:11:33.000000Z",
          "deleted_at": null
      },
      {
          "id": 418,
          "drug_id": 519,
          "word": "Afoxalaner (NexGard)",
          "notes": "a similar but distinct antiparasitic",
          "created_at": "2020-11-03T15:32:28.000000Z",
          "updated_at": "2020-11-03T15:32:28.000000Z",
          "deleted_at": null
      },
      {
          "id": 419,
          "drug_id": 522,
          "word": "Imipenem (a carbapenem antibiotic)",
          "notes": "",
          "created_at": "2020-11-03T16:00:28.000000Z",
          "updated_at": "2020-11-03T16:00:28.000000Z",
          "deleted_at": null
      },
      {
          "id": 420,
          "drug_id": 522,
          "word": "imipramine (a tricyclic antidepressant),",
          "notes": "",
          "created_at": "2020-11-03T16:00:28.000000Z",
          "updated_at": "2020-11-03T16:00:28.000000Z",
          "deleted_at": null
      },
      {
          "id": 421,
          "drug_id": 522,
          "word": "phenytoin (an older/obsolete anticonvulsant)",
          "notes": "",
          "created_at": "2020-11-03T16:00:28.000000Z",
          "updated_at": "2020-11-03T16:00:28.000000Z",
          "deleted_at": null
      },
      {
          "id": 422,
          "drug_id": 523,
          "word": "Iopamidol",
          "notes": "a similar but distinct iodinated contrast medium",
          "created_at": "2020-11-03T16:03:40.000000Z",
          "updated_at": "2020-11-03T16:03:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 423,
          "drug_id": 524,
          "word": "Cytopoint",
          "notes": "",
          "created_at": "2020-11-03T16:09:23.000000Z",
          "updated_at": "2020-11-03T16:09:23.000000Z",
          "deleted_at": null
      },
      {
          "id": 424,
          "drug_id": 524,
          "word": "Cytosar",
          "notes": "an antineoplastic chemotherapeutic",
          "created_at": "2020-11-03T16:09:24.000000Z",
          "updated_at": "2020-11-03T16:09:24.000000Z",
          "deleted_at": null
      },
      {
          "id": 425,
          "drug_id": 525,
          "word": "Mirtazapine",
          "notes": "an appetite stimulant",
          "created_at": "2020-11-03T16:11:35.000000Z",
          "updated_at": "2020-11-03T16:11:35.000000Z",
          "deleted_at": null
      },
      {
          "id": 426,
          "drug_id": 529,
          "word": "Neostigmine",
          "notes": "a different anticholinesterase",
          "created_at": "2020-11-03T16:36:33.000000Z",
          "updated_at": "2020-11-03T16:36:33.000000Z",
          "deleted_at": null
      },
      {
          "id": 427,
          "drug_id": 530,
          "word": "Neostigmine",
          "notes": "a different anticholinesterase",
          "created_at": "2020-11-03T16:37:57.000000Z",
          "updated_at": "2020-11-03T16:37:57.000000Z",
          "deleted_at": null
      },
      {
          "id": 428,
          "drug_id": 531,
          "word": "Propylene glycol",
          "notes": "an antifreeze and bovine therapeutic",
          "created_at": "2020-11-03T17:07:59.000000Z",
          "updated_at": "2020-11-03T17:07:59.000000Z",
          "deleted_at": null
      },
      {
          "id": 429,
          "drug_id": 533,
          "word": "Diclazuril,",
          "notes": "a similar but distinct coccidiostat;",
          "created_at": "2020-11-03T17:10:33.000000Z",
          "updated_at": "2020-11-03T17:10:33.000000Z",
          "deleted_at": null
      },
      {
          "id": 430,
          "drug_id": 533,
          "word": "toltrazuril",
          "notes": "also a similar but distinct coccidiostat",
          "created_at": "2020-11-03T17:10:33.000000Z",
          "updated_at": "2020-11-03T17:10:33.000000Z",
          "deleted_at": null
      },
      {
          "id": 431,
          "drug_id": 534,
          "word": "Noxafil:",
          "notes": "",
          "created_at": "2020-11-03T17:13:57.000000Z",
          "updated_at": "2020-11-03T17:13:57.000000Z",
          "deleted_at": null
      },
      {
          "id": 432,
          "drug_id": 534,
          "word": "Naxcel (ceftiofur, a cephalosporin antibiotic)",
          "notes": "",
          "created_at": "2020-11-03T17:13:57.000000Z",
          "updated_at": "2020-11-03T17:13:57.000000Z",
          "deleted_at": null
      },
      {
          "id": 433,
          "drug_id": 534,
          "word": "naloxone (an opioid antagonist)",
          "notes": "",
          "created_at": "2020-11-03T17:13:57.000000Z",
          "updated_at": "2020-11-03T17:13:57.000000Z",
          "deleted_at": null
      },
      {
          "id": 434,
          "drug_id": 537,
          "word": "rapamycin",
          "notes": "(sirolimus, an immunomodulatory macrolide used topically on stents and other devices to prevent transplant rejection or tissue ingrowth)",
          "created_at": "2020-11-03T17:17:31.000000Z",
          "updated_at": "2020-11-03T17:17:31.000000Z",
          "deleted_at": null
      },
      {
          "id": 435,
          "drug_id": 537,
          "word": "Rifampicin/rifampin",
          "notes": "(an antibiotic with antimycobacterial properties)",
          "created_at": "2020-11-03T17:17:31.000000Z",
          "updated_at": "2020-11-03T17:17:31.000000Z",
          "deleted_at": null
      },
      {
          "id": 436,
          "drug_id": 542,
          "word": "Selegeline",
          "notes": "a medication used for treating canine cognitive dysfunction",
          "created_at": "2020-11-03T17:22:07.000000Z",
          "updated_at": "2020-11-03T17:22:07.000000Z",
          "deleted_at": null
      },
      {
          "id": 437,
          "drug_id": 543,
          "word": "Spiramycin",
          "notes": "a different macrolide antibacterial",
          "created_at": "2020-11-03T19:17:27.000000Z",
          "updated_at": "2020-11-03T19:17:27.000000Z",
          "deleted_at": null
      },
      {
          "id": 438,
          "drug_id": 547,
          "word": "Alteplase",
          "notes": "",
          "created_at": "2020-11-03T19:29:15.000000Z",
          "updated_at": "2020-11-03T19:29:15.000000Z",
          "deleted_at": null
      },
      {
          "id": 439,
          "drug_id": 547,
          "word": "Altace (ramipril, an ACE inhibitor)",
          "notes": "",
          "created_at": "2020-11-03T19:29:15.000000Z",
          "updated_at": "2020-11-03T19:29:15.000000Z",
          "deleted_at": null
      },
      {
          "id": 440,
          "drug_id": 548,
          "word": "Etretinate",
          "notes": "a retinoid used for treating certain skin lesions",
          "created_at": "2020-11-03T19:30:45.000000Z",
          "updated_at": "2020-11-03T19:30:45.000000Z",
          "deleted_at": null
      },
      {
          "id": 441,
          "drug_id": 549,
          "word": "Phenoxybenzamine",
          "notes": "an alpha-receptor antagonist used for treating urethral spasm",
          "created_at": "2020-11-03T19:35:56.000000Z",
          "updated_at": "2020-11-03T19:35:56.000000Z",
          "deleted_at": null
      },
      {
          "id": 442,
          "drug_id": 550,
          "word": "Phenoxybenzamine",
          "notes": "an alpha-receptor antagonist used for treating urethral spasm",
          "created_at": "2020-11-03T19:36:40.000000Z",
          "updated_at": "2020-11-03T19:36:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 443,
          "drug_id": 551,
          "word": "Trimethobenzamide",
          "notes": "an antiemetic",
          "created_at": "2020-11-03T20:25:40.000000Z",
          "updated_at": "2020-11-03T20:25:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 444,
          "drug_id": 552,
          "word": "Cholecalciferol",
          "notes": "a different vitamin D analog (vitamin D3) that is generally of toxicological, not pharmacological, importance (rodenticides)",
          "created_at": "2020-11-03T20:48:34.000000Z",
          "updated_at": "2020-11-03T20:48:34.000000Z",
          "deleted_at": null
      },
      {
          "id": 445,
          "drug_id": 3,
          "word": "Apresoline",
          "notes": "hydralazine, a vasodilator",
          "created_at": "2020-11-04T01:57:44.000000Z",
          "updated_at": "2020-11-04T01:57:44.000000Z",
          "deleted_at": null
      },
      {
          "id": 446,
          "drug_id": 4,
          "word": "Aspirin-free",
          "notes": "sounds like Aspirin (nonsteroidal anti-inflammatory)",
          "created_at": "2020-11-04T01:58:40.000000Z",
          "updated_at": "2020-11-04T01:58:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 447,
          "drug_id": 4,
          "word": "Panadol",
          "notes": "sounds like Panacur (antiparasitic)",
          "created_at": "2020-11-04T01:58:40.000000Z",
          "updated_at": "2020-11-04T01:58:40.000000Z",
          "deleted_at": null
      },
      {
          "id": 448,
          "drug_id": 4,
          "word": "Aspirin-free",
          "notes": "sounds like Aspirin (nonsteroidal anti-inflammatory)",
          "created_at": "2020-11-04T01:59:16.000000Z",
          "updated_at": "2020-11-04T01:59:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 449,
          "drug_id": 4,
          "word": "Panadol",
          "notes": "sounds like Panacur (antiparasitic)",
          "created_at": "2020-11-04T01:59:16.000000Z",
          "updated_at": "2020-11-04T01:59:16.000000Z",
          "deleted_at": null
      },
      {
          "id": 450,
          "drug_id": 4,
          "word": "Aspirin-free",
          "notes": "sounds like Aspirin (nonsteroidal anti-inflammatory)",
          "created_at": "2020-11-04T01:59:46.000000Z",
          "updated_at": "2020-11-04T01:59:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 451,
          "drug_id": 4,
          "word": "Panadol",
          "notes": "sounds like Panacur (antiparasitic)",
          "created_at": "2020-11-04T01:59:46.000000Z",
          "updated_at": "2020-11-04T01:59:46.000000Z",
          "deleted_at": null
      },
      {
          "id": 452,
          "drug_id": 4,
          "word": "Aspirin-free",
          "notes": "sounds like Aspirin (nonsteroidal anti-inflammatory)",
          "created_at": "2020-11-04T02:00:33.000000Z",
          "updated_at": "2020-11-04T02:00:33.000000Z",
          "deleted_at": null
      },
      {
          "id": 453,
          "drug_id": 4,
          "word": "Panadol",
          "notes": "sounds like Panacur (antiparasitic)",
          "created_at": "2020-11-04T02:00:33.000000Z",
          "updated_at": "2020-11-04T02:00:33.000000Z",
          "deleted_at": null
      },
      {
          "id": 454,
          "drug_id": 9,
          "word": "ACTH gel",
          "notes": "ACTHar",
          "created_at": "2020-11-04T02:16:27.000000Z",
          "updated_at": "2020-11-04T02:16:27.000000Z",
          "deleted_at": null
      },
      {
          "id": 455,
          "drug_id": 9,
          "word": "ACTH, synthetic",
          "notes": "tetracosactrin",
          "created_at": "2020-11-04T02:16:27.000000Z",
          "updated_at": "2020-11-04T02:16:27.000000Z",
          "deleted_at": null
      },
      {
          "id": 456,
          "drug_id": 11,
          "word": "Antidose",
          "notes": "sounds like Antirobe (clindamycin)",
          "created_at": "2020-11-04T02:16:59.000000Z",
          "updated_at": "2020-11-04T02:16:59.000000Z",
          "deleted_at": null
      },
      {
          "id": 457,
          "drug_id": 11,
          "word": "Liqui-Char",
          "notes": "sounds like Liquiprin (acetaminophen)",
          "created_at": "2020-11-04T02:16:59.000000Z",
          "updated_at": "2020-11-04T02:16:59.000000Z",
          "deleted_at": null
      },
      {
          "id": 458,
          "drug_id": 14,
          "word": "Fomepizole",
          "notes": "ethylene glycol antidote",
          "created_at": "2020-11-04T02:21:14.000000Z",
          "updated_at": "2020-11-04T02:21:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 459,
          "drug_id": 14,
          "word": "Fenbendazole",
          "notes": "other benzimidazole antiparasitic",
          "created_at": "2020-11-04T02:21:14.000000Z",
          "updated_at": "2020-11-04T02:21:14.000000Z",
          "deleted_at": null
      },
      {
          "id": 460,
          "drug_id": 232,
          "word": "Cyclophosphamide",
          "notes": "a different antineoplastic chemotherapeutic",
          "created_at": "2020-11-16T01:35:01.000000Z",
          "updated_at": "2020-11-16T01:35:01.000000Z",
          "deleted_at": null
      },
      {
          "id": 461,
          "drug_id": 252,
          "word": "Propranolol",
          "notes": "(a beta-adrenergic blocker)",
          "created_at": "2020-11-16T02:38:27.000000Z",
          "updated_at": "2020-11-16T02:38:27.000000Z",
          "deleted_at": null
      }
  ];


let query = "INSERT INTO vdi_soundalikes (id,drug_id,word,notes,created_at,updated_at) VALUES";
      for (let i = 0; i < data.length; ++i) {
            query = query + "('"
                  + data[i].id //id
                  + "','"
                  + data[i].drug_id //drug id
                  + "','"
                  + data[i].word 
                  + "','"
                  + (data[i].notes == null ? null : data[i].notes.replace(/[`~!@#$^?'"\\]/gi, '\\'))
                  + "','"
                  + data[i].created_at
                  + "','"
                  + data[i].updated_at
                  + "')";
            if (i != data.length - 1) {
                  query = query + ",";
            }
      }
      query = query + ";";

      let insertedSoundAlikes = await ExecuteQuery(query, []);
      console.log('Charles Inserting Soundalikes.................................', insertedSoundAlikes);
      console.log('....................................................................');


}
export const soundalikes = {
      insertSoundAlikesAsync

}
