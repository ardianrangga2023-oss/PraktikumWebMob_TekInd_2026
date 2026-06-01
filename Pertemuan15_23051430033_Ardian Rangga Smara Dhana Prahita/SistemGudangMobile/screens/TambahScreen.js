import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

function TambahScreen({ navigation }) {
  const [nama, setNama] = useState('');
  const [stok, setStok] = useState('');
  const [lokasi, setLokasi] = useState('');

  const handleSimpan = () => {
    if (!nama || !stok || !lokasi) {
      Alert.alert("Error", "Semua kolom form harus diisi!");
      return;
    }
    
    Alert.alert("Sukses", `Barang "${nama}" berhasil disimulasi untuk ditambahkan!`);
    navigation.goBack(); // Kembali ke halaman utama setelah simpan
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Form Tambah Barang Gudang</Text>
      
      <Text style={styles.label}>Nama Barang:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Contoh: Ring Piston v2" 
        value={nama}
        onChangeText={setNama}
      />

      <Text style={styles.label}>Jumlah Stok:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Contoh: 50" 
        keyboardType="numeric"
        value={stok}
        onChangeText={setStok}
      />

      <Text style={styles.label}>Lokasi Rak/Gudang:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Contoh: Rak C-5" 
        value={lokasi}
        onChangeText={setLokasi}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Simpan Barang" color="#2c3e50" onPress={handleSimpan} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center'
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50'
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7f8c8d',
    marginTop: 15,
    marginBottom: 5
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    fontSize: 16
  }
});

export default TambahScreen;