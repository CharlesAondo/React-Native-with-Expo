import _ from "lodash";
import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-native';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'


import * as SQLite from "expo-sqlite"


const db = SQLite.openDatabase('db.db')


const handleRequest = (data, type) => {

     // setModal('true');
      alert('here')

};



export const favDrugRequest = {
      handleRequest
};

const styles = StyleSheet.create({
      centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
      },
      modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
      },
      openButton: {
            backgroundColor: '#F194FF',
            borderRadius: 20,
            padding: 10,
            elevation: 2,
      },
      textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
      },
      modalText: {
            marginBottom: 15,
            textAlign: 'center',
      },
});