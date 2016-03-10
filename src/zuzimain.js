'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
var IREView=require("ksana-ire").RTIREView;
console.log(require("ksana-ire"))
var RNFS=require("react-native-fs");
var path=RNFS.MainBundlePath+'/test.json';
var StockButton=React.createClass({
	render:function() {
		return <TouchableOpacity style={{padding:5}} onPress={this.props.onPress}>
		<Text>{this.props.text}</Text></TouchableOpacity>
	}
})
var ZuziMain=React.createClass({
	getInitialState:function(){
		return {glyphs:"",exp:"邏羅寶貝𩀨從䞃致招"}
	}
	,setExp:function(exp) {
		console.log(exp,arguments)
		this.setState({exp});
	}
	,render:function(){
		return <View style={{top:22}}>
			<TextInput style={styles.input}
				value={this.state.exp}
				onChangeText={(exp) => this.setState({exp})}/>
			<View style={{flexDirection:'row'}}>
				<StockButton
					onPress={this.setExp.bind(this,"颱台華")}
					text="颱台華"/>
				<StockButton
					onPress={this.setExp.bind(this,"颱台")}
					text="颱台"/>
				<StockButton
					onPress={this.setExp.bind(this,"颱")}
					text="颱"/>
				<StockButton
					onPress={this.setExp.bind(this,"台")}
					text="台"/>
				<StockButton
					onPress={this.setExp.bind(this,"華")}
					text="華"/>
			</View>
			<View style={{flexDirection:'row'}}>
				<StockButton
					onPress={this.setExp.bind(this,"邏")}
					text="邏"/>
				<StockButton
					onPress={this.setExp.bind(this,"羅")}
					text="羅"/>
				<StockButton
					onPress={this.setExp.bind(this,"寶")}
					text="寶"/>
				<StockButton
					onPress={this.setExp.bind(this,"貝")}
					text="貝"/>
				<StockButton
					onPress={this.setExp.bind(this,"𩀨")}
					text="𩀨"/>
			</View>
			<View style={{flexDirection:'row'}}>
				<StockButton
					onPress={this.setExp.bind(this,"䞃致招")}
					text="䞃致招"/>
				<StockButton
					onPress={this.setExp.bind(this,"𩀨從䞃致招")}
					text="𩀨從䞃致招"/>
				<StockButton
					onPress={this.setExp.bind(this,"寶貝𩀨從䞃致招")}
					text="寶貝𩀨從䞃致招"/>
			</View>
			<View style={{flexDirection:'row'}}>
				<StockButton
					onPress={this.setExp.bind(this,"邏羅寶貝𩀨從䞃致招")}
					text="邏羅寶貝𩀨從䞃致招"/>
			</View>
			<View style={{width:128}}>
				<IREView ire={this.state.exp} height={128}/>
			</View>
		</View>
	}
})
var styles={
	input:{fontSize:30,height:40}
}
module.exports=ZuziMain;