import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DatesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Date Hall of Fame</Text>
      {/* Add your content here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});