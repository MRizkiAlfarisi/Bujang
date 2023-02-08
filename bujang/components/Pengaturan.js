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

const Pengaturan = ({navigation}) => {
  return(
    <View style={{backgroundColor:'#4F8DA0'}}>
    <View>
      <Image style={{width:100,height:100,borderRadius:130,marginTop:20,marginLeft:110}} source={require('../assets/Profil.png')} />
      <Text style={{color:'white',marginLeft:125,marginTop:10}}>Agung Dwi</Text>
      <Text style={{color:'black',backgroundColor:'#D9D9D9',textAlign:'center',marginTop:10,borderRadius:10,marginLeft:70,marginRight:70}}>Tema</Text>
      <Text style={{color:'black',backgroundColor:'#D9D9D9',textAlign:'center',marginTop:10,borderRadius:10,marginLeft:70,marginRight:70}}>Bahasa</Text>
      <Text style={{color:'black',backgroundColor:'#D9D9D9',textAlign:'center',marginTop:10,borderRadius:10,marginLeft:70,marginRight:70}}>Cadangkan</Text>
      <Text style={{color:'black',backgroundColor:'#D9D9D9',textAlign:'center',marginTop:10,borderRadius:10,marginLeft:70,marginRight:70}}>Export</Text>
    </View>
    <View>
      <Text style={{color:'black',backgroundColor:'#D9D9D9',textAlign:'center',marginTop:130,borderRadius:10,marginLeft:70,marginRight:70}}>Rating</Text>
      <Text style={{color:'black',backgroundColor:'#D9D9D9',textAlign:'center',marginTop:10,borderRadius:10,marginLeft:70,marginRight:70}}>Tentang</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('MainPage')} >
    <View style={{width:40,height:40}}>
      <Text style={{color:'black',backgroundColor:'#D9D9D9',textAlign:'center',justifyContent:'center'}}>Back</Text>
      </View>
    </TouchableOpacity>
    </View>
  )
}

export default Pengaturan;