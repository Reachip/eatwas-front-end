import React from 'react';
import { ApplicationProvider, IconRegistry, Icon, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from "@ui-kitten/eva-icons"
import {stackNavigator} from './Navigator';
import {createAppContainer} from 'react-navigation'

const AppContainer = createAppContainer(stackNavigator);

export default function App() {
  return ( 
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <IconRegistry icons={EvaIconsPack} />
      <AppContainer></AppContainer>
    </ApplicationProvider>
  );
}

