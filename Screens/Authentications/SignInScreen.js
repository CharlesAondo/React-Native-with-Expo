import React, { useRef } from "react";
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
    Platform,
    Alert
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import Animatable from 'react-native-animatable'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { AuthContext } from '../../components/context';
import { database } from '../../database/database';
import { getCurrentDate } from '../../hooks/getCurrentDate';
import { UrlServices } from '../../components/UrlServices';
import * as SQLite from "expo-sqlite"
import * as Device from 'expo-device';


const db = SQLite.openDatabase('db.db')
let base64 = require('base-64');


const SignInScreen = ({ navigation }) => {
    const date = getCurrentDate.currentDate();


    const fadeAnim = useRef(new Animated.Value(0)).current;


    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    };
    const fadeOut = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    const [data, setData] = React.useState({
        userName: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        userTokenRetrived: ''
    })

    const { signIn } = React.useContext(AuthContext);
    const { saveData } = React.useContext(AuthContext);

    //Checking for valid email
    const textInputChange = (val) => {
            // alert(signIn);
            console.log(val);
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(val) === true) {
                setData({
                    ...data,
                    userName: val,
                    check_textInputChange: true
                });
            } else if (val.trim().length >= 1) {
                setData({
                    ...data,
                    userName: val,
                    // check_textInputChange: true,
                    isValidUser: true
                });
            } else {
                setData({
                    ...data,
                    userName: val,
                    check_textInputChange: false,
                    isValidUser: false
                })
            }
        }
        //Checking for  Correct Password
    const handlePasswordChange = (val) => {
        if (val.trim().length >= 3) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }

    }

    const UpdateSecuredEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry

        });
    }
    const loginHandle = (userName, password, userTokenRetrived) => {

        let h = new Headers();
        h.append('Accept', 'application/json');
        h.append('Content-Type', 'application/json');

        let credentials = base64.encode('test:test')
        let auth = ' Basic ' + credentials;

        h.append('Authorization', auth)
        let myObj = {
            "email": userName,
            "password": password,
            "device": Device.deviceName
        };

        let req = new Request(UrlServices.loginUrl(), {
            method: "POST",
            headers: h,
            credentials: 'include',


            body: JSON.stringify(myObj)
        });

        if (data.userName.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        } else {
            fetch(req)
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong on api server!');
                    }
                })
                .then(response => {
                    let userTokenRetrived = { 'token': response.token };
                    console.debug("respond from api", response);
                    saveData(response.data);
                    signIn(userTokenRetrived)
                }).catch(error => {
                    Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                        { text: 'Okay' }
                    ]);
                    console.debug("respond from api", error.message);
                });

        }


        //signIn(foundUser);

    }

    return ( <
        View style = { styles.container } >

        <
        View style = { styles.header } >
        <
        Image source = { require('../../assets/logo_vdi.png') }
        style = { styles.logo }
        /> <
        /View>

        <
        Animated.View animation = "fadeInUpBig"
        style = {
            [
                styles.footer
            ]
        } >
        <
        Text style = { styles.textInput.footer } > Email < /Text>

        <
        View style = { styles.action } >
        <
        FontAwesome name = "user-o"
        color = "#05375a"
        size = { 20 }
        />

        <
        TextInput placeholder = "Your Emails"
        style = { styles.textInput }
        autoCapitalize = "none"
        onChangeText = {
            (val) => textInputChange(val) }
        /> {
            data.check_textInputChange ?
                <
                Animated.View
            animation = "bounceIn" >
                <
                FontAwesome
            name = "check-circle"
            color = "green"
            size = { 20 }
            /> <
            /Animated.View>: null
        } <
        /View>

        { /*                   Displaying user validation rule */ } {
            data.isValidUser ? null :

                <
                Animated.View
            style = {
                    {
                        fadeAnim
                    }
                } >
                <
                Text style = { styles.errorMsg } > Email Field Cannot be empty < /Text> <
                /Animated.View>

        }

        <
        Text style = {
            [styles.text_footer, { marginTop: 35 }] } > Password < /Text> <
        View style = { styles.action } >
        <
        FontAwesome name = "lock"
        color = "#05375a"
        size = { 20 }
        /> { /* Handling Passworrd*/ } <
        TextInput placeholder = "Your Password"
        secureTextEntry = { data.secureTextEntry ? true : false }
        style = { styles.textInput }
        autoCapitalize = "none"
        onChangeText = {
            (val) => handlePasswordChange(val) }
        /> <
        TouchableOpacity onPress = { UpdateSecuredEntry } >
        {
            data.secureTextEntry ?
            <
            FontAwesome
            name = "eye-slash"
            color = "grey"
            size = { 20 }
            /> :
                <
                FontAwesome
            name = "eye"
            color = "grey"
            size = { 20 }
            />
        } <
        /TouchableOpacity> <
        /View> {
            data.isValidPassword ? null :
                <
                Animated.View animation = "fadeInLeft"
            duration = { 500 } >
                <
                Text style = { styles.errorMsg } > Incorect Password < /Text> <
                /Animated.View>

        }

        { /* Forget Password Link */ } <
        TouchableOpacity >
        <
        Text style = {
            { color: '#009387', marginTop: 15 } } > Forgot password ? < /Text> <
        /TouchableOpacity> { /* Sign in Button */ } <
        View style = { styles.button } >
        <
        TouchableOpacity style = { styles.signIn }
        onPress = {
            () => { loginHandle(data.userName, data.password) } } >
        <
        LinearGradient colors = {
            ['green', '#01ab9d'] }
        style = { styles.signIn } >
        <
        Text style = {
            [styles.textSign, {
                color: '#fff'
            }]
        } > Sign In < /Text> <
        /LinearGradient> <
        /TouchableOpacity> { /* Sign Up Button */ } <
        TouchableOpacity onPress = {
            () => navigation.navigate('SignUpScreen') }
        style = {
            [styles.signIn, {
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 15
            }]
        } >
        <
        Text style = {
            [styles.textSign, {
                color: '#009387'
            }]
        } > Sign Up < /Text> <
        /TouchableOpacity> <
        /View> <
        /Animated.View> <
        /View>
    );
};
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 60
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
    },
    logo: {
        width: '100%',
        height: '60%',


    }
});