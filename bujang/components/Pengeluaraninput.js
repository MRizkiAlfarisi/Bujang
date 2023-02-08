import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';

const Pengeluaraninput = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#4F8DA0'}}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.question}
          source={require('../assets/question.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Pengaturan')} >
    <View style={{width:40,height:40}}>
      <Image style={styles.setting}
          source={require('../assets/Setting.png')}
        />
      </View>
    </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.dompet1}
          source={require('../assets/dompet.png')}
        />
        <Text
          style={{
            marginTop: -375,
            marginLeft: 20,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Uangmu :
        </Text>
        <Text style={{ marginTop: -375, marginLeft: 20, color: 'white' }}>
          Rp.120.000
        </Text>
      </View>
      <View>
        <Text style={{ color: 'white', marginTop: -300, marginLeft: 10 }}>
          Pengeluaranmu hari ini :
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image
            style={{ width: 60, height: 60, marginTop: -275, marginLeft: 20 }}
            source={require('../assets/makanan.png')}
          />
          <Text style={{ color: 'white', marginLeft: 20 }}>Makanan</Text>
        </View>
        <View>
          <Text style={{ color: 'white', marginTop: -275, marginLeft: 20 }}>
            Masukkan jumlah:
          </Text>
          <Text style={{ color: 'white', marginLeft: 30 }}>Rp.80.000</Text>
        </View>
      </View>
      <View>
        <Text style={{ color: 'white', marginTop: -180, marginLeft: 40 }}>
          Tanggal : 9 Oktober 2022
        </Text>
        <Text style={{ color: 'white', marginLeft: 40 }}>Waktu : 10.30</Text>
        <Text style={{ color: 'white', marginLeft: 40 }}>Keterangan: </Text>
        <View>
          <Text style={{color:'white',backgroundColor:'grey',marginLeft:30,marginRight:30,paddingTop:10,paddingBottom:30,textAlign:'center'}}>Makan siang di Kantor</Text>
        </View>
        <View>
          <Text style={{color:'white',marginTop:10,backgroundColor:'grey',marginLeft:220,marginRight:30,borderRadius:15,paddingLeft:1,textAlign:'center'}}>Submit</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('MainPage')} >
    <View style={{width:40,height:40}}>
      <Text style={{color:'black',backgroundColor:'#D9D9D9',textAlign:'center',justifyContent:'center'}}>Back</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default Pengeluaraninput;

const styles = StyleSheet.create({
  question: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginBottom: 400,
  },
  setting: {
    width: 40,
    height: 40,
    marginLeft: 236,
    borderRadius: 10,
  },
  dompet1: {
    width: 56,
    height: 57,
    marginTop: -375,
    marginLeft: 30,
    borderRadius: 10,
  },
});
