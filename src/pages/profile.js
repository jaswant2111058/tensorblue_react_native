import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableHighlight } from 'react-native';
import BottomNav from '../components/bottomNavBar'
import Icon from 'react-native-vector-icons/FontAwesome';
import Bell from 'react-native-vector-icons/AntDesign'
import { useData } from '../apiHooks/api';


export default function Profile({ navigation }) {

    const { user, isLoading } = useData()

    return (
        <>
            <View style={styles.profileWrapper}>
                <View style={styles.profileMain}>
                    <ScrollView>
                        <View style={styles.header}>
                            <View style={styles.profileHeader}>
                                <Icon name="angle-left" size={30} onPress={() => { navigation.navigate('Home') }} />
                                <Text style={styles.profileText}>
                                    Profile
                                </Text>
                            </View>
                            <View style={styles.menuIcon}>
                                <Bell name="bells" size={30} onPress={() => { navigation.navigate('Notification') }} />
                            </View>
                        </View>
                        <View style={styles.user}>
                            <Text style={styles.userName}>
                                {isLoading ? "Loading Details..." : user.name}
                            </Text>
                            <Image
                                style={styles.userImage}
                                source={require('../../assets/images/dp.jpg')}
                            />
                        </View>
                        <View style={styles.userInfoWrapper}>

                            <View style={styles.userInfo}>
                                <Text style={styles.userInfoText}>
                                    Student ID Number:
                                </Text>
                                <Text style={styles.userInfoText}>
                                    {isLoading ? "Loading Details..." : user.Student_ID_Number}
                                </Text>
                            </View>
                            <View style={styles.userInfo}>
                                <Text style={styles.userInfoText}>
                                    Class/Grade:
                                </Text>
                                <Text style={styles.userInfoText}>
                                    {isLoading ? "Loading Details..." : user.Grade}
                                </Text>
                            </View>
                            <View style={styles.userInfo}>
                                <Text style={styles.userInfoText}>
                                    Contact Number:
                                </Text>
                                <Text style={styles.userInfoText}>
                                    {isLoading ? "Loading Details..." : user.Contact_Number}
                                </Text>
                            </View>
                            <View style={styles.userInfo}>
                                <Text style={styles.userInfoText}>
                                    Email Address:
                                </Text>
                                <Text style={styles.userInfoText}>
                                    {isLoading ? "Loading Details..." : user.Email_Address}
                                </Text>
                            </View>
                            <View style={styles.userInfo}>
                                <Text style={styles.userInfoText}>
                                    Parent/Guardian:
                                </Text>
                                <Text style={styles.userInfoText}>
                                {isLoading?"Loading Details...":user.Guardian}
                                </Text>
                            </View>
                            <View style={styles.userInfo}>
                                <Text style={styles.userInfoText}>
                                    Parent Contact:
                                </Text>
                                <Text style={styles.userInfoText}>
                                {isLoading?"Loading Details...":user.Parent_Contact}
                                </Text>
                            </View>
                            <View style={styles.userInfo}>
                                <Text style={styles.userInfoText}>
                                    Address:
                                </Text>
                                <Text style={styles.userInfoText}>
                                {isLoading?"Loading Details...":user.Address}
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <BottomNav navigation={navigation} />
                </View>
            </View>

        </>
    );
}

const styles = StyleSheet.create({

    profileWrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
    },
    profileMain: {
        width: '100%',
        height: "100%",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profileHeader: {
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
    profileText: {
        color: '#262626',

        fontWeight: "400",
        fontSize: 16,
        fontStyle: 'normal',
        marginTop: 5,
    },
    userName: {

        color: '#262626',

        fontWeight: "500",
        marginBottom: 10,
        fontSize: 25,
        fontStyle: 'normal'

    },
    user: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    userImage: {
        width: 55,
        height: 55,
        borderRadius: 50,
    },
    userInfoWrapper: {
        backgroundColor: '#DCD9EF',
        width: '100%',
        padding: 15,
        borderRadius: 20,
        marginTop: 20,

    },
    userInfo: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,

    },
    userInfoText: {
        color: '#666',
        textAlign: 'center',
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