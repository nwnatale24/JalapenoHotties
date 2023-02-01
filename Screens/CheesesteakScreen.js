
import { StatusBar } from 'expo-status-bar';
import React , {useCallback} from 'react';
import { Alert, StyleSheet, Text, View , Button, Image} from 'react-native';
import App from '../App';

const CheesesteakScreen = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.textStyleSheet}>
            Welcome to this Cheesesteak App thing!
            {'\n'}
        </Text>
        <Image source={require('../img/cheesesteak_main_screen.png')} style={styles.image}/>
        <Button
            onPress={() => Linking.openURL(url)}
            title="GitHub"
            color="#f78716"
        />
        <StatusBar style="auto" />
      </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ADD8E6',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    textStyleSheet: {
      fontSize: 20,
      fontWeight: 'bold'
    },
  
    image: {
      flex: 0.4,
      aspectRatio: 1, 
      resizeMode: 'contain',
    }
  });

  export default CheesesteakScreen;