import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
import ServiceListByCategory from '../Screens/ServicelistByCategory/ServiceListByCategory';
import ServicesDetails from '../Screens/services/ServicesDetails';
import ImagesPreview from '../Screens/services/ImagesPreview';
import Inbox from '../Screens/inbox/Inbox';
import Search from '../Screens/search/Search';

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator
    screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="service-list" component={ServiceListByCategory} />
      <Stack.Screen name="service-detali" component={ServicesDetails} />
      <Stack.Screen name="priview_images" component={ImagesPreview} />
      <Stack.Screen name="inbox" component={Inbox} />
      <Stack.Screen name="search" component={Search} />
      
    </Stack.Navigator>
  );
}

export default HomeNavigation