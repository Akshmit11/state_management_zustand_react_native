import { View, FlatList, StyleSheet, Text } from 'react-native';
import useCartStore from '@/store/cartStore';
import ItemsCart from '@/components/ItemsCart';

export default function TabTwoScreen() {

  const { products } = useCartStore();

  return (
    <View style={styles.container}>
      <FlatList 
        data={products}
        renderItem={({ item }) => <ItemsCart item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
