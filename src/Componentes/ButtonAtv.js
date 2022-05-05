import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';



export default function(){
    return(
        <View style={styles.estiloBotao}>
        <TouchableOpacity style={styles.estiloLetras}>
            
        </TouchableOpacity>
        </View>

    );
}
const styles = StyleSheet.create({
    estiloBotao:{
        width:200,
        height:100,
        marginLeft:10,
        marginTop:5,
        flexDirection:'row',
    },
    estiloLetras:{
        fontSize:20,
        fontWeight:'bold',
        color:'blue'
    },
});