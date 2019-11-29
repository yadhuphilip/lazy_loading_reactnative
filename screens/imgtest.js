import React, { Component } from 'react';
import { View,
Text,
StyleSheet,
FlatList,} from 'react-native';


export default class Imgtest extends Component{
    constructor(){
        super();
        this.state = {
            dataitems:[]
        }
    }
    componentDidMount(){
        this.fetch_images()
    }
    fetch_images = async () => {
        let url  = "https://jsonplaceholder.typicode.com/photos?_limit=1";
        fetch(url).then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataitems:this.state.dataitems.concat(responseJson)
            })
        })
    }

    rows =({item,index}) =>{
        if(index%2==0){
            return(
                <View style = {styles.list}>
                <Image source={{uri:item.url}} style ={styles.images}/>
                <Text>{item.id}</Text>
                <Image source={{uri:this.state.dataitems[index+1].url}} style ={styles.images}/>
                <Text>{this.state.dataitems[index+1].id}</Text>
            </View>
            )
        }
    }
    render(){
        return(
            <View style ={styles.wrapper}>
                <FlatList
                    data = {this.state.dataitems}
                    renderItem = {this.rows}
                    keyExtracto= {(item,index) => index.toString()}


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
