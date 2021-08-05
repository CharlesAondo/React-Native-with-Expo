import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native'

const InputBox = ({ children }) => {
      return (

            <View style={styles.container}>
                  <TextInput
                        style={styles.textStyle}
                      //  onChangeText={text => onChangeText(text)}
                 // value={value}
                  />

            </View>
      )
}

const styles = StyleSheet.create({
      textStyle: {
            fontSize: 18,
            padding: 7,
            height:40,
            width:80,
            borderColor:'black',
            borderWidth:2,
            borderRadius:5
      },
})

export default InputBox;