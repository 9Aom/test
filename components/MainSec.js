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
    <View style={[styles.BLock1]} > <Image source={{uri: 'https://i.pinimg.com/736x/99/fc/35/99fc35d65c6c1804cef06aa31dbdc892.jpg'}} width={"100%"} height={"100%"} /> </View>
    <View style={[styles.BLock1]} > <Image source={{uri: 'https://i.pinimg.com/736x/c2/43/27/c24327307b0ad1d1295419709b854115.jpg'}} width={"100%"} height={"100%"} /> </View>
    <View style={[styles.BLock1]} > <Image source={{uri: 'https://i.pinimg.com/474x/01/e6/21/01e621158668a4b8b7c92f1d1671bd43.jpg'}} width={"100%"} height={"100%"} /> </View>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 4}} >
    <View style={[styles.BLock1]} > <Image source={{uri: 'https://i.pinimg.com/736x/0e/4f/dc/0e4fdce8ac22e09688c580e5bc4dcd7d.jpg'}} width={"100%"} height={"100%"} /> </View>
    <View style={[styles.BLock1]} > <Image source={{uri: 'https://i.pinimg.com/736x/21/ea/3d/21ea3dfa1f5e723eb92d15647fccd02c.jpg'}} width={"100%"} height={"100%"} /> </View>
    <View style={[styles.BLock1]} > <Image source={{uri: 'https://i.pinimg.com/736x/39/b8/80/39b880fff49f6ada33e058efad96cee3.jpg'}} width={"100%"} height={"100%"} /> </View>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 4}} >
    <View style={[styles.BLock1]} > <Image source={{uri: 'https://i.pinimg.com/736x/12/51/9b/12519be4ed98a7a93fbf7d8c862cb220.jpg'}} width={"100%"} height={"100%"} /> </View>
    <View style={[styles.BLock1]} > <Image source={{uri: 'https://i.pinimg.com/736x/ce/2c/e1/ce2ce138b7f847507872d7a2e0da0e46.jpg'}} width={"100%"} height={"100%"} /> </View>
    <View style={[styles.BLock1]} > <Image source={{uri: 'https://i.pinimg.com/474x/c5/94/3f/c5943fb980b4ec8c3381a29de7f9497a.jpg'}} width={"100%"} height={"100%"} /> </View>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 4}} >
    <View style={[styles.BLock1]} > <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbzbhB5TTNpxJ-MDxIF4MEwDYE_11h_-K4A&s'}} width={"100%"} height={"100%"} /> </View>
    <View style={[styles.BLock1]} > <Image source={{uri: 'https://i.pinimg.com/736x/c7/23/c3/c723c35cd31618b1b08aa110742d947d.jpg'}} width={"100%"} height={"100%"} /> </View>
    <View style={[styles.BLock1]} > <Image source={{uri: 'https://i.pinimg.com/736x/2e/30/2d/2e302de0ac09bc7085c45f03abc72472.jpg'}} width={"100%"} height={"100%"} /> </View>
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