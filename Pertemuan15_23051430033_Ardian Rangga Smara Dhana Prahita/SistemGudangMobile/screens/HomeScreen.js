import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';

// Data Dummy Inventori Gudang (Sesuai dengan screenshot aplikasimu)
const dataInventori = [
  { id: '1', nama: 'Baut M10', stok: 500, lokasi: 'Rak A-1' },
  { id: '2', nama: 'Oli Mesin 20L', stok: 12, lokasi: 'Rak B-3' },
  { id: '3', nama: 'Packing Kayu', stok: 100, lokasi: 'Gudang Luar' },
  { id: '4', nama: 'Mur Ring 12', stok: 0, lokasi: 'Rak A-2' },
];

// Pastikan '{ navigation }' dimasukkan sebagai parameter agar bisa pindah halaman
function HomeScreen({ navigation }) {

  // Fungsi untuk me-render setiap item di dalam FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('Detail', { itemData: item })}
    >
      <View>
        <Text style={styles.title}>{item.nama}</Text>
        <Text style={styles.subTitle}>Stok: {item.stok}</Text>
      </View>
      <Text style={styles.lokasi}>{item.lokasi}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ardian Rangga Smara Dhana Prahita (23051430033)</Text>
      <Text style={styles.header}>Daftar Inventori Gudang</Text>
      
      {/* List Daftar Barang */}
      <FlatList
        data={dataInventori}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 10 }}
      />

      {/* TUGAS LATIHAN 2: Tombol Navigasi ke Layar Tambah Barang */}
      <View style={styles.bottomButtonContainer}>
        <Button 
          title="+ Tambah Barang Baru" 
          color="#27ae60" 
          onPress={() => navigation.navigate('Tambah')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
  },
  subTitle: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 4,
  },
  lokasi: {
    fontSize: 14,
    color: '#6c757d',
    marginLeft: 'auto', // Mendorong teks lokasi ke sebelah kanan kartu
  },
  bottomButtonContainer: {
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f1f3f5',
  }
});

export default HomeScreen;