import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { Header } from "./src/components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <Header name="José Roberto" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
