import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawer from '../components/CustomDrawer'


import menuInicial from '../screens/menuInicial';
import Perfil from '../screens/Perfil';
import Pedidos from '../screens/Pedidos';
import Mercados from '../screens/Mercados';
import Categorias from '../screens/Categorias';
import MinhaLista from '../screens/MinhaLista';
import MeuCarrinho from '../screens/MeuCarrinho';
import Promocoes from '../screens/Promocoes';
import Favoritos from '../screens/Favoritos';
import CentralAjuda from '../screens/CentralAjuda';
import Logout from '../screens/Logout';


const HomeDrawer = createDrawerNavigator({

Inicio:{
     screen:menuInicial
},
Perfil:{
    screen:Perfil
},
Pedidos:{
    screen:Pedidos
},
Mercados:{
    screen:Mercados
},
Categorias:{
    screen:Categorias
},
MinhaLista:{
    screen:MinhaLista
},
MeuCarrinho:{
    screen:MeuCarrinho
},
Promocoes:{
    screen:Promocoes
},
Favoritos:{
    screen:Favoritos
},
CentralAjuda:{
    screen:CentralAjuda
},
Logout:{
    screen:Logout
}

    
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#4C3E54'},
      title: 'Welcome!',
      headerTintColor: 'white',
    })
});

export default HomeDrawer;

  //contentComponent:(props)=><CustomDrawer {...props} />,