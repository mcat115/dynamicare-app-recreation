import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"

const NavBar = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.nav}>
      <TouchableOpacity
        onPress={() => navigation.replace("Home")}
        style={styles.button}
      >
        <Image
          source={require("../assets/home.png")}
          style={styles.homeButtonImage}
        />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.replace("History")}
        style={styles.button}
      >
        <Image
          source={require("../assets/clock.png")}
          style={styles.historySettingsButtonImage}
        />
        <Text>History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.replace("Settings")}
        style={styles.button}
      >
        <Image
          source={require("../assets/settings.png")}
          style={styles.historySettingsButtonImage}
        />
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "auto",
  },
  historySettingsButtonImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    marginLeft: 10,
  },
  homeButtonImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    marginLeft: 6,
    // tintColor: "blue"
  },
  button: {
    marginLeft: 30,
    marginRight: 30,
  },
})

export default NavBar
