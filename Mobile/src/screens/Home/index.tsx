import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
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

  const navigation = useNavigation();
  function handleOpenGame() {
    navigation.navigate('game')
  }

  useEffect(() => {
    fetch('http://192.168.176.130:3333/games')
      .then(response => response.json())
      .then(data => {
        return (setGames(data))
      })
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
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
              onPress={handleOpenGame}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />


      </SafeAreaView>
    </Background>
  );
}