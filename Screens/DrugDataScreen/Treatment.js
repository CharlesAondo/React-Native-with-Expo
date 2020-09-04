import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {AuthContext} from '../../components/context'

const Treatments = ({route,navigation,props}) => {
      const  data  = React.useContext(AuthContext);
      return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text>

                       {data.reversal_agent}
                        
                        </Text>
            </View>
      )
}
export default Treatments;