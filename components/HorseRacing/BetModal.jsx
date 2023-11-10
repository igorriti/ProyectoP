import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, TextInput, Button } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import InputSpinner from "react-native-input-spinner";
import {Ionicons} from '@expo/vector-icons';
export default function BetModal({ isVisible, onClose, players, horses, submitBet, bets }) {
    const [selectedPlayer, setSelectedPlayer] = useState("");
    const [selectedHorse, setSelectedHorse] = useState("");
    const [drinkAmount, setDrinkAmount] = useState(3);
    const [modalAnimValue] = useState(new Animated.Value(0)); 
    const [playerData, setPlayerData] = useState(players.map((player) => ({ key: player, value: player, disabled: bets.some(bet => bet.player === player)? true : false })))
    const [horseData, setHorseData] = useState(horses.map((horse) => ({ key: horse, value: horse })))
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

    const handleSubmit = () => {
        submitBet(selectedPlayer, selectedHorse, drinkAmount);
        setSelectedPlayer("");
        setSelectedHorse("");
        setDrinkAmount(3);
        handleClose();
    }
    const handleClose = () => {
        animateModal(0, onClose);
    };

    useEffect(() => {
        if (isVisible) {
        animateModal(1);
        } else {
        animateModal(0);
        }
    }, [isVisible]);

    useEffect(() => {
      players.map((player) => ({ key: player, value: player, disabled: bets.some(bet => bet.player === player)? true : false }))    }
    , []);

    useEffect(() => {
      setPlayerData(players.map((player) => ({ 
          key: player, 
          value: player, 
          disabled: bets.some(bet => bet.player === player) ? true : false 
      })));
    }, [players, bets]);
    
    
      if (!isVisible && modalOpacity.__getValue() === 0) {
        return null;
    }

  return (
    <View style={styles.overlay}>
      <Animated.View style={[styles.modal, modalStyle]}>
        <Text style={styles.title}>Realizar apuesta</Text>
        <View style={styles.bettingContainer}>

            <View style={{width: '90%', marginBottom:20}} > 
                <SelectList 

                    setSelected={(val) => setSelectedPlayer(val)} 
                    data={playerData} 
                    save="value"
                    placeholder='Seleccione jugador'
                    searchPlaceholder='Buscar jugador'
                    notFoundText='Estas muy borracho, ese jugador no existe'
                    search={true}
                    maxHeight={100}
                />
            </View>
            <View style={{width: '90%'}}> 
                <SelectList 

                    setSelected={(val) => setSelectedHorse(val)} 
                    data={horseData} 
                    save="value"
                    placeholder='Seleccione caballo'
                    search={false}
                    maxHeight={100}

                />

            </View>
            <Text style={styles.text}>P\'s a apostar:</Text>
            {/* <TextInput 
                style={styles.input}
                placeholder='Enter Drink Amount' 
                onChangeText={text => setDrinkAmount(Number(text))}
                value={String(drinkAmount)}
                keyboardType='numeric'
            /> */}
            <View style={{width: '60%', marginBottom:5}} > 

              <InputSpinner
                  max={15}
                  min={0}
                  step={1}
                  longStep={4}

                  colorMax={"#db1a37"}
                  colorMin={"#db1a37"}
                  value={drinkAmount}
                  onChange={(num) => {
                      setDrinkAmount(num);
                  }}
                  placeholder='0'
                  maxLength={2}
                  precision={0}
                  skin='clean'
              />
            </View>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.deleteAllButton} onPress={handleClose}>
            <Text style={{color: "white"}}>Cancelar</Text>
          </TouchableOpacity>
          {
            selectedHorse !== "" && selectedPlayer !="" && drinkAmount > 0 &&
              <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                <Ionicons name="checkmark-done" size={20} color="white" />
                <Text style={{color: "white"}}>Listo</Text>
              </TouchableOpacity>
          }
        </View>
      </Animated.View>
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
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
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
  bettingContainer: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 500,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
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
  submit: {
    backgroundColor: "#00b3a6",
    padding: 10,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});
