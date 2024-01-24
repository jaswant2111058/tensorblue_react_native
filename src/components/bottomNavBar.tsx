import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/Feather';

interface BottomNavProps {
  navigation: any; // You might want to replace 'any' with the specific type of your navigation prop
}

const BottomNav: React.FC<BottomNavProps> = ({ navigation }) => {
  return (
    <View style={styles.NavWrapper}>
      <View style={styles.NavMain}>
        <View>
          <Icon
            name="home"
            color="black"
            size={30}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
        <View>
          <Icon color="black" name="calendar" size={30} />
        </View>
        <View>
          <Icon1
            color="black"
            name="user"
            size={30}
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />
        </View>
      </View>
    </View>
  );
};

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
    borderRadius: 20,
  },
});

export default BottomNav;
