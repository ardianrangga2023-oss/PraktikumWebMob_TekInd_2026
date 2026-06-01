import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

function QCHomeScreen({ navigation }) {
  // State untuk menyimpan daftar item produksi dan status QC-nya
  const [dataQC, setDataQC] = useState([
    { id: '1', namaItem: 'Komponen Casing Mesin A', status: 'Pending' },
    { id: '2', namaItem: 'Sumbu Poros Roda Gigi', status: 'Pending' },
    { id: '3', namaItem: 'Kabel Induk Kelistrikan', status: 'Pending' },
  ]);

  // Fungsi callback untuk mengupdate status item (Lolos/Gagal) dari layar Detail
  const updateStatusQC = (id, statusBaru) => {
    setDataQC(prevData =>
      prevData.map(item => (item.id === id ? { ...item, status: statusBaru } : item))
    );
  };

  const renderItem = ({ item }) => {
    // Poin 3.c: Menentukan warna teks nama komponen secara dinamis
    let textColor = '#2c3e50'; // Warna default (Pending)
    let badgeColor = '#f7f9fa';

    if (item.status === 'Gagal') {
      textColor = '#e74c3c'; // Merah jika Gagal QC
      badgeColor = '#fde8e8';
    } else if (item.status === 'Lolos') {
      textColor = '#27ae60'; // Hijau jika Lolos QC
      badgeColor = '#eafaf1';
    }

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('QCDetail', {
            itemData: item,
            onUpdateStatus: updateStatusQC, // Mengirim fungsi update sebagai parameter navigasi
          })
        }
      >
        <View style={{ flex: 1, paddingRight: 10 }}>
          <Text style={[styles.itemText, { color: textColor }]}>
            {item.namaItem}
          </Text>
        </View>
        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <Text style={{ color: textColor, fontWeight: 'bold', fontSize: 12 }}>
            {item.status}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aplikasi Inspeksi QC</Text>
      <Text style={styles.subHeader}>Ardian Rangga Smara Dhana Prahita (23051430033)</Text>
      <Text style={styles.subHeader}>Pilih komponen di bawah untuk melakukan pengecekan kualitas standar pabrik:</Text>
      
      <FlatList
        data={dataQC}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingTop: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa', 
    paddingHorizontal: 15,
    paddingTop: 30 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5
  },
  subHeader: { 
    fontSize: 13, 
    color: '#7f8c8d', 
    marginBottom: 20,
    lineHeight: 18
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e9ecef',
    elevation: 1,
  },
  itemText: { 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  badge: { 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 75
  }
});

export default QCHomeScreen;