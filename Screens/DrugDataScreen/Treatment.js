
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
                                          console.log(_array)
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
                                          console.log(_array)
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
                                    'select * from vdi_treatments where drug_id = ' + drug.id,
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


      console.log('brands', setBrands.brands)



      return (
            <View style={styles.container}>

                  {data.isLoading || cateData.loadingCategory || brandsData.loadingBrands? <ActivityIndicator /> :

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

                              {brandsData.brands.map((item) => (
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

                              {data.treatment_data.map((item) => (
                                    <View key={item.id}>
                                          <TouchableOpacity onPress={() => navigation.navigate('Details',
                                                {

                                                      treatment_data: item,
                                                }
                                          )}>
                                                <Text style={styles.item}>{item.indication_name}</Text>
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
            paddingHorizontal: 20
      },
      category_item: {
            fontSize: 20,
            fontStyle: 'italic',
            textAlign: "right",
            backgroundColor: '#cbfccb',
            borderRadius: 10,


      },
      item: {

            fontSize: 25,
            fontStyle: 'italic',


      },
      indication_title: {

            fontSize: 25,
            fontWeight: 'bold',
            fontSize: 20,
            fontStyle: 'italic',
            textAlign: 'left',
            backgroundColor: '#108610',
            borderRadius: 10,



      },

})