import { StyleSheet } from "react-native";
import  Constants from "expo-constants";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: Constants.statusBarHeight
    },
    text:{
      color: 'black'
    },
    mySwitchButtonColor: '#0593ff',
    myTrackColors: {
      false: 'grey', 
      true: 'white'
    },
    inputfield: {
      borderWidth: 2,
      width: 200,
      padding: 3,
      marginBottom: 5
    }
});

const SpecialStyles = StyleSheet.create({
  container: {
    ...Styles.container,
    backgroundColor: '#4e4e4e'
  },
  text:{
    ...Styles.text,
    color: '#eaeaea'
  }
});

export {Styles, SpecialStyles};