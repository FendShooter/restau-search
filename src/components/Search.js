import { SafeAreaView, View, TextInput, StyleSheet } from 'react-native';
import { elevation } from './Common.styles';
import { FontAwesome } from '@expo/vector-icons';
import { useTailwind } from 'tailwind-rn';
export default function Search() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex px-4 flex-row ')}>
      <View>
        <FontAwesome name='search' size={25} />
      </View>
      <TextInput style={tailwind('ml-4')} placeholder='Restaurants, food' />
    </View>
  );
}
{
  /* <View style={[styles.container, styles.elevation]}> */
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 12,
    backgroundColor: 'white',

    padding: 16,
    alignItems: 'center',
    borderRadius: 40,
  },
  elevation,
  formControl: {
    flex: 1,
    padding: 4,
  },
});
