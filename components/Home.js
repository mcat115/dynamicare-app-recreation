import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto"

const Home = ({ navigation }) => {
  useFonts({ Roboto_400Regular })
  return (
    <>
      <Text style={{ fontFamily: "Roboto_400Regular" }}>
        This is the home page!! Amazing stuff!
      </Text>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => navigation.replace("Home")}
          style={styles.button}
        >
          <Image
            source={require("../assets/home.png")}
            style={styles.coloredButtonImage}
          />
          <Text style={styles.coloredText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("History")}
          style={styles.button}
        >
          <Image
            source={require("../assets/clock.png")}
            style={styles.marginButtonImage}
          />
          <Text style={{ fontFamily: "Roboto_400Regular" }}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("Settings")}
          style={styles.button}
        >
          <Image
            source={require("../assets/settings.png")}
            style={styles.marginButtonImage}
          />
          <Text style={{ fontFamily: "Roboto_400Regular" }}>Settings</Text>
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
  coloredText: {
    color: "blue",
    fontFamily: "Roboto_400Regular",
  },
})

export default Home
