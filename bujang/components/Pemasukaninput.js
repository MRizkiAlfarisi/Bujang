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

const Pemasukaninput = ({navigation}) => {
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
          Pemasukanmu hari ini :
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image
            style={{ width: 60, height: 60, marginTop: -275, marginLeft: 20 }}
            source={require('../assets/Tabungan.png')}
          />
          <Text style={{ color: 'white', marginLeft: 20 }}>Tabungan</Text>
        </View>
        <View>
          <Text style={{ color: 'white', marginTop: -275, marginLeft: 20 }}>
            Masukkan jumlah:
          </Text>
          <Text style={{ color: 'white', marginLeft: 30 }}>Rp.20.000</Text>
        </View>
      </View>
      <View>
        <Text style={{ color: 'white', marginTop: -180, marginLeft: 40 }}>
          Tanggal : 10 Oktober 2022
        </Text>
        <Text style={{ color: 'white', marginLeft: 40 }}>Waktu : 12.05</Text>
        <Text style={{ color: 'white', marginLeft: 40 }}>Keterangan: </Text>
        <View>
          <Text
            style={{
              color: 'white',
              backgroundColor: 'grey',
              marginLeft: 30,
              marginRight: 30,
              paddingTop: 10,
              paddingBottom: 30,
              textAlign: 'center',
            }}>
            Uang dari rekening tabungan
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: 'white',
              marginTop: 10,
              backgroundColor: 'grey',
              marginLeft: 220,
              marginRight: 30,
              borderRadius: 15,
              paddingLeft: 1,
              textAlign: 'center',
            }}>
            Submit
          </Text>
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

export default Pemasukaninput;

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
