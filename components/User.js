import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const User = () => {
    return (
        <View style={{ backgroundColor: '#fff' }} >
            <View>
                {/* --------------------------------------------------------------------------------------------------------- */}
                <View>
                    <View style={styles.content1} >
                        <TouchableOpacity style={{ marginTop: 'auto', marginRight: 40 }} >
                            <FontAwesome6 name="arrow-left" color="#000" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.maR} >
                            <Text style={styles.textAc} >aommm_dev</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ left: '15%' }} >
                            <FontAwesome6 name="paper-plane" color="#000" size={30} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ left: '25%' }} >
                            <FontAwesome6 name="ellipsis-vertical" color="#000" size={30} />
                        </TouchableOpacity>

                    </View>
                </View>
                {/* --------------------------------------------------------------------------------------------------------- */}

                {/* --------------------------------------------------------------------------------------------------------- */}

                <View style={styles.content2} >
                    {/* profile */}
                    <TouchableOpacity>
                        <View>
                            <Image source={{
                                uri: 'https://instagram.fbkk23-1.fna.fbcdn.net/v/t51.2885-19/458383742_542224048162347_174647808083836844_n.jpg?_nc_ht=instagram.fbkk23-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dJIoTqwGeEMQ7kNvgEbXXIp&_nc_gid=b6cfcd17efa241ed987f03d4ffa36afa&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYD4M7E9JyoN4DnYXQzMi4l7EKMei7JaRitONsXqfezUcg&oe=673C133D&_nc_sid=7d3ac5'
                            }}
                                style={styles.content2ProfileOuterCircle} />
                        </View>
                    </TouchableOpacity>
                    {/* profile */}
                    <View style={{ flex: 1, flexDirection: 'row',alignItems: 'center', right: 20 }} >
                        <View style={{ margin: 'auto', left: 35, alignItems: 'center' }} >
                            <Text style={styles.content2TextProfile} >12</Text>
                            <Text>posts</Text>
                        </View>
                        <View style={{ margin: 'auto', left: 35, alignItems: 'center' }} >
                            <Text style={styles.content2TextProfile} >00</Text>
                            <Text>followers</Text>
                        </View>
                        <View style={{ margin: 'auto', left: 35, alignItems: 'center' }} >
                            <Text style={styles.content2TextProfile} >00</Text>
                            <Text>following</Text>
                        </View>
                    </View>
                </View>
                {/* --------------------------------------------------------------------------------------------------------- */}
                {/* --------------------------------------------------------------------------------------------------------- */}

                <StatusBar style="auto" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    content1: {
        flexDirection: 'row',
        justifyContent: 'start',
        marginLeft: '30'
    },
    content2: {
        marginTop: '2%',
        padding: 10,
        flexDirection: 'row',
    },
    content2ProfileOuterCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#c7c7c7',
    },
    content2TextProfile: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    textAc: {
        color: '#000',
        fontSize: 30
    },
    Top: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    main1: {
        backgroundColor: 'red',
        width: '100%',
    }
});

export default User;