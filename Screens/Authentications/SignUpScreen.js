import React from 'react';
import { 
  View, 
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Animated,
  TextInput,
 } from 'react-native';

 import { LinearGradient } from 'expo-linear-gradient';
 import { createStackNavigator } from '@react-navigation/stack';
 import Animatable from 'react-native-animatable'
 import { Ionicons } from '@expo/vector-icons';
 import { FontAwesome } from '@expo/vector-icons';
 import { Feather } from '@expo/vector-icons';
 import { StatusBar } from 'expo-status-bar';



const SignInScreen = ({navigation}) => {

    const [data,setData] = React.useState({
      email: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry:true
    })
     //Checking for valid email
   const textInputChange = (val) =>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg.test(val) === true){
      setData({
        ...data,
        email:val,
        check_textInputChange:true
      });
    }else{
      setData({
        ...data,
        email:val,
        check_textInputChange:false
      })
    }
  }
  //Checking for  Correct Password
  const handlePasswordChange =(val) =>{
    setData({
      ...data,
      password:val
    });
  }

  const UpdateSecuredEntry =() =>{
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry

    });
  }

    return (
      <View style={styles.container}>
            <StatusBar backgroundColor='blue' barStyle="light-content"/>

            <View style={styles.header}> 
                  <Text> SIGN UP SCREEN </Text>
            </View>

            <Animated.View animation="fadeInUpBig" style={[
                  styles.footer
            ]} >
                  <Text style={styles.textInput.footer}>Email</Text> 

                  <View style={styles.action}>
                  <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                  /> 

                  <TextInput
                        placeholder="Your Emails"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                  />
                  {data.check_textInputChange ?
                  <Animated.View
                        animation="bounceIn"
                  >
                              <FontAwesome
                              name="check-circle"
                              color="green"
                              size={20}
                        />
                  </Animated.View>
                  : null}
            
                  </View>
                  <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
                  <View style={styles.action}>
                  <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                  />
                  {/* Handling Passworrd*/}
                  <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                  />
                  <TouchableOpacity
                        onPress={UpdateSecuredEntry}
                  >
                  {data.secureTextEntry ?
                        <FontAwesome
                        name="eye-slash"
                        color="grey"
                        size={20}
                        />
                  :
                        <FontAwesome
                        name="eye"
                        color="grey"
                        size={20}
                        />  
                  }
                  </TouchableOpacity>

                  </View>
            {/* Sign in Button */}
                  <View style={styles.button}>
                  <LinearGradient
                              colors={['#08d4c4', '#01ab9d']}
                              style={styles.signIn}
                        >
                              <Text style={[styles.textSign, {
                                    color:'#fff'
                              }]}>Sign In</Text>
                        </LinearGradient>
            {/* Sign Up Button */}
                        <TouchableOpacity
                              onPress={() => navigation.navigate('SignUpScreen')}
                              style={[styles.signIn, {
                                    borderColor: '#009387',
                                    borderWidth: 1,
                                    marginTop: 15
                              }]}
                        >
                              <Text style={[styles.textSign, {
                                    color: '#009387'
                              }]}>Sign Up</Text>
                        </TouchableOpacity>
                  </View>
            </Animated.View>
    </View>
    );
};
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});
