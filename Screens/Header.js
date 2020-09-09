import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign,Ionicons,MaterialIcons} from '@expo/vector-icons'
import { useNavigation ,useTheme} from '@react-navigation/native';
import Constant from 'expo-constants'
import SearchScreen from '../Screens/SearchScreen';
//import {useDispatch,useSelector} from 'react-redux'

const  Header=({height}) => {
    const navigation = useNavigation()
    const dispatch = React.useReducer()
    const {colors} =  useTheme()

    const mycolor = colors.iconColor
  return (
    <View style={{
       // marginTop:Constant.statusBarHeight,
        position:"relative",
       
        top:0,
        left:0,
        right:0,
        borderColor: "WhiteSmoke",
        height:45,
        backgroundColor:colors.headerColor,
        flexDirection:"row",
        justifyContent:"space-between",
        elevation:4,
    }}>
      <View style={{
          flexDirection:"row",
          margin:5
      }}>
      <Ionicons.Button name="ios-menu" size={25} 
            backgroundColor="#5cb85c" 
            onPress={() => navigation.openDrawer()}>

      </Ionicons.Button>

      </View>
      <View style={{
          flexDirection:"row",
          justifyContent:"space-around",
          width:150,
          margin:5
      }}>
       <Ionicons name="md-search" size={32} color={mycolor} 
            onPress={()=>navigation.navigate('SupportScreen')}
       
       />

      </View>
    </View>
  );
}
export default Header;