import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Add Piece"
        onPress={() => navigation.navigate('AddPiece')}
      />
    </View>
  );
};

export default HomeScreen;
