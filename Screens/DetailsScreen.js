import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Header from './Header'
import Treatments from './DrugDataScreen/Treatment';
import Therapeutics from './DrugDataScreen/Therapeutics';
import Pearls from './DrugDataScreen/Pearls';
import Preacautions from './DrugDataScreen/Precautions'
const Tab = createMaterialBottomTabNavigator();
const DetailsScreen = ({ routes, navigation }) => {
      return (
            <View style={styles.container}>
                  <Header />

                  <DrugTabs />
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
                        component={Pearls}
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
