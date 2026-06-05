import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function DetailScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Detail Posisi Barang</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
})