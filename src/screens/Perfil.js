
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import axios from 'axios'

export default class Perfil extends Component {
   
    constructor()
    {
        super()

        this.state = {
            storesList:[]
        }
    }
    componentDidMount()
    {
        axios.get('http://10.0.3.2:9000/lojas/get_stores')
        .then(res=>this.setState({storesList:res.data.result}))
        .catch(err=>alert('error'))
    }

    render() {
        return (
            <View>
                {this.state.storesList.map(res=>(<Text>{res.en_cep}</Text>))}
            </View>
        )
    }
}





