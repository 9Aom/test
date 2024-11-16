import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button, Alert, ScrollView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

const MainSec = () => {
  return (
    <View>
      <View style={{marginTop: '10',flexDirection: 'row',flex: 1,justifyContent: 'space-around', marginBottom: '', marginHorizontal: 15}} >
        <TouchableOpacity  >
        <FontAwesome6 style={[styles.container]} name="border-all" size={40}  />
        </TouchableOpacity>
        <TouchableOpacity  >
        <FontAwesome6 style={[styles.noUnderLine]} name="clapperboard" size={40}  />
        </TouchableOpacity>
        <TouchableOpacity  >
        <MaterialIcons style={[styles.noUnderLine]} name='assignment-ind' size={40} />
        </TouchableOpacity>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 4}} >
    <View style={[styles.BLock1]} ></View>
    <View style={[styles.BLock1]} ></View>
    <View style={[styles.BLock1]} ></View>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 4}} >
    <View style={[styles.BLock1]} ></View>
    <View style={[styles.BLock1]} ></View>
    <View style={[styles.BLock1]} ></View>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 4}} >
    <View style={[styles.BLock1]} ></View>
    <View style={[styles.BLock1]} ></View>
    <View style={[styles.BLock1]} ></View>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 4}} >
    <View style={[styles.BLock1]} ></View>
    <View style={[styles.BLock1]} ></View>
    <View style={[styles.BLock1]} ></View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create ({
  container: {
    textAlign: 'center',
    borderBottomWidth: 1,
    width: '70%',
    margin: '10%',
    marginTop: '10%'
  },
  noUnderLine: {
    width: '80%',
    margin: '10%',
    marginTop: '10%',
    textAlign: 'center',
  },
  BLock1: {
    width: '32%',
    aspectRatio: 1,
    backgroundColor: '#d6d6d6',
  }
})

export default MainSec