import React from "react"
import { StyleSheet, Text, ScrollView } from "react-native"
import SettingsButton from "./SettingsButton"

const MainContent = (props) => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.categories}>ACCOUNT</Text>
      <SettingsButton title="Upgrade to Premium" />
      <Text style={styles.categories}>SETTINGS</Text>
      <SettingsButton title="Notifications" />
      <SettingsButton title="Data Usage" />
      <Text style={styles.categories}>RESOURCES</Text>
      <SettingsButton title="Get Help" />
      <SettingsButton title="Send Feedback" />
      <SettingsButton title="Rate and Review" />
      <SettingsButton title="Tell a Friend" />
      <Text style={styles.categories}>MORE</Text>
      <SettingsButton title="About DynamiCare" />
      <SettingsButton title="Terms of Use" />
      <SettingsButton title="Privacy" />
      <SettingsButton title="Logout" />
      <Text style={styles.footnotes}>You are using version 123.456</Text>
      <Text style={styles.footnotes}>We appreciate you!</Text>
    </ScrollView>
  )
}

export default MainContent

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  categories: {
    fontSize: 20,
    textAlign: "left",
    backgroundColor: "#D3D3D3",
  },
  footnotes: {
    textAlign: "center",
  },
})
