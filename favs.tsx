import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FavsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurants</Text>
      {/* Add more content specific to this screen */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 32,
    fontFamily: 'lobster',
    color: '#000',
  },
  // Add other styles as needed
});
