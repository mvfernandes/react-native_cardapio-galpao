import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

export const Header = styled.View`
  background-color: ${props => props.theme.bgHeader};
  padding: 35px 24px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const SearchContainer = styled.View.attrs({
  //https://ethercreative.github.io/react-native-shadow-generator/
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
})`
  margin-top: 25px;
  background-color: ${props => props.theme.bgInput};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;

export const Search = styled.TextInput`
  font-family: Mulish-500;
  padding: 10px 0;
  width: 100%;
  margin-left: 10px;
  font-size: 16px;
  color: #464646;
`;

export const TabScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {},
})`
  padding-left: 20px;
  padding-right: 23px;
  margin-top: 37px;
  max-height: 50px;
`;

export const TabItemButton = styled.Pressable`
  margin-left: 3px;
  margin-right: 26px;
  align-items: center;
`;

type TabItemButtonTextProps = {
  active?: boolean;
};
export const TabItemButtonText = styled.Text<TabItemButtonTextProps>`
  font-size: 18px;
  font-family: Mulish-600;
  line-height: 22px;
  color: #fff;
  padding-bottom: 8px;
  ${props =>
    props.active &&
    css`
      border-bottom-color: #ff9a00;
      border-bottom-width: 3px;
    `}
`;

export const ListItems = styled.FlatList`
  margin-left: 16px;
  margin-right: 16px;
  flex: 1;
`;

export const CardItem = styled.Pressable`
  border-radius: 10px;
  background-color: #474f5a;
  width: ${width / 2 - 30}px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 11px 14px;
`;
export const ImgCardItem = styled.Image`
  height: 200px;
  border-radius: 10px;
`;
export const TitleCardItem = styled.Text`
  font-family: Mulish-700;
  color: #fff;
  font-size: 18px;
  line-height: 22px;
  margin-top: 20px;
  margin-bottom: 5px;
`;
export const SubtitleCardItem = styled.Text`
  font-family: Mulish-400;
  color: #dcdcdc;
  font-size: 11px;
  line-height: 13px;
  margin-bottom: 10px;
`;
export const PriceCardItem = styled.Text`
  font-family: Mulish-700;
  color: #ff9a00;
  font-size: 14px;
  line-height: 17px;
`;

export const Footer = styled.View`
  background-color: #202127;
  padding: 24px;
`;

export const ButtonViewOrders = styled.Pressable.attrs({
  android_ripple: {
    color: '#0001',
  },
})`
  background-color: #ff9a00;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 18px;
`;

export const TextButtonViewOrders = styled.Text`
  font-family: Mulish-800;
  color: #000;
  font-size: 18px;
`;
