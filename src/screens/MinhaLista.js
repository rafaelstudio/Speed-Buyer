import React, {useState} from 'react';
import {StyleSheet } from 'react-native'
import styled from 'styled-components/native';
import lista from '../../src/lista';
import ListaItem from '../components/ListaItem';
import AddItemArea from '../components/AddItemArea';
import uuid from 'uuid/v4';
import {SwipeListView} from 'react-native-swipe-list-view';
import ListaItemSwipe from '../components/ListaItemSwipe';

const Container = styled.SafeAreaView`
    flex:1;
`;

const Background = styled.ImageBackground`
    width:100%;
    height:100%;
`;

const ScrollArea = styled.KeyboardAvoidingView `    
    align-items:center;
    margin:auto;
    background-color:#fdfdfd;

`;

const Image = styled.Image`

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

const toggleDone = (index) =>{
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
}


const deleteItem = (index) =>{
    let newItems = [...items];
    newItems = newItems.filter((it,i)=>i!=index);
    setItems(newItems);
}


    return(
        <Container>       
             <Background source={require('../images/Backgrounds/shoplist.jpg')}>
             <AddItemArea onAdd={addNewItem} />
             <ScrollArea behavior="height">
                <SwipeListView  style={styles.Listagem}
                    data={items}
                    renderItem={({item,index})=><ListaItem onPress={()=>toggleDone(index)} data={item} />}
                    renderHiddenItem={({item,index})=><ListaItemSwipe onDelete={()=>deleteItem(index)} />}
                    leftOpenValue={50}
                    disableLeftSwipe={true}

                    keyExtractor={(item)=>item.id}
                />

             </ScrollArea>               
            </Background>   
        </Container>
    );
}

const styles = StyleSheet.create({
    Listagem:{       
        width:300,
        height:400,
        marginLeft:5,
        marginRight:5

    }
})


Page.navigationOptions = () =>{
    return{
        title:'Lista de compras',
        drawerIcon: () => (
            <Image
              source={require('../images/icons/lista.png')}
              style={{width: 30, height: 30, borderRadius: 15}}
            />)
    }
}

export default Page;