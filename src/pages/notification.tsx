import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import BottomNav from '../components/bottomNavBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Bell from 'react-native-vector-icons/AntDesign';
import { useData } from '../apiHooks/api';
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackPramList } from "../../App"


type NotificationProp = NativeStackScreenProps<RootStackPramList, "Notification">

const Notification = ({ navigation }: NotificationProp) => {
  const { isLoading, notifications } = useData();

  return (
    <>
      <View style={styles.NotificationWrapper}>
        <View style={styles.NotificationMain}>
          <ScrollView>
            <View style={styles.header}>
              <View style={styles.NotificationHeader}>
                <Icon
                  name="angle-left"
                  color="black"
                  size={30}
                  onPress={() => {
                    navigation.navigate('Home');
                  }}
                />
                <Text style={styles.NotificationText}>Notifications</Text>
              </View>
              <View style={styles.menuIcon}>
                <Bell color="black" name="bells" size={30} />
              </View>
            </View>
            <View>
              {isLoading ? (
                <Text>Loading Data ......</Text>
              ) : (notifications?.map((item, index) => {
                return (
                  <View style={styles.NotificationData} key={index}>
                    <Text style={styles.NotificationDataText} key={index + 10}>
                      {item}
                    </Text>
                  </View>
                );
              })
              )}
            </View>
          </ScrollView>
          <BottomNav navigation={navigation} />
        </View>
      </View>
    </>
  );
};

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
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontWeight: '400',
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
});

export default Notification;
