import React from "react"
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native"

const NavBar = (props) => {
  return <Text style={styles.top}>NavBar</Text>
}

export default NavBar

const styles = StyleSheet.create({
  top: {
    backgroundColor: "white",
    textAlign: "center",
  },
})
