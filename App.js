import {
  Button,
  NativeModules,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const App = () => {
  console.log('CONSOLENYA', NativeModules.OpenActivity);

  let OpenActivity = NativeModules.OpenActivity;

  const open = () => {
    OpenActivity.open();
  };

  return (
    <SafeAreaView style={{backgroundColor: 'blue', flex: 1}}>
      <Text>App</Text>
      <Button title="KLIKKK" onPress={open} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
