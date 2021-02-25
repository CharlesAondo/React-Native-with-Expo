import React, { Component, useEffect, useState } from 'react';
import {
      View, Text, Button, StyleSheet, StatusBar,
      FlatList, ActivityIndicator, Alert, ScrollView, SearchBox, AsyncStorage
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Modal } from 'react-native-paper';

//import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Header from './Header';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getCurrentDate } from '../hooks/getCurrentDate';
import {UrlServices} from '../components/UrlServices';
//const HomeStack = createStackNavigator();
const DetailsStact = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
let base64 = require('base-64');

import * as SQLite from "expo-sqlite"
import NetInfo from '@react-native-community/netinfo';
import * as Device from 'expo-device';

const db = SQLite.openDatabase('db.db')

const HomeScreenstack = ({ navigation }) => {

      const [isLoading, setLoading] = useState(true);
      const [isConnected, setIsConnected] = useState(false);
      const [modal, setModal] = useState(false);

      const [drugs, setDrugs] = useState({})

      useEffect(() => {

            NetInfo.fetch().then((state) => {
                  setIsConnected(state.isConnected);
            });

            const reAuthorizeUser = async () => {
                  const token = await AsyncStorage.getItem('userToken');
                  const dateLoggedIn = await AsyncStorage.getItem('dateLoggedIn');
                  const date = getCurrentDate.currentDate();

                  if (!isConnected) {
                        //Check if it has been more than 30 days since the user was re-authenticated
                        let dateUserLoggedIn = new Date(dateLoggedIn).getTime();
                        console.log('date User Logged In ', dateUserLoggedIn);

                        let currentDate = new Date(date).getTime();
                        console.log('current date..', currentDate);

                        let thirtyDaysInMilliseconds = 2592000000;
                        console.log(currentDate - dateUserLoggedIn);


                        if ((currentDate - dateUserLoggedIn) < thirtyDaysInMilliseconds) {
                              //Log user out.
                              Alert.alert('Authentication Failed!', 'We attempted to authenticate your credentials and it has failed.', [
                                    { text: 'Okay' }
                              ]);
                              await AsyncStorage.removeItem('userToken');
                              await AsyncStorage.removeItem('dateLoggedIn');

                        }
                  } else {

                        let h = new Headers();
                        h.append('Accept', 'application/json');
                        h.append('Content-Type', 'application/json');

                        let credentials = base64.encode('23afgddd:datahasgon')
                        let auth = ' Basic ' + credentials;

                        h.append('Authorization', auth)

                        let myObj = {
                              'token':token,
                              "device": Device.deviceName
                        };

                        let req = new Request(UrlServices.authUrl(), {
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
            const getDrugs = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select * from vdi_drugs',
                                    [],
                                    (_, { rows: { _array } }) => {

                                          setDrugs(_array)
                                          setLoading(false)
                                    }
                              );
                        },
                  );
            }
            getDrugs()
            reAuthorizeUser();

      }, [])

      return (
            <View style={styles.container}>
                  {isLoading ? <ActivityIndicator size="large" color="green" /> :
                        <React.Fragment>
                              <Header />
                              <ScrollView>

                                    {drugs.map((item) => (
                                          <View key={item.id}>
                                                <TouchableOpacity onPress={() => navigation.navigate('Details',
                                                      {

                                                            drug: item,
                                                      }
                                                )}>
                                                      <Text style={styles.item}>{item.name}</Text>
                                                </TouchableOpacity>

                                          </View>

                                    ))}
                              </ScrollView>
                        </React.Fragment>
                  }
                  <Modal
                        animationType="fade"
                        transparent={false}
                        visible={modal}


                  >
                        <View style={styles.modalView}>

                              <Text>Your Authentication has Failed!</Text>

                        </View>

                  </Modal>
            </View>
      );
};


const HomeScreen = ({ navigation }) => {

      return (
            <Stack.Navigator headerMode="none">
                  <Stack.Screen name="Home" component={HomeScreenstack} />
                  <Stack.Screen name="Details" component={DetailsScreen}

                  />
            </Stack.Navigator>
      );
}

export default HomeScreen;


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
            marginTop: 15,
            padding: 10,
            backgroundColor: 'whitesmoke',
            fontSize: 25
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
      modalView: {
            margin: 20,
            backgroundColor: 'whitesmoke',
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