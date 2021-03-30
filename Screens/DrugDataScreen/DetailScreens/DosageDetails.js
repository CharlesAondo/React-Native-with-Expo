import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, useAssets, Image } from 'react-native'
import { AuthContext } from '../../../components/context'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { Asset } from 'expo-asset';
import * as SQLite from "expo-sqlite"
import { FlatList } from 'react-native-gesture-handler';
const db = SQLite.openDatabase('db.db')
import { images } from '../../../hooks/images';
import { species } from '../../../hooks/species';

import { handleLinks } from '../../../hooks/handleLinks';

const DosageDetails = ({ route, navigation, props }) => {

      const { dosage_data } = route.params;



      const [data, setData] = React.useState({

            treatment_data: '',
            isLoading: true
      })

      const [specie, setSpecie] = React.useState({
            specie_name:''
      })


      useEffect(() => {
            species.map((item) =>{
                  if(item.id === dosage_data.specieID){
                        setSpecie({
                              ...specie,
                              specie_name: item.name
                        })
                  }
            })
            const getTreatmentReferences = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'SELECT * FROM vdi_treatment_references WHERE treatment_id = ' + dosage_data.id,
                                    [],
                                    (_, { rows: { _array } }) => {
                                          setData({
                                                ...data,
                                                treatment_data: _array,
                                                isLoading: false
                                          })
                                    }
                              );
                        },
                  );
            }
            getTreatmentReferences()
      }, [])


      console.log('dosages from json.....', data.treatment_data);


      return (
            <View style={styles.container}>
                  <ScrollView>
                        <View style={styles.container}>
                              <Text style={styles.header}>Indication Name</Text>
                              <Text style={styles.item}>{dosage_data.indication_name}</Text>

                              <View>
                                    <Text style={styles.header}>{dosage_data.label != "null" ? dosage_data.label : 'Adminstration'}</Text>


                                    {dosage_data.pretreatment_notes === null || dosage_data.pretreatment_notes === "" || dosage_data.pretreatment_notes === "null" ?
                                          null
                                          :
                                          <View>
                                                <Text style={styles.mini_header}>Pre-treatment Notes</Text>
                                                <Text style={styles.dosage_item}>{dosage_data.pretreatment_notes != "null" ? dosage_data.pretreatment_notes : null}</Text>
                                          </View>
                                    }

                                    <View>
                                          <Text style={styles.mini_header}>Dosages ({specie.specie_name})</Text>
                                          <View style={styles.dosage_calculator_display}>

                                                <Text style={styles.dosage_item}>
                                                      {''} {dosage_data.dose_min}  {dosage_data.dose_max != "null" ? "-"  + dosage_data.dose_max : ""} {''}
                                                      
                                                      {dosage_data.unit != "null" ? dosage_data.unit : null} {dosage_data.route != "null" ? dosage_data.route : null} {dosage_data.interval != "null" ? dosage_data.interval : null}
                                                </Text>

                                                <TouchableOpacity >
                                                      <AntDesign name="calculator" size={30} color="blue" />
                                                </TouchableOpacity>

                                          </View>


                                          {dosage_data.duration === null || dosage_data.duration === "" || dosage_data.duration === "null" ?
                                                null
                                                :
                                                <View>
                                                      <Text style={styles.mini_header}>Duration</Text>
                                                      <Text style={styles.dosage_item}>{dosage_data.duration != "null" ? dosage_data.duration : null}</Text>
                                                </View>
                                          }

                                          {dosage_data.administrative_notes === null || dosage_data.administrative_notes === "" || dosage_data.administrative_notes === "null" ?
                                                null
                                                :
                                                <View>
                                                      <Text style={styles.mini_header}>Notes</Text>
                                                      <Text style={styles.dosage_item}>{dosage_data.administrative_notes != "null" ? dosage_data.administrative_notes : null}</Text>
                                                </View>
                                          }
                                    </View>


                                    {dosage_data.expected_effects === null || dosage_data.expected_effects === "" || dosage_data.expected_effects === "null" ?
                                          null
                                          :
                                          <View>
                                                <Text style={styles.header}>Expected Effects</Text>
                                                {dosage_data.expected_effects.split('\n').map((item, i) =>
                                                      <Text style={styles.dosage_item} key={i}>{item}</Text>

                                                )}
                                          </View>
                                    }

                                    {dosage_data.common_combinations === null || dosage_data.common_combinations === "" || dosage_data.common_combinations === "null" ?
                                          null
                                          :
                                          <View>
                                                <Text style={styles.header}>Commonly Combined With</Text>
                                                {dosage_data.common_combinations.split(';').map((item, i) =>
                                                      <Text style={styles.dosage_item} key={i}>{item}</Text>

                                                )}
                                          </View>
                                    }


                                    {data.treatment_data === undefined || data.treatment_data == 0 || data.isLoading ?
                                          null
                                          :
                                          <React.Fragment>
                                                <Text style={styles.header}>REFERENCES</Text>
                                                {data.treatment_data.map((item) => (
                                                      <View key={item.id}>
                                                            <TouchableOpacity onPress={() => { handleLinks(item) }} >
                                                                  <View style={styles.ebvm_reference_seperator}>
                                                                        {images.map((imageItem) => (
                                                                              <View key={imageItem.id}>
                                                                                    {item.ebm === imageItem.id ?
                                                                                          <Image source={imageItem.src} />
                                                                                          :
                                                                                          null
                                                                                    }
                                                                              </View>
                                                                        ))}
                                                                        {item.pub_med_id === null ?
                                                                              <Text style={styles.item} numberOfLines={1}>{item.url}</Text>
                                                                              :
                                                                              <Text style={styles.item} >PubMed - {item.pub_med_id}</Text>
                                                                        }
                                                                  </View>
                                                            </TouchableOpacity>
                                                            <View style={styles.ebm_description}>
                                                                  <View style={styles.color}>
                                                                        <Text > EBVM Ranking Description{'\n'}</Text>
                                                                        <Text >1. Meager: Case study of 1 or 2 patientts, in vitro study, etc.{'\n'}</Text>
                                                                        <Text >2. Supportive: Retrospective Study wihtout Control subjects,pharmacokinetic study with non clinical efficacy evaluation, etc.{'\n'}</Text>
                                                                        <Text >3. Substantoive: Prospective study without blinding,randomization or controls. {'\n'}</Text>
                                                                        <Text >4. Robust: Prospective study without randomization,blinding, and or/controls . {'\n'}</Text>
                                                                        <Text >5. Convicing: One or more large Prospective clinical trial(s) that is/are controlled, randomized, and blinded. {'\n'}</Text>
                                                                  </View>


                                                            </View>
                                                      </View>

                                                ))}
                                          </React.Fragment>

                                    }



                              </View>
                        </View>

                  </ScrollView>
            </View>
      )
}

export default DosageDetails;

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
      dosage_item: {
            padding: 5,
            fontSize: 15,
            marginBottom: 5,
            marginTop: 5
            // fontWeight: 'bold'

      },
      calculator_item: {
            padding: 10,
            backgroundColor: 'green',


      },
      dosage_calculator_display: {
            fontSize: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
      },
      format: {
            fontWeight: "bold",
            padding: 5,
            fontSize: 12,
      },
      mini_header: {
            marginTop: 1,
            paddingVertical: 5,
            borderWidth: 1,
            borderColor: 'whitesmoke',
            borderRadius: 6,
            backgroundColor: 'whitesmoke',
            color: "black",
            textAlign: "center",
            fontSize: 15,
            fontWeight: "bold"
      },
      ebvm_reference_seperator: {
            fontSize: 5,
            flexDirection: "row",
            //justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: 'whitesmoke'
      },
      ebm_description: {
            marginTop: 1,
            paddingVertical: 5,
            borderWidth: 1,
            borderColor: 'whitesmoke',
            color: "black",
            textAlign: "center",
            fontSize: 15,
            fontWeight: "bold"
      }, color: {
            backgroundColor: '#cbfccb',
            padding:4

      }
})
