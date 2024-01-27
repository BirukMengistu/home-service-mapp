import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home/Home";
import Profile from "../Screens/Profile/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import Booking from "../Screens/Booking/Booking";
import Colors from "../Screens/utls/Colors";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
import Inbox from "../Screens/inbox/Inbox";
import { Platform, View } from "react-native";
const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  style: {
    borderRadius: 15,
    height: 90,
  },
  tabBarStyle: {
    postiton: "absolute",
    bottom: 0,
    right: 0,
    elevation: 0,
    left: 0,
    height: 65,
    backgroundColor: "#d2a81e",
    color: "white",
    padding: 0.8,
  },
};
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="home"
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome name="home" color="#fff" size={size} />
          ),
        }}
        component={HomeNavigation}
      />
      <Tab.Screen
        name="booking"
        style={{ color: "white" }}
        component={Booking}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: Platform.OS === "ios" ? 50 : 60,
                width: Platform.OS === "ios" ? 50 : 60,
                top: Platform.OS === "ios" ? -15 : -20,
                borderWidth: 2,
                borderColor: "white",
                backgroundColor: "#d2a81e",
                borderRadius: Platform.OS === "ios" ? 30 : 30,
              }}
            >
              <MaterialCommunityIcons
                name="book-check"
                size={24}
                color={"white"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={24}
              color={Colors.WHITE}
            />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;
