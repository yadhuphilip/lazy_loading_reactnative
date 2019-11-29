import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator, createAppContainer } from "react-navigation";


import Login from "./screens/login.js";
import ImageGrid from "./screens/imagegrid.js";
import Imgtest from "./screens/imgtest.js";

//  class App extends Component{
//   render(){
//     return(
//       <Login navigation={this.props.navigation}/>
//     );
//   }
// }
export default class Img extends Component{
  render(){
    return(
      <Imgtest/>
    );
  }
}


// const AppNavigator = createStackNavigator({
//   Home: Img,
//   Images: Img
// },
// {
//   initialRouteName : "Home"
// });

// export default createAppContainer(AppNavigator);