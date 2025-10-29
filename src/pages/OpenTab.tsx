import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout from '../template/_layout';

const data = [
  { id: '1', title:  'Bar Londge I I' },
  { id: '2', title:  'Bar Sanduichej' },
  { id: '3', title:  'Bar quente I I' },
];

export default function Welcome() {
  const router = useRouter();

  const menu = () => {
    router.push('./Order');
  };

  return (
    <Layout>
      <View style={styles.containerHead}>
        <Text style={styles.title}>Cardapio</Text>

        <View style={styles.containerTopBtns}>
          <TouchableOpacity onPress={() => router.back()} style={styles.btnCardapio}>
            <Text style={styles.btnCardapiotitle}>Cardapio</Text> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('./Profile')} style={styles.btnPromocoes}>
            <Text style={styles.btnPromocoestitle}>Promocoes do dia</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.menu}>

              <View style={styles.item}>
                <TouchableOpacity onPress={menu} style={styles.btnBbutton}>
                  <Image source={require('../assets/image/aaa.png')} style={styles.imageButton} />
                </TouchableOpacity>
                <View>
                  <Text style={styles.text}>Prato de Sandiche</Text>
                  <Text style={styles.textPrice}>R$: 347</Text> 
                  <Text style={styles.textQtd}>Qtd: 2</Text>
                </View>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={menu} style={styles.btnBbutton}>
                  <Image source={require('../assets/image/aaa.png')} style={styles.imageButton} />
                </TouchableOpacity>
                <View>
                  <Text style={styles.text}>Prato de Sandiche</Text>
                  <Text style={styles.textPrice}>R$: 347</Text> 
                  <Text style={styles.textQtd}>Qtd: 2</Text>
                </View>
              </View>

              <View style={styles.item}>
                <TouchableOpacity onPress={menu} style={styles.btnBbutton}>
                  <Image source={require('../assets/image/aaa.png')} style={styles.imageButton} />
                </TouchableOpacity>
                <View>
                  <Text style={styles.text}>Prato de Sandiche</Text>
                  <Text style={styles.textPrice}>R$: 347</Text> 
                  <Text style={styles.textQtd}>Qtd: 2</Text>
                </View>
              </View>

                  <TouchableOpacity onPress={menu} style={styles.btnOut}  >
                    <Text style={styles.titleInfoBtn}>Finalizar pedido</Text>  
                  </TouchableOpacity> 
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  containerHead: { justifyContent: 'center', alignItems: 'center', height: '25%', width: '100%' },
  text: { fontSize: 30, color: '#000' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: {
    fontSize: 37,
    color: '#fff',
    marginTop: 5,
    fontWeight: 'bold',
  },
  menu: {
    width: '96%',
    padding: 20,
    margin: 15,
    backgroundColor: '#FFF',
    borderRadius: 30,
    bottom: 3,
    position: 'absolute',
    height: '100%',
  },
  item: {
    // backgroundColor: '#2a2626ff',
    marginVertical: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  btnBbutton: {
    // width: 80,
    // height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // para manter a imagem dentro do círculo
  },
  imageButton: {
    width: 130,
    height: 110,
    borderRadius: 0,
    resizeMode: 'cover',
  },
  btnOut:{ 
  margin: 10, 
  padding: 0, 
  backgroundColor: '#8a7e7eff', 
  borderRadius: 22, 
  paddingHorizontal: 40, 
  paddingVertical: 25, 
  alignItems: 'center',
  justifyContent: 'center',
  // width: '80%',
},
  titleInfoBtn: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  containerTopBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  btnCardapio:{
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPromocoes: {
    backgroundColor: '#8a7e7eff',
    padding: 10,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCardapiotitle: {
    color: '#8a7e7eff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnPromocoestitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textPrice: {
    fontSize: 20,
    color: '#000',
  },
  textQtd: {
    fontSize: 20,
    color: '#000',
  },

});
