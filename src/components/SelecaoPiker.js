import React, { Component } from 'react'
import { Text, StyleSheet, View,Picker } from 'react-native'

 class SelecaoPiker extends Component {

    constructor(props){
        super(props);
        this.state ={
            servico:0,
            servicos:[
                {nome:'Sou Cliente',valor:1},
                {nome:'Buyer',valor:2},
                {nome:'Deliver',valor:3},
                {nome:'Safeway',valor:3}

            ]
            
        };
    }


    render() {

        let servicosItems = this.state.servicos.map((v,k) =>{
            return <Picker.Item key={k} value={v} label={v.nome} />
        });


        return (
            <View style={styles.body}>
                <Picker style={styles.select} selectedValue={this.state.servico} onValueChange={(itemValues, itemIndex)=>this.setState({servico:itemValues})}>
                   {servicosItems}
                </Picker>
                 
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        paddingTop:20
    },

    select:{
        width:200,
        height:40,
        borderWidth:1
    }
})


export default SelecaoPiker;