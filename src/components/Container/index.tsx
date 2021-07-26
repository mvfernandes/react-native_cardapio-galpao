import React, {PropsWithChildren} from 'react';
import {ContainerStyled} from './styles';

type Props = {};

export function Container({children}: PropsWithChildren<Props>) {
  return <ContainerStyled>{children}</ContainerStyled>;
}
