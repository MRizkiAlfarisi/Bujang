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

const History = ({navigation}) => {
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
          Senin 16 Oktober
        </Text>
      </View>
      <View>
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{
              backgroundColor: 'grey',
              color: 'black',
              marginTop: -350,
              marginLeft: 8,
              marginRight: 10,
              borderRadius: 10,
              paddingBottom: 30,
            }}>
            Jajan
          </Text>
          <View>
            <Image
              style={{ borderRadius: 30, marginLeft: 20, marginTop: -25 }}
              source={require('../assets/minus.png')}
            />
            <Text style={{ marginLeft: 120, marginTop: -20 }}> Rp.120.000</Text>
          </View>
          <Text style={{ marginTop: -45, marginLeft: 265 }}>13.43</Text>
        </View>{' '}
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{
              backgroundColor: 'grey',
              color: 'black',
              marginTop: -290,
              marginLeft: 8,
              marginRight: 10,
              borderRadius: 10,
              paddingBottom: 30,
            }}>
            Jajan
          </Text>
          <View>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 30,
                marginLeft: 20,
                marginTop: -30,
              }}
              source={require('../assets/Plus.png')}
            />
            <Text style={{ marginLeft: 120, marginTop: -30 }}> Rp.120.000</Text>
          </View>
          <Text style={{ marginTop: -45, marginLeft: 265 }}>13.43</Text>
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

export default History;

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
