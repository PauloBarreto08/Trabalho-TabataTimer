import { StyleSheet, Text, View } from 'react-native';
import {TouchableOpacity } from 'react-native';

export default function(){
    return(
        <View style={styles.estiloBotao}>
            <TouchableOpacity>
                <Text style={styles.estiloLetras}>Começar</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    estiloBotao: {
      backgroundColor: '#FFFF',
      width:'100%',
      height:'5%',
      flexDirection:'row',
      flex:1,
        
    },
    estiloLetras:{
        fontSize:30,
        fontWeight:'bold'
    }
  });