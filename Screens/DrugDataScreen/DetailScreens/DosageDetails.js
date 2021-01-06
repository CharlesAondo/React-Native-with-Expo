import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { AuthContext } from '../../../components/context'

// import * as SQLite from "expo-sqlite"

// const db = SQLite.openDatabase('db.db')
// let base64 = require('base-64');

// ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
//       db.transaction((trans) => {
//             trans.executeSql(sql, params, (trans, results) => {
//                   resolve(results);
//             },
//                   (error) => {
//                         reject(error);
//                   });
//       });
// });

const DosageDetails = ({ route, navigation, props }) => {
	return (
		<View>
			<ScrollView>
				<View key="test">
					<Text key="test2">
						  <Text>INDICATION</Text>
						  <Text>Diabetes mellitus</Text>
					</Text>
				</View>
			</ScrollView>
		</View>
  )
}

export default DosageDetails;
