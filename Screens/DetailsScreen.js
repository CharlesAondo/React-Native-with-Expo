import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Treatments from './DrugDataScreen/Treatment';
import Therapeutics from './DrugDataScreen/Therapeutics';
import PearlsScreen from './DrugDataScreen/PearlsScreen';
import Preacautions from './DrugDataScreen/Precautions'
import { AuthContext } from '../components/context';
import Header from '../Screens/Header';

import * as SQLite from "expo-sqlite"


const Tab = createMaterialBottomTabNavigator();
const DetailsScreen = ({ route,navigation }) => {
      
      const { drug } = route.params;

      const [isLoading, setLoadingData] = useState(true);
      const [treatments, setTreatment] = useState({});


      useEffect(() => {
            const getDrugs = () => {
                  const { drug } = route.params;

                  setLoadingData(false);
            }
            getDrugs()

      }, [])


      return (
            <View style={styles.container}>
                  {isLoading ? <ActivityIndicator /> :
                  <AuthContext.Provider value={drug}>
                        <React.Fragment>
                              <Header/>
                              <DrugTabs/>

                        </React.Fragment>
                  </AuthContext.Provider>
                  }
            </View>
      );
};




export default DetailsScreen;


const DrugTabs = () => {
      return (
            <Tab.Navigator
                  initialRouteName="Treatments"
                  activeColor="#5cb85c"
                  style={{ backgroundColor: 'tomato' }}
            >
                  <Tab.Screen
                        name="Feed"
                        component={Treatments}
                        options={{
                              tabBarLabel: 'Dosages',
                              tabBarColor: 'green',
                              tabBarIcon: ({ color }) => (
                                    <Fontisto name="injection-syringe" size={26} color={color} />),
                        }}
                  />
                  <Tab.Screen
                        name="Therapeutics"
                        component={Therapeutics}
                        options={{
                              tabBarLabel: 'Therapeutics',
                              tabBarColor: 'blue',
                              tabBarIcon: ({ color }) => (
                                    <Fontisto name="bandage" size={26} color={color} />
                              ),
                        }}
                  />
                  <Tab.Screen
                        name="Preacautions"
                        component={Preacautions}
                        options={{
                              tabBarLabel: 'Preacautions',
                              tabBarColor: '#a94442',
                              tabBarIcon: ({ color }) => (
                                    <FontAwesome5 name="exclamation-triangle" size={24} color={color} />
                              ),
                        }}
                  />
                  <Tab.Screen
                        name="Pearls"
                        component={PearlsScreen}
                        options={{
                              tabBarLabel: 'Pearls',
                              tabBarColor: '#808080',
                              tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="information-outline" size={26} color={color} />),
                        }}
                  />
            </Tab.Navigator>
      );
}
const styles = StyleSheet.create({
      container: {
            flex: 1,
            paddingTop: 40,
            backgroundColor: '#fff',
      }
});
