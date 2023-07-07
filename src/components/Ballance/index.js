import { MotiView } from "moti";
import { StyleSheet, Text, View } from "react-native";

export function Ballance({ ballance, expanses }) {
  return (
    <MotiView
      style={styles.container}
      from={{
        rotateX: '-100deg',
        opacity: 0
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1,
      }}
      transition={{
        type: 'timing',
        delay: 300,
        duration: 900
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySimbol}>R$</Text>
          <Text style={styles.ballance}>{ballance}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySimbol}>R$</Text>
          <Text style={styles.expanses}>{expanses}</Text>
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  itemTitle: {
    fontSize: 20,
    color: "#dadada",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencySimbol: {
    color: "#dadada",
    marginRight: 6,
  },
  ballance: {
    fontSize: 22,
    color: "#2ecc71",
  },
  expanses: {
    fontSize: 22,
    color: "#e74e3c",
  },
});
