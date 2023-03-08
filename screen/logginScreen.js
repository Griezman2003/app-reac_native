import react from "react";
import {View, Text, Image, ScrollView, TextInput,} from 'react-native';

const loggin = () => {
    return (
      <ScrollView>
        <Text style={{alignItems:"center", textAlign:"center",color:"black"}}>INICIO DE SESION</Text>
        <View
        style={{textAlign: 'center',}}>
          <Text style={{marginBottom:20}}>LOGGIN</Text>
          <Image
            source={{
              uri: 'https://www.nicepng.com/png/detail/207-2073249_open-user-icon-for-login-page.png',
            }}
            style={{width: 200, height: 200,  alignSelf: 'center', borderRadius:25}}
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
              alignItems: 'while',
              marginLeft: 35,
              marginRight: 35,
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
            alignItems: 'center',
            marginLeft: 35,
            marginRight: 35,
            marginTop: 20,
            marginBottom: 1,
            
            
          }}
          placeholder = "usuario"
          />
      </ScrollView>
    );
  };
  
  export default loggin;