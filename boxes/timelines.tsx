import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const events = [
  { id: 1, date: '2022-08-24', title: 'Move-In Day @Villanova, Sophomore Year', description: 'Trinity Hall, Villanova, PA' },
  { id: 2, date: '2022-08-27', title: 'Cowtown Rodeo', description: 'Ellie, Caroline, Michael, Pat, Nick, and Mike all packed in the Orange Tacoma' },
  { id: 3, date: '2023-01-10', title: 'Vacation', description: 'Visited the beautiful beaches of Hawaii.' },
  { id: 4, date: '2023-02-14', title: 'Valentine\'s Day', description: 'Shared gifts and had a romantic dinner.' },
  { id: 5, date: '2023-06-01', title: 'Road Trip', description: 'Explored the countryside together.' },
];

export default function TimelinesScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.timeline}>
          {events.map((event, index) => (
            <View
              key={event.id}
              style={[styles.eventContainer, index % 2 === 0 ? styles.eventLeft : styles.eventRight]}
            >
              <View style={styles.event}>
                <Text style={styles.eventDate}>{event.date}</Text>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDescription}>{event.description}</Text>
              </View>
              <View style={styles.line} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    paddingVertical: 20, // Standard padding
  },
  timeline: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  eventContainer: {
    width: '90%',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  eventLeft: {
    flexDirection: 'row',
  },
  eventRight: {
    flexDirection: 'row-reverse',
  },
  event: {
    width: '40%',
    backgroundColor: '#E0F7FA',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  eventDate: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 5,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  eventDescription: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },
  line: {
    width: 5,
    height: '100%',
    backgroundColor: '#000',
    marginHorizontal: 10,
    borderRadius: 5,
  },
});
