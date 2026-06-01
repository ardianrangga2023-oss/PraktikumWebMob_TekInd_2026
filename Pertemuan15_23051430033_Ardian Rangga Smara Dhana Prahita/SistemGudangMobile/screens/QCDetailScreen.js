import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

function QCDetailScreen({ route, navigation }) {
  // Menerima data komponen dan fungsi pengubah state dari halaman utama
  const { itemData, onUpdateStatus } = route.params;

  const handleEksekusiQC = (statusPilihan) => {
    // Jalankan fungsi pengubah state yang berada di QCHomeScreen
    onUpdateStatus(itemData.id, statusPilihan);
    
    Alert.alert("Inspeksi Berhasil", `Komponen dinyatakan: ${statusPilihan}`);
    navigation.goBack(); // Langsung balik ke halaman utama setelah klik
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Item yang Diperiksa:</Text>
        <Text style={styles.title}>{itemData.namaItem}</Text>
        
        <View style={styles.divider} />

        {/* Poin 3.b: Standar Kualitas Pengujian Mutu */}
        <Text style={styles.label}>Spesifikasi Standar Kualitas (QA):</Text>
        <Text style={styles.bullet}>• Batas toleransi dimensi fisik komponen maksimal ±0.02 mm</Text>
        <Text style={styles.bullet}>• Permukaan struktural material bersih tanpa goresan kasar/korosi</Text>
        <Text style={styles.bullet}>• Lolos pengetesan ketahanan beban batas minimum 50 kg</Text>
      </View>

      {/* Poin 3.b & 3.c: Tombol Simulasi Status Kelolosan */}
      <Text style={styles.sectionTitle}>Ambil Keputusan Inspeksi:</Text>
      
      <View style={styles.buttonRow}>
        <View style={{ flex: 1, marginRight: 8 }}>
          <Button 
            title="Lolos (OK)" 
            color="#27ae60" 
            onPress={() => handleEksekusiQC('Lolos')} 
          />
        </View>
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Button 
            title="Gagal (NG)" 
            color="#e74c3c" 
            onPress={() => handleEksekusiQC('Gagal')} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa', 
    padding: 20, 
    justifyContent: 'center' 
  },
  card: { 
    backgroundColor: '#fff', 
    padding: 22, 
    borderRadius: 12, 
    elevation: 3, 
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  label: { 
    fontSize: 12, 
    color: '#95a5a6', 
    textTransform: 'uppercase', 
    letterSpacing: 0.8,
    fontWeight: '600'
  },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#2c3e50', 
    marginTop: 6, 
    marginBottom: 15 
  },
  divider: { 
    height: 1, 
    backgroundColor: '#ecf0f1', 
    marginBottom: 15 
  },
  bullet: { 
    fontSize: 14, 
    color: '#34495e', 
    marginTop: 8, 
    lineHeight: 22 
  },
  sectionTitle: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#7f8c8d', 
    marginBottom: 12, 
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  buttonRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  }
});

export default QCDetailScreen;