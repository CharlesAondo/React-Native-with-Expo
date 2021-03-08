import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { Modal } from 'react-native-paper';

function ModalComponent(props) {

      const [message] = useState(props.message);
      const [show, setShow] = useState(props.show);

      useEffect(() => {
            setTimeout(() => {
                  setShow(false);
            }, 3000);
      });

      return (
            <View style={{ flex: 1 }}>

                  <Modal isVisible={show}>
                        <View style={{ flex: 1 }}>
                              <Text>{message}</Text>
                        </View>
                  </Modal>
            </View>
      );
}
export default ModalComponent;
const styles = StyleSheet.create({

      modalView: {
            margin: 20,
            backgroundColor: 'whitesmoke',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
      }

})