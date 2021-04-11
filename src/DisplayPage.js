import React, { Component } from 'react';
import { StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox } from 'react-native';


export default class DisplayPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading : true
    };
  }

  GetItem (fullname) {
 Alert.alert(fullname);
}

FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

GetPeopleInformation = () =>{
    return fetch('https://librational-talker.000webhostapp.com/peopleBase/peopleRecords.php')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      }, function() {
        // In this block you can do something with new state.
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

componentDidMount(){
    this.GetPeopleInformation();
}


  render() {
      
   if (this.state.isLoading) {
    return (
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
    return (
      <View>
      <FlatList
       data={ this.state.dataSource }
       ItemSeparatorComponent = {this.FlatListItemSeparator}
       renderItem={({item}) => 
           <View style={{flex:1, flexDirection: 'row'}}>
             <Image source = {{ uri: item.passport }} style={styles.imageView} />
             <Text onPress={this.GetItem.bind(this, item.fullname)} style={styles.textView} >{item.fullname}</Text>
           </View>
         }
       keyExtractor={(item, index) => index.toString()}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    MainContainer :{
        justifyContent: 'center',
        flex:1,
        margin: 5,
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
    },
    imageView: {
        width: '50%',
        height: 100 ,
        margin: 7,
        borderRadius : 7
    },
    textView: {
        width:'50%', 
        textAlignVertical:'center',
        padding:10,
        color: '#000'
    }
});