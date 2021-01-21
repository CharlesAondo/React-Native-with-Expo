
import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
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


const PearlsScreen = ({ route, navigation, props }) => {


      const drug = React.useContext(AuthContext);

      const [pearls, setPearl] = React.useState({
            pearl_data: '',
            isPearlLoading: true,
            links: '',
            urlLink:2,
            pubMedLink:1
      })
      const handleLinks = (links,source) => {
         
           let url = '';
            if (source ===2) {
                  url = links;
            } else {
                  url = 'https://pubmed.ncbi.nlm.nih.gov/' + links;
            }
            WebBrowser.openBrowserAsync(url);
      }

      useEffect(() => {


            const getData = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'SELECT vp.*, GROUP_CONCAT(vpr.pub_med_id) medids,GROUP_CONCAT(vpr.url) urls FROM vdi_pearls vp LEFT OUTER JOIN vdi_pearl_references vpr ON vpr.pearl_id = vp.id WHERE drug_id = ' + drug.id + ' GROUP BY vp.id',
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
      console.log('....................................................................');

      console.log('NEW DATA..',pearls.pearl_data);
      return (
            <View style={styles.container}>

                  {pearls.isPearlLoading ? <ActivityIndicator /> :

                        <ScrollView>
                              {pearls.pearl_data.map((item) => (
                                    <View key={item.id}>
                                          <Text style={styles.group_item}>
                                                <Text style={styles.item}>{item.notes} </Text>
                                                <Text>
                                                      {item.medids === null || item.medids === "null" || item.medids.includes("null")?
                                                            <Text></Text>
                                                            :

                                                            item.medids.split(',').map((link, i) =>
                                                            
                                                                  <TouchableOpacity onPress={() => { handleLinks(link,pearls.pubMedLink )}} >
                                                                        <Text style={styles.reference_items} key={i} >[{i+1}]</Text>
                                                                  </TouchableOpacity>

                                                            )

                                                      }
                                                      {item.urls === null ?
                                                            <Text></Text>
                                                            :
                                                            item.urls.split(',').map((link, i) =>

                                                                  <TouchableOpacity onPress={() => { handleLinks(link,pearls.urlLink) }} >
                                                                        <Text style={styles.reference_items} key={i} >[{i + 1}]</Text>
                                                                  </TouchableOpacity>

                                                            )
                                                      }

                                                </Text>
                                          </Text>


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
      group_item: {
            marginTop: 15,
            padding: 10,
            backgroundColor: 'whitesmoke',
      },
      reference_items: {
            backgroundColor: '#437BA5',
            fontSize: 15,
      },

})