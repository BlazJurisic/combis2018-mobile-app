import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { LinearGradient } from 'expo'
import { Font } from 'expo'

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      [customFonts.coolFont] : require('./assets/fonts/cool-font.otf')
    })
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <LinearGradient
        colors={colors.backgroundColors}
        style={styles.container}>
        {
          this.state && this.state.fontLoaded &&
          <React.Fragment>
            <View style={styles.titleContainer}>
              <Text style={styles.title}> LunchTime </Text>
            </View>
            <View style={styles.searchContainer}>
              <Text>Tap!</Text>
              <TouchableOpacity style={styles.searchButton}>
                <Icon
                  name={"search"}
                  size={40}
                  color="#01a699" />
              </TouchableOpacity>
            </View>
            <View style={styles.loginContainer}>
              <Text>Or connect with: </Text>
              <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={this.loginWithFacebook}>
                Login with Facebook
          </Icon.Button>
              <Icon.Button
                name="google"
                backgroundColor="#EA4335"
                onPress={this.loginWithFacebook}>
                Login with Google
          </Icon.Button>
            </View>
          </React.Fragment>
        }
      </LinearGradient>
    )
  }
}
const customFonts = {
  coolFont: 'cool-font'
}
const flexWords = {
  center: 'center'
}
const colors = {
  basic: {
    white: 'rgb(255, 255, 255)'
  },
  backgroundColors: [
    'rgb(253,154,107)',
    'rgb(231,116,101)'
  ],
  searchButton: {
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: 'rgb(255,255,255)'
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(200,200,200)',
    flex: 1,
    alignItems: flexWords.center,
    justifyContent: flexWords.center,
  },
  titleContainer: {
    flex: 2,
    alignItems: flexWords.center,
    justifyContent: flexWords.center,
  },
  searchContainer: {
    flex: 2,
    alignItems: flexWords.center,
    justifyContent: flexWords.center,
  },
  loginContainer: {
    flex: 3,
    alignItems: flexWords.center,
    justifyContent: flexWords.center,
  },
  searchButton: {
    borderWidth: 1,
    borderColor: colors.searchButton.borderColor,
    alignItems: flexWords.center,
    justifyContent: flexWords.center,
    width: 150,
    height: 150,
    backgroundColor: colors.searchButton.backgroundColor,
    borderRadius: 150,
    margin: 25
  },
  title: {
    fontFamily: customFonts.coolFont,
    fontSize: 56,
    color: colors.basic.white
  }
})
