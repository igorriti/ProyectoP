import React, { useEffect, useState, useRef } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import BackgroundMain from "../components/General/BackgroundMain";
import BackButton from "../components/General/BackButton";
import { ThemedButton } from 'react-native-really-awesome-button';
import clubs from '../assets/cards/Clubs';
import InfoButton from "../components/General/InfoButton";
import ExplanationModal from '../components/General/ExplanationModal';

export default function Fulvo({route}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(require("../assets/images/clubs/VasoPolaco.webp"));
    const [remainingImages, setRemainingImages] = useState((data) => {
        return clubs.sort(() => Math.random() - 0.5)})
    const [imageTitle, setImageTitle] = useState(null);
    const [showTitle, setShowTitle] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [infoText,setInfoText] = useState(route.params.description);
    const [name, setName] = useState(route.params.name);
    const intervalRef = useRef(null);
  
    const newClub = () => {
        setShowTitle(false);
        // Obten un subconjunto de imágenes al azar para la animación
        const animationImages = remainingImages.sort(() => 0.5 - Math.random()).slice(0, 15);
      
        let i = 0;
        intervalRef.current = setInterval(() => {
          setCurrentImage(animationImages[i].path);
          i+=1;
          if (i >= animationImages.length) {
            clearInterval(intervalRef.current);
            const randomNum = Math.floor(Math.random() * remainingImages.length);
            const newImage = remainingImages[randomNum];
            setIsAnimating(true);

            setImageTitle(newImage.title);  // Mueve esta línea aquí
            setCurrentImage(newImage.path);  // Y esta línea después de setImageTitle
            setRemainingImages(remainingImages.filter((img, index) => index !== randomNum));
          }
    
        }, 120);
        setImageTitle(animationImages[i].title);
        setIsAnimating(false);
      };
    
      
      
  
    const revealTitle = () => {
      setShowTitle(true);
    }
  
    useEffect(() => {
      // Establece la primera imagen y su título

    }, []);
  
    return (
      <View style={styles.container}>
        <BackgroundMain/>
        <BackButton/>
        <InfoButton onPress={()=>setModalVisible(true)}/>
        <Image source={currentImage} style={styles.image} />
        {showTitle && <Text style={styles.title}>{imageTitle}</Text>}
  
        <ThemedButton name="bruce" type="primary" style={{marginTop:30}} onPress={newClub}> Sacar club </ThemedButton>
        {
            currentImage != clubs[0].path && imageTitle && isAnimating &&
                <ThemedButton name="bruce" type="secondary" style={{marginTop:30}} onPress={revealTitle}> Revelar título </ThemedButton>
        }
        <ExplanationModal isVisible={modalVisible} onClose={()=>setModalVisible(false)} title={name} content={infoText}/>

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: "contain",
    },
    title: {
      color: "#fff",
      fontSize: 20,
      textAlign: "center",
      margin: 20,
    }
  });