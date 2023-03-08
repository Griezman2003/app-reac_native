import { Link } from "@react-navigation/native";
import react from "react";
import {View, Text, Image, ScrollView, TextInput,} from 'react-native';



const loggin = () => {
    return (
    
      <ScrollView style={{flex:1,backgroundColor:'powderblue'}}>
        
        <Text style={{alignItems:"center", textAlign:"center",color:'black',marginbottom:"70px", marginTop:20}}>INICIO DE SESION</Text>
        <View
        style={{textAlign: 'center', backgroundColor:'while'}}>
          <Text style={{marginBottom:30,marginTop:20,color:'black'}}>LOGGIN</Text>
          <Image
            source={{
              uri: 'https://www.nicepng.com/png/detail/207-2073249_open-user-icon-for-login-page.png',
            }}
            style={{width: 200, height: 200,  alignSelf: 'center', borderRadius:25, marginTop:1}}
          />

        </View>
        <TextInput                           
          style={{
            textAlign: 'center',
            height: 40,
            borderRadius: 20,
            borderWidth: 2,
            backgroundColor: 'while',
              borderColor: 'while',
              alignItems: 'center',
              marginLeft: 550,
              marginRight: 550,
              marginTop: 20,
              marginBottom: 1,
              boxshadow:1
          }}
          
          placeholder = "usuario"
          
        />
        <TextInput 
         style={{
          textAlign: 'center',
          height: 40,
          borderRadius: 20,
          borderWidth: 2,
          backgroundColor: 'while',
            borderColor: 'while',
            alignItems: 'while',
            marginLeft: 550,
            marginRight: 550,
            marginTop: 20,
            marginBottom: 1,
            
            
          }}
          placeholder = "contraseña"
          />
        
      </ScrollView>
    );
  };
  
  export default loggin;