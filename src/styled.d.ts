// styled.d.ts
import 'styled-components';
import {colors} from './theme/colors';

type TypeColors = typeof colors;

declare module 'styled-components' {
  export interface DefaultTheme extends TypeColors {}
}
