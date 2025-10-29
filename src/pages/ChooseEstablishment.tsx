import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout from '../template/_layout';

const data = [
  { id: '1', title:  'Bar Londge I I', link: '' },
  { id: '2', title:  'Bar Sanduichej', link: '' },
  { id: '3', title:  'Bar quente I I', link: '' },
  { id: '4', title:  'Bar Jull roger', link: '' },
  { id: '5', title:  'Bar da Picanha', link: '' },
  { id: '7', title:  'Bar da Picanha', link: '' },
  { id: '8', title:  'Bar da Picanha', link: '' },
  { id: '9', title:  'Bar da Picanha', link: '' },
  { id: '10', title: 'Bar da Picanha', link: '' },
  { id: '11', title: 'Bar da Picanha', link: '' },
  { id: '12', title: 'Bar da Picanha', link: '' },
  { id: '13', title: 'Bar da Picanha', link: '' }, 
  { id: '14', title: 'Bar da Picanha', link: '' },
  { id: '15', title: 'Bar da Picanha', link: '' },
];

export default function Welcome() {
  const router = useRouter();

  const menu = () => {
    router.push('./NearBy');
    // router.push('./pages/Nearby');
  };

  return (
    <Layout>
      <View style={styles.containerHead}>
        <Text style={styles.title}>ESCOLHA</Text>
        <Text style={styles.title}>O ESTABELECIMENTO</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.menu}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <TouchableOpacity onPress={menu} style={styles.btnBbutton}>
                  <Image source={require('../assets/image/bbb.png')} style={styles.imageButton} />
                </TouchableOpacity>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  containerHead: { justifyContent: 'center', alignItems: 'center', height: '25%', width: '100%' },
  text: { fontSize: 30, color: '#FFF' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: {
    fontSize: 37,
    color: '#fff',
    marginTop: 5,
    fontWeight: 'bold',
  },
  menu: {
    width: '96%',
    padding: 10,
    margin: 15,
    backgroundColor: '#9da2a5ff',
    borderRadius: 30,
    bottom: 3,
    position: 'absolute',
    height: '100%',
  },
  item: {
    backgroundColor: '#1a1818ff',
    // backgroundColor: '#2a2626ff',
    marginVertical: 14,
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 22,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btnBbutton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // para manter a imagem dentro do círculo
  },
  imageButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'cover',
  },
});
