
import React, { useEffect } from 'react';

import { database } from '../database/database';
import { drugInsert } from '../database/drugInsert';
import { routeInsert } from '../database/routeInsert';
import { brands } from '../database/brands';
import { brandDrug } from '../database/brandDrug';
import { insertTreatments } from '../database/insertTreatments';
import {categories} from '../database/categories';
import {drugCategoryDrug} from '../database/drugCategoryDrug';

const useDatabase = () => {
      const [isDBLoadingComplete, setDBLoadingComplete] = React.useState(false);

      useEffect(() => {
            async function loadDataAsync() {
                  try {
                          
                        // await database.dropDatabaseTablesAsync();
                        await database.setupCreateTablesAsync();
                      /*
                        await database.insertCalculator()
                        await routeInsert.insertRoutesAsync();
                        await drugInsert.insertDrugsToDatabaseAsync();
                        await brands.insertBrandsToDatabaseAsync();
                        await brandDrug.insertBrandDrugAsync();
                    

                
                      
   */
                        await drugInsert.insertDrugsToDatabaseAsync();
                        await categories.insertCategoriesAsync();
                        await drugCategoryDrug.insertDrugCategoriesAsync();
                        await insertTreatments.insertTreatmentsToDatabaseAsync();
                         

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