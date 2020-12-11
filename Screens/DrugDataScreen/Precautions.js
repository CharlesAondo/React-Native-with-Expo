
import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, ListView } from 'react-native'
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


const Precautions = ({ route, navigation, props }) => {

      const drug = React.useContext(AuthContext);

      const [references, setReferences] = React.useState({
            referencesLinks: '',
            isPrecautionReferenceLoading: true
      })


      useEffect(() => {


            const getData = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select * from vdi_precaution_references where drug_id = ' + drug.id,
                                    [],
                                    (_, { rows: { _array } }) => {
                                          setReferences({
                                                ...references,
                                                referencesLinks: _array,
                                                isPrecautionReferenceLoading: false
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

                  {references.isPrecautionReferenceLoading ? <ActivityIndicator /> :

                        <ScrollView>
                              <Text style={styles.contrainIndication_title}>CONTRAINDICATIONS</Text>

                              <Text style={styles.item}>{drug.contraindications}</Text>

                              <Text ></Text>

                              <Text style={styles.contrainIndication_title}>ADVERSE EFFECTS</Text>


                              {drug.adverse_effects.split('\n').map((item, i) =>

                                    <Text style={styles.title} key={i}>{item}</Text>

                              )}
                              <Text ></Text>

                              <Text style={styles.header}>TERATOGENICITY/PREGNANCY/LACTATIONS</Text>
                              {drug.teratogenicity.split('\n').map((item, i) =>

                                    <Text style={styles.title} key={i}>{item}</Text>

                              )}

                              <Text ></Text>
                              <Text style={styles.contrainIndication_title}>REFERENCES</Text>
                              {references.referencesLinks.map((item) => (
                                    <View key={item.id}>
                                          <TouchableOpacity onPress={() => navigation.navigate('Details',
                                                {

                                                      treatment_data: item,
                                                }
                                          )}>
                                                <Text style={styles.item}>{item.pub_med_id}</Text>
                                          </TouchableOpacity>
                                    </View>

                              ))}

                        </ScrollView>
                  }

            </View>
      )

}
export default Precautions;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            paddingTop: 10,
            backgroundColor: '#fff',
            paddingHorizontal: 5
      },
      item: {
            marginTop: 0,
            padding: 10,
            backgroundColor: 'whitesmoke',
            fontSize: 20,


      },
      contrainIndication_title: {
            fontSize: 10,
            fontWeight: 'bold',
            fontSize: 15,
            textAlign: 'center',
            backgroundColor: '#108610',
            height: 25,
      },
      space: {
            fontSize: 10,
            backgroundColor: 'white',
            height: 35,
      },
      title: {
            marginTop: 16,
            paddingVertical: 8,
            borderWidth: 4,
            borderColor: "#20232a",
            borderRadius: 6,
            backgroundColor: "#61dafb",
            color: "#20232a",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold"
      },
      header: {
            marginTop: 10,
            paddingVertical: 8,
            borderWidth: 3,
            borderColor: '#108610',
            borderRadius: 6,
            backgroundColor: '#108610',
            color: "#20232a",
            textAlign: "center",
            fontSize: 15,
            fontWeight: "bold"
      }

})