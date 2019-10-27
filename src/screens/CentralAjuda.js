import React, {Component} from 'react';
import styled from 'styled-components/native';
import { tsPropertySignature } from '@babel/types';

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


const Botao = styled.Button`

`;

const Page = (props)=>{
    return(
        <Container>
            <Texto>CENTRAL DE AJUDA</Texto>

            <AreaBotao>
              <Botao title="Abrir Drawer" onPress={()=>props.navigation.openDrawer() }    />
            </AreaBotao>
        </Container>
    );
}

Page.navigationOptions = () =>{
    return{
        title:'Central de Ajuda'
    }
}

export default Page;