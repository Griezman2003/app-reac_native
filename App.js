import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import{createDrawerNavigator} from '@react-navigation/drawer';
import Loggin from './screen/logginScreen';
import HomeScreen from "./screen/HomeScreen";



const Drawer = createDrawerNavigator();

export function DrawerNavigation() {

    return (
      <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name = "Inicio" component= {HomeScreen}/>
        </Drawer.Navigator>
        </NavigationContainer>
    )
};




const Stack = createNativeStackNavigator();
const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={Loggin}
          options={{title: 'Iniciar sesion'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;