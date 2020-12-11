import React, { useEffect } from 'react';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve('Pearls Succesfully inserted into the database', results);
            },
                  (error) => {
                        reject('Failed to inserts Pearls into the database!', error);
                  });
      });
});


const insertPearlsToDatabaseAsync = async () => {

      let query = "INSERT INTO vdi_pearls (id,drug_id,notes,is_visible,display_order,created_at,updated_at,deleted_at) VALUES";
      let data = [
            {
                "id": 1,
                "drug_id": 1,
                "notes": "Limited efficacy over time; most patients need concurrent insulin initially or eventually",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T15:45:47.000000Z",
                "updated_at": "2020-05-06T15:45:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 2,
                "drug_id": 2,
                "notes": "Efficacy debated but safety margin appears high",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T15:47:14.000000Z",
                "updated_at": "2020-05-06T15:47:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 3,
                "drug_id": 3,
                "notes": "Do not treat acepromazine-induced hypotension with epinephrine (furthers hypotension)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T15:49:50.000000Z",
                "updated_at": "2020-05-06T15:49:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 4,
                "drug_id": 3,
                "notes": "Effective premedication; mild decrease in blood pressure",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T15:49:52.000000Z",
                "updated_at": "2020-05-06T15:49:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 5,
                "drug_id": 3,
                "notes": "Antiemetic effect: significant when given as premedication",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T15:49:55.000000Z",
                "updated_at": "2020-05-06T15:49:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 6,
                "drug_id": 3,
                "notes": "Cortisol effects during transport stress: not minimized by acepromazine",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T15:49:57.000000Z",
                "updated_at": "2020-05-06T15:49:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 7,
                "drug_id": 3,
                "notes": "Urethral obstruction nonintervention study shows effective relief of obstruction in 11/15 obstructed male cats",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T15:50:00.000000Z",
                "updated_at": "2020-05-06T15:50:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 8,
                "drug_id": 3,
                "notes": "Urethral effects of acepromazine in cats are limited to preprostatic and prostatic urethra, but obstruction usually occurs in postprostatic urethra; therefore, benefit is likely due to sedation and not to direct urethral smooth muscle effects",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T15:50:02.000000Z",
                "updated_at": "2020-05-06T15:50:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 9,
                "drug_id": 3,
                "notes": "Demonstrable mild antinociceptive effects",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-06T15:50:05.000000Z",
                "updated_at": "2020-05-06T15:50:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 10,
                "drug_id": 3,
                "notes": "Given to 36 dogs with seizures; fewer seizures, challenging seizure-genic reputation",
                "is_visible": 0,
                "display_order": 8,
                "created_at": "2020-05-06T15:50:07.000000Z",
                "updated_at": "2020-05-06T15:50:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 11,
                "drug_id": 4,
                "notes": "Dogs with single dose: no toxicosis/mild toxicosis/severe toxicosis: 100/200/500 mg/kg PO once",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T15:50:56.000000Z",
                "updated_at": "2020-05-06T15:50:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 12,
                "drug_id": 4,
                "notes": "Dog intoxication case: s-adenosylmethionine 40 mg/kg PO, then 20 mg/kg PO q 24h X 7 days was effective",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T15:50:59.000000Z",
                "updated_at": "2020-05-06T15:50:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 13,
                "drug_id": 4,
                "notes": "Cats with single dose: no toxicosis/mild toxicosis/severe toxicosis: 20/60/120 mg/kg PO once",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T15:51:01.000000Z",
                "updated_at": "2020-05-06T15:51:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 14,
                "drug_id": 4,
                "notes": "Retrospective study of intoxications in cats: toxic dose = 10-170 mg/kg for fatal, 10-400 mg/kg for survivors",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T15:51:04.000000Z",
                "updated_at": "2020-05-06T15:51:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 15,
                "drug_id": 4,
                "notes": "No anti-inflammatory action; may be analgesic in dogs (as in people) but case reports exist of dogs experiencing acute hepatic injury and methemoglobinemia",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T15:51:07.000000Z",
                "updated_at": "2020-05-06T15:51:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 16,
                "drug_id": 5,
                "notes": "Graded dosage effects on intraocular pressure (IOP) in healthy dogs: 10, 25, 50, 75 mg/kg PO once = effective (20% decrease in IOP) @ 10 mg/kg with no greater benefit at higher dosages; 7h duration of effect",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T15:52:45.000000Z",
                "updated_at": "2020-05-06T15:52:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 17,
                "drug_id": 5,
                "notes": "Minimal conclusive benefit, if any, for Chiari malformation in dogs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T15:52:47.000000Z",
                "updated_at": "2020-05-06T15:52:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 18,
                "drug_id": 5,
                "notes": "\"Systemic CAIs such as acetazolamide, methazolamide, and dichlorphenamide are effective in lowering IOP in cats but their use is limited by their systemic toxicity. Cats are particularly sensitive to systemic adverse effects that include panting (associated with metabolic acidosis) and changes in mentation, inappetence, and gastrointestinal upset (related, at least in part, to hypokalemia).\" -McLellan GJ, Miller PE. Veterinary Ophthalmology  Volume 14, Issue Supplement s1, pages 15–29, September 2011",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T15:52:49.000000Z",
                "updated_at": "2020-05-06T15:52:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 19,
                "drug_id": 5,
                "notes": "Acetazolamide is a sulfonamide drug; therefore, hypersensitivities and idiosyncratic reactions (as for sulfa antibiotics) are possible",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T15:52:52.000000Z",
                "updated_at": "2020-05-06T15:52:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 20,
                "drug_id": 6,
                "notes": "Foul (sulfur) taste, so consider stomach tube gavage if giving PO",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T15:54:11.000000Z",
                "updated_at": "2020-05-06T15:54:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 21,
                "drug_id": 6,
                "notes": "PO preferable to IV (suspected lower risk of adverse effect, e.g., airway hypersecretion or spasm)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T15:54:13.000000Z",
                "updated_at": "2020-05-06T15:54:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 22,
                "drug_id": 6,
                "notes": "Acetaminophen intoxication (cats): effective when administered within several hours of intoxication",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T15:54:16.000000Z",
                "updated_at": "2020-05-06T15:54:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 23,
                "drug_id": 6,
                "notes": "Hyperosmolar (2600 mOsm/L), so must be diluted prior to IV use",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T15:54:18.000000Z",
                "updated_at": "2020-05-06T15:54:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 24,
                "drug_id": 6,
                "notes": "Spinal trauma: ineffective (compared to placebo) but nonharmful",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T15:54:21.000000Z",
                "updated_at": "2020-05-06T15:54:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 25,
                "drug_id": 7,
                "notes": "In dogs, antiplatelet effects occur at 0.5 mg/kg PO q 12h, but not at 0.5 mg/kg q 24h, 5 mg/kg q 12h, or 10 mg/kg q 12h; high serum salicylate levels are thought to antagonize the antiplatelet effect of lower dosages",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T15:56:09.000000Z",
                "updated_at": "2020-05-06T15:56:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 26,
                "drug_id": 7,
                "notes": "In cats, antiplatelet effects have either been shown in vitro, or in retrospective studies; no convincing clinical efficacy of aspirin as an antithrombotic exists currently",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T15:56:11.000000Z",
                "updated_at": "2020-05-06T15:56:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 27,
                "drug_id": 7,
                "notes": "In cats, no known benefit of microdose (5 mg/CAT) over minidose (40 mg/CAT) or original dose (81 mg/CAT)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T15:56:13.000000Z",
                "updated_at": "2020-05-06T15:56:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 28,
                "drug_id": 8,
                "notes": "For intramuscular administration only, not IV",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T15:57:06.000000Z",
                "updated_at": "2020-05-06T15:57:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 29,
                "drug_id": 8,
                "notes": "Typical normal ranges for serum cortisol: pre= 2-6 µg/dL (55-165 nmol/L), post= 6-18 µg/dL (165-497 nmol/L)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T15:57:09.000000Z",
                "updated_at": "2020-05-06T15:57:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 30,
                "drug_id": 9,
                "notes": "Demonstrated to have equivalent effect IM or IV in dogs; in cats, data for IV use only",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T15:58:10.000000Z",
                "updated_at": "2020-05-06T15:58:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 31,
                "drug_id": 9,
                "notes": "Typical normal ranges for serum cortisol: pre= 2-6 µg/dL (55-165 nmol/L), post= 6-18 µg/dL (165-497 nmol/L)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T15:58:12.000000Z",
                "updated_at": "2020-05-06T15:58:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 32,
                "drug_id": 10,
                "notes": "In dogs with lymphoma previously treated with doxorubicin-vincristine-prednisone and who have relapsed/come out of remission, complete reinduction of remission is expected in 41% of cases treated with actinomycin D",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T15:58:44.000000Z",
                "updated_at": "2020-05-06T15:58:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 33,
                "drug_id": 10,
                "notes": "Drug is highly toxic (e.g., via inhalation, ingestion) and must be handled with care",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T15:58:47.000000Z",
                "updated_at": "2020-05-06T15:58:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 34,
                "drug_id": 11,
                "notes": "To reduce risk of fatal aspiration, administer to unconscious patients using a properly-placed stomach tube only, and position the patient such that reflux cannot be aspirated",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T15:59:54.000000Z",
                "updated_at": "2020-05-06T15:59:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 35,
                "drug_id": 11,
                "notes": "For intoxication with phenobarbital (or other drugs with extensive enterohepatic recirculation): repeat dosing may help beyond gastric transit time because charcoal creates \"sink\" for resorption of circulating phenobarbital back into GI tract for excretion",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T15:59:57.000000Z",
                "updated_at": "2020-05-06T15:59:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 36,
                "drug_id": 11,
                "notes": "For ethylene glycol toxicosis: oral liquid forms of charcoal with sorbitol and propylene glycol are expected to increase serum osmolality by 40 mOsm/kg, osmole gap by 50 mOsm/kg, and lactate by 2.6 mmol/L; caution to not attribute these changes to toxic process",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T15:59:59.000000Z",
                "updated_at": "2020-05-06T15:59:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 37,
                "drug_id": 11,
                "notes": "Warn owners that black stools are expected for at least 2 days after administration",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T16:00:01.000000Z",
                "updated_at": "2020-05-06T16:00:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 38,
                "drug_id": 12,
                "notes": "With any treatment, feline herpesviral keratitis may be chronic and recurrent",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:01:04.000000Z",
                "updated_at": "2020-05-06T16:01:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 39,
                "drug_id": 12,
                "notes": "Acyclovir 2.5, 5, or 10 mg/kg SQ q 24h for 5 days, or 5 mg/kg IP q 24h for 5 days, did not stop the death of pups from neonatal canine herpesvirus",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:01:07.000000Z",
                "updated_at": "2020-05-06T16:01:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 40,
                "drug_id": 12,
                "notes": "Prohibitive lack of efficacy and bone marrow and renal toxicosis when given systemically to cats",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:01:09.000000Z",
                "updated_at": "2020-05-06T16:01:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 41,
                "drug_id": 13,
                "notes": "Shorter interestrous interval is common for estrous cycle that follows treatment (common to return to estrus 1-3 months sooner than usual)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:03:02.000000Z",
                "updated_at": "2020-05-06T16:03:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 42,
                "drug_id": 13,
                "notes": "Pyometra (dogs): 20% recurrence of pyometra during next estrous cycle",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:03:04.000000Z",
                "updated_at": "2020-05-06T16:03:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 43,
                "drug_id": 13,
                "notes": "Caution with handling/prescribing: human abortefacient risk",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:03:07.000000Z",
                "updated_at": "2020-05-06T16:03:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 44,
                "drug_id": 14,
                "notes": "Giardiasis: fenbendazole appears safer and equally effective compared to albendazole",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:04:26.000000Z",
                "updated_at": "2020-05-06T16:04:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 45,
                "drug_id": 14,
                "notes": "Trichinosis: albendazole treatment seems more effective in dogs than cats",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:04:28.000000Z",
                "updated_at": "2020-05-06T16:04:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 46,
                "drug_id": 14,
                "notes": "Oslerus (Filaroides) osleri treatment protocol (55 days) is expected to cause bone marrow toxicosis",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:04:30.000000Z",
                "updated_at": "2020-05-06T16:04:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 47,
                "drug_id": 15,
                "notes": "Usually used intermittently when exacerbation of signs of bronchoconstriction, not continually",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:05:42.000000Z",
                "updated_at": "2020-05-06T16:05:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 48,
                "drug_id": 15,
                "notes": "Levalbuterol (Xopenex) is the R-enantiomer of albuterol; appears equally effective, and causes less airway irritation",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:05:45.000000Z",
                "updated_at": "2020-05-06T16:05:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 49,
                "drug_id": 16,
                "notes": "Human osteoporosis drug (osteoclast inhibitor) with limited specific applications in veterinary medicine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:07:19.000000Z",
                "updated_at": "2020-05-06T16:07:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 50,
                "drug_id": 16,
                "notes": "Osteosarcoma: for palliation of osteolysis when amputation is not an option",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:07:21.000000Z",
                "updated_at": "2020-05-06T16:07:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 51,
                "drug_id": 16,
                "notes": "Tooth resorption: higher dosage associated with better slowing of radiographic lesions",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:07:23.000000Z",
                "updated_at": "2020-05-06T16:07:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 52,
                "drug_id": 16,
                "notes": "Esophagitis potential warrants owner education about proper administration, including water or food after every dose to minimize esophageal retention",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T16:07:25.000000Z",
                "updated_at": "2020-05-06T16:07:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 53,
                "drug_id": 17,
                "notes": "Major advantages over propofol include wider cardiovascular safety margin and ability to be given IM",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:08:18.000000Z",
                "updated_at": "2020-05-06T16:08:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 54,
                "drug_id": 17,
                "notes": "Dogs: manufacturer recommends 3 mg/kg dosage. Cats: manufacturer recommends 5 mg/kg dosage",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:08:21.000000Z",
                "updated_at": "2020-05-06T16:08:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 55,
                "drug_id": 17,
                "notes": "Unlike propofol, solution is transparent",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:08:23.000000Z",
                "updated_at": "2020-05-06T16:08:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 56,
                "drug_id": 18,
                "notes": "Preventive dose for urate uroliths (e.g., history urate uroliths, and urate crystalluria persists despite diet): 5-10 mg/kg PO q 12h",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:09:18.000000Z",
                "updated_at": "2020-05-06T16:09:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 57,
                "drug_id": 18,
                "notes": "Pathway: inhibition of xanthine oxidase prevents conversion of hypoxanthine to xanthine (and xanthine is converted to uric acid, causing urate uroliths)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:09:20.000000Z",
                "updated_at": "2020-05-06T16:09:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 58,
                "drug_id": 19,
                "notes": "May increase appetite (especially cats)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:10:12.000000Z",
                "updated_at": "2020-05-06T16:10:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 59,
                "drug_id": 20,
                "notes": "Generally begun low and titrated up according to response (serum phosphates level), while avoiding aluminum toxicosis",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:11:20.000000Z",
                "updated_at": "2020-05-06T16:11:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 60,
                "drug_id": 20,
                "notes": "May decrease appetite",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:11:23.000000Z",
                "updated_at": "2020-05-06T16:11:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 61,
                "drug_id": 20,
                "notes": "Aluminum toxicosis in dogs manifests as central neurologic signs progressing to obtundation and microcytosis, and is confirmed with a serum aluminum level (normal: 0.008-0.012 ppm)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:11:25.000000Z",
                "updated_at": "2020-05-06T16:11:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 62,
                "drug_id": 21,
                "notes": "Used when NSAID therapy has not controlled lameness caused by degenerative joint disease",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:12:20.000000Z",
                "updated_at": "2020-05-06T16:12:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 63,
                "drug_id": 22,
                "notes": "Mainly used for in-hospital/ICU treatment of aggressive, multi-drug resistant Gram negative infections",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:13:16.000000Z",
                "updated_at": "2020-05-06T16:13:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 64,
                "drug_id": 22,
                "notes": "In euvolemic cats, the SC route  is  recommended due to good absorption and bioavailability, but IM and IV are acceptable",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:13:19.000000Z",
                "updated_at": "2020-11-04T02:23:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 65,
                "drug_id": 22,
                "notes": "Labelled veterinary use is for horses only",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:13:21.000000Z",
                "updated_at": "2020-05-06T16:13:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 66,
                "drug_id": 23,
                "notes": "Benefit for degenerative myelopathy seems minimal, if any",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:14:16.000000Z",
                "updated_at": "2020-05-06T16:14:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 67,
                "drug_id": 24,
                "notes": "Largely replaced by more effective antiemetics such as ondansetron, dolasetron, or maropitant",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:15:02.000000Z",
                "updated_at": "2020-05-06T16:15:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 68,
                "drug_id": 24,
                "notes": "May still have a clinical role in supportive relief of acute, nondebilitating diarrhea",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:15:05.000000Z",
                "updated_at": "2020-05-06T16:15:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 69,
                "drug_id": 25,
                "notes": "See also: theophylline. Aminophylline and theophylline are clinically interchangeable; theophylline is an oral-only compound made of 2 aminophylline molecules, whereas aminophylline may be given orally or parenterally.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:16:12.000000Z",
                "updated_at": "2020-05-06T16:16:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 70,
                "drug_id": 25,
                "notes": "Oral form anecdotally used at 10 mg/kg PO q 8h with fewer adverse effects than sustained-release theophylline, but tablets may be difficult to obtain commercially",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:16:14.000000Z",
                "updated_at": "2020-05-06T16:16:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 71,
                "drug_id": 25,
                "notes": "Quiex-Forte oral solution (equine) contains 66 mg/mL aminophylline plus guaifenesin (clinically neutral effect); inexpensive and easy to dose orally for cats and small dogs.",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:16:17.000000Z",
                "updated_at": "2020-05-06T16:16:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 72,
                "drug_id": 26,
                "notes": "16.5 mg/kg (loading), 9 mg/kg (maintenance) protocol associated with elevated liver enzymes +/- anorexia requiring discontinuation of drug in 4/17 (24%) of cases",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:17:23.000000Z",
                "updated_at": "2020-05-06T16:17:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 73,
                "drug_id": 26,
                "notes": "Dobermans: 45% incidence of adverse effects with amiodarone therapy",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:17:25.000000Z",
                "updated_at": "2020-05-06T16:17:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 74,
                "drug_id": 26,
                "notes": "25 mg/kg PO q 12h produced hepatopathy and anorexia; 30 mg/kg PO q 24h suggested as alternative but clinical reports indicate similar problems in some dogs; 9-16 mg/kg PO q 24h considered safer in dogs",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:17:27.000000Z",
                "updated_at": "2020-05-06T16:17:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 75,
                "drug_id": 26,
                "notes": "Long half-life (weeks); steady-state reached only after saturation of body fat, may then extend to months for complete elimination",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T16:17:30.000000Z",
                "updated_at": "2020-05-06T16:17:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 76,
                "drug_id": 27,
                "notes": "Do not rinse or towel off; long-haired dogs or cats must be shaved before use to ensure good contact with skin",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:18:20.000000Z",
                "updated_at": "2020-05-06T16:18:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 77,
                "drug_id": 27,
                "notes": "Considered an environmental hazard and possible carcinogen by the U.S. EPA, requiring appropriate permits/licenses to use, well ventilated area for application, etc.",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:18:22.000000Z",
                "updated_at": "2020-05-06T16:18:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 78,
                "drug_id": 27,
                "notes": "Many safer alternatives exist for most parasitic infestations",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:18:24.000000Z",
                "updated_at": "2020-05-06T16:18:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 79,
                "drug_id": 27,
                "notes": "For feline demodicosis, 0.0125% concentration for topical dip is 125 ppm (5.3 mL amitraz in 2 gallons [7.5 liters] of water), which is half the labeled concentration for dogs (10.6 mL amitraz in 2 gallons [15 liters] of water = 250 ppm, or 0.025%)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T16:18:27.000000Z",
                "updated_at": "2020-05-06T16:18:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 80,
                "drug_id": 27,
                "notes": "Amitraz is a component of several topical spot-on monthly compounds such as ProMeris Duo and Certifect; use as directed on package",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T16:18:29.000000Z",
                "updated_at": "2020-05-06T16:18:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 81,
                "drug_id": 28,
                "notes": "No benefit of amitriptyline for canine aggression (vs. behavioral modification alone)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:19:26.000000Z",
                "updated_at": "2020-05-06T16:19:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 82,
                "drug_id": 28,
                "notes": "Environmental enrichment, source of running water for drinking, etc. now considered more important than pharmacotherapy for feline idiopathic cystitis",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:19:28.000000Z",
                "updated_at": "2020-05-06T16:19:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 83,
                "drug_id": 29,
                "notes": "Therapeutic goal is to lower blood pressure to safe levels, not necessarily within normal range",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:21:11.000000Z",
                "updated_at": "2020-05-06T16:21:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 84,
                "drug_id": 29,
                "notes": "White coat effect/stress must be considered to avoid misdiagnosis of systemic hypertension and avoid error of prescribing amlodipine unnecessarily",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:21:13.000000Z",
                "updated_at": "2020-05-06T16:21:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 85,
                "drug_id": 30,
                "notes": "High-protein diet more effective than ammonium chloride for urine acidification preventing struvite crystal formation.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:22:17.000000Z",
                "updated_at": "2020-05-06T16:22:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 86,
                "drug_id": 30,
                "notes": "Environmental enrichment, source of running water for drinking, etc. now considered more important than pharmacotherapy for feline idiopathic cystitis",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:22:20.000000Z",
                "updated_at": "2020-05-06T16:22:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 87,
                "drug_id": 31,
                "notes": "Example of rate of bacterial resistance: 33% (130/396) of E. coli infections in dogs are resistant to amoxicillin",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:24:10.000000Z",
                "updated_at": "2020-05-06T16:24:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 88,
                "drug_id": 31,
                "notes": "Renal excretion means heightened concentration of amoxicillin in urine, disproportionately more effective for bacterial cystitis",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:24:12.000000Z",
                "updated_at": "2020-05-06T16:24:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 89,
                "drug_id": 31,
                "notes": "Endotoxemia reduces elimination by 2- to 3-fold in dogs; consider longer interdose interval if sepsis is suspected",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:24:16.000000Z",
                "updated_at": "2020-05-06T16:24:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 90,
                "drug_id": 31,
                "notes": "Food, water reduce absorption of amoxicillin, but all tablets should be followed by an oral dose of water (and/or for practical reasons of compliance for many owners, a small treat) to ensure passage to the stomach",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T16:24:18.000000Z",
                "updated_at": "2020-05-06T16:24:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 91,
                "drug_id": 31,
                "notes": "Oral amoxillin has far superior absorption compared to oral ampicillin",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T16:24:21.000000Z",
                "updated_at": "2020-05-06T16:24:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 92,
                "drug_id": 31,
                "notes": "Anecdotal reports of greater incidence of immune-mediated hemolytic anemia in animals treated with beta-lactam antibacterials like amoxicillin; judicious use of such antibacterials is recommended in general and in these patients in particular",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T16:24:23.000000Z",
                "updated_at": "2020-05-06T16:24:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 93,
                "drug_id": 32,
                "notes": "Example of rate of bacterial resistance: 8.1% of bacteria in dog-to-dog bite wounds are resistant to amoxicillin-clavulanate",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:26:58.000000Z",
                "updated_at": "2020-05-06T16:26:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 94,
                "drug_id": 32,
                "notes": "Superior to doxycycline for feline chlamydiosis",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:27:01.000000Z",
                "updated_at": "2020-05-06T16:27:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 95,
                "drug_id": 32,
                "notes": "Renal excretion means heightened concentration of amoxicillin in urine, disproportionately more effective for bacterial cystitis",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:27:03.000000Z",
                "updated_at": "2020-05-06T16:27:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 96,
                "drug_id": 32,
                "notes": "Endotoxemia reduces elimination by 2- to 3-fold in dogs; consider longer interdose interval if sepsis is suspected",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T16:27:06.000000Z",
                "updated_at": "2020-05-06T16:27:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 97,
                "drug_id": 32,
                "notes": "Food, water reduce absorption of amoxicillin, but all tablets should be followed by an oral dose of water (and/or for practical reasons of compliance for many owners, a small treat) to ensure passage to the stomach",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T16:27:08.000000Z",
                "updated_at": "2020-05-06T16:27:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 98,
                "drug_id": 32,
                "notes": "Oral amoxicillin has far superior absorption compared to oral ampicillin",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T16:27:11.000000Z",
                "updated_at": "2020-05-06T16:27:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 99,
                "drug_id": 32,
                "notes": "Anecdotal reports of greater incidence of immune-mediated hemolytic anemia in animals treated with beta-lactam antibacterials like amoxicillin; judicious use of such antibacterials is recommended in general and in these patients in particular",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-06T16:27:13.000000Z",
                "updated_at": "2020-05-06T16:27:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 100,
                "drug_id": 33,
                "notes": "Largely replaced by oral azoles (itraconazole, fluconazole for central nervous system, eye) unless unable to swallow or urgent/immediate intervention needed",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:28:41.000000Z",
                "updated_at": "2020-05-06T16:28:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 101,
                "drug_id": 33,
                "notes": "Many dogs treated with this dosage for other systemic mycoses including histoplasmosis and coccidioidomycosis",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:28:43.000000Z",
                "updated_at": "2020-05-06T16:28:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 102,
                "drug_id": 34,
                "notes": "Reconstitute only with sterile water, and infuse only with 5% dextrose (be sure to pre-flush IV lines with 5% dextrose before starting infusion); other fluids can cause precipitation of the drug",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:29:26.000000Z",
                "updated_at": "2020-05-06T16:29:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 103,
                "drug_id": 34,
                "notes": "For blastomycosis, largely replaced by oral azoles (itraconazole, fluconazole for central nervous system, eye) unless unable to swallow or urgent/immediate intervention needed",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:29:28.000000Z",
                "updated_at": "2020-05-06T16:29:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 104,
                "drug_id": 34,
                "notes": "Each dose infused IV over 15 to 20-minute period via catheter in a peripheral vein",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:29:31.000000Z",
                "updated_at": "2020-05-06T16:29:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 105,
                "drug_id": 34,
                "notes": "Liposome-encapsulated formulation achieves plasma levels 100-fold higher than standard amphotericin B",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T16:29:33.000000Z",
                "updated_at": "2020-05-06T16:29:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 106,
                "drug_id": 34,
                "notes": "Many dogs treated with this dosage for other systemic mycoses including histoplasmosis and coccidioidomycosis",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T16:29:36.000000Z",
                "updated_at": "2020-05-06T16:29:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 107,
                "drug_id": 35,
                "notes": "Infuse only with 5% dextrose (be sure to pre-flush IV lines with 5% dextrose before starting infusion); other fluids may cause precipitation of the drug",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:30:14.000000Z",
                "updated_at": "2020-05-06T16:30:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 108,
                "drug_id": 35,
                "notes": "Diluted in 5% dextrose to 1 mg/mL each dose before giving as IV infusion",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:30:16.000000Z",
                "updated_at": "2020-05-06T16:30:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 109,
                "drug_id": 35,
                "notes": "For blastomycosis, largely replaced by oral azoles (itraconazole, fluconazole for central nervous system, eye) unless unable to swallow or urgent/immediate intervention needed",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:30:19.000000Z",
                "updated_at": "2020-05-06T16:30:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 110,
                "drug_id": 35,
                "notes": "Many dogs treated with this dosage for other systemic mycoses including histoplasmosis and coccidioidomycosis",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T16:30:22.000000Z",
                "updated_at": "2020-05-06T16:30:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 111,
                "drug_id": 36,
                "notes": "Oral bioavailability is poor.  Therefore, a common approach is to give ampicillin IV initially (rapid tissue distribution, no need for oral route) and then to change to the same dosage of amoxicillin, PO, when patient is stable, eating well, and not vomiting.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:31:54.000000Z",
                "updated_at": "2020-05-06T16:31:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 112,
                "drug_id": 36,
                "notes": "Not to be confused with ampicillin trihydrate (Polyflex), which is opaque white like milk, is empirically dosed at 3 mg/kg, has a longer duration of action, and can only be given IM or SC (fatal if given IV)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:31:57.000000Z",
                "updated_at": "2020-05-06T16:31:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 113,
                "drug_id": 36,
                "notes": "Penicillins, like all beta-lactams, are time-dependent antibiotics and therefore serum/tissue/urine levels should be kept some multiple (at least 3-5x) above the minimum inhibitory concentration throughout the course of treatment",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:31:59.000000Z",
                "updated_at": "2020-05-06T16:31:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 114,
                "drug_id": 37,
                "notes": "Beta-lactamase inhibitor combined with penicillin for IV use, similar to amoxicillin-clavulanate (oral)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:32:50.000000Z",
                "updated_at": "2020-05-06T16:32:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 115,
                "drug_id": 38,
                "notes": "Mostly replaced by sulfa-based coccidiostats in small animal medicine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:33:28.000000Z",
                "updated_at": "2020-05-06T16:33:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 116,
                "drug_id": 39,
                "notes": "Contraindications mainly reflect increased risk of aspiration pneumonitis/pneumonia (petroleum distillates, unconsciousness or loss of gag reflex) or greater harm brought on by vomiting (e.g., esophagitis from acids/alkalis)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:34:39.000000Z",
                "updated_at": "2020-05-06T16:34:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 117,
                "drug_id": 39,
                "notes": "Alternatives for cats include orally-administered 3% hydrogen peroxide or alpha-2 agonists (e.g., dexmedetomidine) at labeled dosages",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:34:42.000000Z",
                "updated_at": "2020-05-06T16:34:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 118,
                "drug_id": 40,
                "notes": "Caution re. urinary acidification: may promote acidosis",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:35:27.000000Z",
                "updated_at": "2020-05-06T16:35:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 119,
                "drug_id": 40,
                "notes": "Interest in ascorbic acid as a clinically-useful antioxidant in dogs and cats in the 1970s and 1980s has not been supported by evidence",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:35:30.000000Z",
                "updated_at": "2020-05-06T16:35:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 120,
                "drug_id": 40,
                "notes": "There is no known minimum dietary requirement for ascorbate (vitamin C) in pet dogs or cats; some high-performance sled-racing dogs have developed signs consistent with scurvy, together with low plasma ascorbate levels",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:35:33.000000Z",
                "updated_at": "2020-05-06T16:35:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 121,
                "drug_id": 40,
                "notes": "Cats do not develop an increase in urinary oxalate excretion with ascorbic acid supplementation at 2 mg/kg, but like humans, may convert excess ascorbate to oxalate at higher dosages, causing hyperoxaluria",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T16:35:35.000000Z",
                "updated_at": "2020-05-06T16:35:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 122,
                "drug_id": 41,
                "notes": "Despite risk of hypersensitivity reaction, one of the safest and most rapid-acting chemotherapeutic agents for lymphoma in dogs and cats",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:37:10.000000Z",
                "updated_at": "2020-05-06T16:37:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 123,
                "drug_id": 41,
                "notes": "Hypersensitivity reactions occur after a median of 3 previous doses (range: 2-6) and very rarely on the first dose",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:37:13.000000Z",
                "updated_at": "2020-05-06T16:37:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 124,
                "drug_id": 41,
                "notes": "End of manufacture in North America (December 2012); possible alternatives include erwinase and pegylated L-asparaginase",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:37:15.000000Z",
                "updated_at": "2020-05-06T16:37:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 125,
                "drug_id": 42,
                "notes": "Beta-blockers should not be initiated when a patient is in active congestive heart failure (e.g., dyspneic form pulmonary edema); treat the heart failure first",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:38:52.000000Z",
                "updated_at": "2020-05-06T16:38:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 126,
                "drug_id": 42,
                "notes": "Beta-blockers should be started low and titrated upward to minimize the risk of adverse effects",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:38:55.000000Z",
                "updated_at": "2020-05-06T16:38:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 127,
                "drug_id": 42,
                "notes": "For systemic hypertension, generally used when sympathetic excess is likely cause (e.g., hyperthyroidism, pheochromocytoma)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:38:57.000000Z",
                "updated_at": "2020-05-06T16:38:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 128,
                "drug_id": 42,
                "notes": "As with every beta-blocker, adverse effects (notably hypotension and bradycardia, which can be catastrophic/life-threatening) are best avoided by beginning at the low end of the dosage range and uptitrating as needed based on response",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T16:38:59.000000Z",
                "updated_at": "2020-05-06T16:38:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 129,
                "drug_id": 42,
                "notes": "Also as with every beta-blocker, atenolol is only started once overt congestive heart failure (pulmonary edema, pleural effusion, ascites) has been controlled/fluid has been eliminated with diuretics; otherwise, suppression of the heart rate is too inexact (despite titration) and may lead to periods of bradycardia where retained fluid would be detrimental or possibly life-threatening",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T16:39:01.000000Z",
                "updated_at": "2020-05-06T16:39:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 130,
                "drug_id": 43,
                "notes": "Volume of atipamezole to be administered for reversal is the same as the volume of medetomidine or dexmedetomidine given originally",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:39:46.000000Z",
                "updated_at": "2020-05-06T16:39:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 131,
                "drug_id": 43,
                "notes": "Specific dosage: 3750 µg/m² IV if (dex)medetomidine was given IV; 5000 µg/m² IM if (dex)medetomdine was given IM",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:39:49.000000Z",
                "updated_at": "2020-05-06T16:39:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 132,
                "drug_id": 43,
                "notes": "Also used anecdotally at this dosage for treatment of amitraz toxicosis",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:39:51.000000Z",
                "updated_at": "2020-05-06T16:39:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 133,
                "drug_id": 44,
                "notes": "Administer with fatty meal for optimal absorption",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:40:57.000000Z",
                "updated_at": "2020-05-06T16:40:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 134,
                "drug_id": 44,
                "notes": "Expensive but more effective and safer than alternatives",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:40:59.000000Z",
                "updated_at": "2020-05-06T16:40:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 135,
                "drug_id": 44,
                "notes": "Also used at this dosage for treatment of anaplasmosis in dogs",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:41:02.000000Z",
                "updated_at": "2020-05-06T16:41:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 136,
                "drug_id": 45,
                "notes": "Especially used for ocular or other delicate surgical procedures where pain can be well-controlled and absolute immobility of the patient is essential",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:41:46.000000Z",
                "updated_at": "2020-05-06T16:41:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 137,
                "drug_id": 45,
                "notes": "No analgesic/anesthetic properties; cannot be used alone as anesthetic agent",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:41:49.000000Z",
                "updated_at": "2020-05-06T16:41:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 138,
                "drug_id": 46,
                "notes": "Antidote for organophosphate toxicosis: 10-fold higher dosage (0.1-0.5 mg/kg, with 1/4 of the dose given IV and the remainder IM) carries strong anecdotal evidence of support",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:42:57.000000Z",
                "updated_at": "2020-05-06T16:42:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 139,
                "drug_id": 46,
                "notes": "Increase in heart rate may take <1 minute to 20-30 minutes depending on IV vs. IM/SC, respectively, and on individual variation",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:43:00.000000Z",
                "updated_at": "2020-05-06T16:43:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 140,
                "drug_id": 46,
                "notes": "Second-degree AV block is common 3-20 minutes after atropine administration; the ventricular rate remains unchanged compared to pretreatment but the atrial rate accelerates before the AV node can admit all impulses to the ventricles, demonstrating block on the ECG (transient and self-resolving)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:43:02.000000Z",
                "updated_at": "2020-05-06T16:43:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 141,
                "drug_id": 46,
                "notes": "Atropine response test is of limited reliability: some dogs with sick sinus syndrome or other pathologic bradycardias still have a positive response (falsely suggesting a pure physiologic bradycardia), and a positive response does not reliably predict whether a dog with sick sinus syndrome will improve (e.g., fewer syncopal episodes) with oral vagolytics",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T16:43:05.000000Z",
                "updated_at": "2020-05-06T16:43:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 142,
                "drug_id": 47,
                "notes": "Attapulgite is aluminum magnesium silicate",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:43:57.000000Z",
                "updated_at": "2020-05-06T16:43:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 143,
                "drug_id": 47,
                "notes": "Part of supportive care for uncomplicated, benign gastrointestinal upset, not gastrointestinal disease causing systemic signs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:44:00.000000Z",
                "updated_at": "2020-05-06T16:44:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 144,
                "drug_id": 47,
                "notes": "Evidence for efficacy is very limited, but unlikely to cause adverse effects when used as indicated",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:44:02.000000Z",
                "updated_at": "2020-05-06T16:44:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 145,
                "drug_id": 48,
                "notes": "Largely replaced by other immune modulating drugs such as cyclosporine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:44:40.000000Z",
                "updated_at": "2020-05-06T16:44:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 146,
                "drug_id": 49,
                "notes": "Largely replaced by other immune modulating drugs such as cyclosporine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:45:23.000000Z",
                "updated_at": "2020-05-06T16:45:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 147,
                "drug_id": 50,
                "notes": "Major advantage is non-corticosteroid treatment for long-term immunosuppression; major drawbacks are long time to steady-state immunosuppression (weeks), nonspecific immunosuppression (risk of opportunistic infections), and lack of proven efficacy (still unclear if azathioprine is superior to other treatments in prospective blinded placebo-controlled setting)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:46:37.000000Z",
                "updated_at": "2020-05-06T16:46:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 148,
                "drug_id": 51,
                "notes": "Short shelf-life of oral solution (refrigerated) and large tablet size can make feline doses challenging",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:48:44.000000Z",
                "updated_at": "2020-05-06T16:48:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 149,
                "drug_id": 51,
                "notes": "Widely used at this dosage, with strong anecdotal support for efficacy, in respiratory infections (primary or secondary) in dogs and cats",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:48:47.000000Z",
                "updated_at": "2020-05-06T16:48:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 150,
                "drug_id": 52,
                "notes": "Benefit in preclinical (\"asymptomatic\") heart disease is unproven and likely minimal, perhaps better in breeds other than the cavalier King Charles spaniel",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:51:04.000000Z",
                "updated_at": "2020-05-06T16:51:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 151,
                "drug_id": 52,
                "notes": "Benazepril has advantage of dual hepatic metabolism/renal excretion, the clinical benefit of which is likely minimal",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:51:07.000000Z",
                "updated_at": "2020-05-06T16:51:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 152,
                "drug_id": 52,
                "notes": "Renal benefits likely disproportionately greater with proteinuric kidney disease",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:51:09.000000Z",
                "updated_at": "2020-05-06T16:51:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 153,
                "drug_id": 52,
                "notes": "Systemic hypertension in dogs and cats: ACE inhibitors in general have been disappointing as monotherapy",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T16:51:11.000000Z",
                "updated_at": "2020-05-06T16:51:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 154,
                "drug_id": 52,
                "notes": "ACE inhibitor tolerance (loss of efficacy over time) is likely present and clinically significant in dogs and cats, calling into question the start of ACE inhibitors in very early disease states",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T16:51:14.000000Z",
                "updated_at": "2020-05-06T16:51:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 155,
                "drug_id": 53,
                "notes": "Efficacy seems variable and transient for treating detrusor muscle dysfunction with normal urethral patency/urethral sphincter function, but few alternatives exist",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:52:36.000000Z",
                "updated_at": "2020-05-06T16:52:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 156,
                "drug_id": 54,
                "notes": "Poorly studied in vet med; generally replaced by bulk laxatives (psyllium, bran, pumpkin), other laxatives, or promotility agents (e.g., cisapride)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:53:14.000000Z",
                "updated_at": "2020-05-06T16:53:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 157,
                "drug_id": 55,
                "notes": "Same dosage used for 24-48 hours for empirical treatment of acute benign gastroenteritis",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:54:50.000000Z",
                "updated_at": "2020-05-06T16:54:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 158,
                "drug_id": 55,
                "notes": "Bismuth subsalicylate is 50% salicylate, which can be dose-limiting especially in cats (avoid exceeding recommended dosage)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:54:52.000000Z",
                "updated_at": "2020-05-06T16:54:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 159,
                "drug_id": 55,
                "notes": "For bismuth subsalicylate tablets (262 mg), the following dosage has been used in dogs: body weight < 5kg, give 1/4 tablet; 5-9.9 kg, give 1/2 tablet; 10-24.9 kg, give 1 tablet; >25 kg, give 2 tablets",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:54:54.000000Z",
                "updated_at": "2020-05-06T16:54:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 160,
                "drug_id": 55,
                "notes": "Children's Pepto-Bismol does not contain any bismuth subsalicylate; only calcium carbonate 400 mg/caplet",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T16:54:57.000000Z",
                "updated_at": "2020-05-06T16:54:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 161,
                "drug_id": 56,
                "notes": "Part of supportive care for uncomplicated, benign gastrointestinal upset, not gastrointestinal disease causing systemic signs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:56:23.000000Z",
                "updated_at": "2020-05-06T16:56:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 162,
                "drug_id": 56,
                "notes": "Evidence for efficacy is very limited, but unlikely to cause adverse effects when used as indicated",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:56:25.000000Z",
                "updated_at": "2020-05-06T16:56:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 163,
                "drug_id": 57,
                "notes": "1 Unit = 0.55-0.66 mg = 1000 International units",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:57:34.000000Z",
                "updated_at": "2020-05-06T16:57:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 164,
                "drug_id": 57,
                "notes": "For intralesional injections, animal must be sedated or under general anesthesia for each treatment, and local anesthesia (e.g., lidocaine) is recommended in addition to general anesthesia",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:57:37.000000Z",
                "updated_at": "2020-05-06T16:57:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 165,
                "drug_id": 57,
                "notes": "Other intralesional applications in dogs and cats include transmissible venereal tumor, soft-tissue sarcoma, perianal adenoma or carcinoma, and mast cell tumor",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:57:39.000000Z",
                "updated_at": "2020-05-06T16:57:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 166,
                "drug_id": 58,
                "notes": "Steady state levels/timing of serum levels: steady state reached after approximately 115 days; therapeutic levels (i.e., 75% of steady state) reached after 30 days at standard dosage without loading. Therefore, check serum levels after loading (day 8 of treatment) and at 1 month, and adjust dosage based on clinical efficacy at seizure suppression. Serum levels at day 8 and 1 month are used for establishing the patient's own baseline in the future rather than for dosage adjustment.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T16:58:40.000000Z",
                "updated_at": "2020-05-06T16:58:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 167,
                "drug_id": 58,
                "notes": "Alternative loading dosage: 120-160 mg/kg PO q 24h for 5 days, then standard dosage (30-40 mg/kg PO q 24h). Test serum level after loading doses and adjust treatment accordingly.",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T16:58:42.000000Z",
                "updated_at": "2020-05-06T16:58:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 168,
                "drug_id": 58,
                "notes": "Recheck serum levels q 6-12 months",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T16:58:45.000000Z",
                "updated_at": "2020-05-06T16:58:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 169,
                "drug_id": 59,
                "notes": "Second-line drug for pseudocyesis; cabergoline is preferred due to fewer side-effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:00:18.000000Z",
                "updated_at": "2020-05-06T17:00:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 170,
                "drug_id": 59,
                "notes": "Prolactin concentrations are reduced by dopamine or its analogs (e.g., bromocriptine)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:00:20.000000Z",
                "updated_at": "2020-05-06T17:00:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 171,
                "drug_id": 59,
                "notes": "Administer in food to reduce risk of vomiting",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:00:24.000000Z",
                "updated_at": "2020-05-06T17:00:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 172,
                "drug_id": 59,
                "notes": "For pseudocyesis, 10 µg/kg PO q 12h is effective in 60-70% of cases (vs. 80% for 20-30 µg/kg)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T17:00:26.000000Z",
                "updated_at": "2020-05-06T17:00:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 173,
                "drug_id": 59,
                "notes": "For pregnancy termination, bromocriptine dosage is 15 µg/kg on day 1, 20 µg/kg on days 2 and 3, and 30 µg/kg thereafter; dinoprost dosage likewise uptitrates (0.1, 0.15, and 0.2 µg/kg on days 1, 2 and 3 and thereafter) but cloprostenol dosage remains the same",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T17:00:28.000000Z",
                "updated_at": "2020-05-06T17:00:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 174,
                "drug_id": 60,
                "notes": "High first-pass hepatic metabolism translates to suitability for use in corticosteroid-responsive chronic gastrointestinal diseases, and a lower incidence of systemic glucocorticoid adverse effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:01:13.000000Z",
                "updated_at": "2020-05-06T17:01:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 175,
                "drug_id": 60,
                "notes": "Few/no overt clinical signs of glucocorticoid treatment and little/no increase in serum alkaline phosphatase, but repeatable glucocorticoid effects on hypothalamic-pituitary-adrenal axis, affecting ACTH stimulation and dexamethasone suppression tests",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:01:16.000000Z",
                "updated_at": "2020-05-06T17:01:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 176,
                "drug_id": 61,
                "notes": "Spectrum covers Taenia, Dipylidium caninum, and Echinococcus",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:02:00.000000Z",
                "updated_at": "2020-05-06T17:02:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 177,
                "drug_id": 62,
                "notes": "Longer duration of effect than lidocaine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:05:22.000000Z",
                "updated_at": "2020-05-06T17:05:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 178,
                "drug_id": 62,
                "notes": "Mean peak plasma bupivacaine concentrations occur 5-15 minutes after intrathoracic (interpleural) infusion in dogs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:05:24.000000Z",
                "updated_at": "2020-05-06T17:05:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 179,
                "drug_id": 63,
                "notes": "Considered one of the safer sedative/analgesics for patients with cardiovascular disease",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:07:40.000000Z",
                "updated_at": "2020-05-06T17:07:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 180,
                "drug_id": 63,
                "notes": "Urethral obstruction treatment protocol for cats (no catheterization) is considered an alternative for relieving urethral spasm when a functional (e.g., stress-induced) disorder is responsible for formation of the urethral plug or similar obstruction",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:07:42.000000Z",
                "updated_at": "2020-05-06T17:07:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 181,
                "drug_id": 63,
                "notes": "Analgesic (and respiratory depressant effect) approximately 30 times greater than morphine on mg-per-mg basis in humans",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:07:45.000000Z",
                "updated_at": "2020-05-06T17:07:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 182,
                "drug_id": 64,
                "notes": "Treatment is given to victim, not aggressor, to reduce intercat aggression by increasing victim's assertive behavior",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:08:45.000000Z",
                "updated_at": "2020-05-06T17:08:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 183,
                "drug_id": 64,
                "notes": "Anecdotal use in feline urinary spraying, feline interstitial cystitis/feline lower urinary tract signs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:08:47.000000Z",
                "updated_at": "2020-05-06T17:08:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 184,
                "drug_id": 64,
                "notes": "Slow onset of action (>1 week)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:08:49.000000Z",
                "updated_at": "2020-05-06T17:08:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 185,
                "drug_id": 65,
                "notes": "Mixed agonist-antagonist property means butorphanol may be used for partially reversing opiate effects (e.g., hydromorphone) while leaving some analgesic effect",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:11:28.000000Z",
                "updated_at": "2020-05-06T17:11:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 186,
                "drug_id": 65,
                "notes": "Preferred sedative for patients with cardiovascular disease (e.g., 0.1-0.2 mg/kg IV for very light sedation, 5-10 minutes)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:11:30.000000Z",
                "updated_at": "2020-05-06T17:11:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 187,
                "drug_id": 65,
                "notes": "Appropriate for analgesia in cases of scorpion envenomation because does not potentiate scorpion venom (unlike morphine or meperidine)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:11:32.000000Z",
                "updated_at": "2020-05-06T17:11:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 188,
                "drug_id": 65,
                "notes": "LD50 for healthy dogs is 20 mg/kg IM and >50 mg/kg PO",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T17:11:35.000000Z",
                "updated_at": "2020-05-06T17:11:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 189,
                "drug_id": 66,
                "notes": "0.5 mg tablets may be crushed, dissolved in water, and the suspension administered orally (within 15 minutes of preparation) for accurate dosage",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:13:58.000000Z",
                "updated_at": "2020-05-06T17:13:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 190,
                "drug_id": 66,
                "notes": "For anestrus treatment/triggering of estrus, conception rate (18/19; 94%) and whelping rate (18/18; 100%) with cabergoline are markedly different from conception rate (0%) and whelping rate (0%) with pregnant mare serum gonadotropin (PMSG) treatment",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:14:01.000000Z",
                "updated_at": "2020-05-06T17:14:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 191,
                "drug_id": 66,
                "notes": "For pregnancy termination in cats, cabergoline monotherapy is highly effective between days 34-42 of pregnancy, and ineffective thereafter; addition of prostaglandin (alfaprostol, 10 µg/kg SC q 48h) to cabergoline treatment in these later-gestation cats significantly increases treatment efficacy",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:14:04.000000Z",
                "updated_at": "2020-05-06T17:14:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 192,
                "drug_id": 67,
                "notes": "For cholecalficerol-associated hypercalcemia, calcitonin appears more labor-intensive, less efficacious, and more likely to trigger side-effects than other treatments (e.g., pamidronate)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:14:48.000000Z",
                "updated_at": "2020-05-06T17:14:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 193,
                "drug_id": 67,
                "notes": "Conversion: 1 IU = 0.025 mg of synthetic calcitonin",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:14:51.000000Z",
                "updated_at": "2020-05-06T17:14:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 194,
                "drug_id": 68,
                "notes": "Caution with dosage: 1 microgram [µg] = 1000 nanograms [ng] (and 1 milligram [mg] = 1000000 nanograms[ng])",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:15:48.000000Z",
                "updated_at": "2020-05-06T17:15:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 195,
                "drug_id": 68,
                "notes": "Raises serum calcium level by increasing intestinal calcium uptake",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:15:50.000000Z",
                "updated_at": "2020-05-06T17:15:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 196,
                "drug_id": 68,
                "notes": "Serum half-life of calcitriol is short (hours) but biological effect is longer (days), which can explain a discordance between normal/low serum levels and ongoing effect",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:15:53.000000Z",
                "updated_at": "2020-05-06T17:15:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 197,
                "drug_id": 68,
                "notes": "Calcitriol analogs (e.g., calcipotriene) are found in human psoriasis creams (e.g., Dovonex, Taclonex, Dovobet) and ingestion of these products by pets can cause severe hypercalcemia",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T17:15:55.000000Z",
                "updated_at": "2020-05-06T17:15:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 198,
                "drug_id": 69,
                "notes": "Anecdotal use as intestinal phosphate binder for chronic kidney disease patients in dogs and cats at 30 mg/kg PO q 8h or 45 mg/kg PO q 12h, adjusted (based on monitoring) to avoid hypercalcemia; risk of hypercalcemia makes aluminum-based phosphate binders generally preferred",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:16:42.000000Z",
                "updated_at": "2020-05-06T17:16:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 199,
                "drug_id": 69,
                "notes": "Calcium carbonate 500 mg provides 200 mg elemental calcium, which = 10 mEq calcium",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:16:45.000000Z",
                "updated_at": "2020-05-06T17:16:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 200,
                "drug_id": 69,
                "notes": "Typical amount of calcium carbonate recommended when preparing 1 kg of balanced home-cooked diet is approximately 6 X 500 mg tablets (e.g., 6 Tums Regular Strength); wide variation based on other ingredients and patient's needs, so have diet analyzed and adjust according to specific requirement",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:16:47.000000Z",
                "updated_at": "2020-05-06T17:16:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 201,
                "drug_id": 69,
                "notes": "Largely abandoned for gastric antacid applications due to short duration of action, risk of rebound hyperacidity, and better alternatives (e.g., proton-pump inhibitors)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T17:16:49.000000Z",
                "updated_at": "2020-05-06T17:16:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 202,
                "drug_id": 70,
                "notes": "For IV infusion, monitor blood ionized calcium (ideally) to titrate dose correctly",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:19:39.000000Z",
                "updated_at": "2020-05-06T17:19:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 203,
                "drug_id": 70,
                "notes": "ECG indicators of excessive IV calcium administration include bradycardia, premature ventricular complexes, and shortening of the QT interval, any of which warrants stopping the infusion and measuring a serum calcium level (preferably ionized)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:19:42.000000Z",
                "updated_at": "2020-05-06T17:19:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 204,
                "drug_id": 70,
                "notes": "Largely abandoned for cardiopulmonary cerebral resuscitation",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:19:44.000000Z",
                "updated_at": "2020-05-06T17:19:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 205,
                "drug_id": 70,
                "notes": "For chemical castration of cats, effect was more pronounced with increasing concentration of calcium chloride: 5%, 10%, 20% solutions",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T17:19:47.000000Z",
                "updated_at": "2020-05-06T17:19:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 206,
                "drug_id": 71,
                "notes": "Largely replaced by succimer, which has greater specificity for lead, is easier to administer, and is associated with fewer side-effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:20:52.000000Z",
                "updated_at": "2020-05-06T17:20:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 207,
                "drug_id": 71,
                "notes": "Lead objects in the body should be surgically removed once the patient is sufficiently stable for general anesthesia, to avoid leaching of lead from these objects during treatment",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:20:54.000000Z",
                "updated_at": "2020-05-06T17:20:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 208,
                "drug_id": 72,
                "notes": "ECG indicators of excessive IV calcium administration include bradycardia, premature ventricular complexes, and shortening of the QT interval, any of which warrants stopping the infusion and measuring a serum calcium level (preferably ionized)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:22:42.000000Z",
                "updated_at": "2020-05-06T17:22:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 209,
                "drug_id": 72,
                "notes": "For calcium channel blocker toxicosis, speed of infusion depends on route of administration of the calcium channel blocker. IV verapamil causing life-threatening bradycardia warrants infusion much faster than the usual 15-30 minutes, whereas cumulative oral toxicosis may warrant slower, longer-lasting (and/or repeated) infusions. All infusions require titration and close monitoring (ECG/serum ionized calcium/both) during infusion",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:22:44.000000Z",
                "updated_at": "2020-05-06T17:22:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 210,
                "drug_id": 72,
                "notes": "Commonly used as first-line treatment for severe hyperkalemia at 50-150 mg/kg slow IV; re-establishes the difference between resting membrane potential and threshold (stabilizes cardiomyocytes) but does not lower serum potassium concentration",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:22:47.000000Z",
                "updated_at": "2020-05-06T17:22:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 211,
                "drug_id": 73,
                "notes": "Obsolete; q 8h dosing and hepatic metabolism have led to it being replaced mainly by enalapril, benazepril, lisinopril, ramipril, and imidapril",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:23:51.000000Z",
                "updated_at": "2020-05-06T17:23:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 212,
                "drug_id": 74,
                "notes": "Spectrum of activity is considered to include multiple Pseudomonas spp.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:24:32.000000Z",
                "updated_at": "2020-05-06T17:24:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 213,
                "drug_id": 75,
                "notes": "Carbimazole is a precursor of methimazole (Tapazole), to which it is converted in vivo; therefore, the biological behavior of both drugs is expected to be similar",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:25:35.000000Z",
                "updated_at": "2020-05-06T17:25:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 214,
                "drug_id": 75,
                "notes": "The decision for choosing carbimazole or methimazole generally revolves around practical reasons (geography/regulatory body restrictions, cost), although a lower rate of adverse effects may be seen with carbimazole",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:25:38.000000Z",
                "updated_at": "2020-05-06T17:25:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 215,
                "drug_id": 75,
                "notes": "Successful maintenance of euthyroidism has been described with q 8h dosing for 2-4 weeks (or until clinically euthyroid) and then switching to q 12h for owner convenience",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:25:40.000000Z",
                "updated_at": "2020-05-06T17:25:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 216,
                "drug_id": 76,
                "notes": "Has replaced cisplatin for virtually all indications due to similar or greater efficacy and much better safety profile (notably much lower risk of nephrotoxicosis in dogs and of pulmonary toxicosis in cats)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:28:18.000000Z",
                "updated_at": "2020-05-06T17:28:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 217,
                "drug_id": 76,
                "notes": "Change \"trimethoprim/sulfadiazene\" to \"trimethoprim/sulfadiazine\"",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:28:20.000000Z",
                "updated_at": "2020-11-04T21:23:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 218,
                "drug_id": 76,
                "notes": "No evidence of pain with intracavitary infusions",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:28:24.000000Z",
                "updated_at": "2020-05-06T17:28:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 219,
                "drug_id": 76,
                "notes": "Some oncologists co-treat with calcitriol PO to increase efficacy",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T17:28:26.000000Z",
                "updated_at": "2020-05-06T17:28:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 220,
                "drug_id": 77,
                "notes": "Chemically and therapeutically similar to CCNU (carmustine = BCNU; lomustine = CCNU)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:28:54.000000Z",
                "updated_at": "2020-05-06T17:28:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 221,
                "drug_id": 78,
                "notes": "Carnitine-responsive dilated cardiomyopathy in boxers, including reversal of cardiac lesions with carnitine supplementation, was identified in 1991 but appears to have been an isolated, and currently very rare, disorder.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:29:42.000000Z",
                "updated_at": "2020-05-06T17:29:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 222,
                "drug_id": 78,
                "notes": "Carnitine is a non-prescription nutritional supplement typically available at health food stores and vitamin shops",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:29:44.000000Z",
                "updated_at": "2020-05-06T17:29:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 223,
                "drug_id": 79,
                "notes": "Initial report of hepatotoxicosis in dogs has gained notoriety out of proportion to the subsequent rate of adverse effects (safety margin not appreciably different from that of other NSAIDs); higher representation of Labrador retrievers (approximately 25% of cases) is now felt to reflect breed popularity, not a breed predisposition to toxicosis",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:31:36.000000Z",
                "updated_at": "2020-05-06T17:31:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 224,
                "drug_id": 80,
                "notes": "As with every beta-blocker, adverse effects (notably hypotension and bradycardia, which can be catastrophic/life-threatening) are best avoided by beginning at the low end of the dosage range and uptitrating as needed based on response",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:32:55.000000Z",
                "updated_at": "2020-05-06T17:32:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 225,
                "drug_id": 80,
                "notes": "Also as with every beta-blocker, carvedilol is only started once overt congestive heart failure (pulmonary edema, pleural effusion, ascites) has been controlled/fluid has been eliminated with diuretics; otherwise, suppression of the heart rate is too inexact (despite titration) and may lead to periods of bradycardia where retained fluid would be detrimental or possibly life-threatening",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:32:57.000000Z",
                "updated_at": "2020-05-06T17:32:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 226,
                "drug_id": 80,
                "notes": "Once daily oral dosing appears sufficient given duration of effect well beyond duration of plasma levels",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:33:00.000000Z",
                "updated_at": "2020-05-06T17:33:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 227,
                "drug_id": 80,
                "notes": "Nonspecific beta-blocker (B1 and B2) confers risk of bronchoconstriction",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T17:33:02.000000Z",
                "updated_at": "2020-05-06T17:33:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 228,
                "drug_id": 80,
                "notes": "Carvedilol is also an alpha-adrenergic blocker (causing vasodilation) and antioxidant",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T17:33:05.000000Z",
                "updated_at": "2020-05-06T17:33:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 229,
                "drug_id": 81,
                "notes": "Extremely expensive and labor-intensive (IV infusions daily)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:33:36.000000Z",
                "updated_at": "2020-05-06T17:33:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 230,
                "drug_id": 82,
                "notes": "Greatest activity against Gram-positive and Gram-negative, but poor activity against Pseudomonas, Proteus, many methicillin-resistant bacteria, and many anaerobes",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:34:11.000000Z",
                "updated_at": "2020-05-06T17:34:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 231,
                "drug_id": 83,
                "notes": "Inexpensive; good first-line therapy for bacterial skin infections",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:35:43.000000Z",
                "updated_at": "2020-05-06T17:35:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 232,
                "drug_id": 83,
                "notes": "Administration with food not only does not interfere with absorption, but in the dog, prolongs the duration of tissue levels above minimum inhibitory concentration",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:35:45.000000Z",
                "updated_at": "2020-05-06T17:35:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 233,
                "drug_id": 84,
                "notes": "Once-daily dosage may be sufficient for staphylococcal infections, but q 12h or q 8h dosing likely necessary for E. coli infections and possibly others",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:36:27.000000Z",
                "updated_at": "2020-05-06T17:36:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 234,
                "drug_id": 84,
                "notes": "Scarcity of clinical information in small animals due to limited use",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:36:30.000000Z",
                "updated_at": "2020-05-06T17:36:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 235,
                "drug_id": 85,
                "notes": "Studies of efficacy become outdated quickly because of rapid evolution of bacterial resistance, and published efficacy may be lower today than at the time of key studies",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:37:35.000000Z",
                "updated_at": "2020-05-06T17:37:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 236,
                "drug_id": 85,
                "notes": "This drug is no longer commercially available in the United States",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:37:37.000000Z",
                "updated_at": "2020-05-06T17:37:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 237,
                "drug_id": 86,
                "notes": "Fourth generation agent, widely distributed in tissues; spectrum includes Pseudomonas and some mycobacteria",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:38:06.000000Z",
                "updated_at": "2020-05-06T17:38:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 238,
                "drug_id": 86,
                "notes": "Scarcity of clinical information in small animals due to cost and limited use",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:38:08.000000Z",
                "updated_at": "2020-05-06T17:38:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 239,
                "drug_id": 87,
                "notes": "Generally high activity against enterobacteriaceae (E. coli, Klebsiella, etc.), Streptococcus spp., and Pasteurella, but ineffective against Pseudomonas, Actinomyces, and Bordetella",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:38:57.000000Z",
                "updated_at": "2020-05-06T17:38:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 240,
                "drug_id": 87,
                "notes": "q 24h interval may be insufficient; anecdotal reports of necessity of q 8h or q 12h",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:39:00.000000Z",
                "updated_at": "2020-05-06T17:39:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 241,
                "drug_id": 87,
                "notes": "Scarcity of clinical information in small animals due to limited use; most likely to be appropriate for treating susceptible respiratory tract infections and urinary tract infections",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:39:02.000000Z",
                "updated_at": "2020-05-06T17:39:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 242,
                "drug_id": 88,
                "notes": "Third generation agent with greater activity against Pseudomonas than other cephalosporins in this class",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:39:35.000000Z",
                "updated_at": "2020-05-06T17:39:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 243,
                "drug_id": 88,
                "notes": "Scarcity of clinical information in small animals due to limited use, and dosage information is based on pharmacokinetic studies in dogs, not clinical applications",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:39:37.000000Z",
                "updated_at": "2020-05-06T17:39:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 244,
                "drug_id": 89,
                "notes": "Effective against a wide range of Gram-positive and -negative aerobes, including beta-lactamase producers, and several anaerobes; crosses blood-brain barrier",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:40:12.000000Z",
                "updated_at": "2020-05-06T17:40:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 245,
                "drug_id": 90,
                "notes": "Effective against a wide range of Gram-positive and -negative aerobes and several anaerobes; ineffective against Enterococcus, Salmonella, Pseudomonas",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:40:56.000000Z",
                "updated_at": "2020-05-06T17:40:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 246,
                "drug_id": 90,
                "notes": "Similar spectrum of activity and clinical indications as cefoxitin, but cheaper",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:40:58.000000Z",
                "updated_at": "2020-05-06T17:40:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 247,
                "drug_id": 91,
                "notes": "Licensed for use in staphylococcal pyoderma in dogs and Pasteurella-containing wounds/abscesses in cats, but widely used off-label for susceptible bacterial urinary tract infections and other susceptible infections requiring long-term treatment where daily treatment is unacceptable to the patient and/or owner.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:42:05.000000Z",
                "updated_at": "2020-05-06T17:42:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 248,
                "drug_id": 91,
                "notes": "Underscores the rarity of bacterial urinary tract infection (UTI) in cats: in a study of cefovecin vs. cephalexin for UTIs in cats, only 22% of cats with compatible clinical signs in fact had a bacterial UTI (and in these, cefovecin was indeed as effective as, or better than, cephalexin); therefore, treating with antibacterial drugs based on clinical signs alone will be wrong more often than right, and a urinalysis and bacterial culture are indicated first",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:42:07.000000Z",
                "updated_at": "2020-05-06T17:42:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 249,
                "drug_id": 92,
                "notes": "Generally used for Gram-positive or Gram-negative bacteremia/sepsis in animals in intensive care",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:42:41.000000Z",
                "updated_at": "2020-05-06T17:42:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 250,
                "drug_id": 93,
                "notes": "Best for pyoderma and/or Gram-negative aerobic infections (e.g., E. coli); does not penetrate CNS well",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:43:16.000000Z",
                "updated_at": "2020-05-06T17:43:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 251,
                "drug_id": 94,
                "notes": "Pharmacokinetic data only; clinical efficacy and safety unproven in dogs/cats",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:44:21.000000Z",
                "updated_at": "2020-05-06T17:44:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 252,
                "drug_id": 94,
                "notes": "Best cephalosporin for Pseudomonas septicemia",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:44:24.000000Z",
                "updated_at": "2020-05-06T17:44:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 253,
                "drug_id": 94,
                "notes": "Beta-lactamase resistant",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:44:26.000000Z",
                "updated_at": "2020-05-06T17:44:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 254,
                "drug_id": 94,
                "notes": "Pharmacokinetics require IV CRI or q 4h SC dosing to maintain effective tissue drug levels for eliminating Pseudomonas in the dog",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T17:44:29.000000Z",
                "updated_at": "2020-05-06T17:44:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 255,
                "drug_id": 95,
                "notes": "Pharmacokinetic data only; clinical efficacy and safety unproven in dogs/cats",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:45:08.000000Z",
                "updated_at": "2020-05-06T17:45:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 256,
                "drug_id": 95,
                "notes": "Off-label use for urinary tract infections in dogs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:45:11.000000Z",
                "updated_at": "2020-05-06T17:45:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 257,
                "drug_id": 96,
                "notes": "Spectrum of activity includes Borrelia, Nocardia, and Actinomyces",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:46:09.000000Z",
                "updated_at": "2020-05-06T17:46:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 258,
                "drug_id": 96,
                "notes": "Can cross an inflamed blood-brain barrier",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:46:12.000000Z",
                "updated_at": "2020-05-06T17:46:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 259,
                "drug_id": 96,
                "notes": "For cats, pharmacokinetic data only; clinical efficacy and safety unproven",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:46:14.000000Z",
                "updated_at": "2020-05-06T17:46:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 260,
                "drug_id": 97,
                "notes": "Crosses blood-brain barrier, reaches lower respiratory tract",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:47:02.000000Z",
                "updated_at": "2020-05-06T17:47:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 261,
                "drug_id": 98,
                "notes": "Administration with food does not alter pharmacokinetics (but anecdotally, reduces incidence of vomiting)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:47:58.000000Z",
                "updated_at": "2020-05-06T17:47:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 262,
                "drug_id": 98,
                "notes": "No difference in clinical efficacy between generic and brand name (canine pyoderma)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:48:00.000000Z",
                "updated_at": "2020-05-06T17:48:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 263,
                "drug_id": 98,
                "notes": "Cephalexin at therapeutic dosages produces false positive results on the glucose reagent squares of some commonly-used urine dipsticks",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:48:03.000000Z",
                "updated_at": "2020-05-06T17:48:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 264,
                "drug_id": 99,
                "notes": "After IV injection in dogs, tissue concentrations are lower and shorter-lasting than with cefazolin",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:48:57.000000Z",
                "updated_at": "2020-05-06T17:48:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 265,
                "drug_id": 100,
                "notes": "Histamine (H1 receptor) antagonist; metabolite of hydroxyzine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:49:44.000000Z",
                "updated_at": "2020-05-06T17:49:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 266,
                "drug_id": 100,
                "notes": "Second-generation antihistamines cause less sedation/drowsiness than first-generation (like diphenhydramine)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:49:46.000000Z",
                "updated_at": "2020-05-06T17:49:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 267,
                "drug_id": 101,
                "notes": "1 g contains 80 mg chitosan and 100 mg calcium carbonate",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:50:40.000000Z",
                "updated_at": "2020-05-06T17:50:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 268,
                "drug_id": 102,
                "notes": "Dose is usually rounded to the nearest full tablet, to avoid splitting tablets (which could expose the owner/veterinary personnel to vaporized chlorambucil, and because tablet is hard, convex, and not scored)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:51:50.000000Z",
                "updated_at": "2020-05-06T17:51:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 269,
                "drug_id": 102,
                "notes": "Median duration of remission for dogs with lymphoma induced into remission with COAP protocol is significantly shorter than with UWM protocol",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:51:52.000000Z",
                "updated_at": "2020-05-06T17:51:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 270,
                "drug_id": 103,
                "notes": "Exceptionally good lipid solubility means superior penetration to CNS, prostate; however, bacteriostatic mechanism of action confers lower clinical efficacy than bactericidal drugs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:52:58.000000Z",
                "updated_at": "2020-05-06T17:52:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 271,
                "drug_id": 103,
                "notes": "Concern for human exposure due to rare but devastating aplastic anemia in people",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:53:01.000000Z",
                "updated_at": "2020-05-06T17:53:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 272,
                "drug_id": 103,
                "notes": "In cats: toxic even at the low dosage of 50 mg/CAT PO q 12h for 21 days",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:53:03.000000Z",
                "updated_at": "2020-05-06T17:53:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 273,
                "drug_id": 104,
                "notes": "Described as calcium-sparing (should prevent calciuresis, which would explain attraction for reducing predisposition to calcium oxalate uroliths), but calcium-sparing effect has not been borne out in dogs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:54:49.000000Z",
                "updated_at": "2020-05-06T17:54:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 274,
                "drug_id": 104,
                "notes": "Only 5-10% as potent as hydrochlorothiazide, which has essentially completely replaced chlorothiazide in clinical use as a third diuretic (after furosemide as first choice, spironolactone or torsemide as second choice)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:54:51.000000Z",
                "updated_at": "2020-05-06T17:54:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 275,
                "drug_id": 105,
                "notes": "Lack of control group and subjective owner assessment have called these levels of treatment efficacy into question",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:55:51.000000Z",
                "updated_at": "2020-05-06T17:55:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 276,
                "drug_id": 105,
                "notes": "Anecdotal evidence of efficacy in dogs and cats with other allergic disorders (e.g., airway disease)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:55:53.000000Z",
                "updated_at": "2020-05-06T17:55:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 277,
                "drug_id": 105,
                "notes": "First-generation antihistamines are more likely to cause drowsiness (vs. second-generation)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:55:56.000000Z",
                "updated_at": "2020-05-06T17:55:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 278,
                "drug_id": 106,
                "notes": "Almost completely replaced by antiemetics that have been better evaluated, are more effective, and/or appear to have a wider safety margin in dogs and cats (maropitant, ondansetron, dolasteron, etc.)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:57:19.000000Z",
                "updated_at": "2020-05-06T17:57:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 279,
                "drug_id": 107,
                "notes": "Potentiates renal effect of antidiuretic hormone (ADH; vasopressin); therefore, may be used for nephrogenic diabetes insipidus or partial ADH deficiency, but not central diabetes insipidus with complete absence of ADH",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:58:02.000000Z",
                "updated_at": "2020-05-06T17:58:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 280,
                "drug_id": 107,
                "notes": "Largely replaced by desmopressin/DDAVP for diabetes insipidus application in dogs and cats",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:58:04.000000Z",
                "updated_at": "2020-05-06T17:58:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 281,
                "drug_id": 108,
                "notes": "Estrus induction in the bitch: ineffective as monotherapy. Combination product (hCG 40 IU/mL and pregnant mare serum gonadotrophin 80 IU/mL; 5 mL/DOG IM once) is used for estrus induction in bitches but produced <50% ovulation rate in 1 study",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T17:59:21.000000Z",
                "updated_at": "2020-05-06T17:59:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 282,
                "drug_id": 108,
                "notes": "Oligozoospermia in dogs: effective for this disorder, but not for azoospermia",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T17:59:24.000000Z",
                "updated_at": "2020-05-06T17:59:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 283,
                "drug_id": 108,
                "notes": "Long-term, anti-hCG antibodies may form, so repeated administration is discouraged",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T17:59:26.000000Z",
                "updated_at": "2020-05-06T17:59:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 284,
                "drug_id": 109,
                "notes": "Almost completely replaced by famotidine (which is dosed less frequently and does not affect hepatic P450 enzymes)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:00:21.000000Z",
                "updated_at": "2020-05-06T18:00:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 285,
                "drug_id": 109,
                "notes": "Cimetidine and other H2-blockers have a faster onset of action than proton-pump inhibitors like omeprazole: they block a receptor, rather than inhibiting an enzyme",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:00:24.000000Z",
                "updated_at": "2020-05-06T18:00:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 286,
                "drug_id": 109,
                "notes": "Extensive list of drug metabolism alterations; any patient receiving cimetidine and 1 or more other drug(s) should have the combination evaluated carefully, including consultation with a pharmacist",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:00:27.000000Z",
                "updated_at": "2020-05-06T18:00:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 287,
                "drug_id": 110,
                "notes": "Ciprofloxacin is the major metabolite of enrofloxacin, and in dogs treated with enrofloxacin,.both circulate simultaneously at a ratio of 60-70%  enrofloxacin : 30-40% ciprofloxacin",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:01:17.000000Z",
                "updated_at": "2020-11-07T18:48:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 288,
                "drug_id": 110,
                "notes": "Ciprofloxacin is used in humans but enrofloxacin is not because enrofloxacin is associated with neurologic/psychiatric adverse effects",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:01:20.000000Z",
                "updated_at": "2020-05-06T18:01:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 289,
                "drug_id": 111,
                "notes": "No known or suspected adverse cardiac effects in cats",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:02:15.000000Z",
                "updated_at": "2020-05-06T18:02:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 290,
                "drug_id": 112,
                "notes": "Replaced by carboplatin for most indications in dogs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:04:28.000000Z",
                "updated_at": "2020-05-06T18:04:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 291,
                "drug_id": 112,
                "notes": "Diuresis protocol: to reduce nephrotoxicosis in dogs, the 70 mg/m² cisplatin dose has been preceded by 0.9%NaCl IV at 18-25 mL/kg IV for 3-4 h before cisplatin and 1-2 h after cisplatin (result: nephrotoxicosis rate = 6.6-7.8% in dogs)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:04:30.000000Z",
                "updated_at": "2020-05-06T18:04:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 292,
                "drug_id": 112,
                "notes": "The fatal pulmonary edema in cats appears attenuated by liposomal encapsulation, but fever and other adverse effects occur instead. Not recommended for use in any cat.",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:04:32.000000Z",
                "updated_at": "2020-05-06T18:04:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 293,
                "drug_id": 112,
                "notes": "Nephrotoxicosis remains a concern with intracavitary use because of extensive systemic absorption",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T18:04:35.000000Z",
                "updated_at": "2020-05-06T18:04:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 294,
                "drug_id": 113,
                "notes": "Liposome formulation allows delivery of 5 times greater amounts of cisplatin without peri-treatment fluid diuresis",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:05:12.000000Z",
                "updated_at": "2020-05-06T18:05:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 295,
                "drug_id": 113,
                "notes": "More dogs are alive and disease-free with this treatment than with carboplatin, according to one study",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:05:14.000000Z",
                "updated_at": "2020-05-06T18:05:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 296,
                "drug_id": 114,
                "notes": "Used anecdotally at these same dosages for bacterial respiratory tract infections in both dogs and cats",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:06:26.000000Z",
                "updated_at": "2020-05-06T18:06:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 297,
                "drug_id": 115,
                "notes": "Generally low efficacy; therefore, rarely used",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:07:11.000000Z",
                "updated_at": "2020-05-06T18:07:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 298,
                "drug_id": 115,
                "notes": "First-generation antihistamines are more likely to cause drowsiness (vs. second-generation)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:07:13.000000Z",
                "updated_at": "2020-05-06T18:07:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 299,
                "drug_id": 116,
                "notes": "Clindamycin is not recommended for initial treatment of pyoderma because of a likelihood of inducing bacterial resistance",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:09:32.000000Z",
                "updated_at": "2020-05-06T18:09:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 300,
                "drug_id": 116,
                "notes": "Solution for oral systemic administration (veterinary) has strong taste that is disliked by some dogs and cats",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:09:34.000000Z",
                "updated_at": "2020-05-06T18:09:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 301,
                "drug_id": 117,
                "notes": "Typically dosed at 25 mg/CAT q 24h or 50 mg/CAT q 48h",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:10:52.000000Z",
                "updated_at": "2020-05-06T18:10:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 302,
                "drug_id": 117,
                "notes": "Used as alternative drug if cat is intolerant to rifampin",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:10:54.000000Z",
                "updated_at": "2020-05-06T18:10:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 303,
                "drug_id": 118,
                "notes": "Requires several weeks to produce effects, and treatment for a minimum of 60 days is recommended for many disorders (warranting monitoring of liver function)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:13:08.000000Z",
                "updated_at": "2020-05-06T18:13:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 304,
                "drug_id": 118,
                "notes": "Can act synergistically with behavioral therapy (which should be provided/implemented in all cases when possible)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:13:10.000000Z",
                "updated_at": "2020-05-06T18:13:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 305,
                "drug_id": 118,
                "notes": "Reminder: \"psychogenic alopecia\" involving the abdomen in cats may in fact be a manifestation of abdominal (ureterolith) or perineal (anal sac disease) disorders",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:13:12.000000Z",
                "updated_at": "2020-05-06T18:13:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 306,
                "drug_id": 119,
                "notes": "No significant clinical use; acute seizure management (e.g., diazepam via rectal administration) or long-term seizure control (many alternatives) are better achieved with other drugs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:13:43.000000Z",
                "updated_at": "2020-05-06T18:13:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 307,
                "drug_id": 120,
                "notes": "Poor palatability (profuse hypersalivation and/or vomiting in some cats) is major determinant of treatment compliance; placement of quarter-tablets in gel capsules may increase acceptance by cats",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:14:37.000000Z",
                "updated_at": "2020-05-06T18:14:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 308,
                "drug_id": 121,
                "notes": "Human exposure to the drug (topical via skin or mucous membranes, or systemic) must be avoided because it may trigger bronchospasm and/or miscarriage.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:15:31.000000Z",
                "updated_at": "2020-05-06T18:15:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 309,
                "drug_id": 122,
                "notes": "Many superior alternatives for seizure control",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:16:07.000000Z",
                "updated_at": "2020-05-06T18:16:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 310,
                "drug_id": 123,
                "notes": "Protocol for nasal aspergillosis requires general anesthesia, sealing the nasal passages' entry and exit with Foley catheters, and infusion of clotrimazole to remain intranasally for one hour, including rotations of the head to distribute the clotrimazole evenly",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:17:06.000000Z",
                "updated_at": "2020-05-06T18:17:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 311,
                "drug_id": 123,
                "notes": "Protocol for intravesical infusion requires general anesthesia, use of a Foley catheter to prevent voiding of the solution during infusion, and total contact time of approximately 25 minutes within the bladder (including rotation of the cat while anesthetized to optimize contact with the entire surface of the bladder mucosa)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:17:09.000000Z",
                "updated_at": "2020-05-06T18:17:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 312,
                "drug_id": 124,
                "notes": "Cobalamin and vitamin B12 are synonyms; cyanocobalamin is the synthetic form of cobalamin/vitamin B12 that is produced as a pharmaceutical vitamin supplement",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:18:23.000000Z",
                "updated_at": "2020-05-06T18:18:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 313,
                "drug_id": 124,
                "notes": "Several studies have shown that hypocobalaminemia is associated with a worse long-term prognosis in dogs with exocrine pancreatic insufficiency, and weekly supplementation by injection is simple and safe",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:18:25.000000Z",
                "updated_at": "2020-05-06T18:18:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 314,
                "drug_id": 124,
                "notes": "A widely-used, empirical recommendation for supplementation in dogs is weekly SC injections of 250 µg (<5 kg), 400 µg (5-9 kg), 600 µg (10-18 µg/kg), 800 µg (19-27 kg), 1000 µg (28-36 kg), 1200 µg (37-45 kg), 1500 µg (>45 kg) (from Texas A&M University)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:18:28.000000Z",
                "updated_at": "2020-05-06T18:18:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 315,
                "drug_id": 125,
                "notes": "Cough suppressant of choice for larger breed dogs (less costly than butorphanol or hydrocodone)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:19:58.000000Z",
                "updated_at": "2020-05-06T18:19:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 316,
                "drug_id": 125,
                "notes": "Dosage should be titrated to effect, with an understanding that cough suppression is initiated only once all reversible/correctable cough-inducing disorders have been addressed",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:20:01.000000Z",
                "updated_at": "2020-05-06T18:20:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 317,
                "drug_id": 125,
                "notes": "Common, irreversible disorders that cause coughing, such as chronic sterile bronchitis, may require doses at the high end of this range for comfortable cough control",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:20:03.000000Z",
                "updated_at": "2020-05-06T18:20:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 318,
                "drug_id": 126,
                "notes": "Evidence to support efficacy is scant for all applications of this drug in small animal medicine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:21:25.000000Z",
                "updated_at": "2020-05-06T18:21:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 319,
                "drug_id": 126,
                "notes": "Antifibrotic properties attributed to interference with beta-tubulin polymerization into microtubules; anti-inflammatory effects attributed to inhibition of interleukin-1 beta formation",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:21:27.000000Z",
                "updated_at": "2020-05-06T18:21:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 320,
                "drug_id": 126,
                "notes": "For amyloidosis in Shar Pei dogs: treatment increased from q 24h to q 12h when evidence of recurrent cholestasis",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:21:29.000000Z",
                "updated_at": "2020-05-06T18:21:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 321,
                "drug_id": 127,
                "notes": "Virtually every treatment protocol for lymphoma includes cyclophosphamide as lower, frequent doses (e.g., 4 days/week) or higher, pulse doses (e.g., once every 3 weeks)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:23:29.000000Z",
                "updated_at": "2020-05-06T18:23:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 322,
                "drug_id": 127,
                "notes": "Note of caution: in some citations, CHOP (cyclophosphamide + hydroxydaunorubicin [doxorubicin] + Oncovin [vincristine] + prednisone) is identical to COAP, because hydroxydaunorubicin = doxorubicin = Adriamycin.  However, in others, the A in COAP refers to ara-C, i.e., cytosine arabinoside, whereas in still others, the A in COPA refers to asparaginase.",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:23:32.000000Z",
                "updated_at": "2020-05-06T18:23:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 323,
                "drug_id": 127,
                "notes": "Hemorrhagic cystitis occurs more frequently in dogs with immune-mediated disease",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:23:35.000000Z",
                "updated_at": "2020-05-06T18:23:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 324,
                "drug_id": 127,
                "notes": "Cyclophosphamide tablets are large and should not be broken (to avoid human exposure through aerosol or direct contact), which means their use in cats and small dogs requires good pill administration technique, a bolus of water or food after dosing, etc.",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T18:23:37.000000Z",
                "updated_at": "2020-05-06T18:23:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 325,
                "drug_id": 127,
                "notes": "For immune-mediated hemolytic anemia, an alternative protocol is to administer a loading dose of 200 mg/m² IV on day 1 and then 50 mg/m² PO q 24h on days 2-4. No proven superiority to oral protocol, however.",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T18:23:39.000000Z",
                "updated_at": "2020-05-06T18:23:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 326,
                "drug_id": 127,
                "notes": "Giving early in the day is less likely to result in bladder toxin being retained in bladder overnight",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T18:23:42.000000Z",
                "updated_at": "2020-05-06T18:23:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 327,
                "drug_id": 128,
                "notes": "Considered one of the safest immune suppressants, but may be costly (especially for larger dogs)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:26:49.000000Z",
                "updated_at": "2020-05-06T18:26:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 328,
                "drug_id": 128,
                "notes": "Has been demonstrated to be safe with (and does not alter immune response to) rabies vaccination in dogs and cats, and calicivirus, herpesvirus-1, and feline leukemia vaccination in cats, but blunts or abolishes the response to newer feline immunodeficiency virus vaccination",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:26:51.000000Z",
                "updated_at": "2020-11-08T15:19:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 329,
                "drug_id": 128,
                "notes": "Coadministration with ketoconazole slows cyclosporine catabolism, allows dosage to be reduced by half (from q 12h to q 24h)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:26:53.000000Z",
                "updated_at": "2020-05-06T18:26:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 330,
                "drug_id": 128,
                "notes": "Inflammatory bowel disease does not alter pharmacokinetics of orally-administered cyclosporine in dogs",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T18:26:55.000000Z",
                "updated_at": "2020-11-08T15:19:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 331,
                "drug_id": 128,
                "notes": "Caution if diabetic because of chronic glucose-elevating effect of cyclosporine in dogs (10% increase in serum fructosamine)",
                "is_visible": 0,
                "display_order": 9,
                "created_at": "2020-05-06T18:26:58.000000Z",
                "updated_at": "2020-11-08T15:19:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 332,
                "drug_id": 128,
                "notes": "Older references may apply to cyclosporine in oil (Sandimmune) whereas current formulation is microemulsified cyclosporine (Neoral, Atopica). Microemulsified formulations are 1.7 to 2.4 times more bioavailable than Sandimmune. Regardless, therapeutic drug monitoring helps adjust dosages for optimal therapy.",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T18:27:00.000000Z",
                "updated_at": "2020-05-06T18:27:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 333,
                "drug_id": 128,
                "notes": "Clarithromycin and itraconazole decrease the necessary dose of cyclosporine in cats",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-06T18:27:03.000000Z",
                "updated_at": "2020-05-06T18:27:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 334,
                "drug_id": 129,
                "notes": "Appetite stimulant in cats: anecdotal use at 2 mg/CAT PO q 8-12h",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:28:49.000000Z",
                "updated_at": "2020-05-06T18:28:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 335,
                "drug_id": 130,
                "notes": "Clinically-important characteristic of this drug is its ability to cross the blood-brain barrier",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:30:58.000000Z",
                "updated_at": "2020-05-06T18:30:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 336,
                "drug_id": 130,
                "notes": "Chosen for renal lymphoma in cats because 40% of feline renal lymphoma cases develop central nervous system metastases (and cytosine arabinoside can delay/inhibit these)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:31:00.000000Z",
                "updated_at": "2020-05-06T18:31:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 337,
                "drug_id": 130,
                "notes": "Affects cells only in the S-phase of cell division",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:31:03.000000Z",
                "updated_at": "2020-05-06T18:31:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 338,
                "drug_id": 130,
                "notes": "Intrathecal administration likely unnecessary given cytosine arabinoside's excellent ability to cross the blood-brain barrier",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T18:31:05.000000Z",
                "updated_at": "2020-05-06T18:31:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 339,
                "drug_id": 131,
                "notes": "Anecdotal reports of use for treatment of melanoma in dogs (as in humans)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:31:54.000000Z",
                "updated_at": "2020-05-06T18:31:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 340,
                "drug_id": 131,
                "notes": "Synonym is DTIC; chemical name is 5-(3,3-dimethyl-1-triazeno)-imidazole-4-carboxamide",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:31:56.000000Z",
                "updated_at": "2020-05-06T18:31:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 341,
                "drug_id": 132,
                "notes": "Mechanism of action for immune-mediated hemolytic anemia is theorized to be a reduction in erythrocyte fragility, and an increase in circulating antithrombin concentrations (both extrapolated from human medicine)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:32:38.000000Z",
                "updated_at": "2020-05-06T18:32:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 342,
                "drug_id": 133,
                "notes": "When dantrolene is unavailable, acute malignant hyperthermia induced by inhalant anesthesia has been managed with acepromazine in the dog",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:33:37.000000Z",
                "updated_at": "2020-05-06T18:33:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 343,
                "drug_id": 133,
                "notes": "Anecdotal report of use in amantadine intoxication",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:33:39.000000Z",
                "updated_at": "2020-05-06T18:33:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 344,
                "drug_id": 133,
                "notes": "Greyhounds may be disproportionately more susceptible to malignant hyperthermia",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:33:41.000000Z",
                "updated_at": "2020-05-06T18:33:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 345,
                "drug_id": 133,
                "notes": "Urethral obstruction study of dantrolene in cats revealed that obstructed cats have urethral pressures that are no different from the urethral pressures of normal unobstructed cats",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T18:33:44.000000Z",
                "updated_at": "2020-05-06T18:33:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 346,
                "drug_id": 134,
                "notes": "Little used and poorly documented in veterinary medicine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:34:12.000000Z",
                "updated_at": "2020-05-06T18:34:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 347,
                "drug_id": 135,
                "notes": "Long-term clinical information regarding anti-darbepoetin antibodies is not yet available in dogs and cats",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:34:50.000000Z",
                "updated_at": "2020-05-06T18:34:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 348,
                "drug_id": 135,
                "notes": "Useful for chronic and/or stable anemia; acute, severe anemia may require blood transfusion first",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:34:52.000000Z",
                "updated_at": "2020-05-06T18:34:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 349,
                "drug_id": 136,
                "notes": "Lifelong treatment is required because Hepatozoon americanum is suppressed, not eliminated",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:35:18.000000Z",
                "updated_at": "2020-05-06T18:35:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 350,
                "drug_id": 137,
                "notes": "Can be expected to turn the urine a dark golden or brown color within 12h of starting treatment",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:36:00.000000Z",
                "updated_at": "2020-05-06T18:36:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 351,
                "drug_id": 138,
                "notes": "Also used for treatment of hormone-responsive perianal adenomas in dogs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:36:55.000000Z",
                "updated_at": "2020-05-06T18:36:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 352,
                "drug_id": 138,
                "notes": "Signs of improvement are expected in the 2-4 days following treatment; if none, a second dose at 1 week is indicated",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:36:57.000000Z",
                "updated_at": "2020-05-06T18:36:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 353,
                "drug_id": 138,
                "notes": "Human precaution: avoid contact with product due to risk of human (vet staff, client) exposure to progestagens and possible reproductive/obstetric effects",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:37:00.000000Z",
                "updated_at": "2020-05-06T18:37:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 354,
                "drug_id": 138,
                "notes": "Appears ineffective for treatment of hormone-responsive incontinence in male dogs (poor response in 2/2 dogs in one study)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T18:37:02.000000Z",
                "updated_at": "2020-05-06T18:37:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 355,
                "drug_id": 139,
                "notes": "Principal use is for osteoarthritis-associated pain and gait abnormalities in dogs (1-2 mg/kg PO q 24h) but the large studies that document this are on file with the manufacturer and not published in full",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:38:06.000000Z",
                "updated_at": "2020-05-06T18:38:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 356,
                "drug_id": 139,
                "notes": "COX-2 inhibitors like deracoxib can have antineoplastic effects because prostaglandin E2 (which COX-2 inhibitors suppress) favors angiogenesis, and possibly due to induction of apoptosis.",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:38:09.000000Z",
                "updated_at": "2020-05-06T18:38:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 357,
                "drug_id": 140,
                "notes": "Estimated content of 1 drop of topical solution = 1.5-4 µg",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:40:25.000000Z",
                "updated_at": "2020-05-06T18:40:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 358,
                "drug_id": 140,
                "notes": "Binds to vasopressin (V2) receptors in renal collecting ducts, promoting water reabsorption, and to V2 receptors in endothelium, promoting release of von Willebrand factor from endothelial cells",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:40:27.000000Z",
                "updated_at": "2020-05-06T18:40:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 359,
                "drug_id": 140,
                "notes": "Anecdotal usage of topical formulation onto conjunctiva (nasal drops instilled into conjunctival sac) as follows, for both diabetes insipidus and von Willebrand disease: 1-4 drops/patient (ranging from cat/small dog to very large dog) q 12h, adjusted up or down based on effect (polyuria/polydipsia, serum sodium concentration, etc.)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:40:30.000000Z",
                "updated_at": "2020-05-06T18:40:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 360,
                "drug_id": 140,
                "notes": "Anecdotal reports of oral administration for diabetes insipidus in dogs = 100 µg/DOG (=0.1 mg/DOG) PO q 12h",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T18:40:32.000000Z",
                "updated_at": "2020-05-06T18:40:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 361,
                "drug_id": 140,
                "notes": "Oral administration dubious (proteinaceous substance may be degraded in GI tract)",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T18:40:35.000000Z",
                "updated_at": "2020-05-06T18:40:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 362,
                "drug_id": 141,
                "notes": "Has no glucocorticoid activity, and low-dose oral prednisolone or dexamethasone co-treatment is necessary (lowest effective dosage)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:41:40.000000Z",
                "updated_at": "2020-05-06T18:41:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 363,
                "drug_id": 141,
                "notes": "Only 18% of dogs have required the manufacturer's recommended dosage of 2.2 mg/kg",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:41:42.000000Z",
                "updated_at": "2020-11-08T19:52:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 364,
                "drug_id": 141,
                "notes": "The intertreatment interval is <25 days (the manufacturer's recommended interval) in 67% of dogs and >25 days in 30% of dogs",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T18:41:45.000000Z",
                "updated_at": "2020-11-08T19:52:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 365,
                "drug_id": 142,
                "notes": "Like any chronically-used glucocorticoid, dexamethasone should be titrated to the lowest effective dosage; treatment of the underlying cause must be undertaken to the greatest possible extent; consideration should be given to the use of effective non-glucocorticoid alternatives; and the perceived benefit must outweigh the real potential for adverse effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:45:07.000000Z",
                "updated_at": "2020-05-06T18:45:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 366,
                "drug_id": 142,
                "notes": "Dexamethasone sodium phosphate is preferred for IV use because it does not contain propylene glycol",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:45:09.000000Z",
                "updated_at": "2020-05-06T18:45:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 367,
                "drug_id": 142,
                "notes": "For hypoadrenal crisis: published dosage is excessively high, and a positive therapeutic effect may be achieved more safely if 1-2 mg/kg IV is administered first and then repeated subsequently only if needed, based on response (patient's demeanor, blood pressure, urine production, etc.), while other supportive and specific treatments are underway",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:45:11.000000Z",
                "updated_at": "2020-05-06T18:45:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 368,
                "drug_id": 142,
                "notes": "Not detected by cortisol assay; this important difference means dexamethasone is well-suited to immediate treatment of hypoadrenocorticism (during ACTH stimulation test) because the pre- and post-ACTH blood samples, which are drawn for measuring cortisol levels, will not be affected by dexamethasone injection (vs. most other soluble glucocorticoids: methylprednisolone sodium succinate, hydrocortisone sodium succinate, prednisolone sodium succinate)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T18:45:14.000000Z",
                "updated_at": "2020-05-06T18:45:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 369,
                "drug_id": 142,
                "notes": "Glucocorticoid effects are approximately 4-10 times greater than for predniso(lo)ne",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T18:45:16.000000Z",
                "updated_at": "2020-05-06T18:45:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 370,
                "drug_id": 142,
                "notes": "Efficacy of dexamethasone alone as an immunosuppressant or antineoplastic is unclear from most clinical studies where combination therapy and multidrug protocols are used",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T18:45:18.000000Z",
                "updated_at": "2020-05-06T18:45:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 371,
                "drug_id": 142,
                "notes": "No concurrent mineralocorticoid effect; therefore, additional treatment (e.g., desoxycorticosterone pivalate) is needed concurrently for hypoadrenocorticism treatment",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-06T18:45:21.000000Z",
                "updated_at": "2020-05-06T18:45:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 372,
                "drug_id": 142,
                "notes": "Should not be used as sole drug for lymphoma if combination cancer chemotherapy is contemplated - increased likelihood of resistance to cancer chemotherapeutic agents (stimulation of glycoprotein p53/efflux pumps for drugs)",
                "is_visible": 0,
                "display_order": 8,
                "created_at": "2020-05-06T18:45:23.000000Z",
                "updated_at": "2020-05-06T18:45:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 373,
                "drug_id": 143,
                "notes": "Labeled dosage for dogs is according to body surface area: sedation and analgesia = 375 µg/m² IV or 500 µg/m² IM; premedication for general anesthesia = 125-375 µg/m² IM, depending on desired level of effect.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:48:12.000000Z",
                "updated_at": "2020-05-06T18:48:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 374,
                "drug_id": 143,
                "notes": "Dosage in µg/kg or µg/m² *decreases* with increasing body weight",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:48:14.000000Z",
                "updated_at": "2020-05-06T18:48:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 375,
                "drug_id": 143,
                "notes": "Clinical use suggests that dosages of 1/2 to 1/4 of the labeled dosage of 40 µg/kg IM for cats are sufficient for inducing moderate sedation for 10-20 minutes of acceptable chemical restraint",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:48:17.000000Z",
                "updated_at": "2020-05-06T18:48:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 376,
                "drug_id": 143,
                "notes": "Vasoconstriction maintains blood pressure even as sinus bradycardia occurs; if low heart rate is of concern, blood pressure can be measured (typically normal or high, reflecting adequate tissue perfusion)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T18:48:19.000000Z",
                "updated_at": "2020-05-06T18:48:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 377,
                "drug_id": 143,
                "notes": "Atipamezole dose for reversal is same volume of drug as dexmedetomidine (assuming Antisedan and Dexdomitor brands, respectively)",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T18:48:22.000000Z",
                "updated_at": "2020-05-06T18:48:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 378,
                "drug_id": 144,
                "notes": "Exact IV dosage (in mg) is 10 times the dosage of doxorubicin (in mg)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:49:13.000000Z",
                "updated_at": "2020-05-06T18:49:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 379,
                "drug_id": 145,
                "notes": "Unclear if benefit of eliminating episodes is predominantly for dog's benefit or owner's",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:49:59.000000Z",
                "updated_at": "2020-05-06T18:49:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 380,
                "drug_id": 145,
                "notes": "Schedule-II controlled drug",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:50:01.000000Z",
                "updated_at": "2020-05-06T18:50:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 381,
                "drug_id": 146,
                "notes": "Anecdotal use for cough suppression in dogs and cats: 1-2 mg/kg PO q 8-12h",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:50:36.000000Z",
                "updated_at": "2020-05-06T18:50:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 382,
                "drug_id": 146,
                "notes": "Historically considered only for its antitussive properties; now recognized to have central nervous system effects that may produce analgesia and/or behavior modification (and the potential for human abuse of the drug)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:50:38.000000Z",
                "updated_at": "2020-05-06T18:50:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 383,
                "drug_id": 147,
                "notes": "Treatment is given on an as-needed basis as supportive care while reversal of the inciting cause can be implemented",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:54:56.000000Z",
                "updated_at": "2020-05-06T18:54:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 384,
                "drug_id": 147,
                "notes": "Undiluted 50% dextrose may be irritating (causing phlebitis) and should be diluted prior to injecting IV; undiluted 50% dextrose is never given SC or IM",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:54:59.000000Z",
                "updated_at": "2020-05-06T18:54:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 385,
                "drug_id": 147,
                "notes": "1:9 dilution (e.g., 100 mL 50% dextrose in 900 mL sterile water) produces a 5% dextrose solution, which is isotonic",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T18:55:01.000000Z",
                "updated_at": "2020-05-06T18:55:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 386,
                "drug_id": 148,
                "notes": "Diazepam half-life in dogs is short (14-16 minutes after IV dose) but its metabolites desmethyldiazepam and oxazepam have much longer half-lives (2.2-2.8 hours and 3.5-5.1 hours, respectively, after IV dose) and all 3 have anticonvulsant effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:58:43.000000Z",
                "updated_at": "2020-05-06T18:58:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 387,
                "drug_id": 148,
                "notes": "Despite its appetite-stimulating effect in cats, diazepam significantly increases gastric transit time and may artifactually prolong retention of gastric contents on radiographic studies of cats",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T18:58:45.000000Z",
                "updated_at": "2020-05-06T18:58:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 388,
                "drug_id": 149,
                "notes": "Palliative effect; elimination of cause of hyperglycemia is treatment of choice",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T18:59:30.000000Z",
                "updated_at": "2020-05-06T18:59:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 389,
                "drug_id": 150,
                "notes": "No benefit of increasing dosage to 15 mg/kg (intraocular pressure change = same as for 10 mg/kg)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:00:06.000000Z",
                "updated_at": "2020-05-06T19:00:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 390,
                "drug_id": 150,
                "notes": "Not used in cats (choose topical treatments instead) because of a higher rate of adverse effects including panting, altered mentation, and gastrointestinal signs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:00:09.000000Z",
                "updated_at": "2020-05-06T19:00:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 391,
                "drug_id": 151,
                "notes": "Fenbendazole given 3 times (baseline, 3 weeks, 3 months) is likely as safe or safer, and as effective or more so",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:00:36.000000Z",
                "updated_at": "2020-05-06T19:00:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 392,
                "drug_id": 152,
                "notes": "Essentially totally replaced by once-monthly heartworm prophylactic drugs (convenience, broad spectrum)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:01:52.000000Z",
                "updated_at": "2020-05-06T19:01:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 393,
                "drug_id": 152,
                "notes": "Has microfilaricidal effects; therefore, heartworm microfilaria testing (difil, Knott's test) should be performed prior to treatment to avoid creating a false-negative result in a heartworm-infected dog. This was of greater concern historically than today now that antigen tests (which remain positive after diethylcarbamazine/microfilaricide treatment) are used most commonly.",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:01:54.000000Z",
                "updated_at": "2020-05-06T19:01:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 394,
                "drug_id": 153,
                "notes": "Bone marrow adverse effects are very uncommon at the chronic once-weekly dosage",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:03:01.000000Z",
                "updated_at": "2020-05-06T19:03:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 395,
                "drug_id": 153,
                "notes": "Used at same dosage for rapid reduction in size of perianal adenomas (or palliation of such tumors in male dogs whose owners do not consent to having the dog castrated)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:03:03.000000Z",
                "updated_at": "2020-05-06T19:03:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 396,
                "drug_id": 154,
                "notes": "Abstract presentation suggests 90% efficacy in eliminating spontaneously-occurring bacterial cystitis in dogs treated with difloxacin PO q h for 5-10 days, but dosage unspecified",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:03:28.000000Z",
                "updated_at": "2020-05-06T19:03:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 397,
                "drug_id": 155,
                "notes": "Dosage error alert 1: catastrophic (life-threatening) 10-fold decimal errors have occurred because of inattention regarding the dosage range, which is in hundredths/thousandths of a milligram; careful calculation and double-checking are essential to avoid such errors",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:04:37.000000Z",
                "updated_at": "2020-05-06T19:04:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 398,
                "drug_id": 155,
                "notes": "Dosage error alert 2: the 2 commercially-available tablet sizes, 0.125 mg and 0.25 mg, may be mistaken for each other and, of greatest concern, may lead to a 2-fold overdose (potentially life-threatening)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:04:40.000000Z",
                "updated_at": "2020-05-06T19:04:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 399,
                "drug_id": 155,
                "notes": "Dosage should be calculated based on estimated lean body weight (minus body fat, ascites, etc.)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:04:43.000000Z",
                "updated_at": "2020-05-06T19:04:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 400,
                "drug_id": 155,
                "notes": "Serum levels have only ever been extrapolated from human medicine, have not been shown to correlate to clinical outcomes in dogs or cats in any study ever published, and have been revised lower in human cardiology (which has failed to be carried over to veterinary cardiology); the utility of serum levels today is mainly for confirming toxicosis, whereas therapeutic effect is assessed based on clinical response (e.g., heart rate on electrocardiographic [ECG] monitoring in atrial fibrillation).  Low-dose digoxin plus either low-dose calcium-channel blockade or low-dose beta-blockade titrated to effect produces a more effective result with fewer adverse effects than high-dose digoxin",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T19:04:45.000000Z",
                "updated_at": "2020-05-06T19:04:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 401,
                "drug_id": 155,
                "notes": "Positive dose-response curve means that a \"threshold level\" of serum digoxin is not necessary, but that smaller, safer dosages may still produce beneficial therapeutic effects",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T19:04:47.000000Z",
                "updated_at": "2020-05-06T19:04:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 402,
                "drug_id": 155,
                "notes": "Therapeutic goal with atrial fibrillation is to achieve a contextually-appropriate heart rate without medication side-effects: target is a similar heart rate to that normally seen in the veterinary setting (via ECG) or, ideally, at home (Holter monitor)",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T19:04:50.000000Z",
                "updated_at": "2020-05-06T19:04:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 403,
                "drug_id": 155,
                "notes": "Oral elixir is rapidly bioavailable (detectable plasma levels 45 minutes after administration in the dog) and thus is preferred over tablet or intravenous (no longer manufactured, higher rate of adverse effects) formulations for acute treatment of rapid atrial fibrillation",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-06T19:04:52.000000Z",
                "updated_at": "2020-05-06T19:04:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 404,
                "drug_id": 156,
                "notes": "The cornerstone of successful treatment is titration to need, requiring periodic monitoring of serum calcium.  Typically this is performed weekly for the first 1-4 weeks, then monthly for 1-3 months, then every 3 months or sooner if required by onset of clinical signs consistent with hypocalcemia, owner concern, or both.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:06:02.000000Z",
                "updated_at": "2020-05-06T19:06:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 405,
                "drug_id": 157,
                "notes": "Diltiazem and sustained-release diltiazem are both diltiazem hydrochloride; only the vehicle is different.  Therefore, careful attention must be paid to the formulation type at the time of prescription, and brand name may be most helpful (e.g., Cardizem is diltiazem - regular, whereas Cardizem-CD is diltiazem - sustained release)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:07:09.000000Z",
                "updated_at": "2020-05-06T19:07:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 406,
                "drug_id": 157,
                "notes": "Intravenous diltiazem must always be given in small boluses, repeated (typically every 1-2 minutes) or IV CRI as necessary to effect; its negative chronotropic and inotropic effects may be excessive or even life-threatening if it is given in a single rapid bolus, especially if there is underlying myocardial disease (e.g., dilated cardiomyopathy)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:07:11.000000Z",
                "updated_at": "2020-05-06T19:07:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 407,
                "drug_id": 157,
                "notes": "Re-entrant tachycardia cases may respond variably from case to case; in 1 case report, a dog had reliable, repeatable termination of supraventricular tachycardia with every dose of diltiazem (0.16 mg/kg IV)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:07:13.000000Z",
                "updated_at": "2020-05-06T19:07:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 408,
                "drug_id": 157,
                "notes": "Results in cats with hypertrophic cardiomyopathy have not been reliably reproduced, leading many to question the applicability of results to all cats, but no study has been performed that matches the controlled, prospective methodology of the original study.",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T19:07:18.000000Z",
                "updated_at": "2020-05-06T19:07:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 409,
                "drug_id": 157,
                "notes": "In cats with hypertrophic cardiomyopathy, atenolol often is preferred over diltiazem because of dosing interval (q 12-24h for atenolol vs q 8h for diltiazem) and toxicity of sustained-release diltiazem.",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T19:07:20.000000Z",
                "updated_at": "2020-05-06T19:07:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 410,
                "drug_id": 158,
                "notes": "Diltiazem and sustained-release diltiazem are both diltiazem hydrochloride; only the vehicle is different. Therefore, careful attention must be paid to the formulation type at the time of prescription, and brand name may be most helpful (e.g., Cardizem is diltiazem - regular, whereas Cardizem-CD is diltiazem - sustained release)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:08:43.000000Z",
                "updated_at": "2020-05-06T19:08:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 411,
                "drug_id": 158,
                "notes": "The client compliance benefit of once-daily administration to cats led to widespread popularity in feline cardiology before pharmacokinetics were elucidated in this species; lack of efficacy and frequent toxic events (including common anecdotal reports of hepatic lipidosis associated with treatment) have eliminated this drug from use in cats",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:08:45.000000Z",
                "updated_at": "2020-05-06T19:08:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 412,
                "drug_id": 159,
                "notes": "Routine anecdotal use at lower dosage (e.g., 1/4 - 1/2 - 1 tablet for small-medium-large dog, PO, 30 minutes prior to travel) for prevention of motion sickness in dogs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:09:25.000000Z",
                "updated_at": "2020-05-06T19:09:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 413,
                "drug_id": 159,
                "notes": "Antihistamines are considered more effective for preventing nausea from peripheral effects (e.g., motion sickness) than central effects (e.g., antineoplastic chemotherapy)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:09:28.000000Z",
                "updated_at": "2020-05-06T19:09:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 414,
                "drug_id": 160,
                "notes": "Completely replaced by succimer for lead toxicosis",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:10:23.000000Z",
                "updated_at": "2020-05-06T19:10:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 415,
                "drug_id": 160,
                "notes": "Use for other heavy-metal intoxications in dogs, notably arsenic, is anecdotal but in all cases removal of the source is the cornerstone of therapy",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:10:25.000000Z",
                "updated_at": "2020-05-06T19:10:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 416,
                "drug_id": 160,
                "notes": "More effective when given soon after exposure, because it delays or prevents heavy metal-induced inhibition of enzyme systems much more effectively than reversing the process once toxicosis has occurred",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:10:28.000000Z",
                "updated_at": "2020-05-06T19:10:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 417,
                "drug_id": 160,
                "notes": "Very viscous (oil-based formulation)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T19:10:30.000000Z",
                "updated_at": "2020-05-06T19:10:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 418,
                "drug_id": 161,
                "notes": "Rapid transcutaneous absorption means that veterinary personnel, clients, and other people involved in the animal's care, as well as other animals in contact with the patient, must be prevented from touching the medication or the site of application (topical) to avoid unintended exposure",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:11:01.000000Z",
                "updated_at": "2020-05-06T19:11:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 419,
                "drug_id": 161,
                "notes": "Oral route not tolerated by some dogs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:11:03.000000Z",
                "updated_at": "2020-05-06T19:11:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 420,
                "drug_id": 161,
                "notes": "Similar dosage used anecdotally for systemic amyloidosis in cats",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:11:05.000000Z",
                "updated_at": "2020-05-06T19:11:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 421,
                "drug_id": 161,
                "notes": "Also used topically as vehicle for transcutaneous medication administration (e.g., fluocinolone-dimethyl sulfoxide [Synotic™]) and for reducing nonspecific local edema caused by trauma",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T19:11:07.000000Z",
                "updated_at": "2020-05-06T19:11:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 422,
                "drug_id": 162,
                "notes": "Less costly (but likely less effective for many applications in dogs) compared to atovaquone-azithromycin",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:12:28.000000Z",
                "updated_at": "2020-05-06T19:12:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 423,
                "drug_id": 162,
                "notes": "No significant effect on blood pressure or cholinesterase concentrations",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:12:30.000000Z",
                "updated_at": "2020-05-06T19:12:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 424,
                "drug_id": 163,
                "notes": "Intravenous use is possible but is generally not recommended: IV use in dogs and cats may cause acute hypotension",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:14:20.000000Z",
                "updated_at": "2020-05-06T19:14:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 425,
                "drug_id": 163,
                "notes": "First-generation antihistamines are more likely to cause drowsiness compared to second-generation antihistamines",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:14:23.000000Z",
                "updated_at": "2020-05-06T19:14:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 426,
                "drug_id": 163,
                "notes": "Although not predictably reliable as a sedative agent, individual dogs may show varying degrees of sedation/somnolence after dosing",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:14:25.000000Z",
                "updated_at": "2020-05-06T19:14:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 427,
                "drug_id": 163,
                "notes": "Sedative effect may contribute to efficacy as antipruritic",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T19:14:27.000000Z",
                "updated_at": "2020-05-06T19:14:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 428,
                "drug_id": 164,
                "notes": "Mechanism: selective microsomal triglyceride transfer protein inhibitor that blocks the assembly of lipoprotein particles and their release into the circulation",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:17:27.000000Z",
                "updated_at": "2020-05-06T19:17:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 429,
                "drug_id": 164,
                "notes": "Target weight loss: 0.7% body weight/week, with or without change in physical activity and diet",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:17:29.000000Z",
                "updated_at": "2020-05-06T19:17:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 430,
                "drug_id": 164,
                "notes": "Available only as oral solution, administered with oral dosing syringe",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:17:31.000000Z",
                "updated_at": "2020-05-06T19:17:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 431,
                "drug_id": 164,
                "notes": "Incidence of emesis generally increases with dose and decreases with treatment time. Elevations in hepatic transaminase activity are seen in dogs treated with more than 1.5 mg/kg dirlotapide daily, but are not associated with clinical signs or microscopic evidence of hepatic degeneration or necrosis.",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T19:17:33.000000Z",
                "updated_at": "2020-05-06T19:17:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 432,
                "drug_id": 165,
                "notes": "Commonly (and sometimes catastrophically) confused with dopamine - check label",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:18:16.000000Z",
                "updated_at": "2020-05-06T19:18:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 433,
                "drug_id": 165,
                "notes": "Lower starting dosage (e.g., 2.5 µg/kg/min) is anecdotally recommended in animals with diseased myocardium",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:18:18.000000Z",
                "updated_at": "2020-05-06T19:18:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 434,
                "drug_id": 165,
                "notes": "Positive inotropic effects are variable, and risk-benefit ratio varies greatly from case to case; constant ECG monitoring is warranted during infusion, with discontinuation if ventricular arrhythmia appears (or worsens)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:18:20.000000Z",
                "updated_at": "2020-05-06T19:18:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 435,
                "drug_id": 165,
                "notes": "Always diluted and administered by syringe pump or infusion pump",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T19:18:22.000000Z",
                "updated_at": "2020-05-06T19:18:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 436,
                "drug_id": 166,
                "notes": "Numerous case reports and anecdotal evidence but no objective large case series",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:18:56.000000Z",
                "updated_at": "2020-05-06T19:18:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 437,
                "drug_id": 166,
                "notes": "Same dosage is anecdotally reported for use in the cat",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:18:59.000000Z",
                "updated_at": "2020-05-06T19:18:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 438,
                "drug_id": 167,
                "notes": "Commonly (and sometimes catastrophically) confused with dobutamine - check label",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:19:52.000000Z",
                "updated_at": "2020-05-06T19:19:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 439,
                "drug_id": 167,
                "notes": "Previous descriptions of low/medium/high dosages for renal vasodilating/systemic vasoconstricting/direct cardiac effects have not proven to be clinically effective in dogs and cats, in part because such studies evaluated acute experimentally-induced renal injury in otherwise healthy kidneys and treatment was instituted a known, short period of time (e.g., 15 minutes) after renal injury",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:19:54.000000Z",
                "updated_at": "2020-05-06T19:19:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 440,
                "drug_id": 167,
                "notes": "Always diluted and administered by syringe pump or infusion pump",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:19:59.000000Z",
                "updated_at": "2020-05-06T19:19:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 441,
                "drug_id": 168,
                "notes": "Treatment of choice for spirocercosis",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:20:37.000000Z",
                "updated_at": "2020-05-06T19:20:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 442,
                "drug_id": 169,
                "notes": "1 drop contains approximately 1 mg doxapram",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:21:16.000000Z",
                "updated_at": "2020-11-08T20:35:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 443,
                "drug_id": 169,
                "notes": "Common anecdotal use for neonatal apnea in puppies/kittens (1 drop topically on tongue or injected into tongue base) is now a labeled contraindication because doxapram increases myocardial oxygen consumption and its efficacy is reduced in hypoxemic states",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:21:19.000000Z",
                "updated_at": "2020-05-06T19:21:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 444,
                "drug_id": 169,
                "notes": "Anecdotal use for treating overdoses of central nervous system depressant drugs",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:21:21.000000Z",
                "updated_at": "2020-05-06T19:21:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 445,
                "drug_id": 170,
                "notes": "Highly effective for lymphoma and widely used for other neoplasms; extensive potential adverse effect profile requires careful use and monitoring",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:23:27.000000Z",
                "updated_at": "2020-05-06T19:23:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 446,
                "drug_id": 170,
                "notes": "For smaller dogs (weighing less than 10 kg) and all cats, 1 mg/kg is preferred because 30 mg/m² produces a higher rate of toxicoses",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:23:29.000000Z",
                "updated_at": "2020-05-06T19:23:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 447,
                "drug_id": 170,
                "notes": "Cats may be more susceptible to toxicosis than dogs: subclinical adverse effects, notably cardiac and renal lesions, occur frequently (>99% in one study) in cats receiving therapeutic dosages of doxorubicin",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:23:31.000000Z",
                "updated_at": "2020-05-06T19:23:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 448,
                "drug_id": 170,
                "notes": "Slower infusion (e.g., 20-30 minutes) is associated with a greater area under the curve of plasma drug concentration in dogs and cats, i.e., is preferable over rapid infusion (10 minutes) or bolus",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T19:23:34.000000Z",
                "updated_at": "2020-05-06T19:23:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 449,
                "drug_id": 170,
                "notes": "Cardiac effects may be monitored via serial serum cardiac troponin-I levels",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T19:23:36.000000Z",
                "updated_at": "2020-05-06T19:23:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 450,
                "drug_id": 170,
                "notes": "Adjuvant treatment (with mastectomy) in feline mammary carcinoma provides no benefit over mastectomy alone",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T19:23:39.000000Z",
                "updated_at": "2020-05-06T19:23:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 451,
                "drug_id": 171,
                "notes": "All feline doses should be followed by food or water to ensure passage to stomach",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:27:51.000000Z",
                "updated_at": "2020-05-06T19:27:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 452,
                "drug_id": 171,
                "notes": "ACVIM consensus statement on treatment of ehrlichial diseases",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:27:53.000000Z",
                "updated_at": "2020-05-06T19:27:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 453,
                "drug_id": 171,
                "notes": "American Heartworm Society guidelines",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:27:57.000000Z",
                "updated_at": "2020-05-06T19:27:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 454,
                "drug_id": 171,
                "notes": "ACVIM consensus statement on treatment of leptospirosis",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T19:28:03.000000Z",
                "updated_at": "2020-05-06T19:28:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 455,
                "drug_id": 171,
                "notes": "Additional proposed properties of doxycycline (beyond antibacterial effects) include anti-inflammatory effects, which explains applications in noninfectious inflammatory disorders like osteoarthritis",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T19:28:08.000000Z",
                "updated_at": "2020-05-06T19:28:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 456,
                "drug_id": 172,
                "notes": "Generally replaced by serologic testing (acetylcholine receptor antibody titer), which is much more sensitive than edrophonium testing",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:29:04.000000Z",
                "updated_at": "2020-05-06T19:29:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 457,
                "drug_id": 172,
                "notes": "Anecdotal use for termination of acute, rapid supraventricular tachycardias in dogs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:29:06.000000Z",
                "updated_at": "2020-05-06T19:29:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 458,
                "drug_id": 173,
                "notes": "Routinely used at 0.5 mg/kg PO q 12h for perceived greater ACE inhibition",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:30:30.000000Z",
                "updated_at": "2020-05-06T19:30:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 459,
                "drug_id": 173,
                "notes": "Enalapril is renally excreted whereas many other ACE inhibitors are both renally and hepatically eliminated; this difference is of negligible clinical importance (only relevant during oliguric/anuric renal failure)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:30:32.000000Z",
                "updated_at": "2020-05-06T19:30:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 460,
                "drug_id": 173,
                "notes": "ACE inhibitors preferentially dilate efferent renal arteriole, which explains their utility in protein-losing nephropathies and the importance of not doing so excessively (which would reduce glomerular filtration rate)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:30:34.000000Z",
                "updated_at": "2020-05-06T19:30:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 461,
                "drug_id": 174,
                "notes": "Almost entirely replaced by clotrimazole infusion via endoscopic approach (clotrimazole is more widely available and cheaper, and procedure is less invasive)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:31:33.000000Z",
                "updated_at": "2020-05-06T19:31:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 462,
                "drug_id": 175,
                "notes": "Intravenous administration is off-label but commonly done in dogs and cats, using the injectable formulation and typically diluted 1:1 with sterile saline and infused slowly IV over 30 minutes (vomiting occurs at end of infusion in 13% of dogs, typically when high dosages [15-20 mg/kg] are administered)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:35:30.000000Z",
                "updated_at": "2020-05-06T19:35:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 463,
                "drug_id": 175,
                "notes": "Can cause a false-positive urine glucose result during treatment",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:35:33.000000Z",
                "updated_at": "2020-05-06T19:35:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 464,
                "drug_id": 175,
                "notes": "Although enrofloxacin is metabolized to ciprofloxacin (which is commonly prescribed in human medicine), enrofloxacin is contraindicated in humans due to central nervous system stimulation",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:35:35.000000Z",
                "updated_at": "2020-05-06T19:35:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 465,
                "drug_id": 175,
                "notes": "Enrofloxacin is metabolized to ciprofloxacin and both circulate simultaneously in dogs at a ratio of 60-70% enrofloxacin : 30-40% ciprofloxacin",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T19:35:37.000000Z",
                "updated_at": "2020-05-06T19:35:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 466,
                "drug_id": 175,
                "notes": "Appropriate doses of enrofloxacin when the minimum inhibitory concentrations are 0.12–0.15 or less, 0.19–0.24, 0.31–0.39 and 0.51–0.64 µg/mL would be 5, 10, 15 and 20 mg/kg, respectively",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T19:35:39.000000Z",
                "updated_at": "2020-05-06T19:35:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 467,
                "drug_id": 175,
                "notes": "Tissues with the highest enrofloxacin concentrations in the dog after intravenous administration are (in descending order): gallbladder wall (4 times higher than urine), urine, bile, stomach, and liver; tissues with the lowest concentration are aqueous humor, articular capsule, fat, tracheal cartilage, and tendon. ",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T19:35:42.000000Z",
                "updated_at": "2020-05-06T19:35:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 468,
                "drug_id": 175,
                "notes": "Chondrotoxicosis in juvenile dogs is poorly understood because it is supported by information that has not been published, and by similar effects observed with other fluoroquinolones",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-06T19:35:44.000000Z",
                "updated_at": "2020-05-06T19:35:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 469,
                "drug_id": 175,
                "notes": "Interdosage interval has been labeled variously as q 12h or q 24h; q 24h is currently preferred due to superior kill with higher concentration",
                "is_visible": 0,
                "display_order": 8,
                "created_at": "2020-05-06T19:35:47.000000Z",
                "updated_at": "2020-05-06T19:35:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 470,
                "drug_id": 176,
                "notes": "Highly individual responses and large variety of formulations on the market make wide-reaching conclusions for this class of compound challenging",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:36:39.000000Z",
                "updated_at": "2020-05-06T19:36:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 471,
                "drug_id": 177,
                "notes": "For cardiac arrest, repeating small doses (e.g., 0.01-0.02 mg/kg) as needed, up to q 3 minutes based on response, is safer (less arrhythmogenic) and likely as effective as larger dosages that were historically recommended but not objectively assessed",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:38:07.000000Z",
                "updated_at": "2020-05-06T19:38:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 472,
                "drug_id": 178,
                "notes": "Epirubicin is 4-epidoxorubicin, a semisynthetic derivative of doxorubicin created to minimize toxic effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:39:14.000000Z",
                "updated_at": "2020-05-06T19:39:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 473,
                "drug_id": 178,
                "notes": "Based on laboratory animal studies and human oncology patients, epirubicin has therapeutic effects that are similar to those of doxorubicin but a lower risk of causing myelotoxicosis and is 1.7-2 times less cardiotoxic",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:39:17.000000Z",
                "updated_at": "2020-05-06T19:39:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 474,
                "drug_id": 178,
                "notes": "These is theoretical support for substituting epirubicin for doxorubicin in all protocols if cost and availability are not prohibitive, but clinical veterinary data are lacking",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:39:19.000000Z",
                "updated_at": "2020-05-06T19:39:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 475,
                "drug_id": 179,
                "notes": "Erythromycin was widely advocated for treating Mycoplasma infections in cats and dogs by extrapolation from human medicine, but frequent gastrointestinal signs, and the superior efficacy of enrofloxacin, mean that it is virtually never used for this indication today",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:40:46.000000Z",
                "updated_at": "2020-05-06T19:40:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 476,
                "drug_id": 179,
                "notes": "Experimental studies involving IV infusions of erythromycin in dogs and cats suggest that an oral dosage of 0.5-1 mg/kg PO q 8h (i.e., well below anti-infective dosages) is appropriate for increasing lower esophageal sphincter tone and increasing gastrointestinal peristalsis",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:40:49.000000Z",
                "updated_at": "2020-05-06T19:40:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 477,
                "drug_id": 179,
                "notes": "There are many forms of erythromycin.  Parent (plain) erythromycin is inactivated by acidic conditions in the stomach; estolate and stearate salts, and enteric coated preparations, allow for better gastrointestinal absorption.  Erythromycin esters (e.g., erythromycin ethylsuccinate) are absorbed unchanged, and hydrolyzed to release the parent drug. There are no data to suggest the bioavailability of one oral form is greater than that of others.",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:40:51.000000Z",
                "updated_at": "2020-05-06T19:40:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 478,
                "drug_id": 179,
                "notes": "Parenteral forms for SC, IM injection can be irritating and the oral route is generally preferred.  Parenteral forms for IV administration are the gluceptate and lactobionate salts.",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T19:40:53.000000Z",
                "updated_at": "2020-05-06T19:40:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 479,
                "drug_id": 180,
                "notes": "A majority of dogs and cats develop anti-erythropoietin-antibody-associated pure red cell aplasia when treated with recombinant human erythropoietin for several months or longer",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:42:54.000000Z",
                "updated_at": "2020-05-06T19:42:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 480,
                "drug_id": 180,
                "notes": "A higher dosage (175-200 IU recombinant canine erythropoietin) has been tried for dogs that have developed intractable anemia due to treatment with recombinant human erythropoietin, with poor results (ineffective)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:42:56.000000Z",
                "updated_at": "2020-05-06T19:42:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 481,
                "drug_id": 180,
                "notes": "The goal of erythropoietin therapy is improvement -not necessarily complete normalization- in circulating hemoglobin concentration (i.e., hematocrit)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:42:59.000000Z",
                "updated_at": "2020-05-06T19:42:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 482,
                "drug_id": 181,
                "notes": "Beta-blocking effects are predominantly (almost exclusively) negative inotropic, rather than negative chronotropic, in dogs and cats, but most of these findings come from animals that are under general anesthesia for experimental manipulations and therefore the role of anesthesia (and vasodilation caused by inhalant anesthetics) cannot be discounted",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:44:09.000000Z",
                "updated_at": "2020-05-06T19:44:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 483,
                "drug_id": 181,
                "notes": "At higher dosages, may block beta-2 receptors (bronchial, vascular)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:44:12.000000Z",
                "updated_at": "2020-05-06T19:44:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 484,
                "drug_id": 181,
                "notes": "Half-life of esmolol in circulation is 9 minutes (humans)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:44:15.000000Z",
                "updated_at": "2020-05-06T19:44:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 485,
                "drug_id": 182,
                "notes": "Completely replaced by fomepizole for ethylene glycol toxicosis (except when fomepizole is unavailable or cost-prohibitive) due to greater efficacy and ease of administration and monitoring",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:45:19.000000Z",
                "updated_at": "2020-05-06T19:45:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 486,
                "drug_id": 182,
                "notes": "As with any antidote to ethylene glycol, it is essential to begin treatment immediately because the difference between survival and fatality can be measured in hours",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:45:22.000000Z",
                "updated_at": "2020-05-06T19:45:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 487,
                "drug_id": 182,
                "notes": "Widespread anecdotal reports of safe and effective use of 40% ethanol in the form of pure vodka (80 proof) or 95% ethyl alcohol (190 proof), due to commercial availability/rapid accessibility; aseptic technique (ideally with bacterial filter when infusing) remains essential",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:45:24.000000Z",
                "updated_at": "2020-05-06T19:45:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 488,
                "drug_id": 182,
                "notes": "Serum ethanol levels are routinely measured in essentially all human hospitals, which can help differentiate drowsiness/coma as a toxic effect of ethylene glycol (low/undetectable plasma ethanol levels) from similar signs due to ethanol treatment (therapeutic/supratherapeutic plasma ethanol levels: 35-50 mg/dL or higher)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T19:45:26.000000Z",
                "updated_at": "2020-05-06T19:45:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 489,
                "drug_id": 183,
                "notes": "Injectable form: labeled for use at 10-15 mg/kg SC as single injection in dogs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:46:07.000000Z",
                "updated_at": "2020-05-06T19:46:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 490,
                "drug_id": 183,
                "notes": "Not labeled for use in cats at any dosage",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:46:09.000000Z",
                "updated_at": "2020-05-06T19:46:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 491,
                "drug_id": 184,
                "notes": "Removed from the market in many countries due to severe teratogenic effects in humans",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:46:55.000000Z",
                "updated_at": "2020-05-06T19:46:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 492,
                "drug_id": 185,
                "notes": "Superior to cimetidine, ranitidine due to fewer drug interactions, longer duration of action",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:48:27.000000Z",
                "updated_at": "2020-11-11T18:54:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 493,
                "drug_id": 185,
                "notes": "Surpassed in efficacy by proton pump inhibitors (omeprazole, pantoprazole) for many/most indications",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:48:30.000000Z",
                "updated_at": "2020-11-11T18:54:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 494,
                "drug_id": 185,
                "notes": "No gastrointestinal prokinetic effects (vs. ranitidine and nizatidine)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T19:48:32.000000Z",
                "updated_at": "2020-11-11T18:54:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 495,
                "drug_id": 185,
                "notes": "Faster onset than proton pump inhibitors if immediate effect is desired (receptor is blocked more quickly than an enzyme system can be suppressed)",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T19:48:34.000000Z",
                "updated_at": "2020-11-11T18:54:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 496,
                "drug_id": 186,
                "notes": "Quantity (volume) of product can be prohibitive, and liquid forms of marine oil supplements that contain the appropriate quantity of EPA and DHA may be preferable as a pour-on supplement over food",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:49:39.000000Z",
                "updated_at": "2020-05-06T19:49:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 497,
                "drug_id": 186,
                "notes": "Benefit has also been demonstrated in dogs with osteoarthritis, hyperlipidemia, lymphoma, and cognitive dysfunction, but studies have involved omega-3 fatty acids incorporated directly into foods (i.e., mg/kg dosage not available)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:49:41.000000Z",
                "updated_at": "2020-05-06T19:49:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 498,
                "drug_id": 186,
                "notes": "National Research Council minimum and maximum for daily supplementation in dogs: 30-370 (mg/kg)^0.75, e.g., 170 mg/DOG/day minimum, 2080 mg/DOG/day maximum for 10 kg dog",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:49:43.000000Z",
                "updated_at": "2020-05-06T19:49:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 499,
                "drug_id": 187,
                "notes": "Tapeworm efficacy maybe greater at 15 mg/kg PO q 24h for 3 days",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:52:24.000000Z",
                "updated_at": "2020-05-06T19:52:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 500,
                "drug_id": 187,
                "notes": "No efficacy against Dirofilaria in dogs or Capillaria or Paragonimus in cats",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:52:29.000000Z",
                "updated_at": "2020-05-06T19:52:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 501,
                "drug_id": 188,
                "notes": "Can be very expensive (e.g., $2-3/400 mg tablet generic, $5-6/400 mg tablet brand name, corresponding to $4-18/day)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:53:10.000000Z",
                "updated_at": "2020-05-06T19:53:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 502,
                "drug_id": 188,
                "notes": "Different mechanism of action than phenobarbital or bromide (i.e.,  good add-on to one or both)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:53:12.000000Z",
                "updated_at": "2020-05-06T19:53:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 503,
                "drug_id": 189,
                "notes": "Spectrum of activity includes Giardia spp., roundworms (Toxocara canis, Toxocara cati, Toxascaris leonina), hookworms (Ancylostoma caninum, Uncinaria stenocephala), whipworms (Trichuris vulpis), canine lungworms (Oslerus [Filaroides] osleri), French heartworm (Angiostrongylus vasorum), feline lungworms (Aelurostrongylus abstrusus), and tapeworms (Taenia pisiformis)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T19:56:23.000000Z",
                "updated_at": "2020-05-06T19:56:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 504,
                "drug_id": 189,
                "notes": "Ineffective against the common tapeworm of dogs, Dipylidium caninum",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T19:56:25.000000Z",
                "updated_at": "2020-05-06T19:56:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 505,
                "drug_id": 189,
                "notes": "Commonly used for empirical antiparasitic treatment in dogs or cats with gastrointestinal signs before considering endoscopy/laparoscopy/laparotomy for biopsies",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T19:56:28.000000Z",
                "updated_at": "2020-05-06T19:56:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 506,
                "drug_id": 190,
                "notes": "Extreme precaution re. transdermal liquid form: can only be applied externally (intravenous administration likely fatal), and dosage is only for transdermal use (100-1000 times higher than IV dosage)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:00:33.000000Z",
                "updated_at": "2020-05-06T20:00:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 507,
                "drug_id": 190,
                "notes": "Patient with transdermal formulation (solution, patch, etc) should never be placed on a heating pad with the patch/treated area of skin on the pad (may alter/accelerate the rate of uptake), nor should transdermal patches ever be cut to reduce drug dose (accelerated drug delivery through leakage; an alternative may be to cover a part of the in-contact surface of the patch before application)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:00:35.000000Z",
                "updated_at": "2020-05-06T20:00:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 508,
                "drug_id": 190,
                "notes": "Bradycardia is common (as with many opiates) and glycopyrrolate or atropine co-treatment is appropriate to support cardiac output",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:00:38.000000Z",
                "updated_at": "2020-05-06T20:00:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 509,
                "drug_id": 190,
                "notes": "As with all opiates, the benefit of fentanyl analgesia must be titrated to avoid excessive treatment; historically, such risks were focused on respiratory depression, which actually requires very high dosages, but modern usage in dogs and cats identifies that major adverse effects include the client's decision to euthanize (when sedation is perceived as the pet's being gravely ill, or \"not himself/herself,\" despite all assurances to the contrary by the veterinarian), and self-inflicted injury by dogs and cats that experience opioid dysphoria, hypersensitivity to sound (when all noise is not suppressed as it should be in the recovery area/ICU), and other stimuli",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T20:00:41.000000Z",
                "updated_at": "2020-05-06T20:00:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 510,
                "drug_id": 191,
                "notes": "Daily dosage may be divided into q 12h if inappetence or vomiting occurs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:01:48.000000Z",
                "updated_at": "2020-05-06T20:01:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 511,
                "drug_id": 191,
                "notes": "325 mg ferrous sulfate contains 65 mg elemental iron (comparison: 325 mg iron gluconate contains 35 mg elemental iron)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:01:51.000000Z",
                "updated_at": "2020-05-06T20:01:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 512,
                "drug_id": 191,
                "notes": "A similar dosage is recommended anecdotally for cats",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:01:53.000000Z",
                "updated_at": "2020-05-06T20:01:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 513,
                "drug_id": 192,
                "notes": "Short-term therapy appears to increase all white blood cell line counts in dogs and cats but efficacy of these cells is unconfirmed and autoantibody formation in virtually all patients likely limits long-term and/or repeated treatment",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:03:40.000000Z",
                "updated_at": "2020-05-06T20:03:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 514,
                "drug_id": 192,
                "notes": "Potential for crossover autoantibody effects is unreported, but potential exists to elicit autoantibodies that also neutralize endogenous colony-stimulating factors, leading to intractable cytopenias",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:03:42.000000Z",
                "updated_at": "2020-05-06T20:03:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 515,
                "drug_id": 193,
                "notes": "Maximum reduction in prostatic hypertrophy occurs after 6-9 months of treatment in dogs, and return to pretreatment size occurs 8 weeks after cessation of treatment",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:04:23.000000Z",
                "updated_at": "2020-05-06T20:04:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 516,
                "drug_id": 193,
                "notes": "Dosage is often rounded to one 5 mg tablet PO q 24h for dogs weighing 5-50 kg",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:04:25.000000Z",
                "updated_at": "2020-05-06T20:04:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 517,
                "drug_id": 193,
                "notes": "Teratogenicity should be irrelevant since only males are treated - concern exists if inadvertent administration to pregnant female; mechanism of action (inhibition of conversion of testosterone to dihydrotestosterone by 5-alpha reductase) explains abnormalities of male genitalia that can occur in fetuses when the drug is consumed during gestation",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:04:27.000000Z",
                "updated_at": "2020-05-06T20:04:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 518,
                "drug_id": 193,
                "notes": "Unless future breeding is important, a better option is castration",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T20:04:29.000000Z",
                "updated_at": "2020-05-06T20:04:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 519,
                "drug_id": 194,
                "notes": "Anecdotal reports of efficacy against canine transitional cell carcinoma",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:05:02.000000Z",
                "updated_at": "2020-05-06T20:05:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 520,
                "drug_id": 194,
                "notes": "Drug is also labeled for use as post-operative anti-inflammatory for 3 days post-op",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:05:04.000000Z",
                "updated_at": "2020-05-06T20:05:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 521,
                "drug_id": 194,
                "notes": "Drug is only approved for dogs 7 months of age or older, due to hepatotoxicosis observed in puppies given standard dosages",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:05:06.000000Z",
                "updated_at": "2020-05-06T20:05:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 522,
                "drug_id": 195,
                "notes": "Prototheca spp. are resistant to fluconazole",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:08:17.000000Z",
                "updated_at": "2020-05-06T20:08:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 523,
                "drug_id": 195,
                "notes": "In cats with cryptococcosis, determining feline leukemia virus and feline immunodeficiency virus serologic results is prognostically important because positive results for either virus significantly reduces the likelihood of treatment success",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:08:19.000000Z",
                "updated_at": "2020-05-06T20:08:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 524,
                "drug_id": 195,
                "notes": "Cryptococcal antigen titers are useful for identifying treatment efficacy: successful treatment is accompanied by a decrease in titer of 1.3 orders of magnitude at 2 months of treatment and 2 orders of magnitude at 10 months of treatment (often becoming undetectable), vs. refractory treatment, where titers typically remain unchanged or increase at 6 months of treatment",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:08:22.000000Z",
                "updated_at": "2020-05-06T20:08:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 525,
                "drug_id": 196,
                "notes": "Since potassium is released by platelets during clotting, it is more accurate to measure potassium levels on unclotted blood (green-top tube, i.e., lithium heparin) than on a red-top tube (plain glass) in which blood clots and may produce pseudohyperkalemia; lavender top tubes are not appropriate because the anticoagulant is tripotassium EDTA (i.e., produces pseudohyperkalemia)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:09:21.000000Z",
                "updated_at": "2020-05-06T20:09:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 526,
                "drug_id": 196,
                "notes": "Frequency of rechecking physical exam and plasma electrolytes in hypoadrenocorticism patients is dependent on severity of illness, concurrent illnesses if any, financial and logistical owner parameters, and owners' ability to detect and manage signs of illness; a stable, clinically normal dog or cat with perceptive owners is typically re-evaluated every 6 months, barring problems",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:09:24.000000Z",
                "updated_at": "2020-11-11T20:57:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 527,
                "drug_id": 197,
                "notes": "Similar effect can be expected with reversing diazepam and oxazepam",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:10:00.000000Z",
                "updated_at": "2020-05-06T20:10:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 528,
                "drug_id": 197,
                "notes": "Elimination of flumazenil is reduced 40-60% in human patients with moderate liver disease and 75% in human patients with severe liver disease, and interdosage intervals should probably be adjusted accordingly in veterinary patients with moderate or severe liver disease requiring repeated doses",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:10:05.000000Z",
                "updated_at": "2020-05-06T20:10:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 529,
                "drug_id": 197,
                "notes": "To minimize the risk of excitatory reactions, flumazenil should be administered at least 45-60 minutes after the benzodiazepine was given, no sooner",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:10:07.000000Z",
                "updated_at": "2020-05-06T20:10:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 530,
                "drug_id": 198,
                "notes": "Extensive clinical experience of adverse effects (gastrointestinal ulceration and hemorrhage) and availability of other nonsteroidal anti-inflammatory drugs with similar or greater efficacy and far lower risk of adverse effects; therefore, no current application of this medication is considered superior to available alternatives in small animal medicine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:10:40.000000Z",
                "updated_at": "2020-05-06T20:10:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 531,
                "drug_id": 199,
                "notes": "Fluorouracil creams have been used for treating cutaneous papillomas in dogs, as have intralesional injections of fluorouracil gel for squamous cell carcinoma, but the exquisite toxicity of this drug when ingested by dogs means this type of treatment carries a very high risk if licking and ingesting of the product occur",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:11:56.000000Z",
                "updated_at": "2020-05-06T20:11:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 532,
                "drug_id": 200,
                "notes": "Long half life of norfluoxetine (the major, metabolically-active metabolite of fluoxetine) means that changes in dosage will take several weeks to alter steady-state plasma concentrations",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:13:38.000000Z",
                "updated_at": "2020-05-06T20:13:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 533,
                "drug_id": 200,
                "notes": "Veterinary dosage ranges (as labeled) are: 4-8 kg: 8 mg tablet; 8.1-16 kg: 16 mg tablet; 16.1-32 kg: 32 mg tablet; 32.1-64 kg: 64 mg tablet",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:13:40.000000Z",
                "updated_at": "2020-05-06T20:13:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 534,
                "drug_id": 200,
                "notes": "\"Scotty cramp,\" an exercise-induced onset of muscle hypertonia in Scottish terriers that spontaneously resolves with rest, has been associated with low serotonin concentrations in the spinal cord; this association explains the value of treatment with fluoxetine",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:13:43.000000Z",
                "updated_at": "2020-05-06T20:13:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 535,
                "drug_id": 200,
                "notes": "Gradual (slow) onset of action, as serotonin accumulates",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T20:13:45.000000Z",
                "updated_at": "2020-05-06T20:13:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 536,
                "drug_id": 201,
                "notes": "Approximately 90% of dogs and 65% of cats will tolerate placement of the mask the very first time",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:14:56.000000Z",
                "updated_at": "2020-05-06T20:14:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 537,
                "drug_id": 201,
                "notes": "Masks and spacers are available at: http://www.trudellmed.com/animal-health/aerodawg (for dogs) and http://www.trudellmed.com/animal-health/aerokat (for cats)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:14:59.000000Z",
                "updated_at": "2020-05-06T20:14:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 538,
                "drug_id": 201,
                "notes": "The benefit of fewer systemic adverse effects of inhaled corticosteroids must be weighed against the limited penetration of drug into tissues via this route, and some patients may benefit from a short course (<7 days) of systemically-administered corticosteroids intermittently during exacerbations of clinical signs that are refractory to aerosol treatment",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:15:06.000000Z",
                "updated_at": "2020-05-06T20:15:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 539,
                "drug_id": 201,
                "notes": "Optimizing the use of orally-administered corticosteroids is a clinical challenge because the benefit of decreased airway inflammation may prompt prolonged treatment with systemic corticosteroids, which frequently causes more panting, weight gain, and immune compromise, all of which worsen the long-term prognosis",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T20:15:09.000000Z",
                "updated_at": "2020-05-06T20:15:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 540,
                "drug_id": 202,
                "notes": "Since intestinal bacteria typically decrease cobalamin (vitamin B12) concentrations and increase folate concentrations, the combination of increased serum folate and decrease serum cobalamin has been considered suggestive of gastrointestinal bacterial overproliferation (intestinal dysbiosis/small intestinal bacterial overgrowth) but the accuracy of this test result is now considered low; exocrine pancreatic insufficiency is an important consideration for decreased blood folate levels",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:16:01.000000Z",
                "updated_at": "2020-05-06T20:16:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 541,
                "drug_id": 202,
                "notes": "Low serum folate levels should generally prompt a search for the cause (commonly: gastrointestinal, normal variation of no pathologic significance, or artifact) rather than an immediate decision to begin supplementation",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:16:03.000000Z",
                "updated_at": "2020-05-06T20:16:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 542,
                "drug_id": 202,
                "notes": "Cats have a metabolic folate requirement that is 4 times higher than that of the dog",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:16:05.000000Z",
                "updated_at": "2020-05-06T20:16:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 543,
                "drug_id": 202,
                "notes": "In cats, folate deficiency is prevented via dietary folate content of 1.36 mg/kg OF FOOD",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T20:16:08.000000Z",
                "updated_at": "2020-05-06T20:16:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 544,
                "drug_id": 202,
                "notes": "Vitamin B9 is a synonym for folate",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T20:16:12.000000Z",
                "updated_at": "2020-05-06T20:16:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 545,
                "drug_id": 203,
                "notes": "Good prognosis for recovery if treatment is begun within 3 hours (cats) or 8 hours (dogs) of ingestion; for example, in 1 study, no cat presented 4 hours or more after ingestion survived",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:17:13.000000Z",
                "updated_at": "2020-05-06T20:17:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 546,
                "drug_id": 203,
                "notes": "Onset of azotemia (whether during or after treatment) is strong negative predictor of survival in both dogs and cats",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:17:15.000000Z",
                "updated_at": "2020-05-06T20:17:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 547,
                "drug_id": 204,
                "notes": "Plasma anti-factor-Xa levels achieved in cats are: 0.3-0.5 mg/L and 1.1-1.3 mg/L (peak levels; prophylaxis dosage and existing thrombosis dosage, respectively) and 0.1-0.19 mg/L and 0.4-0.65 mg/L (trough levels; prophylaxis dosage and existing thrombosis dosage, respectively), and all but the latter (trough level of existing thrombosis dosage) are similar to human anti-factor-Xa plasma levels considered to represent adequate therapeutic effect",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:17:43.000000Z",
                "updated_at": "2020-05-06T20:17:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 548,
                "drug_id": 205,
                "notes": "Dietary sodium partially negates the effect of furosemide; therefore, low-sodium diets can keep a heart failure patient well-controlled with less furosemide, but not at the expense of appetite.  If a dog or cat refuses low sodium food, then higher sodium food is appropriate, and the furosemide dosage will need to be slightly higher",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:20:57.000000Z",
                "updated_at": "2020-05-06T20:20:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 549,
                "drug_id": 205,
                "notes": "Diuretic resistance and the braking effect refer to loss of efficacy of diuretics over time (in many dogs and cats: just 2 weeks of daily treatment cause a 30-50% decrease in furosemide efficacy); for this reason, recurrence of fluid retention may justify adjusting long-term treatment by adding a second diuretic (e.g., spironolactone or hydrochlorothiazide) or switching from furosemide to torsemide",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:20:59.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 550,
                "drug_id": 205,
                "notes": "Furosemide-induced fluid losses, while lifesaving, also trigger activation of the renin-angiotensin-aldosterone system; for this reason, all patients receiving furosemide should also receive an angiotensin converting enzyme inhibitor or an angiotensin receptor blocker concurrently",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T20:21:02.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 551,
                "drug_id": 205,
                "notes": "Intravenous fluids and furosemide are essentially never administered together, because their effects are exactly opposite (fluid and electrolyte restoration vs. elimination); the clinician must decide if the clinical circumstance requires fluid expansion (decrease furosemide and/or begin IV fluids) or fluid contraction (begin/increase furosemide)",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T20:21:04.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 552,
                "drug_id": 205,
                "notes": "For rapid elimination of fluid, furosemide is more effective for interstitial fluid (e.g., pulmonary edema), which cannot be accessed by centesis, whereas centesis is more effective for body cavity effusions (e.g., ascites, pleural effusion), which furosemide only eliminates gradually",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T20:21:06.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 553,
                "drug_id": 205,
                "notes": "The onset of action of injectable and oral furosemide is rapid (5 and 30 minutes, respectively) and the peak effect occurs quickly (30 minutes and 90 minutes, respectively); for this reason, furosemide is best administered in doses that are of a frequency that the owner and pet may tolerate, and this may be every 12 hours (most common), every 8 hours (more labor-intensive), or even every 6 hours (rarely practical, but optimal)",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-06T20:21:08.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 554,
                "drug_id": 206,
                "notes": "Experimental studies in healthy animals may suggest lack of efficacy for pain control, but this observation fails to take into account that gabapentin's analgesic properties are concentrated on damaged nerves",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:22:49.000000Z",
                "updated_at": "2020-05-06T20:22:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 555,
                "drug_id": 206,
                "notes": "Pregabalin has better bioavailability -and other pharmacokinetic advantages- over gabapentin, and may be preferable for these reasons",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:22:51.000000Z",
                "updated_at": "2020-05-06T20:22:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 556,
                "drug_id": 207,
                "notes": "Generally minimal efficacy in small animal oncology at present",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:24:34.000000Z",
                "updated_at": "2020-05-06T20:24:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 557,
                "drug_id": 208,
                "notes": "Gentamicin's extremely rapid onset of action (<1 hour for initial effects on fever and patient demeanor) make it an excellent choice for treatment of acute fulminant sepsis in a hydrated patient (minimizing risk of nephrotoxicosis) when Gram-negative infection can reasonably be suspected (e.g., bacterial translocation from gastrointestinal tract)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:25:50.000000Z",
                "updated_at": "2020-05-06T20:25:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 558,
                "drug_id": 208,
                "notes": "Once daily administration of a higher dosage produces less nephrotoxicosis than q 12h or q 8h lower dosages, and a greater antibacterial effect (concentration-dependent)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:25:52.000000Z",
                "updated_at": "2020-05-06T20:25:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 559,
                "drug_id": 208,
                "notes": "Maximum duration of treatment to reduce risk of nephrotoxicosis = 7-10 days (some clinicians prefer maximum 5 days' duration)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:25:57.000000Z",
                "updated_at": "2020-05-06T20:25:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 560,
                "drug_id": 208,
                "notes": "Synergistic effects with beta-lactam antibacterials (e.g., penicillins, cephalosporins) and complementary spectrum (gentamicin: Gram-negative; beta-lactam: Gram-positive and anaerobe) means cotreatment with a beta-lactam and gentamicin is a logical and generally optimal combination protocol",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T20:26:00.000000Z",
                "updated_at": "2020-05-06T20:26:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 561,
                "drug_id": 208,
                "notes": "Gentamicin is inactivated by pus and therefore cannot be expected to eliminate bacteria located in abscesses",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T20:26:02.000000Z",
                "updated_at": "2020-05-06T20:26:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 562,
                "drug_id": 208,
                "notes": "Minimal influence of obesity: serum gentamicin levels are similar in obese cats given 2.5 mg/kg SC as in lean cats given 3 mg/kg SC",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T20:26:04.000000Z",
                "updated_at": "2020-05-06T20:26:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 563,
                "drug_id": 208,
                "notes": "Reemerging frequency in gentamicin due to better understanding of pharmacokinetics (lowering risk of nephrotoxicosis via q 24h dosing), low cost, high efficacy, and especially ongoing susceptibility of organisms that are increasingly resistant to other antibacterials (notably methicillin-resistant bacteria)",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-06T20:26:08.000000Z",
                "updated_at": "2020-05-06T20:26:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 564,
                "drug_id": 208,
                "notes": "No effect on anaerobic bacteria (because they lack transmembrane pumps to internalize aminoglycosides)",
                "is_visible": 0,
                "display_order": 8,
                "created_at": "2020-05-06T20:26:11.000000Z",
                "updated_at": "2020-05-06T20:26:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 565,
                "drug_id": 209,
                "notes": "Niche for this drug appears to be cats with diabetes mellitus whose owners are unable/unwilling to give insulin injections; oral glipizide treatment can provide benefit and clinical improvement in many cats, though most are likely to eventually require insulin (or deteriorate and be euthanized) after months to years",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:27:27.000000Z",
                "updated_at": "2020-05-06T20:27:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 566,
                "drug_id": 210,
                "notes": "Glucagon testing of client-owned diabetic cats shows that 3/4 have type I (insulin-dependent) diabetes mellitus whereas 1/4 have type II (non-insulin-dependent, often obesity-related) diabetes mellitus",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:28:57.000000Z",
                "updated_at": "2020-05-06T20:28:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 567,
                "drug_id": 210,
                "notes": "Human indications for glucagon treatment include severe hypoglycemia and deliberate reduction of GI tract motility to enhance diagnostic testing (e.g., contrast radiographic studies)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:28:59.000000Z",
                "updated_at": "2020-05-06T20:28:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 568,
                "drug_id": 210,
                "notes": "Published dosage of 5 ng/kg/min IV CRI, adjusted to effect, is lower than most other applications but is correct (1 mg/mL glucagon in 1 L sterile saline = 1 µg/L; CRI administered accordingly)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:29:02.000000Z",
                "updated_at": "2020-05-06T20:29:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 569,
                "drug_id": 211,
                "notes": "Mild immediate benefit for relief of clinical signs; long-term advantage of chondroprotection is convincing (both with daily supplementation and incorporation into diet) but does not outweigh the influence of genetic makeup and physical trauma/owner ability to limit exercise and keep a lean body condition",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:29:30.000000Z",
                "updated_at": "2020-05-06T20:29:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 570,
                "drug_id": 211,
                "notes": "One Cosequin DS capsule contains glucosamine hydrochloride 500 mg, chondroitin sulfate 400 mg, and manganese ascorbate 75 mg; one Dasuquin (large dog) tablet contains glucosamine hydrochloride 900 mg, chondroitin sulfate 350 mg, and avocado/soybean unsaponifiables 90 mg; one Dasuquin (small/medium dog) tablet contains glucosamine hydrochloride 600 mg, chondroitin sulfate 250 mg, and avocado/soybean unsaponifiables 45 mg; and one Dasuquin (cat) tablet contains glucosamine hydrochloride 125 mg, chondroitin sulfate 100 mg, and avocado/soybean unsaponifiables 25 mg",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:29:32.000000Z",
                "updated_at": "2020-05-06T20:29:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 571,
                "drug_id": 211,
                "notes": "A placebo effect has been identified because clients observe equal degrees of clinical improvement when their dogs receive either glucosamine or placeb",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:29:35.000000Z",
                "updated_at": "2020-11-12T20:39:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 572,
                "drug_id": 212,
                "notes": "Does not cross the placenta or blood-brain barrier",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:30:45.000000Z",
                "updated_at": "2020-05-06T20:30:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 573,
                "drug_id": 212,
                "notes": "In dogs, antibradycardia effects last 2-4 hours and antisecretory effects last 4-8 hours",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:30:47.000000Z",
                "updated_at": "2020-05-06T20:30:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 574,
                "drug_id": 212,
                "notes": "The same dosage is recommended for other applications, including offsetting the bradycardia and other parasympathetic effects of carbamates (e.g., imidocarb toxicosis) and support of severely bradycardia/unstable sick sinus syndrome patients awaiting pacemaker implantation",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:30:50.000000Z",
                "updated_at": "2020-05-06T20:30:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 575,
                "drug_id": 213,
                "notes": "Veterinary product is licensed for use in dogs in the U.S. and Canada but not the U.K.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:31:29.000000Z",
                "updated_at": "2020-05-06T20:31:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 576,
                "drug_id": 214,
                "notes": "Essential to public health and safety: must not be handled by women that are/may be pregnant, as fetal effects are possible with exposure",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:33:50.000000Z",
                "updated_at": "2020-05-06T20:33:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 577,
                "drug_id": 214,
                "notes": "Different forms of gonatropin-releasing hormone preparations exist, and their biological potency varies; gonadorelin (hydrochloride; e.g., Fertagyl, Factrel) is identical to gonadotropin-releasing hormone, whereas other products (e.g., gonadorelin diacetate tetrahydrate [Cystorelin], etc.) are GnRH analogs; for example, buserelin (Receptal) is 50 times more potent than gonadorelin, based on follicle stimulating hormone and luteinizing hormone responses; therefore, safe use requires confirming the type of analog prior to administration (see information for each application: \"Dosage applies to [gonadorelin/buserelin/etc.] product\")",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:33:53.000000Z",
                "updated_at": "2020-05-06T20:33:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 578,
                "drug_id": 214,
                "notes": "Any treatment of cryptorchidism that conserves the testicle (i.e., other than castration) is controversial because the trait is hereditary and the risk of testicular neoplasia in the undescended testicle is not eliminated even with orchiopexy",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:33:55.000000Z",
                "updated_at": "2020-05-06T20:33:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 579,
                "drug_id": 215,
                "notes": "Similar dosage and treatment pattern used in the dog",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:34:41.000000Z",
                "updated_at": "2020-05-06T20:34:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 580,
                "drug_id": 215,
                "notes": "Available as a sustained-release transdermal patch for long-lasting nausea suppression (no definitive data in dogs or cats)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:34:43.000000Z",
                "updated_at": "2020-05-06T20:34:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 581,
                "drug_id": 215,
                "notes": "Maropitant may be considered preferable (broader spectrum of antiemetic activity)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:34:45.000000Z",
                "updated_at": "2020-05-06T20:34:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 582,
                "drug_id": 216,
                "notes": "Microsize formulations (e.g., Fulvicin U/F) are much less bioavailable (and therefore are given in dosages that are 2-4 times higher for equivalent effect) than the ultramicrosize formulations (e.g., Gris-PEG), and it is important to prescribe and use the correct formulation associated with the specified dosage to avoid toxicosis or undertreatment",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:35:42.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 583,
                "drug_id": 216,
                "notes": "Typical dosage for microsize formulation = 50 mg/kg PO q 24h, whereas typical dosage for ultramicrosize formulation = 10-25 mg/kg PO q 24h",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:35:44.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 584,
                "drug_id": 216,
                "notes": "Microsize formulation brand names, by country: Grisovin (Australia, Austria, Argentina); Fulcin, Sporostatin (Brazil); Fulvicin (Canada), Grisefuline (France); Gricin, Griseo, Likuden M (Germany); Grisenova (Greece); CP-Griseo (Hong Kong); Grisactin, Walavin (India); Fulcin, Fungistop, Rexavin (Indonesia); Grisol (Ireland); Grifulin (Israel); Fulcin, Grisovina-FP (Italy); Grisuvin, Krisovin, Medofulvin (Malaysia); Fulcin, Fulsivin, Grisovin (Mexico), Grisovex, Grisovin (Philippines); Fulcin, Grisomicron, Grisovin, Medofulvin (Portugal); Fulcin (Spain); Aofen, Fulvin, Fungivin, Fusovin, Grifulvin, Griseo-Med, Grisflavin, Grisin, Grisovex, KB Vinecin, Mycovin, Mycoxyl, Neofulvin, Trivanex (Thailand); Gefulvin, Grisovin (Turkey); Fulvicin U/F*, Grifulvin V, griseofulvin powder*, Grisovex, Grysio* (U.S.A.); Fulsovin, Grisol (U.K.); Fulvin, Grisovin (Venezuela) (veterinary products are marked with an asterisk)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T20:35:46.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 585,
                "drug_id": 216,
                "notes": "Ultramicrosize formulation brand names, by country: Griseofort, Grivin, Mycostop (Indonesia); Grivin (Malaysia); Grivin (Thailand); Gris-PEG (U.S.A.)",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T20:35:48.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 586,
                "drug_id": 216,
                "notes": "Absorption is optimized when griseofulvin is taken with a fat-containing meal",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T20:35:51.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 587,
                "drug_id": 216,
                "notes": "When treating dermatophytosis involving the claws, treatment must be continued until the claw has grown out (e.g., 5-6 months)",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-06T20:35:53.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 588,
                "drug_id": 216,
                "notes": "Ineffective against Malassezia yeasts",
                "is_visible": 0,
                "display_order": 8,
                "created_at": "2020-05-06T20:35:56.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 589,
                "drug_id": 216,
                "notes": "Abstract presentation suggests efficacy for juvenile cellulitis in dogs: 33% cured in 4 weeks, 66% improved in 4 weeks",
                "is_visible": 0,
                "display_order": 9,
                "created_at": "2020-05-06T20:35:58.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 590,
                "drug_id": 216,
                "notes": "Terbinafine appears to provide faster beneficial effects and less toxicity than griseofulvin for dermatophytosis in small animals",
                "is_visible": 0,
                "display_order": 10,
                "created_at": "2020-05-06T20:36:01.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 591,
                "drug_id": 217,
                "notes": "Hematocrit is not useful for monitoring; measure blood hemoglobin content (typically in g/dL) and multiply by 3 for approximate hematocrit equivalent, in %",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:37:20.000000Z",
                "updated_at": "2020-05-06T20:37:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 592,
                "drug_id": 217,
                "notes": "Shelf life of unopened product: 3 years; shelf life of opened product: 24 hours",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:37:23.000000Z",
                "updated_at": "2020-05-06T20:37:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 593,
                "drug_id": 218,
                "notes": "Heparin, which has been used for decades both in human and veterinary medicine, may also be referred to as unfractionated heparin, to set it apart from the more recently introduced low-molecular-weight heparins",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:38:56.000000Z",
                "updated_at": "2020-05-06T20:38:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 594,
                "drug_id": 218,
                "notes": "Titration of heparin dose to individual need (to achieve circulating levels of anti-factor- Xa of 0.35-0.7 U/mL) provides a significant survival benefit in hypercoagulable dogs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:38:58.000000Z",
                "updated_at": "2020-05-06T20:38:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 595,
                "drug_id": 218,
                "notes": "Administration of heparin at a fixed dosage/kg (either as IV boluses or IV CRI) repeatably fails to produce adequate anticoagulation in dogs, or, at higher dosages that achieve anticoagulation, produces hemorrhage in several patients; Titration of dosage to individual response (based on anti-factor-Xa activity) provides the safest and most effective method of using heparin",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:39:00.000000Z",
                "updated_at": "2020-05-06T20:39:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 596,
                "drug_id": 218,
                "notes": "Heparin therapy is ineffective, and indeed has procoagulant effects, in the absence of antithrombin (e.g., protein-losing nephropathy or enteropathy); the mechanism of action of heparin is antithrombin potentiation, and in such diseases, other anticoagulants (e.g., warfarin) or antiplatelet drugs (e.g., aspirin, clopidogrel) are preferred",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T20:39:05.000000Z",
                "updated_at": "2020-05-06T20:39:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 597,
                "drug_id": 218,
                "notes": "Treatment with heparin should always be accompanied by (even preceded by) correction of underlying causes/triggers, such as removal of jugular catheters if possible, and treatment of the primary disease process",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T20:39:07.000000Z",
                "updated_at": "2020-05-06T20:39:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 598,
                "drug_id": 218,
                "notes": "Heparin does not dissolve blood clots, but it slows the formation/growth of new blood clots and this favors endogenous fibrinolysis/gradual dissolution of existing clots",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T20:39:09.000000Z",
                "updated_at": "2020-05-06T20:39:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 599,
                "drug_id": 218,
                "notes": "Disseminated intravascular coagulation in dogs is also an indication for heparin treatment, using the same dosage and guidelines indicated for cats",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-06T20:39:12.000000Z",
                "updated_at": "2020-05-06T20:39:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 600,
                "drug_id": 219,
                "notes": "There are two commercial low-molecular-weight products, and each has its own biological activity (and therefore dosage range and effects): dalteparin (Fragmin™, Pfizer) and enoxaparin (Lovenox™, Sanofi; also generic); the dosages are not interchangeable, but the risk of confusion is low because dalteparin is available in IU/mL concentrations whereas enoxaparin is available in mg/mL concentrations",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:40:30.000000Z",
                "updated_at": "2020-05-06T20:40:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 601,
                "drug_id": 219,
                "notes": "Low-molecular-weight heparin can be considerably more expensive than unfractionated heparin, with therapeutic advantages that remain unproven in veterinary medicine",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:40:32.000000Z",
                "updated_at": "2020-05-06T20:40:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 602,
                "drug_id": 219,
                "notes": "Heparin therapy is ineffective, and indeed has procoagulant effects, in the absence of antithrombin (e.g., protein-losing nephropathy or enteropathy); the mechanism of action of heparin is antithrombin potentiation, and in such diseases, other anticoagulants (e.g., warfarin) or antiplatelet drugs (e.g., aspirin, clopidogrel) are preferred",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:40:35.000000Z",
                "updated_at": "2020-05-06T20:40:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 603,
                "drug_id": 219,
                "notes": "Treatment with heparin should always be accompanied by (even preceded by) correction of underlying causes/triggers, such as removal of jugular catheters if possible, and treatment of the primary disease process",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T20:40:37.000000Z",
                "updated_at": "2020-05-06T20:40:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 604,
                "drug_id": 219,
                "notes": "Heparin does not dissolve blood clots, but it slows the formation/growth of new blood clots and this favors endogenous fibrinolysis/gradual dissolution of existing clots",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T20:40:39.000000Z",
                "updated_at": "2020-05-06T20:40:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 605,
                "drug_id": 220,
                "notes": "Drug is mostly obsolete, is not as well-absorbed orally, and has been replaced by other penicillins (e.g., amoxicillin, amoxicillin-clavulanate) or other antibacterials; its biological activity is considered 1:1 equivalent to that of ampicillin",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:41:09.000000Z",
                "updated_at": "2020-05-06T20:41:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 606,
                "drug_id": 221,
                "notes": "May trigger greater vasodilation (and reflex responses, e.g., sympathetic activation/tachycardia) compared to amlodipine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:42:44.000000Z",
                "updated_at": "2020-05-06T20:42:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 607,
                "drug_id": 221,
                "notes": "Main advantages are low cost (especially apparent with large dogs/large dosages) and rapid onset of activity (can be dissolved in tap water and given orally by syringe or stomach tube in acute refractory congestive heart failure patients who are normotensive/hypertensive)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:42:47.000000Z",
                "updated_at": "2020-05-06T20:42:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 608,
                "drug_id": 221,
                "notes": "Heart disease may decrease tolerance for vasodilation compared to healthy dogs: hydralazine was associated with collapse (3 mg/kg PO q 12h) and decreased activity (1.5 mg/kg PO q 12h) in a dog with mitral regurgitation who ultimately tolerated 0.7 mg/mg PO q 12h, with decreased mitral regurgitant fraction on echocardiography",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:42:49.000000Z",
                "updated_at": "2020-05-06T20:42:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 609,
                "drug_id": 222,
                "notes": "Paradox of treating an intensely polyuric disorder like diabetes insipidus using diuretic therapy with hydrochlorothiazide is explained as follows: mild dehydration induced by diuretic triggers increased sodium resorption in the proximal renal tubules, \"upstream\" from the distal tubule/collecting duct location where antidiuretic hormone deficiency exerts its effect (diabetes insipidus)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:44:03.000000Z",
                "updated_at": "2020-05-06T20:44:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 610,
                "drug_id": 222,
                "notes": "In congestive heart failure, it is usually implemented as a second (\"add-on\") diuretic when chronic pulmonary edema/pleural effusion/ascites is inadequately controlled using furosemide alone",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:44:05.000000Z",
                "updated_at": "2020-05-06T20:44:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 611,
                "drug_id": 223,
                "notes": "Routinely and safely used at this dosage for other noninfectious causes of cough in which the animal is systemically well but the cough is persistent, unaccompanied by dyspnea, and bothersome to the owner and the pet (\"nuisance cough\", e.g., chronic sterile bronchitis of older small-breed dogs)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:44:48.000000Z",
                "updated_at": "2020-05-06T20:44:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 612,
                "drug_id": 223,
                "notes": "Hydrocodone-homatropine combination (Hycodan™, Tussigon™) is a commonly-used antitussive in practice",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:44:51.000000Z",
                "updated_at": "2020-05-06T20:44:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 613,
                "drug_id": 223,
                "notes": "Often underused in dogs with chronic sterile bronchial disease or collapsing trachea, where no adverse effects (sedation, inappetence, constipation) are noted but case is considered \"refractory\" even though drug is being given at low dosage and/or less often than q 6h",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:44:53.000000Z",
                "updated_at": "2020-05-06T20:44:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 614,
                "drug_id": 224,
                "notes": "Will be detected in cortisol assay (pre- and post- ACTH samples in ACTH stimulation measuring blood cortisol levels), falsely elevating the cortisol measurement and falsely ruling out hypoadrenocorticism; for this reason, either dexamethasone should be used initially (first dose, during the 1-2 hours the ACTH stimulation test is performed) or hydrocortisone sodium succinate should only be administered after the \"post-\" blood sample has been drawn",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:45:59.000000Z",
                "updated_at": "2020-05-06T20:45:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 615,
                "drug_id": 224,
                "notes": "A single injection of hydrocortisone sodium succinate will not interfere meaningfully with the hypothalamic-pituitary-adrenal axis",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:46:01.000000Z",
                "updated_at": "2020-05-06T20:46:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 616,
                "drug_id": 224,
                "notes": "Prior chronic treatment with oral glucocorticoids (e.g., for 30 days) will accelerate the catabolism of hydrocortisone sodium succinate, warranting higher dosages",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:46:03.000000Z",
                "updated_at": "2020-05-06T20:46:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 617,
                "drug_id": 224,
                "notes": "Has minimal mineralocortioid properties; desoxycorticosterone pivalate or fludrocortisone necessary to provide longer-term mineralocorticoid source",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T20:46:08.000000Z",
                "updated_at": "2020-05-06T20:46:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 618,
                "drug_id": 225,
                "notes": "Apomorphine (dogs, cats) or alpha-2 adrenergic agonists (cats only; dexmedetomidine, xylazine) are effective alternatives for inducing vomiting",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:46:41.000000Z",
                "updated_at": "2020-05-06T20:46:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 619,
                "drug_id": 226,
                "notes": "As with all opiates, the degree of hydromorphone analgesia provided must be titrated to avoid excessive treatment; historically, such risks were focused on respiratory depression, which actually requires very high dosages, but modern usage in dogs and cats identifies that major adverse effects include the client's decision to euthanize (when sedation is perceived as the pet's being gravely ill, or \"not himself/herself,\" despite all assurances to the contrary by the veterinarian), and self-inflicted injury by dogs and cats that experience opioid dysphoria, hypersensitivity to sound (when all noise is not suppressed as it should be in the recovery area/ICU), and other stimuli",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:48:18.000000Z",
                "updated_at": "2020-05-06T20:48:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 620,
                "drug_id": 226,
                "notes": "Hydromorphone provides analgesic effects similar to those of oxymorphone, and may trigger more vomiting, but is usually much less costly",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:48:21.000000Z",
                "updated_at": "2020-05-06T20:48:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 621,
                "drug_id": 226,
                "notes": "Importance of route of administration in cats: SC route causes more vomiting (83% of cats) and marked dysphoria (33% of cats) compared to IM or IV routes",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:48:25.000000Z",
                "updated_at": "2020-05-06T20:48:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 622,
                "drug_id": 227,
                "notes": "Empirical daily dosage is 20 mL/kg/24h for dogs, 5 mL/kg/24h for cats; at higher dosages, concerns exist regarding platelet effects and risk of bleeding (both species) and iatrogenic volume overload/congestive heart failure (cats)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:49:40.000000Z",
                "updated_at": "2020-05-06T20:49:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 623,
                "drug_id": 227,
                "notes": "To reduce risk of hypotension and vomiting in cats, infusion should be given over 5-10 minutes or longer",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:49:42.000000Z",
                "updated_at": "2020-05-06T20:49:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 624,
                "drug_id": 228,
                "notes": "\"Polycythemia\" is often misused for indicating an elevated red blood cell count or packed cell volume, but \"erythrocytosis\" is the correct term (whereas polycythemia refers to increases in all blood cell lines)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:52:21.000000Z",
                "updated_at": "2020-05-06T20:52:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 625,
                "drug_id": 228,
                "notes": "Treatment alternative for erythrocytosis is periodic phlebotomy",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:52:23.000000Z",
                "updated_at": "2020-05-06T20:52:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 626,
                "drug_id": 228,
                "notes": "In cats, the most commonly well-tolerated dosages that remain effective are either 100 mg/CAT PO 3 times weekly or 500 mg/CAT PO q 7 days; some cats require up to 500 mg/CAT PO q 4 days",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:52:26.000000Z",
                "updated_at": "2020-05-06T20:52:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 627,
                "drug_id": 228,
                "notes": "Toceranib appear to be a better alternative for mast cell tumor treatment",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T20:52:28.000000Z",
                "updated_at": "2020-05-06T20:52:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 628,
                "drug_id": 229,
                "notes": "Use in dermatology carries limited efficacy, but offers a non-steroidal option and is very safe in otherwise healthy dogs given the dosages noted here",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:53:22.000000Z",
                "updated_at": "2020-05-06T20:53:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 629,
                "drug_id": 229,
                "notes": "First-generation antihistamines are more likely to cause drowsiness compared to second-generation antihistamines",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:53:24.000000Z",
                "updated_at": "2020-05-06T20:53:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 630,
                "drug_id": 229,
                "notes": "Central nervous system depression may contribute to antipruritic/antimutilating action",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:53:26.000000Z",
                "updated_at": "2020-05-06T20:53:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 631,
                "drug_id": 230,
                "notes": "Unpublished observations support a similar dosage and interval for treating susceptible bacterial urinary tract infections and wounds in dogs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:54:05.000000Z",
                "updated_at": "2020-05-06T20:54:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 632,
                "drug_id": 230,
                "notes": "Leishmaniasis application: ibafloxacin 20 mg/kg/day PO plus metronidazole 25 mg/kg/day PO for 30 days in dogs resistant to meglumine antimoniate produces resolution of clinical signs in all dogs and absence of recurrent clinical signs for >90 days after end of treatment; PCR for Leishmania becomes negative in 66% of blood samples and 50% of lymph node samples post-treatment in such dogs (Annali della Facoltà di Medicina veterinaria, Universita di Pisa, LIX/20. pp. 171-179, 2007. ISSN 0365-4729)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:54:08.000000Z",
                "updated_at": "2020-05-06T20:54:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 633,
                "drug_id": 231,
                "notes": "Overdoses caused by the patient (dog/cat chews bottle of ibuprofen) or the owner (gives dog/cat ibuprofen as attempt at treatment) are both very common causes of intoxication (ranging from mild to severe based on dosage and duration of administration, typically) in small animal practice",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:54:42.000000Z",
                "updated_at": "2020-05-06T20:54:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 634,
                "drug_id": 231,
                "notes": "Risk factors for greater severity of toxicosis include large dose ingested, unknown time since ingestion, and German shepherd breed (whereas Labrador retriever breed has a comparatively lower incidence of severe toxicosis)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:54:45.000000Z",
                "updated_at": "2020-05-06T20:54:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 635,
                "drug_id": 232,
                "notes": "Ifosfamide is highly toxic to urothelium (more so than cyclophosphamide) and for this reason, it is coadministered with mesna, a binder of acrolein (urotheliotoxic compound)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:57:02.000000Z",
                "updated_at": "2020-05-06T20:57:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 636,
                "drug_id": 232,
                "notes": "Generally well-tolerated when administered according to protocol, but modest beneficial effects in most cases",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:57:04.000000Z",
                "updated_at": "2020-05-06T20:57:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 637,
                "drug_id": 233,
                "notes": "New to veterinary medicine; safety and efficacy of long-term use unproven",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:57:33.000000Z",
                "updated_at": "2020-05-06T20:57:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 638,
                "drug_id": 234,
                "notes": "Convenience of oral solution for accuracy of small doses and tolerance of oral administration, especially in cats and smaller dogs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:58:14.000000Z",
                "updated_at": "2020-05-06T20:58:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 639,
                "drug_id": 235,
                "notes": "Some or all of benefit is likely due to cotreatment drug (e.g., doxycycline) in some indications, like canine ehrlichiosis, since studies of monotherapy have shown low/zero rates of treatment response",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T20:59:43.000000Z",
                "updated_at": "2020-05-06T20:59:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 640,
                "drug_id": 235,
                "notes": "May be effective for Pneumocystis carinii pneumonia in dogs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T20:59:47.000000Z",
                "updated_at": "2020-05-06T20:59:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 641,
                "drug_id": 235,
                "notes": "Ineffective for elimination of Hepatozoon infection in dogs",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T20:59:49.000000Z",
                "updated_at": "2020-05-06T20:59:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 642,
                "drug_id": 236,
                "notes": "One case description of using this drug at 33 mg/kg IV q 8h X 19 days in a dog, but this high dosage likely reflects use of imipenem product, not imipenem-cilastatin",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:00:45.000000Z",
                "updated_at": "2020-05-06T21:00:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 643,
                "drug_id": 236,
                "notes": "Expensive",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:00:47.000000Z",
                "updated_at": "2020-05-06T21:00:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 644,
                "drug_id": 237,
                "notes": "Several imipramine derivatives (amitriptyline, clomipramine, doxepin) also have pharmacologic importance",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:01:40.000000Z",
                "updated_at": "2020-05-06T21:01:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 645,
                "drug_id": 237,
                "notes": "May have value for treatment of chronic pain",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:01:42.000000Z",
                "updated_at": "2020-05-06T21:01:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 646,
                "drug_id": 237,
                "notes": "May be an alternative for treating incontinence due to urethral sphincter mechanism incompetence in dogs that are intolerant to phenylpropanolamine",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T21:01:45.000000Z",
                "updated_at": "2020-05-06T21:01:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 647,
                "drug_id": 237,
                "notes": "Long onset of action (2-4 weeks); clients should be encouraged to be patient and not give up on treatment",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T21:01:47.000000Z",
                "updated_at": "2020-05-06T21:01:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 648,
                "drug_id": 238,
                "notes": "Single dose appears to be safe but repeated treatments increase likelihood of hypersensitivity reaction, which may be severe",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:03:57.000000Z",
                "updated_at": "2020-05-06T21:03:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 649,
                "drug_id": 238,
                "notes": "Expensive; although it is as effective as vincristine, human immunoglobulin G is considered second-line treatment for immune-mediated thrombocytopenia due to cost",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:03:59.000000Z",
                "updated_at": "2020-11-16T01:50:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 650,
                "drug_id": 239,
                "notes": "Long-acting soluble human insulin analog that binds to albumin and thus has prolonged activity",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:04:54.000000Z",
                "updated_at": "2020-05-06T21:04:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 651,
                "drug_id": 239,
                "notes": "Never mix or dilute because altering the pH will alter the pharmacokinetics of the preparation",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:04:57.000000Z",
                "updated_at": "2020-05-06T21:04:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 652,
                "drug_id": 239,
                "notes": "In cats, detemir may provide a more stable glycemic response than glargine",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T21:04:59.000000Z",
                "updated_at": "2020-05-06T21:04:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 653,
                "drug_id": 239,
                "notes": "FlexPen formulation expires 42 days after opening (kept at room temperature), vs. 30 days in refrigerator for similar formulation of glargine",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T21:05:01.000000Z",
                "updated_at": "2020-05-06T21:05:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 654,
                "drug_id": 240,
                "notes": "Recombinant human insulin analog with up to 24-hour effect of single injection in humans (asparagine at position A21 is replaced by glycine and 2 arginines are added to the C-terminus of the B-chain)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:05:44.000000Z",
                "updated_at": "2020-05-06T21:05:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 655,
                "drug_id": 240,
                "notes": "Never mix or dilute because altering the pH will alter the pharmacokinetics of the preparation",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:05:46.000000Z",
                "updated_at": "2020-05-06T21:05:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 656,
                "drug_id": 240,
                "notes": "Lower potency (compared to lente or PZI insulins) in many cats",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T21:05:49.000000Z",
                "updated_at": "2020-05-06T21:05:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 657,
                "drug_id": 241,
                "notes": "Both recombinant human insulin analog and pork-derived insulin preparations are on the market; pharmacokinetics and pharmacologic effects may differ depending on origin, but greatest attention must be paid to concentration (40 IU/mL for vet vs. 100 IU/mL for human)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:06:32.000000Z",
                "updated_at": "2020-05-06T21:06:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 658,
                "drug_id": 241,
                "notes": "Vetsulin and Caninsulin are both pork-source lente insulin (both 40 IU/mL)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:06:34.000000Z",
                "updated_at": "2020-05-06T21:06:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 659,
                "drug_id": 241,
                "notes": "In cats, generally replaced by glargine or detemir insulins",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T21:06:36.000000Z",
                "updated_at": "2020-05-06T21:06:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 660,
                "drug_id": 242,
                "notes": "Recombinant human insulin analog similar to regular/crystalline insulin (i.e., intended for acute glycemic control) but reversal of position of 2 amino acids confers an even faster onset of action",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:07:07.000000Z",
                "updated_at": "2020-05-06T21:07:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 661,
                "drug_id": 242,
                "notes": "Rapid-acting insulin administration commonly decreases blood potassium concentrations via increasing the activity of transcellular membrane pump that moves potassium into the cell; normokalemic (and certainly hypokalemic) patients who are given regular insulin should receive potassium supplementation and serum potassium monitoring, and, barring hyperphosphatemia, some component of potassium replacement should be potassium phosphate to reduce the risk of hypophosphatemia (and subsequent hemolysis)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:07:09.000000Z",
                "updated_at": "2020-05-06T21:07:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 662,
                "drug_id": 243,
                "notes": "Now recombinant human insulin analog, previously pork- or beef-derived (pharmacokinetics and pharmacologic effects may differ depending on origin)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:07:58.000000Z",
                "updated_at": "2020-05-06T21:07:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 663,
                "drug_id": 243,
                "notes": "Generally less effective/less consistent effect in cats when compared to glargine or detemir insulins",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:08:01.000000Z",
                "updated_at": "2020-05-06T21:08:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 664,
                "drug_id": 244,
                "notes": "Both recombinant human insulin analog and pork-derived insulin preparations are on the market; pharmacokinetics and pharmacologic effects may differ depending on origin, but greatest attention must be paid to concentration (40 IU/mL for vet vs. 100 IU/mL for human)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:08:54.000000Z",
                "updated_at": "2020-05-06T21:08:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 665,
                "drug_id": 244,
                "notes": "Pro-Zinc is recombinant human PZI (100 IU/mL), whereas PZI-VET is beef-pork source PZI (40 IU/mL)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:08:57.000000Z",
                "updated_at": "2020-05-06T21:08:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 666,
                "drug_id": 245,
                "notes": "Constant-rate intravenous administration of regular crystalline insulin appears to be the optimal method of insulin administration for controlling severe diabetic ketoacidosis",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:10:42.000000Z",
                "updated_at": "2020-05-06T21:10:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 667,
                "drug_id": 245,
                "notes": "Rapid-acting insulin administration commonly decreases blood potassium concentrations via increasing the activity of transcellular membrane pump that moves potassium into the cell; normokalemic (and certainly hypokalemic) patients who are given regular insulin should receive potassium supplementation and serum potassium monitoring, and, barring hyperphosphatemia, some component of potassium replacement should be potassium phosphate to reduce the risk of hypophosphatemia (and subsequent hemolysis)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:10:45.000000Z",
                "updated_at": "2020-05-06T21:10:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 668,
                "drug_id": 245,
                "notes": "Typical cat dose is 10 units (0.1 mL) per day, or 1 unit (0.01 mL) per IM dose (during hospitalization for diabetic ketoacidosis)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T21:10:48.000000Z",
                "updated_at": "2020-05-06T21:10:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 669,
                "drug_id": 246,
                "notes": "Both recombinant human insulin analog and pork-derived insulin preparations exist but both are much less popular for cats today due to alternative, superior insulin types; pharmacokinetics and pharmacologic effects may differ depending on recombinant vs. animal origin",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:11:14.000000Z",
                "updated_at": "2020-05-06T21:11:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 670,
                "drug_id": 247,
                "notes": "Conversion: 1 µg = 270200 IU",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:13:00.000000Z",
                "updated_at": "2020-05-06T21:13:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 671,
                "drug_id": 247,
                "notes": "Interest in pigmented epidermal plaques lies in association with papillomavirus (as possible cause) and malignant transformation of such plaques to squamous cell carcinoma",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:13:02.000000Z",
                "updated_at": "2020-05-06T21:13:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 672,
                "drug_id": 248,
                "notes": "Recombinant feline interferon-omega used in essentially all applications (in both dogs and cats)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:15:47.000000Z",
                "updated_at": "2020-05-06T21:15:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 673,
                "drug_id": 249,
                "notes": "Generally replaced by newer antifungals (e.g., azoles) that are more effective",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:16:40.000000Z",
                "updated_at": "2020-05-06T21:16:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 674,
                "drug_id": 249,
                "notes": "Sodium and potassium iodides available, with equivalent applications",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:16:43.000000Z",
                "updated_at": "2020-05-06T21:16:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 675,
                "drug_id": 250,
                "notes": "Should not be confused with the more potent fluid extract",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:17:19.000000Z",
                "updated_at": "2020-05-06T21:17:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 676,
                "drug_id": 250,
                "notes": "Generally replaced by hydrogen peroxide PO (at-home emergency, or dogs in hospital) or alpha-agonists (xylazine or dexmedetomidine, IM, for cats in hospital) for greater efficacy",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:17:21.000000Z",
                "updated_at": "2020-05-06T21:17:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 677,
                "drug_id": 251,
                "notes": "For neonatal iron deficiency: iron supplementation in queens either before or after birth is not recommended (ineffective) because in cats, maternal transfer of iron in utero is independent of serum iron values",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T21:18:08.000000Z",
                "updated_at": "2020-05-06T21:18:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 678,
                "drug_id": 251,
                "notes": "Injection can be painful; warming prior to administration (syringe in clinician's axilla for 5 minute) can help reduce discomfort",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T21:18:10.000000Z",
                "updated_at": "2020-05-06T21:18:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 679,
                "drug_id": 252,
                "notes": "For euvolemic/well-hydrated patient; in hypovolemic patient, priority is re-establishment of adequate blood pressure and tissue perfusion through IV fluid administration",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:02:59.000000Z",
                "updated_at": "2020-05-06T22:02:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 680,
                "drug_id": 253,
                "notes": "Isosorbide-hydralazine cotreatment is a common substitute for ACE inhibition in humans with heart disease but efficacy in dogs has not been shown",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:03:27.000000Z",
                "updated_at": "2020-05-06T22:03:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 681,
                "drug_id": 254,
                "notes": "Severe teratogenicity potential in pregnant women limits the use of all retinoids in veterinary medicine (e.g., human patients taking isotretinoin enter the iPLEDGE program, providing signed confirmation of negative pregnancy test results, of 2 confirmed forms of contraception, etc. prior to each prescription fill/refill)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:04:37.000000Z",
                "updated_at": "2020-05-06T22:04:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 682,
                "drug_id": 255,
                "notes": "Also considered the treatment of choice for \"walking\" histoplasmosis, coccidioidomycosis, and cryptococcosis in dogs and cats (i.e., not so severely ill as to require hospitalization +/- amphotericin B therapy)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:07:39.000000Z",
                "updated_at": "2020-05-06T22:07:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 683,
                "drug_id": 255,
                "notes": "Important to give with food to optimize absorption",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:07:42.000000Z",
                "updated_at": "2020-05-06T22:07:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 684,
                "drug_id": 255,
                "notes": "Fluconazole is generally preferred over itraconazole if there is central nervous system, ocular, or prostatic involvement (better drug penetration); IV amphotericin B is preferred if there is severe systemic illness requiring hospitalization, and renal function is adequate",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T22:07:44.000000Z",
                "updated_at": "2020-05-06T22:07:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 685,
                "drug_id": 255,
                "notes": "For blastomycosis in dogs, itraconazole is as efficacious as fluconazole; itraconazole treatment is shorter (median: 138 days , vs. 183 days for fluconazole) but currently in the U.S, is more expensive (median: 138 days , vs. 183 days for fluconazole)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T22:07:47.000000Z",
                "updated_at": "2020-11-16T02:56:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 686,
                "drug_id": 255,
                "notes": "Several anecdotal reports of therapeutic superiority of brand-name itraconazole over generic in dogs, but objective testing shows suitable equivalency of generic and brand-name (https://www.ncbi.nlm.nih.gov/pubmed/24428315); however, compounded itraconazole as tested was unacceptable, with only 5% of the peak serum concentration achieved as compared to brand name itraconazole",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T22:07:52.000000Z",
                "updated_at": "2020-11-16T02:56:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 687,
                "drug_id": 255,
                "notes": "If testing for ABCB1 mutation is not possible but higher dosages must be used, some clinicians use a daily escalating dose approach (0.1 mg/kg, then 0.2 mg/kg, then 0.3 mg/kg) and observe that no adverse effects are produced before continuing with full treatment",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T22:07:54.000000Z",
                "updated_at": "2020-05-06T22:07:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 688,
                "drug_id": 256,
                "notes": "Dosage errors are common and life-threatening; with typical Ivomec or similar products (1% solution = 10 mg/mL), a large dog should receive 0.3-0.6 mL total per dose, never 3-6 mL",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:13:36.000000Z",
                "updated_at": "2020-05-06T22:13:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 689,
                "drug_id": 256,
                "notes": "Most applications (other than heartworm prophylaxis) are off-label and require using large-animal formulations (e.g., Ivomec)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:13:38.000000Z",
                "updated_at": "2020-05-06T22:13:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 690,
                "drug_id": 256,
                "notes": "Ineffective against tapeworms (Dipylidium caninum, Taenia spp.) and variably effective (50%) against Toxascaris leonina roundworms in dogs",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T22:13:41.000000Z",
                "updated_at": "2020-05-06T22:13:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 691,
                "drug_id": 256,
                "notes": "Ineffective against tapeworms (Dipylidium caninum, Hydatigera taeniaeformis, Spirometra mansonoides), coccidia (Isospora spp.), and lungworm (Aelurostrongylus spp.) in cats",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T22:13:45.000000Z",
                "updated_at": "2020-05-06T22:13:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 692,
                "drug_id": 256,
                "notes": "Risk of ivermectin toxicosis can be assessed beforehand by screening the patient for the ABCB1 gene mutation (cheek swab[1])",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T22:13:47.000000Z",
                "updated_at": "2020-05-06T22:13:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 693,
                "drug_id": 256,
                "notes": "Adages to predict sensitivity to ivermectin toxicosis (e.g., \"white feet, don't treat\") have been shown to be unreliable; for example, while 75% of collies have the ABCB1 mutation and are ivermectin-sensitive, only 15% of Shetland sheepdogs are similarly affected",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T22:13:52.000000Z",
                "updated_at": "2020-05-06T22:13:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 694,
                "drug_id": 256,
                "notes": "Other application: oral administration to cats suspected or confirmed of having intracranial Cuterebra myasis",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-06T22:13:54.000000Z",
                "updated_at": "2020-05-06T22:13:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 695,
                "drug_id": 256,
                "notes": "For demodicosis, 0.3 mg/kg dosage instead of 0.6 mg/kg appears to produce similar therapeutic effects with fewer adverse effects",
                "is_visible": 0,
                "display_order": 8,
                "created_at": "2020-05-06T22:13:56.000000Z",
                "updated_at": "2020-05-06T22:13:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 696,
                "drug_id": 257,
                "notes": "Unproven efficacy but generally considered harmless when given correctly as indicated (nonprescription/over-the-counter product); caution if combinations with other active ingredients",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:15:14.000000Z",
                "updated_at": "2020-05-06T22:15:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 697,
                "drug_id": 257,
                "notes": "Some formulations contain bismuth subsalicylate, which could potentially be toxic if administered to cats",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:15:16.000000Z",
                "updated_at": "2020-05-06T22:15:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 698,
                "drug_id": 258,
                "notes": "Reliable sedative/induction agent; limitations include longer recovery period and absence of reversal agent",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:17:59.000000Z",
                "updated_at": "2020-05-06T22:17:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 699,
                "drug_id": 258,
                "notes": "Recovery from ketamine anesthesia can be marked by dysphoria and self-injury, warranting precautions (or the use of an alternative drug)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:18:01.000000Z",
                "updated_at": "2020-05-06T22:18:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 700,
                "drug_id": 258,
                "notes": "Low-dosage IV administration appears safe and carries minimal cardiovascular impact, unlike higher-dosage, IM dosages",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T22:18:04.000000Z",
                "updated_at": "2020-05-06T22:18:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 701,
                "drug_id": 258,
                "notes": "Potential for human abuse",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T22:18:06.000000Z",
                "updated_at": "2020-05-06T22:18:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 702,
                "drug_id": 259,
                "notes": "Never use ketoconazole and o,p'DDD simultaneously in hyperadrenocorticism because ketoconazole can inhibit generation of active o,p'DDD metabolite by P450 inhibition",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:20:59.000000Z",
                "updated_at": "2020-05-06T22:20:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 703,
                "drug_id": 259,
                "notes": "Due to differences in efficacy and side-effects, generally replaced by itraconazole or fluconazole for antifungal applications, and by trilostane or o,p'DDD for hyperadrenocorticism",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:21:01.000000Z",
                "updated_at": "2020-05-06T22:21:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 704,
                "drug_id": 259,
                "notes": "Fungistatic drug; inhibits fungal growth by interfering with sterol synthesis (sterol synthesis inhibition confers value in hyperadrenocorticism treatment)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T22:21:03.000000Z",
                "updated_at": "2020-05-06T22:21:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 705,
                "drug_id": 259,
                "notes": "Absorption enhanced by dietary fat; therefore, should be given with a meal",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T22:21:06.000000Z",
                "updated_at": "2020-05-06T22:21:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 706,
                "drug_id": 260,
                "notes": "Available as human over-the-counter drug (e.g., Orudis-KT)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:22:37.000000Z",
                "updated_at": "2020-05-06T22:22:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 707,
                "drug_id": 261,
                "notes": "Endogenously-produced antibacterial found principally in milk",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:24:07.000000Z",
                "updated_at": "2020-05-06T22:24:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 708,
                "drug_id": 261,
                "notes": "Structurally similar to transferrin, but with 250 times greater iron-binding capacity",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:24:10.000000Z",
                "updated_at": "2020-05-06T22:24:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 709,
                "drug_id": 261,
                "notes": "Variable effects (positive or neutral) on enteric health, including decrease in mucosal inflammatory cell infiltrate and decreased shedding of potentially pathogenic bacteria in some studies of dogs",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T22:24:12.000000Z",
                "updated_at": "2020-05-06T22:24:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 710,
                "drug_id": 262,
                "notes": "Titration is essential because 50% of owners of dogs who discontinue this medication do so because of diarrhea (i.e., excessive effect)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:25:56.000000Z",
                "updated_at": "2020-05-06T22:25:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 711,
                "drug_id": 262,
                "notes": "Prevention of constipation in cats: same dosage as in dogs (0.5-1 mL/kg, titrated according to subsequent fecal consistency to achieve formed but soft stool)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:26:01.000000Z",
                "updated_at": "2020-05-06T22:26:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 712,
                "drug_id": 262,
                "notes": "For hepatic encephalopathy prevention, a logical combination is lactulose with an antibacterial that reduces ammonia-producing colonic bacteria (e.g., metronidazole, with dosage adjusted [i.e., usually halved] to compensate for compromised liver function)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T22:26:03.000000Z",
                "updated_at": "2020-05-06T22:26:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 713,
                "drug_id": 263,
                "notes": "May be used concurrently with corticosteroids but generally used instead of corticosteroids altogether (when excessive/adverse steroid effects become intolerable)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:28:11.000000Z",
                "updated_at": "2020-05-06T22:28:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 714,
                "drug_id": 264,
                "notes": "Reverses effects of tetrahydrofolate reductase-inhibiting chemotherapeutic drugs (e.g., methotrexate)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:29:07.000000Z",
                "updated_at": "2020-05-06T22:29:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 715,
                "drug_id": 264,
                "notes": "Most effective within 24-48h of methotrexate ingestion",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:29:09.000000Z",
                "updated_at": "2020-05-06T22:29:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 716,
                "drug_id": 265,
                "notes": "Mostly replaced by other anthelmintics for parasitology applications, and underused/underexplored for immunomodulatory effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:30:51.000000Z",
                "updated_at": "2020-05-06T22:30:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 717,
                "drug_id": 265,
                "notes": "Taste of oral formulations is unpleasant",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:30:53.000000Z",
                "updated_at": "2020-05-06T22:30:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 718,
                "drug_id": 266,
                "notes": "Recent clinical experience suggests that the greatest value of levetiracetam in small animal practice is for short-term/immediate seizure control (similar to benzodiazepines)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:32:08.000000Z",
                "updated_at": "2020-05-06T22:32:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 719,
                "drug_id": 267,
                "notes": "Absence of clear, prompt response to treatment should trigger consideration of a different diagnosis, notably obesity",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:34:29.000000Z",
                "updated_at": "2020-05-06T22:34:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 720,
                "drug_id": 267,
                "notes": "Euthyroid sick syndrome (low total T4 in dogs with normal thyroid function) is common, and should be ruled out with concurrent measurement of free T4 and/or thyroid-stimulating hormone (TSH)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:34:31.000000Z",
                "updated_at": "2020-05-06T22:34:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 721,
                "drug_id": 267,
                "notes": "Mild/subclinical hypothyroidism, especially in the absence of abnormalities on history, physical examination, and serum biochemical profile, remains a controversial and potentially underrecognized disorder",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T22:34:34.000000Z",
                "updated_at": "2020-05-06T22:34:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 722,
                "drug_id": 267,
                "notes": "Levothyroxine supplementation dosages in dogs are approximately 10 times higher than in humans",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T22:34:36.000000Z",
                "updated_at": "2020-05-06T22:34:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 723,
                "drug_id": 267,
                "notes": "q 12h dosing is not essential for obtaining a good clinical response",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T22:34:38.000000Z",
                "updated_at": "2020-05-06T22:34:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 724,
                "drug_id": 268,
                "notes": "The goal of antiarrhythmic treatment is reestablishment of a perfusing rhythm if the arrhythmia was severe (hypotension), not full normalization of the electrocardiogram",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:37:01.000000Z",
                "updated_at": "2020-05-06T22:37:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 725,
                "drug_id": 268,
                "notes": "Hypokalemia both predisposes to ventricular arrhythmias and also creates absolute refractoriness to lidocaine",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:37:04.000000Z",
                "updated_at": "2020-05-06T22:37:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 726,
                "drug_id": 268,
                "notes": "Dilutional hypokalemia is common in postoperative ventricular arrhythmia patients (e.g., gastric dilation-volvulus)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T22:37:06.000000Z",
                "updated_at": "2020-05-06T22:37:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 727,
                "drug_id": 268,
                "notes": "Many reversible disorders cause ventricular arrhythmias and must be managed first or concurrently because they may render lidocaine treatment ineffective; these include splenic masses, anemia, hypoxemia, and catecholamine surges (e.g., pain, extreme anxiety)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T22:37:09.000000Z",
                "updated_at": "2020-05-06T22:37:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 728,
                "drug_id": 268,
                "notes": "SC injection for local anesthesia is typically given empirically as 0.5-4 mg/kg, e.g., with standard 2% lidocaine (20 mg/mL): 0.5-1 mL for toy dog/cat, 1-3 mL for small dog, 3-6 mL for medium dog, and 6-12 mL for large dog ",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T22:37:11.000000Z",
                "updated_at": "2020-05-06T22:37:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 729,
                "drug_id": 268,
                "notes": "Cats appear to have a higher incidence of adverse effects to lidocaine and lower IV dosages (e.g., 1 mg/kg, followed by 40 µg/kg/min if necessary) have been recommended",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T22:37:14.000000Z",
                "updated_at": "2020-05-06T22:37:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 730,
                "drug_id": 268,
                "notes": "Higher incidence of adverse effects in cats may be due to altered metabolism",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-06T22:37:16.000000Z",
                "updated_at": "2020-05-06T22:37:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 731,
                "drug_id": 268,
                "notes": "Although generally no longer manufactured (due to catastrophic cardiac arrhythmias if given IV instead of intradermally), lidocaine with epinephrine should only be used as a local anesthetic, and never administered systemically",
                "is_visible": 0,
                "display_order": 8,
                "created_at": "2020-05-06T22:37:18.000000Z",
                "updated_at": "2020-05-06T22:37:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 732,
                "drug_id": 269,
                "notes": "Generally considered for similar indications to beta-lactam antibacterials (penicillins, cephalosporins) when the patient is allergic or intolerant to these",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:37:53.000000Z",
                "updated_at": "2020-05-06T22:37:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 733,
                "drug_id": 269,
                "notes": "There is no beta-lactam ring in lincomycin (or clindamycin) so these lincosamide antibacterials may be a more appropriate choice when skin infection associated with a beta-lactamase-producing organism (e.g., Staphylococcus spp.)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:37:55.000000Z",
                "updated_at": "2020-05-06T22:37:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 734,
                "drug_id": 270,
                "notes": "Poorly studied in naturally-occurring heart disease in dogs and cats; experimental studies suggest similar effects as other ACE inhibitors",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:38:42.000000Z",
                "updated_at": "2020-05-06T22:38:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 735,
                "drug_id": 271,
                "notes": "Initial observation that lithium increases peripheral white blood cell counts has been repeatable in healthy dogs, but not in clinical situations involving antineoplastic chemotherapy-induced leukopenias",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:39:58.000000Z",
                "updated_at": "2020-05-06T22:39:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 736,
                "drug_id": 271,
                "notes": "Mainly renal route of elimination - adjust dosage if kidney disease",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:40:00.000000Z",
                "updated_at": "2020-05-06T22:40:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 737,
                "drug_id": 272,
                "notes": "Administration is IV bolus, is performed without pretreatment fluid diuresis, and results in little/no nephrotoxicosis (all in contrast to cisplatin)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:40:54.000000Z",
                "updated_at": "2020-05-06T22:40:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 738,
                "drug_id": 273,
                "notes": "Excellent penetration to central nervous system and eye",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:43:07.000000Z",
                "updated_at": "2020-05-06T22:43:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 739,
                "drug_id": 273,
                "notes": "Myelotoxicosis is dose-limiting adverse effect in most individuals",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:43:09.000000Z",
                "updated_at": "2020-05-06T22:43:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 740,
                "drug_id": 273,
                "notes": "CCNU = Cyclohexylchloroethylnitrosourea",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T22:43:11.000000Z",
                "updated_at": "2020-05-06T22:43:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 741,
                "drug_id": 274,
                "notes": "Better to avoid in collies unless ABCB1-mutation negative (prevalence of ABCB1 mutation in collies = 75%)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:43:47.000000Z",
                "updated_at": "2020-05-06T22:43:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 742,
                "drug_id": 275,
                "notes": "No active metabolites, so theoretically may be safer than diazepam in patients with hepatic dysfunction",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:45:20.000000Z",
                "updated_at": "2020-05-06T22:45:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 743,
                "drug_id": 275,
                "notes": "May provide greater intra-op muscle relaxation, favorably affecting orthopedic surgical manipulations",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:45:22.000000Z",
                "updated_at": "2020-05-06T22:45:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 744,
                "drug_id": 276,
                "notes": "Preventive; does not kill existing fleas",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:46:43.000000Z",
                "updated_at": "2020-05-06T22:46:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 745,
                "drug_id": 276,
                "notes": "Combination products available (e.g., with milbemycin: Sentinel) for broader spectrum of activity",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:46:45.000000Z",
                "updated_at": "2020-05-06T22:46:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 746,
                "drug_id": 276,
                "notes": "Extended-release injection (q 6 months) formulation exists for cats",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T22:46:48.000000Z",
                "updated_at": "2020-05-06T22:46:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 747,
                "drug_id": 277,
                "notes": "Conflicting study results: a separate experiment found \"increases in disease severity and the incidence of detection of FHV-1 DNA in oropharyngeal or conjunctival mucosal swab specimens at certain time points\" with dietary lysine supplementation",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:47:34.000000Z",
                "updated_at": "2020-05-06T22:47:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 748,
                "drug_id": 278,
                "notes": "Numerous variables (ionized vs. total, mEq vs mmol) can introduce confusion.  Magnesium replacement calculations must be done very carefully and then triple-checked, in order to void fatal or near-fatal magnesium overdoses, as have occurred in small animal medicine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:48:48.000000Z",
                "updated_at": "2020-05-06T22:48:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 749,
                "drug_id": 278,
                "notes": "Concentration equivalents: for magnesium sulfate, 1 mEq = 125 mg = 0.5 mmol",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:48:53.000000Z",
                "updated_at": "2020-05-06T22:48:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 750,
                "drug_id": 278,
                "notes": "Decrease in strength of patellar tendon reflex may be an early sign of hypermagnesemia during infusion (anecdotal)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T22:48:55.000000Z",
                "updated_at": "2020-05-06T22:48:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 751,
                "drug_id": 278,
                "notes": "Wide margin of safety in dogs receiving 1 or more slow bolus(es) of 0.1-0.2 mEq/kg: malignant arrhythmias occur in healthy dogs at cumulative dosage of 3.9 mEq/kg, and death occurs at cumulative dosages of 5.9-10.9 mEq/kg",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T22:48:58.000000Z",
                "updated_at": "2020-05-06T22:48:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 752,
                "drug_id": 279,
                "notes": "Product commonly crystallizes (without spoiling) in vial or bag, and light rewarming before administration is recommended for dissolving the crystals",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:50:58.000000Z",
                "updated_at": "2020-05-06T22:50:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 753,
                "drug_id": 280,
                "notes": "Experiments suggest lower risk of retinotoxicity in cats (no lesions observed at 20X therapeutic dosage) compared to enrofloxacin, but retinotoxicity is notoriously uncommon (estimated 1: 125 000 cats receiving enrofloxacin) yet devastating and irreversible when it occurs; conclusion re. marbofloxacin effects based on sufficiently large study population?",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:52:51.000000Z",
                "updated_at": "2020-05-06T22:52:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 754,
                "drug_id": 280,
                "notes": "Poor efficacy if anaerobic bacterial infections (like all fluoroquinolones) - requires combination with additional antibacterial",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:52:53.000000Z",
                "updated_at": "2020-05-06T22:52:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 755,
                "drug_id": 281,
                "notes": "Refrigeration reduces discomfort on injection",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:54:54.000000Z",
                "updated_at": "2020-05-06T22:54:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 756,
                "drug_id": 281,
                "notes": "Administration during general anesthesia lowers the anesthetic requirement by 24-30% in dogs undergoing laparotomy",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:54:59.000000Z",
                "updated_at": "2020-05-06T22:54:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 757,
                "drug_id": 281,
                "notes": "Broader spectrum antiemetic than other alternatives, since it acts in the final common pathway (emetic center) as opposed to others which act in chemoreceptor trigger zone, vestibular apparatus, etc.",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T22:55:03.000000Z",
                "updated_at": "2020-05-06T22:55:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 758,
                "drug_id": 282,
                "notes": "A diet with high concentrations of medium-chain triglycerides fed for at least 8 months to geriatric dogs produces significantly improved cognitive function",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:55:52.000000Z",
                "updated_at": "2020-05-06T22:55:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 759,
                "drug_id": 282,
                "notes": "Historically, empirical recommendations for medium-chain triglyceride oil supplementation to the diet for medical management of chylothorax and of lymphangiectasia were: 1-2 mL/kg/day with food",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:55:56.000000Z",
                "updated_at": "2020-05-06T22:55:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 760,
                "drug_id": 282,
                "notes": "Value and efficacy are questioned for lymphangiectasia, chylothorax, and other spontaneously-occurring disorders historically considered to be indications for this treatment because palatability may be poor, reducing appetite; medium-chain triglyceride oil may cause diarrhea; and medium-chain triglycerides may not entirely be transported by the portal system (with the non-portal fraction exacerbating pathologic disposition of soluble fat)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T22:55:59.000000Z",
                "updated_at": "2020-05-06T22:55:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 761,
                "drug_id": 282,
                "notes": "High concentration of medium-chain fatty acids in the diet of dogs with exocrine pancreatic insufficiency is associated with higher serum concentrations of cholesterol and certain fat-soluble vitamins, but not visible improvement in patient well-being",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T22:56:01.000000Z",
                "updated_at": "2020-05-06T22:56:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 762,
                "drug_id": 282,
                "notes": "Medium-chain triglyceride oil (Mead Johnson, Inc.): composition = coconut oil (fatty acid percentages: 60-80% C8 [caprylic], 18-32% C10 [capric], maximum 6% shorter than C6, maximum 4% C12 and higher); 7.7 kcal/mL",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T22:56:05.000000Z",
                "updated_at": "2020-05-06T22:56:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 763,
                "drug_id": 283,
                "notes": "Generally considered third-line treatment or simply not used, due to risks offsetting benefits in many cases",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:57:17.000000Z",
                "updated_at": "2020-05-06T22:57:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 764,
                "drug_id": 284,
                "notes": "Shown to be effective in as many as 50% of cats that do not respond to medroxyprogesterone acetate therapy",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:58:43.000000Z",
                "updated_at": "2020-05-06T22:58:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 765,
                "drug_id": 285,
                "notes": "100 mg meglumine antimoniate contains 30 mg antimony (Sb)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T22:59:36.000000Z",
                "updated_at": "2020-05-06T22:59:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 766,
                "drug_id": 285,
                "notes": "Caution if liver and/or kidney dysfunction, because accumulation can aggravate toxicosis",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T22:59:38.000000Z",
                "updated_at": "2020-05-06T22:59:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 767,
                "drug_id": 286,
                "notes": "Not used in cats: \"Preliminary data suggest that melarsomine is toxic to cats at doses as low as 3.5 mg/kg.\"",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:00:02.000000Z",
                "updated_at": "2020-05-06T23:00:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 768,
                "drug_id": 286,
                "notes": "Melarsomine value as adulticide challenged by discovery that cotreatment with doxycycline and monthly ivermectin preventive (possibly at accelerated dosages, e.g., ivermectin 6 µg/kg q 2 weeks, or q 1 week, instead of q 1 month) has slow adulticide properties; however, \"how slow is too slow?\" means ongoing afterload burden on right heart, and chronic pulmonary and glomerular lesions, benefit from prompt adulticide effect, i.e., melarsomine with doxycycline pretreatment and ivermectin co-treatment; some mild infections, and logistical limitations (e.g., drug unavailability), may favor ivermectin + doxycycline only",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:00:06.000000Z",
                "updated_at": "2020-05-06T23:00:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 769,
                "drug_id": 287,
                "notes": "Considered safe and clinical response to therapy can be used as a diagnostic test",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:01:02.000000Z",
                "updated_at": "2020-05-06T23:01:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 770,
                "drug_id": 288,
                "notes": "Expression of COX-2 in any tumor, such as squamous cell carcinoma, presents the possibility of response to meloxicam or piroxicam",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:03:11.000000Z",
                "updated_at": "2020-05-06T23:03:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 771,
                "drug_id": 288,
                "notes": "Veterinary liquid formulation is very palatable to cats and dogs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:03:15.000000Z",
                "updated_at": "2020-05-06T23:03:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 772,
                "drug_id": 288,
                "notes": "Cyclooxygenase-2 (COX-2) gene expression in tumor tissue may be associated with a greater[1] or lesser[2] survival time during treatment with COX-2-inhibitors like meloxicam; this suggests that COX-2 inhibition may be a double-edged sword, offering a therapeutic target in some instances, or being associated with a biologically more aggressive tumor type in others",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:03:17.000000Z",
                "updated_at": "2020-05-06T23:03:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 773,
                "drug_id": 289,
                "notes": "Alkylating agent has limitations for anticancer treatment but alternatives for multiple myeloma and other tumors are limited in veterinary medicine at present and none has been shown convincingly to be superior",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:05:27.000000Z",
                "updated_at": "2020-05-06T23:05:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 774,
                "drug_id": 290,
                "notes": "Generally not favored in small animal practice due to short duration of analgesic action and superior efficacy of alternatives",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:06:35.000000Z",
                "updated_at": "2020-05-06T23:06:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 775,
                "drug_id": 290,
                "notes": "Other, newer narcotic options (e.g., tramadol) may have important advantages, e.g., longer interdose interval",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:06:37.000000Z",
                "updated_at": "2020-05-06T23:06:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 776,
                "drug_id": 291,
                "notes": "Relatively new and little-understood; used by extrapolation from human medicine (data reflect only pharmacokinetic studies in healthy dogs)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:07:02.000000Z",
                "updated_at": "2020-05-06T23:07:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 777,
                "drug_id": 292,
                "notes": "Used for nonspecific treatment of intermittent or recurrent diarrhea when an inciting cause cannot be found or eliminated and when systemic signs are absent",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:07:53.000000Z",
                "updated_at": "2020-05-06T23:07:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 778,
                "drug_id": 292,
                "notes": "Caution: salicylate content may cause toxicosis in cats at dosages considered safe for dogs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:07:56.000000Z",
                "updated_at": "2020-05-06T23:07:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 779,
                "drug_id": 293,
                "notes": "Short duration of action (1.75-4.3 hour half-life in dogs) means frequent repetition is needed for extended pain control, but also rapid dissipation of sedative effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:09:12.000000Z",
                "updated_at": "2020-05-06T23:09:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 780,
                "drug_id": 294,
                "notes": "\"Systemic carbonic anhydrase inhibitors such as acetazolamide, methazolamide, and dichlorphenamide are effective in lowering intraocular pressure in cats but their use is limited by their systemic toxicity. Cats are particularly sensitive to systemic adverse effects that include panting (associated with metabolic acidosis) and changes in mentation, inappetence, and gastrointestinal upset (related, at least in part, to hypokalemia).\"",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:09:59.000000Z",
                "updated_at": "2020-05-06T23:09:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 781,
                "drug_id": 295,
                "notes": "Use for palliation of functional canine thyroid tumors: 2.5 mg/DOG PO q 12h, adjusted to achieve normal serum thyroxine level; not considered first-line therapy (e.g., vs. radiation therapy) because does not have antineoplastic effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:10:59.000000Z",
                "updated_at": "2020-05-06T23:10:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 782,
                "drug_id": 295,
                "notes": "Interdose interval should be q 12h in cats because q 24h dosing results in serum thyroxine levels that are 80% higher than with q 12h",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:11:01.000000Z",
                "updated_at": "2020-05-06T23:11:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 783,
                "drug_id": 295,
                "notes": "Frequently used for 2-4 weeks prior to radioiodine therapy to \"unmask\" latent chronic kidney disease via assessment of change in BUN, creatinine, and urine specific gravity during methimazole-induced euthyroidism compared to baseline/untreated hyperthyroidism; methimazole's effects may then allowed to dissipate for at 1-2 weeks before radioiodine is administered (to enhance thyroid gland uptake of the radiopharmaceutical) but this step is of minor importance in cats (compared to humans)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:11:05.000000Z",
                "updated_at": "2020-05-06T23:11:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 784,
                "drug_id": 295,
                "notes": "A different and less clinically striking form of hyperthyroidism, earlier recognition, or both, may explain the lower dosages and fewer dramatic cases of hyperthyroidism that characterize the disease and its treatment nowadays compared to original descriptions in the 1980s",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T23:11:08.000000Z",
                "updated_at": "2020-05-06T23:11:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 785,
                "drug_id": 296,
                "notes": "Eliminating an underlying urinary tract infection that is responsible for alkaline urine and struvite crystals (dogs) or environmental enrichment and switching to a diet with more moisture, i.e., canned (cats) is more important, and likely associated with a lower risk of adverse effects, than urine acidification in many cases of lower urinary tract disorders",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:11:46.000000Z",
                "updated_at": "2020-05-06T23:11:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 786,
                "drug_id": 297,
                "notes": "Widely applicable for various hepatopathies (especially involving lipid dysregulation) and oxidant injuries, and extensively extrapolated to feline hepatic lipidosis, idiopathic chronic hepatitis of dogs, and various other common hepatobiliary diseases",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:13:24.000000Z",
                "updated_at": "2020-05-06T23:13:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 787,
                "drug_id": 298,
                "notes": "Orally-active (carbamate) derivative of guaifenesin",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:15:10.000000Z",
                "updated_at": "2020-05-06T23:15:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 788,
                "drug_id": 298,
                "notes": "Carbamate intoxication also an indication for IV use",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:15:12.000000Z",
                "updated_at": "2020-05-06T23:15:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 789,
                "drug_id": 298,
                "notes": "Case reports from >50 years ago include treatment of chlordane toxicosis (illegal in the U.S. since 1983), puerperal tetany when calcium injection is unsuccessful, and tetanic \"muscle spasms of undetermined origin\" in dogs, a cat, and a robin, seemingly with successful outcomes using the same dosages listed here",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:15:17.000000Z",
                "updated_at": "2020-05-06T23:15:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 790,
                "drug_id": 299,
                "notes": "Replaces doxorubicin in the maintenance/long-term phase of several lymphoma protocols in veterinary medicine; since these are under scrutiny (and may not confer an appreciable benefit), the extent of methotrexate's role in treating lymphoma is likewise under review",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:16:48.000000Z",
                "updated_at": "2020-05-06T23:16:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 791,
                "drug_id": 299,
                "notes": "High-dosage protocols require leucovorin rescue (i.e., reversal with leucovorin, aiming to confer therapeutic benefit without lasting adverse effects) to avoid life-threatening gastrointestinal and hematologic effects",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:16:50.000000Z",
                "updated_at": "2020-05-06T23:16:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 792,
                "drug_id": 299,
                "notes": "Alkalinization of urine is recommended (e.g., by adding sodium bicarbonate to infusion if IV CRI) because acidic urine may promote crystallization of methotrexate in renal tubules",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:16:53.000000Z",
                "updated_at": "2020-05-06T23:16:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 793,
                "drug_id": 299,
                "notes": "Like potentiated sulfonamide antibacterials, methotrexate has the potential to cause blood dyscrasias due to folate depletion",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T23:16:55.000000Z",
                "updated_at": "2020-05-06T23:16:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 794,
                "drug_id": 300,
                "notes": "Pseudocyanosis (bluish discoloration of mucous membranes and skin) is to be expected with treatment in 15-20% of dogs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:17:54.000000Z",
                "updated_at": "2020-05-06T23:17:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 795,
                "drug_id": 300,
                "notes": "Diagnostic value for identification of insulinomas is important, but it is not indispensable: many insulinomas can be seen and/or palpated in the pancreas without contrast enhancement",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:17:56.000000Z",
                "updated_at": "2020-05-06T23:17:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 796,
                "drug_id": 300,
                "notes": "Also given IV for uptake/staining of the parathyroid glands in dogs and humans",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:17:58.000000Z",
                "updated_at": "2020-05-06T23:17:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 797,
                "drug_id": 300,
                "notes": "Research applications also include identifying lymph node drainage patterns[1], assessing gastrointestinal viscera for mural integrity after surgery[2], and demarcating the extent of anesthetic distribution in terminal epidural anesthesia experiment[3]",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T23:18:01.000000Z",
                "updated_at": "2020-05-06T23:18:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 798,
                "drug_id": 301,
                "notes": "Human abuse potential - must be monitored/controlled",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:18:50.000000Z",
                "updated_at": "2020-05-06T23:18:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 799,
                "drug_id": 302,
                "notes": "Similar efficacy (but less potent on mg basis) compared to triamcinolone",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:19:34.000000Z",
                "updated_at": "2020-05-06T23:19:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 800,
                "drug_id": 302,
                "notes": "Advantage over prednisone: does not need to be hepatically converted from prednisone to prednisolone (biologically active), which cats +/- dogs are variably able to do",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:19:37.000000Z",
                "updated_at": "2020-05-06T23:19:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 801,
                "drug_id": 303,
                "notes": "Feline eosinophilic granuloma complex is anecdotally treated with doses of 20 mg/CAT IM q 2-3 weeks for up to 3 treatments (6-9 weeks)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:21:56.000000Z",
                "updated_at": "2020-05-06T23:21:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 802,
                "drug_id": 303,
                "notes": "In cats, even single injections cause mild to marked hyperglycemia (presumably due to insulin antagonist effect) and corresponding shifts in fluid from intracellular to plasma volume (13.4% median increase in plasma volume, up to 40% in 25% of cats), and these changes can explain the iatrogenic diabetes mellitus and iatrogenic congestive heart failure that can occur with this medication in cats",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:21:59.000000Z",
                "updated_at": "2020-05-06T23:21:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 803,
                "drug_id": 303,
                "notes": "3-6 weeks' duration of action in the cat",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:22:02.000000Z",
                "updated_at": "2020-05-06T23:22:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 804,
                "drug_id": 303,
                "notes": "5-10 weeks' alteration of hypothalamic-pituitary-adrenal axis in the dog with 1 injection",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T23:22:05.000000Z",
                "updated_at": "2020-05-06T23:22:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 805,
                "drug_id": 304,
                "notes": "In dogs, use of 30 mg/kg dosage is supported by mixed evidence of benefit in experimentally-induced neurologic disease in healthy animals, but strongly questioned in clinical neurology, both due to unproven benefit in clinical setting and high incidence of serious/life-threatening adverse effects; some neurologists consider this application to be contraindicated for these reasons",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:23:57.000000Z",
                "updated_at": "2020-05-06T23:23:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 806,
                "drug_id": 305,
                "notes": "Controlled drug seldom used today (former indications in dogs: decreased libido, hormone-responsive urinary incontinence in male dogs, for anabolic effects in racing greyhounds) due to potential for human abuse, inferior efficacy compared to alternatives in many instances, and risk of adverse effects with long-term use",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:24:34.000000Z",
                "updated_at": "2020-05-06T23:24:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 807,
                "drug_id": 306,
                "notes": "Maropitant (and probably serotonin 5HT3-antagonists like ondansetron and dolasetron): generally more effective at suppressing nausea and vomiting in dogs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:25:46.000000Z",
                "updated_at": "2020-05-06T23:25:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 808,
                "drug_id": 306,
                "notes": "If possible, avoid prior to endoscopy because passage of the endoscope through a dog's pylorus is more difficult with metoclopramide",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:25:49.000000Z",
                "updated_at": "2020-05-06T23:25:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 809,
                "drug_id": 306,
                "notes": "Antiemetic activity related to central (chemoreceptor trigger zone) action and increased motility in upper small intestine; minimal effect on lower intestinal motility (e.g., megacolon in cats)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:25:53.000000Z",
                "updated_at": "2020-05-06T23:25:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 810,
                "drug_id": 307,
                "notes": "As with every beta-blocker, adverse effects (notably hypotension and bradycardia, which can be catastrophic/life-threatening) are best avoided by beginning at the low end of the dosage range and uptitrating as needed based on response",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:27:39.000000Z",
                "updated_at": "2020-05-06T23:27:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 811,
                "drug_id": 307,
                "notes": "Also as with every beta-blocker, metoprolol is only started once overt congestive heart failure (pulmonary edema, pleural effusion, ascites) has been controlled/fluid has been eliminated with diuretics; otherwise, suppression of the heart rate is too inexact (despite titration) and may lead to periods of bradycardia where retained fluid would be detrimental or possibly life-threatening",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:27:41.000000Z",
                "updated_at": "2020-05-06T23:27:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 812,
                "drug_id": 307,
                "notes": "Important to consider context: may confer benefit (as \"cardioprotective\") in patients with compensated/\"asymptomatic\" heart disease, whereas excessive beta-blockade can trigger congestive heart failure recurrence if not carefully uptitrated (notably in patients receiving daily diuretic, i.e., being treated for heart failure)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:27:44.000000Z",
                "updated_at": "2020-05-06T23:27:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 813,
                "drug_id": 307,
                "notes": "Beta-1 selectivity proven in several species, including the cat, but high drug concentration in tablets limits the practical use of this drug in this species",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T23:27:47.000000Z",
                "updated_at": "2020-05-06T23:27:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 814,
                "drug_id": 307,
                "notes": "No objective information on sustained-release formulation (Toprol-XL) in naturally-occurring heart disease in dogs and cats",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T23:27:51.000000Z",
                "updated_at": "2020-05-06T23:27:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 815,
                "drug_id": 308,
                "notes": "Common reasons for metronidazole toxicosis are: administration of the high-dose, short-term protocol (65 mg/kg/day X 3 days) for 1 week or longer; administration of the high-end daily dose (65 mg/kg/day) as a q 12h dose (-130 mg/kg/day); and hepatic dysfunction causing a reduced rate of elimination of the drug",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:30:10.000000Z",
                "updated_at": "2020-05-06T23:30:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 816,
                "drug_id": 308,
                "notes": "In patients with liver disease, an empirical dosage that is commonly recommended is 7.5 mg/kg PO q 12h, to account for reduced hepatic catabolism of the drug",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:30:13.000000Z",
                "updated_at": "2020-05-06T23:30:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 817,
                "drug_id": 308,
                "notes": "The intravenous dosage in dogs is 10-15 mg/kg IV CRI q 8-12h, typically infused over 2-4 hours, and reduced in amount if liver function is compromised",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:30:15.000000Z",
                "updated_at": "2020-05-06T23:30:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 818,
                "drug_id": 308,
                "notes": "Efficacy for treating Giardia infections in dogs is 60-70% (Zimmer JF, Burrington DB. Comparison of four protocols for the treatment of canine giardiasis. J Am Anim Hosp Assoc; 1986; 22: 168-172); generally replaced by fenbendazole treatment now",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T23:30:17.000000Z",
                "updated_at": "2020-05-06T23:30:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 819,
                "drug_id": 308,
                "notes": "Also has anti-inflammatory/immunomodulatory activity, which contributes to benefit in treatment of inflammatory bowel disease",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-06T23:30:19.000000Z",
                "updated_at": "2020-05-06T23:30:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 820,
                "drug_id": 308,
                "notes": "It is a concentration-dependent antimicrobial, but dose-dependent neurotoxicity may preclude giving the full dose q 24h",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-06T23:30:22.000000Z",
                "updated_at": "2020-05-06T23:30:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 821,
                "drug_id": 309,
                "notes": "Increasingly difficult to obtain, due to obsolescence in human cardiology; sotalol is generally used as a substitute instead",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:31:43.000000Z",
                "updated_at": "2020-05-06T23:31:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 822,
                "drug_id": 310,
                "notes": "Class II controlled substance (due to potential for human abuse for anabolic purposes)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:32:29.000000Z",
                "updated_at": "2020-05-06T23:32:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 823,
                "drug_id": 310,
                "notes": "Similar dosage for estrus suppression in bitches (unpublished/proprietary data): 0.03-0.18 mg/DOG (according to approximate body weight, from toy to giant breeds) PO q 24h beginning 30 days before expected onset of estrus and continued as needed (up to 2+ years); ovarian activity typically returns 1-7 months after cessation",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:32:32.000000Z",
                "updated_at": "2020-05-06T23:32:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 824,
                "drug_id": 310,
                "notes": "If mibolerone is being administered and the animal comes into estrus, breeding must be avoided (teratogenic risk); if breeding occurs, mibolerone should be discontinued immediately",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:32:34.000000Z",
                "updated_at": "2020-05-06T23:32:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 825,
                "drug_id": 311,
                "notes": "Minimal cardiovascular effect, generally very safe drug for sedation/premedication (main flaw as monotherapy is insufficient effect in very active or aggressive patients)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:34:50.000000Z",
                "updated_at": "2020-05-06T23:34:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 826,
                "drug_id": 311,
                "notes": "The main advantage of midazolam over diazepam is IM bioavailability (vs. diazepam - IV only)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:34:53.000000Z",
                "updated_at": "2020-05-06T23:34:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 827,
                "drug_id": 312,
                "notes": "Public health consideration: abortefacient risks apply to pregnant women",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:35:38.000000Z",
                "updated_at": "2020-05-06T23:35:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 828,
                "drug_id": 312,
                "notes": "Mechanism of action (progesterone receptor antagonist) means administration in early pregnancy (<20 days after conception) or late pregnancy (>40 days after conception) is often ineffective",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:35:40.000000Z",
                "updated_at": "2020-05-06T23:35:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 829,
                "drug_id": 313,
                "notes": "Otic preparation (0.1% milbemycin: MilbeMite) is purportedly very effective for feline otic acariasis",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:38:01.000000Z",
                "updated_at": "2020-05-06T23:38:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 830,
                "drug_id": 313,
                "notes": "Appears very safe - adverse effects at therapeutic dosages are extremely uncommon",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:38:03.000000Z",
                "updated_at": "2020-05-06T23:38:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 831,
                "drug_id": 313,
                "notes": "Demodicosis application (and other treatments with short inter-dose intervals) may be prohibitively expensive",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:38:05.000000Z",
                "updated_at": "2020-05-06T23:38:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 832,
                "drug_id": 313,
                "notes": "Spectrum of activity does not extend to tapeworms (need praziquantel or similar)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T23:38:08.000000Z",
                "updated_at": "2020-05-06T23:38:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 833,
                "drug_id": 314,
                "notes": "Assessment of serum drug concentration (including 8-hydroxymirtazapine concentrations) does not identify drug accumulation at q 24h dosing after 6 days in normal cats, which supports an interdose interval as short as q 24h (not q 48h, as originally thought) if necessary",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:38:48.000000Z",
                "updated_at": "2020-05-06T23:38:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 834,
                "drug_id": 314,
                "notes": "Half-life of drug is 25% longer in cats with chronic kidney disease, warranting reduction (e.g., q 36-48h dosing intermittently) especially in severely azotemic cats and/or cats showing behavioral changes possibly associated temporally with treatment",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:38:50.000000Z",
                "updated_at": "2020-05-06T23:38:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 835,
                "drug_id": 314,
                "notes": "Precision and accuracy of dosage formulations are complicated by tablet size (smallest: 15 mg; 1.88 mg/CAT corresponds to 1/8 tablet, which is inherently prone to error); compounding is popular but quality is institution-dependent",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:38:54.000000Z",
                "updated_at": "2020-05-06T23:38:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 836,
                "drug_id": 314,
                "notes": "Also has antiemetic activity",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-06T23:38:57.000000Z",
                "updated_at": "2020-05-06T23:38:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 837,
                "drug_id": 315,
                "notes": "In vitro studies indicate that misoprostol is a prokinetic drug, which is clinically evident via occasional diarrhea as an adverse effect, and which identifies a potential application in treating or preventing constipation",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:40:26.000000Z",
                "updated_at": "2020-05-06T23:40:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 838,
                "drug_id": 315,
                "notes": "Public health concern: warn clients about abortefacient properties, need to avoid client taking pet's medication in error",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:40:29.000000Z",
                "updated_at": "2020-05-06T23:40:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 839,
                "drug_id": 316,
                "notes": "Like doxorubicin, vincristine, and others, requires optimal IV catheter placement and assurance that drug does not leave vein (extravasation injury risk)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:42:16.000000Z",
                "updated_at": "2020-05-06T23:42:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 840,
                "drug_id": 316,
                "notes": "Color of the product has produced the nickname \"blue thunder\"",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:42:18.000000Z",
                "updated_at": "2020-05-06T23:42:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 841,
                "drug_id": 317,
                "notes": "As with all opiates, the benefit of morphine analgesia must be titrated to avoid excessive treatment; historically, such risks were focused on respiratory depression, which actually requires high dosages (and/or severe patient compromise), but modern usage in dogs and cats identifies that major adverse effects include the client's decision to euthanize (when sedation is perceived as the pet's being gravely ill, or \"not himself/herself,\" despite all assurances to the contrary by the veterinarian), and self-inflicted injury by dogs and cats that experience opioid dysphoria, hypersensitivity to sound (when all noise is not suppressed as it should be in the recovery area/ICU), and other stimuli",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:44:42.000000Z",
                "updated_at": "2020-05-06T23:44:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 842,
                "drug_id": 317,
                "notes": "Many oral formulations available but this route is used uncommonly in veterinary medicine",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:44:45.000000Z",
                "updated_at": "2020-05-06T23:44:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 843,
                "drug_id": 317,
                "notes": "Mean serum morphine concentration is lower (and heart rate is higher) in dogs receiving 0.12 mg/kg/h IV CRI than dogs receiving 1 mg/kg IM q 4h, but only for the first 2h post-op; then, serum levels become similar even as treatment (IV CRI vs. q 4h IM) continues unchanged for 24h, suggesting value in increasing IV CRI in the immediate post-op period if signs of loss of analgesic control occur",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:44:47.000000Z",
                "updated_at": "2020-05-06T23:44:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 844,
                "drug_id": 318,
                "notes": "Experimental results are suggestive of antimycobacterial benefit but objective clinical information is lacking",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:45:18.000000Z",
                "updated_at": "2020-05-06T23:45:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 845,
                "drug_id": 319,
                "notes": "In critically-affected myasthenics, response to mycophenolate appears to be dramatically positive in some dogs treated with the IV formulation, vs. less predictable or rewarding (or safe) in dogs treated orally",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:46:53.000000Z",
                "updated_at": "2020-05-06T23:46:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 846,
                "drug_id": 320,
                "notes": "Specific dosage is dependent on opiate being reversed, on dosage, and on response, i.e., should be titrated/repeated to effect",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:48:02.000000Z",
                "updated_at": "2020-05-06T23:48:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 847,
                "drug_id": 320,
                "notes": "Since the duration of effect is longer with IM than IV administration, common approaches include giving half a dose IV and the other half IM, or the first dose IV and subsequent doses IM",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:48:04.000000Z",
                "updated_at": "2020-05-06T23:48:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 848,
                "drug_id": 320,
                "notes": "Opiate reversal may be detrimental in situations where light sedation (e.g., conscious but groggy, ataxic) is advantageous, such as anesthetic recovery in a post-operative patient that is otherwise fractious or extremely energetic",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:48:06.000000Z",
                "updated_at": "2020-05-06T23:48:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 849,
                "drug_id": 321,
                "notes": "Long half-life (>72h) and easy availability over-the-counter (nonprescription) at pharmacies may explain high incidence of adverse effects in the dog",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:48:29.000000Z",
                "updated_at": "2020-05-06T23:48:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 850,
                "drug_id": 322,
                "notes": "0.01-0.05 mg/kg IV dosage with glycopyrrolate pretreatment can antagonize neuromuscular blockade with minimal adverse effects on autonomic nervous system function",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:50:41.000000Z",
                "updated_at": "2020-05-06T23:50:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 851,
                "drug_id": 323,
                "notes": "Most widely used as a non-glucocorticoid-based therapeutic approach to immune-mediated skin disease",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:52:21.000000Z",
                "updated_at": "2020-05-06T23:52:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 852,
                "drug_id": 323,
                "notes": "Niacinamide alone is ineffective as an antipruritic in dogs (5% of dogs show a positive response, about the same rate as adverse effects)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:52:23.000000Z",
                "updated_at": "2020-05-06T23:52:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 853,
                "drug_id": 323,
                "notes": "Treatment with tetracycline and niacinamide does not interfere with normal antibody response to vaccination in dogs",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:52:28.000000Z",
                "updated_at": "2020-05-06T23:52:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 854,
                "drug_id": 324,
                "notes": "Accidental ingestion of large doses of nifedipine by dogs has produced the specific complication of intragastric drug concretions (drug bezoars), potentially conferring extended toxicosis and requiring surgical removal if the patient can be brought to hemodynamic stability for general anesthesia",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:53:17.000000Z",
                "updated_at": "2020-05-06T23:53:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 855,
                "drug_id": 325,
                "notes": "Neonicotinoid insecticide that acts on the nervous system of the flea, causing rapid death but little risk to mammals",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:54:28.000000Z",
                "updated_at": "2020-05-06T23:54:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 856,
                "drug_id": 326,
                "notes": "Generally considered of limited efficacy as vasodilator, but easily applied and associated with minimal risk",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:55:28.000000Z",
                "updated_at": "2020-05-06T23:55:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 857,
                "drug_id": 326,
                "notes": "No effect on left atrial or ventricular parameters in dogs, in contrast to other vasoactive drugs, supporting claims of minimal effect",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:55:31.000000Z",
                "updated_at": "2020-05-06T23:55:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 858,
                "drug_id": 326,
                "notes": "Risk of vasodilation (lightheadedness, headaches) in people if touching the ointment or an animal's skin where the ointment has been applied; wear gloves",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:55:36.000000Z",
                "updated_at": "2020-05-06T23:55:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 859,
                "drug_id": 327,
                "notes": "Conflicting results for decreasing arterial blood pressure in patent ductus arteriosus surgery, with one case report showing no efficacy",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:56:40.000000Z",
                "updated_at": "2020-05-06T23:56:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 860,
                "drug_id": 328,
                "notes": "Common clinical dosage is 2.5-5 mg/kg; may be adjusted based on effect (promotility, gastric acid-suppressant, or both)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:57:24.000000Z",
                "updated_at": "2020-05-06T23:57:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 861,
                "drug_id": 328,
                "notes": "Gastric acid suppression is similar to famotidine and superior to ranitidine and cimetidine in experimental dogs (IV)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:57:26.000000Z",
                "updated_at": "2020-05-06T23:57:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 862,
                "drug_id": 329,
                "notes": "Powerful vasoconstrictor; may be expensive",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:58:05.000000Z",
                "updated_at": "2020-05-06T23:58:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 863,
                "drug_id": 330,
                "notes": "Low plasma-protein binding and high lipid solubility support use in prostatitis",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:59:06.000000Z",
                "updated_at": "2020-05-06T23:59:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 864,
                "drug_id": 330,
                "notes": "Newer understanding of fluoroquinolones as concentration-dependent, rather than dose-dependent, means that q 24h dosing is likely just as effective",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:59:08.000000Z",
                "updated_at": "2020-05-06T23:59:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 865,
                "drug_id": 331,
                "notes": "Anecdotally recommended dosage in dogs and cats is 50000 IU/kg PO q 24h for 4 days, when treating gastrointestinal fungal overgrowth",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-06T23:59:54.000000Z",
                "updated_at": "2020-05-06T23:59:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 866,
                "drug_id": 331,
                "notes": "In humans, the liposome-encapsulated formulation has lower toxicity, but is not more efficacious, than the standard formulation",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-06T23:59:56.000000Z",
                "updated_at": "2020-05-06T23:59:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 867,
                "drug_id": 331,
                "notes": "Nystatin commonly is found in combination anti-infective veterinary skin ointments (e.g., Panolog)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-06T23:59:58.000000Z",
                "updated_at": "2020-05-06T23:59:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 868,
                "drug_id": 332,
                "notes": "Superficial necrolytic dermatitis is also called necrolytic migratory erythema, NME, and hepatocutaneous syndrome",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:01:07.000000Z",
                "updated_at": "2020-05-07T00:01:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 869,
                "drug_id": 332,
                "notes": "Sustained-release formulation (for SC injection) exists but has not been evaluated objectively in small animal medicine",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:01:09.000000Z",
                "updated_at": "2020-05-07T00:01:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 870,
                "drug_id": 332,
                "notes": "Gastrinoma treatment should include cotreatment with a proton-pump inhibitor (e.g., omeprazole)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:01:12.000000Z",
                "updated_at": "2020-05-07T00:01:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 871,
                "drug_id": 333,
                "notes": "Has activity against Mycobacterium tuberculosis (like enrofloxacin and ciprofloxacin) but not the Mycobacterium avium complex",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:01:48.000000Z",
                "updated_at": "2020-05-07T00:01:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 872,
                "drug_id": 333,
                "notes": "In dogs given ofloxacin orally, articular ofloxacin concentrations are 1.8-2 times higher than in serum, which helps explain the adverse effect of juvenile arthropathy",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:01:51.000000Z",
                "updated_at": "2020-05-07T00:01:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 873,
                "drug_id": 333,
                "notes": "Levofloxacin is the S-isomer of ofloxacin and is more widely used because the S-isomer is substantially more effective as an antibacterial agent than is the R-isomer",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:01:53.000000Z",
                "updated_at": "2020-05-07T00:01:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 874,
                "drug_id": 333,
                "notes": "4 daily doses of 30 mg/kg fail to clear Leptospira from blood or kidneys, where doxycycline is 100% effective, in a hamster model",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T00:01:55.000000Z",
                "updated_at": "2020-05-07T00:01:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 875,
                "drug_id": 334,
                "notes": "Anecdotal evidence of efficacy in some colitis cases in dogs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:02:35.000000Z",
                "updated_at": "2020-05-07T00:02:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 876,
                "drug_id": 334,
                "notes": "Unlike sulfasalazine, contains no sulfa component (potentially safer in dogs with keratoconjunctivitis sicca or other disorder than sulfa intolerance could worsen)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:02:38.000000Z",
                "updated_at": "2020-05-07T00:02:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 877,
                "drug_id": 335,
                "notes": "Subjectively used for treating caudal occipital malformation (Chiari-like malformation/craniocervical junction abnormalities) of cavalier King Charles spaniels because proton pump inhibitors reduce rate of formation of cerebrospinal fluid",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:04:22.000000Z",
                "updated_at": "2020-05-07T00:04:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 878,
                "drug_id": 335,
                "notes": "Slower onset and offset of action than H2 blockers, because enzyme system needs to be inhibited (vs. simply blocking a receptor)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:04:24.000000Z",
                "updated_at": "2020-05-07T00:04:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 879,
                "drug_id": 336,
                "notes": "In dogs, ondansetron and maropitant have similar efficacies for preventing peripherally-induced nausea (syrup of ipecac), but maropitant is superior for centrally-induced nausea (apomorphine); these findings may be important in naturally-occurring cases of peripheral (e.g., motion sickness) vs. central (e.g., antineoplastic chemotherapy) nausea",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:05:29.000000Z",
                "updated_at": "2020-05-07T00:05:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 880,
                "drug_id": 336,
                "notes": "One of ondansetron's metabolites, dolasetron, is biologically active and is an effective antiemetic",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:05:32.000000Z",
                "updated_at": "2020-05-07T00:05:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 881,
                "drug_id": 336,
                "notes": "Useful for preventing or treating cancer chemotherapy-induced vomition",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:05:34.000000Z",
                "updated_at": "2020-05-07T00:05:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 882,
                "drug_id": 337,
                "notes": "Concurrent prescription of prednisone (1 mg/kg PO) is common practice, to be given as temporary support if sudden anorexia or lethargy occurs (overtreatment)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:06:46.000000Z",
                "updated_at": "2020-05-07T00:06:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 883,
                "drug_id": 337,
                "notes": "Bioavailability is greater in dogs who have eaten corn oil and in dogs with pituitary-dependent hyperadrenocorticism",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:06:49.000000Z",
                "updated_at": "2020-05-07T00:06:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 884,
                "drug_id": 337,
                "notes": "Never use o,p'DDD and ketoconazole simultaneously in hyperadrenocorticism because ketoconazole can inhibit generation of active o,p'DDD metabolite by P450 inhibition",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:06:51.000000Z",
                "updated_at": "2020-05-07T00:06:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 885,
                "drug_id": 338,
                "notes": "Also labeled for susceptible bacterial urinary tract infections in dogs (2.5-5 mg/kg PO q 24h for 7 days or longer as needed; maximum safety evaluated to 30 days)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:07:40.000000Z",
                "updated_at": "2020-05-07T00:07:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 886,
                "drug_id": 338,
                "notes": "In dogs and cats with bacterial infections, target levels of drug are more likely to be reached with enrofloxacin, marbofloxacin, or cirpofloxacin than ofloxacin or difloxacin",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:07:42.000000Z",
                "updated_at": "2020-05-07T00:07:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 887,
                "drug_id": 338,
                "notes": "If abscessation/anaerobic bacteria are involved, additional antibacterial will be needed (spectrum does not cover anaerobes)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:07:47.000000Z",
                "updated_at": "2020-05-07T00:07:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 888,
                "drug_id": 338,
                "notes": "High lipid solubility means excellent antibacterial for prostatic infections",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T00:07:49.000000Z",
                "updated_at": "2020-05-07T00:07:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 889,
                "drug_id": 339,
                "notes": "One of several agents considered for \"chemical castration\" because administration reduces testosterone effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:08:21.000000Z",
                "updated_at": "2020-05-07T00:08:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 890,
                "drug_id": 339,
                "notes": "Has been discussed as having value for \"chemically castrating\" show dogs, since they remain intact (controversial)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:08:23.000000Z",
                "updated_at": "2020-05-07T00:08:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 891,
                "drug_id": 340,
                "notes": "Frequent anecdotal reports of use for treatment of canine influenza, but objective studies are lacking and ethical basis for veterinary applications (should the drug be necessary for treating human outbreaks) has been questioned",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:08:59.000000Z",
                "updated_at": "2020-05-07T00:08:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 892,
                "drug_id": 341,
                "notes": "A similar therapeutic dosage is given 15-30 minutes prior to feeding as an appetite stimulant in inappetent cats",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:09:37.000000Z",
                "updated_at": "2020-05-07T00:09:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 893,
                "drug_id": 342,
                "notes": "As with all opiates, the degree of oxymorphone analgesia provided must be titrated to avoid excessive treatment; historically, such risks were focused on respiratory depression, which actually requires very high dosages, but modern usage in dogs and cats identifies that major adverse effects include the client's decision to euthanize (when sedation is perceived as the pet's being gravely ill, or \"not himself/herself,\" despite all assurances to the contrary by the veterinarian), and self-inflicted injury by dogs and cats that experience opioid dysphoria, hypersensitivity to sound (when all noise is not suppressed as it should be in the recovery area/ICU), and other stimuli",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:11:17.000000Z",
                "updated_at": "2020-05-07T00:11:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 894,
                "drug_id": 342,
                "notes": "Oxymorphone provides analgesic effects similar to those of hydromorphone but is associated with less vomiting than hydromorphone; oxymorphone often is more expensive, harder to obtain, or both",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:11:19.000000Z",
                "updated_at": "2020-05-07T00:11:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 895,
                "drug_id": 342,
                "notes": "The concept of partial reversal with butorphanol (a mixed agonist-antagonist) is challenged by the heightened analgesia seen when oxymorphone-butorphanol are combined in the same syringe and given IV together, compared to either drug given alone",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:11:24.000000Z",
                "updated_at": "2020-05-07T00:11:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 896,
                "drug_id": 343,
                "notes": "Almost totally replaced by oral doxycyline (if a tetracycline is required) or other antibacterials that are more efficacious and more practical (e.g., less painful to the patient)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:12:14.000000Z",
                "updated_at": "2020-05-07T00:12:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 897,
                "drug_id": 343,
                "notes": "Renal excretion means leptospirosis patients with oliguria or anuria are at risk of drug toxicosis; this is another reason doxycycline is preferred (hepatic/GI elimination), although initial antibacterial treatment in fulminant leptospirosis typically would involve intravenous penicillins rather than any tetracyclines",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:12:17.000000Z",
                "updated_at": "2020-05-07T00:12:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 898,
                "drug_id": 344,
                "notes": "Alternative measures of dystocia relief are preferable if ineffective after 2 doses, due to increasing risk of stillbirths at high dosages",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:13:39.000000Z",
                "updated_at": "2020-05-07T00:13:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 899,
                "drug_id": 344,
                "notes": "For dystocia (without mechanical obstruction), repeated small doses of 1-3 IU/DOG have been advocated, typically at 30-40 minute intervals as needed, rather than historically higher dosages (5-20 IU/DOG) that have been found to correlate with lower-quality, less frequent uterine contractions and higher puppy mortality",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:13:41.000000Z",
                "updated_at": "2020-05-07T00:13:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 900,
                "drug_id": 344,
                "notes": "For feline dystocia (without mechanical obstruction), anecdotally-described dosages of oxytocin range from 0.25-0.5 IU/CAT (current) to 2-4 IU/CAT (older and questioned due to recognition of risk of high-dosage treatment in dogs)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:13:43.000000Z",
                "updated_at": "2020-05-07T00:13:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 901,
                "drug_id": 344,
                "notes": "For induction of parturition: should be used cautiously, to ensure that parturition is not induced prematurely; emphasizes the value of detecting the time of ovulation as precisely as possible for accurate calculation of gestation duration prior to induction",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T00:13:45.000000Z",
                "updated_at": "2020-05-07T00:13:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 902,
                "drug_id": 345,
                "notes": "Very new to veterinary medicine; proposed application, complementarity with other treatments (surgical resection, radiation therapy, corticosteroids, tyrosine kinase inhibitors), and initial results hold substantial promise, but full range of safety and efficacy remains under study",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:14:23.000000Z",
                "updated_at": "2020-05-07T00:14:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 903,
                "drug_id": 346,
                "notes": "May rapidly reduce the serum calcium concentration, but does not alter the underlying etiology",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:15:12.000000Z",
                "updated_at": "2020-05-07T00:15:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 904,
                "drug_id": 346,
                "notes": "Expensive",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:15:15.000000Z",
                "updated_at": "2020-05-07T00:15:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 905,
                "drug_id": 347,
                "notes": "As an alternative, the owner may supplement each meal with raw chopped porcine pancreas (87 ± 44 g/MEAL, adjusted to produce normal or near-normal stool most of the time) (typically if the animal refuses to eat because of palatability of the supplement, or for financial reasons particularly in larger dogs)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:16:13.000000Z",
                "updated_at": "2020-05-07T00:16:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 906,
                "drug_id": 347,
                "notes": "Enzyme potencies for a typical formulation (Viokase tablets) is: lipase 8 000 USP units, protease 30 000 USP units, and amylase 30 000 USP units per tablet",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:16:15.000000Z",
                "updated_at": "2020-05-07T00:16:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 907,
                "drug_id": 347,
                "notes": "In general, the powder form is more effective than the tablet form",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:16:18.000000Z",
                "updated_at": "2020-05-07T00:16:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 908,
                "drug_id": 347,
                "notes": "Premixing with food (thought to begin the digestion process before the animal eats) is no longer considered necessary (or effective)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T00:16:20.000000Z",
                "updated_at": "2020-05-07T00:16:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 909,
                "drug_id": 348,
                "notes": "Can produce false-positive reaction on urine test for tetrahydrocannabinol (creating a false-positive diagnosis of marijuana toxicosis)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:17:39.000000Z",
                "updated_at": "2020-05-07T00:17:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 910,
                "drug_id": 349,
                "notes": "Concern that high (toxic) serum drug levels may occur after administration of normal therapeutic dosages to patients with damaged intestinal epithelium",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:18:56.000000Z",
                "updated_at": "2020-05-07T00:18:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 911,
                "drug_id": 349,
                "notes": "Suppressive treatments that fail to eradicate the organism (e.g., paromomycin for L. chagasi infection) are controversial because they improve clinical signs but also allow the disease reservoir to flourish, and recommendations exist for euthanizing these dogs rather than treating them",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:18:58.000000Z",
                "updated_at": "2020-05-07T00:18:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 912,
                "drug_id": 349,
                "notes": "Recommended at the same dosage for feline trichomoniasis, but may not be effective or may even be detrimental (prolonging duration of diarrhea that otherwise usually spontaneously resolves over several months to 2 years)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:19:00.000000Z",
                "updated_at": "2020-05-07T00:19:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 913,
                "drug_id": 350,
                "notes": "Given to *victim*, not aggressor",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:19:30.000000Z",
                "updated_at": "2020-05-07T00:19:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 914,
                "drug_id": 350,
                "notes": "Requires several weeks to produce effects, and treatment for a minimum of 60 days is recommended for many disorders",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:19:32.000000Z",
                "updated_at": "2020-05-07T00:19:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 915,
                "drug_id": 351,
                "notes": "Generally replaced by succimer for lead toxicosis (appears more effective)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:20:36.000000Z",
                "updated_at": "2020-05-07T00:20:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 916,
                "drug_id": 351,
                "notes": "Equivalence/unit conversion: 10 µg/dL = 0.1 part per million (ppm)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:20:39.000000Z",
                "updated_at": "2020-05-07T00:20:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 917,
                "drug_id": 352,
                "notes": "Transparent solution (like water); therefore, can be given IV",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:22:15.000000Z",
                "updated_at": "2020-05-07T00:22:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 918,
                "drug_id": 352,
                "notes": "Penicillin G equivalency: 1000-1680 IU = 1 mg, depending on formulation",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:22:17.000000Z",
                "updated_at": "2020-05-07T00:22:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 919,
                "drug_id": 352,
                "notes": "Final concentration (when reconstituting - how much sterile water to add?) depends on patient's body weight and ability to receive volumes of intravenous fluid safely; e.g., a small cat with heart disease should receive a higher concentration solution because the volume of injectate is smaller, but the injection will need to be administered slowly (e.g., 30-40 minutes) to avoid iatrogenic potassium or sodium excess; conversely, a large and otherwise healthy dog may receive a more diluted concentration, which in turn may be infused more quickly (e.g., few minutes)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:22:19.000000Z",
                "updated_at": "2020-05-07T00:22:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 920,
                "drug_id": 352,
                "notes": "Equivalence/unit conversion: 1 mg = 1600 IU",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T00:22:21.000000Z",
                "updated_at": "2020-05-07T00:22:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 921,
                "drug_id": 352,
                "notes": "Penicillins, like all beta-lactams, are time-dependent antibiotics and therefore serum/tissue/urine levels should be kept some multiple (at least 3-5x) above the minimum inhibitory concentration throughout the course of treatment",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T00:22:24.000000Z",
                "updated_at": "2020-05-07T00:22:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 922,
                "drug_id": 352,
                "notes": "Narrow spectrum of antibacterial effect (poor for Gram-negative bacteria) compared to newer penicillins (amoxicillin-clavulanate, ampicillin-sulbactam, etc.); sensitive to beta-lactamase",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-07T00:22:26.000000Z",
                "updated_at": "2020-05-07T00:22:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 923,
                "drug_id": 353,
                "notes": "Opaque white solution (sustained-release); therefore, for IM or SC administration only",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:23:36.000000Z",
                "updated_at": "2020-05-07T00:23:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 924,
                "drug_id": 353,
                "notes": "Positive response with susceptible infections should produce visible clinical improvement in 24-48h after injection",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:23:38.000000Z",
                "updated_at": "2020-05-07T00:23:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 925,
                "drug_id": 353,
                "notes": "Generally kept refrigerated for storage; must be shaken well (to resuspend the drug), and warmed for at least 1-2 minutes in the syringe (armpit method) to minimize injection pain",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:23:41.000000Z",
                "updated_at": "2020-05-07T00:23:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 926,
                "drug_id": 353,
                "notes": "Intended for q 24-48h interdose interval; if repeated IM dosing is required, the sites of injection should be rotated to minimize reinjection in the same location (for reducing injection pain)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T00:23:43.000000Z",
                "updated_at": "2020-05-07T00:23:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 927,
                "drug_id": 353,
                "notes": "When injecting, aspirate first to ensure no blood flashback (risk of fatal intravascular injection)",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T00:23:45.000000Z",
                "updated_at": "2020-05-07T00:23:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 928,
                "drug_id": 354,
                "notes": "Advantages include sustained anesthetic effect with single dose, minimal cardiovascular effect, and very low cost; drawbacks include dependence on hepatic metabolism and possibility of respiratory depression",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:25:36.000000Z",
                "updated_at": "2020-05-07T00:25:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 929,
                "drug_id": 354,
                "notes": "Specific advantage of long duration of CNS depression is extended seizure suppression in cases of slowly eliminated convulsants (e.g., strychnine, drugs)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:25:38.000000Z",
                "updated_at": "2020-05-07T00:25:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 930,
                "drug_id": 355,
                "notes": "Lower dosage (1 mg/kg) is less effective but interestingly, higher dosage (5 mg/kg) is least effective of all",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:26:58.000000Z",
                "updated_at": "2020-05-07T00:26:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 931,
                "drug_id": 356,
                "notes": "Mechanism: increases red blood cell flexibility, and decreases blood viscosity, improving peripheral circulation",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:27:39.000000Z",
                "updated_at": "2020-05-07T00:27:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 932,
                "drug_id": 356,
                "notes": "Clinical theriogenology application: incubation of canine sperm with 10 or 100 mM pentoxifylline for 1-2 hours significantly increases sperm quality (induction of capacitation, acrosome reaction)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:27:42.000000Z",
                "updated_at": "2020-05-07T00:27:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 933,
                "drug_id": 357,
                "notes": "Efficacy is challenged by extensive placebo effect: the owners of 26-46% of epileptic dogs report a decrease in seizure activity even when treatment is placebo",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:30:00.000000Z",
                "updated_at": "2020-05-07T00:30:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 934,
                "drug_id": 357,
                "notes": "Many alternative anticonvulsants exist for long-term seizure control in epileptic dogs who have adverse reactions to phenobarbital and/or prohibitive concurrent illness (e.g., liver disease); some may be used concurrently for lower dosages of combination drug protocols, or may replace phenobarbital altogether: bromide, pregabalin, gabapentin, zonisamide, levetiracetam, and felbamate have individual advantages and drawbacks for this application",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:30:10.000000Z",
                "updated_at": "2020-05-07T00:30:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 935,
                "drug_id": 357,
                "notes": "Serum phenobarbital half-life becomes shorter with chronic treatment in epileptic dogs: 68h initially (range: 56-88h) vs. 46h (range: 14-120h) after 6 months of treatment",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:30:14.000000Z",
                "updated_at": "2020-05-07T00:30:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 936,
                "drug_id": 357,
                "notes": "Since half-life is long, there is no need to time a blood sample to pre- or post-dose (may be drawn anytime during the day, beginning after 1 week of treatment)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T00:30:16.000000Z",
                "updated_at": "2020-05-07T00:30:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 937,
                "drug_id": 357,
                "notes": "Blood should be collected in plain glass tubes (red top) for measuring serum phenobarbital levels, and not in serum separator tubes (tiger top) because the serum separator gel partially binds phenobarbital in vitro",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T00:30:18.000000Z",
                "updated_at": "2020-05-07T00:30:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 938,
                "drug_id": 357,
                "notes": "Extensive list of drug metabolism alterations; any patient receiving phenobarbital and 1 or more other drug(s) should have the combination evaluated carefully, including consultation with a pharmacist",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-07T00:30:21.000000Z",
                "updated_at": "2020-05-07T00:30:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 939,
                "drug_id": 358,
                "notes": "No value in treatment of feline urethral obstruction: shown to decrease pressure in the preprostatic (proximal) urethra, whereas urethral obstruction virtually always occurs distally, in the much narrower penile urethra where phenoxybenzamine has no effect",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:31:33.000000Z",
                "updated_at": "2020-05-07T00:31:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 940,
                "drug_id": 358,
                "notes": "Alpha-adrenergic blockade has slow onset of action due to non-competitive blocking nature of drug; beneficial clinical effect takes several days",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:31:36.000000Z",
                "updated_at": "2020-05-07T00:31:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 941,
                "drug_id": 359,
                "notes": "Essentially obsolete; numerous alternatives that are safer (especially re. gastrointestinal tolerance) and more effective in dogs and cats",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:32:17.000000Z",
                "updated_at": "2020-05-07T00:32:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 942,
                "drug_id": 360,
                "notes": "Before beginning treatment with phenylephrine, the clinician should be sure that the low blood pressure measurement is accurate, and that hypovolemia/dehydration, if present, is corrected first",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:33:04.000000Z",
                "updated_at": "2020-05-07T00:33:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 943,
                "drug_id": 361,
                "notes": "Has been combined with (or replaced with) once weekly oral diethylsilbestrol in cases where phenylephrine is ineffective or not tolerated",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:34:22.000000Z",
                "updated_at": "2020-05-07T00:34:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 944,
                "drug_id": 361,
                "notes": "Oral veterinary formulation: 1 drop contains 0.5 mg",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:34:25.000000Z",
                "updated_at": "2020-05-07T00:34:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 945,
                "drug_id": 361,
                "notes": "Urinary tract infection and incomplete dosing/poor compliance are common reasons for treatment failure",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:34:27.000000Z",
                "updated_at": "2020-05-07T00:34:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 946,
                "drug_id": 361,
                "notes": "\"Puppy vaginitis\", a disorder that often causes urinary incontinence, and is estrogen-responsive, may represent a form of urethral sphincter mechanism incompetence; response to non-hormonal therapy, e.g., phenylpropanolamine, further supports this notion",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T00:34:30.000000Z",
                "updated_at": "2020-05-07T00:34:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 947,
                "drug_id": 362,
                "notes": "Part of Euthasol euthanasia solution (pentobarbital 390 mg/mL + phenytoin 50 mg/mL)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:35:14.000000Z",
                "updated_at": "2020-05-07T00:35:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 948,
                "drug_id": 363,
                "notes": "Value of response to treatment (visible improvement in reduction of clinical signs, as a guide for ongoing use) warrants investigation",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:37:03.000000Z",
                "updated_at": "2020-05-07T00:37:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 949,
                "drug_id": 363,
                "notes": "Use in cats has not been fully investigated pharmacologically",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:37:06.000000Z",
                "updated_at": "2020-05-07T00:37:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 950,
                "drug_id": 363,
                "notes": "Combination with digoxin is reasonable: both are positive inotropes but digoxin's neurohormonal (ACE inhibitor-like) effects, baroreceptor upregulating effects, and mild diuretic effects are not found with pimobendan, whereas pimobendan's vasodilating effects and propensity to drastically improve general demeanor in some individual dogs are not found with digoxin",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:37:09.000000Z",
                "updated_at": "2020-05-07T00:37:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 951,
                "drug_id": 364,
                "notes": "Bacteroides species are generally resistant to penicillin-class antibacterials, but piperacillin is an exception",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:37:41.000000Z",
                "updated_at": "2020-05-07T00:37:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 952,
                "drug_id": 365,
                "notes": "Bacteroides species are generally resistant to penicillin-class antibacterials, but piperacillin is an exception",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:38:07.000000Z",
                "updated_at": "2020-05-07T00:38:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 953,
                "drug_id": 366,
                "notes": "Effective for several parasitoses of puppies, kittens, and adults, but generally replaced by equally safe but newer alternatives with a broader spectrum of activity",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:40:16.000000Z",
                "updated_at": "2020-05-07T00:40:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 954,
                "drug_id": 366,
                "notes": "Paralytic anthelmintic – potential for obstruction in heavy worm burden",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:40:18.000000Z",
                "updated_at": "2020-05-07T00:40:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 955,
                "drug_id": 367,
                "notes": "Although it is a nonsteroidal anti-inflammatory drug, it is almost never used for orthopedic or similar inflammatory disorders in dogs and cats, likely because of superior alternatives that have less risk of gastrointestinal and renal adverse effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:43:37.000000Z",
                "updated_at": "2020-05-07T00:43:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 956,
                "drug_id": 367,
                "notes": "Cyclooxygenase-2 (COX-2) gene expression in tumor tissue may be associated with a greater[1] or lesser[2] survival time during treatment with COX-2-inhibitors like piroxicam; this suggests that COX-2 inhibition may be a double-edged sword, offering a therapeutic target in some instances, or being associated with a biologically more aggressive tumor type in others",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:43:39.000000Z",
                "updated_at": "2020-05-07T00:43:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 957,
                "drug_id": 368,
                "notes": "Standard replacement therapy for sensible and insensible daily losses is 20 mEq/L of IV fluids administered at maintenance rates, which corresponds to 0.055 mEq/kg/h (adjusted upward if additional potassium losses and anorexia are present, and downward if some potassium intake is taking place, e.g., eating some food)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:44:34.000000Z",
                "updated_at": "2020-05-07T00:44:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 958,
                "drug_id": 368,
                "notes": "The standard maximum infusion dose is 0.5 mEq/kg/hour, although infusion rates of 1.5 mEq/kg/hour for one hour have been successful in acutely hypokalemic dogs with ongoing losses",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:44:37.000000Z",
                "updated_at": "2020-05-07T00:44:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 959,
                "drug_id": 368,
                "notes": "Intravenous potassium overdose is the most common life-threatening/fatal drug error in human ICUs, and risk may be minimized by: triple-checking the concentration of the KCl solution in the vial before drawing it up into the syringe, triple-checking dosage calculations, always diluting before administration, mixing the IV fluid bag well after adding KCl, and ensuring that lyophilized/powdered drugs are reconstituted with sterile water and not KCl by mistake",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:44:41.000000Z",
                "updated_at": "2020-05-07T00:44:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 960,
                "drug_id": 368,
                "notes": "Oral potassium chloride may be given for chronic supplementation (e.g., several salt substitutes available in supermarkets contain only potassium chloride, or a mixture of potassium chloride and sodium chloride); some dogs and cats find the taste unpleasant, however, and potassium gluconate often is more palatable",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T00:44:44.000000Z",
                "updated_at": "2020-05-07T00:44:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 961,
                "drug_id": 368,
                "notes": "A typical oral dosage for chronic supplementation in dogs or cats with normal renal function (pure potassium chloride) is 1/2 teaspoon (2.5 mL) potassium chloride crystals per 10 kg body weight per meal, mixed with food, with the dosage adjusted according to recheck serum electrolyte levels",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T00:44:46.000000Z",
                "updated_at": "2020-05-07T00:44:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 962,
                "drug_id": 368,
                "notes": "It is useful to remember that normal in vitro blood clotting releases potassium from platelets; a more accurate result for serum potassium is obtained with a green-top tube (lithium heparin as anticoagulant) because a red-top tube (plain) allows blood to clot, and pseudohyperkalemia may result, or hypokalemia may be artifactually masked (\"pseudonormokalemia\")",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-07T00:44:48.000000Z",
                "updated_at": "2020-05-07T00:44:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 963,
                "drug_id": 368,
                "notes": "Equivalence/conversion: 1 mEq KCl = 75 mg KCl",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-07T00:44:50.000000Z",
                "updated_at": "2020-05-07T00:44:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 964,
                "drug_id": 368,
                "notes": "1/4 teaspoon (1.25 grams) of potassium-based salt substitute (e.g. NoSalt) contains 650 mg potassium",
                "is_visible": 0,
                "display_order": 8,
                "created_at": "2020-05-07T00:44:53.000000Z",
                "updated_at": "2020-05-07T00:44:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 965,
                "drug_id": 369,
                "notes": "Competitive inhibitor of oxalate formation: binds with calcium and resulting calcium-citrate complex is more water-soluble (and less likely to precipitate) than calcium oxalate",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:45:45.000000Z",
                "updated_at": "2020-05-07T00:45:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 966,
                "drug_id": 369,
                "notes": "Function as urinary alkalinizer also serves useful monitoring purpose: dosage for preventing oxalate urolithiasis should be raised to keep urine pH ≥ 7.0 (with sterile urine, since urinary tract infections in dogs commonly lead to urine pH > 7.0)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:45:48.000000Z",
                "updated_at": "2020-05-07T00:45:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 967,
                "drug_id": 369,
                "notes": "Application for reducing the risk of oxalate urolithiasis in cats is of concern, because alkalinization of urine (and reducing oxalate risk) may concomitantly increase the likelihood of struvite urolithiasis",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:45:50.000000Z",
                "updated_at": "2020-05-07T00:45:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 968,
                "drug_id": 369,
                "notes": "Some prescription diets designed to reduce the risk of canine oxalate urolithiasis already contain potassium citrate (e.g., Hills Prescription Diet u/d)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T00:45:52.000000Z",
                "updated_at": "2020-05-07T00:45:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 969,
                "drug_id": 369,
                "notes": "Equivalence/conversion: 1 mEq potassium citrate = 108 mg potassium citrate",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T00:45:54.000000Z",
                "updated_at": "2020-05-07T00:45:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 970,
                "drug_id": 370,
                "notes": "Equivalence/conversion: 1 mEq potassium gluconate = 233 mg potassium gluconate",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:46:47.000000Z",
                "updated_at": "2020-05-07T00:46:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 971,
                "drug_id": 371,
                "notes": "Typical potassium phosphate preparation for injection is a solution containing 4.4 mEq/L potassium and 3 mmol/L phosphate",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:47:46.000000Z",
                "updated_at": "2020-05-07T00:47:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 972,
                "drug_id": 371,
                "notes": "Hemolysis interferes (invalidates) serum phosphorus measurement, which can complicate management even further if hypophosphatemia was not suspected and identified early",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:47:48.000000Z",
                "updated_at": "2020-05-07T00:47:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 973,
                "drug_id": 371,
                "notes": "Potassium deficits in hypokalemic ketoacidotic diabetics usually are corrected by giving half the potassium complement as potassium chloride and the other half as potassium phosphate (barring hyperphosphatemia, oliguria, and/or anuria)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:47:50.000000Z",
                "updated_at": "2020-05-07T00:47:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 974,
                "drug_id": 371,
                "notes": "A species predilection/susceptibility to hypophosphatemia-induced hemolysis is suspected in the cat",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T00:47:53.000000Z",
                "updated_at": "2020-05-07T00:47:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 975,
                "drug_id": 372,
                "notes": "Clinical trials have indicated safe, extended use in cats (up to 6 weeks) but such use is being associated with sporadic cases of myelotoxicosis, and should be undertaken with caution (and complete blood count[s] as indicated)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:48:42.000000Z",
                "updated_at": "2020-05-07T00:48:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 976,
                "drug_id": 373,
                "notes": "Used at the same dosage and interval for nicotine toxicosis",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:49:29.000000Z",
                "updated_at": "2020-05-07T00:49:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 977,
                "drug_id": 373,
                "notes": "Some of the more common organophosphate insecticides are chlorpyrifos, diazinon, dichlorvos, fenthion, malathion, and parathion",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:49:31.000000Z",
                "updated_at": "2020-05-07T00:49:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 978,
                "drug_id": 373,
                "notes": "Slow IV administration is advocated in some sources, but this route is associated with acute laryngospasm in dogs; IM route is preferred, or if IV route is used, laryngoscope, suitably-sized endotracheal tube, and anesthetic induction agent should be available for immediate use",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:49:33.000000Z",
                "updated_at": "2020-05-07T00:49:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 979,
                "drug_id": 373,
                "notes": "Oximes work best in the presence of atropine; coadministration of atropine with pralidoxime is recommended unless contraindicated by other factors",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T00:49:36.000000Z",
                "updated_at": "2020-05-07T00:49:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 980,
                "drug_id": 374,
                "notes": "Spectrum of activity is generally limited to cestodes (tapeworms), but incorporation into numerous multi-ingredient products broadens spectrum (of the combination) extensively",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:51:18.000000Z",
                "updated_at": "2020-05-07T00:51:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 981,
                "drug_id": 374,
                "notes": "Castor oil suspension enhances efficacy of SC application: in dogs, 10-fold lower dosage of castor-oil-formulated praziquantel still achieves better anti-Dipylidium effects than standard praziquantel",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:51:20.000000Z",
                "updated_at": "2020-05-07T00:51:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 982,
                "drug_id": 375,
                "notes": "Main advantage for treatment of systemic hypertension is lower cost compared to amlodipine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:53:06.000000Z",
                "updated_at": "2020-05-07T00:53:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 983,
                "drug_id": 375,
                "notes": "Urethral effects appear to be concentrated in the prostatic region in both dogs and cats, where the urethral diameter is wide and obstruction is inherently unlkely (i.e., limited to no benefit)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:53:08.000000Z",
                "updated_at": "2020-05-07T00:53:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 984,
                "drug_id": 376,
                "notes": "Typical replacement protocol: administer daily (if monthly DOCP injections) and/or as needed when signs of recurrence are apparent (if fludrocortisone daily tablets), for life",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:55:28.000000Z",
                "updated_at": "2020-05-07T00:55:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 985,
                "drug_id": 376,
                "notes": "Typical anti-inflammatory protocol: administer once daily for 7 days, then every other day for 7-10 days, then either stop or re-evaluate (and improve treatment of) underlying inflammatory process; consider alternatives (e.g., nonsteroidal anti-inflammatories instead of, never together with, prednisone/prednisolone; co-treatment with omega-3 fatty acid supplementation; etc.) if initial treatment is not sufficient or if recurrence occurs quickly (e.g., days-weeks after stopping prednisone/prednisolone)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:55:30.000000Z",
                "updated_at": "2020-05-07T00:55:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 986,
                "drug_id": 376,
                "notes": "Typical immunosuppressive protocol: administer once daily for 4-6 weeks (with second immunosuppressant) and taper prednisone/prednisolone to discontinue ideally within 8 weeks - longer if process is not well controlled and patient shows no adverse glucocorticoid signs, or shorter if process is well-controlled and patient shows adverse glucocorticoid signs",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:55:32.000000Z",
                "updated_at": "2020-05-07T00:55:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 987,
                "drug_id": 376,
                "notes": "Typical antineoplastic protocol: lower starting dosage and 3-month taper in dogs; higher starting dosage and 3-month reduction (but continue low dosage) in cats",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T00:55:34.000000Z",
                "updated_at": "2020-05-07T00:55:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 988,
                "drug_id": 376,
                "notes": "Like any chronically-used glucocorticoid, prednisone/prednisolone should be titrated to the lowest effective dosage; treatment of the underlying cause must be undertaken to the greatest possible extent; consideration should be given to the use of effective non-glucocorticoid alternatives; and the perceived benefit must outweigh the real potential for adverse effects",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T00:55:37.000000Z",
                "updated_at": "2020-05-07T00:55:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 989,
                "drug_id": 376,
                "notes": "Adverse effects of glucocorticoids that appear to be \"nuisance-based\" to the veterinarian (such as panting perceived by the client as discomfort, polyuria causing indoor urinary incontinence, behavioral change, or obesity causing lameness, dyspnea, and listlessness) may be profoundly life-threatening because such signs, though preventable, lead clients to opt for euthanasia.",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-07T00:55:39.000000Z",
                "updated_at": "2020-05-07T00:55:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 990,
                "drug_id": 376,
                "notes": "In order to be biologically active, prednisone (PO) must be hepatically transformed to prednisolone, the active compound; since a particular animal's ability to do so is unknown, using prednisolone is preferable when possible",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-07T00:55:42.000000Z",
                "updated_at": "2020-05-07T00:55:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 991,
                "drug_id": 376,
                "notes": "For daily chronic replacement (hypoadrenocorticism), some clinicians prefer to give the q 24h dose in the morning to dogs, to more closely mimic circadian rhythms +/- reduce adrenocortical suppression (unproven)",
                "is_visible": 0,
                "display_order": 8,
                "created_at": "2020-05-07T00:55:44.000000Z",
                "updated_at": "2020-05-07T00:55:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 992,
                "drug_id": 376,
                "notes": "When stopping treatment that has been ongoing for more than 1-2 weeks, gradual tapering is necessary to allow spontaneous glucocorticoid synthesis to resume and avoid iatrogenic hypoadrenocorticism/corticosteroid withdrawal",
                "is_visible": 0,
                "display_order": 9,
                "created_at": "2020-05-07T00:55:47.000000Z",
                "updated_at": "2020-05-07T00:55:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 993,
                "drug_id": 377,
                "notes": "Historically high dosages have been advocated, but increasing recognition of the risk of GI ulceration warrants a more cautious approach: an appropriate method is to administer a partial dose (e.g., half), monitor, and then decide based on response whether the remainder of the dose should be given",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:58:00.000000Z",
                "updated_at": "2020-05-07T00:58:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 994,
                "drug_id": 377,
                "notes": "For hypoadrenal crisis: this drug will falsely elevate cortisol results; therefore, the ACTH stimulation test should be completed (or a different drug given instead, e.g., dexamethasone) before giving prednisolone sodium succinate",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:58:03.000000Z",
                "updated_at": "2020-05-07T00:58:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 995,
                "drug_id": 377,
                "notes": "For hypoadrenal crisis, mineralocorticoid will also be needed, but dilution of hyperkalemia and antihyperkalemic measures (sodium bicarbonate, insulin/dextrose administration) are usually sufficient to stabilize the patient",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T00:58:05.000000Z",
                "updated_at": "2020-05-07T00:58:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 996,
                "drug_id": 378,
                "notes": "Pregabalin has better bioavailability (and other pharmacokinetic advantages) over gabapentin, and is emerging as a preferable third anticonvulsant in refractory canine epilepsy",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T00:58:43.000000Z",
                "updated_at": "2020-05-07T00:58:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 997,
                "drug_id": 378,
                "notes": "Pregabalin and gabapentin are both gamma aminobutyric acid (GABA) analogs; since pregabalin is a more potent compound, it can achieve similar therapeutic effects, and potentially fewer adverse effects, than gabapentin",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T00:58:46.000000Z",
                "updated_at": "2020-05-07T00:58:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 998,
                "drug_id": 379,
                "notes": "Sustained-release formulation (e.g., Pronestyl-SR) is most feasible because it is administered q 8h, vs. regular formulation (q 4h); however, sustained-release tablet has variable absorption characteristics, and several anecdotal reports describe dogs' defecating whole undigested tablets",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:00:12.000000Z",
                "updated_at": "2020-05-07T01:00:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 999,
                "drug_id": 379,
                "notes": "Difficult to obtain because obsolete in human cardiology",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:00:15.000000Z",
                "updated_at": "2020-05-07T01:00:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 1000,
                "drug_id": 379,
                "notes": "The goal of antiarrhythmic treatment is reestablishment of a perfusing rhythm if the arrhythmia was severe (hypotension), not full normalization of the electrocardiogram",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:00:17.000000Z",
                "updated_at": "2020-05-07T01:00:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 1001,
                "drug_id": 379,
                "notes": "Hypokalemia both predisposes to ventricular arrhythmias and also creates absolute refractoriness to procainamide",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T01:00:19.000000Z",
                "updated_at": "2020-05-07T01:00:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1002,
                "drug_id": 379,
                "notes": "Dilutional hypokalemia is common in postoperative ventricular arrhythmia patients (e.g., gastric dilation-volvulus)",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T01:00:21.000000Z",
                "updated_at": "2020-05-07T01:00:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 1003,
                "drug_id": 379,
                "notes": "Many reversible disorders cause ventricular arrhythmias and must be managed first or concurrently because they may render procainamide treatment ineffective; these include splenic masses, anemia, hypoxemia, and catecholamine surges (e.g., pain, extreme anxiety)",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-07T01:00:24.000000Z",
                "updated_at": "2020-05-07T01:00:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 1004,
                "drug_id": 380,
                "notes": "Offers substantial benefit as first-line (e.g., sterile meningoencephalitis) or rescue (e.g., lymphoma) therapy",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:01:19.000000Z",
                "updated_at": "2020-05-07T01:01:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1005,
                "drug_id": 381,
                "notes": "Combination tranquilizer and antiemetic may be useful in agitated but otherwise healthy nauseated young dogs; generally replaced by newer antiemetics that are more potent and have fewer sedative and vasodilating effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:02:10.000000Z",
                "updated_at": "2020-05-07T01:02:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 1006,
                "drug_id": 382,
                "notes": "Very limited convincing benefit in bradyarrhythmias like sick sinus syndrome/sinus node dysfunction, but may be considered when pacemaker implantation is recommended but not feasible (e.g., financial or logistical restrictions)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:02:56.000000Z",
                "updated_at": "2020-05-07T01:02:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 1007,
                "drug_id": 382,
                "notes": "Positive response to an atropine response test does not reliably predict whether propantheline will provide a clinical benefit",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:02:58.000000Z",
                "updated_at": "2020-05-07T01:02:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 1008,
                "drug_id": 382,
                "notes": "May be difficult to obtain; alternatives for sick sinus syndrome include aminophylline/theophylline, terbutaline (uptitrating terbutaline dosage carefully to avoid tachycardia, especially in dogs with structural heart disease, e.g., degenerative mitral valve disease), or oral atropine (Sal-Tropine)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:03:00.000000Z",
                "updated_at": "2020-05-07T01:03:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1009,
                "drug_id": 383,
                "notes": "In practical terms, half the calculated dose is given as a slow bolus (5-10 seconds) and then further small increments of the dose are administered until jaw tone is sufficiently decreased to allow intubation",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:05:28.000000Z",
                "updated_at": "2020-05-07T01:05:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 1010,
                "drug_id": 383,
                "notes": "No analgesic properties; therefore requires cotreatment with analgesic or anesthetic for any invasive procedure",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:05:31.000000Z",
                "updated_at": "2020-05-07T01:05:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 1011,
                "drug_id": 383,
                "notes": "Ultimately eliminated by hepatic glucuronidation; may accumulate in cats at dosages that are well-tolerated by dogs (and in patients of either species if severe liver disease)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:05:33.000000Z",
                "updated_at": "2020-05-07T01:05:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1012,
                "drug_id": 384,
                "notes": "As with every beta-blocker, adverse effects (notably hypotension and bradycardia, which can be catastrophic/life-threatening) are best avoided by beginning at the low end of the dosage range and uptitrating as needed based on response",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:06:56.000000Z",
                "updated_at": "2020-05-07T01:06:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 1013,
                "drug_id": 384,
                "notes": "Also as with every beta-blocker, propranolol is only started once overt congestive heart failure (pulmonary edema, pleural effusion, ascites) has been controlled/fluid has been eliminated with diuretics; otherwise, suppression of the heart rate is too inexact (despite titration) and may lead to periods of bradycardia where retained fluid would be detrimental or possibly life-threatening",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:06:58.000000Z",
                "updated_at": "2020-05-07T01:06:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 1014,
                "drug_id": 384,
                "notes": "Replaced by atenolol, sotalol, or other beta-blockers for essentially every indication due to duration of action and side-effect profile",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:07:01.000000Z",
                "updated_at": "2020-05-07T01:07:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 1015,
                "drug_id": 384,
                "notes": "Paradoxically, cats require a lower, not higher, dosage when hyperthyroid; mechanism/reason unknown",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T01:07:03.000000Z",
                "updated_at": "2020-05-07T01:07:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 1016,
                "drug_id": 384,
                "notes": "Nonspecific beta-blocker (B1 and B2) confers risk of bronchoconstriction",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T01:07:08.000000Z",
                "updated_at": "2020-05-07T01:07:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 1017,
                "drug_id": 385,
                "notes": "Essentially always replaced by phenylpropanolamine for urethral sphincter mechanism incompetence",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:08:22.000000Z",
                "updated_at": "2020-05-07T01:08:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 1018,
                "drug_id": 385,
                "notes": "In humans, there is a potential for downregulation of nasal mucosal alpha-1 adrenergic receptors with sustained use, leading to rebound nasal congestion with termination of drug (not convincingly documented in animals, perhaps because topical use is less frequent)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:08:24.000000Z",
                "updated_at": "2020-05-07T01:08:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 1019,
                "drug_id": 386,
                "notes": "Similar dosage used for constipation prevention in dogs and cats, titrated to produce soft stools but not diarrhea",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:08:53.000000Z",
                "updated_at": "2020-05-07T01:08:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 1020,
                "drug_id": 386,
                "notes": "Wheat bran and canned (or cooked, cooled) pumpkin may be good alternatives for addition of insoluble fiber to food",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:08:55.000000Z",
                "updated_at": "2020-05-07T01:08:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 1021,
                "drug_id": 386,
                "notes": "Additional application is to increase dietary fiber for diabetic animals, improving daily glycemic control",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:08:57.000000Z",
                "updated_at": "2020-05-07T01:08:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 1022,
                "drug_id": 386,
                "notes": "Conversion/equivalency: 1 teaspoon = 5 mL; 1 tablespoon = 15 mL",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T01:08:59.000000Z",
                "updated_at": "2020-05-07T01:08:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 1023,
                "drug_id": 386,
                "notes": "1 rounded tablespoon (15-20 mL) Metamucil powder contains 2.1 g of soluble dietary fiber",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T01:09:02.000000Z",
                "updated_at": "2020-05-07T01:09:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 1024,
                "drug_id": 386,
                "notes": "Adequate oral fluid intake (or parenteral fluid administration if animal is not eating and drinking); otherwise, fiber may form solid concretion and create bowel obstruction",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-07T01:09:04.000000Z",
                "updated_at": "2020-05-07T01:09:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 1025,
                "drug_id": 387,
                "notes": "Incorporated into many combination products with broad-spectrum antiparasitic efficacy",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:10:58.000000Z",
                "updated_at": "2020-05-07T01:10:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 1026,
                "drug_id": 387,
                "notes": "Minimal systemic absorption, so immature larval forms may not be affected (another reason for repeat treatment besides reinfestation)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:11:00.000000Z",
                "updated_at": "2020-05-07T01:11:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1027,
                "drug_id": 388,
                "notes": "Neostigmine may be more readily available (but is injectable)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:12:42.000000Z",
                "updated_at": "2020-05-07T01:12:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 1028,
                "drug_id": 388,
                "notes": "Drug transport to stomach with any oral formulation may be severely negatively influenced (and toxicity enhanced) by megaesophagus; extended-release formulation pharmacokinetics are unknown in dogs or cats with naturally-occurring megaesophagus",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:12:44.000000Z",
                "updated_at": "2020-05-07T01:12:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 1029,
                "drug_id": 388,
                "notes": "Contraindicated with organophosphate exposure, which includes not only pesticide-based intoxication but also therapeutic organophosphate use (e.g., flea collars, flea-and-tick powders, etc.)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:12:46.000000Z",
                "updated_at": "2020-05-07T01:12:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 1030,
                "drug_id": 389,
                "notes": "For hepatozoonosis: poor efficacy in dogs with advanced glomerular disease",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:13:36.000000Z",
                "updated_at": "2020-05-07T01:13:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 1031,
                "drug_id": 389,
                "notes": "Also for hepatozoonosis: effective tick control is important for preventing reinfestation",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:13:38.000000Z",
                "updated_at": "2020-05-07T01:13:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 1032,
                "drug_id": 389,
                "notes": "Better alternatives for toxoplasmosis (e.g., clindamycin)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:13:41.000000Z",
                "updated_at": "2020-05-07T01:13:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 1033,
                "drug_id": 390,
                "notes": "ABCB1 (MDR-1) mutation in collies and other dogs has minimal effect on metabolism and risk of toxicosis of quinidine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:14:58.000000Z",
                "updated_at": "2020-05-07T01:14:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 1034,
                "drug_id": 390,
                "notes": "IV administration enhances arrhythmogenicity and is not recommended",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:15:03.000000Z",
                "updated_at": "2020-05-07T01:15:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 1035,
                "drug_id": 390,
                "notes": "Deep intramuscular injection is recommended due to injection pain",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:15:06.000000Z",
                "updated_at": "2020-05-07T01:15:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1036,
                "drug_id": 391,
                "notes": "Seemingly similar in function and safety as other ACE inhibitors, but less well investigated clinically and therefore without clear advantage over enalapril and benazepril",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:16:05.000000Z",
                "updated_at": "2020-05-07T01:16:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 1037,
                "drug_id": 392,
                "notes": "Generally replaced by other gastric acid-suppressants (e.g., omeprazole) and promotility agents (e.g., metoclopramide)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:17:16.000000Z",
                "updated_at": "2020-05-07T01:17:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 1038,
                "drug_id": 392,
                "notes": "In cats, high-dosage IV ranitidine (5 mg/kg) reduces gastric acid secretion but also causes a significant decrease in arterial blood pressure that could be harmful to clinical patients",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:17:19.000000Z",
                "updated_at": "2020-05-07T01:17:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1039,
                "drug_id": 393,
                "notes": "Extensive list of drug metabolism alterations; any patient receiving rifampin and 1 or more other drug(s) should have the combination evaluated carefully, including consultation with a pharmacist",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:18:18.000000Z",
                "updated_at": "2020-05-07T01:18:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 1040,
                "drug_id": 393,
                "notes": "Can cause red/orange discoloration of urine (not to be mistaken for hematuria)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:18:20.000000Z",
                "updated_at": "2020-05-07T01:18:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 1041,
                "drug_id": 393,
                "notes": "Should never be used as monotherapy (development of bacterial resistance) but rather as part of a multidrug protocol",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:18:22.000000Z",
                "updated_at": "2020-05-07T01:18:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 1042,
                "drug_id": 394,
                "notes": "New; promoted for palatability of oral preparation in cats",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:19:33.000000Z",
                "updated_at": "2020-05-07T01:19:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1043,
                "drug_id": 395,
                "notes": "Palatability may be superior if powder is placed in gelatin capsules",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:20:13.000000Z",
                "updated_at": "2020-05-07T01:20:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 1044,
                "drug_id": 395,
                "notes": "Fenbendazole likely a safer and more effective option for giardiasis",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:20:16.000000Z",
                "updated_at": "2020-05-07T01:20:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 1045,
                "drug_id": 396,
                "notes": "Efficacy is highly questionable, since the main disorder for which this drug is used (chylothorax) may produce spontaneous resolution without treatment; however, considered very safe with essentially no adverse effect reported at clinical dosages",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:21:03.000000Z",
                "updated_at": "2020-05-07T01:21:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 1046,
                "drug_id": 396,
                "notes": "Stated mechanism of action is to increase macrophage-driven resorption of chylous effusion",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:21:06.000000Z",
                "updated_at": "2020-05-07T01:21:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1047,
                "drug_id": 397,
                "notes": "Typically formulated as 21, 25, or 50 µg/actuation (puff), but formulation varies: \"Diskus\"-type preparation (inhalant powder) should be avoided because it requires the patient to perform a single vigorous inhalation and does not provide propellant gas (i.e., not useful in animals)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:21:41.000000Z",
                "updated_at": "2020-05-07T01:21:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 1048,
                "drug_id": 397,
                "notes": "In asthmatic cats, beneficial effects are limited compared to oral prednisolone treatment",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:21:43.000000Z",
                "updated_at": "2020-05-07T01:21:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 1049,
                "drug_id": 397,
                "notes": "May be combined with fluticasone in a dual-ingredient product (e.g., Advair)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:21:48.000000Z",
                "updated_at": "2020-05-07T01:21:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 1050,
                "drug_id": 397,
                "notes": "This preparation would have too slow an onset for acute dyspnea – albuterol would be preferable as a “rescue” drug",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T01:21:51.000000Z",
                "updated_at": "2020-05-07T01:21:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 1051,
                "drug_id": 398,
                "notes": "Bathing after treatment (e.g., 2-96h after application) does not alter efficacy of heartworm prevention (and likely not of other effects as well)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:24:07.000000Z",
                "updated_at": "2020-05-07T01:24:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 1052,
                "drug_id": 398,
                "notes": "Labeled efficacy also extends to ear mites (Otodectes cynotis) and ticks (e.g., wood tick, Dermacentor variabilis, which is not the tick that carries Borrelia burgdorferi) in dogs, and roundworms and hookworms (e.g., Toxocara cati, Ancylostoma tubaeforme) in cats",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:24:10.000000Z",
                "updated_at": "2020-05-07T01:24:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 1053,
                "drug_id": 398,
                "notes": "Dog formulations: mauve package (0.25 mL of 60 mg/mL = 15 mg dose) for dogs < 2.3 kg; purple package (0.25 mL of 120 mg/mL = 30 mg dose) for dogs = 2.3-4.5 kg; brown package (0.5 mL of 120 mg/mL = 60 mg dose) for dogs = 4.6-9.1 kg; red package (1 mL of 120 mg/mL = 120 mg dose) for dogs 9.2-18.2 kg; teal package (2 mL of 120 mg/mL = 240 mg dose) for dogs 18.3-39 kg; plum package (3 mL of 120 mg/mL = 360 mg dose) for dogs 40-58 kg",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:24:12.000000Z",
                "updated_at": "2020-05-07T01:24:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 1054,
                "drug_id": 398,
                "notes": "Cat formulations: mauve package (0.25 mL of 60 mg/mL = 15 mg dose) for cats < 2.3 kg; blue package (0.75 mL of 60 mg/mL = 45 mg dose) for cats 2.3 - 6.8 kg",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T01:24:15.000000Z",
                "updated_at": "2020-05-07T01:24:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 1055,
                "drug_id": 398,
                "notes": "ABCB1 mutation does not appear to confer risk of toxicosis to selamectin at standard 3-6 mg/kg dosage",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T01:24:17.000000Z",
                "updated_at": "2020-05-07T01:24:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 1056,
                "drug_id": 398,
                "notes": "Public health/veterinary personnel concern: selamectin residue is detectable on gloves worn when handling dogs that have received standard topical doses of selamectin, with selamectin contact residue concentrations peaking at 24h after application (519 +/- 67 ppm) and remaining detectable for 4 weeks after 1 treatment (yet the cutaneous tropism of the drug explains why blood samples drawn from the dogs at the same time reveal no circulating selamectin)",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-07T01:24:19.000000Z",
                "updated_at": "2020-05-07T01:24:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1057,
                "drug_id": 399,
                "notes": "Extensive list of drug interactions; any patient receiving selegiline and 1 or more other drug(s) should have the combination evaluated carefully, including consultation with a pharmacist",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:25:30.000000Z",
                "updated_at": "2020-05-07T01:25:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 1058,
                "drug_id": 399,
                "notes": "Would be illogical to use it for hyperadrenocorticism caused by an adrenal tumor, since it works centrally to suppress CRH/ACTH release",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:25:33.000000Z",
                "updated_at": "2020-05-07T01:25:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1059,
                "drug_id": 400,
                "notes": "Short- and medium-term benefit for management of pulmonary hypertension is clear; long-term (sustained) benefit, and any benefit derived from early intervention (e.g., before overt clinical signs occur) is less well defined (benefit of early intervention vs. adaptation/loss of drug efficacy)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:26:53.000000Z",
                "updated_at": "2020-05-07T01:26:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 1060,
                "drug_id": 401,
                "notes": "The same dosage is used for chronic liver diseases",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:28:26.000000Z",
                "updated_at": "2020-05-07T01:28:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 1061,
                "drug_id": 401,
                "notes": "Dosages are stated for milk thistle derivative content (i.e., variable); silybin A+B combinations are the most common and are administered as labeled on the package for prescription veterinary preparations",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:28:29.000000Z",
                "updated_at": "2020-05-07T01:28:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 1062,
                "drug_id": 402,
                "notes": "Conversion/equivalency: 8.4% solution = 84 mg/dL = 1 mEq/L = 1 mmol/L",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:30:00.000000Z",
                "updated_at": "2020-05-07T01:30:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1063,
                "drug_id": 402,
                "notes": "Not considered a first-line drug for cardiopulmonary cerebral resuscitation (treat acidosis with ventilation and perfusion)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:30:02.000000Z",
                "updated_at": "2020-05-07T01:30:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 1064,
                "drug_id": 403,
                "notes": "\"Broad-spectrum\" antiarrhythmic, with class II and class III antiarrhythmic effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:31:03.000000Z",
                "updated_at": "2020-05-07T01:31:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 1065,
                "drug_id": 403,
                "notes": "As with every beta-adrenergic blocker, adverse effects (notably hypotension and bradycardia, which can be catastrophic/life-threatening) are best avoided by beginning at the low end of the dosage range and uptitrating as needed based on response",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:31:06.000000Z",
                "updated_at": "2020-05-07T01:31:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1066,
                "drug_id": 403,
                "notes": "Also as with every beta-adrenergic blocker, sotalol is only started once overt congestive heart failure (pulmonary edema, pleural effusion, ascites) has been controlled/fluid has been eliminated with diuretics; otherwise, suppression of the heart rate is too inexact (despite titration) and may lead to periods of bradycardia where retained fluid would be detrimental or possibly life-threatening",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:31:08.000000Z",
                "updated_at": "2020-05-07T01:31:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 1067,
                "drug_id": 404,
                "notes": "Can be given once a month; cumulative effect is apparent (98-99.8% reduction in flea numbers in infested households after 3 consecutive months of treatment)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:31:53.000000Z",
                "updated_at": "2020-05-07T01:31:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 1068,
                "drug_id": 404,
                "notes": "Similar mechanism as nitenpyram (Capstar) but it lasts 1 month, vs. 1 day for nitenpyram (for fleas)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:31:56.000000Z",
                "updated_at": "2020-05-07T01:31:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 1069,
                "drug_id": 405,
                "notes": "Antifibrotic and other cardiovascular benefits are extrapolated from human cardiology and poorly (or not) supported in veterinary medicine to date",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:33:01.000000Z",
                "updated_at": "2020-05-07T01:33:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 1070,
                "drug_id": 405,
                "notes": "While diuretic effects are poor for spironolactone as monotherapy in dogs, an enhanced effect may occur when spironolactone is combined with diuretics that act more proximally in the renal tubule (e.g., furosemide), creating sequential nephron blockade",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:33:03.000000Z",
                "updated_at": "2020-05-07T01:33:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 1071,
                "drug_id": 405,
                "notes": "Severe ulcerative facial dermatitis seems to be an idiosyncratic adverse reaction in some cats and appears to be more prevalent in Maine Coon cats",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:33:05.000000Z",
                "updated_at": "2020-05-07T01:33:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 1072,
                "drug_id": 406,
                "notes": "Both investigation and clinical use of this drug have fallen out of favor due to illicit use as a human performance-enhancing drug, and associated regulatory requirements and liabilities",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:33:50.000000Z",
                "updated_at": "2020-05-07T01:33:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 1073,
                "drug_id": 407,
                "notes": "Meglumine antimoniate may provide a higher rate of parasitological cure",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:34:20.000000Z",
                "updated_at": "2020-05-07T01:34:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 1074,
                "drug_id": 408,
                "notes": "In small animal medicine, benefit of rapid, active clot lysis is often matched or outweighed by drawbacks of reperfusion injury and uncontrollable bleeding; overall survival rate to discharge is not convincingly better with thrombolysis (e.g., streptokinase) than with conservative anticoagulation (e.g., heparin)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:35:06.000000Z",
                "updated_at": "2020-05-07T01:35:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1075,
                "drug_id": 409,
                "notes": "Cats are resistant to these effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:35:52.000000Z",
                "updated_at": "2020-05-07T01:35:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 1076,
                "drug_id": 410,
                "notes": "Superior in safety and efficacy to penicillamine and other treatments (e.g., administration easier than calcium EDTA because succimer is given orally)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:36:36.000000Z",
                "updated_at": "2020-05-07T01:36:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 1077,
                "drug_id": 410,
                "notes": "Oral treatment can cause false positive results for ketones on urine dipsticks",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:36:38.000000Z",
                "updated_at": "2020-05-07T01:36:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 1078,
                "drug_id": 411,
                "notes": "Very limited antiulcer efficacy but very safe when administered correctly",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:38:10.000000Z",
                "updated_at": "2020-05-07T01:38:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 1079,
                "drug_id": 411,
                "notes": "Discontinue at least 12h prior to endoscopy (could mask mucosal lesions)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:38:13.000000Z",
                "updated_at": "2020-05-07T01:38:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 1080,
                "drug_id": 411,
                "notes": "Slightly radiopaque (visible but not likely to be interpreted as foreign body)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:38:15.000000Z",
                "updated_at": "2020-05-07T01:38:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 1081,
                "drug_id": 411,
                "notes": "Sucralfate contains 20% aluminum (200 mg/g)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T01:38:17.000000Z",
                "updated_at": "2020-05-07T01:38:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 1082,
                "drug_id": 411,
                "notes": "May increase gastroprotective prostaglandin levels – another potential mechanism for beneficial effects in stomach",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T01:38:19.000000Z",
                "updated_at": "2020-05-07T01:38:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1083,
                "drug_id": 412,
                "notes": "Common causes of errors leading to severe toxicosis are: 1) publication of total daily dosage recommendations (e.g., \"30 mg/kg daily\"), which are then implemented twice daily \"because it's a b.i.d. drug\" (i.e., patient receives 30 mg/kg PO q 12 h instead of the correct 15 mg/kg PO q 12h); 2) failure to consider the concept of body surface area in large dogs, leading to disproportional overdosing in giant breeds (made especially easy through the availability of 960 mg tablets), and 3) failure to choose an alternative drug in dogs that may be unusually sensitive to this class of antibacterials (e.g., doberman pinschers)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:40:21.000000Z",
                "updated_at": "2020-05-07T01:40:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 1084,
                "drug_id": 412,
                "notes": "This is the main sulfonamide antibacterial given with trimethoprim in dogs (Tribrissen, Di-Trim), whereas sulfamethoxazole is more commonly combined with trimethoprim in human preparations (e.g., Bactrim)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:40:24.000000Z",
                "updated_at": "2020-05-07T01:40:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 1085,
                "drug_id": 412,
                "notes": "Apparent efficacy for some cases of neosporosis in dogs when coadministered with either pyrimethamine or clindamycin",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:40:26.000000Z",
                "updated_at": "2020-05-07T01:40:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 1086,
                "drug_id": 412,
                "notes": "Same dosage is used empirically for enteric coccidial infections in puppies and kittens (15 mg/kg PO q 12h X 7-14 days)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T01:40:31.000000Z",
                "updated_at": "2020-05-07T01:40:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 1087,
                "drug_id": 412,
                "notes": "Excellent lipid solubility means penetration of prostatic tissue, eye, central nervous system, etc.",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T01:40:34.000000Z",
                "updated_at": "2020-05-07T01:40:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 1088,
                "drug_id": 412,
                "notes": "Like all sulfonamides, the mechanism of action is inhibition of folic acid synthesis via competitive antagonism of para-amino benzoic acid; trimethoprim additionally inhibits folate synthesis at a different level in the synthetic process (inhibits conversion of dihydrofolate to tetrahydrofolate), making the combination of trimethoprim and sulfadiazine bactericidal",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-07T01:40:36.000000Z",
                "updated_at": "2020-05-07T01:40:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 1089,
                "drug_id": 412,
                "notes": "Ratio of the 2 components in the preparation is 5:1 sulfadiazine: trimethoprim",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-07T01:40:39.000000Z",
                "updated_at": "2020-05-07T01:40:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 1090,
                "drug_id": 413,
                "notes": "Coccidiostatic (vs. ponazuril, or potentiated sulfonamides, which are coccidiocidal)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:41:37.000000Z",
                "updated_at": "2020-05-07T01:41:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 1091,
                "drug_id": 413,
                "notes": "Like all sulfonamides, the mechanism of action is inhibition of folic acid synthesis via competitive antagonism of para-amino benzoic acid",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:41:39.000000Z",
                "updated_at": "2020-05-07T01:41:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 1092,
                "drug_id": 414,
                "notes": "Like all sulfonamides, the mechanism of action is inhibition of folic acid synthesis via competitive antagonism of para-amino benzoic acid; ormetoprim additionally inhibits folate synthesis at a different level in the synthetic process (inhibits conversion of dihydrofolate to tetrahydrofolate), making the combination of ormetoprim and sulfadimethoxine bactericidal",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:42:20.000000Z",
                "updated_at": "2020-05-07T01:42:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 1093,
                "drug_id": 414,
                "notes": "Advantage of ormetoprim over trimethoprim is longer duration of action, allowing q 24h administration",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:42:22.000000Z",
                "updated_at": "2020-05-07T01:42:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 1094,
                "drug_id": 414,
                "notes": "Ratio of the 2 components in the preparation is 5:1 sulfadimethoxine:ormetoprim",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:42:25.000000Z",
                "updated_at": "2020-05-07T01:42:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 1095,
                "drug_id": 415,
                "notes": "Like all sulfonamides, the mechanism of action is inhibition of folic acid synthesis via competitive antagonism of para-amino benzoic acid; trimethoprim additionally inhibits folate synthesis at a different level in the synthetic process (inhibits conversion of dihydrofolate to tetrahydrofolate), making the combination of trimethoprim and sulfamethoxazole bactericidal",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:43:26.000000Z",
                "updated_at": "2020-05-07T01:43:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 1096,
                "drug_id": 415,
                "notes": "Ratio of the 2 components in the preparation is 5:1 sulfamethoxazole: trimethoprim",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:43:28.000000Z",
                "updated_at": "2020-05-07T01:43:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 1097,
                "drug_id": 415,
                "notes": "This is the human drug combination; sulfadiazine/trimethoprim and sulfadimethoxine/ormetoprim are more common alternatives (and seemingly with equivalent efficacy) in veterinary medicine",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:43:30.000000Z",
                "updated_at": "2020-05-07T01:43:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 1098,
                "drug_id": 416,
                "notes": "For perianal fistula treatment, a substantial advantage over oral cyclosporine is cost: tacrolimus ointment may cost approximately 1/5 as much as oral cyclosporine for the same duration of treatment and similar effects; a drawback is topical application and the need to prevent the dog from licking (which should be part of management of the disease anyway) and avoiding human transdermal exposure to the drug",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:45:50.000000Z",
                "updated_at": "2020-05-07T01:45:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 1099,
                "drug_id": 416,
                "notes": "To limit the degree of removal of topical drug by the dog (via licking), owners can be instructed to apply the product immediately before feeding, playing, or other distractive activity",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:45:52.000000Z",
                "updated_at": "2020-05-07T01:45:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 1100,
                "drug_id": 417,
                "notes": "Advantage over sildenafil is q 48h (rather than q 8h) administration, but tadalafil has not been investigated as thoroughly as sildenafil in dogs with naturally-occurring pulmonary hypertension",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:46:30.000000Z",
                "updated_at": "2020-05-07T01:46:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 1101,
                "drug_id": 418,
                "notes": "Still investigational in veterinary medicine; clinical efficacy and safety unproven",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:47:05.000000Z",
                "updated_at": "2020-05-07T01:47:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 1102,
                "drug_id": 418,
                "notes": "Drug has an affinity for prostatic tissue, concentrating the alpha-1 adrenergic antagonist effects in the urogenital tract and not in the systemic vasculature (after oral administration in dogs, tamsulosin concentrations are 2-18 times higher in prostatic tissue than in blood)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:47:07.000000Z",
                "updated_at": "2020-05-07T01:47:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 1103,
                "drug_id": 419,
                "notes": "Taurine-deficient dilated cardiomyopathy was historically associated with cats, but is now well-recognized (and potentially fully reversible) in dogs, notably breeds of dogs not commonly affected with dilated cardiomyopathy (i.e., any breed other than doberman, boxer, Irish wolfhound, and great dane)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:48:10.000000Z",
                "updated_at": "2020-05-07T01:48:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 1104,
                "drug_id": 419,
                "notes": "Taurine response typically begins with improved demeanor and general signs of well-being 3-6 weeks after beginning treatment, followed by improvement in radiographic and echocardiographic parameters after 2-3 months of treatment",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:48:12.000000Z",
                "updated_at": "2020-05-07T01:48:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 1105,
                "drug_id": 419,
                "notes": "Whole blood taurine levels, which fluctuate less, are preferred to plasma taurine levels, which may change substantially depending on time since feeding",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:48:14.000000Z",
                "updated_at": "2020-05-07T01:48:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 1106,
                "drug_id": 419,
                "notes": "Ineffective at altering metabolic parameters or influencing hepatic lipidosis during rapid weight loss in obese cats",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T01:48:17.000000Z",
                "updated_at": "2020-05-07T01:48:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 1107,
                "drug_id": 420,
                "notes": "In cats, terbinafine concentrations remain therapeutic (i.e., above minimum inhibitory concentration) for Microsporum canis and several other dermatophytes for median 5.3 weeks after termination of treatment",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:49:50.000000Z",
                "updated_at": "2020-05-07T01:49:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 1108,
                "drug_id": 421,
                "notes": "Short-acting beta-2 agonist",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:51:31.000000Z",
                "updated_at": "2020-05-07T01:51:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 1109,
                "drug_id": 421,
                "notes": "Theriogenology application: as tocolytic therapy (to suppress uterine contractions) terbutaline 0.03 mg/kg PO q 8-12h to effect",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:51:33.000000Z",
                "updated_at": "2020-05-07T01:51:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1110,
                "drug_id": 422,
                "notes": "Both investigation and clinical use of this drug have fallen out of favor due to illicit use as a human performance-enhancing drug, and associated regulatory requirements and liabilities",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:52:32.000000Z",
                "updated_at": "2020-05-07T01:52:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 1111,
                "drug_id": 422,
                "notes": "Anecdotal application for hormone-responsive urinary incontinence in castrated male dogs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:52:35.000000Z",
                "updated_at": "2020-05-07T01:52:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 1112,
                "drug_id": 423,
                "notes": "Generally replaced by oral doxycycline for longer interdosage interval and fewer adverse effects",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:54:25.000000Z",
                "updated_at": "2020-05-07T01:54:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 1113,
                "drug_id": 423,
                "notes": "Heartworm microfilaria indication likely reflects action on Wolbachia within microfilariae, not a direct filaricide effect",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:54:27.000000Z",
                "updated_at": "2020-05-07T01:54:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1114,
                "drug_id": 424,
                "notes": "Caution re. dosing interval for regular formulation (may be difficult to obtain nowadays) vs. sustained-release formulation (widely available but mixed results for safety and efficacy in small animals)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:56:05.000000Z",
                "updated_at": "2020-05-07T01:56:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 1115,
                "drug_id": 424,
                "notes": "Aminophylline is a combination of 2 theophylline molecules and an ethylenediamine molecule; the combination enhances biological activity",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:56:07.000000Z",
                "updated_at": "2020-05-07T01:56:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 1116,
                "drug_id": 424,
                "notes": "Increases mucociliary clearance from large airways in dogs[1] but not cats[2] and increases strength of muscles of respiration that fatigue during chronic respiratory disease[3]",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T01:56:09.000000Z",
                "updated_at": "2020-05-07T01:56:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 1117,
                "drug_id": 424,
                "notes": "Chronic sterile bronchitis in dogs is typically treated with 10 mg/kg PO q 12-24h (sustained release) or q 8h (regular)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T01:56:18.000000Z",
                "updated_at": "2020-05-07T01:56:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 1118,
                "drug_id": 424,
                "notes": "Theophylline toxicosis typically includes tachycardia and CNS stimulation, reminiscent of chocolate toxicosis (logically, since the active ingredient in chocolate is theobromine, a relative of theophylline)",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T01:56:21.000000Z",
                "updated_at": "2020-05-07T01:56:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 1119,
                "drug_id": 424,
                "notes": "Extensive list of drug metabolism alterations; any patient receiving theophylline and 1 or more other drug(s) should have the combination evaluated carefully, including consultation with a pharmacist",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-07T01:56:23.000000Z",
                "updated_at": "2020-05-07T01:56:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 1120,
                "drug_id": 425,
                "notes": "In small animal practice, thiabendazole is most commonly encountered as the acaricidal/antifungal component of the broad-spectrum otic topical drug Tresaderm (neomycin + thiabendazole + dexamethasone)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:58:12.000000Z",
                "updated_at": "2020-05-07T01:58:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 1121,
                "drug_id": 426,
                "notes": "When assessing for thiamine deficiency, blood sample must be protected from light (use amber tubes, and/or cover) to avoid in vitro degradation of thiamine and erroneous diagnosis of thiamine deficiency",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T01:59:06.000000Z",
                "updated_at": "2020-05-07T01:59:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1122,
                "drug_id": 426,
                "notes": "Thiamine is the antidote for amprolium toxicosis (large animal dewormer, occasionally used in large dog kennel or shelter settings)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T01:59:09.000000Z",
                "updated_at": "2020-05-07T01:59:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 1123,
                "drug_id": 427,
                "notes": "Barbiturate-induced splenic contraction may transiently increase hematocrit",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:00:24.000000Z",
                "updated_at": "2020-05-07T02:00:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 1124,
                "drug_id": 427,
                "notes": "Disproportionately greater effect in sighthounds since dissipation of drug effect is mainly through redistribution to fat, and sighthounds have less (also may relate to breed-specific slower hepatic elimination)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:00:26.000000Z",
                "updated_at": "2020-05-07T02:00:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 1125,
                "drug_id": 428,
                "notes": "Largely replaced by measurement of serum TSH concentration and free thyroxine by equilibrium dialysis",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:01:31.000000Z",
                "updated_at": "2020-05-07T02:01:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 1126,
                "drug_id": 429,
                "notes": "Can be used at same therapeutic dosage, e.g., 15-25 mg/kg, for binding gentamicin (and other aminoglycosides) in case of overdose",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:02:24.000000Z",
                "updated_at": "2020-05-07T02:02:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 1127,
                "drug_id": 429,
                "notes": "For this and all beta lactams, aim to maintain serum levels several-fold above minimum inhibitory concentration throughout course of therapy (time-dependent, not dosage-dependent, antibacterial)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:02:27.000000Z",
                "updated_at": "2020-05-07T02:02:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1128,
                "drug_id": 430,
                "notes": "Can be used at same therapeutic dosage, e.g., 15-25 mg/kg, for binding gentamicin (and other aminoglycosides) in case of overdose",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:02:56.000000Z",
                "updated_at": "2020-05-07T02:02:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 1129,
                "drug_id": 430,
                "notes": "Ratio of ticarcillin:clavulanate is 30:1",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:02:58.000000Z",
                "updated_at": "2020-05-07T02:02:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 1130,
                "drug_id": 430,
                "notes": "Is used IV for sepsis and broad-spectrum coverage for severe infections in dogs",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:03:00.000000Z",
                "updated_at": "2020-05-07T02:03:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1131,
                "drug_id": 430,
                "notes": "For this and all beta lactams, aim to maintain serum levels several-fold above minimum inhibitory concentration throughout course of therapy (time-dependent, not dosage-dependent, antibacterial)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T02:03:03.000000Z",
                "updated_at": "2020-05-07T02:03:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 1132,
                "drug_id": 431,
                "notes": "Generally reserved for induction of anesthesia in otherwise healthy animals requiring elective surgery",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:04:39.000000Z",
                "updated_at": "2020-05-07T02:04:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 1133,
                "drug_id": 431,
                "notes": "Atropine pretreatment recommended; otherwise, 75% incidence of hypersalivation in dogs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:04:41.000000Z",
                "updated_at": "2020-05-07T02:04:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 1134,
                "drug_id": 431,
                "notes": "Well-suited to intradermal allergy testing because no blunting effect on allergic response",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:04:43.000000Z",
                "updated_at": "2020-05-07T02:04:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 1135,
                "drug_id": 432,
                "notes": "Public health significance: similar acute cardiac effects in humans (caution re. needle safety during cattle injections)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:04:55.000000Z",
                "updated_at": "2020-05-07T02:04:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 1136,
                "drug_id": 433,
                "notes": "Overall, less nephrotoxic than gentamicin, and effective against some strains of Pseudomonas that are gentamicin-resistant",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:06:06.000000Z",
                "updated_at": "2020-05-07T02:06:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1137,
                "drug_id": 433,
                "notes": "Generally used topically in small animal medicine (e.g., ophthalmic preparations)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:06:08.000000Z",
                "updated_at": "2020-05-07T02:06:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 1138,
                "drug_id": 434,
                "notes": "Generally replaced by sotalol due to equal or greater efficacy and fewer adverse effects; or no antiarrhythmic treatment, in the absence of convincing benefit in dogs without over signs of hemodynamic compromise (e.g., no syncope) and ventricular arrhythmia that is not rapid",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:06:59.000000Z",
                "updated_at": "2020-05-07T02:06:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 1139,
                "drug_id": 435,
                "notes": "Onset of vomiting should prompt lengthening of interdosage interval to q 2-3 days (i.e., 3 times weekly, spread as evenly as possible)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:07:38.000000Z",
                "updated_at": "2020-05-07T02:07:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 1140,
                "drug_id": 435,
                "notes": "Exact dosing must be achieved via combinations of whole tablets of various sizes, not splitting tablets (which poses a human health risk through aerosolization of the drug)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:07:41.000000Z",
                "updated_at": "2020-05-07T02:07:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 1141,
                "drug_id": 435,
                "notes": "Humans should not come in direct contact with the drug nor with the feces, urine, or vomit of dogs taking the drug (wear gloves)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:07:43.000000Z",
                "updated_at": "2020-05-07T02:07:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 1142,
                "drug_id": 435,
                "notes": "Patnaik grade II and III mast cell tumors are classified this way based on histologic characteristics: Patnaik II = closely-packed cells with indistinct cytoplasmic boundaries, a lower nucleus-to-cytoplasmic ratio than Patnaik III, infrequent mitoses, and more granules than Patnaik III; vs. Patnaik III (also called anaplastic) = undifferentiated cellular boundaries, variable nuclear size and morphology, frequent mitotic figures, and sparse cytoplasmic granules.  By contrast, Patnaik grade I mast cell tumors are well-differentiated, with clearly defined cellular margins, normal-appearing nuclei, few to no mitotic figures, and numerous plump, dark cytoplasmic granules.",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T02:07:45.000000Z",
                "updated_at": "2020-05-07T02:07:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 1143,
                "drug_id": 435,
                "notes": "Mechanism: inhibits enzyme system that cause tumor cell growth, cause tumor angiogenesis, and promote tumor metastasis; and promotes apoptosis of tumor cells",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T02:07:47.000000Z",
                "updated_at": "2020-05-07T02:07:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 1144,
                "drug_id": 435,
                "notes": "Antiangiogenic mechanism has prompted interest in other veterinary cancers and even non-neoplastic disorders (e.g., hypertrophic osteopathy)",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-05-07T02:07:50.000000Z",
                "updated_at": "2020-05-07T02:07:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 1145,
                "drug_id": 435,
                "notes": "Unique: currently the only anticancer drug designed and approved for animals only (versus extrapolation from human oncology for all other anticancer drugs in vet med)",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-05-07T02:07:52.000000Z",
                "updated_at": "2020-05-07T02:07:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 1146,
                "drug_id": 436,
                "notes": "Indicated for short-term analgesia and inflammation reduction; advantages include availability of injectable and oral preparations",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:09:03.000000Z",
                "updated_at": "2020-05-07T02:09:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 1147,
                "drug_id": 437,
                "notes": "Suspension is easier to administer than the microgranulate formulation",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:09:44.000000Z",
                "updated_at": "2020-05-07T02:09:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 1148,
                "drug_id": 437,
                "notes": "Ineffective for hepatozoonosis",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:09:46.000000Z",
                "updated_at": "2020-05-07T02:09:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 1149,
                "drug_id": 437,
                "notes": "Combination product with emodepside (Procox) extends spectrum to eliminate nematodes",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:09:49.000000Z",
                "updated_at": "2020-05-07T02:09:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 1150,
                "drug_id": 438,
                "notes": "Significantly less long-term diuretic tolerance/loss of efficacy, compared to furosemide",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:10:47.000000Z",
                "updated_at": "2020-05-07T02:10:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 1151,
                "drug_id": 438,
                "notes": "10 times more potent than furosemide, i.e., standard dosage is 1/10 that of furosemide for similar effect",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:10:50.000000Z",
                "updated_at": "2020-05-07T02:10:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 1152,
                "drug_id": 439,
                "notes": "Main advantage is as an opiate that can be given orally (typically q 8h)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:13:30.000000Z",
                "updated_at": "2020-05-07T02:13:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 1153,
                "drug_id": 439,
                "notes": "Useful for multimodal analgesia (e.g., combine with nonsteroidal anti-inflammatory and additional forms of pain control without overlapping drug classes)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:13:33.000000Z",
                "updated_at": "2020-05-07T02:13:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1154,
                "drug_id": 439,
                "notes": "Has antitussive effects but via applications not routinely used in practice (e.g., 10 mg/kg intraperitoneally in cats)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:13:35.000000Z",
                "updated_at": "2020-05-07T02:13:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 1155,
                "drug_id": 440,
                "notes": "10 times more potent that epsilon aminocaproic acid",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:14:57.000000Z",
                "updated_at": "2020-05-07T02:14:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 1156,
                "drug_id": 440,
                "notes": "Little published evidence in clinical veterinary medicine",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:14:59.000000Z",
                "updated_at": "2020-05-07T02:14:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 1157,
                "drug_id": 441,
                "notes": "For pruritic skin diseases: routinely used in dogs at 0.22 mg/kg SC or IM (not more than q 4 weeks; investigate underlying cause further if persistent treatment seems necessary) or 0.22 mg/kg PO q 24h (3-7 days only)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:16:13.000000Z",
                "updated_at": "2020-05-07T02:16:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 1158,
                "drug_id": 441,
                "notes": "Sustained-release injection less widely available than before, may need to be compounded (or replaced with alternative corticosteroid preparation)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:16:16.000000Z",
                "updated_at": "2020-05-07T02:16:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 1159,
                "drug_id": 441,
                "notes": "For pruritic skin disease, treatment of the underlying cause (e.g., flea allergy, sarcoptic mange/acariasis, etc.) is essential for lasting clinical improvement",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:16:18.000000Z",
                "updated_at": "2020-05-07T02:16:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 1160,
                "drug_id": 441,
                "notes": "Intralesional injections of single discrete mast cell tumors (1 mg/cm3 of tumor tissue) have been reported anecdotally",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T02:16:20.000000Z",
                "updated_at": "2020-05-07T02:16:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 1161,
                "drug_id": 442,
                "notes": "Dogs weighing >30 kg, and possibly dogs weighing >15 kg, require less trilostane/kg body weight to control hyperadrenocorticism, and this observation may reduce the cost of treatment and risk of adverse reactions in larger dogs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:17:54.000000Z",
                "updated_at": "2020-05-07T02:17:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 1162,
                "drug_id": 442,
                "notes": "Prognosis: no significant difference between survival of hyperadrenocorticism dogs treated with trilostane (8-1971 days; median: 662 days) compared to those treated with o,p'DDD (33-1399 days; median: 708 days)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:17:59.000000Z",
                "updated_at": "2020-05-07T02:17:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 1163,
                "drug_id": 442,
                "notes": "Inhibitor of 3β-hydroxysteroid dehydrogenase, the enzyme that converts pregnenolone to progesterone and 17-hydroxypregnenolone to 17-hydroxyprogesterone (both products then being transformed into cortisol, aldosterone, and androstenedione)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:18:05.000000Z",
                "updated_at": "2020-05-07T02:18:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 1164,
                "drug_id": 443,
                "notes": "Antibacterial of choice for treating intestinal dysbiosis/antibiotic-responsive diarrhea/small intestinal bacterial overgrowth in dogs, whereas in cats, metronidazole is used more commonly (at least in part due to the very bitter taste of tylosin powder, requiring formulation in capsules)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:19:09.000000Z",
                "updated_at": "2020-05-07T02:19:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 1165,
                "drug_id": 443,
                "notes": "Several case reports of tylosin treatment of feline infectious peritonitis, but none with convincing evidence of efficacy (diagnosis unconfirmed)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:19:11.000000Z",
                "updated_at": "2020-05-07T02:19:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 1166,
                "drug_id": 443,
                "notes": "Presumed anti-inflammatory/immunomodulatory intestinal effects may contribute to therapeutic benefit in GI applications",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:19:16.000000Z",
                "updated_at": "2020-05-07T02:19:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 1167,
                "drug_id": 443,
                "notes": "Controversial use in treatment to reduce tear-staining in dogs; also, many cases of tear staining involve fungi, but tylosin has no antifungal effect",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T02:19:18.000000Z",
                "updated_at": "2020-05-07T02:19:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 1168,
                "drug_id": 444,
                "notes": "Oral administration of ursodeoxycholic acid at therapeutic dosages adds <5% to circulating total bile acid concentration, and therefore is not likely to alter results of bile acids testing to any meaningful degree",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:21:06.000000Z",
                "updated_at": "2020-05-07T02:21:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1169,
                "drug_id": 444,
                "notes": "Mechanisms: alters bile acid composition, favoring hydrophilic bile acids (which are less viscous, less inflammatory, etc.); and increases gallbladder motility",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:21:11.000000Z",
                "updated_at": "2020-05-07T02:21:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 1170,
                "drug_id": 445,
                "notes": "Not indicated for any therapeutic use in cats (similar adverse effects as acyclovir, which is logical since valacyclovir is a prodrug for acyclovir)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:21:42.000000Z",
                "updated_at": "2020-05-07T02:21:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 1171,
                "drug_id": 446,
                "notes": "Public health concern, since this is frequently considered the antibacterial of last resort for highly resistant infections (and greater use eventually favors development of vancomycin resistance)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:22:38.000000Z",
                "updated_at": "2020-05-07T02:22:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 1172,
                "drug_id": 446,
                "notes": "Expensive",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:22:41.000000Z",
                "updated_at": "2020-05-07T02:22:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 1173,
                "drug_id": 446,
                "notes": "A time-dependent antibacterial; circulating levels must remain some multiple above minimum inhibitory concentration throughout the course of therapy or risk development of resistance to this very valuable antibacterial",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:22:43.000000Z",
                "updated_at": "2020-05-07T02:22:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 1174,
                "drug_id": 447,
                "notes": "See also: desmopressin (DDAVP - synthetic vasopressin analog), which is a superior choice for diabetes insipidus",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:23:37.000000Z",
                "updated_at": "2020-05-07T02:23:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 1175,
                "drug_id": 447,
                "notes": "Treatment for euvolemic hypotension; in other words, not a replacement for IV fluids in shock patients who are dehydrated",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:23:40.000000Z",
                "updated_at": "2020-05-07T02:23:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 1176,
                "drug_id": 448,
                "notes": "Dosages presume normal myocardial function, which often is not the case clinically (e.g., patients with cardiomyopathy or valvular heart disease); therefore, begin with low (or below-low) dosage and repeat to effect, to avoid excessive/catastrophic bradycardia",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:25:06.000000Z",
                "updated_at": "2020-05-07T02:25:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1177,
                "drug_id": 448,
                "notes": "Note that excessive/catastrophic bradycardia is not necessarily lethal, because the short half-life of verapamil may allow the patient to recover spontaneously from the severe bradycardia/asystole",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:25:09.000000Z",
                "updated_at": "2020-05-07T02:25:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 1178,
                "drug_id": 448,
                "notes": "Additional case studies support conversion of supraventricular tachycardia or atrial fibrillation in dogs.",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:25:11.000000Z",
                "updated_at": "2020-05-07T02:25:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 1179,
                "drug_id": 448,
                "notes": "If congestive heart failure is present (notably pulmonary edema), it must be treated first (preferably), or concurrently, to avoid acute exacerbation of fluid retention due to verapamil-induced bradycardia",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T02:25:16.000000Z",
                "updated_at": "2020-05-07T02:25:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 1180,
                "drug_id": 449,
                "notes": "Same drug family and mechanism as vincristine, seemingly interchangeable for some applications, but very different potency: vinblastine requires much higher dosages (6-fold greater on mg/kg basis), and if these dosages are given as vincristine in error, life-threatening toxicosis is likely",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:26:48.000000Z",
                "updated_at": "2020-05-07T02:26:48.000000Z",
                "deleted_at": null
            },
            {
                "id": 1181,
                "drug_id": 449,
                "notes": "Less neurotoxicosis reported than with vincristine",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:26:51.000000Z",
                "updated_at": "2020-05-07T02:26:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 1182,
                "drug_id": 450,
                "notes": "Virtually all chemotherapy protocols for lymphoma include vincristine",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:28:45.000000Z",
                "updated_at": "2020-05-07T02:28:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 1183,
                "drug_id": 450,
                "notes": "Certain breeds, notably Border Collies, have a breed-related predisposition to developing vincristine toxicosis at normal dosages and unrelated to the ABCB1 mutation",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:28:47.000000Z",
                "updated_at": "2020-05-07T02:28:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 1184,
                "drug_id": 450,
                "notes": "Rise in platelet count has been demonstrated with vincristine, but adequate platelet function, and long-term (survival) benefit to patients with severe thrombocytopenia, are not proven",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:28:51.000000Z",
                "updated_at": "2020-05-07T02:28:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 1185,
                "drug_id": 450,
                "notes": "Same drug family and mechanism as vinblastine, seemingly interchangeable for many applications, but very different potency: vincristine requires much lower dosages (6-fold lower on mg/kg basis), and if these dosages are given as vinblastine in error, severe undertreatment will occur",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T02:28:54.000000Z",
                "updated_at": "2020-05-07T02:28:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 1186,
                "drug_id": 450,
                "notes": "Less myelotoxicosis reported than with vincristine",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T02:28:56.000000Z",
                "updated_at": "2020-05-07T02:28:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 1187,
                "drug_id": 451,
                "notes": "Antioxidant, anti-inflammatory properties",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:30:36.000000Z",
                "updated_at": "2020-05-07T02:30:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 1188,
                "drug_id": 452,
                "notes": "Most anticoagulant rodenticides produce 3- to 4-week-long anticoagulation; after 3-4 weeks, oral vitamin K administration may be stopped, and prothrombin time checked 48h later, to confirm that toxicosis has passed",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:31:55.000000Z",
                "updated_at": "2020-05-07T02:31:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 1189,
                "drug_id": 452,
                "notes": "Supplementation in chronic liver diseases (anecdotal): 0.5-1 mg/kg PO q 3-5 days",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:31:57.000000Z",
                "updated_at": "2020-05-07T02:31:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 1190,
                "drug_id": 452,
                "notes": "Takes several hours to begin to take effect, and >24h to completely restore coagulation effects; therefore, animals showing over signs often need cotreatment with plasma transfusion (for coagulation factors) and packed red cells (or ideally, compatible whole blood) if bleeding has been extensive, especially internal bleeding that may be underappreciated",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:32:02.000000Z",
                "updated_at": "2020-05-07T02:32:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 1191,
                "drug_id": 453,
                "notes": "Promising antifungal drug, especially for resistant infections",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:32:53.000000Z",
                "updated_at": "2020-05-07T02:32:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 1192,
                "drug_id": 453,
                "notes": "Excellent pharmacokinetic features – better accessibility to tissues than older azoles (topically and systemically)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:32:55.000000Z",
                "updated_at": "2020-05-07T02:32:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 1193,
                "drug_id": 454,
                "notes": "No effect on lysis of existing clot; delays/prevents formation of new clot",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:33:35.000000Z",
                "updated_at": "2020-05-07T02:33:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 1194,
                "drug_id": 454,
                "notes": "Powerful anticoagulant requiring delicate titration based on prothrombin time monitoring: q 1 week for first 4 weeks, then q 2-4 weeks for 3 months, then as needed (at least q 3 months)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:33:38.000000Z",
                "updated_at": "2020-05-07T02:33:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 1195,
                "drug_id": 454,
                "notes": "Seemingly both greater benefit and greater risk than antiplatelet drugs (aspirin, clopidogrel) or heparin: dogs and cats taking warfarin appear to live longer, with fewer thromboembolic episodes, but also experience more adverse effects notably intrapulmonary hemorrhage (diagnostic challenge, since dyspnea, and radiographic pattern, are indistinguishable from pulmonary edema in these patients who often have underlying heart disease)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:33:40.000000Z",
                "updated_at": "2020-05-07T02:33:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 1196,
                "drug_id": 454,
                "notes": "Justification for starting warfarin therapy (typically): history of confirmed thromboembolism and underlying cause cannot be eliminated/corrected, or detection of high risk of thromboembolism (e.g., spontaneous intracardiac contrast on echocardiogram) and underlying cause cannot be eliminated/corrected",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T02:33:43.000000Z",
                "updated_at": "2020-05-07T02:33:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 1197,
                "drug_id": 454,
                "notes": "Caution with coadministered drugs because extensively bound to plasma proteins – could be displaced by other drugs (e.g. salicylates, sulfa drugs), causing bleeding tendencies",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T02:33:45.000000Z",
                "updated_at": "2020-05-07T02:33:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 1198,
                "drug_id": 455,
                "notes": "Main clinical use now is induction of vomiting in cats",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:35:30.000000Z",
                "updated_at": "2020-05-07T02:35:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 1199,
                "drug_id": 455,
                "notes": "Replaced almost completely by other alpha-2 agonists (e.g., dexmedetomidine) for sedation/anesthesia when increased afterload is desirable (e.g., pericardial effusion/cardiac tamponade, subaortic stenosis, hypertrophic cardiomyopathy, etc.)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:35:33.000000Z",
                "updated_at": "2020-05-07T02:35:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1200,
                "drug_id": 456,
                "notes": "Commonly used for reversing xylazine after a cat has been induced to vomit",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:36:41.000000Z",
                "updated_at": "2020-05-07T02:36:41.000000Z",
                "deleted_at": null
            },
            {
                "id": 1201,
                "drug_id": 457,
                "notes": "Generally replaced by aerosol inhalant medication +/- orally-administered glucocorticoids, and environmental modification, for asthmatic cats",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:37:29.000000Z",
                "updated_at": "2020-05-07T02:37:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 1202,
                "drug_id": 457,
                "notes": "Wouldn’t be expected to reverse effects of asthma in cats, since it only blocks 1 component of the wide array of bronchoconstrictors involved in the pathogenesisof asthma; main consideration would be as an add-on” to accentuate other drugs",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:37:31.000000Z",
                "updated_at": "2020-05-07T02:37:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 1203,
                "drug_id": 458,
                "notes": "Toxicity can be treatment-terminating; monitor CBC and RBC morphology carefully",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:38:21.000000Z",
                "updated_at": "2020-05-07T02:38:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 1204,
                "drug_id": 459,
                "notes": "Response to zinc formulation (gluconate vs. methionine vs. sulfate) is highly individual, with 20% of poorly-responding dogs for one formulation showing a good or excellent response to another",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:38:50.000000Z",
                "updated_at": "2020-05-07T02:38:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 1205,
                "drug_id": 459,
                "notes": "Dosages calculated for elemental zinc. Equivalency is: 7.14 mg zinc gluconate = 1 mg elemental zinc",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:38:54.000000Z",
                "updated_at": "2020-05-07T02:38:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 1206,
                "drug_id": 459,
                "notes": "Basal nutritional zinc requirement is 15-50 ppm in cats",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:38:57.000000Z",
                "updated_at": "2020-05-07T02:38:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 1207,
                "drug_id": 459,
                "notes": "Blood for testing circulating zinc levels must be collected in special (royal blue top) tubes, because the rubber stoppers of these tubes are made without zinc, unlike other rubber stoppers for tubes in routine use",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T02:39:02.000000Z",
                "updated_at": "2020-05-07T02:39:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 1208,
                "drug_id": 460,
                "notes": "Response to zinc formulation (gluconate vs. methionine vs. sulfate) is highly individual, with 20% of poorly-responding dogs for one formulation showing a good or excellent response to another",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:39:30.000000Z",
                "updated_at": "2020-05-07T02:39:30.000000Z",
                "deleted_at": null
            },
            {
                "id": 1209,
                "drug_id": 460,
                "notes": "Dosages calculated for elemental zinc. Proprietary preparation contains 15 mg elemental zinc and 30 mg methionine/tablet",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:39:35.000000Z",
                "updated_at": "2020-05-07T02:39:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 1210,
                "drug_id": 460,
                "notes": "Basal nutritional zinc requirement is 15-50 ppm in cats",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:39:37.000000Z",
                "updated_at": "2020-05-07T02:39:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 1211,
                "drug_id": 460,
                "notes": "Blood for testing circulating zinc levels must be collected in special (royal blue top) tubes, because the rubber stoppers of these tubes are made without zinc, unlike other rubber stoppers for tubes in routine use",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T02:39:42.000000Z",
                "updated_at": "2020-05-07T02:39:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 1212,
                "drug_id": 461,
                "notes": "Response to zinc formulation (gluconate vs. methionine vs. sulfate) is highly individual, with 20% of poorly-responding dogs for one formulation showing a good or excellent response to another",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:40:16.000000Z",
                "updated_at": "2020-05-07T02:40:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 1213,
                "drug_id": 461,
                "notes": "Dosages calculated for elemental zinc. Equivalency is: 4.4 mg zinc sulfate = 1 mg elemental zinc",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:40:21.000000Z",
                "updated_at": "2020-05-07T02:40:21.000000Z",
                "deleted_at": null
            },
            {
                "id": 1214,
                "drug_id": 461,
                "notes": "Basal nutritional zinc requirement is 15-50 ppm in cats",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:40:23.000000Z",
                "updated_at": "2020-05-07T02:40:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 1215,
                "drug_id": 461,
                "notes": "Blood for testing circulating zinc levels must be collected in special (royal blue top) tubes, because the rubber stoppers of these tubes are made without zinc, unlike other rubber stoppers for tubes in routine use",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T02:40:28.000000Z",
                "updated_at": "2020-05-07T02:40:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 1216,
                "drug_id": 462,
                "notes": "Useful second- or third-line antiepileptic drug",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:40:53.000000Z",
                "updated_at": "2020-05-07T02:40:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 1217,
                "drug_id": 462,
                "notes": "Half-life in dogs is approximately 12h; steady state (to assess serum therapeutic levels) should be achieved after approximately 3 days",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:40:55.000000Z",
                "updated_at": "2020-05-07T02:40:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 1218,
                "drug_id": 463,
                "notes": "Benefit does not clearly outweigh risks (or alternatives) for any neoplasm in dogs or cats at present",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:41:39.000000Z",
                "updated_at": "2020-05-07T02:41:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 1219,
                "drug_id": 464,
                "notes": "Equine plasma origin; be sure to have antihistamine (e.g., diphenhydramine 2 mg/kg IM), corticosteroids (e.g., dexamethasone 0.1 mg/kg IV or prednisolone sodium succinate 5 mg/kg slow IV), and possibly epinephrine if severe (0.01-0.1 mg/kg SC or IV) available if anaphylaxis occurs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:42:05.000000Z",
                "updated_at": "2020-05-07T02:42:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 1220,
                "drug_id": 465,
                "notes": "Immature stages of E. multilocularis are more resistant to the drug, justifying higher dosages when exposure and infection occurred <28 days earlier",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:43:43.000000Z",
                "updated_at": "2020-05-07T02:43:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 1221,
                "drug_id": 466,
                "notes": "Considered the gold standard for induction of anesthesia in patients with cardiovascular disease, due to minimal/no cardiodepressant effect",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:44:49.000000Z",
                "updated_at": "2020-05-07T02:44:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 1222,
                "drug_id": 466,
                "notes": "Minor decrease in arterial oxygen content is noted on induction, which should prompt routine pre-oxygenation in patients with cardiorespiratory disease being induced with etomidate",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:44:51.000000Z",
                "updated_at": "2020-05-07T02:44:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 1223,
                "drug_id": 466,
                "notes": "Lower quality of recovery (more ataxia, movement, ptyalism; longer recovery period) compared to propofol or alfaxalone; premedication may improve recovery",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:44:53.000000Z",
                "updated_at": "2020-05-07T02:44:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 1224,
                "drug_id": 467,
                "notes": "Dosage recommendation from unpublished case series in dogs with naturally-occurring chronic ventricular arrhythmias: 1-1.5 mg/kg PO q 8h (specifically, 3-4 mg/kg/day divided into 2 or 3 doses) initially, increasing to 5-6 mg/kg/day (1.5-2 mg/kg PO q 8h) if clinically indicated (LeBobinnec, ACVIM Forum 2012)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:45:53.000000Z",
                "updated_at": "2020-05-07T02:45:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 1225,
                "drug_id": 468,
                "notes": "Flumethasone applied topically may result in adequate absorption to depress adrenal gland function.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:46:32.000000Z",
                "updated_at": "2020-05-07T02:46:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 1226,
                "drug_id": 469,
                "notes": "Uptitrated to effect, reducing if signs of excess (e.g., ileus, constipation)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:47:10.000000Z",
                "updated_at": "2020-05-07T02:47:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 1227,
                "drug_id": 469,
                "notes": "Most dogs with sick sinus syndrome/sinus node dysfunction that respond to hyoscyamine eventually (weeks/months) stop responding and need pacemaker implantation",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:47:12.000000Z",
                "updated_at": "2020-05-07T02:47:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 1228,
                "drug_id": 470,
                "notes": "Limited experience suggests a posible role for acute management of hyperthyroidism (2-4 weeks) but minimal or no long-term efficacy",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:48:08.000000Z",
                "updated_at": "2020-05-07T02:48:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 1229,
                "drug_id": 471,
                "notes": "Mechanism: inhibits peripheral conversion of T4 to T3; therefore, monitor serum T3 levels for efficacy",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:48:59.000000Z",
                "updated_at": "2020-05-07T02:48:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 1230,
                "drug_id": 471,
                "notes": "Can be an acceptable alternative for cats that are intolerant to methimazole",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:49:01.000000Z",
                "updated_at": "2020-05-07T02:49:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 1231,
                "drug_id": 471,
                "notes": "Limited commercial availability of this drug",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:49:04.000000Z",
                "updated_at": "2020-05-07T02:49:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 1232,
                "drug_id": 472,
                "notes": "Other alternatives (e.g., fenbendazole) are safer",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:49:38.000000Z",
                "updated_at": "2020-05-07T02:49:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 1233,
                "drug_id": 472,
                "notes": "Rarely used; advantage is low cost",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:49:40.000000Z",
                "updated_at": "2020-05-07T02:49:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 1234,
                "drug_id": 473,
                "notes": "Oral administration can be part of supportive care for uncomplicated, benign GI upset, not GI disease causing systemic signs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:50:23.000000Z",
                "updated_at": "2020-05-07T02:50:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 1235,
                "drug_id": 473,
                "notes": "Use with caution in animals with renal impairment. Kanamycin appears to be less nephrotoxic than neomycin and less ototoxic than streptomycin.",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:50:26.000000Z",
                "updated_at": "2020-05-07T02:50:26.000000Z",
                "deleted_at": null
            },
            {
                "id": 1236,
                "drug_id": 473,
                "notes": "Extensive bacterial resistance to this drug has contributed to decrease in usage",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:50:28.000000Z",
                "updated_at": "2020-05-07T02:50:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 1237,
                "drug_id": 474,
                "notes": "Similar indications and effects as omeprazole",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:52:03.000000Z",
                "updated_at": "2020-05-07T02:52:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 1238,
                "drug_id": 475,
                "notes": "Intravenous lipid emulsion has been used off-label for a variety of fat-soluble toxins in veterinary and human medicine including overdoses of local anesthetics, antidepressants, beta blockers, calcium channel blockers, macrocytic lactones, and muscle relaxants. There is no standard protocol for the use of lipid infusion for treating intoxications with fat-soluble agents. Typically, 1.5–4 ml/kg of a 20% sterile lipid emulsion is given intravenously as a bolus dose, followed by an infusion of 0.25 ml/kg/min over 30-60 minutes.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:54:44.000000Z",
                "updated_at": "2020-05-07T02:54:44.000000Z",
                "deleted_at": null
            },
            {
                "id": 1239,
                "drug_id": 475,
                "notes": "Mechanism of action for intoxications: binds lipophilic drugs/toxins, making them biounavailable",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:54:49.000000Z",
                "updated_at": "2020-05-07T02:54:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 1240,
                "drug_id": 475,
                "notes": "Cases have been reported where lipid infusion was ineffective for ivermectin intoxication in dogs.",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:54:51.000000Z",
                "updated_at": "2020-05-07T02:54:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 1241,
                "drug_id": 475,
                "notes": "An acute bupivacaine study in experimental dogs suggests a possible role for lipid infusion during cardiopulmonary cerebral resuscitation in general",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T02:54:56.000000Z",
                "updated_at": "2020-05-07T02:54:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 1242,
                "drug_id": 475,
                "notes": "Various formulations available; soybean oil is the most common base; olive oil, fish oil, and others are also available",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T02:54:58.000000Z",
                "updated_at": "2020-05-07T02:54:58.000000Z",
                "deleted_at": null
            },
            {
                "id": 1243,
                "drug_id": 476,
                "notes": "Experimentally, meclizine appears to be four times more absorbable when given intranasally versus orally; this route could be superior if a suitable formulation is available.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:55:42.000000Z",
                "updated_at": "2020-05-07T02:55:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 1244,
                "drug_id": 476,
                "notes": "Alternative drugs (e.g., maropitant) have a broader spectrum and are more effective for nausea/vomiting prevention and treatment",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:55:47.000000Z",
                "updated_at": "2020-05-07T02:55:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 1245,
                "drug_id": 476,
                "notes": "For antiemetic effect (e.g., motion sickness), administer 1 hour before emetic stimulus (e.g., travel)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:55:49.000000Z",
                "updated_at": "2020-05-07T02:55:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 1246,
                "drug_id": 477,
                "notes": "Specific types of obsessive compulsive disorders studied (and responding positively) in dogs are shadow chasing, circling, and tail chasing",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:56:51.000000Z",
                "updated_at": "2020-05-07T02:56:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 1247,
                "drug_id": 478,
                "notes": "Inhibits 11-betahydroxylase, the enzyme that converts 11-deoxycortisol to cortisol",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:57:34.000000Z",
                "updated_at": "2020-05-07T02:57:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 1248,
                "drug_id": 478,
                "notes": "Could be helpful for stabilizing cats that have hyperadrenocorticism prior to undergoing bilateral adrenalectomy",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:57:36.000000Z",
                "updated_at": "2020-05-07T02:57:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 1249,
                "drug_id": 478,
                "notes": "ACTH stimulation test used for assessing efficacy/monitoring",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:57:39.000000Z",
                "updated_at": "2020-05-07T02:57:39.000000Z",
                "deleted_at": null
            },
            {
                "id": 1250,
                "drug_id": 479,
                "notes": "Treatment with miltefosine alone is not recommended, especially in endemic areas; despite clinical improvement, monotherapy-treated dogs do not have parasitologic clearance and zoonotic potential remains.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:58:15.000000Z",
                "updated_at": "2020-05-07T02:58:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 1251,
                "drug_id": 479,
                "notes": "Additional information available at: www.leishvet.info",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:58:19.000000Z",
                "updated_at": "2020-05-07T02:58:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1252,
                "drug_id": 480,
                "notes": "Selective 5-HT4 (serotonin) receptor agonist",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T02:59:14.000000Z",
                "updated_at": "2020-05-07T02:59:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 1253,
                "drug_id": 480,
                "notes": "New drug with limited information in veterinary medicine but promising indications for hypomotility syndromes (e.g., possibly idiopathic megaesophagus)",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T02:59:17.000000Z",
                "updated_at": "2020-05-07T02:59:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 1254,
                "drug_id": 480,
                "notes": "Apparently does not cause dose-dependent cardiac side effect in cats (safer than cisapride regarding potential drug interactions)",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T02:59:19.000000Z",
                "updated_at": "2020-05-07T02:59:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1255,
                "drug_id": 481,
                "notes": "Practicality for treating stereotypic behaviors has been questioned: naltrexone may have low bioavailability PO, and SC injections have a short duration (~90 min)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:00:05.000000Z",
                "updated_at": "2020-05-07T03:00:05.000000Z",
                "deleted_at": null
            },
            {
                "id": 1256,
                "drug_id": 482,
                "notes": "JAK-1 and JAK-3 enzymes are effectors of cytokine receptors; for example, several interleukins and interferons interact with cytokine receptors as part of inflammation, and JAKs transform the receptor activation into intracellular activity (gene upregulation), leading to inflammation and pruritus. JAK inhibitors interfere with (and break) this sequence",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:00:47.000000Z",
                "updated_at": "2020-05-07T03:00:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 1257,
                "drug_id": 482,
                "notes": "The JAK-2 pathway, which oclacitinib does not target, is involved in maturation of blood cells; this close association justifies vigilance regarding blood cell lines during treatment",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T03:00:49.000000Z",
                "updated_at": "2020-05-07T03:00:49.000000Z",
                "deleted_at": null
            },
            {
                "id": 1258,
                "drug_id": 482,
                "notes": "Tofacitinib is a related drug (same mechanism) used for treatment of rheumatoid arthritis in humans",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T03:00:51.000000Z",
                "updated_at": "2020-05-07T03:00:51.000000Z",
                "deleted_at": null
            },
            {
                "id": 1259,
                "drug_id": 482,
                "notes": "Cost can be prohibitive, but is generally lower than cyclosporine, especially for large dogs",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T03:00:54.000000Z",
                "updated_at": "2020-05-07T03:00:54.000000Z",
                "deleted_at": null
            },
            {
                "id": 1260,
                "drug_id": 483,
                "notes": "Syndrome is defined by hyperactive detrusor reflex; therefore, confirmation requires cystometric pressure measurements",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:01:50.000000Z",
                "updated_at": "2020-05-07T03:01:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 1261,
                "drug_id": 483,
                "notes": "Should not be mistaken for urethral sphincter mechanism incompetence: with detrusor instability, urine is released in small amounts when the patient is either asleep or awake (including when walking) and there is no response to diethylsilbestrol or phenylpropanolamine",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T03:01:53.000000Z",
                "updated_at": "2020-05-07T03:01:53.000000Z",
                "deleted_at": null
            },
            {
                "id": 1262,
                "drug_id": 483,
                "notes": "Propantheline may be effective if oxybutynin fails, and vice-versa",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T03:01:55.000000Z",
                "updated_at": "2020-05-07T03:01:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 1263,
                "drug_id": 484,
                "notes": "Confers no anesthetic or analgesic effect",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:03:17.000000Z",
                "updated_at": "2020-05-07T03:03:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 1264,
                "drug_id": 485,
                "notes": "Uncommonly used, but successfully applied to management of intraoperative systemic hypertension in pheochromocytoma surgery in dogs",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:03:45.000000Z",
                "updated_at": "2020-05-07T03:03:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 1265,
                "drug_id": 486,
                "notes": "Clinical applications (e.g., hemorrhage control) unproven at present",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:04:14.000000Z",
                "updated_at": "2020-05-07T03:04:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 1266,
                "drug_id": 487,
                "notes": "Primaquine is often regarded as the drug of choice for treating feline babesiosis; however, the therapeutic-toxic dosage range is very narrow",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:04:42.000000Z",
                "updated_at": "2020-05-07T03:04:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 1267,
                "drug_id": 487,
                "notes": "For B. felis infections, rifampicin and sulfadiazine-trimethoprim are partially effective and may be useful as initial treatment; however, primaquine is superior to both.",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T03:04:46.000000Z",
                "updated_at": "2020-05-07T03:04:46.000000Z",
                "deleted_at": null
            },
            {
                "id": 1268,
                "drug_id": 488,
                "notes": "Due to emergence of bacterial resistance, this antibacterial is considered a restricted drug for use as a last resort with supporting culture and susceptibility profiles and with consultation with an internal medicine specialist",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:05:25.000000Z",
                "updated_at": "2020-05-07T03:05:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 1269,
                "drug_id": 488,
                "notes": "Similarly to vancomycin, this drug is a glycopeptide antibacterial; a significant difference is its ability to be used IM as well as IV, whereas vancomycin is limited to IV use.",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T03:05:27.000000Z",
                "updated_at": "2020-05-07T03:05:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1270,
                "drug_id": 489,
                "notes": "Dosage reported in Europe for cats with chronic kidney disease is 1 mg/kg PO q 24 h; no peer-reviewed clinical trial data published",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:06:01.000000Z",
                "updated_at": "2020-05-07T03:06:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 1271,
                "drug_id": 490,
                "notes": "Distinguishing feature is inhibition of both cyclooxygenase and lipoxygenase",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:07:12.000000Z",
                "updated_at": "2020-05-07T03:07:12.000000Z",
                "deleted_at": null
            },
            {
                "id": 1272,
                "drug_id": 490,
                "notes": "When used at prescribed dosages, the low incidence of gastrointestinal side effects and safety in patients with chronic kidney disease are two distinguishing features of tepoxalin compared to most other non-steroidal anti-inflammatories",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T03:07:14.000000Z",
                "updated_at": "2020-05-07T03:07:14.000000Z",
                "deleted_at": null
            },
            {
                "id": 1273,
                "drug_id": 490,
                "notes": "Feeding improves oral bioavailability of tepoxalin.",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T03:07:19.000000Z",
                "updated_at": "2020-05-07T03:07:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1274,
                "drug_id": 491,
                "notes": "Obsolete for thyroid function testing: less accurate than TSH response testing, which in turn has been replaced by newer tests (e.g., measuring concurrent TSH and T4 serum levels)",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:09:00.000000Z",
                "updated_at": "2020-05-07T03:09:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1275,
                "drug_id": 491,
                "notes": "TRH can be frozen at -20C for 1 week without loss of potency",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T03:09:02.000000Z",
                "updated_at": "2020-05-07T03:09:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 1276,
                "drug_id": 492,
                "notes": "Pharmacokinetic studies indicate substantial variability in gastrointestinal absorption - may affect ability to achieve optimum therapeutic concentration",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:10:13.000000Z",
                "updated_at": "2020-05-07T03:10:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 1277,
                "drug_id": 493,
                "notes": "Labeled for use in ferrets with adrenal gland disease",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:12:15.000000Z",
                "updated_at": "2020-05-07T03:12:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 1278,
                "drug_id": 493,
                "notes": "Implant usually placed in the subcutis of the dorsal neck/interscapular region for ease of localization and removal",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T03:12:18.000000Z",
                "updated_at": "2020-05-07T03:12:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 1279,
                "drug_id": 493,
                "notes": "Note that male dog fertility *increases* for the first month post-implantation, then decreases gradually to sterility in months 2 and 3",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T03:12:20.000000Z",
                "updated_at": "2020-05-07T03:12:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 1280,
                "drug_id": 493,
                "notes": "Pregnancy may go to term in a pregnant animal treated with deslorelin; however, maternal care may be influenced secondary to the hormonal changes associated with the implant.",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T03:12:22.000000Z",
                "updated_at": "2020-05-07T03:12:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 1281,
                "drug_id": 494,
                "notes": "Esomeprazole (\"s-omeprazole\") is the levoenantiomer of omeprazole, and the indications and efficacy are considered indistiguishable from each other",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:13:13.000000Z",
                "updated_at": "2020-05-07T03:13:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 1282,
                "drug_id": 495,
                "notes": "Due to the adverse effect of drug eruptions in almost all dogs receiving this drug, its cost, its limited availability, and the equivalency or superiority of fluconazole, flucytosine is generally not used in canine patients",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:14:23.000000Z",
                "updated_at": "2020-05-07T03:14:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 1283,
                "drug_id": 495,
                "notes": "Monotherapy with flucytosine results in rapid drug resistance; therefore, this drug should never be used alone.",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T03:14:25.000000Z",
                "updated_at": "2020-05-07T03:14:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 1284,
                "drug_id": 496,
                "notes": "Wide discrepancy in optimal dosage (5-30 mg/kg); new drug in vet med, further evaluation needed for optimal dosage selection",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:15:07.000000Z",
                "updated_at": "2020-05-07T03:15:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 1285,
                "drug_id": 496,
                "notes": "Dosage in mitral regurgitation experimental study was 60 mg/kg PO q 12h; personal communication with author indicates 30 mg/kg PO q 12 h has similar efficacy with lower incidence of hypotension",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T03:15:10.000000Z",
                "updated_at": "2020-05-07T03:15:10.000000Z",
                "deleted_at": null
            },
            {
                "id": 1286,
                "drug_id": 497,
                "notes": "This drug should only be used in select cases in which no other antibacterials are sensitive as based on culture and susceptibility testing",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:16:04.000000Z",
                "updated_at": "2020-05-07T03:16:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 1287,
                "drug_id": 498,
                "notes": "Dachshunds may be overrepresented for hepatotoxicosis with this drug",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:19:32.000000Z",
                "updated_at": "2020-05-07T03:19:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 1288,
                "drug_id": 498,
                "notes": "Although hepatotoxic risk is low, safer benzimidazoles of equal or greater efficacy are available",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T03:19:34.000000Z",
                "updated_at": "2020-05-07T03:19:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 1289,
                "drug_id": 499,
                "notes": "The Antimicrobial Guidelines Working Group of the International Society for Companion Animal Infectious Diseases reported in its 2011 guidelines for treatment of urinary tract disease in dogs and cats that despite some theoretical benefit for the administration of urinary antiseptics such as methenamine, there is currently insufficient evidence available to assess the effectiveness of these treatments in animals.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:20:32.000000Z",
                "updated_at": "2020-05-07T03:20:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 1290,
                "drug_id": 499,
                "notes": "Drug is bactericidal at urine pH 5 - 5.5; therefore, a urinary acidifying diet or urinary acidifier shoud be given concurrently.",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T03:20:37.000000Z",
                "updated_at": "2020-05-07T03:20:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 1291,
                "drug_id": 500,
                "notes": "Typical dosage as part of management/prevention of hepatic encephalopathy in dogs is 10 mg/kg PO q 8 h",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:22:19.000000Z",
                "updated_at": "2020-05-07T03:22:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1292,
                "drug_id": 500,
                "notes": "Spectrum of activity is Gram-negative aerobes and routes of administration are typically oral or topical; ototoxicity and nephrotoxicity prevent parenteral use",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-05-07T03:22:22.000000Z",
                "updated_at": "2020-05-07T03:22:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 1293,
                "drug_id": 500,
                "notes": "For reduction of aerobic colonic microflora prior to intestinal surgery, neomycin PO is not as effective as a povidone-iodine enema; however, the two have similar efficacies against anaerobic organisms.",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-05-07T03:22:24.000000Z",
                "updated_at": "2020-05-07T03:22:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 1294,
                "drug_id": 500,
                "notes": "Unlike in people, neomycin in dogs does not appear to reduce serum cholesterol levels and has minimal impact on small intestinal morphology and absorption at therapeutic dosages.",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-05-07T03:22:29.000000Z",
                "updated_at": "2020-05-07T03:22:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 1295,
                "drug_id": 500,
                "notes": "Systemic side effects (nephro-/ototoxicity) would not be expected with oral neomycin; aminoglycosides are minimally absorbed from gastrointestinal tract, unless gut barrier is significantly compromised",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-05-07T03:22:33.000000Z",
                "updated_at": "2020-05-07T03:22:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1296,
                "drug_id": 501,
                "notes": "Oral route of administration is an important advantage",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:23:50.000000Z",
                "updated_at": "2020-05-07T03:23:50.000000Z",
                "deleted_at": null
            },
            {
                "id": 1297,
                "drug_id": 502,
                "notes": "Hepatotoxicosis in people resulted in the discontinuation of the commercially available form of this drug.",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-05-07T03:24:18.000000Z",
                "updated_at": "2020-05-07T03:24:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 1298,
                "drug_id": 503,
                "notes": "Prophylactic administration to reduce the risk of cystine urolith recurrence in dogs: 30 mg/kg PO q 24h, 56% success rate",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-10-30T19:33:08.000000Z",
                "updated_at": "2020-10-30T19:33:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 1299,
                "drug_id": 504,
                "notes": "Less expensive alternative to aqueous ACTH-like synthetic solutions (e.g., cosyntropin, Cortrosyn)",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-10-30T19:41:08.000000Z",
                "updated_at": "2020-10-30T19:41:08.000000Z",
                "deleted_at": null
            },
            {
                "id": 1300,
                "drug_id": 505,
                "notes": "Route of elimination is cellular uptake; therefore, hepatic or renal dysfunction should not alter dosage or duration of effect",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-10-30T19:50:18.000000Z",
                "updated_at": "2020-10-30T19:50:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 1301,
                "drug_id": 505,
                "notes": "Extremely short duration of action: half-life = 10 seconds",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-10-30T19:50:18.000000Z",
                "updated_at": "2020-10-30T19:50:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 1302,
                "drug_id": 505,
                "notes": "IV diltiazem (repeated small boluses) generally appears to be more effective in dogs with rapid macroreentrant tachycardias",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-10-30T19:50:18.000000Z",
                "updated_at": "2020-10-30T19:50:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 1303,
                "drug_id": 506,
                "notes": "In dogs, afoxolaner has a slower speed of kill for the cat flea (Ctenocephalides felis) compared to sarolaner, but a faster speed of kill than fluralaner",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-10-30T20:30:19.000000Z",
                "updated_at": "2020-10-30T20:30:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1304,
                "drug_id": 506,
                "notes": "For Dermacentor reticulatus, afoxolaner prevents transmission of Babesia canis and development of clinical babesiosis for up to 28 days after single oral dose",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-10-30T20:30:19.000000Z",
                "updated_at": "2020-10-30T20:30:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1305,
                "drug_id": 506,
                "notes": "For demodicosis, afoxolaner is more effective in reducing mite count over two months of treatment compared to imidacloprid/moxidectin combination",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-10-30T20:30:19.000000Z",
                "updated_at": "2020-10-30T20:30:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1306,
                "drug_id": 506,
                "notes": "Afoxolaner does not impact cutaneous Demodex populations in healthy dogs over a 90-day period when administered at 2.5 mg/kg once monthly",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-10-30T20:30:19.000000Z",
                "updated_at": "2020-10-30T20:30:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1307,
                "drug_id": 506,
                "notes": "For Dermacentor variabilis ticks, afoxolaner has a slower speed of kill and is less effective 6-12 hours following oral dose compared to imidacloprid + flumethrin collar (Seresto)",
                "is_visible": 1,
                "display_order": 5,
                "created_at": "2020-10-30T20:30:19.000000Z",
                "updated_at": "2020-10-30T20:30:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1308,
                "drug_id": 506,
                "notes": "For Ixodes holocyclus and Ixodes scapularis, afoxolaner has a slower speed of kill and is less effective 8-24 hours following oral dose compared to sarolaner (Simparica)",
                "is_visible": 1,
                "display_order": 6,
                "created_at": "2020-10-30T20:30:19.000000Z",
                "updated_at": "2020-10-30T20:30:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1309,
                "drug_id": 506,
                "notes": "For Ixodes scapularis, afoxolaner prevents transmission of Borrelia burgdorferi for up to 33 days after a single oral dose",
                "is_visible": 1,
                "display_order": 7,
                "created_at": "2020-10-30T20:30:19.000000Z",
                "updated_at": "2020-10-30T20:30:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1310,
                "drug_id": 506,
                "notes": "For Rhipicephalus sanguineus, afoxolaner provides only low partial protection from transmission of Ehrlichia canis from ticks due to relatively slow speed of kill, while imidacloprid + permethrin (Advantix) has a faster speed of kill and effectively blocks transmission of Ehrlichia canis",
                "is_visible": 1,
                "display_order": 8,
                "created_at": "2020-10-30T20:30:19.000000Z",
                "updated_at": "2020-10-30T20:30:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1311,
                "drug_id": 507,
                "notes": "In dogs, afoxolaner has a slower speed of kill for the cat flea (Ctenocephalides felis) compared to sarolaner, but a faster speed of kill than fluralaner",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-10-30T20:33:00.000000Z",
                "updated_at": "2020-10-30T20:33:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1312,
                "drug_id": 507,
                "notes": "For Dermacentor reticulatus, afoxolaner prevents transmission of Babesia canis and development of clinical babesiosis for up to 28 days after single oral dose",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-10-30T20:33:00.000000Z",
                "updated_at": "2020-10-30T20:33:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1313,
                "drug_id": 507,
                "notes": "For demodicosis, afoxolaner is more effective in reducing mite count over two months of treatment compared to imidacloprid/moxidectin combination",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-10-30T20:33:00.000000Z",
                "updated_at": "2020-10-30T20:33:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1314,
                "drug_id": 507,
                "notes": "Afoxolaner does not impact cutaneous Demodex populations in healthy dogs over a 90-day period when administered at 2.5 mg/kg once monthly",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-10-30T20:33:00.000000Z",
                "updated_at": "2020-10-30T20:33:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1315,
                "drug_id": 507,
                "notes": "For Dermacentor variabilis ticks, afoxolaner has a slower speed of kill and is less effective 6-12 hours following oral dose compared to imidacloprid + flumethrin collar (Seresto)",
                "is_visible": 1,
                "display_order": 5,
                "created_at": "2020-10-30T20:33:00.000000Z",
                "updated_at": "2020-10-30T20:33:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1316,
                "drug_id": 507,
                "notes": "For Ixodes holocyclus and Ixodes scapularis, afoxolaner has a slower speed of kill and is less effective 8-24 hours following oral dose compared to sarolaner (Simparica)",
                "is_visible": 1,
                "display_order": 6,
                "created_at": "2020-10-30T20:33:00.000000Z",
                "updated_at": "2020-10-30T20:33:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1317,
                "drug_id": 507,
                "notes": "For Ixodes scapularis, afoxolaner prevents transmission of Borrelia burgdorferi for up to 33 days after a single oral dose",
                "is_visible": 1,
                "display_order": 7,
                "created_at": "2020-10-30T20:33:00.000000Z",
                "updated_at": "2020-10-30T20:33:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1318,
                "drug_id": 507,
                "notes": "For Rhipicephalus sanguineus, afoxolaner provides only low partial protection from transmission of Ehrlichia canis from ticks due to relatively slow speed of kill, while imidacloprid + permethrin (Advantix) has a faster speed of kill and effectively blocks transmission of Ehrlichia canis",
                "is_visible": 1,
                "display_order": 8,
                "created_at": "2020-10-30T20:33:00.000000Z",
                "updated_at": "2020-10-30T20:33:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1319,
                "drug_id": 508,
                "notes": "Often coadministered with other treatments, and for disorders with substantial spontaneous increases and decreases in clinical severity; therefore, specific therapeutic efficacy, as with many chronic airway inflammation medications, is poorly documented.",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-10-31T18:18:17.000000Z",
                "updated_at": "2020-10-31T18:18:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 1320,
                "drug_id": 508,
                "notes": "Since it has some ability to increase respiratory secretions, treated patients should be hydrated and have free access to water",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-10-31T18:18:17.000000Z",
                "updated_at": "2020-10-31T18:18:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 1321,
                "drug_id": 509,
                "notes": "Bioavailability of apixaban in cats (85.5%) is similar to that in dogs (80%)",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-10-31T18:20:29.000000Z",
                "updated_at": "2020-10-31T18:20:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 1322,
                "drug_id": 510,
                "notes": "Mechanism of action is generation of free radicals via iron-mediated lysis of the parent molecule, and many types of cancer cells have high iron content due to their overexpression of transferrin receptors.",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-10-31T18:22:19.000000Z",
                "updated_at": "2020-10-31T18:22:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1323,
                "drug_id": 511,
                "notes": "Seemingly greater lipid-lowering effect, with fewer adverse effects, compared to gemfibrozil (Lopid)",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-10-31T18:24:09.000000Z",
                "updated_at": "2020-10-31T18:24:09.000000Z",
                "deleted_at": null
            },
            {
                "id": 1324,
                "drug_id": 512,
                "notes": "Both fecal (62%) and renal (37%) elimination occurs, meaning some caution is warranted in patients with kidney disease",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-10-31T18:25:07.000000Z",
                "updated_at": "2020-10-31T18:25:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 1325,
                "drug_id": 512,
                "notes": "Theoretically could be combined with other appetite stimulants in recalcitrant cases of inappetence (e.g., benzodiazepines, mirtazapine, or cyproheptadine)",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-10-31T18:25:07.000000Z",
                "updated_at": "2020-10-31T18:25:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 1331,
                "drug_id": 514,
                "notes": "Diatrizoate meglumine is an ionic, high-osmolality iodinated contrast medium and as such can never be used intrathecally; nonionic agents such as iohexol (Omnipaque) are used instead.",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-10-31T18:39:35.000000Z",
                "updated_at": "2020-10-31T18:39:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 1332,
                "drug_id": 514,
                "notes": "Certain formulations of diatrizoate meglumine are suitable for intravenous use (Hypaque, RenoCal-76, Renografin) but others are not (Cystografin, Gastrografin).",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-10-31T18:39:35.000000Z",
                "updated_at": "2020-10-31T18:39:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 1333,
                "drug_id": 514,
                "notes": "Iodine content of certain preparations: Cystografin 30% = 141 mg iodine/mL, Gastrografin = 367 mg iodine/mL, Hypaque 60% = 282 mg iodine/mL, RenoCal-76 = 370 mg iodine/mL, Renografin-60 = 292.5 mg iodine/mL.",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-10-31T18:39:35.000000Z",
                "updated_at": "2020-10-31T18:39:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 1334,
                "drug_id": 514,
                "notes": "Other applications include: upper gastrointestinal radiographic contrast series instead of barium if GI perforation is suspected (846-1100 mg iodine/kg PO once; contrast effect is much less than with barium), computed tomographic angiography (700 mg iodine/kg IV once), and positive-contrast cystography (1500 mg iodine/kg, diluted with an equivalent volume of isotonic sterile saline and infused into the bladder via urethral catheter).",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-10-31T18:39:36.000000Z",
                "updated_at": "2020-10-31T18:39:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 1335,
                "drug_id": 514,
                "notes": "Diatrizoate meglumine is made up of an iodinated anion (diatrizoate) and a radiolucent cation (meglumine).",
                "is_visible": 1,
                "display_order": 5,
                "created_at": "2020-10-31T18:39:36.000000Z",
                "updated_at": "2020-10-31T18:39:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 1336,
                "drug_id": 515,
                "notes": "The least attractive form of vitamin D supplementation because of its very long time of onset (5-14 days; benefit is delayed and critical hypocalcemia may occur during lag time) and offset (persistent vitamin D activity for up to 2 weeks after cessation of treatment, causing ongoing toxic effects if present). However, it can be useful for animals whose owners have financial restrictions that make calcitriol cost-prohibitive.",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-10-31T19:12:34.000000Z",
                "updated_at": "2020-10-31T19:12:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 1337,
                "drug_id": 515,
                "notes": "For ergocalciferol, 50 000 IU  = 1.25 mg",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-10-31T19:12:34.000000Z",
                "updated_at": "2020-10-31T19:12:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 1338,
                "drug_id": 516,
                "notes": "Mechanism of action is inhibition of hepatic free fatty acid synthesis and increased catabolism of VLDL triglycerides (triglyceride effects) and alteration of peroxisome proliferator-activated receptor-alpha (PPAR-alpha), a key receptor involved in gene transcription for enzymes involved in lipid and lipoprotein metabolism.",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T15:11:33.000000Z",
                "updated_at": "2020-11-03T15:11:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1339,
                "drug_id": 516,
                "notes": "One advantage over bezafibrate is tablet sizes: more likely to find appropriate whole-tablet dose (or combinations-of-tablets dose) with fenofibrate than bezafibrate",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T15:11:33.000000Z",
                "updated_at": "2020-11-03T15:11:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1340,
                "drug_id": 517,
                "notes": "Mechanistic benefit of fenoldopam IV CRI over dopamine IV CRI is greater renal selectivity of fenoldopam, but this has not translated into a survival benefit in clinically ill dogs and cats",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T15:13:16.000000Z",
                "updated_at": "2020-11-03T15:13:16.000000Z",
                "deleted_at": null
            },
            {
                "id": 1341,
                "drug_id": 518,
                "notes": "Administration within the first 48 h following intoxication is most effective (acute neurologic and cardiovascular signs; no dermatologic signs), but some human studies have suggested that ferric cyanoferrate has effects throughout acute and chronic intoxications",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T15:14:06.000000Z",
                "updated_at": "2020-11-03T15:14:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1342,
                "drug_id": 518,
                "notes": "Increases fecal excretion of thallium in dogs up to 26 days after intoxication; measurement of urinary or fecal thallium may be possible in human diagnostic labs, allowing treatment to continue until eliminated concentrations fall or become undetectable (extrapolation from human medicine)",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T15:14:06.000000Z",
                "updated_at": "2020-11-03T15:14:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1343,
                "drug_id": 518,
                "notes": "Thallium intoxication is uncommon because thallium as a pesticide was banned from the U.S. in the 1980s. Doses of 20 mg/kg or greater are 100% fatal.",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T15:14:06.000000Z",
                "updated_at": "2020-11-03T15:14:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1344,
                "drug_id": 518,
                "notes": "As an alternative, diphenyldithiocarbazone (Dithizone) is a systemic chelator, versus ferric cyanoferrate, which only complexes with thallium in the GI tract (not absorbed systemically)",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-03T15:14:06.000000Z",
                "updated_at": "2020-11-03T15:14:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1345,
                "drug_id": 519,
                "notes": ">90% acceptance rate of oral doses in dogs (good patient compliance)",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T15:32:27.000000Z",
                "updated_at": "2020-11-03T15:32:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1346,
                "drug_id": 519,
                "notes": "Extended duration (less-frequent dosing) than certain alternatives, which may increase compliance",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T15:32:27.000000Z",
                "updated_at": "2020-11-03T15:32:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1347,
                "drug_id": 519,
                "notes": "For fleas in cats: fluralaner topical is significantly more effective in eliminating fleas up to 12 weeks compared to fipronil-methoprene topical",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T15:32:27.000000Z",
                "updated_at": "2020-11-03T15:32:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1348,
                "drug_id": 519,
                "notes": "For fleas in dogs: fluralaner topical is significantly more effective in eliminating fleas up to 12 weeks compared to fipronil-methoprene topical, but has a slower speed of kill versus sarolaner (Simparica)",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-03T15:32:27.000000Z",
                "updated_at": "2020-11-03T15:32:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1349,
                "drug_id": 519,
                "notes": "For fleas in dogs: oral fluralaner is more effective in eliminating fleas and reducing clinical signs of flea allegy dermatitis than fipronil (Frontline)",
                "is_visible": 1,
                "display_order": 5,
                "created_at": "2020-11-03T15:32:27.000000Z",
                "updated_at": "2020-11-03T15:32:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1350,
                "drug_id": 519,
                "notes": "For Demodex canis: fluralaner 25 mg/kg PO (single dose) does not impact cutaneous Demodex populations in healthy dogs over a 90 day period",
                "is_visible": 1,
                "display_order": 6,
                "created_at": "2020-11-03T15:32:27.000000Z",
                "updated_at": "2020-11-03T15:32:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1351,
                "drug_id": 519,
                "notes": "For canine demodicosis: fluralaner is slightly more effective than imidacloprid/moxidectin for eliminating mites and improving clinical signs of generalized demodicosis7",
                "is_visible": 1,
                "display_order": 7,
                "created_at": "2020-11-03T15:32:27.000000Z",
                "updated_at": "2020-11-03T15:32:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1352,
                "drug_id": 519,
                "notes": "For Dermacentor variabilis tick infestations in dogs: fluralaner has slower speed of kill and less effective against ticks than imidacloprid/flumethrin collar (Seresto)",
                "is_visible": 1,
                "display_order": 8,
                "created_at": "2020-11-03T15:32:27.000000Z",
                "updated_at": "2020-11-03T15:32:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1353,
                "drug_id": 519,
                "notes": "For Dermacentor reticulatus tick infestation in dogs: fluralaner is less effective at eliminating ticks following weekly re-infestations at 70-85 days after first treatment compared to afoxolaner (NexGard)",
                "is_visible": 1,
                "display_order": 9,
                "created_at": "2020-11-03T15:32:27.000000Z",
                "updated_at": "2020-11-03T15:32:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1354,
                "drug_id": 519,
                "notes": "For Dermacentor reticulatus tick infestation in dogs: fluralaner oral chews prevents transmission of Babesia canis for up to 90 days after a single oral dose",
                "is_visible": 1,
                "display_order": 10,
                "created_at": "2020-11-03T15:32:27.000000Z",
                "updated_at": "2020-11-03T15:32:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1355,
                "drug_id": 519,
                "notes": "For Rhipicephalus sanguineus tick infestation in dogs: fluralaner provides only low, partial protection from transmission of Ehrlichia canis from ticks due to relatively slow speed of kill, while imidacloprid + permethrin (Advantix) has a faster speed of kill and effectively blocks transmission of E. canis",
                "is_visible": 1,
                "display_order": 11,
                "created_at": "2020-11-03T15:32:28.000000Z",
                "updated_at": "2020-11-03T15:32:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 1356,
                "drug_id": 519,
                "notes": "For Rhipicephalus sanguineus tick infestation in dogs: fluralaner has a faster onset of activity and higher efficacy of tick elimination 12-24 hours after single oral dose compared to  afoxolaner (NexGard) and sarolaner (Simparica); fluralaner is more effective in tick elimination at 48 hours after treatment compared to topically applied imidacloprid + permethrin (Advantix)",
                "is_visible": 1,
                "display_order": 12,
                "created_at": "2020-11-03T15:32:28.000000Z",
                "updated_at": "2020-11-03T15:32:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 1357,
                "drug_id": 519,
                "notes": "For Rhipicephalus sanguineus tick infestation in dogs: fluralaner is less effective at eliminating ticks following weekly re-infestations at 78 days after onset of treatment compared to afoxolaner (NexGard)",
                "is_visible": 1,
                "display_order": 13,
                "created_at": "2020-11-03T15:32:28.000000Z",
                "updated_at": "2020-11-03T15:32:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 1358,
                "drug_id": 520,
                "notes": "Historically, has been administered at 10 mg/kg PO q 12h or 200 mg/dog PO q 24h as part of management of canine hypertriglyceridemia when other approaches have been unsuccessful",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T15:54:06.000000Z",
                "updated_at": "2020-11-03T15:54:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1359,
                "drug_id": 520,
                "notes": "Typically considered in combination with dietary therapy when dietary therapy alone fails to lower serum triglyceride concentrations <5.65 mmol/L (<500 mg/dL)",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T15:54:06.000000Z",
                "updated_at": "2020-11-03T15:54:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1360,
                "drug_id": 520,
                "notes": "Fibrates (e.g., bezafibrate) appear to be more promising for pharmacotherapy of hyperlipidemia in dogs",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T15:54:06.000000Z",
                "updated_at": "2020-11-03T15:54:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1361,
                "drug_id": 520,
                "notes": "High dosages may cause yellow crystals in feces",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-03T15:54:06.000000Z",
                "updated_at": "2020-11-03T15:54:06.000000Z",
                "deleted_at": null
            },
            {
                "id": 1362,
                "drug_id": 521,
                "notes": "Mechanism of action (effect via unique prostaglandin receptor subtype) is new in clinical veterinary medicine",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T15:55:28.000000Z",
                "updated_at": "2020-11-03T15:55:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 1363,
                "drug_id": 521,
                "notes": "New drug in clinical use; clinical safety continuing to be clarified with widespread use",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T15:55:28.000000Z",
                "updated_at": "2020-11-03T15:55:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 1364,
                "drug_id": 522,
                "notes": "Unique mechanism of action: partial benzodiazepine agonist",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T16:00:28.000000Z",
                "updated_at": "2020-11-03T16:00:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 1365,
                "drug_id": 522,
                "notes": "In dogs, imepitoin 10-30 mg/kg PO q 12h and phenobarbital 2-6 mg/kg PO q 12h have a comparable efficacy in controlling seizures; however, imepitoin is associated with fewer adverse effects (notably less evidence of hepatopathy via liver enzyme elevations)",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T16:00:28.000000Z",
                "updated_at": "2020-11-03T16:00:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 1366,
                "drug_id": 522,
                "notes": "Conflicting information regarding efficacy for anxiety disorders  might be explained by weaker evidence in the latter study (questionnaire-based format and single pre- and post- assessments), whereas the clinical trial design is more robust in the study indicating efficacy",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T16:00:28.000000Z",
                "updated_at": "2020-11-03T16:00:28.000000Z",
                "deleted_at": null
            },
            {
                "id": 1367,
                "drug_id": 523,
                "notes": "Iohexol is an iodinated, nonionic, low-osmolar compound. It has the following osmolalities: 140 mg iodine/mL = 322 mOsm/kg, 180 mg iodine/mL = 408 mOsm/kg, 240 mg iodine/mL = 520 mOsm/kg, 300 mg iodine/mL = 672 mOsm/kg, and 350 mg iodine/mL = 844 mOsm/kg. By comparison, the osmolality of diatrizoate meglumine is 1551 mOsm/kg, and the osmolality of normal blood and CSF are 285 mOsm/kg and 301 mOsm/kg, respectively. This helps explain the lower occurrence of adverse effects with iohexol, and its ability to be used intrathecally (versus diatrizoate meglumine, which is strictly contraindicated via this route).",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T16:03:40.000000Z",
                "updated_at": "2020-11-03T16:03:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 1368,
                "drug_id": 523,
                "notes": "It might seem counterintuitive that better-quality images can be obtained with a lower iodine concentration in the contrast medium (e.g., better cranial images in myelography with iohexol 180 mg iodine/mL than with 240 mg iodine/mL). This paradox is explained by the fact that lower concentrations are much less viscous, and thus propagate more readily.",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T16:03:40.000000Z",
                "updated_at": "2020-11-03T16:03:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 1369,
                "drug_id": 523,
                "notes": "For myelography, warming the contrast medium to body temperature prior to injection decreases viscosity and increases contrast diffusion",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T16:03:40.000000Z",
                "updated_at": "2020-11-03T16:03:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 1370,
                "drug_id": 523,
                "notes": "For arthrography, addition of 0.2 mg epinephrine to iohexol produces better images of the biceps tendon and lateral glenohumeral ligament, presumably by causing local vasoconstriction and delaying contrast washout",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-03T16:03:40.000000Z",
                "updated_at": "2020-11-03T16:03:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 1371,
                "drug_id": 524,
                "notes": "New mechanism of action: anti-interleukin antibody that remains in circulation for several weeks after a single injection. Long-term efficacy and safety profiles still emerging.",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T16:09:23.000000Z",
                "updated_at": "2020-11-03T16:09:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 1372,
                "drug_id": 524,
                "notes": "Another treatment schedule that has been suggested is to treat q 6-8 weeks.",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T16:09:23.000000Z",
                "updated_at": "2020-11-03T16:09:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 1373,
                "drug_id": 525,
                "notes": "Mechanism of action: blocks the microsomal triglyceride transfer protein that mediates the absorption of dietary lipids. This interferes directly with fat uptake (decreasing energy gain) and may suppress appetite by increasing the release of satiety hormones as a result of lipid retention within enterocytes.",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T16:11:35.000000Z",
                "updated_at": "2020-11-03T16:11:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 1374,
                "drug_id": 525,
                "notes": "Previously, dirlotapide and mitratapide were indicated for weight loss in dogs. However, the combination of disappointing results from certain clinical trials and limited to poor acceptance in clinical practice, both drugs have largely been withdrawn from the market. Current weight loss strategies involve dietary energy restriction using a purpose-formulated diet, usually in combination with increased activity.",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T16:11:35.000000Z",
                "updated_at": "2020-11-03T16:11:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 1375,
                "drug_id": 526,
                "notes": "Small number of patients examined systematically, wide range of disorders and concurrent factors, and mild response (if any), make it difficult to conclude that nandrolone has important hematologic benefits in small animal practice",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T16:33:24.000000Z",
                "updated_at": "2020-11-03T16:33:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 1376,
                "drug_id": 526,
                "notes": "Anabolic steroid requiring rigorous accountability to prevent fraudulent use (schedule III controlled drug in USA)",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T16:33:24.000000Z",
                "updated_at": "2020-11-03T16:33:24.000000Z",
                "deleted_at": null
            },
            {
                "id": 1377,
                "drug_id": 527,
                "notes": "Severity of cardiac arrhythmias (and underlying myocarditis) varies and may be prohibitive to completion of treatment in some cases",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T16:34:20.000000Z",
                "updated_at": "2020-11-03T16:34:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 1378,
                "drug_id": 527,
                "notes": "Contact Centers for Disease Control and Prevention (Atlanta, GA) to obtain nifurtimox",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T16:34:20.000000Z",
                "updated_at": "2020-11-03T16:34:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 1379,
                "drug_id": 527,
                "notes": "Other safer alternatives (e.g., ravuconazole, simvastatin)?",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T16:34:20.000000Z",
                "updated_at": "2020-11-03T16:34:20.000000Z",
                "deleted_at": null
            },
            {
                "id": 1380,
                "drug_id": 528,
                "notes": "Severity of cardiac arrhythmias (and underlying myocarditis) varies and may be prohibitive to completion of treatment in some cases",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T16:34:56.000000Z",
                "updated_at": "2020-11-03T16:34:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 1381,
                "drug_id": 528,
                "notes": "Contact Centers for Disease Control and Prevention (Atlanta, GA) to obtain nifurtimox",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T16:34:56.000000Z",
                "updated_at": "2020-11-03T16:34:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 1382,
                "drug_id": 528,
                "notes": "Other safer alternatives (e.g., ravuconazole, simvastatin)?",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T16:34:56.000000Z",
                "updated_at": "2020-11-03T16:34:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 1383,
                "drug_id": 529,
                "notes": "A food-elicited cataplexy test (without physostigmine), and/or measurement of hypocretin levels in cerebrospinal fluid, are alternative methods for the diagnosis of narcolepsy in dogs",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T16:36:33.000000Z",
                "updated_at": "2020-11-03T16:36:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1384,
                "drug_id": 529,
                "notes": "Anticholinesterase effect is of shorter duration (sometimes referred to as \"reversible\" for this reason) compared to organophosphates",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T16:36:33.000000Z",
                "updated_at": "2020-11-03T16:36:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1385,
                "drug_id": 529,
                "notes": "Older applications have included treatment for glaucoma and for atropine/glycopyrrolate overdose",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T16:36:33.000000Z",
                "updated_at": "2020-11-03T16:36:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1386,
                "drug_id": 530,
                "notes": "A food-elicited cataplexy test (without physostigmine), and/or measurement of hypocretin levels in cerebrospinal fluid, are alternative methods for the diagnosis of narcolepsy in dogs",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T16:37:57.000000Z",
                "updated_at": "2020-11-03T16:37:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 1387,
                "drug_id": 530,
                "notes": "Anticholinesterase effect is of shorter duration (sometimes referred to as \"reversible\" for this reason) compared to organophosphates",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T16:37:57.000000Z",
                "updated_at": "2020-11-03T16:37:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 1388,
                "drug_id": 530,
                "notes": "Older applications have included treatment for glaucoma and for atropine/glycopyrrolate overdose",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T16:37:57.000000Z",
                "updated_at": "2020-11-03T16:37:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 1389,
                "drug_id": 531,
                "notes": "Protection of the airway and avoidance of aspiration are essential when administering; aspiration of PEG can be fatal due to its high osmolality causing movement of interstitial fluid into the lungs",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 1390,
                "drug_id": 531,
                "notes": "PEG 3350 is so named because of its molecular weight in Daltons",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 1391,
                "drug_id": 531,
                "notes": "Polyethylene glycol is routinely used for bowel evacuation as well as for constipation prevention in both dogs and cats.",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 1392,
                "drug_id": 531,
                "notes": "Properly reconstituted, GoLytely and Colyte have the same contents: PEG 3350 (60 g/L), NaCl (1.46 g/L), KCl (0.745 g/L), NaHCO3 (1.68 g/L), and Na2SO4 (5.68 g/L).",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-03T17:07:59.000000Z",
                "updated_at": "2020-11-03T17:07:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 1393,
                "drug_id": 532,
                "notes": "May cause darkening of feces due to iron content (no known risk related to this)",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T17:09:17.000000Z",
                "updated_at": "2020-11-03T17:09:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 1394,
                "drug_id": 532,
                "notes": "Drug consists of an insoluble iron (3+) oxide/hydroxide complex with starch and sucrose, which increases binding efficiency of iron to phosphate",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T17:09:17.000000Z",
                "updated_at": "2020-11-03T17:09:17.000000Z",
                "deleted_at": null
            },
            {
                "id": 1395,
                "drug_id": 533,
                "notes": "Mechanism of action suggests that use for treating systemic toxoplasmosis/neosporosis bears investigating, given the similarity of these protozoa to Sarcocystis, which is an indication for equine use.",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T17:10:33.000000Z",
                "updated_at": "2020-11-03T17:10:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1396,
                "drug_id": 534,
                "notes": "Unlike other azole antifungals, posaconazole has activity against opportunistic fungal infections (zygomycetes/Mucorales)",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T17:13:57.000000Z",
                "updated_at": "2020-11-03T17:13:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 1397,
                "drug_id": 534,
                "notes": "Triazole antifungal (like fluconazole) - fewer effects on mammalian steroid synthesis, and longer elimination, compared to imidazole antifungals (ketoconazole, clotrimazole, enilconazole, miconazole)",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T17:13:57.000000Z",
                "updated_at": "2020-11-03T17:13:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 1398,
                "drug_id": 534,
                "notes": "Very expensive (e.g., 60 X 100 mg tablets = approximately US$4000)",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T17:13:57.000000Z",
                "updated_at": "2020-11-03T17:13:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 1399,
                "drug_id": 534,
                "notes": "Another potential application is dermatomycosis",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-03T17:13:57.000000Z",
                "updated_at": "2020-11-03T17:13:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 1400,
                "drug_id": 535,
                "notes": "Similar to cisapride but without cardiac effects (important in humans)",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T17:14:55.000000Z",
                "updated_at": "2020-11-03T17:14:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 1401,
                "drug_id": 535,
                "notes": "Prucalopride has high bioavailability (77%) so IV and PO dosages are very similar",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T17:14:55.000000Z",
                "updated_at": "2020-11-03T17:14:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 1402,
                "drug_id": 535,
                "notes": "A potential additional benefit of prucalopride is its stimulation of gastric emptying in dogs (not yet reported in large case series/clinical trial)",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T17:14:55.000000Z",
                "updated_at": "2020-11-03T17:14:55.000000Z",
                "deleted_at": null
            },
            {
                "id": 1403,
                "drug_id": 536,
                "notes": "Mechanism of action = double prodrug: intracellular penetration is followed by hydrolysis and deamination, the result of which is a molecule that inhibits DNA polymerases intracellularly, minimizing systemic effects.",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T17:16:19.000000Z",
                "updated_at": "2020-11-03T17:16:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1404,
                "drug_id": 536,
                "notes": "Outcomes with cutaneous lymphoma application may seem disappointing, but are similar to other protocols given the guarded to poor prognosis associated with this disease",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T17:16:19.000000Z",
                "updated_at": "2020-11-03T17:16:19.000000Z",
                "deleted_at": null
            },
            {
                "id": 1405,
                "drug_id": 537,
                "notes": "Lack of apparent adverse effects is a potential benefit compared to neomycin and metronidazole",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T17:17:31.000000Z",
                "updated_at": "2020-11-03T17:17:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 1406,
                "drug_id": 537,
                "notes": "Use of this drug in dogs and cats with hepatic encephalopathy is intriguing but safety and efficacy have not been established",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T17:17:31.000000Z",
                "updated_at": "2020-11-03T17:17:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 1407,
                "drug_id": 537,
                "notes": "Current cost of rifaximin may be prohibitive for some owners",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T17:17:31.000000Z",
                "updated_at": "2020-11-03T17:17:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 1408,
                "drug_id": 537,
                "notes": "Rifaximin may have clinical value in treating flatulence in dogs",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-03T17:17:31.000000Z",
                "updated_at": "2020-11-03T17:17:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 1409,
                "drug_id": 537,
                "notes": "Concern exists for eliciting cross-resistance to rifampin with extended/widespread rifaximin usage, since rifampin remains an important component of human tuberculosis treatment and bacterial resistance has developed rapidly in some drugs in this class",
                "is_visible": 1,
                "display_order": 5,
                "created_at": "2020-11-03T17:17:31.000000Z",
                "updated_at": "2020-11-03T17:17:31.000000Z",
                "deleted_at": null
            },
            {
                "id": 1410,
                "drug_id": 538,
                "notes": "Originally dosed q 24h in dogs by extrapolation from human medicine, but more recent dog-specific pharmacokinetic/pharmacodynamic study identifies q 12h interval as appropriate (longer duration of anticoagulant effect without excessive magnitude of effect), possibly q 8h in some dogs.",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T17:18:18.000000Z",
                "updated_at": "2020-11-03T17:18:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 1411,
                "drug_id": 538,
                "notes": "Prothrombin time and activated partial thromboplastin time do not change significantly with treatment and should not be used for monitoring efficacy of anticoagulation in dogs",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T17:18:18.000000Z",
                "updated_at": "2020-11-03T17:18:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 1412,
                "drug_id": 538,
                "notes": "Approximately 4 times less expensive than equivalent dosage of dalteparin",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T17:18:18.000000Z",
                "updated_at": "2020-11-03T17:18:18.000000Z",
                "deleted_at": null
            },
            {
                "id": 1413,
                "drug_id": 541,
                "notes": "Advantages of secnidazole over metronidazole: single dose, no neurotoxicosis observed. Fenbendazole may be more effective and safer than either of these azole drugs for canine giardiasis",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T17:20:25.000000Z",
                "updated_at": "2020-11-03T17:20:25.000000Z",
                "deleted_at": null
            },
            {
                "id": 1414,
                "drug_id": 542,
                "notes": "Non-peer-reviewed reports recommend 1-3 mg/kg PO q 12-24h in dogs",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T17:22:07.000000Z",
                "updated_at": "2020-11-03T17:22:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 1415,
                "drug_id": 542,
                "notes": "Therapeutic effect often requires sustained treatment to be apparent, and protocols for obsessive-compulsive disorder or phobia treatment in dogs ofter involve sertraline administration for up to 8-16 weeks with the goal of reaching therapeutic efficacy",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T17:22:07.000000Z",
                "updated_at": "2020-11-03T17:22:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 1416,
                "drug_id": 542,
                "notes": "Can produce a false-positive urine test result for benzodiazepines (important if accidental benzodiazepine ingestion is suspected in an animal receiving sertraline)",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T17:22:07.000000Z",
                "updated_at": "2020-11-03T17:22:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 1417,
                "drug_id": 543,
                "notes": "Seldom used in practice due to scant evidence and lack of clear benefit (assuming proper aseptic technique) versus potential drawbacks (adverse effects, antibacterial resistance, cost, opportunistic infection, etc.)",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T19:17:27.000000Z",
                "updated_at": "2020-11-03T19:17:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1418,
                "drug_id": 543,
                "notes": "Related aminoglycosides notorious for development of bacterial resistance",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T19:17:27.000000Z",
                "updated_at": "2020-11-03T19:17:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1419,
                "drug_id": 544,
                "notes": "Clinical value of eliminating bacteria from periodontal tissues using this antibacterial, optimal duration of treatment, and relative benefit-to-risk ratio of extended treatment remain to be elucidated",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T19:19:33.000000Z",
                "updated_at": "2020-11-03T19:19:33.000000Z",
                "deleted_at": null
            },
            {
                "id": 1420,
                "drug_id": 546,
                "notes": "Anecdotally reported use for coccidiosis in dogs and cats: 150 - 200  mg/kg PO q 24h X 6 days or 100-200  mg/kg PO q 8h X 5 days",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T19:26:22.000000Z",
                "updated_at": "2020-11-03T19:26:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 1421,
                "drug_id": 546,
                "notes": "Minimal GI absorption, meaning less likelihood of systemic toxicity (e.g., blood dyscrasias, hypersensitivity)",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T19:26:22.000000Z",
                "updated_at": "2020-11-03T19:26:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 1422,
                "drug_id": 547,
                "notes": "Current clinical use for arterial thrombus: considered when clot is known to be fresh (e.g., onset of signs X 8 hours or less) and risks of excessive bleeding are minimal; not for organized/chronic thrombi",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T19:29:15.000000Z",
                "updated_at": "2020-11-03T19:29:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 1423,
                "drug_id": 547,
                "notes": "Formerly cost-prohibitive (e.g., US$1500-2000/treatment) but now much cheaper (e.g., US$150-300/treatment)",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T19:29:15.000000Z",
                "updated_at": "2020-11-03T19:29:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 1424,
                "drug_id": 547,
                "notes": "No large-scale clinical trials in dogs or cats to prove benefit (over spontaneous thrombolysis, with standard anticoagulant/antiplatelet treatment) and risk",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T19:29:15.000000Z",
                "updated_at": "2020-11-03T19:29:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 1425,
                "drug_id": 547,
                "notes": "Routinely used in ophthalmology for lysis (or prevention) of fresh clots intracamerally - intraocular injection in anesthetized patient",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-03T19:29:15.000000Z",
                "updated_at": "2020-11-03T19:29:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 1426,
                "drug_id": 548,
                "notes": "Initial enthusiasm for the antihistamine-glucocorticoid combination in cats faded when it was realized that combination products (Temaril-P, Vanectyl-P) contain prednisolone, not prednisone; thus, the perceived superiority of adding the antihistamine might be explained by some cats' inability to convert prednisone to prednisolone (i.e., having a bioactive glucocorticoid in the combination product made the difference, not the concurrent presence of an antihistamine)",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T19:30:45.000000Z",
                "updated_at": "2020-11-03T19:30:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 1427,
                "drug_id": 548,
                "notes": "Phenothiazine derivative - could cause sedation at higher dosages; the sedative/CNS depression effect conceivably could contribute to dampening hyperirritability associated with itching",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T19:30:45.000000Z",
                "updated_at": "2020-11-03T19:30:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 1428,
                "drug_id": 548,
                "notes": "Anecdotal use for chronic cough (e.g., due to chronic sterile bronchitis), dosed according to prednisolone content, i.e., initial q 12h use, then gradual taper and usage as needed",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T19:30:45.000000Z",
                "updated_at": "2020-11-03T19:30:45.000000Z",
                "deleted_at": null
            },
            {
                "id": 1429,
                "drug_id": 549,
                "notes": "Older drug, largely replaced by drugs with greater efficacy (e.g., maropitant, ondansetron, dolasteron)",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T19:35:56.000000Z",
                "updated_at": "2020-11-03T19:35:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 1430,
                "drug_id": 549,
                "notes": "Injection can stain white hair yellow",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T19:35:56.000000Z",
                "updated_at": "2020-11-03T19:35:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 1431,
                "drug_id": 549,
                "notes": "Narrow spectrum antiemetic; only expected to block emetogenic stimuli that involve histamine receptors (motion sickness primarily)",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T19:35:56.000000Z",
                "updated_at": "2020-11-03T19:35:56.000000Z",
                "deleted_at": null
            },
            {
                "id": 1432,
                "drug_id": 550,
                "notes": "Older drug, largely replaced by drugs with greater efficacy (e.g., maropitant, ondansetron, dolasteron)",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T19:36:40.000000Z",
                "updated_at": "2020-11-03T19:36:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 1433,
                "drug_id": 550,
                "notes": "Injection can stain white hair yellow",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T19:36:40.000000Z",
                "updated_at": "2020-11-03T19:36:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 1434,
                "drug_id": 550,
                "notes": "Narrow spectrum antiemetic; only expected to block emetogenic stimuli that involve histamine receptors (motion sickness primarily)",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T19:36:40.000000Z",
                "updated_at": "2020-11-03T19:36:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 1435,
                "drug_id": 551,
                "notes": "Initial enthusiasm for the antihistamine-glucocorticoid combination in cats faded when it was realized that combination products (Temaril-P, Vanectyl-P) contain prednisolone, not prednisone; thus, the perceived superiority of adding the antihistamine might be explained by some cats' inability to convert prednisone to prednisolone (i.e., having a bioactive glucocorticoid in the combination product made the difference, not the concurrent presence of an antihistamine)",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T20:25:40.000000Z",
                "updated_at": "2020-11-03T20:25:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 1436,
                "drug_id": 551,
                "notes": "Phenothiazine derivative - could cause sedation at higher dosages; the sedative/CNS depression effect conceivably could contribute to dampening hyperirritability associated with itching",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T20:25:40.000000Z",
                "updated_at": "2020-11-03T20:25:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 1437,
                "drug_id": 551,
                "notes": "Anecdotal use for chronic cough (e.g., due to chronic sterile bronchitis), dosed according to prednisolone content, i.e., initial q 12h use, then gradual taper and usage as needed",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-03T20:25:40.000000Z",
                "updated_at": "2020-11-03T20:25:40.000000Z",
                "deleted_at": null
            },
            {
                "id": 1438,
                "drug_id": 552,
                "notes": "The least attractive form of vitamin D supplementation because of its very long time of onset (5-14 days; benefit is delayed and critical hypocalcemia may occur during lag time) and offset (persistent vitamin D activity for up to 2 weeks after cessation of treatment, causing ongoing toxic effects if present). However, it can be useful for animals whose owners have financial restrictions that make calcitriol cost-prohibitive.",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-03T20:48:34.000000Z",
                "updated_at": "2020-11-03T20:48:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 1439,
                "drug_id": 552,
                "notes": "For ergocalciferol, 50 000 IU  = 1.25 mg",
                "is_visible": 1,
                "display_order": 2,
                "created_at": "2020-11-03T20:48:34.000000Z",
                "updated_at": "2020-11-03T20:48:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 1440,
                "drug_id": 18,
                "notes": "For canine leishmaniasis, certain protocols involve continuing allopurinol lifelong",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-04T01:54:22.000000Z",
                "updated_at": "2020-11-04T01:54:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 1441,
                "drug_id": 18,
                "notes": "The sick euthyroid syndrome is common in canine leishmaniasis (75% of cases) but hypothyroidism is rare (<3%) and does not appear to be triggered by allopurinol treatment",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-04T01:54:22.000000Z",
                "updated_at": "2020-11-04T01:54:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 1442,
                "drug_id": 18,
                "notes": "For canine leishmaniasis, certain protocols involve continuing allopurinol lifelong",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-04T01:55:07.000000Z",
                "updated_at": "2020-11-04T01:55:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 1443,
                "drug_id": 18,
                "notes": "The sick euthyroid syndrome is common in canine leishmaniasis (75% of cases) but hypothyroidism is rare (<3%) and does not appear to be triggered by allopurinol treatment",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-04T01:55:07.000000Z",
                "updated_at": "2020-11-04T01:55:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 1444,
                "drug_id": 18,
                "notes": "Feline leishmaniasis case reports vary in their conclusions, with allopurinol seeming to be effective in some cases, and only in combination with other treatments in others (e.g., N-methyl-glucamine antimoniate [Glucantime] 50 mg/kg SC q 24h X 30 days;",
                "is_visible": 1,
                "display_order": 5,
                "created_at": "2020-11-04T01:55:07.000000Z",
                "updated_at": "2020-11-04T01:55:07.000000Z",
                "deleted_at": null
            },
            {
                "id": 1445,
                "drug_id": 9,
                "notes": "Extravasation/perivascular injection is associated with unchanged ACTH stimulation test results.",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-11-04T02:16:27.000000Z",
                "updated_at": "2020-11-04T02:16:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1446,
                "drug_id": 11,
                "notes": "Addition of dog food to activated charcoal decreases absorptive capacity to a negligible degree (1.4% in one study)",
                "is_visible": 1,
                "display_order": 5,
                "created_at": "2020-11-04T02:16:59.000000Z",
                "updated_at": "2020-11-04T02:16:59.000000Z",
                "deleted_at": null
            },
            {
                "id": 1447,
                "drug_id": 26,
                "notes": "Premixed amiodarone (brand name: Nexterone) has been available in the U.S. since 2010; it does not contain polysorbate or benzyl alcohol and therefore, is associated with fewer side-effects (hypotension, hypersensitivity) than its predecessor formulation (i.e., clinical reports before 2010).",
                "is_visible": 1,
                "display_order": 5,
                "created_at": "2020-11-04T02:27:43.000000Z",
                "updated_at": "2020-11-04T02:27:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 1448,
                "drug_id": 42,
                "notes": "An additional drawback of atenolol in subclinical hypertrophic cardiomyopathy could be its negative effect on atrial function: peak left atrial appendage velocity decreases by 35% and peak velocity of pulmonary vein flow at atrial contraction decreases by 49% compared to untreated healthy cats. This could have clinically significant effects on sluggish atrial blood flow, particularly when there is preexisting atrial enlargement.",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-11-04T02:28:02.000000Z",
                "updated_at": "2020-11-04T02:28:02.000000Z",
                "deleted_at": null
            },
            {
                "id": 1449,
                "drug_id": 57,
                "notes": "Appears to have minimal myelotoxic effect, raising interest about bleomycin treatment in cancer patients with cytopenias (either myelophthisis- or chemotherapy-related)",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-04T16:07:57.000000Z",
                "updated_at": "2020-11-04T16:07:57.000000Z",
                "deleted_at": null
            },
            {
                "id": 1450,
                "drug_id": 57,
                "notes": "Appears to have minimal myelotoxic effect, raising interest about bleomycin treatment in cancer patients with cytopenias (either myelophthisis- or chemotherapy-related)",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-04T16:18:38.000000Z",
                "updated_at": "2020-11-04T16:18:38.000000Z",
                "deleted_at": null
            },
            {
                "id": 1451,
                "drug_id": 58,
                "notes": "Coadministration of levetiracetam and bromide does not alter levetiracetam pharmacokinetics (versus phenobarbital, which significantly reduces plasma levetiracetam levels)",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-11-04T16:29:23.000000Z",
                "updated_at": "2020-11-04T16:29:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 1452,
                "drug_id": 63,
                "notes": "Superior analgesia compared to butorphanol has been demonstrated in feline laparotomy",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-04T20:17:15.000000Z",
                "updated_at": "2020-11-04T20:17:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 1453,
                "drug_id": 63,
                "notes": "Peak plasma buprenorphine concentrations occur 30",
                "is_visible": 1,
                "display_order": 5,
                "created_at": "2020-11-04T20:17:15.000000Z",
                "updated_at": "2020-11-04T20:17:15.000000Z",
                "deleted_at": null
            },
            {
                "id": 1454,
                "drug_id": 65,
                "notes": "Superior analgesia for feline laparotomy can be achieved with buprenorphine instead of butorphano",
                "is_visible": 1,
                "display_order": 5,
                "created_at": "2020-11-04T20:18:42.000000Z",
                "updated_at": "2020-11-04T20:18:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 1455,
                "drug_id": 65,
                "notes": "Butorphanol reduces wheal size in dogs undergoing intradermal allergy testing, but not to a clinically-significant degree",
                "is_visible": 1,
                "display_order": 6,
                "created_at": "2020-11-04T20:18:42.000000Z",
                "updated_at": "2020-11-04T20:18:42.000000Z",
                "deleted_at": null
            },
            {
                "id": 1456,
                "drug_id": 91,
                "notes": "No convincing benefit for preventing urinary tract infection in paraparetic/paraplegic spinal cord injury patients, and a trend towards higher inciden",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-11-05T19:46:43.000000Z",
                "updated_at": "2020-11-05T19:46:43.000000Z",
                "deleted_at": null
            },
            {
                "id": 1457,
                "drug_id": 98,
                "notes": "In dogs with pyoderma, cephalexin is strongly associated with emergence of methicillin-resistant Staphylococcus pseudintermedius (MRSP): in one study, 0% of dogs had MRSP on nasal swabs obtained prior to treatment, and all (10/10) dogs had MRSP within 1 week of starting treatment, with 2/10 dogs still carrying MRSP 1 year after treatment was stoppe",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-11-05T20:32:27.000000Z",
                "updated_at": "2020-11-05T20:32:27.000000Z",
                "deleted_at": null
            },
            {
                "id": 1458,
                "drug_id": 100,
                "notes": "Conflicting results: another placebo-controlled (but double-blinded) clinical trial suggests no benefit of cetirizine in canine atopic dermatitis",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-11-05T20:33:35.000000Z",
                "updated_at": "2020-11-05T20:33:35.000000Z",
                "deleted_at": null
            },
            {
                "id": 1459,
                "drug_id": 102,
                "notes": "Addition of a chlorambucil-based maintenance phase for treatment of lymphoma in dogs was not superior to the same treatment with no maintenance phase in a arge retrospective study",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-11-07T18:24:13.000000Z",
                "updated_at": "2020-11-07T18:24:13.000000Z",
                "deleted_at": null
            },
            {
                "id": 1460,
                "drug_id": 102,
                "notes": "Addition of a chlorambucil-based maintenance phase for treatment of lymphoma in dogs was not superior to the same treatment with no maintenance phase in a arge retrospective study",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-11-07T18:25:22.000000Z",
                "updated_at": "2020-11-07T18:25:22.000000Z",
                "deleted_at": null
            },
            {
                "id": 1461,
                "drug_id": 110,
                "notes": "The bioavailability of ciprofloxacin is highly variable in dogs, with greater than fourfold variability even under experimental conditions in dogs (area under the curve = 5.52-22.47 h μg/mL)",
                "is_visible": 1,
                "display_order": 3,
                "created_at": "2020-11-07T18:48:00.000000Z",
                "updated_at": "2020-11-07T18:48:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1462,
                "drug_id": 110,
                "notes": "Contrary to what would be expected with the body surface area concept of drug dosing, blood ciprofloxacin concentrations are lower in larger dogs than in smaller dogs given the same mg/kg dosage; this may justify higher dosages in larger dogs.",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-07T18:48:00.000000Z",
                "updated_at": "2020-11-07T18:48:00.000000Z",
                "deleted_at": null
            },
            {
                "id": 1463,
                "drug_id": 111,
                "notes": "Cisapride is proven to increase lower esophageal sphincter tone in dogs,in contrast to metoclopramide which does not",
                "is_visible": 1,
                "display_order": 1,
                "created_at": "2020-11-07T18:50:01.000000Z",
                "updated_at": "2020-11-07T18:50:01.000000Z",
                "deleted_at": null
            },
            {
                "id": 1464,
                "drug_id": 128,
                "notes": "Slightly less effective than oclacitinib at controlling pruritus in dogs with atopic dermatitis, and associated with 3 times more GI side-effects than oclacitinib",
                "is_visible": 1,
                "display_order": 4,
                "created_at": "2020-11-08T15:19:11.000000Z",
                "updated_at": "2020-11-08T15:19:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 1465,
                "drug_id": 128,
                "notes": "Is associated with mild, clinically insignificant signs of reactivation of feline herpesvirus-1 infections in cats",
                "is_visible": 1,
                "display_order": 8,
                "created_at": "2020-11-08T15:19:11.000000Z",
                "updated_at": "2020-11-08T15:19:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 1466,
                "drug_id": 493,
                "notes": "In cats, deslorelin implants confer reversible reproductive effects. In queens this includes an ability to carry a litter to term, and negative effects on maternal behavior and lactation",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-11-08T19:34:23.000000Z",
                "updated_at": "2020-11-08T19:34:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 1467,
                "drug_id": 493,
                "notes": "n males, suppression of sexually dimorphic behavior occurs 13-58 days after implantation, lasts 26.5 +/- 7.4 months, and is fully reversible",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-11-08T19:34:23.000000Z",
                "updated_at": "2020-11-08T19:34:23.000000Z",
                "deleted_at": null
            },
            {
                "id": 1468,
                "drug_id": 141,
                "notes": "Only 18% of dogs have required the manufacturer's recommended dosage of 2.2 mg/kg; however, it is impossible to predict a dog's long-term requirement, so the dosage can be reduced gradually (e.g., by 10% increments) only if blood electrolytes can be rechecked 2 weeks after a dosage reduction and vigilant observation for clinical signs is available daily at home",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-11-08T19:52:34.000000Z",
                "updated_at": "2020-11-08T19:52:34.000000Z",
                "deleted_at": null
            },
            {
                "id": 1469,
                "drug_id": 143,
                "notes": "Dexmedetomidine produces a small but significant enlargement in cardiac silhouette size on thoracic radiographs of cats and dogs,and a marked reduction in contrast-enhanced echogenicity of dogs' spleens",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-11-08T20:06:29.000000Z",
                "updated_at": "2020-11-08T20:06:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 1470,
                "drug_id": 148,
                "notes": "Rectal diazepam (1 mg/kg) appears to be inferior to intranasal midazolam (0.2 mg/kg via nasal atomizer) for controlling status epilepticus in dogs: 20% vs. 70% success rates, respectively",
                "is_visible": 0,
                "display_order": 3,
                "created_at": "2020-11-08T20:12:52.000000Z",
                "updated_at": "2020-11-08T20:12:52.000000Z",
                "deleted_at": null
            },
            {
                "id": 1471,
                "drug_id": 171,
                "notes": "Doxycycline treatment of Borrelia-associated nephritis can reverse urinary protein loss substantially in some cases",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-11-08T20:50:03.000000Z",
                "updated_at": "2020-11-08T20:50:03.000000Z",
                "deleted_at": null
            },
            {
                "id": 1472,
                "drug_id": 173,
                "notes": "In protein-losing nephropathy, the benefit of enalapril is enhanced by feeding a low-protein diet",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-11-09T20:20:37.000000Z",
                "updated_at": "2020-11-09T20:20:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 1473,
                "drug_id": 173,
                "notes": "Enalapril reduces the effect of furosemide-induced renin-angiotensin-aldosterone activation which is a benefit, but this effect is only partial",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-11-09T20:20:37.000000Z",
                "updated_at": "2020-11-09T20:20:37.000000Z",
                "deleted_at": null
            },
            {
                "id": 1474,
                "drug_id": 181,
                "notes": "S-esmolol may provide similar heart rate control with less hypotension compared to the racemic mixture",
                "is_visible": 0,
                "display_order": 4,
                "created_at": "2020-11-09T21:09:11.000000Z",
                "updated_at": "2020-11-09T21:09:11.000000Z",
                "deleted_at": null
            },
            {
                "id": 1475,
                "drug_id": 185,
                "notes": "After stopping treatment, serum gastrin return to normal in under 7 days",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-11-11T18:54:32.000000Z",
                "updated_at": "2020-11-11T18:54:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 1476,
                "drug_id": 185,
                "notes": "Loss of efficacy with even medium-duration courses of treatment in dogs: mean gastric pH the day after starting famotidine = 4.9, versus 3.1 12 days later (by comparison, placebo-treated dogs have mean gastric pH = 2.5-2.8)",
                "is_visible": 0,
                "display_order": 6,
                "created_at": "2020-11-11T18:54:32.000000Z",
                "updated_at": "2020-11-11T18:54:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 1477,
                "drug_id": 185,
                "notes": "Addition of famotidine to pantoprazole is unnecessary because no further gastric pH reduction is noted compared to pantoprazole alone",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-11-11T18:54:32.000000Z",
                "updated_at": "2020-11-11T18:54:32.000000Z",
                "deleted_at": null
            },
            {
                "id": 1478,
                "drug_id": 200,
                "notes": "Improvements in separation anxiety-related behaviors are based on alteration of dogs' affect (i.e., better mood), not just suppression of anxious behavior",
                "is_visible": 0,
                "display_order": 5,
                "created_at": "2020-11-11T21:11:47.000000Z",
                "updated_at": "2020-11-11T21:11:47.000000Z",
                "deleted_at": null
            },
            {
                "id": 1479,
                "drug_id": 205,
                "notes": "Similar time to peak action with SC as IV in healthy dogs, but in acute heart failure, reduced peripheral circulation may mean reduced/delayed SC uptake",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-11-11T21:24:29.000000Z",
                "updated_at": "2020-11-11T21:24:29.000000Z",
                "deleted_at": null
            },
            {
                "id": 1480,
                "drug_id": 216,
                "notes": "Unlike Microsporum persicolor and M. canis, M. gypseum infection fails to be eliminated in 39% (dogs) and 40% (cats) treated with griseofulvin, emphasizing the value of fungal speciation",
                "is_visible": 0,
                "display_order": 1,
                "created_at": "2020-11-12T20:41:04.000000Z",
                "updated_at": "2020-11-12T20:41:04.000000Z",
                "deleted_at": null
            },
            {
                "id": 1481,
                "drug_id": 248,
                "notes": "For certain systemic applications (e.g., atopic dermatitis), oral administration may be more effective",
                "is_visible": 0,
                "display_order": 2,
                "created_at": "2020-11-16T02:27:36.000000Z",
                "updated_at": "2020-11-16T02:27:36.000000Z",
                "deleted_at": null
            },
            {
                "id": 1482,
                "drug_id": 255,
                "notes": "q 48h dosing in cats appears effective: 100 mg/CAT PO q 48h produces an average peak serum itraconazole concentration of 1.79 ± 0.952 μg/mL and an average trough concentration of 0.761 ± 0.540 μg/mL; monitoring of serum levels is advised",
                "is_visible": 0,
                "display_order": 7,
                "created_at": "2020-11-16T02:56:04.000000Z",
                "updated_at": "2020-11-16T02:56:04.000000Z",
                "deleted_at": null
            }
        ];

      for(let i = 0; i < data.length; ++i) {
            query = query + "('"
                  + data[i].id //id
                  + "','"
                  + data[i].drug_id //id
                  + "','"
                  + (data[i].notes == null ? null : data[i].notes.replace(/[`~!@#$^?'"\\]/gi, '\\'))
                  + "','"
                  + data[i].is_visible
                  + "','"
                  + data[i].display_order
                  + "','"
                  + data[i].created_at
                  + "','"
                  + data[i].updated_at
                  + "','"
                  + data[i].deleted_at
                  + "')";
            if (i != data.length - 1) {
                  query = query + ",";
            }
      }
      query = query + ";";
      let pearlssInserted = await ExecuteQuery(query, []);
      console.log('Charles Inserting Pearls.................................', pearlssInserted);
      console.log('....................................................................');


}

export const pearls = {
      insertPearlsToDatabaseAsync
}

