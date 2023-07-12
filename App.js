import "react-native-gesture-handler";
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { Header } from "./src/components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Header name="José Roberto" />
        <Routes />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
