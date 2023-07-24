import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, TextInput, Button } from 'react-native';
import DropdownSelect from  './DropdownSelect';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';

export default function BetModal({ isVisible, onClose, players, horses, submitBet }) {
    const [selectedPlayer, setSelectedPlayer] = useState("");
    const [selectedHorse, setSelectedHorse] = useState("");
    const [drinkAmount, setDrinkAmount] = useState(0);
    const [modalAnimValue] = useState(new Animated.Value(0));
    const [playerOpen, setPlayerOpen] = useState(false);
    const [horseOpen, setHorseOpen] = useState(false);
    const [playerValue, setPlayerValue] = useState(null)
    const [horseValue, setHorseValue] = useState(null)
    const [playerItems, setPlayerItems] = useState(players.map((player) => ({ label: player, value: player })))
    const [horseItems, setHorseItems] = useState(horses.map((horse) => ({ label: horse, value: horse })))
    // const onPlayerOpen = useCallback(() => {
    //     setHorseOpen(false);
    // }, []);

    // const onHorseOpen = useCallback(() => {
    //     setPlayerOpen(false);
    // }, []);

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

    useEffect(() => {
        if (isVisible) {
        animateModal(1);
        } else {
        animateModal(0);
        }
    }, [isVisible]);

    useEffect(() => {
        setPlayerItems(players.map((player) => ({ label: player, value: player })))
    }, []);
    if (!isVisible && modalOpacity.__getValue() === 0) {
        return null;
    }

  return (
    <View style={styles.overlay}>
      <Animated.View style={[styles.modal, modalStyle]}>
        <Text style={styles.title}>Agregar Apuesta</Text>
        <View style={styles.bettingContainer}>
                {/* <Text style={styles.text}>Seleccione jugador:</Text> */}
                <DropDownPicker
                    open={playerOpen}
                    setOpen={setPlayerOpen}
                    onOpen={onPlayerOpen}
                    value={playerValue}
                    setValue={setPlayerValue}
                    items={playerItems}
                    setItems={setPlayerItems}
                    // onChangeItem={item => setSelectedPlayer(item.value)}         
                    style={{ marginBottom:20,}}
                    placeholder='Seleccione jugador'
                    language='ES'
                />
                {/* <Text style={styles.text}>Seleccione Caballo:</Text> */}
                <View style={{ zIndex: 700, flex:1 }}>

                <DropDownPicker
                    open={horseOpen}
                    setOpen={setHorseOpen}
                    onOpen={onHorseOpen}
                    value={horseValue}
                    setValue={setHorseValue}
                    items={horseItems}
                    setItems={setHorseItems}
                    // onChangeItem={item => setSelectedHorse(item.value)}
                    // zIndex={1}
                    // zIndexInverse={1}   
                    theme='LIGHT'      
                    style={{ backgroundColor: '#fafafa' }}
                    placeholder='Seleccione caballo'
                    language='ES'
                />
            </View>
            <Text style={styles.text}>Tragos a apostar:</Text>
            <TextInput 
                style={styles.input}
                placeholder='Enter Drink Amount' 
                onChangeText={text => setDrinkAmount(Number(text))}
                value={String(drinkAmount)}
                keyboardType='numeric'
            />
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.deleteAllButton} onPress={handleClose}>
            <Text style={{color: "white"}}>Cancelar</Text>
          </TouchableOpacity>
          <Button title='Submit Bet' onPress={() => submitBet(selectedPlayer, selectedHorse, drinkAmount)} />
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
    padding: 20,
    alignItems: 'center',
    width: '80%',
    height: '100%'
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
});
