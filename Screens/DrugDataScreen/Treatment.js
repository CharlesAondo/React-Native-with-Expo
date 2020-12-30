
import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { AuthContext } from '../../components/context'

import * as SQLite from "expo-sqlite"

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


const Treatments = ({ route, navigation, props }) => {


      const drug = React.useContext(AuthContext);
      const [drugs, setDrugs] = useState({})

      const [data, setData] = React.useState({
            treatment_data: '',
            isLoading: true
      })

      const [cateData, setCate] = React.useState({
            categories: '',
            loadingCategory: true
      })

      const [brandsData, setBrands] = React.useState({
            brands: '',
            loadingBrands: true
      })


      useEffect(() => {

            const categories = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select * from vdi_drug_categories vdc INNER JOIN vdi_drug_category_drug vdcd on  vdcd.category_id = vdc.id where vdcd.drug_id = ' + drug.id,
                                    [],
                                    (_, { rows: { _array } }) => {
                                          setCate({
                                                ...cateData,
                                                categories: _array,
                                                loadingCategory: false

                                          })

                                    }
                              );
                        },
                  );
            }

            const getBrands = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select * from vdi_brand_drug vbd  INNER JOIN vdi_brands  vb on vbd.brand_id = vb.id  where drug_id = ' + drug.id,
                                    [],
                                    (_, { rows: { _array } }) => {
                                          setBrands({
                                                ...brandsData,
                                                brands: _array,
                                                loadingBrands: false

                                          })

                                    }
                              );
                        },
                  );
            }

            const getData = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'SELECT vd.id AS dosage_id, vd.label, vd.dose_min, vd.dose_max, vd.unit, vd.route, vd.duration, vd.interval, vd.administrative_notes, vd.pretreatment_notes, vu.name as unit, vt.* FROM vdi_treatments vt INNER JOIN vdi_dosages vd ON vd.treatment_id = vt.id LEFT OUTER JOIN vdi_units vu ON vu.id = vd.unit WHERE drug_id = ' + drug.id,
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

            categories(),
            getBrands(),
            getData()
      }, [])


      return (
            <View style={styles.container}>

                  {data.isLoading || cateData.loadingCategory || brandsData.loadingBrands || data.isLoading.isLoading? <ActivityIndicator /> :

                        <ScrollView>
                              {cateData.categories.map((item) => (
                                    <View key={item.id}>
                                          <TouchableOpacity onPress={() => navigation.navigate('Details',
                                                {

                                                      treatment_data: item,
                                                }
                                          )}>
                                                <Text style={styles.category_item}>{item.name}</Text>
                                          </TouchableOpacity>
                                    </View>

                              ))}

                              <View key="item_brands">
                                    <TouchableOpacity>
                                          <Text style={styles.brands}>
                                                <Text style={styles.brands_heading}>Brands/Synonyms{"\n"}</Text>
                                                <Text style={styles.brand_item_list}>
                                                      {brandsData.brands.map((item) => item.name).join(", ")}
                                                </Text>
                                          </Text>
                                    </TouchableOpacity>
                              </View>

                              <Text style={styles.indications_header}>INDICATIONS</Text>

                              {data.treatment_data.map((item) => (
                                    <View key={item.dosage_id}>
                                          <TouchableOpacity onPress={() => navigation.navigate('Details',
                                                {

                                                      treatment_data: item,
                                                }
                                          )}>
                                                <Text key={item.id + "-" + item.dosage_id} style={styles.indication}>
                                                      <Text style={styles.indication_name}>{item.indication_name}{"\n"}</Text>
                                                      <Text>
                                                            <Text style={styles.indication_dose}>{item.dose_min} {item.dose_max != "null" ? "-" + item.dose_max : ""}</Text>
                                                            <Text>
                                                                  <Text style={styles.dosage_label}>{item.label != "null" ? item.label : ""}</Text>
                                                                  <Text style={styles.dosage_amount}>{item.unit} {item.route} {item.interval} {item.duration}</Text>
                                                            </Text>
                                                      </Text>
                                                </Text>
                                          </TouchableOpacity>
                                    </View>
                              ))}
                        </ScrollView>
                  }
            </View>
      )
}
export default Treatments;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            /*   alignItems: 'center',
              justifyContent: 'center', */
            paddingTop: 5,
            backgroundColor: '#fff',
            //paddingHorizontal: 20
      },
      category_item: {
            fontSize: 12,
            fontStyle: 'italic',
            textAlign: "right",
            color: "grey",
            paddingEnd: 10
      },
      brands: {
            textAlign: "left",
            backgroundColor: '#cbfccb',
            paddingStart: 10,
            paddingEnd: 10,
            marginTop: 5,
            marginBottom: 10
      },
      brands_heading: {
            color: "grey",
            fontWeight: "bold",
            fontSize: 12,
            paddingEnd: 10
      },
      brand_item_list: {
            fontSize: 16,
            paddingEnd: 10
      },
      indications_header: {
            color: "white",
            backgroundColor: "green",
            paddingStart: 10,
            paddingEnd: 10
      },
      indication: {
            backgroundColor: "#cbfccb",
            paddingTop: 10,
            paddingBottom: 10,
            paddingStart: 10,
            paddingEnd: 10,
            borderTopColor: "grey",
            borderTopWidth: 1
      },
      indication_name: {
            fontSize: 12
      },
      indication_dose: {
            fontSize: 30,
            fontWeight: "bold",
      },
      dosage_label: {
            fontSize: 12,
            backgroundColor: "blue",
            color: "white",
            maxWidth: "auto",
      },
      dosage_amount: {
            fontSize: 12,
            maxWidth: "auto",
      }
})
