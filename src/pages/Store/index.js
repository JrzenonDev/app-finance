import { StyleSheet, Text, View } from "react-native";

export default function Store() {
  return(
    <View style={styles.container}>
      <Text>Página Store</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})