import React, { useEffect, useState } from 'react';
import * as SQLite from "expo-sqlite"
import NetInfo from '@react-native-community/netinfo';
import { AsyncStorage, Alert } from 'react-native';
const db = SQLite.openDatabase('db.db');
import { getCurrentDate } from '../../hooks/getCurrentDate';
import { Modal, Button } from 'react-native-paper';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'

function getInfo() {
      NetInfo.fetch().then((state) => {
            const status = state.isConnected
      });
      return state.isConnected;

}




const reAuthuroized = async () => {
      

      const token = await AsyncStorage.getItem('userToken');
      const dateLoggedIn = await AsyncStorage.getItem('dateLoggedIn');
      const date = getCurrentDate.currentDate();

      const unsubscribed = NetInfo.addEventListener((state) =>{
            console.log('Connection type', state.type);
            console.log('Is connected?', state.isConnected); 
      })


      if (isNaN(token)) {
            //   alert(date)

            let dateUserLoggedIn = new Date(dateLoggedIn).getTime();
            console.log('date User Logged In ', dateUserLoggedIn);

            let currentDate = new Date(date).getTime();
            console.log('current date..', currentDate);

            let thirtyDaysInMilliseconds = 2592000000;
            console.log(currentDate - dateUserLoggedIn);


            if ((currentDate - dateUserLoggedIn) < thirtyDaysInMilliseconds) {
                  //Log user out.
                  //alert("Authentication Failed!")
                  //  await AsyncStorage.removeItem('userToken');


            } else {
                  alert('true')
            }

      } else {


      }

}

export const ReAuthorization = {
      reAuthuroized

}
const styles = StyleSheet.create({

      modalView: {
            margin: 20,
            backgroundColor: 'green',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
      }

})

/* const reAuthorization = () => {
      const getData = async () => {
            try {
                  const value = await AsyncStorage.getItem('userToken')
                  setTokenValues({
                        ...tokenData,
                        token: value
                  })
            } catch (e) {
                  // error reading value
            }
      }
      getData();

      NetInfo.fetch().then(state => {
            setTokenValues({
                  ...tokenData,
                  connectionState: state.isConnected,
                  loading: false
            })
            /*
                                    if (state.isConnected) {
                                          const token =    await.AsyncStorage.getItem('userToken');
                                          console.log(token)
                                    } else {
                                          db.transaction(
                                                tx => {
                                                      tx.executeSql(
                                                            'select * from vdi_user',
                                                            [],
                                                            (_, { rows: { _array } }) => {
                                                                  setTokenValues({
                                                                        ...tokenData,
                                                                        token:_array
                                                                  })

                                                            }
                                                      );
                                                },
                                          );

                                    }
      });

      if (tokenData.connectionState && tokenData.isLoading) {


      } else {
            db.transaction(
                  tx => {
                        tx.executeSql(
                              'select * from vdi_user',
                              [],
                              (_, { rows: { _array } }) => {
                                    setTokenValues({
                                          ...tokenData,
                                          token: _array
                                    })

                              }
                        );
                  },
            );
      }
} */