import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const PostList = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.postContainer}>
          <Text style={styles.postContent}>{item.content}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  postContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    padding: 14,
    backgroundColor: '#000',
  },
  postContent: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
  },
  timestamp: {
    fontSize: 14,
    color: '#888',
  },
});

export default PostList;