import React, {useEffect} from 'react';
import { Image} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue, 
  useAnimatedGestureHandler, 
  useAnimatedStyle,
  withSpring,
  withDecay,
  withTiming,
  useDerivedValue,
  runOnJS,
  exp
} from 'react-native-reanimated';
import { Audio } from 'expo-av';

const Barrel = ({onSpin,rot}) => {
  const rotation = useSharedValue(0);
  const sound = new Audio.Sound();

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startRotation = rotation.value;

    },
    onActive: (event, ctx) => {
      rotation.value = ctx.startRotation + event.translationX * 0.2;
      runOnJS(playSound)();
    },
    onEnd: (event, ctx) => {
      rotation.value = withDecay({
        velocity: event.velocityX * 0.01,
      }, () => {
        // Find closest multiple of Math.PI / 3
        const closest = Math.round(rotation.value / (Math.PI / 3)) * (Math.PI / 3);
        // Spring to the closest value
        runOnJS(onSpin)();

        rotation.value = withSpring(closest);

      });
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}rad` }],
      zIndex: 3,
      width: 200, 
      height: 200,
    };
  });


  async function playSound() {
    if (sound._loading == true) {
      return;
    }
    if (sound._loaded == false) {
      await loadSound();
    }
    try {
      await sound.replayAsync();
    } catch (error) {
      console.log(error);
    }
  }

  async function loadSound() {
    try {
      await sound.loadAsync(require('../../assets/sounds/cylinder.mp3')); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    rotation.value = withTiming(rotation.value - Math.PI / 3);
  }, [rot]);

  useEffect(() => {

    loadSound();

    return () => {
      sound.unloadAsync();
    }
  }, []);

  return (
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={animatedStyle}>
          <Image
            source={require('../../assets/images/prueba.png')}
            style={{ width: 200, height: 200}}
          />
        </Animated.View>
      </PanGestureHandler>


  );
}

export default Barrel;