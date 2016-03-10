/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import  React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
var TabNav=require("./src/tabnav");
var E=React.createElement;
var  zuzi =React.createClass({
  getInitialState:function(){
    return {ready:false}
  }
  ,componentDidMount:function(){
    require("ksana-ire").setOnReady(function(){
      this.setState({ready:true});
    }.bind(this));
  }
  ,render:function() {

    return (
      <View style={styles.container}>
       {this.state.ready?E(TabNav):E(Text,{style:styles.loading},"Loading")}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('zuzi', () => zuzi);
