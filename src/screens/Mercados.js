import React from 'react';
import styled from 'styled-components/native';
import { tsPropertySignature } from '@babel/types';

const Container = styled.SafeAreaView`
    flex:1;
`;

const Texto = styled.Text`
    font-size:15px;
`;

const Botao = styled.Button`
   
`;

const Image = styled.Image`

`;


const Page = (props)=>{
    return(
        <Container>
            <Texto>Mercados</Texto>
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