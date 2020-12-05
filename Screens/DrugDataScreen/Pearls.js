import React, { Component, useEffect, useState } from 'react';
import {
      View, Text, Button, StyleSheet, StatusBar,
      FlatList, ActivityIndicator, Alert, ScrollView, SearchBox

} from 'react-native';
import * as SQLite from "expo-sqlite"
import { AuthContext } from '../../components/context'


const db = SQLite.openDatabase('db.db')

const Pearls = () => {
      const data = React.useContext(AuthContext);
      const [isLoading, setLoading] = useState(true);
      const [treatmentData, setDrugs] = useState({})

  
      useEffect(() => {
            
            const getData = () => {

                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select * from vdi_treatments where drug_id = ' + data.id, 
                                    [],
                                    (_, { rows: { _array } }) => {

                                          setDrugs(_array)
                                          setLoading(false)
                                            console.log("vdi_objects", treatmentData)

                                    }
                              );
                        },
                  );

            }
            getData()

      }, [])

      return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text>Pearl  !</Text>
            </View>
      )
}
export default Pearls;