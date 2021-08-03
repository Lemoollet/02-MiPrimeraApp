import React, {useState} from 'react';
import Fab from '../components/Fab';
import {StyleSheet, Text, View} from 'react-native';

const CounterScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <Fab title="+1" onPress={() => setContador(contador + 1)} />
      <Fab title="+1" onPress={() => setContador(contador - 1)} position="bl" />
      {/* <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => setContador(contador - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  title: {
    fontSize: 40,
    top: -15,
    textAlign: 'center',
  },
});
