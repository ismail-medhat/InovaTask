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
import {IMAGES, wp, hp, Colors} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  ScreenContainer,
  MainHeader,
  SearchInput,
  RestaurantItem,
} from '../../components';
import {getAllRestuarant,getRestuarantDetails} from '../../redux';

const RestuarantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState('');
  const [costEffective, setCostEffective] = useState([]);
  const [bitPricer, setBitPricer] = useState([]);
  const [bigSpender, setBigSpender] = useState([]);
  const [resFilterItem, setResFilterItem] = useState([]);
  const [numCols, setNumCols] = useState(2);
  const {restuarantData, loading} = useSelector(state => state.restuarant);

  useEffect(() => {
    dispatch(getAllRestuarant());
  }, []);

  useEffect(() => {
    if (restuarantData.length > 0) {
      setCostEffective(restuarantData.filter(r => r?.price == '$'));
      setBitPricer(restuarantData.filter(r => r?.price == '$$'));
      setBigSpender(restuarantData.filter(r => r?.price == '$$$'));
    }
    console.log('first : ', JSON.stringify(restuarantData));
  }, [restuarantData]);

  useEffect(() => {
    if (searchVal.length > 0) {
      setResFilterItem(
        restuarantData.filter(r =>
          r?.name.toLowerCase().includes(searchVal.toLowerCase()),
        ),
      );
    }
  }, [searchVal]);

  const onRestuarant = (resId) =>{
    console.log('res =====> ' , resId)
    dispatch(getRestuarantDetails(resId));
    navigation.navigate('RestuarantDetails')
  }



  return (
    <ScreenContainer style={{}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        animated
        showHideTransition="fade"
      />
      <MainHeader title="Restaurants" />
      <SearchInput
        palceHoldTxt={'Search for restaurants'}
        searchKey={searchVal}
        setSearchKey={setSearchVal}
      />
      {loading ? (
        <View>
          <ActivityIndicator size={wp(5)} />
        </View>
      ) : (
        <ScrollView
          style={{flex: 1, paddingBottom: hp(10)}}
          showsVerticalScrollIndicator={false}>
          {searchVal.length == 0 ? (
            <>
              <RestaurantItem
                itemData={costEffective}
                subTitle={'Cost Effective'}
                withIconName={'bars'}
                numOfCols={numCols}
                onIconClick={() => setNumCols(numCols == 1 ? 2 : 1)}
                onRestuarantClick={(resId)=>onRestuarant(resId)}
              />
              <RestaurantItem
                itemData={bitPricer}
                subTitle={'Bit Pricer'}
                numOfCols={numCols}
                onRestuarantClick={(resId)=>onRestuarant(resId)}
              />
              <RestaurantItem
                itemData={bigSpender}
                subTitle={'Big Spender'}
                numOfCols={numCols}
                onRestuarantClick={(resId)=>onRestuarant(resId)}
              />
            </>
          ) : (
            <RestaurantItem
              itemData={resFilterItem}
              subTitle={'Search Restuarant Results'}
              withIconName={'bars'}
              numOfCols={numCols}
              onIconClick={() => setNumCols(numCols == 1 ? 2 : 1)}
              onRestuarantClick={(resId)=>onRestuarant(resId)}
            />
          )}
        </ScrollView>
      )}
    </ScreenContainer>
  );
};

export default RestuarantScreen;
