import React from 'react';
import styled from 'styled-components/native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';


const Scroll = styled.ScrollView`

`;

const Area = styled.SafeAreaView`
    align-items:center;

`;

const Logo = styled.Image`
    width: 120px;
    height:120px;
    background-color:#000;
    border-radius:60px;
    margin-top:10px;
`;

const Botao = styled.TouchableOpacity`
  width:90% ;
  height:40px;
  align-items:center;
  justify-content:center;
  border:1px solid #ccc;
  margin-bottom:10px;
  background-color:#f4f4f4;
`;

const TextBotao = styled.Text`
    font-family:sans-serif;
    font-size:15px;
`;



export default (props) => {
   
return(
    <Scroll>
        <Area>
            <Logo source={require('../images/user.png')}/>
            <DrawerNavigatorItems 
            {...props} 
                itemsContainerStyle={{width:'100%'}}
            
            />

            <Botao>
                <TextBotao>Sair</TextBotao>
            </Botao>
        </Area>
    </Scroll>

);

}