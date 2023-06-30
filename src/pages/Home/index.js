import { StyleSheet, View } from "react-native";
import { Ballance } from "../../components/Ballance";

export default function Home() {
  return (
    <View style={styles.container}>
      <Ballance ballance="13.000,00" expanses="451,00" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
