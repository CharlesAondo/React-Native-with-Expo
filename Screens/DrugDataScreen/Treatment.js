import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { AuthContext } from '../../components/context'

const Treatments = ({ route, navigation, props }) => {

      const data = React.useContext(AuthContext);
      let categories = JSON.stringify(data.categories);

      return (
            <View style={styles.container}>
                  <ScrollView>
                        {Object.keys(categories).map(function (category) {
                              return <Text>{categories.category}</Text>
                        })}
                  </ScrollView>
            </View>
      )
}
export default Treatments;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            /*   alignItems: 'center',
              justifyContent: 'center', */
            paddingTop: 40,
            backgroundColor: '#fff',
            paddingHorizontal: 20
      },
      item: {

            fontSize: 25,
            fontStyle: 'italic'
      },

})