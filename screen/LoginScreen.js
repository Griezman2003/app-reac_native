import React from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {

    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Iniciar sesión</Text>
        <Image
            source={{
              uri: 'https://www.nicepng.com/png/detail/207-2073249_open-user-icon-for-login-page.png',
            }}
            style={styles.img}
          />
      </View>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Iniciar sesión con Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Iniciar sesión con Google</Text>
        </TouchableOpacity>
        </View>
        
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'gray',
    
  },
  header: {
    position: 'absolute',
    top: 50,
  },
  headerText: {
    textAlign:'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:10
  },
  optionsContainer: {
    marginTop: 200,
    alignItems: 'center',
    
  },
  option: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor:'blue',
    width: 250,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
  },

  loginButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  img:{
    width: 200, height: 200,  
    alignSelf: 'center', borderRadius:25, 
    marginTop:1, 
    marginBottom:200,
    borderRadius:10
  },
});

export default LoginScreen;