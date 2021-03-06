
import React, { useEffect } from 'react';

import { database } from '../database/database';
import { drugInsert } from '../database/drugInsert';
import { routeInsert } from '../database/routeInsert';
import { brands } from '../database/brands';
import { brandDrug } from '../database/brandDrug';
import { insertTreatments } from '../database/insertTreatments';
import { categories } from '../database/categories';
import { drugCategoryDrug } from '../database/drugCategoryDrug';
import { pearls } from '../database/pearls';
import { pearl_references } from '../database/pearl_references';
import { precaution_references } from '../database/precaution_references';
import { insertUnits } from '../database/insertUnits';
import { insertDosages } from '../database/insertDosages';
import {therapeutic_references} from '../database/therapeutic_reference';
import {formats} from '../database/formats';
import {formulations} from '../database/formulations';
import {soundalikes} from '../database/soundalikes';
import {formulationSpecie} from '../database/formulationSpecie';
import {favDrugs} from '../database/favDrugs';
import {treatment_references} from '../database/treatment_references';
import {treatment_species} from '../database/treatment_species';
import {synonyms}  from '../database/synonyms';

const useDatabase = () => {
      const [isDBLoadingComplete, setDBLoadingComplete] = React.useState(false);

      useEffect(() => {
            async function loadDataAsync() {
                  try {

                        // await database.dropDatabaseTablesAsync();
                        
                        await database.setupCreateTablesAsync();

                        await database.insertCalculator()
                        await routeInsert.insertRoutesAsync();

                        await drugInsert.insertDrugsToDatabaseAsync();
                        await categories.insertCategoriesAsync();
                        await drugCategoryDrug.insertDrugCategoriesAsync();
                        await insertTreatments.insertTreatmentsToDatabaseAsync();
                        await brands.insertBrandsToDatabaseAsync();
                        await brandDrug.insertBrandDrugAsync();
                        await pearls.insertPearlsToDatabaseAsync();
                        await pearl_references.insertPearlReferenceToDatabaseAsync();
                        await precaution_references.insertPrecautionReferences();
                        await insertUnits.insertUnitsAsync();
                        await insertDosages.insertDosagesAsync();
                        await  therapeutic_references.insertTherapeuticReferencesAsync();
                        await formats.insertFormatsAsync();
                        await formulations.insertFormulationsAsync();
                        await soundalikes.insertSoundAlikesAsync();
                        await formulationSpecie.insertFormulationSpecieAsync();
                        await favDrugs.insertFavDrugsToDatabaseAsync();
                        await treatment_references.insertTreatmentReferenceToDatabaseAsync();
                        await treatment_species.insertTreatmentSpeciesToDatabaseAsync();
                        await synonyms.insertDrugSynonymsToDatabaseAsync();

                     setDBLoadingComplete(true);
                  } catch (e) {
                        console.warn('Warning From Loading Data', e);
                  }
            }

            loadDataAsync();
      }, []);

      return isDBLoadingComplete;
      console.log('Database loading........', isDBLoadingComplete);

}
export default useDatabase;