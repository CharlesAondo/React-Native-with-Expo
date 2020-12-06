
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
      useEffect(() => {
            /*
                       const   getData = async()=>{
                              let selectQuery = await ExecuteQuery('SELECT * FROM vdi_treatments where drug_id ='+drug.id,[]);
                              var rows = selectQuery.rows;
            
                             setData({
                                   isLoading:false,
                                   treatment_data
                             })
                              console.log(item)
                            }
                            */

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
            const categories = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select * from vdi_drug_category_drug where drug_id = ' + drug.id,
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


            // getData()
            getData()
            categories()

      }, [])


      console.log('categorioes', cateData.categories)
      console.log('treaments', data.treatment_data)


      return (
            <View style={styles.container}>
                  {data.isLoading  || cateData.loadingCategory ? <ActivityIndicator /> :

                        <ScrollView>
                              {cateData.categories.map((item) => (
                                    <View key={item.id}>
                                          <TouchableOpacity onPress={() => navigation.navigate('Details',
                                                {

                                                      treatment_data: item,
                                                }
                                          )}>
                                                <Text style={styles.item}>{item.id}</Text>
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
            paddingTop: 40,
            backgroundColor: '#fff',
            paddingHorizontal: 20
      },
      item: {

            fontSize: 25,
            fontStyle: 'italic'
      },

})