import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
      useTheme,
      Avatar,
      Title,
      Caption,
      Paragraph,
      Drawer,
      Text,
      TouchableRipple,
      Switch,
      ActivityIndicator
} from 'react-native-paper';
import {
      DrawerContentScrollView,
      DrawerItem
} from '@react-navigation/drawer';

//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../components/context';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')
export function DrawerContent(props) {

      const paperTheme = useTheme();

      const { signOut, toggleTheme } = React.useContext(AuthContext);

      const [user, setUser] = React.useState({
            userData: '',
            isLoading: true
      })

      useEffect(() => {

            const getUser = () => {
                  db.transaction(
                        tx => {
                              tx.executeSql(
                                    'select * from vdi_user',
                                    [],
                                    (_, { rows: { _array } }) => {
                                          setUser({
                                                ...user,
                                                userData: _array,
                                                isLoading: false
                                          })
                                    }

                              );
                        },
                  );
            }
            getUser();
            console.log(user.userData)

      }, [])


      return (
            <View style={{ flex: 1 }}>
                  <DrawerContentScrollView {...props}>
                        <View style={styles.drawerContent}>
                              <View style={styles.userInfoSection}>
                                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                          <Avatar.Image
                                                source={{
                                                      uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                                }}
                                                size={50}
                                          />

                                          <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                                <Title style={styles.title}>John Doe</Title>
                                                <Caption style={styles.caption}>@j_doe</Caption>
                                          </View>



                                    </View>
                              </View>


                              <Drawer.Section style={styles.drawerSection}>
                                    <DrawerItem
                                          icon={({ color, size }) => (
                                                <Ionicons
                                                      name="ios-home"
                                                      color={color}
                                                      size={size}
                                                />
                                          )}
                                          label="Home"
                                          onPress={() => { props.navigation.navigate('Home') }}
                                    />
                                    <DrawerItem
                                          icon={({ color, size }) => (
                                                <Feather
                                                      name="user"
                                                      color={color}
                                                      size={size}
                                                />
                                          )}
                                          label="Profile"
                                          onPress={() => { props.navigation.navigate('Profile') }}
                                    />
                                    <DrawerItem
                                          icon={({ color, size }) => (
                                                <Ionicons
                                                      name="ios-archive"
                                                      color={color}
                                                      size={size}
                                                />
                                          )}
                                          label="Fav Drugs"
                                          onPress={() => { props.navigation.navigate('BookmarkScreen') }}
                                    />
                                    <DrawerItem
                                          icon={({ color, size }) => (
                                                <Feather
                                                      name="settings"
                                                      color={color}
                                                      size={size}
                                                />
                                          )}
                                          label="Settings"
                                          onPress={() => { props.navigation.navigate('SettingsScreen') }}
                                    />
                                    <DrawerItem
                                          icon={({ color, size }) => (
                                                <Ionicons
                                                      name="ios-contact"
                                                      color={color}
                                                      size={size}
                                                />
                                          )}
                                          label="Support"
                                          onPress={() => { props.navigation.navigate('SupportScreen') }}
                                    />
                              </Drawer.Section>
                        </View>
                  </DrawerContentScrollView>
                  <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem
                              icon={({ color, size }) => (
                                    <Entypo
                                          name="log-out"
                                          color={color}
                                          size={size}
                                    />
                              )}
                              label="Sign Out"
                              onPress={() => { signOut() }}
                        />
                  </Drawer.Section>
            </View>
      );
}

const styles = StyleSheet.create({
      drawerContent: {
            flex: 1,
      },
      userInfoSection: {
            paddingLeft: 20,
      },
      title: {
            fontSize: 16,
            marginTop: 3,
            fontWeight: 'bold',
      },
      caption: {
            fontSize: 14,
            lineHeight: 14,
      },
      row: {
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
      },
      section: {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 15,
      },
      paragraph: {
            fontWeight: 'bold',
            marginRight: 3,
      },
      drawerSection: {
            marginTop: 15,
      },
      bottomDrawerSection: {
            marginBottom: 15,
            borderTopColor: '#f4f4f4',
            borderTopWidth: 1
      },
      preference: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 12,
            paddingHorizontal: 16,
      },
});