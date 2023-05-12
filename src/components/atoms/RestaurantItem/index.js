import {
  View,
  Image,
  Text,
  ActivityIndicator,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Colors, hp, wp} from '../../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const RestuarantItem = ({
  subTitle,
  itemData,
  withIconName,
  onIconClick,
  numOfCols,
  onRestuarantClick
}) => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
      onPress={()=>onRestuarantClick(item.id)}
        style={
          numOfCols == 1 ? styles.itemContainerCol1 : styles.itemContainerCol2
        }>
        <ImageBackground
          source={{uri: item?.image_url}}
          style={{flex: 1}}
          resizeMode="cover">
          <View
            style={{
              alignSelf: numOfCols == 1 ? 'flex-start' : 'center',
              paddingVertical: hp(numOfCols == 1 ? 4 : 2),
              paddingStart: wp(2),
            }}>
            <Text
              style={[
                styles.resName,
                {alignSelf: numOfCols == 1 ? 'flex-start' : 'center'},
              ]}>
              {item?.name.length > (numOfCols == 1 ? 25 : 15)
                ? `${item?.name.substring(0, numOfCols == 1 ? 24 : 15)}...`
                : item?.name}
            </Text>
            <View style={styles.resRateContainer}>
              <Text
                style={
                  styles.resRateAndReview
                }>{`${item?.rating} Stars, ${item?.review_count} Reviews`}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{paddingHorizontal: wp(2)}}>
      <View style={styles.subHeaderRow}>
        <Text style={styles.titleStyle}>{subTitle}</Text>
        {withIconName && (
          <TouchableOpacity onPress={() => onIconClick()}>
            <AntDesign name={withIconName} size={wp(7)} color={Colors.black} />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={itemData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        key={numOfCols}
        numColumns={numOfCols}
        ListEmptyComponent={
          <View style={{alignItems: 'center'}}>
            <Text>No data Avaialable</Text>
          </View>
        }
      />
    </View>
  );
};

export default RestuarantItem;
