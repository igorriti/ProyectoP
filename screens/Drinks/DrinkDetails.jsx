import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundMain from '../../components/General/BackgroundMain';
import BackButton from '../../components/General/BackButton';

export default function DrinkDetails({ route }) {
  const { title, photo, description, ingredients, steps } = route.params;
  const scale = useSharedValue(1);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  useEffect(() => {
    scale.value = withSpring(0);
    setTimeout(() => {
      scale.value = withSpring(1);
    }, 100);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <BackgroundMain />
        <BackButton />
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Image source={{ uri: photo }} style={styles.image}  />

        </View>

        <View style={styles.subHeadingContainer}>
            <Text style={styles.subHeading}>Ingredientes</Text>
            {ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.listItem}>• {ingredient}</Text>
            ))}
        </View>
        <View style={styles.subHeadingContainer}>

            <Text style={styles.subHeading}>Preparacion</Text>
            {steps.map((step, index) => (
                <Text key={index} style={styles.listItem}>{index+1}. {step}</Text>
            ))}
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
    },
    titleContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    subHeadingContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 20,
        padding: 10,
        
    },
    image: {
        width: 150,
        //Maintain aspect ratio of the image
        height: 150,
        
        
        borderRadius: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#fff',

    },
    description: {
        fontSize: 20,
        marginVertical: 10,
        color: '#fff',
        fontStyle: 'italic',
        textAlign: 'center',

    },
    subHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',

    },
    listItem: {
        fontSize: 16,
        marginLeft: 10,
        color: '#000',

    },
});
