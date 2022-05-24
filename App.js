import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import SystemNavigationBar from 'react-native-system-navigation-bar';
SystemNavigationBar.stickyImmersive();

import HumTheSong from './src/HumTheSong';
import GuessTheSong from './src/GuessTheSong';

const App = () => {
  return (
    <View style={{display: 'flex', flex: 1}}>
      {/* <HumTheSong /> */}
      <GuessTheSong />
    </View>
  );
};


export default App;
