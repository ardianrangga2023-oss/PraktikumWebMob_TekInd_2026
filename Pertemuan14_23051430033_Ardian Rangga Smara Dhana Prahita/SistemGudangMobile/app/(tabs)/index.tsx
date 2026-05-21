import { StatusBar } from 'expo-status-bar';
// 1. TAMBAH IMPORT SCROLLVIEW: Memasukkan 'ScrollView' dari react-native
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* 2. BUNGKUS KONTEN: Tambahkan ScrollView di sini */}
      {/* showsVerticalScrollIndicator={false} digunakan untuk menyembunyikan garis scroll di sebelah kanan agar UI lebih bersih */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Bagian Header (Ikut ke-scroll ke atas saat layar digulir) */}
        <View style={styles.header}>
          <Image 
            source={require('./logo_manufaktur_maju.png')} 
            style={styles.logo} 
          />
          <Text style={styles.headerTitle}>PT. Manufaktur Maju</Text>
          <Text style={styles.headerSubtitle}>Aplikasi Monitoring Gudang</Text>
          <Text style={styles.headerSubtitle}>23051430033 | Ardian Rangga Smara Dhana Prahita</Text>
        </View>

        {/* Bagian Konten Utama */}
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Selamat Datang, Operator!</Text>

          <TouchableOpacity 
            style={styles.card}
            onPress={() => Alert.alert("Info", "Membuka Detail Stok Gudang A...")}
          >
            <Text style={styles.cardTitle}>Status Gudang A</Text>
            <Text style={styles.cardValue}>Kapasitas: 85%</Text>
            <Text style={styles.cardStatus}>TEKAN UNTUK DETAIL</Text>
          </TouchableOpacity>

          <View style={[styles.card, styles.cardWarning]}>
            <Text style={styles.cardTitle}>Status Gudang B</Text>
            <Text style={styles.cardValue}>Kapasitas: 95%</Text>
            <Text style={styles.cardStatus}>PENUH</Text>
          </View>

          <TouchableOpacity 
            style={styles.card}
            onPress={() => Alert.alert("Info", "Membuka Detail Stok Gudang C...")}
          >
            <Text style={styles.cardTitle}>Status Gudang C</Text>
            <Text style={styles.cardValue}>Kapasitas: 45%</Text>
            <Text style={styles.cardStatus}>TEKAN UNTUK DETAIL</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card}
            onPress={() => Alert.alert("Info", "Membuka Detail Stok Gudang D...")}
          >
            <Text style={styles.cardTitle}>Status Gudang D</Text>
            <Text style={styles.cardValue}>Kapasitas: 60%</Text>
            <Text style={styles.cardStatus}>TEKAN UNTUK DETAIL</Text>
          </TouchableOpacity>

          <View style={[styles.card, styles.cardWarning]}>
            <Text style={styles.cardTitle}>Status Gudang E</Text>
            <Text style={styles.cardValue}>Kapasitas: 99%</Text>
            <Text style={styles.cardStatus}>PENUH</Text>
          </View>

          {/* ========================================================= */}
          {/* TUGAS PROYEK MINI : PROFIL MESIN (DENGAN LAYOUT FLEXBOX ROW) */}
          {/* ========================================================= */}
          <Text style={styles.sectionTitle}>Profil Mesin Produksi</Text>
          
          {/* machineCard menggunakan flexDirection: 'row' (default) */}
          <View style={styles.machineCard}>
            {/* Foto Mesin Berada di Kiri */}
            <Image 
              source={{ uri: 'data:image/jpeg;base64,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' }} 
              style={styles.machineImage} 
            />
            
            {/* machineInfo menempati sisa ruang di Kanan foto */}
            <View style={styles.machineInfo}>
              <Text style={styles.machineName}>Mesin CNC Milling - M1</Text>
              <Text style={styles.machineDetail}>Tahun Pembuatan: 2024</Text>
              <Text style={styles.machineStatus}>
                Status: <Text style={{ color: '#27ae60', fontWeight: 'bold' }}>AKTIF</Text>
              </Text>
            </View>
          </View>

          <View style={styles.machineCard}>
            {/* Foto Mesin Berada di Kiri */}
            <Image 
              source={{ uri: 'https://image.made-in-china.com/2f0j00RvWcVtmnEkqH/CNC-Fiber-Laser-Cutting-Machine-Sheet-Metal-Cutter-3015-Laser-Cutting-Machine.webp' }} 
              style={styles.machineImage} 
            />
            
            {/* machineInfo menempati sisa ruang di Kanan foto */}
            <View style={styles.machineInfo}>
              <Text style={styles.machineName}>Mesin CNC Laser Cutting - M2</Text>
              <Text style={styles.machineDetail}>Tahun Pembuatan: 2023</Text>
              <Text style={styles.machineStatus}>
                Status: <Text style={{ color: '#e21111', fontWeight: 'bold' }}>TIDAK AKTIF</Text>
              </Text>
            </View>
          </View>

          <View style={styles.machineCard}>
            {/* Foto Mesin Berada di Kiri */}
            <Image 
              source={{ uri: 'https://cdn03.plentymarkets.com/ioseuwg7moqp/item/images/31784/full/Creality-Hi-31784.jpg' }} 
              style={styles.machineImage} 
            />
            
            {/* machineInfo menempati sisa ruang di Kanan foto */}
            <View style={styles.machineInfo}>
              <Text style={styles.machineName}>Mesin 3D Printer - M3</Text>
              <Text style={styles.machineDetail}>Tahun Pembuatan: 2025</Text>
              <Text style={styles.machineStatus}>
                Status: <Text style={{ color: '#27ae60', fontWeight: 'bold' }}>AKTIF</Text>
              </Text>
            </View>
          </View>
          {/* ========================================================= */}

        </View>

      {/* Jangan lupa tutup tag ScrollView-nya di sini */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    elevation: 5,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: '#bdc3c7',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 2,
  },
  content: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardWarning: {
    borderLeftWidth: 5,
    borderLeftColor: '#e74c3c',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  cardStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#27ae60',
    marginTop: 5,
    textAlign: 'right'
  },
  
  // Styling untuk Komponen Tugas Nomor 3
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 15,
    marginBottom: 10,
  },
  machineCard: {
    flexDirection: 'row',     // WAJIB ADA: Biar foto di kiri, teks di kanan
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',     // Membuat foto dan teks sejajar secara vertikal
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  machineImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  machineInfo: {
    // Memastikan machineInfo (Teks) berada di sisi kanan dari foto
    flex: 1, // Mengambil sisa ruang yang tersedia di kanan
    marginLeft: 15, // Jarak dari foto ke teks
    justifyContent: 'center', // Teks rata tengah secara vertikal
    alignItems: 'flex-start', // Teks rata kiri secara horizontal (default)
  },
  machineName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  machineDetail: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  machineStatus: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  }
});