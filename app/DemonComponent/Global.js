import React, {
	Component
} from 'react';
import {
	Dimensions,
	StyleSheet,
	AsyncStorage,
	PixelRatio,
	Platform,
	Alert,
	Image,
	Text,
	View,
	Modal,
	TouchableOpacity,
	TouchableHighlight,
	TextInput,
	ScrollView,
	ListView,
	WebView
} from 'react-native';
// 统一管理项目中的路由
// import {
// 	Actions
// } from "react-native-router-flux";

// 处理安卓，iOS字体不同的类，使用方法 fontSize:FONT_SIZE(20)
import FontSize from './FontSize';
// 处理安卓，iOS宽高的区别，使用方法 width:px2dp(20)
import {
	px2dp
} from './Tool';

// import BaseStyle from './BaseStyle';

import BaseComponent from './baseComponent';

// import NavBar from './navigationBar.js';



// 系统是iOS
global.iOS = (Platform.OS === 'ios');
// 系统是安卓
global.Android = (Platform.OS === 'android');
// 获取屏幕宽度
global.SCREEN_WIDTH = Dimensions.get('window').width;
// 获取屏幕高度
global.SCREEN_HEIGHT = Dimensions.get('window').height;
// 获取屏幕分辨率
global.PixelRatio = PixelRatio.get();
// // 最小线宽
global.pixel = 1 / PixelRatio;
// 适配字体
global.FONT_SIZE = FontSize;
// 屏幕适配
global.px2dp = px2dp;
// 图片加载
global.Image = Image;
// 弹出框
global.Alert = Alert;
// 存储
global.AsyncStorage = AsyncStorage;

global.Text = Text;
global.View = View;
global.TouchableOpacity = TouchableOpacity;
global.TextInput = TextInput;
global.ScrollView = ScrollView;
global.ListView = ListView;
global.WebView = WebView;
global.StyleSheet = StyleSheet;
global.TouchableHighlight=TouchableHighlight;
global.Modal = Modal;

//app色调
global.APP_THEAM = '#06b0b9';
//BaseComponent
global.BaseComponent = BaseComponent;
//BaseStyle
// global.BaseStyle = BaseStyle;
//NavBar
// global.NavBar = NavBar;










//