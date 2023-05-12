import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Colors, wp} from '../../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const MainHeader = ({title}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
      navigation.goBack()
  }
  return (
    <View
      style={styles.headerRow}>
      <TouchableOpacity
        style={styles.backBox}
        onPress={() => handleGoBack()}>
        <Ionicons name="chevron-back" size={wp(5)} color={Colors.white} />
      </TouchableOpacity>
      <Text style={styles.titleStyle}>{title}</Text>
      <View />
    </View>
  );
};

export default MainHeader;
