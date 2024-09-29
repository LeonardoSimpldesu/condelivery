import { View, Text, StyleSheet } from 'react-native';

export default function Condominium() {
  return (
    <View style={styles.container}>
      <Text>Tab CONDOMINIO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});