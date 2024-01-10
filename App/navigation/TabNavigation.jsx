import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home/Home";
import Profile from "../Screens/Profile/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import Booking from "../Screens/Booking/Booking";
import Colors from "../Screens/utls/Colors";
import { FontAwesome , MaterialCommunityIcons} from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      ScreenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
     options={{
          tabBarIcon: ({ color, size }) => (
             <FontAwesome name="home" color={Colors.PRIMARY} size={size} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen name="booking" 
      component={Booking} 
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-check" size={24} color={Colors.PRIMARY} />
        ),
      }}/>
      <Tab.Screen name="profile" 
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-man-profile" size={24} color={Colors.PRIMARY} />
        ),}}
      component={Profile} />
    </Tab.Navigator>
  );
}

export default MainTabs;