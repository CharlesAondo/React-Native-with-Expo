
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, FlatList, ActivityIndicator } from 'react-native';

let base64 = require('base-64');


let url = 'https://vetdrugindex.com/api/v1/drug';
let username = 'aondocharles@gmail.com';
let password = 'timeles';


let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));

const HomeScreen = ({navigation}) => {
      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      

/*       useEffect(() => {
            fetch(obj)
                  .then(response => {
                        if (response.status === 200) {
                              return response.json();
                        } else {
                              throw new Error('Something went wrong on api server!');
                        }
                  })
                  .then(response => {
                        console.debug("respond from api",response);
                        // ...
                  }).catch(error => {
                        console.error("Errors From api",error);
                  });
      }, []);

      let obj = {
            method: 'post',
            headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Origin': '',
                 // 'Username': '23afgddd',
               //   'password': 'datahasgon',
                  'Host': 'https://vetdrugindex.com/api/v1/drug'
            },
            body: JSON.stringify({
                  'userame': 'caondo@timelessveterinary.com',
                  'password': 'timeles',
                  //'device': 'android-trials'
            })
      } */
      //console.log(response)
      return (
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.id}, {item.id}</Text>
              )}
            />
          )}
        </View>
      );
    };
export default HomeScreen;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
      },
})