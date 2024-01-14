import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/Feather';


export default function BottomNav({ navigation }) {

    return (
        <>
            <View style={styles.NavWrapper}>
                <View style={styles.NavMain}>
                    <View >
                        <Icon name='home' size={30} onPress={() => { navigation.navigate('Home') }} />
                    </View>
                    <View>
                        <Icon name='calendar' size={30} />
                    </View>
                    <View >
                        <Icon1 name='user' size={30} onPress={() => { navigation.navigate('Profile') }} />
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    NavWrapper: {
        marginBottom: 10,
    },
    NavMain: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 10,
        backgroundColor: '#fff',
        height: 60,
        padding: 15,
        borderRadius: 20
    }

});