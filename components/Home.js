import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import NavBar from "./NavBar"

const Home = (props) => {
  return (
    <>
      <View style={styles.homeContainer}>
        <Text>This is the home page placeholder!! Amazing stuff!</Text>
        <Image source={require("../assets/logo.png")} style={styles.image} />
      </View>
      <NavBar
        iconColors={props.iconColors}
        setIconColors={props.setIconColors}
      />
    </>
  )
}

const styles = StyleSheet.create({
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
