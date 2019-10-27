import React, { Component } from 'react'
import styled from 'styled-components/native';

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

export default (props) => {    
        return (
            <ItemList onPress={()=>{}}>
                <>
                    <ItemText>{props.data.task}</ItemText>
                    <ItemCheck></ItemCheck>
                </>   
                </ItemList>

        );
    
}


