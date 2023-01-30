import { StatusBar } from 'expo-status-bar';
import React , {useCallback} from 'react';
import { Alert, Linking, StyleSheet, Text, View , Button} from 'react-native';

const url = "https://github.com/nwnatale24/JalapenoHotties"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Below is the link to our GitHub.
      </Text>
      <Button
        onPress={() => Linking.openURL(url)}
        title="GitHub"
        color="#f78716"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
