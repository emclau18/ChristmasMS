import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ellie McLaughlin and Michael Shanley</Text>
        <Text style={styles.subtitle}>Memories Over the Years</Text>
        <Text style={styles.subtitle}>Est. November 27, 2022</Text>
      </View>
      <View style={styles.photoRow}>
        <Image
          source={require('./assets/unnamed.jpg')} 
          style={styles.photo}
        />
        <Image
          source={require('./assets/sunset.jpg')} 
          style={styles.photo}
        />
        <Image
          source={require('./assets/door.jpg')} 
          style={styles.photo}
        />
      </View>
      <View style={styles.whiteSection}>
        <Image
          source={require('./assets/backgroundsunset.jpg')} 
          style={styles.fadedPhoto}
        />
        <View style={styles.overlay}>
          <View style={styles.boxRow}>
            <TouchableOpacity style={styles.box} onPress={() => navigateTo('dates')}>
              <Text style={styles.boxText}>Date Hall of Fame</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => navigateTo('rest')}>
              <Text style={styles.boxText}>Restaurants</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boxRow}>
            <TouchableOpacity style={styles.box} onPress={() => navigateTo('gallery')}>
              <Text style={styles.boxText}>Photo Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => navigateTo('timeline')}>
              <Text style={styles.boxText}>Timeline</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boxRow}>
            <TouchableOpacity style={styles.box} onPress={() => navigateTo('messages')}>
              <Text style={styles.boxText}>Messages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => navigateTo('favs')}>
              <Text style={styles.boxText}>Favorite Things</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

function navigateTo(screen: 'dates' | 'rest' | 'gallery' | 'timeline' | 'messages' | 'favs') {
  // Your navigation logic here
  console.log(`Navigating to ${screen}`);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'lobster',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'lobster',
    color: '#000',
    marginBottom: 5,
  },
  photoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
    backgroundColor: '#E0F7FA',
  },
  photo: {
    flex: 1,
    height: Dimensions.get('window').width / 3,
    resizeMode: 'cover',
    marginHorizontal: 2,
    borderRadius: 8,
  },
  whiteSection: {
    position: 'relative',
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 20,
  },
  fadedPhoto: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.4, // Adjust opacity for the faded effect
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '300%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  box: {
    backgroundColor: '#E0F7FA',
    width: '48%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    ...Platform.select({
      ios: {
        ':hover': {
          backgroundColor: 'rgba(255, 255, 255, 0)',
        },
      },
      android: {
        ':focus': {
          backgroundColor: 'rgba(255, 255, 255, 0)',
        },
      },
    }),
  },
  boxText: {
    fontSize: 20,  // Increased font size
    color: '#000',
    fontFamily: 'lobster',
  },
});
