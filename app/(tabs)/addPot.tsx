import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import globalStyles from '../styles/global';
import {Picker} from '@react-native-picker/picker';

const AddPot = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stage, setStage] = useState();
  const [method, setMethod] = useState();

  const handleAddPot = () => {
    console.log('New Pot:', { title, stage });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Add New Pot</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <Picker
        selectedValue={stage}
        onValueChange={(itemValue, itemIndex)=> 
          setStage(itemValue)}
        placeholder="Stage"
      >
        <Picker.Item label="Idea" value="stage1" />
        <Picker.Item label="Thrown / Formed" value="stage2" />
        <Picker.Item label="Trimmed" value="stage3" />
        <Picker.Item label="Bisque Kiln Queue" value="stage4" />
        <Picker.Item label="Bisque Fired" value="stage5" />
        <Picker.Item label="Glazed" value="stage6" />
        <Picker.Item label="Final Firing Queue" value="stage7" />
        <Picker.Item label="Finished Work" value="stage8" />
      </Picker>
      <View style={styles.buttonContainer}>
        <Button title="Add Pot" onPress={handleAddPot} color={"#6AA84f"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default AddPot;
