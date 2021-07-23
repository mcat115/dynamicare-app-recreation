import React from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native"

const MainContent = (props) => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.categories}>ACCOUNT</Text>
      <Button title="Upgrade to Premium" />
      <Text style={styles.categories}>SETTINGS</Text>
      <Button title="Notifications" />
      <Button title="Data Usage" />
      <Text style={styles.categories}>RESOURCES</Text>
      <Button title="Get Help" />
      <Button title="Send Feedback" />
      <Button title="Rate and Review" />
      <Button title="Tell a Friend" />
      <Text style={styles.categories}>MORE</Text>
      <Button title="About DynamiCare" />
      <Button title="Terms of Use" />
      <Button title="Privacy" />
      <Button title="Logout" />
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
    fontSize: 25,
    textAlign: "left",
  },
  footnotes: {
    textAlign: "center",
  },
})
