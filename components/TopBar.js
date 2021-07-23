import React from "react"
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native"

const TopBar = (props) => {
  return <Text style={styles.top}>Settings</Text>
}

export default TopBar

const styles = StyleSheet.create({
  top: {
    backgroundColor: "cyan",
    textAlign: "center",
  },
})
