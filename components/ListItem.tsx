import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListItem = props => {
  return (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <Image
          style={{width: 150, height: 150}}
          source={{uri: props.imageUrl}}
          resizeMode="contain"
        />
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItem;
