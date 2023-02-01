import { StatusBar } from 'expo-status-bar';
import React , {useCallback} from 'react';
import { Alert, Linking, StyleSheet, Text, View , Button, Image} from 'react-native';
import SignInScreen from './Screens/SignInScreen'


const url = "https://github.com/nwnatale24/JalapenoHotties"

export default function App() {
  return (
    <SignInScreen/>
  );
}

