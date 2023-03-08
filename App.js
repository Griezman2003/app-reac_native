import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import loggin from './screen/logginScreen';
import Home from './screen/logginScreen';




const Drawer = createDrawerNavigator();

export function DrawerNavigation() {

    return (

        <Drawer.Navigator>
        <Drawer.Screen name = "Inicio" component= {Home}/>
        </Drawer.Navigator>
    )
};


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        
          name="Home"
          component={loggin}
          options ={{title: 'Iniciar Sesion'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;

