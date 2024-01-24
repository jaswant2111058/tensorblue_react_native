import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackPramList } from "../../App"
import Icon from 'react-native-vector-icons/Ionicons';
import Bell from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Fontisto';
import ProgressCircle from '../components/progressCircle';
import BottomNav from '../components/bottomNavBar';
import { useData } from '../apiHooks/api';


type HomeProps = NativeStackScreenProps<RootStackPramList, "Home">

const Home = ({ navigation }: HomeProps) => {
  const { user, isLoading } = useData();
  return (
    <>
      <View style={styles.homeWrapper}>
        <View style={styles.homeMain}>
          <View style={styles.header}>
            <View style={styles.menuIcon}>
              <Icon color="black" name="menu-outline" size={30} />
            </View>
            <View style={styles.menuIcon}>
              <Bell
                color="black"
                name="bells"
                size={30}
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.welcome}>Welcome Back,</Text>
              <Text style={styles.userName}>
                {isLoading ? 'Loading Details...' : user.name}
              </Text>
            </View>
            <View>
              <ProgressCircle />
            </View>

            <View style={styles.QuickLink}>
              <Text style={styles.QuickLink_Text}>Quick Link</Text>
              <View style={styles.QuickLinkCard}>
                <View >
                  <View style={styles.QuickLinkIcons}>
                    <Bell
                      name="profile"
                      color={'#fff'}
                      size={30}
                      onPress={() => {
                        navigation.navigate('Report');
                      }}
                    />
                  </View>
                  <Text style={styles.QuickLinkText}>Report</Text>
                </View>
                <View >
                  <View style={styles.QuickLinkIcons}>
                    <Bell color={'#fff'} name="filetext1" size={30} />
                  </View>
                  <Text style={styles.QuickLinkText}>Syllabus</Text>
                </View>
                <View >
                  <View style={styles.QuickLinkIcons}>
                    <Icon2 color={'#fff'} name="test-tube" size={30} />
                  </View>
                  <Text style={styles.QuickLinkText}>Unit Test</Text>
                </View>
                <View>
                  <View style={styles.QuickLinkIcons}>
                    <Icon color={'#fff'} name="wallet-outline" size={30} />
                  </View>
                  <Text style={styles.QuickLinkText}>Payment</Text>
                </View>
              </View>
            </View>
            <View style={styles.Events}>
              <Text style={styles.EventsText}>Upcoming Events (07)</Text>
              <View style={styles.EventsCardsWrapper}>
                <View style={styles.EventsIcon_Name}>
                  <View>
                    <Bell color="black" name="filetext1" size={30} />
                  </View>
                  <View>
                    <Text style={styles.EventsName}>
                      Science Fair Showcase
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={styles.EventsMonth}>Jan</Text>
                  </View>
                  <View>
                    <Text style={styles.EventsDay}>18</Text>
                  </View>
                </View>
              </View>
              <View style={styles.EventsCardsWrapper}>
                <View style={styles.EventsIcon_Name}>
                  <View>
                    <Icon color="black" name="trophy-outline" size={30} />
                  </View>
                  <View>
                    <Text style={styles.EventsName}>Math Olympiad</Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={styles.EventsMonth}>Jan</Text>
                  </View>
                  <View>
                    <Text style={styles.EventsDay}>18</Text>
                  </View>
                </View>
              </View>
              <View style={styles.EventsCardsWrapper}>
                <View style={styles.EventsIcon_Name}>
                  <View>
                    <Bell color="black" name="calculator" size={30} />
                  </View>
                  <View>
                    <Text style={styles.EventsName}>
                      Sports Day Extravaganza
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={styles.EventsMonth}>Jan</Text>
                  </View>
                  <View>
                    <Text style={styles.EventsDay}>18</Text>
                  </View>
                </View>
              </View>
              <View style={styles.EventsCardsWrapper}>
                <View style={styles.EventsIcon_Name}>
                  <View >
                    <Bell color="black" name="picture" size={30} />
                  </View>
                  <View>
                    <Text style={styles.EventsName}>Art Exhibition</Text>
                  </View>
                </View>
                <View >
                  <View>
                    <Text style={styles.EventsMonth}>Jan</Text>
                  </View>
                  <View>
                    <Text style={styles.EventsDay}>18</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <BottomNav navigation={navigation} />
        </View>
      </View>
    </>
  );
};

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
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontWeight: '400',
    fontSize: 12,
    fontStyle: 'normal',
    marginTop: 20,
  },
  userName: {
    color: '#262626',
    fontWeight: '500',
    marginBottom: 10,
    fontSize: 25,
    fontStyle: 'normal',
  },
  QuickLink: {
    marginTop: 20,
  },
  QuickLink_Text: {
    color: '#08150E',
    fontWeight: '500',
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
    width: 50,
    height: 50,
    paddingTop: 9,
    paddingLeft: 10,
    marginBottom: 10,
  },
  Events: {
    marginTop: 20,
  },
  EventsText: {
    color: '#08150E',
    fontWeight: '500',
    marginBottom: 10,
    fontSize: 16,
  },
  EventsDay: {
    color: '#08150E',
    fontWeight: '500',
    fontSize: 25,
    textAlign: 'center',
    marginTop: -5,
  },
  EventsMonth: {
    marginTop: -5,
    color: '#08150E',
    fontWeight: '400',
    fontSize: 10,
    textAlign: 'center',
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
    gap: 5,
  },
  EventsName: {
    color: '#08150E',
    fontWeight: '500',
    marginTop: 5,
    fontSize: 14,
  },
});

export default Home;
