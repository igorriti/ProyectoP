import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View } from 'react-native';

export default function DropdownSelect({ items, defaultValue, onChangeItem }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  // This function will be called when a new item is selected
  const handleValueChange = (itemValue) => {
    onChangeItem(itemValue);
    setValue(itemValue);
  };
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <View style={{ zIndex: 1000 }}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={handleValueChange}
        zIndexInverse={1000} 
        style={{ backgroundColor: '#fafafa' }}
      />
    </View>
  );
};
