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



const Pemasukan = ({navigation}) => {
  return(
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
        <Text style={{ marginTop: -375, marginLeft: 20, color: 'white',fontWeight: 'bold' }}>
          Uangmu :
        </Text>
        <Text style={{ marginTop: -375, marginLeft: 20, color: 'white' }}>
          Rp.120.000
        </Text>
      </View>
      <View>
        <Text style={{color:'white',marginTop:-300,marginLeft:20}}>Pemasukan hari ini : </Text>
        <View style={styles.pemasukan}>
          <Image style={{width:70,height:70,marginLeft:30}} source={require('../assets/Tabungan.png')}/>
          <Image style={{width:70,height:70,marginLeft:30}} source={require('../assets/gaji.png')}/>
          <Image style={{width:70,height:70,marginLeft:30}} source={require('../assets/Jajan.png')}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'white',marginLeft:35}}>Tabungan</Text>
          <Text style={{color:'white',marginLeft:55}}>Gaji</Text>
          <Text style={{color:'white',marginLeft:75}}>Jajan</Text>
        </View>
        <View>
          <Image style={{width:70,height:70,marginLeft:130,marginTop:20}} source={require('../assets/Customize.png')} />
          <Text style={{color:'white',marginLeft:130}}>Customisasi</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('MainPage')} >
    <View style={{width:40,height:40}}>
      <Text style={{color:'black',backgroundColor:'#D9D9D9',textAlign:'center',justifyContent:'center'}}>Back</Text>
      </View>
    </TouchableOpacity>
    </View>
  )
}
export default Pemasukan;

const styles=StyleSheet.create({
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
  },pemasukan:{
    flexDirection:'row',
    
  }
})