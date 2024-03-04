import { View, FlatList, StyleSheet, Text } from 'react-native';
import data from '@/assets/data.json'
import Item from '@/components/Item';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
