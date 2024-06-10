import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddPieceScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddPiece = () => {
    // Add piece to Firestore
  };

  return (
    <View>
      <Text>Add Piece</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add" onPress={handleAddPiece} />
    </View>
  );
};

export default AddPieceScreen;
