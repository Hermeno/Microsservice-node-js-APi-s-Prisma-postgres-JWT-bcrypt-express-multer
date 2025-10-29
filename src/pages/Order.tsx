import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout from '../template/_layout';

const data = [
  { id: '1', factura: 'frasjhavdhs', Qtd: 2, preco: 10.00, },
  { id: '2', factura: 'vbnvbvcv', Qtd: 1, preco: 5.00, },
  { id: '3', factura: 'bbbn.fxl;d', Qtd: 3, preco: 15.00, },
  { id: '4', factura: 'frsdfasf', Qtd: 1, preco: 20.00, },
];

export default function Welcome() {
  const router = useRouter();

  const menu = () => {
    router.push('./ConfirmOrder');
  };

  return (
    <Layout>
      <View style={styles.containerHead}>
        <Text style={styles.title}>Seu Pedido</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.menu}>
          <Text style={styles.textName}>Fernando</Text>

        <View style={{ width: '100%' }}>
          <Text style={styles.text}>Seu Pedido</Text>
          <View style={styles.line}/>
          <View style={{ marginTop: 0, paddingHorizontal: 10 }}>
            <View style={styles.tableRow}>
              <Text style={[styles.tableHeader, { flex: 2 }]}>Factura</Text>
              <Text style={[styles.tableHeader, { flex: 1 }]}>Qtd</Text>
              <Text style={[styles.tableHeader, { flex: 1 }]}>Preço</Text>
            </View>

            {/* <View style={styles.line} /> */}

            {/* Linhas de dados */}
            {data.map((item) => (
              <View key={item.id} style={styles.tableRow}>
                <Text style={[styles.tableCell, { flex: 2 }]}>{item.factura}</Text>
                <Text style={[styles.tableCell, { flex: 1 }]}>{item.Qtd}</Text>
                <Text style={[styles.tableCell, { flex: 1 }]}>R${item.preco.toFixed(2)}</Text>
              </View>
            ))}
          </View>
        </View>

          <TouchableOpacity onPress={menu} style={styles.btnOut}  >
            <Text style={styles.titleInfoBtn}>Finalizar pedido</Text>  
          </TouchableOpacity> 
        </View>
      </View>
          <TouchableOpacity onPress={menu} style={styles.buttoeOUT}>
            <Text style={styles.text}>X Fechar Conta</Text>
          </TouchableOpacity>

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
    width: '90%',
    padding: 20,
    margin: 15,
    backgroundColor: '#FFF',
    borderRadius: 30,
    bottom: 1,
    position: 'absolute',
    height: '100%',
    alignItems: 'center',
  },
  
  buttoeOUT: {
  backgroundColor: '#f46161ff',         // largura fixa          // mesma altura da largura
  borderRadius: 20,     // metade da largura/altura para ser um círculo
  alignItems: 'center',
  justifyContent: 'center', // centraliza o conteúdo dentro do botão
  paddingVertical: 10,
  margin: 20,
  },

  btnOut: {
      width: '100%',
      height: 50,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      backgroundColor: '#61f4dcff', // Cor de fundo do botão
    },
  titleInfoBtn: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textName: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
tableRow: {
  flexDirection: 'row',
  paddingVertical: 8,
  borderBottomWidth: 1,
  borderColor: '#ccc',
},
tableHeader: {
  fontWeight: 'bold',
  fontSize: 16,
  color: '#000',
},
tableCell: {
  fontSize: 16,
  color: '#000',
},
});
