import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Pots = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pots</Text>
      {/* Display list of pots here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24
  },
});

export default Pots;
