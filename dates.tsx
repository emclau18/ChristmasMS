import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function DatesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Date Hall of Fame</Text>
      <Text style={styles.subtitle}>Here, you can display memorable dates and events.</Text>
      {/* Add additional content or components as needed */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 32,
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
});
