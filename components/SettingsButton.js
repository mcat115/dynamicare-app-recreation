import React from "react"
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native"

const SettingsButton = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{props.title}</Text>
      <Image
        source={require("../assets/enter.png")}
        style={styles.buttonImage}
      />
    </TouchableOpacity>
  )
}

export default SettingsButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    textAlign: "left",
    flexDirection: "row",
    margin: 1,
  },
  buttonImage: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: "stretch",
    top: 15,
    right: 0,
    position: "absolute",
    tintColor: "#00BCD4",
  },
  buttonText: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
})
