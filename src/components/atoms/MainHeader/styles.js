import { StyleSheet } from 'react-native';
import {Colors,Weight, wp, hp,Size} from '../../../constants';

export const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingTop: hp(1),
    paddingBottom: hp(2),
  },
  backBox: {
    width: wp(8),
    height: wp(8),
    backgroundColor: Colors.black,
    borderRadius: wp(2),
    alignItems:'center',
    justifyContent:'center'
  },
  titleStyle:{color:Colors.black,fontSize:Size.title,fontWeight:Weight.semiBold}
});
