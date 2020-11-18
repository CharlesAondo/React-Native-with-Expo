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
import Pearls from './DrugDataScreen/Pearls';
import Preacautions from './DrugDataScreen/Precautions'
import { AuthContext } from '../components/context';
import Header from '../Screens/Header';

let headers = new Headers();
let base64 = require('base-64');

const Tab = createMaterialBottomTabNavigator();
const DetailsScreen = ({ route,navigation }) => {
      const { drug } = route.params;

      const [isLoading, setLoading] = useState(true);
      const [drugs, setDrugs] = useState({})
      const [lastDrug, setLastBook] = useState("")


      let uri = "https://tvns-caondo.tvms-dev.timelessveterinary.com/client/vdi/v1/drug_data/" +drug.id;
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
                  <AuthContext.Provider value={drugs}>
                        <React.Fragment>
                              <Header/>
                              <DrugTabs/>
                        {/*       <ScrollView>
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
                              </ScrollView> */}
                        </React.Fragment>
                        </AuthContext.Provider>
                  }
            </View>
      );
};




/* 
const DetailsScreen = ({ route, navigation }) => {
      const { drug } = route.params;

      const [isLoading, setLoading] = useState(true);
      const [drugs, setDrugs] = useState({})
      const [lastDrug] = useState("")


      let uri = "https://tvns-caondo.tvms-dev.timelessveterinary.com/client/vdi/v1/drug_data/" + drug.id;
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
              
                              <AuthContext.Provider value={drugs}>
                                    <Header />

                                    <DrugTabs />
                              </AuthContext.Provider>
             

            </View>
      );

}; */


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
