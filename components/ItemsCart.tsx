import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import useCartStore from '@/store/cartStore';
import { Product } from '@/store/interface';

interface ItemsCartProps {
    item: Product & {quantity: number}
}

export default function ItemsCart({ item }: ItemsCartProps) {

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
        <Text>{item.quantity}</Text>
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