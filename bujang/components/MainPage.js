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


const MainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
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
        <Text style={{ marginTop: -375, marginLeft: 20, color: 'white',fontWeight: 'bold' }}>
          Uangmu :
        </Text>
        <Text style={{ marginTop: -375, marginLeft: 20, color: 'white' }}>
          Rp.120.000
        </Text>
      </View>
      <View>
        <View>
          <Text style={{color:'white',marginTop:-300,marginLeft:20}}>Pengeluaran</Text>
          <Text style={{color:'white',marginLeft:20}}>-Rp.750.000</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Pengeluaran')} >
    <View style={{width:10,height:10}}>
      <Image style={{width:75,height:75,marginLeft:20,marginTop:10}}
          source={require('../assets/dompetpengeluaran.png')}
        />
      </View>
    </TouchableOpacity>
        </View>
        <View>
          <Text style={{color:'white',marginTop:-300,marginLeft:200}}>Pemasukan</Text>
          <Text style={{color:'white',marginLeft:200}}>+Rp.750.000</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Pemasukan')} >
    <View style={{width:10,height:10}}>
      <Image style={{width:75,height:75,marginLeft:200,marginTop:10}}
          source={require('../assets/dompetpemasukan.png')}
        />
      </View>
    </TouchableOpacity>
        </View>
      </View>
      <View>
        <View>
          <Text style={{color:'white',marginTop:-170,marginLeft:35}}>History</Text>
          <TouchableOpacity onPress={() => navigation.navigate('History')} >
    <View style={{width:10,height:10}}>
      <Image style={{width:75,height:75,marginLeft:20,marginTop:10}}
          source={require('../assets/dompethistory.png')}
        />
      </View>
    </TouchableOpacity>
        </View>
        <View>
          <Text style={{color:'white',marginTop:-170,marginLeft:180}}>Batas Pengeluaran</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Bataspengeluaran')} >
    <View style={{width:10,height:10}}>
      <Image style={{width:75,height:75,marginLeft:200,marginTop:10}}
          source={require('../assets/dompet.png')}
        />
      </View>
    </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Settingmark = () => {
  return <Image source={require('../assets/Setting.png')} />;
};

export default MainPage;

const styles = StyleSheet.create({
  question:{
    width: 40,
    height: 40,
    borderRadius: 10,
    marginBottom: 400,
  },setting: {
    width: 40,
    height: 40,
    marginLeft: 236,
    borderRadius: 10,
  },dompet1: {
    width: 56,
    height: 57,
    marginTop: -375,
    marginLeft:30,
    borderRadius: 10,
  },container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4F8DA0',
    padding: 8,
  },
});
