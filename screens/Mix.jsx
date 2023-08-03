import { View, Text } from 'react-native'
import React, {useState} from 'react';
import mix from '../assets/cards/Mix';
import SwipableCards from '../components/General/SwipableCards';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/General/BackButton';
import CountdownModal from '../components/General/CountdownModal';
import ExplanationModal from '../components/General/ExplanationModal';
import InfoButton from '../components/General/InfoButton';

export default function Mix({route}) {
    const [cards, setCards] = useState(() => {
        return mix.sort(() => Math.random() - 0.5);
      });
    const [countdownModalVisible, setCountdownModalVisible] = useState(false);

    const [infoText,setInfoText] = useState(route.params.description);
    const [name, setName] = useState(route.params.name);
    const [modalVisible, setModalVisible] = useState(false);

    useState(() => {
        console.log(cards[500]);
    }, []);
    return (
    <SafeAreaView style={{flex:1, backgroundColor: "#000"}}>
        <BackButton/>
        <InfoButton onPress={()=>setModalVisible(true)}/>
        <SwipableCards cards={cards} setCards={setCards} type="classic" mix={true} renderAdditionalComponent={()=>{setCountdownModalVisible(true)}} />
        <CountdownModal isVisible={countdownModalVisible} setVisible={setCountdownModalVisible} />
        <ExplanationModal isVisible={modalVisible} onClose={()=>setModalVisible(false)} title={name} content={infoText}/>

    </SafeAreaView>
    );
}
