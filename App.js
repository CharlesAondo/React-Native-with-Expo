import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
      StyleSheet,
      Text,
      View,
      Button,
      Image,
      ActivityIndicator
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { uthContext, AuthContext } from './components/context';
import { DrawerContent } from './Screens/DrawerContent';


import MainTabScreen from './Screens/MainTabScreen';
import RootStackScreen from './Screens/RootStackScreen';
import SearchScreen from './Screens/SearchScreen';
import SettingsScreen from './Screens/SettingsScreen';
import BookmarkScreen from './Screens/BookmarkScreen';
import SupportScreen from './Screens/SupportScreen';
import { AsyncStorage } from 'react-native';
import useDatabase from './hooks/useDatabase';
import * as SQLite from "expo-sqlite";
import {getCurrentDate}  from './hooks/getCurrentDate';

//DB declaration to be used throughout the page
const db = SQLite.openDatabase('db.db');
//Getting the current date 
const date = getCurrentDate.currentDate();

function cacheImages(images) {
      return images.map(image => {
            if (typeof image === 'string') {
                  return Image.prefetch(image);
            } else {
                  return Asset.fromModule(image).downloadAsync();
            }
      });
}


const Drawer = createDrawerNavigator();
const App = () => {

      const isDBLoadingComplete = useDatabase();
      console.log('Database Loading...........', isDBLoadingComplete);

      /*       const [isLoading, setIsLoding] = React.useState(true);
            const [userToken, setUserToken] = React.useState(null);
       */


      const initialLoginState = {
            isLoading: true,
            userName: null,
            userToken: null
      };
      const loginReducer = (prevState, action) => {
            switch (action.type) {
                  case 'RETRIEVE_TOKEN':
                        return {
                              ...prevState,
                              userToken: action.token,
                              isLoading: false,
                        };
                  case 'LOGIN':
                        return {
                              ...prevState,
                              userName: action.id,
                              userToken: action.token,
                              isLoading: false,
                        };
                  case 'LOGOUT':
                        return {
                              ...prevState,
                              userName: null,
                              userToken: null,
                              isLoading: false,
                        };

                  case 'REGISTER':
                        return {
                              ...prevState,
                              userName: action.id,
                              userToken: action.token,
                              isLoading: false,
                        };

            }

      };

      const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)
      const authContext = React.useMemo(() => ({
            signIn: async (userTokenRetrived) => {

                  const userToken = userTokenRetrived.token;
                  console.log("Token extracted...", userToken);
                  try {
                        await AsyncStorage.setItem('userToken', userToken);
                        await AsyncStorage.setItem('dateLoggedIn',date);
                        
                        console.log("Charles Setting Token From Login Screen:::", userToken);
                  } catch (e) {
                        console.log("Unable to set user token for sign in .. ", e)
                  }

                  console.log('user token ', userToken);
                  dispatch({ type: 'LOGIN', token: userToken });
            },
            saveData: async (data) => {
               
              
                  for (let key in data) {
                        let obj = data[key];
                        db.transaction(function (tx) {
                              tx.executeSql(
                                    'INSERT INTO vdi_user (name,email,support_counterpart,title,deleted_at,created_at,updated_at) VALUES (?,?,?,?,?,?,?)',
                                    [obj.name,obj.email,obj.support_counterpart,obj.title,obj.deleted_at,date,obj.updated_at],
                                    (tx, results) => {
                                          console.log('Results', results.rowsAffected);
                                          if ('added to db',results.rowsAffected > 0) {
                                                console.log('user added to db')
                                          } else console.log('Failed add user to db....');
                                    }
                              );
                        });
                  }
            },
            signOut: async () => {
                  try {
                        await AsyncStorage.removeItem('userToken');
                  } catch (e) {
                        console.log("unable to sign out.. ", e);
                  }
                  dispatch({ type: 'LOGOUT' });

            },
            signUp: () => {
                  //  setUserToken('fgk');
                  //setIsLoding(false);
            }
      }), []);

      useEffect(() => {
            setTimeout(async () => {
                  let userToken;
                  userToken = null;
                  try {
                        userToken = await AsyncStorage.getItem('userToken');
                        console.log("Token From Loading Screen", userToken);
                  } catch (e) {
                        console.log("Unable to get user token for sign in.....", e)
                  }
                  dispatch({ type: 'REGISTER', token: userToken });
            }, 1000)
      }, []);

      if (loginState.isLoading) {
            return (
                  <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                        <ActivityIndicator size="large" color="green" />
                  </View>
            )
      }
      return (
            <AuthContext.Provider value={authContext}>
                  <NavigationContainer >
                        {loginState.userToken !== null ? (
                              <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                                    <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                                    <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
                                    <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
                                    <Drawer.Screen name="SupportScreen" component={SupportScreen} />

                              </Drawer.Navigator>
                        )
                              :
                              <RootStackScreen />
                        }
                  </NavigationContainer>
            </AuthContext.Provider>
      )
}
export default App;