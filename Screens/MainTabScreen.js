import React, { Component, useEffect, useState } from 'react';
import {
      View, Text, Button, StyleSheet, StatusBar,
      FlatList, ActivityIndicator, Alert, ScrollView, SearchBox
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


//import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Header from './Header';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

//const HomeStack = createStackNavigator();
const DetailsStact = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

let base64 = require('base-64');
let headers = new Headers();

import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const HomeScreenstack = ({ navigation }) => {

      const [isLoading, setLoading] = useState(true);
      const [drugs, setDrugs] = useState({})

      useEffect(() => {
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

      }, [])

      return (
            <View style={styles.container}>
                  {isLoading ? <ActivityIndicator  size="large" color="green" /> :
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
})