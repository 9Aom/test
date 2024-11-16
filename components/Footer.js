import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Button, Alert, ScrollView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={[styles.TextStyle]} >
                <FontAwesome6 name='house' color={"#fff"} size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.TextStyle]}>
                <FontAwesome6 name='magnifying-glass' color={"#fff"} size={32} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.TextStyle]}>
                <FontAwesome6 name='square-plus' color={"#fff"} size={35} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.TextStyle]}>
                <FontAwesome6 name='clapperboard' color={"#fff"} size={32} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.TextStyle]}>
                <Image source={{uri: 'https://i.pinimg.com/736x/49/ce/d2/49ced2e29b6d4945a13be722bac54642.jpg'}} width={45} height={45} style={{borderRadius: 100/2}} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#333',
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})

export default Footer