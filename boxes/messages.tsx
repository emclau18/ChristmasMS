import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MessagesScreen() {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; date: string }[]>([]);

  // Load messages from AsyncStorage when the component mounts
  useEffect(() => {
    const loadMessages = async () => {
      try {
        const savedMessages = await AsyncStorage.getItem('messages');
        if (savedMessages) {
          setMessages(JSON.parse(savedMessages));
        }
      } catch (error) {
        console.error('Error loading messages', error);
      }
    };

    loadMessages();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const currentDate = new Date().toLocaleString();
      const newMessages = [{ text: newMessage, date: currentDate }, ...messages];
      setMessages(newMessages);

      try {
        await AsyncStorage.setItem('messages', JSON.stringify(newMessages));
      } catch (error) {
        console.error('Error saving messages', error);
      }

      setNewMessage(''); // Clears the text input after sending the message
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
        )}
        inverted // To display the most recent messages at the top
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          onSubmitEditing={handleSendMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  messageBubble: {
    backgroundColor: '#E0F7FA',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 10,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  dateText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  input: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#FFF',
    padding: 10,
    marginRight: 10,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  sendButton: {
    backgroundColor: '#E0F7FA',
    padding: 10,
    borderRadius: 8,
  },
  sendText: {
    fontSize: 16,
    color: '#000',
  },
});
