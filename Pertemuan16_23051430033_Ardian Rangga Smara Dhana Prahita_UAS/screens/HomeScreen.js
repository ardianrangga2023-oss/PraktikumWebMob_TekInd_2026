import React, {useState} from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Stylesheet, StyleSheet } from "react-native";

const DATA_GUDANG = [
    {id: '1', namaBarang: 'Buku Tulis Kiki A5', kategori: 'ATK', stok: 12, lokasiRak: 'Rak A-01'},
    {id: '2', namaBarang: 'Pulpen Hitam', kategori: 'ATK', stok: 4, lokasiRak: 'Rak A-02'},
    {id: '3', namaBarang: 'Kertas HVS F5 70gr', kategori: 'Fotocopy', stok: 30, lokasiRak: 'Rak A-03'},
    {id: '4', namaBarang: 'Buku Tulis Kiki A5', kategori: 'ATK', stok: 12, lokasiRak: 'Rak A-01'},
    {id: '1', namaBarang: 'Buku Tulis Kiki A5', kategori: 'ATK', stok: 12, lokasiRak: 'Rak A-01'},
    {id: '1', namaBarang: 'Buku Tulis Kiki A5', kategori: 'ATK', stok: 12, lokasiRak: 'Rak A-01'},
    {id: '1', namaBarang: 'Buku Tulis Kiki A5', kategori: 'ATK', stok: 12, lokasiRak: 'Rak A-01'},
    {id: '1', namaBarang: 'Buku Tulis Kiki A5', kategori: 'ATK', stok: 12, lokasiRak: 'Rak A-01'},
    {id: '1', namaBarang: 'Buku Tulis Kiki A5', kategori: 'ATK', stok: 12, lokasiRak: 'Rak A-01'},
    {id: '1', namaBarang: 'Buku Tulis Kiki A5', kategori: 'ATK', stok: 12, lokasiRak: 'Rak A-01'},
]

export default function HomeScreen ({navigation}){
    const [searchQuery] = useState ('');
    const filteredData = DATA_GUDANG.filter((item) =>
        item.namaBarang.toLowerCase().includes(searchQuery.toLowerCase())
);

const renderItem = ({item}) => (
    <TouchableOpacity
    style={styles.card}
    onPress={() => navigation.navigate('Detail', {item})}
    >
        <View style={styles.cardHeader}>
            <Text style={styles.namaBarang}>{item.namaBarang}</Text>
            <Text style={styles.badgeKategori}>{item.kategori}</Text>
        </View>
        <View style={styles.cardBody}>
            <Text style={styles.txtDetail}>{item.lokasiRak}</Text>
            <Text style={[styles.txtDetail, item.stok <= 5? styles.stokKritis : styles.stokAman]}>Stok: {item.stok}{item.stok <= 5 ? '(Restock!)' : ''}</Text>
        </View>
    </TouchableOpacity>
)


    return (
        <View style={styles.container}>
            <Text style={styles.subText}>Ardian Rangga Smara Dhana Prahita | 23051430033</Text>
            <Text style={styles.welcomeText}>Manajemen Manifes Logistik ATK</Text>
            <TextInput
            style={styles.searchBar}
            placeholder="Cari nama barang di gudang..."
            value={searchQuery}
            onChangeText={(text)=> setSearchQuery (text)}
            /> 
            <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ListEmptyComponent={
                <Text style={styles.emptyText}>Barang tidak ditemukan.</Text>
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, backgroundColor: '#f8f9fa'},
    welcomeText: {fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#212529'},
    searchBar: {backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 8, borderWidth: 1, bordercolor: '#ced4da', marginBottom:16, fontSize: 15},
    card: {backgroundColor: '#fff', padding:16, borderRadius:8, marginBottom: 12, borderWidth: 1, borderColor: '#e9ecef', elevation: 2},
    cardHeader: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8},
    namaBarang: {fontSize: 16, fontWeight: 'bold', color: '#343a40', flex: 1},
    badgeKategori: {backgroundColor: '#e7f5ff', color: '#228be6', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, fontSize: 13, fontWeight: 'bold'},
    txtDetail: {fontSize: 14, color: '#6c757d'},
    stokAman: {color: '#2b8a3e', fontWeight: '600'},
    stokKritis: {color: '#e03131', fontWeight: 'bold'},
    emptyText: {textAlign: 'center', color: '#868e96', marginTop: 20},
});