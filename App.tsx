/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DashboardScreen from './screens/Dashboard';
import InvoiceScreen from './screens/Invoice';
import {RootDrawerParamList} from './types';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Invoice" component={InvoiceScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
