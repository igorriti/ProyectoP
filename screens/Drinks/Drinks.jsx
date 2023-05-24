import React, { useState, useEffect, useCallback} from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Fuse from 'fuse.js';
import drinks from '../../assets/cards/Drinks';
import BackgroundMain from '../../components/General/BackgroundMain';
import { useSharedValue } from 'react-native-reanimated';
import DrinkItem from '../../components/Drinks/DrinkItem';
import BackButton from '../../components/General/BackButton';
export default function Drinks() {
    const [search, setSearch] = useState('');
    const [filteredDrinks, setFilteredDrinks] = useState(drinks);
    const viewableItems = useSharedValue([])
    const viewableItemsChanged = useCallback(({ viewableItems: vItems }) => {
        viewableItems.value = vItems;
      }, []);
    useEffect(() => {
        const fuse = new Fuse(drinks, { keys: ['title', 'ingredients'] });
        if (search) {
        setFilteredDrinks(fuse.search(search).map(({ item }) => item));
        } else {
        setFilteredDrinks(drinks);
        }
    }, [search]);

    const updateSearch = (search) => {
        setSearch(search);
    };



  return (
    <SafeAreaView style={styles.container}>
        <BackgroundMain />
        <BackButton />
        {/* Titulo de la screen*/}
        <Text style={{ fontSize: 30, color: '#fff', fontWeight: 'bold', marginTop: 20, }}>
            Bebidas
        </Text>
        <TextInput
            style={styles.searchBar}
            placeholder="Buscar..."
            onChangeText={updateSearch}
            value={search}
        />
            <FlatList

                data={filteredDrinks}
                contentContainerStyle={{ paddingTop: 40, justifyContent:"center", alignItems:"center" }}
                onViewableItemsChanged={viewableItemsChanged}

                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                <DrinkItem
                    item={item}
                    viewableItems={viewableItems}

                />
                )}

            />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBar: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        paddingLeft: 10,
        margin: 5,
        marginTop: 20,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
    },

    itemImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    itemDetails: {
      justifyContent: 'center',
      flex: 1,
    },
    itemTitle: {
      fontSize: 18,
    },
    itemDescription: {
      color: '#666',
    },
  });
  