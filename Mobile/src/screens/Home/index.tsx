import { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export interface Game {
  id: string;
  title: string;
  _count: {
    ads: number
  };
  bannerUrl: string;
}

export function Home() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://192.168.176.130:3333/games')
      .then(response => response.json())
      .then(data => {
        return (setGames(data))
      })
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />


    </View>
  );
}