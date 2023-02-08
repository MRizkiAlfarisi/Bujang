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

const Bataspengeluaran = ({navigation}) => {
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
      <View style={{ backgroundColor: 'grey' }}>
        <Text
          style={{
            backgroundColor: 'white',
            color: 'black',
            marginTop: -375,
            marginLeft: 1,
            textAlign: 'center',
            borderRadius: 10,
          }}>
          Batas Pengeluaran
        </Text>
      </View>
      <View>
        <Text
          style={{
            backgroundColor: 'grey',
            color: 'black',
            marginTop: -350,
            marginLeft: 20,
            marginRight: 20,
            textAlign: 'center',
            borderRadius: 10,
          }}>
          Jangka Pengeluaran
        </Text>
      </View>
      <View>
        <Text
          style={{
            backgroundColor: 'grey',
            color: 'black',
            marginTop: -330,
            marginLeft: 20,
            marginRight: 20,
            textAlign: 'center',
            borderRadius: 10,
          }}>
          Rp.2.000.000
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('MainPage')} >
    <View style={{width:40,height:40}}>
      <Text style={{color:'black',backgroundColor:'#D9D9D9',textAlign:'center',justifyContent:'center'}}>Back</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default Bataspengeluaran;

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
});
