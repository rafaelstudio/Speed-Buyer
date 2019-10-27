import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`   
    flex:1;
    justify-content:center;
    align-items:center;
`;

const Background = styled.ImageBackground`
    width:100%;
    height:100%;
`;

const Texto = styled.Text`
    font-size:15px;
    margin:15px;
    font-family:Arial;
`;

const Titulo = styled.Text`
    font-size:20px;
    margin:15px;
    font-weight:bold;
`;

const InputField = styled.View`
    display:flex;
    flex-direction:column;
    height:auto ;
    margin:0 15px 0 15px;
`;

const Input = styled.TextInput`
    width:100%;
    height:35px;
    border:1px solid #000;
    background-color:#fff;
    color:#000;    

`;

const TituloInput = styled.Text`
    font-size:18px;
    font-weight:bold;
    margin-top:5px;

`;

const Scroll = styled.ScrollView`
    

`;

const AreaBotao = styled.View`
    width:150px;
    margin-top:20px;
    margin:auto;
    padding:20px;

`;


const Botao = styled.Button`

`;



const Page = ()=>{
    return(
        <Container>
            <Background source={require('../images/Backgrounds/bgCinza.jpg')}>
            <Scroll>
                <Titulo>Faça seu cadastro</Titulo>
                <Texto>Preencha os campos do formulario 
                com os seus dados, e torne-se 
                um cliente de nosso APP</Texto>

                <InputField>
                    <TituloInput>NOME:</TituloInput>
                    <Input placeholder="Nome"/>
                </InputField>

                <InputField>
                    <TituloInput>CPF</TituloInput>
                    <Input placeholder="___,___,___-__"/>
                </InputField>

                <InputField>
                    <TituloInput>TELEFONE</TituloInput>
                    <Input placeholder="(__)_____-____"/>
                </InputField>

                <InputField>
                    <TituloInput>DATA DE NASIMENTO</TituloInput>
                    <Input placeholder="__/__/____"/>
                </InputField>

                <InputField>
                    <TituloInput>RAZÃO SOCIAL</TituloInput>
                    <Input placeholder=" "/>
                </InputField>

                <InputField>
                    <TituloInput>CNPJ*</TituloInput>
                    <Input placeholder="________/____-__"/>
                </InputField>

                <InputField>
                    <TituloInput>E-MAIL</TituloInput>
                    <Input placeholder="EXEMPLO@EXEMPLO.COM"/>
                </InputField>

                <InputField>
                    <TituloInput>SENHA</TituloInput>
                    <Input placeholder="****"/>
                </InputField>

                <InputField>
                    <TituloInput>RUA:</TituloInput>
                    <Input placeholder=""/>
                </InputField>

                <InputField>
                    <TituloInput>Nº:</TituloInput>
                    <Input placeholder="___,___,___-__"/>
                </InputField>

                <InputField>
                    <TituloInput>UF</TituloInput>
                    <Input placeholder="--"/>
                </InputField>

                <InputField>
                    <TituloInput>CIDADE:</TituloInput>
                    <Input placeholder=" "/>
                </InputField>
              

                <InputField>
                    <TituloInput>BAIRRO</TituloInput>
                    <Input placeholder=" "/>
                </InputField>

                <InputField>
                    <TituloInput>COMPLEMENTO</TituloInput>
                    <Input placeholder="AP-BLOCO-LOTE-FUNDOS-"/>
                </InputField>

                <InputField>
                    <TituloInput>PONTO DE REFERENCIA</TituloInput>
                    <Input placeholder=" "/>
                </InputField>

                <AreaBotao>
                    <Botao title="ENVIAR"  />
                </AreaBotao>





            </Scroll>
    
            </Background>
        </Container>
    );
}

export default Page;