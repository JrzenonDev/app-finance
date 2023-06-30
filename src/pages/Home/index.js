import { FlatList, StyleSheet, Text, View } from "react-native";
import { Ballance } from "../../components/Ballance";
import { Moviments } from "../../components/Moviments";
import { listExpanses } from "../../mocks/listExpanses";

export default function Home() {
  return (
    <View style={styles.container}>
      <Ballance ballance="13.000,00" expanses="451,00" />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={listExpanses}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
