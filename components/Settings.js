import React from "react"
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from "react-native"
import SettingsButton from "./SettingsButton"
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto"

const Settings = ({ navigation }) => {
  useFonts({ Roboto_400Regular })
  return (
    <>
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
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => navigation.replace("Home")}
          style={styles.button}
        >
          <Image
            source={require("../assets/home.png")}
            style={styles.buttonImage}
          />
          <Text style={{ fontFamily: "Roboto_400Regular" }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("History")}
          style={styles.button}
        >
          <Image
            source={require("../assets/clock.png")}
            style={styles.marginButtonImage}
          />
          <Text style={{ fontFamily: "Roboto_400Regular" }}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("Settings")}
          style={styles.button}
        >
          <Image
            source={require("../assets/settings.png")}
            style={styles.coloredButtonImage}
          />
          <Text style={styles.coloredText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Settings

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
  categories: {
    fontSize: 20,
    textAlign: "left",
    fontFamily: "Roboto_400Regular",
  },
  footnotes: {
    textAlign: "center",
    fontFamily: "Roboto_400Regular",
  },
  nav: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "auto",
  },
  buttonImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  marginButtonImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    marginLeft: 10,
  },
  coloredButtonImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    tintColor: "blue",
    marginLeft: 10,
  },
  button: {
    marginLeft: 30,
    marginRight: 30,
  },
  coloredText: {
    color: "blue",
    fontFamily: "Roboto_400Regular",
  },
})
