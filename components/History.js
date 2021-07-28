import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"

const History = ({ navigation }) => {
  return (
    <>
      <Text>This is your history</Text>
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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  bottom: {
    backgroundColor: "white",
    textAlign: "center",
  },
  nav: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
  },
})

export default History
