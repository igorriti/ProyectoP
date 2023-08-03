import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, FlatList, TextInput } from 'react-native';
import { Ionicons,MaterialCommunityIcons,Feather } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list'
import InputSpinner from "react-native-input-spinner";

import horses from '../../assets/horses';

export default function BetListModal({ isVisible, onClose, bets, deleteBet, editBet }) {
    const [players, setPlayers] = useState([]);
    const [horseData, setHorseData] = useState(horses.map((horse) => ({ key: horse, value: horse })))
    const [editPlayer, setEditPlayer] = useState('');
    const [previousHorse, setPreviousHorse] = useState('');
    const [editHorse, setEditHorse] = useState('');
    const [editDrinks, setEditDrinks] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedHorseIndex, setSelectedHorseIndex] = useState(0);
    const [isEditBetModalVisible, setIsEditBetModalVisible] = useState(false);
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

    const handleCloseEditBet = () => {
        
        setEditPlayer('');
        setEditHorse('');
        setEditDrinks(0);
        setSelectedIndex(0);
        setIsEditBetModalVisible(false);

    };
    const handleEditBet = () => {
        // const newBets = [bets];
        // newBets[selectedIndex].horse = editHorse;
        // newBets[selectedIndex].drinks = editDrinks;
        const newBet = {
            player: editPlayer,
            horse: editHorse,
            drinks: editDrinks,
        }
        editBet(editPlayer, previousHorse, newBet);
        // editBets(newBets);
        handleCloseEditBet()
    };

    const localEditBet = (index) => {
        setEditPlayer(bets[index].player);
        setEditHorse(bets[index].horse);
        setPreviousHorse(bets[index].horse)
        setEditDrinks(bets[index].drinks);
        setSelectedIndex(index);
        setSelectedHorseIndex(horseData.findIndex((horse) => horse.value === bets[index].horse));
        setIsEditBetModalVisible(true);
    }
    

    useEffect(() => {
        if (isVisible) {
        animateModal(1);
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
        <Text style={styles.title}>Apuestas</Text>
        <FlatList
          style={{width: "100%", maxHeight: 210}}
          data={bets}
          renderItem={({item, index}) => (
            <View style={styles.playerItem}>
              <Text>{item.player}</Text>
              <View style={{flexDirection:"row", alignItems: "center", justifyContent:"center"}}>
                <Feather name="edit-2" size={22} color="black" style={{marginRight:10}} onPress={()=>localEditBet(index)}/>
                <Ionicons
                    name="ios-trash-outline"
                    size={24}
                    onPress={() => deleteBet(index)}
                />

              </View>

            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.deleteAllButton}onPress={()=>deleteBet(-1)}>
            <MaterialCommunityIcons name="delete-forever" size={20} color="white" />
            <Text style={{color: "white"}}>Borrar todo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.deleteAllButton, {backgroundColor : "#00b3a6"}]} onPress={handleClose}>
            <Ionicons name="checkmark-done" size={20} color="white" />
            <Text style={{color: "white"}}>Listo</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      {/* Modal de editar apuesta */}
      {isEditBetModalVisible && (
          <View style={styles.addPlayerModalOverlay}>
            <View style={styles.addPlayerModal}>
                <Text style={{fontSize: 20,fontWeight: 'bold', textAlign: 'center'}}>Editar apuesta</Text>
                <Text style={{fontSize: 16,fontWeight: 'bold', textAlign: 'center', marginBottom:10}}>{editPlayer} aposto por</Text>
                <View style={{width: '80%', marginBottom:20}} > 
                    <SelectList 
                        setSelected={(val) => setEditHorse(val)} 
                        data={horseData} 
                        defaultOption={horseData[selectedHorseIndex]}
                        save="value"
                        placeholder='Seleccione caballo'
                        search={false}
                        maxHeight={100}
                    />

                </View>
                <View style={{width: '60%', marginBottom:20}} > 

                    <InputSpinner
                        max={15}
                        min={0}
                        step={1}
                        longStep={4}
                        colorMax={"#db1a37"}
                        colorMin={"#db1a37"}
                        value={editDrinks}
                        onChange={(num) => {
                            setEditDrinks(num);
                        }}
                        placeholder='0'
                        maxLength={2}
                        precision={0}
                        skin='clean'
                    />
                </View>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.deleteAllButton} onPress={handleCloseEditBet}>
                    <Text style={{color: "white"}}>Cancelar</Text>
                    </TouchableOpacity>
                    {
                      editHorse !== previousHorse &&
                      <TouchableOpacity style={[styles.deleteAllButton, {backgroundColor : "#6a87fc"}]} onPress={handleEditBet}>
                      <Text style={{color: "white"}}>Confirmar</Text>
                      </TouchableOpacity>
                    }


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