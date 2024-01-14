import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableHighlight } from 'react-native';
import BottomNav from '../components/bottomNavBar'
import Icon from 'react-native-vector-icons/FontAwesome';
import Bell from 'react-native-vector-icons/AntDesign'
import { useData } from '../apiHooks/api';


export default function Notification({ navigation }) {
    const { isLoading, notifications } = useData()
    return (
        <>
            <View style={styles.NotificationWrapper}>
                <View style={styles.NotificationMain}>
                    <ScrollView>
                        <View style={styles.header}>
                            <View style={styles.NotificationHeader}>
                                <Icon name="angle-left" size={30} onPress={() => { navigation.navigate('Home') }} />
                                <Text style={styles.NotificationText}>
                                    Notifications
                                </Text>
                            </View>
                            <View style={styles.menuIcon}>
                                <Bell name="bells" size={30} />
                            </View>
                        </View>
                        <View style={styles.NotificationDataWrapper}>
                            {isLoading ?  <Text>Loading Data ......</Text> : (
                                notifications?.map((item,index) => {
                                    return (
                                        <>
                                            <View style={styles.NotificationData} key={index+1} >
                                                <Text style={styles.NotificationDataText} key={index+1}>
                                                    {item}
                                                </Text>
                                            </View>
                                        </>
                                    )
                                })

                            )}
                        </View>
                    </ScrollView>
                    <BottomNav navigation={navigation} />
                </View>
            </View>

        </>
    );
}

const styles = StyleSheet.create({

    NotificationWrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
    },
    NotificationMain: {
        width: '100%',
        height: "100%",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    NotificationHeader: {
        flexDirection: 'row',
        gap: 10,
    },
    menuIcon: {
        backgroundColor: '#EDEDF1',
        borderRadius: 50,
        width: 40,
        height: 40,
        paddingTop: 3,
        paddingLeft: 5,
    },
    NotificationText: {
        color: '#262626',

        fontWeight: "400",
        fontSize: 16,
        fontStyle: 'normal',
        marginTop: 5,
    },
    NotificationData: {
        backgroundColor: '#DCD9EF',
        width: '100%',
        padding: 15,
        borderRadius: 20,
        marginTop: 10,
    },
    userInfo: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,

    },
    NotificationDataText: {
        color: '#666',
        fontWeight: '400',
    },
    QuickLinkText: {

        color: '#666',
        textAlign: 'center',
        fontWeight: '400',

    },
    QuickLinkIcons: {

        backgroundColor: '#978CD0',
        borderRadius: 50,
        width: 40,
        height: 40,
        paddingTop: 3,
        paddingLeft: 5,
        marginBottom: 10,

    },
    Events: {

        marginTop: 20,

    },
    EventsText: {
        color: '#08150E',

        fontWeight: "500",
        marginBottom: 10,
        fontSize: 16,
    },
    EventsDay: {
        color: '#08150E',

        fontWeight: "500",
        fontSize: 25,
        textAlign: 'center',
        marginTop: -5,

    },
    EventsMonth: {
        marginTop: -5,
        color: '#08150E',

        fontWeight: "400",
        fontSize: 10,
        textAlign: 'center'

    },


    EventsCardsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#DCD9EF',
        width: '100%',
        height: 50,
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
    },
    EventsIcon_Name: {
        flexDirection: 'row',
    },
    EventsName: {

        color: '#08150E',

        fontWeight: "500",
        marginTop: 5,
        fontSize: 14,

    },
});