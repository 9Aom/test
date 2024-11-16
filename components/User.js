import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const User = () => {

    const [count, setCount] = useState(0);
    const [minus, setMinus] =useState(0);
        const increaseCount = () => {
            setCount(count + 1);
            setMinus(minus - 1)
        };

    const [buttonText, setBtnText] = useState("Following")
    const handleText = () => {
        setBtnText('Follow');
    }

    return (
        <View style={{ backgroundColor: '#fff' }} >
            <View>
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

                <View style={styles.content2} >
                    {/* profile */}
                    <TouchableOpacity>
                        <View>
                            <Image source={{
                                uri: 'https://i.imgur.com/JQuoG6Z.jpeg'
                            }}
                                style={{width: 100, height: 100, borderRadius: 100/2, margin: 'auto', marginLeft: ''}} />
                        </View>
                    </TouchableOpacity>
                    
                    {/* profile */}
                    <View style={{ flex: 1, flexDirection: 'row',alignItems: 'center', right: 20 }} >
                        <View style={{ margin: 'auto', left: 35, alignItems: 'center' }} >
                            <Text style={styles.content2TextProfile} >12</Text>
                            <Text>posts</Text>
                        </View>
                        <View style={{ margin: 'auto', left: 35, alignItems: 'center' }} >
                            <Text style={styles.content2TextProfile} >{count}</Text>
                            <Text>followers</Text>
                        </View>
                        <View style={{ margin: 'auto', left: 35, alignItems: 'center' }} >
                            <Text style={styles.content2TextProfile} >00</Text>
                            <Text>following</Text>
                        </View>
                    </View>
                </View>

                <StatusBar style="auto" />
            </View>
            <View>
                <Text style={[styles.textStyle]}>𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃</Text>
                <Text style={[styles.textStyle, styles.textStyleColor]} >Software</Text>
                <Text style={[styles.textStyle]} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque laudantium, rerum est harum itaque ad sint voluptates. Vel doloremque a dolore.</Text>
                <Text style={[styles.textStyle, styles.textStyleColor]} >#Tag</Text>
                <Text style={[styles.textStyle, styles.textStyleColor]} >URL : https://www.instagram.com</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }} >
                <Text onPress={increaseCount} onPressIn={handleText} style={[styles.btnStyleFollow]} >{buttonText}
                </Text>
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
    },
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
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#c7c7c7',
        margin: '4',
    },
});

export default User;