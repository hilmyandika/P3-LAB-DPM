import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Muhammad Hilmy Andika',
      handle: '@hilmyandika25',
      bio: 'Hanya Seorang Mahasiswa',
      profilePic: require('../assets/ProfilePics.jpg'),
    };
  }

  render() {
    const { username, handle, bio, profilePic, } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={profilePic} style={styles.avatar} />
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.handle}>{handle}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#808080',
    marginBottom: 10,
  },
  profileContainer: {
    paddingHorizontal: 25,
    marginTop: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#000',
    marginBottom: 10,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  handle: {
    fontSize: 16,
    color: '#000',
  },
  bio: {
    marginVertical: 10,
    fontSize: 14,
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Profile;