import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Modal } from 'react-native-paper';

function ModalComponent(props) {

    const [message] = useState(props.message);
    const [show, setShow] = useState(props.show);


    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 3000);
    });
    return ( <
        View style = { styles.container } >
        <
        Modal animationType = "slide"
        transparent = { false }
        visible = { show } >
        <
        View style = { styles.modalView } >
        <
        ScrollView >
        <
        View style = { styles.item } >


        <
        Text > Thanks
        for all the chances, this is gonna be a great mopdal < /Text> <
        Text > Thanks < /Text> <
        Text > Thanks < /Text> <
        /View>


        <
        /ScrollView>



        <
        /View>

        <
        /Modal> <
        /View>
    );
}
export default ModalComponent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -1200

    },
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
    },
    modalButtons: {
        flexDirection: 'row',

    },
    textStyleSave: {
        backgroundColor: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 20

    },
    textStyleCancel: {
        backgroundColor: 'white',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    item: {
        marginTop: 3,
        padding: 10,
        backgroundColor: 'whitesmoke',
        fontSize: 40,

    },

})