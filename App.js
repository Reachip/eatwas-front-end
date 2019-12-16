import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {mapping, dark as darkTheme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {stackNavigator} from './Navigator';
import {StatusBar} from 'react-native';
import CustomTopNavigation from './navigation/CustomTopNavigation';

const AppContainer = createAppContainer(stackNavigator);

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar hidden={true} />
      <ApplicationProvider mapping={mapping} theme={darkTheme}>
        <CustomTopNavigation />
        <AppContainer />
      </ApplicationProvider>
    </SafeAreaView>
  );
}
