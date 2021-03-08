import React from 'react';
import { View, StyleSheet,Text } from 'react-native'

const FixedBottom = ({ children }) => {
      return (

            <View style={styles.container}>
                  <Text style={styles.textStyle}> ©2021 Timeless Veterinary System Inc.{'\n'}v1.5.3</Text>
            </View>
      )
}

const styles = StyleSheet.create({
      container: {
            position: 'absolute',
            backgroundColor: 'green',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 20,
            height: 100
      },
      textStyle: {
            textAlign: 'center',
            color: 'black',
            fontSize: 18,
            padding: 7,
      },
})

export default FixedBottom;