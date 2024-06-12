
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import globalStyles from '../styles/global';
import ModalSelector from 'react-native-modal-selector';


const AddPot = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stage, setStage] = useState('');
  const [stageLabel, setStageLabel] = useState('Select Stage');
  const [method, setMethod] = useState('');
  const [methodLabel, setMethodLabel] = useState('Select Method');
  const [vessel, setVessel] = useState('');
  const [vesselLabel, setVesselLabel] = useState('Select Vessel Type');
  const [weight, setWeight] = useState('');
  const router = useRouter();


  interface Pot {
    id: string;
    title: string;
    description: string;
    stage: string;
    method: string;
    vessel: string;
    weight: string;
  }
  

  const handleAddPot = () => {
    console.log('New Pot:', { title, stage, method, vessel, weight, description });

    // // Navigate to Pots tab after adding the pot
    router.push('/(tabs)/pots');
  };

  // Set Modular picker for stages, methods, vessels 
  const stages = [
    { key: 'stage1', label: 'Idea' },
    { key: 'stage2', label: 'Thrown / Formed' },
    { key: 'stage3', label: 'Trimmed' },
    { key: 'stage4', label: 'Bisque Kiln Queue' },
    { key: 'stage5', label: 'Bisque Fired' },
    { key: 'stage6', label: 'Glazed' },
    { key: 'stage7', label: 'Final Firing Queue' },
    { key: 'stage8', label: 'Finished Work' }
  ];

  const methods = [
    { key: 'wheel-thrown', label: 'Wheel Thrown' },
    { key: 'handbuilt', label: 'Handbuilt' },
    { key: 'coil', label: 'Coiled' },
    { key: 'molded', label: 'Molded' }
  ];

  const vessels = [
    { key: 'mug', label: 'Mug' },
    { key: 'closed-form', label: 'Closed form' },
    { key: 'vase', label: 'Vase' },
    { key: 'bud-vase', label: 'Bud Vase' },
    { key: 'pitcher', label: 'Pitcher' },
    { key: 'pot', label: 'Pot' }
  ];

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Add New Pot</Text>
      <TextInput
        style={styles.input}
        placeholder="Pot Name"
        value={title}
        onChangeText={setTitle}
      />
      <ModalSelector
        data={stages}
        initValue={stageLabel}
        onChange={(option) => {
          setStage(option.key);
          setStageLabel(option.label);
        }}
        style={styles.input}
        selectStyle={styles.select}
        initValueTextStyle={styles.initValueText}
        selectTextStyle={styles.selectText}
      />
      <ModalSelector
        data={methods}
        initValue={methodLabel}
        onChange={(option) => {
          setMethod(option.key);
          setMethodLabel(option.label);
        }}
        style={styles.input}
        selectStyle={styles.select}
        initValueTextStyle={styles.initValueText}
        selectTextStyle={styles.selectText}
      />
      <ModalSelector
        data={vessels}
        initValue={vesselLabel}
        onChange={(option) => {
          setVessel(option.key);
          setVesselLabel(option.label);
        }}
        style={styles.input}
        selectStyle={styles.select}
        initValueTextStyle={styles.initValueText}
        selectTextStyle={styles.selectText}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
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
    justifyContent: 'center',
  },
  select: {
    borderWidth: 0, // Remove the border from the selector itself
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
  },
  initValueText: {
    color: 'gray',
  },
  selectText: {
    color: 'black',
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default AddPot;
