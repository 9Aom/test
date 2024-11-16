import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button, Alert, ScrollView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const MainOne = () => {
    return (
        <View style={styles.main} >
            <View>
                <Text style={[styles.textStyle]}>𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃</Text>
                <Text style={[styles.textStyle, styles.textStyleColor]} >Software</Text>
                <Text style={[styles.textStyle]} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque laudantium, rerum est harum itaque ad sint voluptates. Vel doloremque a dolore.</Text>
                <Text style={[styles.textStyle, styles.textStyleColor]} >#Tag</Text>
                <Text style={[styles.textStyle, styles.textStyleColor]} >URL : https://www.instagram.com</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }} >
                <Text onPress={() => console.log('!!')} style={[styles.btnStyleFollow]} >Follow</Text>
                <Text onPress={() => console.log('!')} style={[styles.btnStyleFollow, styles.btnStyleMessage]} >Message</Text>
            </View>

            <View style={{ marginTop: 15, flexDirection: 'row' }} >
                <ScrollView horizontal={true} >
                    <TouchableOpacity>
                        <Image source={{
                            uri: 'https://instagram.fbkk23-1.fna.fbcdn.net/v/t51.2885-19/458383742_542224048162347_174647808083836844_n.jpg?_nc_ht=instagram.fbkk23-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dJIoTqwGeEMQ7kNvgEbXXIp&_nc_gid=b6cfcd17efa241ed987f03d4ffa36afa&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYD4M7E9JyoN4DnYXQzMi4l7EKMei7JaRitONsXqfezUcg&oe=673C133D&_nc_sid=7d3ac5'
                        }}
                            style={styles.content2ProfileOuterCircle} />
                        <Text style={{
                            textAlign: 'center', fontWeight:'500'
                        }} >highlight</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Image source={{
                            uri: 'https://instagram.fbkk23-1.fna.fbcdn.net/v/t51.2885-19/458383742_542224048162347_174647808083836844_n.jpg?_nc_ht=instagram.fbkk23-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dJIoTqwGeEMQ7kNvgEbXXIp&_nc_gid=b6cfcd17efa241ed987f03d4ffa36afa&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYD4M7E9JyoN4DnYXQzMi4l7EKMei7JaRitONsXqfezUcg&oe=673C133D&_nc_sid=7d3ac5'
                        }}
                            style={styles.content2ProfileOuterCircle} />
                        <Text style={{
                            textAlign: 'center', fontWeight:'500'
                        }} >highlight</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={{
                            uri: 'https://instagram.fbkk23-1.fna.fbcdn.net/v/t51.2885-19/458383742_542224048162347_174647808083836844_n.jpg?_nc_ht=instagram.fbkk23-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dJIoTqwGeEMQ7kNvgEbXXIp&_nc_gid=b6cfcd17efa241ed987f03d4ffa36afa&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYD4M7E9JyoN4DnYXQzMi4l7EKMei7JaRitONsXqfezUcg&oe=673C133D&_nc_sid=7d3ac5'
                        }}
                            style={styles.content2ProfileOuterCircle} />
                        <Text style={{
                            textAlign: 'center', fontWeight:'500'
                        }} >highlight</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={{
                            uri: 'https://instagram.fbkk23-1.fna.fbcdn.net/v/t51.2885-19/458383742_542224048162347_174647808083836844_n.jpg?_nc_ht=instagram.fbkk23-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dJIoTqwGeEMQ7kNvgEbXXIp&_nc_gid=b6cfcd17efa241ed987f03d4ffa36afa&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYD4M7E9JyoN4DnYXQzMi4l7EKMei7JaRitONsXqfezUcg&oe=673C133D&_nc_sid=7d3ac5'
                        }}
                            style={styles.content2ProfileOuterCircle} />
                        <Text style={{
                            textAlign: 'center', fontWeight:'500'
                        }} >highlight</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={{
                            uri: 'https://instagram.fbkk23-1.fna.fbcdn.net/v/t51.2885-19/458383742_542224048162347_174647808083836844_n.jpg?_nc_ht=instagram.fbkk23-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dJIoTqwGeEMQ7kNvgEbXXIp&_nc_gid=b6cfcd17efa241ed987f03d4ffa36afa&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYD4M7E9JyoN4DnYXQzMi4l7EKMei7JaRitONsXqfezUcg&oe=673C133D&_nc_sid=7d3ac5'
                        }}
                            style={styles.content2ProfileOuterCircle} />
                        <Text style={{
                            textAlign: 'center', fontWeight:'500'
                        }} >highlight</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={{
                            uri: 'https://instagram.fbkk23-1.fna.fbcdn.net/v/t51.2885-19/458383742_542224048162347_174647808083836844_n.jpg?_nc_ht=instagram.fbkk23-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dJIoTqwGeEMQ7kNvgEbXXIp&_nc_gid=b6cfcd17efa241ed987f03d4ffa36afa&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYD4M7E9JyoN4DnYXQzMi4l7EKMei7JaRitONsXqfezUcg&oe=673C133D&_nc_sid=7d3ac5'
                        }}
                            style={styles.content2ProfileOuterCircle} />
                        <Text style={{
                            textAlign: 'center', fontWeight:'500'
                        }} >highlight</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={{
                            uri: 'https://instagram.fbkk23-1.fna.fbcdn.net/v/t51.2885-19/458383742_542224048162347_174647808083836844_n.jpg?_nc_ht=instagram.fbkk23-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dJIoTqwGeEMQ7kNvgEbXXIp&_nc_gid=b6cfcd17efa241ed987f03d4ffa36afa&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYD4M7E9JyoN4DnYXQzMi4l7EKMei7JaRitONsXqfezUcg&oe=673C133D&_nc_sid=7d3ac5'
                        }}
                            style={styles.content2ProfileOuterCircle} />
                        <Text style={{
                            textAlign: 'center', fontWeight:'500'
                        }} >highlight</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={{
                            uri: 'https://instagram.fbkk23-1.fna.fbcdn.net/v/t51.2885-19/458383742_542224048162347_174647808083836844_n.jpg?_nc_ht=instagram.fbkk23-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dJIoTqwGeEMQ7kNvgEbXXIp&_nc_gid=b6cfcd17efa241ed987f03d4ffa36afa&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYD4M7E9JyoN4DnYXQzMi4l7EKMei7JaRitONsXqfezUcg&oe=673C133D&_nc_sid=7d3ac5'
                        }}
                            style={styles.content2ProfileOuterCircle} />
                        <Text style={{
                            textAlign: 'center', fontWeight:'500'
                        }} >highlight</Text>
                    </TouchableOpacity>

                </ScrollView>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        margin: 'auto',
        marginLeft: 20,
        width: '90%',
        height: 'auto'
    },
    textStyle: {
        flexWrap: 'wrap',
        textAlign: 'auto',
        left: '4%'
    },
    textStyleColor: {
        color: '#4778ff'
    },
    btnStyleFollow: {
        backgroundColor: '#47a3ff',
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '45%',
        padding: '10',
        borderRadius: 25 / 2,
        cursor: 'pointer'
    },
    btnStyleMessage: {
        backgroundColor: '#575757'
    },
    content2ProfileOuterCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#c7c7c7',
        margin: '4',
    },
})

export default MainOne