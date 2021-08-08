import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"

const NavBar = (props) => {
  const navigation = useNavigation()

  const homePress = () => {
    navigation.replace("Home")
    props.setIconColors({
      home: "blue",
      history: "black",
      settings: "black",
    })
  }

  const historyPress = () => {
    navigation.replace("History")
    props.setIconColors({
      home: "black",
      history: "blue",
      settings: "black",
    })
  }

  const settingsPress = () => {
    navigation.replace("Settings")
    props.setIconColors({
      home: "black",
      history: "black",
      settings: "blue",
    })
  }

  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={homePress} style={styles.button}>
        <Image
          source={require("../assets/home.png")}
          style={[styles.homeButtonImage, { tintColor: props.iconColors.home }]}
        />
        <Text style={{ color: props.iconColors.home }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={historyPress} style={styles.button}>
        <Image
          source={require("../assets/clock.png")}
          style={[
            styles.historySettingsButtonImage,
            { tintColor: props.iconColors.history },
          ]}
        />
        <Text style={{ color: props.iconColors.history }}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={settingsPress} style={styles.button}>
        <Image
          source={require("../assets/settings.png")}
          style={[
            styles.historySettingsButtonImage,
            { tintColor: props.iconColors.settings },
          ]}
        />
        <Text style={{ color: props.iconColors.settings }}>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "auto",
  },
  historySettingsButtonImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    marginLeft: 10,
  },
  homeButtonImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    marginLeft: 6,
  },
  button: {
    marginLeft: 30,
    marginRight: 30,
  },
})

export default NavBar
