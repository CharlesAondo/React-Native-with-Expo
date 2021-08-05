import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Picker } from 'react-native'
import RNPickerSelect from "react-native-picker-select";
import { database } from '../database/database';

const Dropdown = ({ children }) => {
    //  const [selectedValue, setSelectedValue] = useState("");
      const [language, setLanguage] = useState('');

      /*       const [selectedValue, setSelectedValue] = React.useState({
                  value: false,
            })
      
             const updateValue = (value) => {
                  setSelectedValue({ value: value })
               } */

      const [selectedValue, setSelectedValue] = React.useState({
            value : "Java"
      })
      return (

            <View style={styles.container}>

                  <RNPickerSelect
                        placeholder={{ label: "Select you favourite language", value: null }}

                        onValueChange={(language) => setSelectedValue({
                              ...selectedValue,
                              value: language,
                        })}
                        items={[
                              { label: "JavaScript", value: "JavaScript" },
                              { label: "TypeStript", value: "TypeStript" },
                              { label: "Python", value: "Python" },
                              { label: "Java", value: "Java" },
                              { label: "C++", value: "C++" },
                              { label: "C", value: "C" },
                        ]}
                  />
            </View>
      )
}

const styles = StyleSheet.create({
      textStyle: {
            fontSize: 18,
            padding: 7,
            height: 40,
            width: 80,
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 5,
            color: 'red'

      },
      textInput: {
            //  color: 'red',
            //fontSize: 18,

      }
})

export default Dropdown;