import {StyleSheet} from 'react-native';
import {Colors, wp, hp, Size,Weight} from '../../../constants';

export const styles = StyleSheet.create({
  itemContainerCol1: {
    width: wp('96%'),
    height: hp('15%'),
    paddingHorizontal: wp('2%'),
    alignSelf:'center',
    marginVertical:hp(.5),
  },
  itemContainerCol2: {
    width: wp('48%'),
    height: hp('15%'),
    paddingHorizontal: wp('2%'),
    paddingEnd: wp('2%'),
    alignSelf:'center',
    marginVertical:hp(.5)
  },

  subHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
  },
  titleStyle: {color: Colors.black, fontSize: Size.title,fontWeight:Weight.semiBold},
  resName: {color: Colors.white, fontSize: Size.subTitle,fontWeight:Weight.bold,paddingVertical:hp(2)},
  resRateAndReview: {color: Colors.black, fontSize: Size.semiText},
  resRateContainer:{
    paddingHorizontal: wp(1),
    backgroundColor: Colors.white,
    width: wp('40%'),
    paddingVertical: hp(0.4),
    borderRadius: wp(1),
    alignItems:'center',
    justifyContent:'center'
  }

});
