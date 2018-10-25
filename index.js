/** @format */

import { AppRegistry } from 'react-native';
import './app/DemonComponent/Global';
import App from './app/navigator/router';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);