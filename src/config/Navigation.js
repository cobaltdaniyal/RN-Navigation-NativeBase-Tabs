import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from '../screens/TabNavigation'
import TabOne from '../screens/Tabone';
import TabTwo from '../screens/TabTwo';
import TabThree from '../screens/TabThree';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TabNavigation" component={TabNavigation} />
                <Stack.Screen name="TabOne" component={TabOne} />
                <Stack.Screen name="TabTwo" component={TabTwo} />
                <Stack.Screen name="TabThree" component={TabThree} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;