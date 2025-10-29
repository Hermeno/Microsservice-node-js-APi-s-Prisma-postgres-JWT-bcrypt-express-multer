import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout from '../template/_layout';





const data = [
  { id: '1', title:  'Ver Cardapio' },
  { id: '2', title:  'Bar Sanduichej' },
  { id: '3', title:  'Bar quente I I' },
];


export default function Welcome() {

 const menu = () => {
    const router = useRouter();
    router.push('./OpenTab'); 
 }


  return (
    <Layout>
        <View style={styles.containerHead}>
            <Text style={styles.title}>Opocoes de Cardapio</Text>
        </View>
      <View style={styles.container}>


        <View style={styles.menu}>

        {/* <TouchableOpacity onPress={menu} style={styles.btnBbuttonCircular}>
        </TouchableOpacity> */}
          

          <TouchableOpacity onPress={menu} style={styles.buttoesGet}>
          <Text style={styles.text}>Promocoes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={menu} style={styles.buttoesGet}>
          <Text style={styles.text}>Pratos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={menu} style={styles.buttoesGet}>
          <Text style={styles.text}>Cervejas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={menu} style={styles.buttoesGet}>
          <Text style={styles.text}>Drinks</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={menu} style={styles.buttoesGet}>
          <Text style={styles.text}>Drinks/ Alcool</Text>
          </TouchableOpacity>

        </View>
          <TouchableOpacity onPress={menu} style={styles.buttoeOUT}>
          <Text style={styles.text}>X Fechar Conta</Text>
          </TouchableOpacity>

      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
containerHead: {justifyContent: 'center', alignItems: 'center', height: '25%', width: '100%' },
text: { 
    fontSize: 30, 
    color: '#FFF' 
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
    width: '96%', 
    padding: 20, 
    margin:15, 
    // backgroundColor: '#9da2a5ff', 
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
  marginTop: 40,
  backgroundColor: '#00f7ff',
  width: 200,            // largura fixa
  height: 200,           // mesma altura da largura
  borderRadius: 100,     // metade da largura/altura para ser um círculo
  alignItems: 'center',
  justifyContent: 'center', // centraliza o conteúdo dentro do botão
  marginBottom: 20,
}, 
buttoesGet:{
  backgroundColor: '#00f7ff',
  width:'100%',            // largura fixa          // mesma altura da largura
  borderRadius: 20,     // metade da largura/altura para ser um círculo
  alignItems: 'center',
  justifyContent: 'center', // centraliza o conteúdo dentro do botão
  marginBottom: 10,
  paddingVertical: 20,
},
buttoeOUT: {
  backgroundColor: '#f46161ff',
  width:'80%',            // largura fixa          // mesma altura da largura
  borderRadius: 20,     // metade da largura/altura para ser um círculo
  alignItems: 'center',
  justifyContent: 'center', // centraliza o conteúdo dentro do botão
  paddingVertical: 10,
},

});