import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';

type LayoutProps = {
  children: React.ReactNode;
  onOptionsPress?: () => void;
  onSearchPress?: () => void;
};


export default function Layout({ children, onOptionsPress, onSearchPress }: LayoutProps) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#221e1eff" />
      <View style={styles.header}>
        <TouchableOpacity onPress={onOptionsPress}>
          <Ionicons name="menu" size={60} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require('../assets/image/fff.jpg')}
          style={styles.logo}
        />
        <TouchableOpacity onPress={onSearchPress}>
          <Ionicons name="search" size={60} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#221e1eff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#221e1eff',
    // backgroundColor: '#221e1eff',
    elevation: 2,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 60,
  },
  content: {
    flex: 1,
    backgroundColor: '#221e1eff',
  },
});