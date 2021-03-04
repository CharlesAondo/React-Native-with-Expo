import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from './Header';
import FixedBottom from '../components/Footer';
import * as WebBrowser from 'expo-web-browser';
import { UrlServices } from '../components/UrlServices';
const SettingsScreen = () => {

      const handleLinks = (param) => {

            switch (param) {

                  case 'timeless':
                        WebBrowser.openBrowserAsync(UrlServices.aboutTimelessUrl());
                        break;

                  case 'about_us':
                        WebBrowser.openBrowserAsync(UrlServices.aboutAuthorsUrl());
                        break;
                  case 'rate_app':
                        alert('comming soon')
                        WebBrowser.openBrowserAsync(UrlServices.aboutTimelessUrl());
                        break;
                  case 'eula':
                        WebBrowser.openBrowserAsync(UrlServices.eulaURL());
                        break;
                  case 'privacy_policy':
                        WebBrowser.openBrowserAsync(UrlServices.privacyPolicyUrl());
                        break;

                  default:
                        break;
            }

      }

      return (
            <View style={styles.container}>
                  <React.Fragment>

                        <View style={styles.innerContainer}>
                              <Header />
                              <ScrollView>
                                    <Text style={styles.header}>About Us</Text>
                                    <View>
                                          <TouchableOpacity
                                                onPress={() => handleLinks('timeless')}>
                                                <Text style={styles.item}>About TimelessVeterinary Systems </Text>

                                          </TouchableOpacity>
                                          <TouchableOpacity
                                                onPress={() => handleLinks('about_us')}>
                                                <Text style={styles.item}>The Authors</Text>

                                          </TouchableOpacity>

                                    </View>

                                    <Text style={styles.header}>FeedBack/Referrals</Text>
                                    <View>
                                          <TouchableOpacity
                                                onPress={() => handleLinks('rate_app')}>
                                                <Text style={styles.item}>Rate this App</Text>

                                          </TouchableOpacity>

                                          <TouchableOpacity onPress={handleLinks}>
                                                <Text style={styles.item}>Send Feedback</Text>

                                          </TouchableOpacity>

                                          <TouchableOpacity
                                                onPress={handleLinks}>
                                                <Text style={styles.item}>Refer a friend</Text>

                                          </TouchableOpacity>

                                    </View>


                                    <Text style={styles.header}>Support Materials/Legals</Text>
                                    <View>
                                          <TouchableOpacity
                                                onPress={handleLinks}>
                                                <Text style={styles.item}>Additional Resources</Text>
                                          </TouchableOpacity>

                                          <TouchableOpacity
                                                onPress={() => handleLinks('eula')}>
                                                <Text style={styles.item}>End-User License Agreement</Text>

                                          </TouchableOpacity>
                                          <TouchableOpacity
                                                onPress={() => handleLinks('privacy_policy')}>
                                                <Text style={styles.item}>Privacy Policy</Text>

                                          </TouchableOpacity>


                                    </View>



                              </ScrollView>

                        </View>
                        <FixedBottom />
                  </React.Fragment>

            </View>



      );
};

export default SettingsScreen;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',

      },
      innerContainer: {
            paddingTop: 40,
            paddingHorizontal: 20,
      },
      headerFooterStyle: {
            //width: '100%',
            height: 0,
            backgroundColor: '#606070',
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 3

      },

      header: {
            marginTop: 10,
            paddingVertical: 5,
            borderWidth: 3,
            borderColor: '#108610',
            borderRadius: 20,
            backgroundColor: '#108610',
            color: "#20232a",
            textAlign: "center",
            fontSize: 15,
            fontWeight: "bold"
      },
      item: {
            marginTop: 3,
            padding: 10,
            backgroundColor: 'whitesmoke',
            fontSize: 20,


      },
});