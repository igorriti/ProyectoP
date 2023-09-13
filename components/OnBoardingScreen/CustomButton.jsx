import {
    FlatList,
    StyleSheet,
    TouchableWithoutFeedback,
    useWindowDimensions,
  } from 'react-native';
  import React from 'react';
  import Animated, {
    AnimatedRef,
    SharedValue,
    interpolateColor,
    useAnimatedStyle,
    withSpring,
    withTiming,
  } from 'react-native-reanimated';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import {useNavigation} from '@react-navigation/native';
  import { AntDesign } from '@expo/vector-icons';
  import data from '../../screens/OnBoardingScreen/data'
  const CustomButton = ({flatListRef, flatListIndex, dataLength, x}) => {
    const {width: SCREEN_WIDTH} = useWindowDimensions();
    const navigation = useNavigation();
  
    const buttonAnimationStyle = useAnimatedStyle(() => {
      return {
        width:
          flatListIndex.value === dataLength - 1
            ? withSpring(140)
            : withSpring(60),
        height: 60,
      };
    });
  
    const arrowAnimationStyle = useAnimatedStyle(() => {
      return {
        width: 30,
        height: 30,
        opacity:
          flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
        transform: [
          {
            translateX:
              flatListIndex.value === dataLength - 1
                ? withTiming(100)
                : withTiming(0),
          },
        ],
      };
    });

    const setOnboardingCompleted = async () => {
      try {
        await AsyncStorage.setItem('onboardingCompleted', JSON.stringify(true));
      } catch (error) {
        console.error("Error setting 'onboardingCompleted'", error);
      }
    };
    const textAnimationStyle = useAnimatedStyle(() => {
      return {
        opacity:
          flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
        transform: [
          {
            translateX:
              flatListIndex.value === dataLength - 1
                ? withTiming(0)
                : withTiming(-100),
          },
        ],
      };
    });
    const animatedColor = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
        x.value,
        [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
        //COLORES DE FONDO
        [...data.map(item => item.textColor)],
      );
  
      return {
        backgroundColor: backgroundColor,
      };
    });

    return (
      <TouchableWithoutFeedback
        onPress={async () => {
          if (flatListIndex.value < dataLength - 1) {
            flatListRef.current?.scrollToIndex({index: flatListIndex.value + 1});
          } else {
              await setOnboardingCompleted();
              navigation.reset({
                index: 0,
                routes: [{ name: 'GameMenu' }],
              });
          }
        }}>
        <Animated.View
          style={[styles.container, buttonAnimationStyle, animatedColor]}>
          <Animated.Text style={[styles.textButton, textAnimationStyle]}>
            A jugar!
          </Animated.Text>
          <Animated.View
            style={[styles.arrow, arrowAnimationStyle]}
          >
            <AntDesign name="arrowright" size={24} color="white" />
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };
  
  export default CustomButton;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1e2169',
      padding: 10,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    arrow:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {color: 'black', fontSize: 16, position: 'absolute'},
  });