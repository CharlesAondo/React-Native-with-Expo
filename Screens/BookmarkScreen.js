import React, { Component, useEffect, useState } from 'react';
import {
      View, Text, Button, StyleSheet, StatusBar,
      FlatList, ActivityIndicator, Alert, ScrollView, SearchBox
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Header from './Header';


import * as SQLite from "expo-sqlite"
import { set } from 'react-native-reanimated';

const db = SQLite.openDatabase('db.db')


const BookmarkScreen = () => {

      const [drugs, setDrugs] = React.useState({
            drugData: '',
            isLoading: true
      })

      useEffect(() => {

            const getDrugs = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select * from vdi_user_favourite_drugs vdfd INNER JOIN vdi_drugs vd on vdfd.drug_id = vd.id',
                                    [],
                                    (_, { rows: { _array } }) => {

                                          setDrugs({
                                                ...drugs,
                                                drugData: _array,
                                                isLoading: false
                                          })
                                    }
                              );
                        },
                  );
            }

            getDrugs()

      })

      const deletefavDrug = itemID => {
        
            db.transaction(function (tx) {
                  tx.executeSql(
                        'DELETE FROM vdi_user_favourite_drugs WHERE drug_id =' + itemID,

                        (tx, results) => {
                              if (results.rowsAffected > 0) {
                              console.log(results)
                              }else{
                                    alert("failed..")
                              }
                        }

                  );
            });
      }

      //console.log('favourite drug list table.....', drugs.drugData)
      return (
            <View style={styles.container}>
                  {drugs.isLoading ? <ActivityIndicator size="large" color="green" /> :
                        <React.Fragment>
                              <Header />
                              <ScrollView>

                                    {drugs.drugData.map((item) => (
                                          <View key={item.id}>

                                                <Text style={styles.item}>
                                                      <TouchableOpacity>
                                                            <Text >{item.name}  </Text>

                                                      </TouchableOpacity>
                                                      <TouchableOpacity
                                                            onPress={text => deletefavDrug(item.drug_id)}                                                      >

                                                            <FontAwesome
                                                                  name="trash-o"
                                                                  color="red"
                                                                  size={30}
                                                            />
                                                      </TouchableOpacity>

                                                </Text>

                                          </View>

                                    ))}
                              </ScrollView>
                        </React.Fragment>
                  }
            </View>
      );
};

export default BookmarkScreen;


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
            marginTop: 10,
            padding: 10,
            backgroundColor: 'whitesmoke',
            fontSize: 50
      },
      searchBox: {
            alignItems: 'center',
            backgroundColor: '#E6E8E9',
            borderRadius: 10,
            color: '#8E8E93',
            flexDirection: 'row',
            fontSize: 17,
            height: 43,
            margin: 8,
            marginVertical: 10,
            paddingHorizontal: 10
      },
      delete: {
            color: "red",
            fontSize: 15

      },
      nav: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            //  backgroundColor: colors.tertiary,
            //  width: widthScale('100%'),
            //.   height: heightScale('2%'),
            //  paddingVertical: heightScale('4%'),
            borderBottomWidth: 2,
            flexWrap: 'wrap',
      },
})