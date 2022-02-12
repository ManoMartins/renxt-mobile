import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
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
     
        <About>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa velit ullam dolore rem, voluptas labore quas. Excepturi, illo, suscipit recusandae illum, reprehenderit optio ducimus libero itaque corrupti ut maxime?
        </About>
      </Content>

    </Container>
  );
}