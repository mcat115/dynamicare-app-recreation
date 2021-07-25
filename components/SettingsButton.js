import React from "react"
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native"

const SettingsButton = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{props.title}</Text>
      <Image source={require("../enter.png")} style={styles.buttonImage} />
    </TouchableOpacity>
  )
}

export default SettingsButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    textAlign: "left",
    flexDirection: "row",
  },
  buttonImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  buttonText: {
    fontSize: 20,
  },
})
