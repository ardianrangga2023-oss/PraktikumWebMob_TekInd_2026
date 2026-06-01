import React from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

// @ts-ignore
import QCHomeScreen from '../../screens/QCHomeScreen';
// @ts-ignore
import QCDetailScreen from '../../screens/QCDetailScreen';

const Stack = createNativeStackNavigator();

export default function TabIndex() { 
  return ( 
    <Stack.Navigator initialRouteName="QCHome"> 
      
      {/* Halaman Utama QC */}
      <Stack.Screen 
        name="QCHome" 
        component={QCHomeScreen} 
        options={{ title: 'Daftar Inspeksi QC', headerShown: false }} 
      /> 
      
      {/* Halaman Detail Kendali Mutu */}
      <Stack.Screen 
        name="QCDetail" 
        component={QCDetailScreen} 
        options={{ title: 'Lembar Verifikasi Kualitas' }} 
      /> 
      
    </Stack.Navigator> 
  ); 
}