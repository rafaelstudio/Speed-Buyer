

import React, { Component } from 'react'
import { Text, StyleSheet,Button, View ,Image} from 'react-native'
import styled from 'styled-components/native';
import firebase from 'firebase';
import { TextInput } from 'react-native-gesture-handler';

const ToggleArea = styled.TouchableHighlight`
width:50px;
height:50px ;
`;

const ImageMenu = styled.Image`
width:50px;
height:50px ;
`;

export default class Login extends Component {
   
    constructor(props){
        super(props);
        this.state ={
            nome:'Carregando...'
        };


        let Config = {
            apiKey: "AIzaSyCxtWZHJu29balBpM-aRlOSO-1EDoav75A",
            authDomain: "speedbuyer-8c692.firebaseapp.com",
            databaseURL: "https://speedbuyer-8c692.firebaseio.com",
            projectId: "speedbuyer-8c692",
            storageBucket: "speedbuyer-8c692.appspot.com",
            messagingSenderId: "609744602242",
            appId: "1:609744602242:web:ead7658b6da07a3c07609b",
            measurementId: "G-JXVGFGRF98"
          };
          // Initialize Firebase
          firebase.initializeApp(Config);

         this.cadastrar = this.cadastrar.bind(this);    
         
        
    }

    cadastrar(){
        
          firebase.auth().createUserWithEmailAndPassword(
              this.state.email,
              this.state.senha
              ).catch((error)=>{
                        switch(error.code){
                            case 'auth/weak-password':
                                    alert("Sua senha deve ter pelo menos 6 caracteres");
                            break;     
                            case 'auth/email-already-in-use':
                                    alert("Este email ja tem conta");
                            break;    
                            default:
                                    alert("Ocorreu um erro");
                            break;        
                        
                        }    

                  
              });         
          
           
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Email: </Text>
                <TextInput style={styles.input} onChangeText={(email)=>this.setState({email})}> </TextInput>
                <Text>Senha:</Text>
                <TextInput secureTextEntry={true} style={styles.input} onChangeText={(senha)=>this.setState({senha})}> </TextInput>

                <Button title="Inserir Usuario" onPress={this.cadastrar} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        padding:20
    },
    input:{
        height:40,
        borderWidth:1,
        borderColor:'#FF0000'
    }

});














////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import styled from 'styled-components/native';
// import {NavigationActions, StackActions}from 'react-navigation';
// import Selecao from '../components/SelecaoPiker';

// const Container = styled.SafeAreaView`
//     flex:1;
//     justify-content:center;
//     align-items:center;
// `;


// const Texto = styled.Text`
//     font-size:15px;

// `;

// const AreaBotao = styled.View`
//     width:170px;
//     margin-top:20px;
//     height:40px;
// `;


// const Botao = styled.Button`
   
// `;

// const Background = styled.ImageBackground`
//     width:100%;
//     height:100%;
// `;

// const Select = styled.Picker`

// `;

// const Input = styled.TextInput`
//     width:250px;
//     height:40px;
//     border:1px solid #000;
//     margin:10px;
//     background-color:#fff;
//     color:#000;
    

// `;



// const Page = (props)=>{

//     const handleLogin = () =>{

//         const resetAction = StackActions.reset({
//             index:0,
//             actions:[
//                NavigationActions.navigate({routeName:'HomeDrower'})
//             ]
//         });
//         props.navigation.dispatch(resetAction);


//     }

   


//     return(
        

// <Background source={require('../images/Backgrounds/carrinho.jpg')}>
//     <Container>          

//                 <Selecao  />    
        
//                 <Input placeholder="CPF/CNPJ"/>

//                 <Input placeholder="Senha"/>

//                 <AreaBotao>
//                     <Botao title="Logar" onPress={handleLogin}    />
//                 </AreaBotao>
           
//         </Container>
// </Background>

//     );
// }

// export default Page;