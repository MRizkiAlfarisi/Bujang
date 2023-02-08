import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import MainPage from './components/MainPage';
import Pemasukan from './components/Pemasukan';
import Pengeluaran from './components/Pengeluaran';
import Pemasukaninput from './components/Pemasukaninput';
import Pengeluaraninput from './components/Pengeluaraninput';
import Bataspengeluaran from './components/Bataspengeluaran';
import History from './components/History';
import Pengaturan from './components/Pengaturan';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen options={{headerShown: false}} name="MainPage" component={MainPage} />
        <Stack.Screen options={{headerShown: false}} name="Pengaturan" component={Pengaturan} />
        <Stack.Screen options={{headerShown: false}} name="Bataspengeluaran" component={Bataspengeluaran} />
        <Stack.Screen options={{headerShown: false}} name="History" component={History} />
        <Stack.Screen options={{headerShown: false}} name="Pemasukan" component={Pemasukan} />
        <Stack.Screen options={{headerShown: false}} name="Pemasukaninput" component={Pemasukaninput} />
        <Stack.Screen options={{headerShown: false}} name="Pengeluaran" component={Pengeluaran} />
        <Stack.Screen options={{headerShown: false}} name="Pengeluaraninput" component={Pengeluaraninput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
