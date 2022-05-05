import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';



export default function(){
    return(
        <View style={styles.espacamento}>
        <TouchableOpacity>
            <Image source={require('../../assets/home-branco-48.png')}
            style={styles.estiloBotao}/>
            <Text style={styles.estiloLetras}>Inicio</Text>
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
        color:'#fff'
    },
});