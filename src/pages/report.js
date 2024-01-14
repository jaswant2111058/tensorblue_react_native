import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableHighlight } from 'react-native';
import BottomNav from '../components/bottomNavBar'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Feather';
import Bell from 'react-native-vector-icons/AntDesign'


export default function Report({ navigation }) {

    return (
        <>
            <View style={styles.reportWrapper}>
                <View style={styles.reportMain}>
                    <ScrollView>
                        <View style={styles.header}>
                            <View style={styles.reportHeader}>
                                <Icon name="angle-left" size={30} onPress={() => { navigation.navigate('Home') }} />
                                <Text style={styles.reportText}>
                                    Report
                                </Text>
                            </View>
                            <View style={styles.menuIcon}>
                                <Bell name="bells" size={30} />
                            </View>
                        </View>
                        <View style={styles.reports}>
                            <View style={styles.reportName}>
                                <View style={styles.reportIcon}>
                                    <Icon1 name="file-1" size={25} color={"#fff"} />
                                </View>
                                <Text style={styles.reportsText}>
                                    qwer dfghj.pdf
                                </Text>
                            </View>
                            <View>
                                <Icon2 name="download-cloud" size={30} />
                            </View>
                        </View>
                        <View style={styles.reports}>
                            <View style={styles.reportName}>
                                <View style={styles.reportIcon}>
                                    <Icon1 name="file-1" size={25} color={"#fff"} />
                                </View>
                                <Text style={styles.reportsText}>
                                    qwer dfghj.pdf
                                </Text>
                            </View>
                            <View>
                                <Icon2 name="download-cloud" size={30} />
                            </View>
                        </View>
                        <View style={styles.reports}>
                            <View style={styles.reportName}>
                                <View style={styles.reportIcon}>
                                    <Icon1 name="file-1" size={25} color={"#fff"} />
                                </View>
                                <Text style={styles.reportsText}>
                                    qwer dfghj.pdf
                                </Text>
                            </View>
                            <View>
                                <Icon2 name="download-cloud" size={30} />
                            </View>
                        </View>
                        <View style={styles.reports}>
                            <View style={styles.reportName}>
                                <View style={styles.reportIcon}>
                                    <Icon1 name="file-1" size={25} color={"#fff"} />
                                </View>
                                <Text style={styles.reportsText}>
                                    qwer dfghj.pdf
                                </Text>
                            </View>
                            <View>
                                <Icon2 name="download-cloud" size={30} />
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

    reportWrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
    },
    reportMain: {
        width: '100%',
        height: "100%",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    reportHeader: {
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
    reportText: {
        color: '#262626',
        fontFamily: 'Poppins',
        fontWeight: "400",
        fontSize: 16,
        fontStyle: 'normal',
        marginTop: 5,
    },
    reportsText: {
        color: '#262626',
        fontFamily: 'Poppins',
        fontWeight: "400",
        fontSize: 14,
        fontStyle: 'normal',
        marginTop: 5,
    },
    reports: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        height: 65,
        padding: 10,
        borderRadius: 10,
        borderColor: '#9E77ED',
        marginTop:25,

    },
    reportName: {
        flexDirection: 'row',
        gap: 10,
    },
    reportIcon: {
        backgroundColor: '#978CD0',
        borderRadius: 50,
        width: 45,
        height: 45,
        paddingTop: 7,
        paddingLeft: 13,
    }
});