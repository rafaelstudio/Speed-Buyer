import React, {useState} from 'react';
import styled from 'styled-components/native';
import lista from '../../src/lista';
import ListaItem from '../components/ListaItem';
import AddItemArea from '../components/AddItemArea';
import uuid from 'uuid/v4';

const Container = styled.SafeAreaView`
    flex:1;
`;

const Background = styled.ImageBackground`
    width:100%;
    height:100%;
`;

const ScrollArea = styled.View `    
    align-items:center;
    margin:auto;
    background-color:#fdfdfd;

`;

const Listagem = styled.FlatList`
        margin-top:10px;
        padding-top:15px;
        width:300px;     
        height:400px;
`;

const ItemList = styled.TouchableOpacity`
    padding:10px;
    background-color:#fdfdfd;
    flex-direction:row;
`;

const ItemText = styled.Text`
    font-size:15px;
    flex:1;
`;

const ItemCheck = styled.View`
    width:20px;
    height:20px;
    border:5px solid #000;
`;

const AreaBotao = styled.View`
    margin-top:15px;
    width:300px;
    flex-direction:row;
    justify-content:space-around;
`;


const Button = styled.Button`
    margin:4px;
`;

const Page = ()=>{
    const [items,setItems] = useState(lista);

const addNewItem = (txt)=>{
    let newItems = [...items];
    newItems.push({
        id:uuid(),
        task:txt,
        done:false
    });
    setItems(newItems);
} 


    return(
        <Container>       
             <Background source={require('../images/Backgrounds/shoplist.jpg')}>
             <AddItemArea onAdd={addNewItem} />
             <ScrollArea>
                <Listagem 
                    data={items}
                    renderItem={({item})=><ListaItem data={item} />}
                    keyExtractor={(item)=>item.id}
                />

             </ScrollArea>               
            </Background>   
        </Container>
    );
}


Page.navigationOptions = () =>{
    return{
        title:'Lista de compras'
    }
}

export default Page;