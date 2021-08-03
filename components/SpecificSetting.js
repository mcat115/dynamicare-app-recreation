import React from "react"
import { Text, StyleSheet } from "react-native"

const SpecificSetting = ({ navigation }) => {
  return <Text style={styles.text}>Change the setting you clicked here!</Text>
}

export default SpecificSetting

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    margin: 50,
  },
})
