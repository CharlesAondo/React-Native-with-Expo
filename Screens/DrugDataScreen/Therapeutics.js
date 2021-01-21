
import React, { Component, useEffect, useState } from 'react';
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


const Thereapeutics = ({ route, navigation, props }) => {

      const drug = React.useContext(AuthContext);
      const specieName = '';

      const [references, setReferences] = React.useState({
            referencesLinks: '',
            isPrecautionReferenceLoading: true,
            links: ''
      })

      const [formulations, setFormulations] = React.useState({
            formulationData: '',
            loadingFormats: true
      })

      const [formulationSpecie, setFormulationSpecie] = React.useState({
            specie: '',
            isSpecieLoading: true
      })

      const [soundAlikes, setSoundAlikes] = React.useState({
            soundalikesData: '',
            isSoundAlikesLoading: true
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
                                    'select * from vdi_therapeutic_references where drug_id = ' + drug.id,
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

            const getFormulatios = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select vdf.concentrations,vdf.notes,vdaf.name,vu.name as unit from vdi_drug_forms vdf inner join vdi_available_drug_forms vdaf on vdf.available_drug_form_id = vdaf.id inner join vdi_units vu on vu.id= vdf.unit_id where vdf.drug_id = ' + drug.id,
                                    [],
                                    (_, { rows: { _array } }) => {
                                          setFormulations({
                                                ...formulations,
                                                formulationData: _array,
                                                loadingFormats: false
                                          })

                                    }
                              );
                        },
                  );

            }

            const getFormulationSpecie = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select specie from vdi_formulation_specie where id = ' + drug.formulation_species_id,
                                    [],
                                    (_, { rows: { _array } }) => {
                                         _array.map((item)=>{
                                          setFormulationSpecie({
                                                ...formulationSpecie,
                                                specie: item.specie,
                                                isSpecieLoading: false
                                          })
                                         })

                                    }

                              );
                        },
                  );

            }

            const getSoundalikes = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select * from vdi_soundalikes where drug_id = ' + drug.id,
                                    [],
                                    (_, { rows: { _array } }) => {
                                          setSoundAlikes({
                                                ...soundAlikes,
                                                soundalikesData: _array,
                                                isSoundAlikesLoading: false
                                          })

                                    }
                              );
                        },
                  );

            }


            getData()
            getFormulatios()
            getFormulationSpecie()
            getSoundalikes()

      }, [])

      console.log('specie', formulationSpecie.specie)
      return (
            <View style={styles.container}>

                  {references.isPrecautionReferenceLoading || formulations.loadingFormats || soundAlikes.isSoundAlikesLoading || formulationSpecie.isSpecieLoading ? <ActivityIndicator size="large" color="green" /> :

                        <ScrollView>

                              {soundAlikes.soundalikesData == "" || soundAlikes.soundalikesData === null || soundAlikes.soundalikesData === "null" ?
                                    null
                                    :
                                    <React.Fragment>
                                          <Text style={styles.header}>Sound Alike</Text>
                                          {soundAlikes.soundalikesData.map((item,i) => (
                                                <View key={item.id}>
                                                      <Text style={styles.item} key={i} >
                                                            <Text style={styles.format}>{item.word}</Text>
                                                            <Text> {item.notes != "" ? "-" + " " + item.notes : ""} </Text>
                                                      </Text>
                                                </View>

                                          ))}
                                    </React.Fragment>

                              }

                              {drug.interactions === null || drug.interactions == "" || drug.interactions === undefined  || drug.interactions === "null" ?
                                    null
                                    :
                                    <React.Fragment>
                                          <Text style={styles.header}>Interactions</Text>
                                          {drug.interactions.split('\n').map((item, i) =>
                                                <Text style={styles.item} key={i}>{item}</Text>

                                          )}
                                    </React.Fragment>
                              }

                              {drug.reversal_agent === null || drug.reversal_agent == "" || drug.reversal_agent === "null" ?
                                    null
                                    :
                                    <React.Fragment>
                                          <Text style={styles.header}>ANTIDOTE/REVERSAL AGENT</Text>
                                          {drug.reversal_agent.split('\n').map((item, i) =>
                                                <Text style={styles.item} key={i}>{item}</Text>

                                          )}
                                    </React.Fragment>
                              }


                              {formulations.formulationData == "" || formulations.formulationData === null  || formulations.formulationData === "null" ?
                                    null

                                    :
                                    <React.Fragment>
                                          <Text style={styles.header}>AVILABLE FORMULATIONS({formulationSpecie.specie.toUpperCase()})</Text>
                                          {formulations.formulationData.map((item,i) => (
                                                <View key={item.id}>
                                                      <Text style={styles.item} key={i}>
                                                            <Text style={styles.format}>{item.name}{"\n"}</Text>
                                                            <Text >{item.concentrations} {item.unit}{item.notes != "" ? "." + " " + item.notes : ""} </Text>

                                                      </Text>
                                                </View>

                                          ))}
                                    </React.Fragment>

                              }

                              {references.referencesLinks === undefined || references.referencesLinks == 0 ?
                                    null
                                    :
                                    <React.Fragment>
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

            </View>
      )

}
export default Thereapeutics;

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
      },
      format: {
            fontWeight: "bold"
      }

})