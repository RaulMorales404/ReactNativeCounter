import React from 'react'
import { View, StyleSheet, Platform } from 'react-native';
import CounterScreen from './src/screens/CounterScreen';
// import Home from './src/screens/Home';

export const App = () => {
  return (
    <View style={styles.container}>
      <CounterScreen />
    </View>
  );



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'ios' ? '#94ccf2' : '#AED6F1',
  },
});



export default App;
