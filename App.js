import "react-native-gesture-handler"
import React, { useState } from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import Home from "./components/Home"
import History from "./components/History"
import Settings from "./components/Settings"
import SpecificSetting from "./components/SpecificSetting"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

export default function App() {
  const Stack = createStackNavigator()
  const [iconColors, setIconColors] = useState({
    home: "blue",
    history: "black",
    settings: "black",
  })

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              animationEnabled: false,
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#00BCD4" },
            }}
          >
            {(props) => (
              <Home
                {...props}
                iconColors={iconColors}
                setIconColors={setIconColors}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="History"
            options={{
              animationEnabled: false,
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#00BCD4" },
            }}
          >
            {(props) => (
              <History
                {...props}
                iconColors={iconColors}
                setIconColors={setIconColors}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Settings"
            options={{
              animationEnabled: false,
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#00BCD4" },
            }}
          >
            {(props) => (
              <Settings
                {...props}
                iconColors={iconColors}
                setIconColors={setIconColors}
              />
            )}
          </Stack.Screen>
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
