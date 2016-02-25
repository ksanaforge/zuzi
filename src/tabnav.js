'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
var findicon=require("../images/find.png");

var ZuziMain=require("./zuzimain");
var ZhaoziMain=require("./zhaozimain");
var windowW=Dimensions.get("window").width;

var TabNav=React.createClass({
getInitialState:function(){
  return {selectedTab:"zuzi"}
}
,render:function(){
  return <View style={{flex:1}}>
  <TabNavigator style={styles.tabbar}>
    <TabNavigator.Item
      selected={this.state.selectedTab === 'zuzi'}
      title="組字"
      renderIcon={() => <Image source={findicon} style={styles.tabbutton}/>}
      badgeText="1"
      onPress={() => this.setState({ selectedTab: 'zuzi' })}>
      <ZuziMain/>
    </TabNavigator.Item>
    <TabNavigator.Item
      selected={this.state.selectedTab === 'zhaozi'}
      title="找字"
      renderIcon={() => <Image source={findicon} style={styles.tabbutton} />}
      onPress={() => this.setState({ selectedTab: 'zhaozi' })}>
      <ZhaoziMain/>
    </TabNavigator.Item>
  </TabNavigator>
  </View>
  }
});

var styles={
  tabbar:{flex:1,width:windowW},
  tabbutton :{width:22,height:22}
}

module.exports=TabNav;