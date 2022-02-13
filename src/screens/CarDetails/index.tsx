import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  About,
} from './styles';

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={['https://cdn.picpng.com/ferrari/ferrari-face-28762.png']} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Ferrari</Brand>
            <Name>490</Name>
          </Description>

          <Rent>
             <Period>Ao dia</Period>
             <Price>R$ 380,00</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="370km/h" icon={speedSvg} />
          <Accessory name="3.1s" icon={accelerationSvg} />
          <Accessory name="750HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 Pessoas" icon={peopleSvg} />
         </Accessories>
     
        <About>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa velit ullam dolore rem, voluptas labore quas. Excepturi, illo, suscipit recusandae illum, reprehenderit optio ducimus libero itaque corrupti ut maxime?
        </About>
      </Content>

    </Container>
  );
}