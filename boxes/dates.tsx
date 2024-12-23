import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type DateScreenNavigationProp = {
  navigation: NavigationProp<any>;
};

const dates = [
  { id: '1', title: '1. Pasta Making Class', date: '2023-12-09', image: require('../assets/pasta.jpg') },
  { id: '2', title: '2. NYC Anniversary Trip', date: '2024-12-08', image: require('../assets/nyc.jpg') },
  { id: '3', title: '3. Michaels 21st Birthday Party', date: '2024-07-27', image: require('../assets/mbday.jpg') },
  { id: '4', title: '4. Rocky Run (10 miles, 8:27 minute pace)', date: '2024-11-09', image: require('../assets/rocky.jpg') },
  { id: '5', title: '5. Morgan Wallen Concert', date: '2024-05-20', image: require('../assets/wallen.jpg') },
];

const screenWidth = Dimensions.get('window').width;

export default function DatesScreen({ navigation }: DateScreenNavigationProp) {
  return (
    <ImageBackground
      source={require('../assets/kkg1.jpg')} // Replace with the correct path to your image
      style={styles.background}
      imageStyle={{ opacity: 0.3, resizeMode: 'contain' }} // Fit the image within the screen
    >
      <View style={styles.container}>
        <Text style={styles.title}>Date Hall of Fame</Text>
        <View style={styles.row}>
          {dates.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.dateCard}
              onPress={() => navigation.navigate('DetailsScreen', { dateId: item.id })}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#000', // Ensures text is visible over the faded background
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth - 32,
  },
  dateCard: {
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  image: {
    width: screenWidth / 5 - 8,
    height: screenWidth / 5 - 8,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
    color: '#000',
  },
  cardDate: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
});
