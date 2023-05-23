import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';
import Gameicon from '../../components/General/Gameicon';


const FireButton = ({handlePress}) => {


  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Gameicon name="testicons-smoking-finger" size={70} color="#000" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    height: 100,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
});

export default FireButton;
