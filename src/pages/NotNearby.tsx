import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout from '../template/_layout';





export default function Welcome() {

 const menu = () => {
    const router = useRouter();
    router.push('./ChooseEstablishment'); 
 }

  return (
    <Layout> 
        <View style={styles.containerHead}>
        <Text style={styles.title}>Ola Fernando!</Text>
        <Text style={styles.title}>BEM VINDO AO</Text>
        </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={menu} style={styles.btnBbutton}>
        <Image source={require('../assets/image/bbb.png')} style={styles.imageButton} />
        </TouchableOpacity>
         <Text style={styles.titleInfo}>Desculpe voce</Text>
         <Text style={styles.titleInfo}>nao esta proximo</Text>
         <Text style={styles.titleInfo}>Vamos la para abrir sua mesa</Text>
      </View>

        <View style={styles.container}>
        <TouchableOpacity onPress={menu} style={styles.btnOut}  >
          <Text style={styles.titleInfoBtn}>Entrar para ver programaçao e promocoes</Text>  
        </TouchableOpacity>        
        </View>

    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100, 
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
  btnBbutton: {
  // backgroundColor: '#007bff',
  width: 200,            // largura fixa
  height: 200,           // mesma altura da largura
  borderRadius: 100,     // metade da largura/altura para ser um círculo
  alignItems: 'center',
  justifyContent: 'center', // centraliza o conteúdo dentro do botão
  marginBottom: 20,
},
btnOut:{ 
  marginTop: 20, 
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
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'cover',
  },
});