import React from 'react';
import {SafeAreaView, StatusBar, Platform, Stylesheet} from 'react-native';
import {NavigatorContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App (){
    return (
        <SafeAreaView style={Stylesheet.safeArea}>
            <NavigatorContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        option={{title:'Warehouse Locator', headerShow: true}}
                    />
                    <Stack.Screen
                        name="Detail"
                        component={DetailScreen}
                        option={{title:'Detail Barang'}}
                    />
                </Stack.Navigator>
            </NavigatorContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "fff",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});