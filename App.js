import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loggin from './screen/logginScreen';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        
          name="Home"
          component={loggin}
          options={{title: 'Iniciar Sesion'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

