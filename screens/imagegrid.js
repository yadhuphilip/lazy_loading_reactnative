import React, { Component } from 'react';
import {View, StyleSheet, ActivityIndicator,Text, Image, FlatList} from 'react-native';
import {createStackNavigator, createAppContainer } from "react-navigation";


export default class ImageGrid extends Component{
    constructor(){
        super();
        this.state = {
            dataitems:[],
            pageno:1,
            needloader:false
        }
    }

    componentDidMount(){ 
        this.setState({
            needloader:true
        })
        this.fetch_images()
    }

    fetch_images = async () => {
        let url  = "https://jsonplaceholder.typicode.com/photos?_limit=10&_page="+this.state.pageno;
        fetch(url).then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataitems:this.state.dataitems.concat(responseJson),
                needloader:false
            })
        })
    }

    rows = ({item,index}) => {
        if(index %2==0){
            return (
            <View style = {styles.list}>
                <Image source={{uri:item.url}} style ={styles.images}/>
                <Text>{item.id}</Text>
                <Image source={{uri:this.state.dataitems[index+1].url}} style ={styles.images}/>
                <Text>{this.state.dataitems[index+1].id}</Text>
            </View>
        )
    }
    }

    nextpage = ()=>{
        this.setState({
            pageno:this.state.pageno + 1
        },
        this.fetch_images
        )
    }

    loader = () =>{
        return (
            <View>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        )
    }


    render(){
        return(
            <View style ={styles.wrapper}>
                <Text>hekks</Text>
                <FlatList
                    data = {this.state.dataitems}
                    renderItem = {this.rows}
                    keyExtractor = {(item,index) => index.toString()}
                    onEndReached = {this.nextpage}
                    onEndReachedThreshold = {0}
                    ListFooterComponent ={this.loader}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:"white",
    },
    list:{
        flexDirection:"row",
    },
    images:{
        position: "relative",
        width:"45%",
        height:200,
        margin:3,
    },

})
