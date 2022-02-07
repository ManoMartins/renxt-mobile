import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
  CarList,
  Container, Header, HeaderContent, TotalCars,
} from './styles';

export function Home() {
  const carDetail = {
    brand: 'Fiat',
    name: 'Uno',
    rent: {
      period: 'Diária',
      price: 90,
    },
    thumbnail: 'https://cdn.picpng.com/ferrari/ferrari-face-28762.png',
  }

  return (
    <Container>
      <StatusBar 
        translucent 
        barStyle='light-content' 
        backgroundColor='transparent' 
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />

          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList 
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car {...carDetail} />}
      />
    </Container>
  );
}