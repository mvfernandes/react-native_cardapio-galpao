import React, {useState} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {Container} from '../../components/Container';
import {Typography} from '../../components/Typography';
import {
  Header,
  Search,
  SearchContainer,
  TabItemButton,
  TabScroll,
  TabItemButtonText,
  CardItem,
  ImgCardItem,
  TitleCardItem,
  SubtitleCardItem,
  PriceCardItem,
  ListItems,
  Footer,
  ButtonViewOrders,
  TextButtonViewOrders,
} from './styles';

export function Home() {
  const [tabItemActive, setTabItemActive] = useState('1');
  function renderItem() {
    return (
      <CardItem>
        <ImgCardItem
          source={{
            uri: 'https://images.unsplash.com/photo-1600688640154-9619e002df30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80',
          }}
        />
        <TitleCardItem>Galpão burguer</TitleCardItem>
        <SubtitleCardItem>
          Blend de 200g, com maionese rústica, queijo e alface
        </SubtitleCardItem>
        <PriceCardItem>R$ 37,00</PriceCardItem>
      </CardItem>
    );
  }
  return (
    <Container>
      <Header>
        <Typography size={36} weight={800} lineHeight={45.18}>
          Galpão 37
        </Typography>
        <SearchContainer>
          <Ionicon name="search" size={24} color="#FF9A00" />
          <Search placeholder="Buscar..." />
        </SearchContainer>
      </Header>

      <TabScroll snapToAlignment="center">
        {[
          {id: '1', name: 'Burgers'},
          {id: '2', name: 'Frutos do mar'},
          {id: '3', name: 'Massas'},
          {id: '4', name: 'Entradas'},
        ].map(item => (
          <TabItemButton
            key={item.id}
            onPress={() => setTabItemActive(item.id)}>
            <TabItemButtonText active={item.id === tabItemActive}>
              {item.name}
            </TabItemButtonText>
          </TabItemButton>
        ))}
      </TabScroll>

      <ListItems
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => String(item)}
      />

      <Footer>
        <ButtonViewOrders>
          <TextButtonViewOrders>VER PEDIDOS</TextButtonViewOrders>
        </ButtonViewOrders>
      </Footer>
      
    </Container>
  );
}
