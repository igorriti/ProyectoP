// DrinkItem.js
import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, useAnimatedGestureHandler } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
const DrinkItem = ({ item, viewableItems, onPress }) => {
    const navigation = useNavigation();
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(viewableItems.value.find((viewableItem) => viewableItem.item.id === item.id && viewableItem.isViewable));
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [{ scale: withTiming(isVisible ? 1 : 0.6) }],
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = item.id;
    },
    onEnd: (_) => {
      onPress(item.id);
    },
  });

  return (
    <Animated.View
      style={[styles.container, rStyle]}
      onTouchStart={gestureHandler.onStart}
      onTouchEnd={gestureHandler.onEnd}
    >
      <Pressable   onPress={() => navigation.navigate('DrinkDetails', item)} style={styles.pressable}>
        <Image style={styles.image} source={item.photo} />
        <View style={styles.details}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 15,
        marginBottom: 20,
        width: '90%',
        height: 100,
    },
    pressable: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 15,
        marginRight: 10,
        resizeMode: 'cover',
    },
    details: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
    },
});

export default DrinkItem;
