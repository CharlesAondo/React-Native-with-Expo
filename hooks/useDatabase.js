
import React, { useEffect } from 'react';

import { database } from '../database/database';
import { drugInsert } from '../database/drugInsert';
import { routeInsert } from '../database/routeInsert';
const useDatabase = () => {
      const [isDBLoadingComplete, setDBLoadingComplete] = React.useState(false);

      useEffect(() => {
            async function loadDataAsync() {
                  try {
                        // await database.dropDatabaseTablesAsync();
                        await database.setupCreateTablesAsync();
                        //await database.insertCalculator()
                        await routeInsert.insertRoutesAsync();
                        await drugInsert.insertDrugsToDatabaseAsync();
                        // await database.setupTablesAsync();
                        // await insertData.InsertQuery();

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