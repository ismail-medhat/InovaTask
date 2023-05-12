import {View, StatusBar, LogBox, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainStackNavigator from './src/navigation/MainStack';
import {isAr} from './src/utils/functions';
import {Colors, wp} from './src/constants';
import Toast from 'react-native-toast-message';

const App = () => {
  useEffect(() => {
    console.log('App Lang : ', isAr());
    LogBox.ignoreAllLogs(true);
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar
            hidden={false}
            backgroundColor={Colors.white}
            barStyle={'dark-content'}
            translucent={false}
            animated
            showHideTransition="fade"
          />
          <MainStackNavigator />
          <Toast />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
