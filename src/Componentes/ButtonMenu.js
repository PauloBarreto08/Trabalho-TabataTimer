import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

export default function(){
    return(
        <View style={styles.espacamento}>
            <TouchableOpacity>
            <Image source={require('../../assets/menu.png')}
            style={styles.estiloBotao}/>
            <Text style={styles.estiloLetras}>Menu</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    estiloBotao:{
        width:"100%",
        height:5,
        marginTop:5,
        flexDirection:'row',
    },
    estiloLetras:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    },
});