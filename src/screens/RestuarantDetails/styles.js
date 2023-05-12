import {StyleSheet} from 'react-native';
import { Colors,wp, hp, Size, Weight } from '../../constants';

export const styles = StyleSheet.create({
  subHeaderContainer: {
    alignSelf: 'center',
    paddingTop: hp(1),
    maxWidth: wp('90%'),
  },
  resNameStyle: {
    fontSize: Size.title,
    color: Colors.black,
    paddingVertical: hp(0.4),
    textAlign: 'center',
  },
  resAddressStyle: {
    fontSize: Size.subTitle,
    color: Colors.black,
    paddingVertical: hp(0.4),
  },
});
