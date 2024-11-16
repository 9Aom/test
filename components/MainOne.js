import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button, Alert, ScrollView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


const MainOne = () => {
        const [count, setCount] = useState(0);
    
        const increaseCount = () => {
            setCount(count + 1);
        };
    return (
        <View style={styles.main} >
            

        </View>
    )
}
const styles = StyleSheet.create({
    
})

export default MainOne