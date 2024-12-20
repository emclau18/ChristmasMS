import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import DatesScreen from './boxes/dates';
import RestScreen from './boxes/rest';
import GalleryScreen from './boxes/gallery';
import TimelineScreen from './boxes/timelines';
import MessagesScreen from './boxes/messages';
import FavsScreen from './boxes/favs';
import { SafeAreaView } from 'react-native-safe-area-context';

type RootStackParamList = {
  Home: undefined;
  dates: undefined;
  rest: undefined;
  gallery: undefined;
  timeline: undefined;
  messages: undefined;
  favs: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Ellie McLaughlin and Michael Shanley</Text>
          <Text style={styles.subtitle}>Memories Over the Years</Text>
          <Text style={styles.subtitle}>Est. November 27, 2022</Text>
        </View>
        <View style={styles.photoRow}>
          <Image source={require('./assets/unnamed.jpg')} style={styles.photo} />
          <Image source={require('./assets/sunset.jpg')} style={styles.photo} />
          <Image source={require('./assets/door.jpg')} style={styles.photo} />
        </View>
        <View style={styles.whiteSection}>
          <Image source={require('./assets/backgroundsunset.jpg')} style={styles.fadedPhoto} />
          <View style={styles.overlay}>
            <View style={styles.boxRow}>
              <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('dates')}>
                <Text style={styles.boxText}>Date Hall of Fame</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('rest')}>
                <Text style={styles.boxText}>Restaurants</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxRow}>
              <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('gallery')}>
                <Text style={styles.boxText}>Photo Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('timeline')}>
                <Text style={styles.boxText}>Timeline</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxRow}>
              <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('messages')}>
                <Text style={styles.boxText}>Messages</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('favs')}>
                <Text style={styles.boxText}>Favorite Things</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="dates" component={DatesScreen} />
        <Stack.Screen name="rest" component={RestScreen} />
        <Stack.Screen name="gallery" component={GalleryScreen} />
        <Stack.Screen name="timeline" component={TimelineScreen} />
        <Stack.Screen name="messages" component={MessagesScreen} />
        <Stack.Screen name="favs" component={FavsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
    opacity: 0.4,
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
  },
  // boxText: {
  //   fontSize: 20,
  //   color: '#000',
  //   fontFamily: 'lobster',
  // },
  cardBox: {
    backgroundColor: '#FFF',
    width: '48%',
    height: 180,
    borderRadius: 8,
    overflow: 'hidden',
    margin: 4,
  },
  cardImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  boxText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'lobster',
    textAlign: 'center',
    paddingVertical: 8,
  },
});
