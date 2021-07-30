import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto"

const History = ({ navigation }) => {
  useFonts({ Roboto_400Regular })
  return (
    <>
      <Image source={require("../assets/thumbs-up.png")} style={styles.image} />
      <Text style={styles.boldText}>
        Looks like you haven't completed any activies yet.
      </Text>
      <Text style={styles.text}>Explore the app to get started!</Text>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => navigation.replace("Home")}
          style={styles.button}
        >
          <Image
            source={require("../assets/home.png")}
            style={styles.buttonImage}
          />
          <Text style={{ fontFamily: "Roboto_400Regular" }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("History")}
          style={styles.button}
        >
          <Image
            source={require("../assets/clock.png")}
            style={styles.coloredButtonImage}
          />
          <Text style={styles.coloredText}>History</Text>
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
  buttonImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
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
    marginLeft: 10,
  },
  button: {
    marginLeft: 30,
    marginRight: 30,
  },
  coloredText: {
    color: "blue",
    fontFamily: "Roboto_400Regular",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  boldText: {
    fontSize: 16,
    textAlign: "center",
    marginLeft: 50,
    marginRight: 50,
    fontWeight: "bold",
    marginBottom: 25,
  },
  image: {
    padding: 10,
    margin: 5,
    height: 80,
    width: 80,
    resizeMode: "stretch",
    left: 150,
    tintColor: "gray",
    marginTop: 250,
  },
})

export default History
