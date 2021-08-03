import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.homeContainer}>
        <Text>This is the home page placeholder!! Amazing stuff!</Text>
        <Image source={require("../assets/logo.png")} style={styles.image} />
      </View>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => navigation.replace("Home")}
          style={styles.button}
        >
          <Image
            source={require("../assets/home.png")}
            style={styles.coloredButtonImage}
          />
          <Text style={{ color: "blue" }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("History")}
          style={styles.button}
        >
          <Image
            source={require("../assets/clock.png")}
            style={styles.marginButtonImage}
          />
          <Text>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("Settings")}
          style={styles.button}
        >
          <Image
            source={require("../assets/settings.png")}
            style={styles.marginButtonImage}
          />
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  nav: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "auto",
  },
  marginButtonImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    marginLeft: 10,
  },
  coloredButtonImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    tintColor: "blue",
  },
  button: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    padding: 10,
    margin: 5,
    height: 250,
    width: 250,
    resizeMode: "stretch",
  },
  homeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Home
