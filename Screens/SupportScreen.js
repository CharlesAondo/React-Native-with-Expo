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

import * as SQLite from "expo-sqlite"
import { drugCategoryDrug } from '../database/drugCategoryDrug';
import { getUsers } from '../hooks/getUsers';

const db = SQLite.openDatabase('db.db')

const SearchScreen = ({ navigation }) => {

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
      })
      const getDrugs = () => {
            db.transaction(
                  tx => {
                        tx.executeSql(
                              'SELECT vd.id,vd.name, GROUP_CONCAT(DISTINCT(vb.name)) brandNames FROM vdi_drugs vd LEFT JOIN vdi_brand_drug vbd ON vbd.drug_id = vd.id JOIN vdi_brands vb on vb.id=vbd.brand_id  GROUP BY vd.id lIMIT 20',
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
      //console.log(data.tempDrugs)

      const contains = (name, query) => {
         console.log('data passing',name.id)
            //return false;
      };


      const handleSearch = (text) => {

            let formatQuery = text.toString().toLowerCase();
            const searchResult = _.filter(data.tempDrugs, name => {
                  return contains(name, formatQuery)
            });

            setData({
                  ...data,
                  query: formatQuery,
                  drugs: searchResult

            })
      }


      const Item = ({ name, brand }) => (
            <View style={styles.listItems}>
                  <Text style={styles.listNames}>{name}</Text>
                  <Text style={styles.listBrands}>{brand}</Text>

            </View>
      );
      const renderItem = ({ item }) => <Item name={item.name} brand={item.brandNames} />;

      // console.log(data.drugs)
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
                                    //  value={this.state.keyword}
                                    onChangeText={handleSearch}
                                    style={styles.input}
                              />
                        </View>
                        {data.loading != true ? <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" /> :



                              <FlatList

                                    data={data.drugs}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}


                              />

                        }

                  </SafeAreaView>

            </View>
      )
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
      listBrands: {
            flex: 0.5,
            alignItems: 'flex-end',
            fontStyle: 'italic'

      },
      title: {
            fontSize: 32,
      },
})