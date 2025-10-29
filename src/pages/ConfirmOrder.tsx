import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout from '../template/_layout';





export default function Welcome() {

 const menu = () => {
    const router = useRouter();
    router.push('./Checkout'); 
 }

  return (
    <Layout> 
        <View style={styles.containerHead}>
        <TouchableOpacity onPress={menu} style={styles.btnBbuttonCircularBottom}>
        <Text style={{ color: '#fff', fontSize: 16 }}></Text>
        </TouchableOpacity>  
        </View>
      <View style={styles.container}>
        <Text style={styles.titleInfo}>
          Aproxime na maquina  para confirmar seu  pedido

        </Text>
        <TouchableOpacity onPress={menu} style={styles.btnBbuttonCircular}>
        <Image source={require('../assets/image/ddd.png')} style={styles.imageButton} />
        </TouchableOpacity>
         
       
      </View>

        {/* <View style={styles.container}>
        <TouchableOpacity onPress={menu} style={styles.btnOut}  >
          <Text style={styles.titleInfoBtn}>Aproxime o celular no NFC da entrada por favor</Text>  
        </TouchableOpacity>        
        </View> */}

    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20, 
},
  title: { fontSize: 24, color: '#fff' },
  titleInfo: { 
    fontSize: 30, 
    color: '#fff', 
    // marginTop: 20, 
    textAlign: 'center',
    fontWeight: 'bold', 
    width: '60%',
  },
  containerHead: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
},
  logo: { fontSize: 32, color: '#00f' },
btnBbuttonCircular: {
  marginTop: 40,
  // backgroundColor: '#007bff',
  width: 200,            // largura fixa
  height: 200,           // mesma altura da largura
  borderRadius: 100,     // metade da largura/altura para ser um círculo
  alignItems: 'center',
  justifyContent: 'center', // centraliza o conteúdo dentro do botão
  marginBottom: 20,
},
  btnBbuttonCircularBottom: {
  marginTop: 20,
  backgroundColor: 'transparent',
  width: 80,            // largura fixa
  height: 80,           // mesma altura da largura
  borderRadius: 40,     // metade da largura/altura para ser um círculo
  alignItems: 'center',
  justifyContent: 'center', // centraliza o conteúdo dentro do botão
  marginBottom: 10,
  borderWidth: 2,
  borderColor: '#fff', // cor da borda
},
btnOut:{ 
  // marginTop: 20, 
  padding: 0, 
  backgroundColor: '#007bff', 
  borderRadius: 22, 
  paddingHorizontal: 40, 
  paddingVertical: 10, 
  alignItems: 'center',
  justifyContent: 'center',
  width: '80%',
},
  titleInfoBtn: { 
    fontSize: 20, 
    color: '#fff', 
    // marginTop: 20, 
    textAlign: 'center',
    // fontWeight: 'bold', 
    width: '100%',
  },
  imageButton: {
    backgroundColor: '#00f7ff',
    width: 200,            // largura fixa
    height: 200,           // mesma altura da largura
    borderRadius: 100,     // metade da largura/altura para ser um círculo
    alignItems: 'center',
    justifyContent: 'center', // centraliza o conteúdo dentro do botão
  },
});