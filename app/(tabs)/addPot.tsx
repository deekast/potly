import { View, Text, StyleSheet } from 'react-native';

export default function AddPot() {
  return (
    <View style={styles.container}>
      <Text>Add Pot</Text>
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
