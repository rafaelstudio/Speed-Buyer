import React, {Component} from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex:1;
`;

const Texto = styled.Text`
    font-size:15px;
`;

const AreaBotao = styled.View`
    width:150px;
    margin-top:20px;
    height:100px;
`;

const Image = styled.Image`

`;


const Botao = styled.Button`

`;

const Page = (props)=>{
    return(
        <Container>
            <Texto>CARRINHO DE COMPRAS</Texto>

            <AreaBotao>
              <Botao title="Abrir Drawer" onPress={()=>props.navigation.openDrawer() }    />
            </AreaBotao>
        </Container>
    );
}

Page.navigationOptions = () =>{
    return{
        title:'Pedidos',
        drawerIcon: () => (
            <Image
              source={require('../images/icons/pedidos.icon.jpg')}
              style={{width: 30, height: 30, borderRadius: 15}}
            />)
    }
}

export default Page;