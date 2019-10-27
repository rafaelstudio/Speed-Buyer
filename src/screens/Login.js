import React from 'react';
import styled from 'styled-components/native';
import {NavigationActions, StackActions}from 'react-navigation';

const Container = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items:center;
`;


const Texto = styled.Text`
    font-size:15px;

`;

const AreaBotao = styled.View`
    width:170px;
    margin-top:20px;
    height:40px;
`;


const Botao = styled.Button`
   
`;

const Background = styled.ImageBackground`
    width:100%;
    height:100%;
`;

const Select = styled.Picker`

`;

const Input = styled.TextInput`
    width:250px;
    height:40px;
    border:1px solid #000;
    margin:10px;
    background-color:#fff;
    color:#000;
    

`;



const Page = (props)=>{

    const handleLogin = () =>{

        const resetAction = StackActions.reset({
            index:0,
            actions:[
               NavigationActions.navigate({routeName:'HomeDrower'})
            ]
        });
        props.navigation.dispatch(resetAction);


    }

   


    return(
        

<Background source={require('../images/Backgrounds/carrinho.jpg')}>
    <Container>              
        
                <Input placeholder="CPF/CNPJ"/>

                <Input placeholder="Senha"/>

                <AreaBotao>
                    <Botao title="Logar" onPress={handleLogin}    />
                </AreaBotao>
           
        </Container>
</Background>

    );
}

export default Page;