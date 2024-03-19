
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screen/splashScreen';
import AnimTab1 from './src/navigation/animationTab';
import DetailScreen from './src/screen/detail/detailScreen';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AnimTab1" component={AnimTab1} options={{ headerShown: false }} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
              </Stack.Navigator>

    </NavigationContainer>
  );
}


export default App;
