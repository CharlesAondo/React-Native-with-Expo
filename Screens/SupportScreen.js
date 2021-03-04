import React, { Component, useEffect, useState } from 'react';
import {
      View, Text, Button, StyleSheet, StatusBar,
      FlatList, ActivityIndicator, Alert, ScrollView, SearchBox, TextInput, AsyncStorage
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { UrlServices } from '../components/UrlServices';

import emailjs from 'emailjs-com';
import axios from 'axios';

import Header from './Header';
import * as Device from 'expo-device';
let base64 = require('base-64');

import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const SupportScreen = (navigation) => {

      const [data, setData] = React.useState({
            comment: '',
            disabledSubmit: true,
            supportInfo: ''

      })
      const textInputChange = (val) => {
            setData({
                  ...data,
                  comment: val
            })
      }

      useEffect(() => {

            const getUser = async () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select * from vdi_user',
                                    [],
                                    (_, { rows: { _array } }) => {
                                          _array.map((item) => {
                                                setData({
                                                      ...data,
                                                      supportInfo: item,
                                                })

                                          })

                                    }

                              );
                        },
                  );
            }
            getUser()

      }, [])


      const handleSubmit = async (value) => {
            const token = await AsyncStorage.getItem('userToken');

            if (data.comment.length == 0) {
                  Alert.alert('Request Body  Empty', 'Request field cannot be empty! Please type fill the form before submitting your request', [
                        { text: 'Okay' }
                  ]);
            } else {
                  console.log(typeof(data.supportInfo.support_counterpart))
                  let h = new Headers();
                  h.append('Accept', 'application/json');
                  h.append('Content-Type', 'application/json');

                  let credentials = base64.encode('23afgddd:datahasgon')
                  let auth = ' Basic ' + credentials;

                  h.append('Authorization', auth)
                  let myObj = {
                        'subject': 'Vet Drug Index Support',
                        'description': 'Device name : ' + Device.deviceName + '\nComments: ' + data.comment,
                        'priority':'low',
                        'support_counterpart':(data.supportInfo.support_counterpart).toString()
                  };

                  let req = new Request(UrlServices.supportURl(), {
                        method: "POST",
                        headers: h,
                        credentials: 'include',


                        body: JSON.stringify(myObj)
                  });

                  fetch(req)
                        .then((response) => {
                              if (response.status === 200) { // Or what ever you want to check
                                    return Promise.resolve(response.json()); // This will end up in SUCCESS part
                              }
                              return Promise.resolve(response.json()).then((responseInJson) => { // This will end up in ERROR part
                                    return Promise.reject(responseInJson.message); //  responseInJson.message = "Some nasty error message!"
                              });
                        })
                        .then((result) => { // SUCCESS part
                              console.log("Success: ", result); // Response from api in json
                        }, (error) => { // ERROR part
                              // Because we rejected responseInJson.message, error will contain message from api. In this case "Some nasty error message!"
                              console.log("Error: ", error);
                        })
                        .catch(catchError => {
                              console.log("Catch: ", catchError);
                        })
            }


      }
      return (
            <View style={styles.container}>
                  <React.Fragment>
                        <Header />
                        <View>
                              <View style={styles.textAreaContainer} >
                                    <TextInput
                                          style={styles.textArea}
                                          underlineColorAndroid="transparent"
                                          placeholder="Type Your Request"
                                          placeholderTextColor="grey"
                                          numberOfLines={10}
                                          autoFocus={true}
                                          multiline={true}
                                          onChangeText={(val) => textInputChange(val)}
                                    />
                              </View>
                              <TouchableOpacity
                                    style={styles.signIn}
                                    onPress={() => { handleSubmit() }}>
                                    <LinearGradient
                                          colors={['green', '#01ab9d']}
                                          style={styles.signIn}
                                    >
                                          <Text style={[styles.textSign, {
                                                color: '#fff'
                                          }]}>Submit Request</Text>


                                    </LinearGradient>
                              </TouchableOpacity>
                        </View>
                  </React.Fragment>

            </View>
      );
};

export default SupportScreen;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            paddingTop: 40,
            backgroundColor: 'whitesmoke',
            paddingHorizontal: 20
      },
      textAreaContainer: {
            borderColor: 'grey',
            borderWidth: 1,
            padding: 5
      },
      textArea: {
            height: 150,
            justifyContent: "flex-start"
      },
      signIn: {
            width: '100%',
            height: 50,
            paddingTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,

      },
      textSign: {
            fontSize: 18,
            fontWeight: 'bold'
      },
});