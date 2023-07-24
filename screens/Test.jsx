import React, { useState } from 'react';

import { View } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list'

export default function Test() {
    const [selected, setSelected] = React.useState("");
  
    const data = [
        {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]
  return (
<View style={{
      backgroundColor: '#171717',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15
    }}>

        <SelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                save="value"
            />
    </View>
  );
}