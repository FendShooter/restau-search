import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.constainer}>
      <Text style={styles.lightHeader}>Grab your </Text>
      <Text style={styles.boldHeader}>Delicious meal!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    marginTop: 60,
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 35,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
