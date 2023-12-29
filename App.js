import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight } from 'react-native';

const App = () => {
  const handleClick = () => {
    alert("merhaba");
  };

  return (
    <View style={styles.container}>
      <Button title="Click Button" onPress={handleClick} />
      <TouchableOpacity onPress={handleClick}>
        <Text>Click TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="#DDDDDD"
        onPress={() => alert("pressed!")}
      >
        <Text>Click TouchableHighlight</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
