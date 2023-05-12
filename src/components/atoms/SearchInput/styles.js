import { StyleSheet } from 'react-native';
import {Colors, wp, hp,Size} from '../../../constants';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    borderWidth:wp(.2),
    borderColor:Colors.black,
    borderRadius:wp(2),
    marginBottom:hp(2)
  },
  inputRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchInpStyle: {
    maxWidth:wp('70%'),
    paddingHorizontal:wp(2),
    color:Colors.black,
    fontSize:Size.subTitle
  }
});
