import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackParamList } from '../navigation/StackParamList';

type PieceDetailScreenRouteProp = RouteProp<StackParamList, 'PieceDetail'>;

const PieceDetailScreen = () => {
  const route = useRoute<PieceDetailScreenRouteProp>();
  const { piece } = route.params;

  return (
    <View>
      <Text>Piece Detail</Text>
      <Text>{piece.title}</Text>
      <Text>{piece.description}</Text>
    </View>
  );
};

export default PieceDetailScreen;
