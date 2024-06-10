import { View, Text, StyleSheet } from 'react-native';

export default function Pots() {
  return (
    <View style={styles.container}>
      <Text>Pottery Log</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
