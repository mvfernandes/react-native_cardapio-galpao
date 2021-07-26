import React, {PropsWithChildren} from 'react';
import {MyText, MyTextProps} from './styles';

type Props = MyTextProps & {};

export function Typography({children, ...rest}: PropsWithChildren<Props>) {
  return <MyText {...rest}>{children}</MyText>;
}
