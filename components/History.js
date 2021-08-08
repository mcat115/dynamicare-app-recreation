import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import NavBar from "./NavBar"

const History = (props) => {
  return (
    <>
      <View style={styles.historyContainer}>
        <Image
          source={require("../assets/thumbs-up.png")}
          style={styles.image}
        />
        <Text style={styles.boldText}>
          Looks like you haven't completed any activies yet.
        </Text>
        <Text style={styles.text}>Explore the app to get started!</Text>
      </View>
      <NavBar
        iconColors={props.iconColors}
        setIconColors={props.setIconColors}
      />
    </>
  )
}

const styles = StyleSheet.create({
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
    tintColor: "gray",
    marginTop: 250,
  },
  historyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
})

export default History
