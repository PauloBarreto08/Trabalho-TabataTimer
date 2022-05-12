import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';



export default function() {
    return (
      <View style={styles.barraInicial}>
        
        <Text style={styles.letras}>Menus</Text>
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    barraInicial:{
        flexDirection:'row',
        
        backgroundColor:'#fff',
        width:'100%',
        height:'5%',
        justifyContent:'flex-start'
    },
    letras:{
        color:'#000000',
        fontSize:40,
        fontWeight:'bold',
    }
  });