import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet } from 'react-native';

// Página de Menu
function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cardápio</Text>
      <Button
        title="Item 1: Pizza"
        onPress={() => navigation.navigate('Detalhes', { item: 'Pizza', description: 'Pizza deliciosa com molho especial!', price: 'R$ 30,00' })}
      />
      <Button
        title="Item 2: Hambúrguer"
        onPress={() => navigation.navigate('Detalhes', { item: 'Hambúrguer', description: 'Hambúrguer suculento com queijo e bacon!', price: 'R$ 20,00' })}
      />
    </View>
  );
}

// Página de Detalhes
function DetailsScreen({ route }) {
  const { item, description, price } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detalhes do Item</Text>
      <Text style={styles.item}>Nome: {item}</Text>
      <Text style={styles.description}>Descrição: {description}</Text>
      <Text style={styles.price}>Preço: {price}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: 'green',
  },
});