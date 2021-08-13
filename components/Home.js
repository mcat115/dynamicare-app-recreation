import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import NavBar from "./NavBar"
import { Audio } from "expo-av"

const Home = (props) => {
  const [chime] = useState(new Audio.Sound())

  useEffect(() => {
    async function loadSounds() {
      await chime.loadAsync(require("../assets/nba_draft_sound.mp3"))
    }
    loadSounds()
  }, [])

  const playSound = () => {
    chime.playAsync()
  }

  return (
    <>
      <View style={styles.homeContainer}>
        <Text>This is the home page placeholder!! Amazing stuff!</Text>
        <TouchableOpacity onPress={playSound}>
          <Image source={require("../assets/logo.png")} style={styles.image} />
        </TouchableOpacity>
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
