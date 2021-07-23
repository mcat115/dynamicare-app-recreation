import React from "react"
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native"
import MainContent from "./components/MainContent"
import TopBar from "./components/TopBar"
import NavBar from "./components/NavBar"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <MainContent />
      <NavBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6d6d6",
    // alignItems: "center",
    justifyContent: "center",
  },
})
