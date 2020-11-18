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
import Treatements from '../Screens/DrugDataScreen/Treatment';

//const HomeStack = createStackNavigator();
const DetailsStact = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

let base64 = require('base-64');


let url = 'https://vetdrugindex.com/api/v1/drug';
let username = 'aondocharles@gmail.com';
let password = 'timeless';


let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));

const HomeScreenstack = ({ navigation }) => {
   
      const [isLoading, setLoading] = useState(true);
      const [drugs, setDrugs] = useState({})
      const [lastDrug, setLastBook] = useState("")


      let uri = "https://tvns-caondo.tvms-dev.timelessveterinary.com/client/vdi/v1/drugs";
      let h = new Headers();
      h.append('Accept', 'application/json');
      h.append('Content-Type', 'application/json');

      let credentials = base64.encode('23afgddd:datahasgon')
      let auth = ' Basic ' + credentials;


      h.append('Authorization', auth)

      let req = new Request(uri, {
            method: "GET",
            headers: h,
            credentials: 'include',

      });
      useEffect(() => {
            const fetchDrugs = () =>
                  fetch(req)
                        .then(res => res.json())
                        .then(data => {
                              if (data.name == lastDrug) return fetchDrugs()
                              else
                                    setDrugs(data)
                              setLoading(false)
                        })
            fetchDrugs()
      }, [lastDrug])

      console.log("isLoading", drugs);

      return (
            <View style={styles.container}>
                  {isLoading ? <ActivityIndicator /> :
                        <React.Fragment>
                              <Header/>
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