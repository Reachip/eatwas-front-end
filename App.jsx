import React from 'react';
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from "@ui-kitten/eva-icons"
import {createAppContainer} from 'react-navigation'
import {stackNavigator} from './Navigator';

const AppContainer = createAppContainer(stackNavigator);

export default function App() {
  return ( 
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <IconRegistry icons={EvaIconsPack} />
      <AppContainer />
    </ApplicationProvider>
  );
}

