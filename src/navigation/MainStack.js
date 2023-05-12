import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {
  RestuarantScreen,
  RestuarantDetails,
} from '../screens';


const Stack = createStackNavigator();



const MainStackNavigator = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="RestuarantScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="RestuarantScreen" component={RestuarantScreen} />
        <Stack.Screen name="RestuarantDetails" component={RestuarantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
