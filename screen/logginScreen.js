import React from "react";
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';


const Loggin = () => {
    return (
  
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.bigBlue}> loggin</Text>
          <Text></Text>
          <Image
            source={{
              uri: 'https://sipol.kpu.go.id/img/user.png',
            }}
            style={{width: 200, height: 200, borderRadius: 10}}
          />

        <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            alignItems:"center",
            textAlign: "center",
            borderRadius:5,
            marginTop:10,
          }}
          placeholder="Usuario"
          />
         <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            alignItems: "center",
            textAlign: "center",
            borderRadius:5,
            marginTop:10,
            width:"auto"
          }}
          placeholder="Contraseña"
          />
          <button>
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            alignItems: "center",
            textAlign: "center",
            borderRadius:5,
            marginTop:10,
            width:"auto"
          }}
          </button>
          </View>
      </ScrollView>
      
    );
  };
  const styles = StyleSheet.create({
    container :{
      marginTop: 5,
      alignItems: "center",
      backgroundColor:'#c3e3fd',
      height:'auto'

  },
  bigBlue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  body: {
 alignItems:"center"
}});

  export default Loggin;