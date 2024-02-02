import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home/Home";
import ServiceListByCategory from "../Screens/ServicelistByCategory/ServiceListByCategory";
import ServicesDetails from "../Screens/services/ServicesDetails";
import ImagesPreview from "../Screens/services/ImagesPreview";
import Inbox from "../Screens/inbox/Inbox";
import Search from "../Screens/search/Search";
import PersonalInfo from "../Screens/Profile/PersonalInfo";
import AddNewTask from "../Screens/Profile/AddNewTask";
import Tasklist from "../Screens/Profile/Task_lists";
import Privacypolicy from "../Screens/Privacy/Privacypolicy";
import Info from "../Screens/information/Info";
import InformationDetails from "../Screens/information/InformationDetails";

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="service-list" component={ServiceListByCategory} />
      <Stack.Screen name="service-detali" component={ServicesDetails} />
      <Stack.Screen name="priview_images" component={ImagesPreview} />
      <Stack.Screen name="inbox" component={Inbox} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="tasklist" component={Tasklist} />
      <Stack.Screen name="addNewTask" component={AddNewTask} />
      <Stack.Screen name="privacy" component={Privacypolicy} />
      <Stack.Screen name="info" component={Info} />
      <Stack.Screen name="informationDetails" component={InformationDetails} />

    </Stack.Navigator>
  );
}

export default HomeNavigation;
