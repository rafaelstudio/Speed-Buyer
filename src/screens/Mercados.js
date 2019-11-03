import React from 'react';
import styled from 'styled-components/native';
import listaMercado from '../ListaMercado'
import ListaItemMercados from '../components/ListaItemMercados'

const Container = styled.SafeAreaView`
    flex:1;
`;

const Listagem = styled.FlatList`
    flex:1;
`;



const Image = styled.Image`

`;



const Page = (props)=>{
    return(
    <Container>
        <Listagem 
            data={listaMercado}
            renderItem={({item})=><ListaItemMercados data={item} /> }
            keyExtractor={(item)=>item.id}

        />   
       
   </Container>
    );
}

Page.navigationOptions = () =>{
    return{
        title:'Mercados',
        drawerIcon: () => (
            <Image
              source={require('../images/icons/mercados.png')}
              style={{width: 30, height: 30, borderRadius: 15}}
            />)
    }
}

export default Page;