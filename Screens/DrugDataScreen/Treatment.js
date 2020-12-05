
import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { AuthContext } from '../../components/context'

import * as SQLite from "expo-sqlite"
import { drugCategoryDrug } from '../../database/drugCategoryDrug';

const db = SQLite.openDatabase('db.db')
let base64 = require('base-64');



const Treatments = ({ route, navigation, props }) => {
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

                                          //   console.log("vdi_drugs", _array)
                                          setDrugs(_array)
                                          setLoading(false)
                                            console.log("vdi_drugs", treatmentData)

                                    }
                              );
                        },
                  );

            }
            getData()

      }, [])



      return (
            <View style={styles.container}>
                  <ScrollView>
                        <TouchableOpacity onPress={() => navigation.navigate('Details',

                        )}>
                              <Text style={styles.item}>hello</Text>
                        </TouchableOpacity>

                  </ScrollView>
            </View>
      )

}
export default Treatments;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            /*   alignItems: 'center',
              justifyContent: 'center', */
            paddingTop: 40,
            backgroundColor: '#fff',
            paddingHorizontal: 20
      },
      item: {

            fontSize: 25,
            fontStyle: 'italic'
      },

})