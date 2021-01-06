
import React, { Component, useEffect, useState, Fragment } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, ListView } from 'react-native'
import { AuthContext } from '../../components/context'

import * as SQLite from "expo-sqlite"
import { color } from 'react-native-reanimated';
import * as WebBrowser from 'expo-web-browser';

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
            isPrecautionReferenceLoading: true,
            links: ''
      })


      const handleLinks = (links) => {
            let url = '';
            if (links.pub_med_id === null) {
                  url = links.url;
            } else {
                  url = 'https://pubmed.ncbi.nlm.nih.gov/' + links.pub_med_id;
            }
            WebBrowser.openBrowserAsync(url);
      }

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
      console.log(drug)
      return (
            <View style={styles.container}>

                  {references.isPrecautionReferenceLoading ? <ActivityIndicator /> :

                        <ScrollView>
                              {drug.contraindications === null || drug.contraindications === "" ?
                                    null
                                    :
                                    <React.Fragment>
                                          <Text style={styles.header}>CONTRAINDICATIONS</Text>
                                          {drug.contraindications.split('\n').map((item, i) =>
                                                <Text style={styles.item} key={i}>{item}</Text>

                                          )}
                                    </React.Fragment>
                              }

                              {drug.adverse_effects === null || drug.adverse_effects === "" ?
                                    null
                                    :
                                    <React.Fragment>
                                          <Text style={styles.header}>ADVERSE EFFECTS</Text>
                                          {drug.adverse_effects.split('\n').map((item, i) =>
                                                <Text style={styles.item} key={i}>{item}</Text>

                                          )}
                                    </React.Fragment>
                              }

                              {drug.teratogenicity === null || drug.teratogenicity === "" ?
                                    null
                                    :
                                    <React.Fragment>
                                          <Text style={styles.header}>TERATOGENICITY/PREGNANCY/LACTATIONS</Text>
                                          {drug.teratogenicity.split('\n').map((item, i) =>
                                                <Text style={styles.item} key={i}>{item}</Text>

                                          )}
                                    </React.Fragment>
                              }
                              {references.referencesLinks === undefined || references.referencesLinks == 0 ?
                                    null
                                    :
                                    < React.Fragment >
                                          <Text style={styles.header}>REFERENCES</Text>
                                          {references.referencesLinks.map((item) => (
                                                <View key={item.id}>
                                                      <TouchableOpacity onPress={() => { handleLinks(item) }} >
                                                            {item.pub_med_id === null ?
                                                                  <Text style={styles.item} >{item.url}</Text>
                                                                  :
                                                                  <Text style={styles.item} >PubMed - {item.pub_med_id}</Text>

                                                            }
                                                      </TouchableOpacity>
                                                </View>

                                          ))}

                                    </React.Fragment>
                              }

                        </ScrollView>
                  }

            </View >
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
            marginTop: 3,
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
            paddingVertical: 5,
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