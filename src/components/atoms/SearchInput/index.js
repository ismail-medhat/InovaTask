import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Colors, wp} from '../../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const SearchInput = ({searchKey, setSearchKey,palceHoldTxt}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputRow}>
        <Ionicons name="search-sharp" size={wp(5)} color={Colors.black} />
        <TextInput
          placeholder={palceHoldTxt}
          value={searchKey}
          onChangeText={val => setSearchKey(val)}
          style={styles.searchInpStyle}
        />
      </View>
      {searchKey.length > 0 && (
        <TouchableOpacity onPress={()=>setSearchKey('')}>
          <Ionicons name="close" size={wp(5)} color={Colors.black} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
