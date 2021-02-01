import React, { useState, useRef, useEffect } from 'react';
import {
      StyleSheet, Text, View, ScrollView,
      TextInput, FlatList, ActivityIndicator, TouchableOpacity, TouchableHighlight, Easing, ListRenderItem,
      Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard'
import Constant from 'expo-constants'
import { useTheme, CommonActions } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
const { Value, timing } = Animated;
import _ from "lodash";
import DetailsScreen, {DetailScreen} from './DetailsScreen';
import * as SQLite from "expo-sqlite"
import { drugCategoryDrug } from '../database/drugCategoryDrug';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();


const db = SQLite.openDatabase('db.db')

const SearchScreenStack = ({ navigation }) => {

      let opacity = new Animated.Value(0);

      const animate = easing => {
            opacity.setValue(0);
            Animated.timing(opacity, {
                  toValue: 0,
                  duration: 50,
                  easing: Easing.inOut(Easing.elastic(1)),
                  useNativeDriver: true
            }).start();
      };

      const [data, setData] = React.useState({
            drugs: [],
            loading: false,
            tempDrugs: [],
            query: '',
            arrayholder: []
      })
      const getDrugs = () => {
            db.transaction(
                  tx => {
                        tx.executeSql(
                              'SELECT vd.*, GROUP_CONCAT(DISTINCT(vb.name)) brandNames, GROUP_CONCAT(DISTINCT(vt.indication_name)) indicationNames FROM vdi_drugs vd LEFT JOIN vdi_brand_drug vbd ON vbd.drug_id = vd.id JOIN vdi_brands vb on vb.id=vbd.brand_id LEFT JOIN vdi_treatments vt ON vt.drug_id=vd.id GROUP BY vd.id',
                              [],
                              (_, { rows: { _array } }) => {

                                    setData({
                                          ...data,
                                          drugs: _array,
                                          tempDrugs: _array,
                                          loading: true
                                    });
                              }
                        );
                  },
            );
      }

      useEffect(() => {
            getDrugs()
      }, [])

      const searchFilterFunction = text => {
            const newData = data.tempDrugs.filter(item => {
                  const itemData = `${item.name.toUpperCase()}   
                  ${item.brandNames.toUpperCase()}
                  
                  ${item.indicationNames === null || item.indicationNames === "" ? null : item.indicationNames.toUpperCase()}`;

                  const textData = text.toUpperCase();

                  return itemData.indexOf(textData) > -1;
            });

            setData({
                  ...data,
                  drugs: newData,
            });
      };

      const Item = ({ name, brand, indications,item }) => (
            <View style={styles.listItems}>
                  <TouchableOpacity onPress={() => navigation.navigate('Details',{drug: item

                  })}> 
                        <Text style={styles.listNames}>{name}</Text>
                        <Text style={styles.listSecondItem}>
                              <Text style={styles.brands}>{brand}{'\n'}</Text>
                              <Text style={styles.indications}>{indications}</Text>
                        </Text>

                  </TouchableOpacity>


            </View>
      );
      const renderItem = ({ item }) => <Item name={item.name} brand={item.brandNames} indications={item.indicationNames} item={item}/>;


      return (
            <View>
                  <SafeAreaView >
                        <View style={styles.inner_header}>
                              <Animated.View >
                                    <TouchableHighlight
                                          activeOpacity={1}
                                          underlayColor={"#ccd0d5"}
                                          onPress={() => navigation.goBack() || animate()}
                                          style={styles.back_icon_box}
                                    >
                                          <Entypo name="chevron-left" size={22} color="#000000" />
                                    </TouchableHighlight>
                              </Animated.View>

                              <TextInput
                                    placeholder="Search drug by name,brand or indication"
                                    clearButtonMode="always"
                                    autoCorrect={false}
                                    autoCapitalize="none"               
                                    onChangeText={text => searchFilterFunction(text)}
                                    style={styles.input}
                              />
                        </View>


                        <FlatList

                              data={data.drugs}
                              renderItem={renderItem}
                              keyExtractor={item => item.id}

                        />
                  </SafeAreaView>

            </View>
      )
}

const SearchScreen = ({ navigation }) => {

      return (
            <Stack.Navigator headerMode="none">
                  <Stack.Screen name="SearchScreen" component={SearchScreenStack} />
                  <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
      );
}
export default SearchScreen;

const styles = StyleSheet.create({
      outter_header: {
            flex: 1,
            marginTop: Constant.statusBarHeight,
      },
      inner_header: {
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            elevation: 5,

      },

      back_icon_box: {
            width: 40,
            height: 40,
            borderRadius: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 5
      },
      input: {
            flex: 1,
            height: 40,
            backgroundColor: '#e4e6eb',
            borderRadius: 16,
            paddingHorizontal: 16,
            fontSize: 15
      },
      listItems: {
            backgroundColor: '#ddd',
            flexDirection: "column",
            marginVertical: 5,
            padding: 10


      },
      listNames: {
            flex: 0.5,
            alignItems: 'flex-start',
            fontWeight: 'bold'
      },
      listSecondItem: {
            flex: 0.5,
            alignItems: 'flex-end',

      },
      brands: {
            fontStyle: 'italic'

      },
      indications: {
            fontWeight: 'bold',
            color: 'green'

      },
      title: {
            fontSize: 32,
      },
})