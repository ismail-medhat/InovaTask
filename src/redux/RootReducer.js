const {combineReducers} = require('@reduxjs/toolkit');

import restuarantSlice from './slices/restuarantSlice';

const RootReducer = combineReducers({
  restuarant: restuarantSlice,
});

export default RootReducer;
