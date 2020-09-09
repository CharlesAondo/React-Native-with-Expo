import React, { useState, useRef, useEffect } from 'react';
import {
      StyleSheet, Text, View, ScrollView,
      TextInput, FlatList, ActivityIndicator, TouchableOpacity, TouchableHighlight, Easing,
      Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard'
import Constant from 'expo-constants'
import { useTheme } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
const { Value, timing } = Animated

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDtCWCduSedfthvh

const SearchScreen = ({ navigation }) => {

      let opacity = new Animated.Value(0);

      const animate = easing => {
            opacity.setValue(0);
            Animated.timing(opacity, {
                  toValue: 0,
                  duration: 50,
                  easing: Easing.inOut(Easing.elastic(1)),
                  useNativeDriver: true
            }).start();
      };

      const [value, setValue] = useState("")
      // const [miniCardData,setMiniCard] = useState([])
      //const dispatch = useDispatch()

      const [loading, setLoading] = useState(false)
/*       const fetchData = () => {
            setLoading(true)
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDtCWCduSedfthvh`)
                  .then(res => res.json())
                  .then(data => {

                        setLoading(false)
                        dispatch({ type: "add", payload: data.items })
                        //setMiniCard(data.items)
                  })
      } */
      return (
            <View style={styles.outter_header}>
                  <View style={styles.inner_header}>
                        <Animated.View >
                              <TouchableHighlight
                                    activeOpacity={1}
                                    underlayColor={"#ccd0d5"}
                                    onPress={() => navigation.goBack() || animate()}
                                    style={styles.back_icon_box}
                              >
                                    <Entypo name="chevron-left" size={22} color="#000000" />
                              </TouchableHighlight>
                        </Animated.View>

                        <TextInput
                              placeholder="Search drug by name or brand"
                              clearButtonMode="always"
                            //  value={this.state.keyword}
                            //  onChangeText={(value) => this.setState({ keyword: value })}
                              style={styles.input}
                        />
                  </View>
                  {loading ? <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" /> : null}
                  <FlatList
                  /* data={miniCardData}
                  renderItem={({item})=>{
                      return <MiniCard
                       videoId={item.id.videoId}
                       title={item.snippet.title}
                       channel={item.snippet.channelTitle}
                      />
                  }}
                  keyExtractor={item=>item.id.videoId} */
                  />

            </View>
      )
}

export default SearchScreen;
const styles = StyleSheet.create({
      outter_header: {
            flex: 1,
            marginTop: Constant.statusBarHeight,
      },
      inner_header: {
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            elevation: 5,

      },

      back_icon_box: {
            width: 40,
            height: 40,
            borderRadius: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 5
      },
      input: {
            flex: 1,
            height: 40,
            backgroundColor: '#e4e6eb',
            borderRadius: 16,
            paddingHorizontal: 16,
            fontSize: 15
          },
})