'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
var IREView=require("ksana-ire").RTIREView;
console.log(require("ksana-ire"))
var RNFS=require("react-native-fs");
var path=RNFS.MainBundlePath+'/test.json';
var ZuziMain=React.createClass({
	getInitialState:function(){
		return {glyphs:""}
	}
	,render:function(){
		return <View style={{top:22}}>
			<Text>{this.state.glyphs.length}</Text>
			<View style={{width:128}}>
			<IREView ire="颱台華" height={128}/>
			</View>
		</View>
	}
})
module.exports=ZuziMain;