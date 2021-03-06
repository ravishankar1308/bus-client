import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Spacer0} from '../screens/components/Spacer';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation, text, routeName}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer0>
        <Text style={styles.link}>{text}</Text>
      </Spacer0>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

export default withNavigation(NavLink);
