import { StatusBar } from 'expo-status-bar';
import React , {useCallback} from 'react';
import { Alert, StyleSheet, Linking, Text, View , Button, Image} from 'react-native';
import CheesesteakScreen from './CheesesteakScreen';


const SignInScreen = () => {
    return (
        <View style={signInStyles.signInView}>
            <Text style={signInStyles.textStyle}>
                Welcome
            </Text>
            <Button
                onPress={() => <CheesesteakScreen/>}
                title="Go to next screen"
                color="#f78716"
            />
        </View>
    )
}

const signInStyles = StyleSheet.create({
    signInView:{
        marginTop: 100,
        flex:1,
        flexDirection:'column',
        justifyContent:'top',
        alignItems:'center'
    }, 

    textStyle:{
        alignItems:'center',
        color:'#101010',
        fontSize:'25'
    }
})
export default SignInScreen;