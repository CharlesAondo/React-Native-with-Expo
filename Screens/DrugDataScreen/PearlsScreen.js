
import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { AuthContext } from '../../components/context'

import * as SQLite from "expo-sqlite"
import { color } from 'react-native-reanimated';

const db = SQLite.openDatabase('db.db')
let base64 = require('base-64');

ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve(results);
            },
                  (error) => {
                        reject(error);
                  });
      });
});


const PearlsScreen = ({ route, navigation, props }) => {


      const drug = React.useContext(AuthContext);

      const [pearls, setPearl] = React.useState({
            pearl_data: '',
            isPearlLoading: true
      })


      useEffect(() => {

      
            const getData = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select * from vdi_pearls where drug_id = ' + drug.id, 
                                    [],
                                    (_, { rows: { _array } }) => {
                                          setPearl({
                                                ...pearls,
                                                pearl_data: _array,
                                                isPearlLoading: false
                                          })

                                    }
                              );
                        },
                  );

            }
       
            getData()


      }, [])

      return (
            <View style={styles.container}>

                  {pearls.isPearlLoading ? <ActivityIndicator /> :

                        <ScrollView>
                              {pearls.pearl_data.map((item) => (
                                    <View key={item.id}>
                                          <TouchableOpacity onPress={() => navigation.navigate('Details',
                                                {

                                                      treatment_data: item,
                                                }
                                          )}>
                                                <Text style={styles.item}>{item.notes}</Text>
                                          </TouchableOpacity>
                                    </View>

                              ))}

                        </ScrollView>
                  }

            </View>
      )

}
export default PearlsScreen;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            /*   alignItems: 'center',
              justifyContent: 'center', */
            paddingTop: 5,
            backgroundColor: '#fff',
            paddingHorizontal: 20
      },
      item: {
            marginTop: 15,
            padding: 10,
            backgroundColor: 'whitesmoke',
            fontSize: 20
      },

})