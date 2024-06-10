import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddPieceScreen from './screens/AddPieceScreen';
import PieceDetailScreen from './screens/PieceDetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import { StackParamList } from './navigation/StackParamList';

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddPiece" component={AddPieceScreen} />
        <Stack.Screen name="PieceDetail" component={PieceDetailScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
