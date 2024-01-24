import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';
import BottomNav from '../components/bottomNavBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Feather';
import Bell from 'react-native-vector-icons/AntDesign';
import { useData } from '../apiHooks/api';
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../../App"


type ReportProps = NativeStackScreenProps<RootStackPramList, "Report">

const Report = ({navigation}: ReportProps) =>{
  const { baseURL } = useData();

  const getReport = () => {
    Linking.openURL(`${baseURL}/reports`).catch(() => {
      console.error('Failed to open URL in browser');
    });
  };

  return (
    <>
      <View style={styles.reportWrapper}>
        <View style={styles.reportMain}>
          <ScrollView>
            <View style={styles.header}>
              <View style={styles.reportHeader}>
                <Icon
                  name="angle-left"
                  color="black"
                  size={30}
                  onPress={() => {
                    navigation.navigate('Home');
                  }}
                />
                <Text style={styles.reportText}>Report</Text>
              </View>
              <View style={styles.menuIcon}>
                <Bell
                  name="bells"
                  color="black"
                  size={30}
                  onPress={() => {
                    navigation.navigate('Notification');
                  }}
                />
              </View>
            </View>
            <View style={styles.reports}>
              <View style={styles.reportName}>
                <View style={styles.reportIcon}>
                  <Icon1 name="file-1" size={25} color={'#fff'} />
                </View>
                <Text style={styles.reportsText}>Sessional Test.pdf</Text>
              </View>
              <View>
                <Icon2 color="black" name="download-cloud" size={30} onPress={() => getReport()} />
              </View>
            </View>
            <View style={styles.reports}>
              <View style={styles.reportName}>
                <View style={styles.reportIcon}>
                  <Icon1 name="file-1" size={25} color={'#fff'} />
                </View>
                <Text style={styles.reportsText}>Final Result.pdf</Text>
              </View>
              <View>
                <Icon2 color="black" name="download-cloud" size={30} onPress={() => getReport()} />
              </View>
            </View>
            <View style={styles.reports}>
              <View style={styles.reportName}>
                <View style={styles.reportIcon}>
                  <Icon1 name="file-1" size={25} color={'#fff'} />
                </View>
                <Text style={styles.reportsText}>Developer Resume.pdf</Text>
              </View>
              <View>
                <Icon2 color="black" name="download-cloud" size={30} onPress={() => getReport()} />
              </View>
            </View>
            <View style={styles.reports}>
              <View style={styles.reportName}>
                <View style={styles.reportIcon}>
                  <Icon1  name="file-1" size={25} color={'#fff'} />
                </View>
                <Text style={styles.reportsText}>Jaswant_Resume.pdf</Text>
              </View>
              <View>
                <Icon2 color="black" name="download-cloud" size={30} onPress={() => getReport()} />
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
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontWeight: '400',
    fontSize: 16,
    fontStyle: 'normal',
    marginTop: 5,
  },
  reportsText: {
    color: '#262626',
    fontWeight: '400',
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
    marginTop: 25,
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
  },
});

export default Report;
