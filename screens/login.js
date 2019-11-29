import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity,Alert } from 'react-native';
import {createStackNavigator, createAppContainer } from "react-navigation";


export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            uname:"",
            password:""
        }
        this.loginfn = this.loginfn.bind(this);

    }

    loginfn(){
        if (this.state.uname == "" || this.state.password == ""){
            Alert.alert("please provide all the login  credentials")
        }
        else{
            this.props.navigation.navigate('Images')
        }
    }

    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.login}>
                    <TextInput 
                        style={styles.txtfield}
                        placeholder = "Username"
                        value = {this.state.uname}
                        placeholderTextColor = "#aaa"
                        onChangeText = {(uname) =>{this.setState({uname})}}
                        underlineColorAndroid = "transparent"
                        
                    />
                    <TextInput 
                        style={styles.txtfield}
                        placeholder = "Password"
                        value = {this.state.password}
                        placeholderTextColor = "#aaa"
                        secureTextEntry ={true}
                        underlineColorAndroid = "transparent"
                        onChangeText = {(password) =>{this.setState({password})}}
                    />
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Images')}>
                        <View style ={styles.loginbtn}>
                            <Text style ={styles.btntxt}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#2f4159",
    },
    login:{
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#ddd",
        padding:50,
       
    },
    txtfield:{
        borderBottomWidth:1,
        borderBottomColor:"white",
        color:"white",
        fontSize:25,
        borderColor:"#222",
        marginBottom:20,
        width:250,

    },
    loginbtn:{
        marginTop:10,
        backgroundColor:"#22dd89",
        width:200,
        borderRadius:20,
    },
    btntxt:{
        color:"black",
        fontSize:24,
        letterSpacing:1.4,
        fontWeight:"300",
        marginLeft: 20,
        marginRight:20,
        textAlign:"center",
    },
})