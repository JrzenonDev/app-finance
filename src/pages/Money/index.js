import { StyleSheet, Text, View } from "react-native";

export default function Money() {
  return(
    <View style={styles.container}>
      <Text>Página Money</Text>
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