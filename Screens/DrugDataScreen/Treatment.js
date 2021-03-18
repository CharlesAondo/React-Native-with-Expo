
import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { AuthContext } from '../../components/context'
import * as SQLite from "expo-sqlite"
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import DosageDetails from './DetailScreens/DosageDetails';
import { favDrugRequest } from '../../hooks/favDrugRequest';
import { set } from 'react-native-reanimated';
import { Modal, Button } from 'react-native-paper';
import NetInfo from '@react-native-community/netinfo';
import { AsyncStorage } from 'react-native';
import { ReAuthorization } from '../Authentications/ReAuthorization';
import { brands } from '../../database/brands';
import ModalComponent, { modalComponent } from '../../components/ModalComponent';
import { species } from '../../hooks/species';

const TreatmentsStack = createStackNavigator();
const Stack = createStackNavigator();
const db = SQLite.openDatabase('db.db')
let base64 = require('base-64');

ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                  resolve(results);
            },
                  (error) => {
                        reject(error);
                  });
      });
});

const Treatments = ({ route, navigation, props }) => {

      var specieName = "";


      const drug = React.useContext(AuthContext);

      const [drugs, setDrugs] = useState({})

      const [modal, setModal] = React.useState({
            showModal: false,
      })

      const [addButton, setAddButton] = React.useState({
            showAddDrugButton: true

      })
      const [data, setData] = React.useState({
            treatment_data: '',
            isLoading: true
      })
      const [specie, setSpecie] = React.useState({
            specie_name: '',

      })

      const [cateData, setCate] = React.useState({
            categories: '',
            loadingCategory: true
      })

      const [brandsData, setBrands] = React.useState({
            brands: '',
            display_data: '',
            showBrandsModal: false,
            loadingBrands: true
      })

      const [favDrugData, setFavDrugs] = React.useState({
            favouriteDrugs: '',
            loadingFavs: true
      })
      const [tokenData, setTokenValues] = React.useState({
            token: '',
            connectionState: false,
            loading: true
      })

      useEffect(() => {

            ReAuthorization.reAuthuroized();

            const categories = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select * from vdi_drug_categories vdc INNER JOIN vdi_drug_category_drug vdcd on  vdcd.category_id = vdc.id where vdcd.drug_id = ' + drug.id,
                                    [],
                                    (_, { rows: { _array } }) => {
                                          setCate({
                                                ...cateData,
                                                categories: _array,
                                                loadingCategory: false

                                          })

                                    }
                              );
                        },
                  );
            }


            const getBrands = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select * from vdi_brand_drug vbd  INNER JOIN vdi_brands  vb on vbd.brand_id = vb.id  where drug_id = ' + drug.id,
                                    [],
                                    (_, { rows: { _array } }) => {
                                          /*
                                          _array.map((item)=>{
                                                if(item.vdi_is_human_us_brand){
                                                      var us={
                                                            'name' : item.name,
                                                            'isHuman' : item.vdi_is_human_us_brand,
                                                            'isVet': item.vdi_is_vet_us_brand
                                                      }
                                                }
                                                
                                                setBrandsByCountryData({
                                                      ...brandsByCountryData,
                                                      usBrand:us
                                                })

                                          })
                                          */

                                          setBrands({
                                                ...brandsData,
                                                brands: _array,
                                                display_data: (_array.length > 4) ? _array.slice(0, 4) : _array,
                                                loadingBrands: false

                                          })

                                    }
                              );
                        },
                  );
            }

            const getData = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'SELECT vd.id AS dosage_id, vd.label, vd.dose_min, vd.dose_max, vd.duration, vd.interval, vd.administrative_notes, vd.pretreatment_notes,vr.name as route, vds.species_id as specieID,vu.name as unit, vt.* FROM vdi_treatments vt INNER JOIN vdi_dosages vd ON vd.treatment_id = vt.id LEFT OUTER JOIN vdi_units vu ON vu.id = vd.unit LEFT OUTER JOIN vdi_routes vr ON vr.id=vd.route INNER JOIN vdi_treatment_species vds on vds.treatment_id = vt.id WHERE drug_id = ' + drug.id,
                                    [],
                                    (_, { rows: { _array } }) => {
                                          setData({
                                                ...data,
                                                treatment_data: _array,
                                                isLoading: false
                                          })
                                    }
                              );
                        },
                  );

            }

            const getFavouriteDrugs = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'SELECT * FROM vdi_user_favourite_drugs WHERE drug_id = ' + drug.id,
                                    [],
                                    (_, { rows: { _array } }) => {
                                          setFavDrugs({
                                                ...favDrugData,
                                                favouriteDrugs: _array,
                                                loadingFavs: false
                                          })
                                    }
                              );
                        },
                  );

            }

            categories(),
                  getBrands(),
                  getData(),
                  getFavouriteDrugs()
      }, [])

      const saveFaveDrugs = () => {
            db.transaction(function (tx) {
                  tx.executeSql(
                        'INSERT INTO vdi_user_favourite_drugs (drug_id) VALUES (?)',
                        [drug.id],
                        (tx, results) => {
                              if (results.rowsAffected > 0) {
                                    setModal({
                                          ...modal,
                                          showModal: false,
                                          showButton: false
                                    })
                                    setAddButton({
                                          ...addButton,
                                          showAddDrugButton: false
                                    })
                              } else alert('Failed....');
                        }
                  );
            });
      }


      console.log(data.treatment_data)

      return (
            <View style={styles.container}>


                  {data.isLoading || cateData.loadingCategory || brandsData.loadingBrands || data.isLoading || favDrugData.loadingFavs ? <ActivityIndicator color="green" size="large" /> :

                        <ScrollView>

                              {addButton.showAddDrugButton && favDrugData.favouriteDrugs.length < 1 ?

                                    <TouchableOpacity
                                          style={styles.buttoon}
                                          onPress={() => {
                                                setModal({
                                                      ...Modal,
                                                      showModal: true,

                                                })
                                          }}>
                                          <LinearGradient
                                                colors={['green', '#01ab9d']}
                                                style={styles.buttoon}
                                          >
                                                <Text style={[styles.textButton, {
                                                      color: '#fff'
                                                }]}>Add to Favourite List </Text>
                                          </LinearGradient>
                                    </TouchableOpacity>
                                    :
                                    null
                              }

                              {cateData.categories === null || cateData.categories == "" || cateData.categories === undefined || cateData.categories === "null" ?
                                    null
                                    :
                                    <React.Fragment>
                                          <View >
                                                <Text style={styles.category_item}>
                                                      <Text >
                                                            {cateData.categories.map((item) => item.name).join(", ")}
                                                      </Text>

                                                </Text>
                                          </View>
                                    </React.Fragment>
                              }


                              {brandsData.brands === null || brandsData.brands == "" || brandsData.brands === undefined || brandsData.brands === "null" ?
                                    null
                                    :

                                    <React.Fragment>
                                          <Text style={styles.header}>Brands/Synonyms</Text>
                                          <View >
                                                <TouchableOpacity
                                                      onPress={() => {

                                                            setBrands({
                                                                  ...brandsData,
                                                                  showBrandsModal: true
                                                            })
                                                      }}>

                                                      <Text style={styles.item}>
                                                            <Text >
                                                                  {brandsData.display_data.map((item) => item.name).join(", ")}....
                                                            </Text>

                                                      </Text>
                                                </TouchableOpacity>
                                          </View>
                                    </React.Fragment>
                              }


                              {data.treatment_data === null || data.treatment_data == "" || data.treatment_data === undefined || data.treatment_data === "null" ?
                                    <View >
                                          <Text style={styles.header}>No Available Indications</Text>
                                          <Text style={styles.item}>Indications do not exist, due to there being no safe separation between toxic and therapeutic dosages, or are not currently available in the VDI database.</Text>
                                    </View>
                                    :
                                    <React.Fragment>
                                          <View >
                                                <Text style={styles.header}>Indications</Text>
                                                {data.treatment_data.map((item) => (
                                                      <View key={item.id + "-" + item.dosage_id} style={styles.item}>
                                                            {/* Get the specie name using the specie id from the query */}

                                                            {
                                                                  species.map((specieItem) => {
                                                                        if (item.specieID === specieItem.id) {
                                                                              specieName = specieItem.name;
                                                                        }

                                                                  })
                                                            }

                                                            <TouchableOpacity onPress={() => navigation.navigate('DosageDetails', { dosage_data: item })}>

                                                                  <Text key={item.dosage_id} style={styles.indication}>

                                                                        <Text style={styles.indication_name}>{item.indication_name}
                                                                              <Text style={styles.specie}> ({specieName})</Text>
                                                                              {"\n"}
                                                                        </Text>

                                                                        <Text>
                                                                              <Text style={styles.indication_dose}>{item.dose_min} {item.dose_max != "null"  ? "-" + item.dose_max : ""}</Text>
                                                                              <Text>
                                                                                    <Text style={styles.dosage_label}>{item.label != "null" ? item.label : null}</Text> {''}

                                                                                    <Text style={styles.dosage_units}>{item.unit} {item.route} {item.interval}</Text>
                                                                              </Text>
                                                                        </Text>

                                                                  </Text>

                                                            </TouchableOpacity>

                                                      </View>
                                                ))}

                                          </View>
                                    </React.Fragment>
                              }

                        </ScrollView>
                  }
                  <Modal
                        animationType="fade"
                        transparent={false}
                        visible={modal.showModal}
                  >
                        <View style={styles.modalView}>

                              <Text>Do you want to add {drug.name} to fav List</Text>

                              <View >
                                    <View style={styles.modalButtons}>
                                          <Button style={styles.textStyleCancel} onPress={() => {
                                                setModal({
                                                      ...Modal,
                                                      showModal: false,

                                                })
                                          }}>Cancel</Button>

                                          <Button
                                                style={styles.textStyleSave}

                                                onPress={item => saveFaveDrugs()}

                                          >Save</Button>

                                    </View>
                              </View>

                        </View>
                  </Modal>

                  <Modal
                        animationType="fade"
                        transparent={false}
                        visible={brandsData.showBrandsModal}
                  >
                        <View style={styles.modalView}>

                              <ScrollView>
                                    {brandsData.loadingBrands ? <ActivityIndicator color="green" size="large" /> :

                                          <React.Fragment>
                                                <Text style={styles.header}>United States</Text>
                                                <View >
                                                      <Text style={styles.item}>
                                                            <Text >
                                                                  {brandsData.display_data.map((item) => item.name).join(", ")}....
                                                            </Text>
                                                      </Text>

                                                </View>

                                                <Text style={styles.header}>United Kingdom</Text>
                                                <View >
                                                      <Text style={styles.item}>
                                                            <Text >
                                                                  {brandsData.display_data.map((item) => item.name).join(", ")}....
                                                            </Text>
                                                      </Text>

                                                </View>

                                                <Text style={styles.header}>Canada</Text>
                                                <View >
                                                      <Text style={styles.item}>
                                                            <Text >
                                                                  {brandsData.display_data.map((item) => item.name).join(", ")}....
                                                            </Text>
                                                      </Text>

                                                </View>

                                                <Text style={styles.header}>Synonyms</Text>
                                                <View >
                                                      <Text style={styles.item}>
                                                            <Text >
                                                                  {brandsData.display_data.map((item) => item.name).join(", ")}....
                                                            </Text>
                                                      </Text>

                                                </View>

                                          </React.Fragment>
                                    }
                              </ScrollView>

                              <View >

                                    <Button style={styles.buttonLeft} onPress={() => {
                                          setBrands({
                                                ...brandsData,
                                                showBrandsModal: false
                                          })
                                    }}>Close</Button>


                              </View>

                        </View>
                  </Modal>



            </View>
      )
}

