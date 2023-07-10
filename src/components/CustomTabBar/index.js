import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function CustomTabBar({ state, descriptors, navigation }) {
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return(
            <TouchableOpacity>
              <Text>Teste</Text>
            </TouchableOpacity>
          )

        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})