import { View, Image } from 'react-native'
import React from 'react'
import Barrel from './Barrel'

export default function Gun({spin, rotation}) {
  return (
    <View style={{alignItems: "center",justifyContent: "center", height: 250, }}>
        <Barrel onSpin={spin} rot={rotation} />
        <View style={{ zIndex: 4, position: 'absolute', top:0, justifyContent: "center", alignItems: "center", }}>
          <Image source={require('../../assets/images/barrel.png')} style={{width: 100, height:175}}/>
        </View>
    </View>
  )
}