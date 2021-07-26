import styled, {css} from 'styled-components/native';

export type MyTextProps = {
  weight?: 400 | 500 | 600 | 700 | 800;
  color?: string;
  size?: number;
  lineHeight?: number;
};

export const MyText = styled.Text<MyTextProps>`
  font-family: Mulish-${props => props.weight ?? 400};
  color: ${props => props.color ?? '#fff'};
  font-size: ${props => props.size ?? 14}px;
  ${props =>
    props.lineHeight &&
    css`
      line-height: ${props.lineHeight}px;
    `};
`;
