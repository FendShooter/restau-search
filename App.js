import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import CategoruItem from './src/components/CategoruItem';
import Header from './src/components/Header';
import Search from './src/components/Search';
import { dataset } from './src/data/data';
import { useState } from 'react';
import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';
export default function App() {
  const [term, setTerm] = useState('Burger');
  const tailwind = useTailwind();
  return (
    <TailwindProvider utilities={utilities}>
      <Header />
      <Search />
      <View>
        <FlatList
          data={dataset}
          renderItem={({ item }) => {
            return (
              <CategoruItem
                name={item.name}
                imageUrl={item.imageUrl}
                active={item.name === term}
                changeHandler={() => setTerm(item.name)}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(cat) => cat.name}
        />
      </View>
    </TailwindProvider>
  );
}


