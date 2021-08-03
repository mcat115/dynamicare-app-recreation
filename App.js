import "react-native-gesture-handler"
import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import Home from "./components/Home"
import History from "./components/History"
import Settings from "./components/Settings"
import SpecificSetting from "./components/SpecificSetting"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              animationEnabled: false,
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#00BCD4" },
            }}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={{
              animationEnabled: false,
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#00BCD4" },
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              animationEnabled: false,
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#00BCD4" },
            }}
          />
          <Stack.Screen
            name="SpecificSetting"
            component={SpecificSetting}
            options={{
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#00BCD4" },
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BCD4",
    justifyContent: "center",
  },
})
