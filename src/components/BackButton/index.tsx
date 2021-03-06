import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {
  Container,
} from './styles';
import { useTheme } from 'styled-components';

interface BackButtonProps extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: BackButtonProps) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons 
        size={24} 
        name="chevron-left" 
        color={color || theme.colors.text} 
      />
    </Container>
  );
}