//export default Treatments;

const TreatmentsScreen = ({ navigation }) => {
      return (
            <Stack.Navigator headerMode="none">
                  <Stack.Screen name="Treatments" component={Treatments} />
                  <Stack.Screen name="DosageDetails" component={DosageDetails} />
            </Stack.Navigator>
      );
}

export default TreatmentsScreen;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            paddingTop: 10,
            backgroundColor: '#fff',
            paddingHorizontal: 5
      },
      category_item: {
            fontSize: 20,
            fontStyle: 'italic',
            textAlign: "right",
            color: "grey",
            paddingEnd: 10
      },
      brands: {
            textAlign: "left",
            backgroundColor: '#cbfccb',
            paddingStart: 10,
            paddingEnd: 10,
            marginTop: 5,
            marginBottom: 10
      },
      brands_heading: {
            color: "grey",
            fontWeight: "bold",
            fontSize: 12,
            paddingEnd: 10
      },
      brand_item_list: {
            fontSize: 16,
            paddingEnd: 10
      },
      indications_header: {
            color: "white",
            backgroundColor: "green",
            paddingStart: 10,
            paddingEnd: 10
      },
      indication: {
            backgroundColor: "#cbfccb",
            paddingTop: 10,
            paddingBottom: 10,
            paddingStart: 10,
            paddingEnd: 10,
            borderTopColor: "grey",
            borderTopWidth: 1
      },
      indication_name: {
            fontSize: 12
      },
      indication_dose: {
            fontSize: 30,
            fontWeight: "bold",
      },
      dosage_label: {
            fontSize: 12,
            backgroundColor: "#1E90FF",
            color: "white",
            //maxWidth: "auto",
      },
      dosage_units: {
            fontSize: 15,
            alignContent: 'space-between',
            maxWidth: "auto",
      },
      buttoon: {
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
      },
      textButton: {
            fontSize: 18,
            fontWeight: 'bold'
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
      },
      modalButtons: {
            flexDirection: 'row',

      },
      textStyleSave: {
            backgroundColor: 'green',
            fontWeight: 'bold',
            textAlign: 'center',
            marginLeft: 20

      },
      textStyleCancel: {
            backgroundColor: 'white',
            fontWeight: 'bold',
            textAlign: 'center',

      },
      item: {
            marginTop: 3,
            padding: 10,
            backgroundColor: 'whitesmoke',
            fontSize: 20,

      },
      contrainIndication_title: {
            fontSize: 10,
            fontWeight: 'bold',
            fontSize: 15,
            textAlign: 'center',
            backgroundColor: '#108610',
            height: 25,
      },
      space: {
            fontSize: 10,
            backgroundColor: 'white',
            height: 35,
      },
      title: {
            marginTop: 16,
            paddingVertical: 8,
            borderWidth: 4,
            borderColor: "#20232a",
            borderRadius: 6,
            backgroundColor: "#61dafb",
            color: "#20232a",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold"
      },
      header: {
            marginTop: 10,
            paddingVertical: 5,
            borderWidth: 3,
            borderColor: '#108610',
            borderRadius: 6,
            backgroundColor: '#108610',
            color: "#20232a",
            textAlign: "center",
            fontSize: 15,
            fontWeight: "bold"
      },
      format: {
            fontWeight: "bold"
      },
      buttonLeft: {
            backgroundColor: 'white',
            borderRadius: 15,
            padding: 5,
            elevation: 2,
            marginBottom: 0,
            // marginLeft: 200

      },
      modalTitle: {
            marginTop: 10,
            color: "#20232a",
            textAlign: "center",
            fontSize: 15,
            fontWeight: "bold",

      },
      specie: {
            fontWeight: 'bold',
            fontSize: 15,
            color: 'red'
      }


})