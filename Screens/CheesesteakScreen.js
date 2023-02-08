
import { StatusBar } from 'expo-status-bar';
import React , {useCallback} from 'react';
import { Alert, StyleSheet, Text, View , Button, Image, Linking} from 'react-native';
import App from '../App';

const url = 'https://github.com/nwnatale24/JalapenoHotties/tree/master'

const CheesesteakScreen = ( {navigation} ) => {
    return (

      <View style={styles.container}>
        <Text style={styles.welcomeText}>
            High-Steaks
            {'\n'}
        </Text>
        <Image 
            source={require('../img/cheesesteak_app_icon_modified.png')} 
            style={styles.image}/>
        <Button
            title="Sign Up"
            onPress={() => navigation.navigate('Details')}
         />
        <Button
            title="Sign In"
            onPress={() => navigation.navigate('Details')}
         />
        <Button
            style={styles.bottom}
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
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    textStyleSheet: {
      fontSize: 20,
      fontWeight: 'bold'
    },
  
    welcomeText: {
      fontSize: 40,
      color: '#fff',
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',

    },

    image: {
      flex: 0.4,
      aspectRatio: 1, 
      resizeMode: 'contain',
    },

    space: {
      width: 20,
      height: 20,
    },

    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36
    }


  });

  export default CheesesteakScreen;