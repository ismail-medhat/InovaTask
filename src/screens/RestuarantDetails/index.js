import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from './styles';
import {IMAGES, wp, hp, Colors, Size} from '../../constants';
import {useSelector} from 'react-redux';
import {ScreenContainer, MainHeader} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

const RestuarantDetails = () => {
  const {resDetails, loading} = useSelector(state => state.restuarant);

  return (
    <ScreenContainer style={{}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        animated
        showHideTransition="fade"
      />

      <MainHeader title="Restaurant Details" />
      {loading ? (
        <View>
          <ActivityIndicator size={wp(5)} />
        </View>
      ) : (
        <>
          <View style={styles.subHeaderContainer}>
            <Text style={styles.resNameStyle}>{resDetails?.name}</Text>
            <Text style={styles.resAddressStyle}>
              {resDetails?.location?.display_address}
            </Text>
          </View>
          <MapView
            style={{width:wp('100%'),height:hp('50%'),marginVertical:hp(3)}}
            region={{
              latitude: resDetails?.coordinates?.latitude,
              longitude: resDetails?.coordinates?.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}></MapView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingHorizontal: wp(4),
            }}>
            <Ionicons name="location-outline" size={wp(5)} />
            <Text style={styles.resAddressStyle}>
              {resDetails?.location?.address1}
            </Text>
          </View>
        </>
      )}
    </ScreenContainer>
  );
};

export default RestuarantDetails;
