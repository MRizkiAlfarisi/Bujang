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

const Pengeluaran = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#4F8DA0' }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.question}
          source={require('../assets/question.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Pengaturan')}>
          <View style={{ width: 40, height: 40 }}>
            <Image
              style={styles.setting}
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
        <Text style={{ color: 'white', marginTop: -300, marginLeft: 20 }}>
          Pengeluaran hari ini :{' '}
        </Text>
        <View style={styles.pemasukan}>
          <TouchableOpacity style={{borderWidth:2,width:70,height:70,marginLeft:30}}
            onPress={() => navigation.navigate('Pengeluaraninput')}>
            <View style={{ width: 40, height: 40, marginLeft: 10 }}>
              <Image
                style={{ width: 70, height: 70, marginLeft: -10 }}
                source={require('../assets/makanan.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{borderWidth:2,width:70,height:70,marginLeft:30}}
            onPress={() => navigation.navigate('Pengeluaraninput')}>
            <View style={{ width: 40, height: 40, marginLeft: -70 }}>
              <Image
                style={{ width: 70, height: 70, marginLeft: 70 }}
                source={require('../assets/Tagihan.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{width:70,height:70,borderWidth:2,marginLeft: 30}} onPress={() => navigation.navigate('Pengeluaraninput')}>
          <Image 
            style={{ width: 70, height: 70,  }}
            source={require('../assets/Pakaian.png')}
          />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'white', marginLeft: 35 }}>Makanan</Text>
          <Text style={{ color: 'white', marginLeft: 45 }}>Tagihan</Text>
          <Text style={{ color: 'white', marginLeft: 55 }}>Pakaian</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{width:70,height:70,borderWidth:2,marginLeft: 30}} onPress={() => navigation.navigate('Pengeluaraninput')}>
          <Image 
            style={{ width: 70, height: 70,  }}
            source={require('../assets/Belanja.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity style={{width:70,height:70,borderWidth:2,marginLeft: 30}} onPress={() => navigation.navigate('Pengeluaraninput')}>
          <Image 
            style={{ width: 70, height: 70,  }}
            source={require('../assets/Transportasi.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity style={{width:70,height:70,borderWidth:2,marginLeft: 30}} onPress={() => navigation.navigate('Pengeluaraninput')}>
          <Image 
            style={{ width: 70, height: 70,  }}
            source={require('../assets/Pendidikan.png')}
          />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'white', marginLeft: 40 }}>Belanja</Text>
          <Text style={{ color: 'white', marginLeft: 40 }}>Transportasi</Text>
          <Text style={{ color: 'white', marginLeft: 35 }}>Pendidikan</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{width:70,height:70,borderWidth:2,marginLeft: 30}} onPress={() => navigation.navigate('Pengeluaraninput')}>
          <Image 
            style={{ width: 70, height: 70,  }}
            source={require('../assets/Asuransi.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity style={{width:70,height:70,borderWidth:2,marginLeft: 30}} onPress={() => navigation.navigate('Pengeluaraninput')}>
          <Image 
            style={{ width: 70, height: 70,  }}
            source={require('../assets/Hiburan.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity style={{width:70,height:70,borderWidth:2,marginLeft: 30}} onPress={() => navigation.navigate('Pengeluaraninput')}>
          <Image 
            style={{ width: 70, height: 70,  }}
            source={require('../assets/Customize.png')}
          />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'white', marginLeft: 40 }}>Asuransi</Text>
          <Text style={{ color: 'white', marginLeft: 50 }}>Hiburan</Text>
          <Text style={{ color: 'white', marginLeft: 40 }}>Customisasi</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
        <View style={{ width: 40, height: 40 }}>
          <Text
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            Back
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Pengeluaran;

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
  pemasukan: {
    flexDirection: 'row',
  },
});
