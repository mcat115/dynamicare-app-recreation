import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.nav}>
      <TouchableOpacity
        onPress={() => navigation.replace("Home")}
        style={styles.button}
      >
        <Image
          source={require("../assets/home.png")}
          style={styles.buttonImage}
        />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.replace("History")}
        style={styles.button}
      >
        <Image
          source={require("../assets/clock.png")}
          style={styles.buttonImage}
        />
        <Text>History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.replace("Settings")}
        style={styles.button}
      >
        <Image
          source={require("../assets/settings.png")}
          style={styles.buttonImage}
        />
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "white",
    flexDirection: "row",
  },
  buttonImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  button: {
    marginLeft: 30,
    marginRight: 30,
  },
})
