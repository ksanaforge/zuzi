'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
var {RTIREView}=require("ksana-ire");

var ZhaoziMain=React.createClass({
	render:function(){
		return <View style={{top:22}}>
			<RTIREView ire="颱台風" height={256}/>
		</View>
	}
})
module.exports=ZhaoziMain;