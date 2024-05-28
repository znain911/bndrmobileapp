import * as React from 'react';
import { Linking, Platform, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppNavigation } from './navigator/Navigator';






const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';
 
export default function App() {
  const [isReady, setIsReady] =  React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    
    const restoreState = async () => {
      
      try {
        const initialUrl = await Linking.getInitialURL();
        
        if (Platform.OS !== 'web' && initialUrl !== null) {
        //if ( initialUrl == 'undefined') {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;
         
          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
   
  return (
    <NavigationContainer 
    initialState={initialState}
    onStateChange={(state) =>
      //console.log(state)
      AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
    }>
       {/* <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="GuideBook" component={GuideBookLogIN} />
        <Stack.Screen name="PassChange" component={PassChange} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Visit" component={VisitScreen} />
      </Stack.Navigator>  */}
      <AppNavigation />
    </NavigationContainer>
  );
}




