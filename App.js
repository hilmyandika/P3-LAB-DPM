import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Fix from './components/fix';
import Wrap from './components/wrap';
import Profile from './components/profile';
import PostList from './components/FlatList';

const App = () => {
  const posts = [
    { content: 'Project UAS DPM', timestamp: '8d ago' },
    { content: 'Tugas 3 Praktikum DPM', timestamp: '6d ago' },
    { content: 'Tugas Praktikum AI', timestamp: '6d ago' },
    { content: 'Praktikum PMP', timestamp: '3d ago' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Fix>
        <Profile />
        <Wrap>
          <PostList posts={posts} />
        </Wrap>
      </Fix>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default App;