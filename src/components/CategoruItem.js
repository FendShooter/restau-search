import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { elevation } from './Common.styles';
export default function CategoruItem({
  name,
  imageUrl,
  active,
  changeHandler,
}) {
  return (
    <TouchableOpacity onPress={changeHandler}>
      <View
        style={[
          styles.container,
          styles.elevation,
          active ? { backgroundColor: 'rgb(241,186, 87)' } : 'white',
        ]}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageUrl} />
        </View>
        <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginHorizontal: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  elevation,
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 5,
  },
  header: {
    fontWeight: 'bold',
  },
});
