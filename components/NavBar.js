import React from "react"
import { StyleSheet, Text, Button, View } from "react-native"

const NavBar = ({ navigation }) => {
  return (
    <>
      <View style={styles.nav}>
        <Button title="Home" onPress={() => navigation.replace("Home")} />
        <Button title="History" onPress={() => navigation.replace("History")} />
        <Button
          title="Settings"
          onPress={() => navigation.replace("Settings")}
        />
      </View>
      <Text style={styles.bottom}>You are using version 123.456</Text>
      <Text style={styles.bottom}>We appreciate you!</Text>
    </>
  )
}

export default NavBar

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "white",
    textAlign: "center",
  },
  nav: {
    backgroundColor: "white",
    flexDirection: "row",
  },
})
