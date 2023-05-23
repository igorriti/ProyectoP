import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, FlatList, TextInput } from 'react-native';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PlayersModal({ isVisible, onClose }) {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');
  const [isAddPlayerModalVisible, setIsAddPlayerModalVisible] = useState(false);
  const [modalAnimValue] = useState(new Animated.Value(0));
  const [inputError, setInputError] = useState('');

  const modalOpacity = modalAnimValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const modalScale = modalAnimValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  const modalStyle = {
    opacity: modalOpacity,
    transform: [{ scale: modalScale }],
  };

  const animateModal = (toValue, callback) => {
    Animated.timing(modalAnimValue, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (callback) callback();
    });
  };
  
  const handleClose = () => {
    animateModal(0, onClose);
  };

  const handleAddPlayerModalClose = () => {
    setIsAddPlayerModalVisible(false);
    setNewPlayer('');
  };

  const loadPlayers = async () => {
    const storedPlayers = await AsyncStorage.getItem('players');
    setPlayers(storedPlayers ? JSON.parse(storedPlayers) : []);
  };

  const addPlayer = async () => {
    if (newPlayer.trim() === '') {
      setInputError('El nombre del jugador no puede estar vacío');
      return;
    }
  
    const updatedPlayers = [...players, newPlayer];
    await AsyncStorage.setItem('players', JSON.stringify(updatedPlayers));
    setPlayers(updatedPlayers);
    handleAddPlayerModalClose();
    setInputError(''); // clear error on successful add
  };
  
  

  const deletePlayer = async (index) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);
    await AsyncStorage.setItem('players', JSON.stringify(updatedPlayers));
    setPlayers(updatedPlayers);
  };

  const deleteAllPlayers = async () => {
    await AsyncStorage.removeItem('players');
    setPlayers([]);
  };

  useEffect(() => {
    if (isVisible) {
      animateModal(1);
      loadPlayers();
    } else {
      animateModal(0);
    }
  }, [isVisible]);

  if (!isVisible && modalOpacity.__getValue() === 0) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <Animated.View style={[styles.modal, modalStyle]}>
        <Text style={styles.title}>Lista de jugadores</Text>
        <FlatList
          style={{width: "100%", maxHeight: 210}}
          data={players}
          renderItem={({item, index}) => (
            <View style={styles.playerItem}>
              <Text>{item}</Text>
              <Ionicons
                name="ios-trash-outline"
                size={24}
                onPress={() => deletePlayer(index)}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity style={styles.addPlayerButton} onPress={() => setIsAddPlayerModalVisible(true)}>
          <Ionicons name="ios-person-add" size={18} color="grey" />
          <Text> Agregar jugador</Text>
        </TouchableOpacity>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.deleteAllButton}onPress={deleteAllPlayers}>
            <AntDesign name="deleteusergroup" size={20} color="white" />
            <Text style={{color: "white"}}>Borrar todo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.deleteAllButton, {backgroundColor : "#00b3a6"}]} onPress={handleClose}>
            <Ionicons name="checkmark-done" size={20} color="white" />
            <Text style={{color: "white"}}>Listo</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      {/* Modal de añadir jugador */}
      {isAddPlayerModalVisible && (
          <View style={styles.addPlayerModalOverlay}>
            <View style={styles.addPlayerModal}>
              <Text style={{fontSize: 20,fontWeight: 'bold', textAlign: 'center'}}>Añadir jugador</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setNewPlayer(text)}
                value={newPlayer}
                placeholder='Nombre del jugador'
              />
              {inputError ? <Text style={styles.errorText}>{inputError}</Text> : null}

              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.deleteAllButton} onPress={handleAddPlayerModalClose}>
                  <Text style={{color: "white"}}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.deleteAllButton, {backgroundColor : "#6a87fc"}]} onPress={addPlayer}>
                  <Text style={{color: "white"}}>Añadir</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        )}

    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPlayerModalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    padding: 10,
  },
  errorText: {
    color: 'red',
  },
  
  playerItem: {
    width: "100%",
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  deleteAllButton: {
    backgroundColor: "#db1a37",
    padding: 10,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  closeButton: {
    top: 10,
    right: 10,
  },
  addPlayerButton:{
    width: "100%",
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    padding: 10,
    
  },
  addPlayerModal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
    position: 'absolute',
  },
});