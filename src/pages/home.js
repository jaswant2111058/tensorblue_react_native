import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Bell from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/FontAwesome';
import ProgressCircle from '../components/progressCircle';
import BottomNav from '../components/bottomNavBar'

export default function Home({ navigation }) {

    return (
        <>
            <View style={styles.homeWrapper}>
                <View style={styles.homeMain}>
                    <View style={styles.header}>
                        <View style={styles.menuIcon}>
                            <Icon name="menu-outline" size={30} />
                        </View>
                        <View style={styles.menuIcon}>
                            <Bell name="bells" size={30} />
                        </View>
                    </View>
                    <ScrollView>
                        <View>
                            <Text style={styles.welcome}>
                                Welcome Back,
                            </Text>
                            <Text style={styles.userName}>
                                Jassi
                            </Text>
                        </View>
                        <View>
                            <ProgressCircle />
                        </View>

                        <View style={styles.QuickLink}>
                            <Text style={styles.QuickLink_Text}>
                                Quick Link
                            </Text>
                            <View style={styles.QuickLinkCard}>
                                <View style={styles.QuickLinkReport}>
                                    <View style={styles.QuickLinkIcons}>
                                        <Icon name="menu-outline" color={'#fff'} size={30} />
                                    </View>
                                    <Text style={styles.QuickLinkText}>
                                        Report
                                    </Text>
                                </View>
                                <View style={styles.QuickLinkSyllabus}>
                                    <View style={styles.QuickLinkIcons}>
                                        <Icon color={'#fff'} name="menu-outline" size={30} />
                                    </View>
                                    <Text style={styles.QuickLinkText}>
                                        Syllabus
                                    </Text>
                                </View>
                                <View style={styles.QuickLinkUnitTest}>
                                    <View style={styles.QuickLinkIcons}>
                                        <Icon color={'#fff'} name="menu-outline" size={30} />
                                    </View>
                                    <Text style={styles.QuickLinkText}>
                                        Unit Test
                                    </Text>
                                </View>
                                <View style={styles.QuickLinkPayment}>
                                    <View style={styles.QuickLinkIcons}>
                                        <Icon color={'#fff'} name="menu-outline" size={30} />
                                    </View>
                                    <Text style={styles.QuickLinkText}>
                                        Payment
                                    </Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.Events}>
                            <Text style={styles.EventsText}>
                                Upcoming Events (07)
                            </Text>
                            <View style={styles.EventsCardsWrapper}>
                                <View style={styles.EventsIcon_Name}>
                                    <View style={styles.EventsIcon}>
                                        <Icon name="menu-outline" size={30} />
                                    </View>
                                    <View>
                                        <Text style={styles.EventsName}>
                                            Science Fair Showcase
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.EventsDate}>
                                    <View>
                                        <Text style={styles.EventsMonth}>
                                            Jan
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.EventsDay}>
                                            18
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.EventsCardsWrapper}>
                                <View style={styles.EventsIcon_Name}>
                                    <View style={styles.EventsIcon}>
                                        <Icon name="menu-outline" size={30} />
                                    </View>
                                    <View>
                                        <Text style={styles.EventsName}>
                                            Science Fair Showcase
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.EventsDate}>
                                    <View>
                                        <Text style={styles.EventsMonth}>
                                            Jan
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.EventsDay}>
                                            18
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.EventsCardsWrapper}>
                                <View style={styles.EventsIcon_Name}>
                                    <View style={styles.EventsIcon}>
                                        <Icon name="menu-outline" size={30} />
                                    </View>
                                    <View>
                                        <Text style={styles.EventsName}>
                                            Science Fair Showcase
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.EventsDate}>
                                    <View>
                                        <Text style={styles.EventsMonth}>
                                            Jan
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.EventsDay}>
                                            18
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.EventsCardsWrapper}>
                                <View style={styles.EventsIcon_Name}>
                                    <View style={styles.EventsIcon}>
                                        <Icon name="menu-outline" size={30} />
                                    </View>
                                    <View>
                                        <Text style={styles.EventsName}>
                                            Science Fair Showcase
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.EventsDate}>
                                    <View>
                                        <Text style={styles.EventsMonth}>
                                            Jan
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.EventsDay}>
                                            18
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <BottomNav />
                </View>
               
            </View>

        </>
    );
}

const styles = StyleSheet.create({

    homeWrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
    },
    homeMain: {
        width: '100%',
        height: "100%",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuIcon: {
        backgroundColor: '#EDEDF1',
        borderRadius: 50,
        width: 40,
        height: 40,
        paddingTop: 3,
        paddingLeft: 5,
    },
    welcome: {

        color: '#262626',
        fontFamily: 'Poppins',
        fontWeight: "400",
        fontSize: 12,
        fontStyle: 'normal',
        marginTop: 20,
    },
    userName: {

        color: '#262626',
        fontFamily: 'Poppins',
        fontWeight: "500",
        marginBottom: 10,
        fontSize: 25,
        fontStyle: 'normal'

    },


    QuickLink: {
        marginTop: 20,
    },
    QuickLink_Text: {
        color: '#08150E',
        fontFamily: 'Poppins',
        fontWeight: "500",
        marginBottom: 10,
        fontSize: 16,
    },
    QuickLinkCard: {
        backgroundColor: '#DCD9EF',
        width: '100%',
        padding: 15,
        height: 100,
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'space-around',
        borderRadius: 20,

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
        fontFamily: 'Poppins',
        fontWeight: "500",
        marginBottom: 10,
        fontSize: 16,
    },
    EventsDay: {
        color: '#08150E',
        fontFamily: 'Poppins',
        fontWeight: "500",
        fontSize: 25,
        textAlign: 'center',
        marginTop: -5,

    },
    EventsMonth: {
        marginTop: -5,
        color: '#08150E',
        fontFamily: 'Poppins',
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
        fontFamily: 'Poppins',
        fontWeight: "500",
        marginTop: 5,
        fontSize: 14,

    },
});