import 'react-native-reanimated';
import { StatusBar } from "expo-status-bar";
import { Header } from "./src/components/Header";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <>
      <Header name="José Roberto" />
      <Home />
      <StatusBar style="auto" />
    </>
  );
}
