import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Money from "./pages/Money";
import Store from "./pages/Store";
import SignIn from "./pages/SignIn";
import { CustomTabBar } from "./components/CustomTabBar";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SignInScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "#fff",
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: "compare-arrows",
        }}
      />
      <Tab.Screen
        name="Money"
        component={Money}
        options={{
          tabBarIcon: "attach-money",
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: "storefront",
        }}
      />
      <Tab.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          tabBarIcon: "storefront",
        }}
      />
    </Tab.Navigator>
  );
}
