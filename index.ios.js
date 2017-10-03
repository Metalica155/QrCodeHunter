import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Container } from 'native-base';
import App from './src/App';

const QrCodeHunter = () => (
  <Container>
    <App />
  </Container>
);

AppRegistry.registerComponent('QrCodeHunter', () => QrCodeHunter);

export default QrCodeHunter;
