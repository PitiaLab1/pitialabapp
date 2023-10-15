import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, HomeRoute } from "../../screens/home";
import { Scan, ScanRoute } from "../../screens/scan";
import Icon from "react-native-vector-icons/Ionicons";
import logo from "../../assets/images/logo-alt.png";
import { Image } from "../components";
import { theme } from "../styles";

const Tab = createBottomTabNavigator();

export const NavigationRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerLeft: () => <Image source={logo} size={"56px"} />,

      headerStyle: {
        backgroundColor: theme.colors.background[3],
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.primary[3],
        height: 64,
      },
      headerTintColor: theme.colors.primary[1],
      tabBarStyle: {
        height: 76,
        paddingBottom: 8,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: theme.colors.primary[3],
        backgroundColor: theme.colors.background[3],
      },
      tabBarLabelStyle: {
        fontSize: 16,
      },
      tabBarActiveTintColor: theme.colors.primary[1],
      tabBarInactiveTintColor: theme.colors.background[1],
  }}>
      <Tab.Screen
        name={HomeRoute}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" size={iconSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ScanRoute}
        component={Scan}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="camera-outline" size={iconSize} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const iconSize = 30;

const screensOptions = {
    headerLeft: () => <Image source={logo} style={{ width: 60, height: 60 }} />,
    headerStyle: {
      backgroundColor: theme.colors.background[3],
      height: 64,
    },
    headerTintColor: theme.colors.primary[1],
    tabBarStyle: {
      height: 76,
      paddingBottom: 8,
      paddingTop: 8,
      borderTopWidth: 1,
      borderTopColor: theme.colors.primary[3],
      backgroundColor: theme.colors.background[3],
    },
    tabBarLabelStyle: {
      fontSize: 16,
    },
    tabBarActiveTintColor: theme.colors.primary[1],
    tabBarInactiveTintColor: theme.colors.background[1],
};
