import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native';
import Constant from 'expo-constants'
import {AuthContext} from '../components/context';

const Header = ({ height }) => {
      const  data  = React.useContext(AuthContext);
      const navigation = useNavigation()
      const dispatch = React.useReducer()
      const { colors } = useTheme()

      const mycolor = colors.iconColor
      return (
            <View style={{
                  // marginTop:Constant.statusBarHeight,
                  position: "relative",
                  top: 0,
                  left: 0,
                  right: 0,
                  borderColor: "WhiteSmoke",
                  height:50,
                  backgroundColor: colors.headerColor,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  elevation: 4,
                  
            }}>
                  <View style={{
                        flexDirection: "row",
                        margin: 5
                  }}>

                        <Ionicons.Button name="ios-menu" size={25}
                              backgroundColor="#5cb85c"
                              onPress={() => navigation.openDrawer()}>

                        </Ionicons.Button>

                  </View>
                  <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: 300,
                        margin: 5
                  }}>
                        <TextInput
                              placeholder={data.name}
                              style={styles.input}
                              onPress={() => navigation.navigate('SupportScreen')}
                        />
                        <Ionicons name="md-search" size={32} color={mycolor}
                              onPress={() => navigation.navigate('SupportScreen')}
                        />

                  </View>
            </View>
      );
}
export default Header;
const styles = StyleSheet.create({
      input: {
            flex: 1,
            height: 40,
            backgroundColor: '#e4e6eb',
            borderRadius: 16,
            paddingHorizontal: 16,
            fontSize: 15
          },
})