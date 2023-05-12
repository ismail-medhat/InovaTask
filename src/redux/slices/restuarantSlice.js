import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {GET_RESTUARANT,GET_RESTUARANT_DETAILS, Token} from '../../constants';

const initialState = {
  restuarantData: [],
  resDetails: [],
  totlaRestuarant: 0,
  error: null,
  loading: false,
};

export const getAllRestuarant = createAsyncThunk(
  'request/getAllRestuarant',
  async (_, {rejectWithValue}) => {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    };
    try {
      const response = await axios.get(GET_RESTUARANT, config);
      const res = response.data;
      //console.log('getAllRestuarant DATA :: ', JSON.stringify(res));
      return res;
    } catch (error) {
      console.log(
        'getAllRestuarant Axios Error: ' + JSON.stringify(error?.respose?.data),
      );
      return rejectWithValue('هناك خط فى العوان');
    }
  },
);

export const getRestuarantDetails = createAsyncThunk(
  'request/getRestuarantDetails',
  async (resId, {rejectWithValue}) => {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    };
    try {
      const response = await axios.get(`${GET_RESTUARANT_DETAILS}${resId}`, config);
      const res = response.data;
      //console.log('getRestuarantDetails DATA :: ', JSON.stringify(res));
      return res;
    } catch (error) {
      console.log(
        'getRestuarantDetails Axios Error: ' + JSON.stringify(error?.respose?.data),
      );
      return rejectWithValue('هناك خط فى العوان');
    }
  },
);

const restuarantSlice = createSlice({
  name: 'restuarant',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    // Start get all restuarants
    builder.addCase(getAllRestuarant.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllRestuarant.fulfilled, (state, action) => {
      state.loading = false;
      state.restuarantData = action.payload?.businesses;
      state.totlaRestuarant = action.payload?.total;
      state.error = null;
    });
    builder.addCase(getAllRestuarant.rejected, (state, action) => {
      state.loading = false;
      state.restuarantData = [];
      state.error = action.payload;
    });
    // End get all restuarants
    //--------------------------------------------------
       // Start get restuarant details
       builder.addCase(getRestuarantDetails.pending, state => {
        state.loading = true;
      });
      builder.addCase(getRestuarantDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.resDetails = action.payload;
        state.error = null;
      });
      builder.addCase(getRestuarantDetails.rejected, (state, action) => {
        state.loading = false;
        state.restuarantData = [];
        state.error = action.payload;
      });
      // End get restuarant details
      //--------------------------------------------------
  },
});

export default restuarantSlice.reducer;
