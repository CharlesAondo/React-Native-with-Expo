
import React, { useEffect, useState } from 'react';
import {
      View, Text, Button, StyleSheet, StatusBar,
      FlatList, ActivityIndicator, Alert, ScrollView
} from 'react-native';

let base64 = require('base-64');


let url = 'https://vetdrugindex.com/api/v1/drug';
let username = 'aondocharles@gmail.com';
let password = 'timeles';


let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));

const HomeScreen = ({ navigation }) => {
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
                        <ScrollView>
                             { drugs.map((item) =>(
                               <View key={item.id}>
                                    <Text style={styles.item}>{item.name}</Text>
                               </View>
                     
                             ))}
                        </ScrollView>

                        }
            </View>
      );
};
export default HomeScreen;

const styles = StyleSheet.create({
      container: {
            flex: 1,
          /*   alignItems: 'center',
            justifyContent: 'center', */
            paddingTop:40,
            backgroundColor: '#fff',
            paddingHorizontal: 20
      },
      item:{
            marginTop:15,
            padding:10,
            backgroundColor:'whitesmoke',
            fontSize:25
      }
})