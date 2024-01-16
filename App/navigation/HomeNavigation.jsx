import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
import ServiceListByCategory from '../Screens/ServicelistByCategory/ServiceListByCategory';
import ServicesDetails from '../Screens/services/ServicesDetails';

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator
    screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="service-list" component={ServiceListByCategory} />
      <Stack.Screen name="service-detali" component={ServicesDetails} />
    </Stack.Navigator>
  );
}

export default HomeNavigation