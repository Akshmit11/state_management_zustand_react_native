import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import useCartStore from '@/store/cartStore';

interface ItemProps {
    item: {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: {
            rate: number;
            count: number;
        }
    }
}

export default function Item({ item }: ItemProps) {

  const {addProduct, reduceProduct} = useCartStore();

  return (
    <View style={styles.item__container}>
      <Image 
        style={styles.item__cartItemImage}
        source={{ uri: item?.image }}
      />
      <View style={styles.item__cartItemInfoContainer}>
        <Text style={styles.item__title}>{item.title}</Text>
        <Text style={styles.item__price}>${item.price}</Text>
      </View>
      <View style={styles.item__buttonContainer}>
        <TouchableOpacity style={{padding: 10}} onPress={() => reduceProduct(item)}>
          <Ionicons name='remove' size={20} color={'#000'} />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}} onPress={() => addProduct(item)}>
          <Ionicons name='add' size={20} color={'#000'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    item__container: {
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20
    },
    item__cartItemImage: {
        width: 50,
        height: 50
    },
    item__cartItemInfoContainer: {
      flex: 1
    },
    item__title: {
      fontSize: 16,
    },
    item__price: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    item__buttonContainer: {
      flexDirection: "row",
      alignItems: "center"
    }
})