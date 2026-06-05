import React from "react";
import { SafeAreaView, StatusBar, Platform, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function TabIndex() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
        name="Home"
        component={HomeScreen as any}
        options={{title: 'Warehouse Locator', headerShown: true}}
        />

        <Stack.Screen
        name="Detail"
        component={DetailScreen as any}
        options={{title: 'Detail Posisi Barang'}}
        />

      </Stack.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0, 
  },
});