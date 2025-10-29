import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout from '../template/_layout';





const data = [
  { id: '1', title:  'Ver Cardapio' },
  { id: '2', title:  'Bar Sanduichej' },
  { id: '3', title:  'Bar quente I I' },
];


export default function Welcome() {

 const menu = () => {
    const router = useRouter();
    router.push('./MenuOptions'); 
 }


  return (
    <Layout>
        <View style={styles.containerHead}>
            <Text style={styles.title}>Ola Fernando</Text>
            <Text style={styles.title}>Bem Vindo ao</Text>
        </View>
      <View style={styles.container}>


        <View style={styles.menu}>

        <TouchableOpacity onPress={menu} style={styles.btnBbuttonCircular}>
          <Image source={require('../assets/image/bbb.png')} style={styles.imageButton} />
        </TouchableOpacity>
          
<TouchableOpacity onPress={menu} style={styles.wrapper}>
  <LinearGradient
    colors={['#0022ff', '#ff0000']} // azul → vermelho
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.buttoesGet}
  >
    <Entypo name="text-document" size={24} color="#fff" />
    <Text style={styles.text}>Ver Cardápio</Text>
  </LinearGradient>
</TouchableOpacity>

<TouchableOpacity onPress={menu} style={styles.wrapper}>
  <LinearGradient
    colors={['#0022ff', '#ff0000']} // azul → vermelho
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.buttoesGet}
  >
    <FontAwesome name="percent" size={24} color="#fff" />
    <Text style={styles.text}>% Promocoes </Text>
  </LinearGradient>
</TouchableOpacity>


<TouchableOpacity onPress={menu} style={styles.wrapper}>
  <LinearGradient
    colors={['#0022ff', '#ff0000']} // azul → vermelho
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.buttoesGet}
  >
    <MaterialCommunityIcons name="file-document-outline" size={24} color="#fff" />
    <Text style={styles.text}>Meu Historico</Text>
  </LinearGradient>
</TouchableOpacity>


        </View>
          <TouchableOpacity onPress={menu} style={styles.buttoeOUT}>
            <AntDesign name="closecircleo" size={24} color="#fff" />
          <Text style={styles.text}>Fechar Conta</Text>
          </TouchableOpacity>

      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
containerHead: {justifyContent: 'center', alignItems: 'center', height: '25%', width: '100%' },
text: { 
    fontSize: 30, 
    color: '#FFF',
    fontWeight:600 
},

  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { 
    fontSize: 37, 
    color: '#fff',
    marginTop: 5,
    fontWeight: 'bold',
    // width: '70%',
  },
logo: { 
    fontSize: 32, 
    color: '#00f' 
},
menu: { 
    width: '90%', 
    padding: 20, 
    margin:15, 
    backgroundColor: '#eae0ea91', 
    borderRadius: 30, 
    // bottom: 3, 
    // position: 'absolute', 
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center', 
},
item: { 
    // padding: 20, 
    backgroundColor: '#2a2626ff', 
    marginVertical: 14, 
    paddingHorizontal: 10, 
    paddingVertical: 10,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    alignItems: 'center'
},
btnBbutton: {
  backgroundColor: '#00f7ff',
  width: 80,            // largura fixa
  height: 80,           // mesma altura da largura
  borderRadius: 40,     // metade da largura/altura para ser um círculo
  alignItems: 'center',
  justifyContent: 'center', // centraliza o conteúdo dentro do botão
} ,
btnBbuttonCircular: {
  marginTop: 0,
  backgroundColor: '#00f7ff',
  width: 200,            // largura fixa
  height: 200,           // mesma altura da largura
  borderRadius: 100,     // metade da largura/altura para ser um círculo
  alignItems: 'center',
  justifyContent: 'center', // centraliza o conteúdo dentro do botão
  marginBottom: 20,
}, 
wrapper: {
  width: '100%',
  marginBottom: 10,
  borderRadius: 30,
  overflow: 'hidden',
},

buttoesGet: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  paddingVertical: 18,
  paddingHorizontal: 20,
  borderRadius: 20,
},
buttoeOUT: {
  backgroundColor: '#f46161ff',
  width:'80%',            // largura fixa          // mesma altura da largura
  borderRadius: 10,     // metade da largura/altura para ser um círculo
  paddingVertical: 10,
    flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
},
imageButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'cover',
  },


//   touchableWrapper: {
//   width: '100%',
//   height: 50,
//   borderRadius: 20,
//   overflow: 'hidden', // importante para arredondar o fundo dividido
//   marginBottom: 10,
// },

// splitBackground: {
//   ...StyleSheet.absoluteFillObject, // preenche o botão todo
//   flexDirection: 'row',
// },

// bluePart: {
//   flex: 8, // 80% azul
//   backgroundColor: '#00f7ff',
// },

// redPart: {
//   flex: 2, // 20% vermelho
//   backgroundColor: '#ff0000',
// },

// content: {
//   flex: 1,
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center',
//   gap: 8, // se quiser espaço entre ícone e texto
//   paddingVertical: 10,
// },


});