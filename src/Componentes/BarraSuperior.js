import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

import ButtonHome from './ButtonHome';
import ButtonMenu from './ButtonMenu';
import ButtonConfig from './ButtonConfig';

export default function App() {
    return (
        <View style={styles.barraSuperior}>
        <ButtonHome/>
        <ButtonConfig/>
        <ButtonMenu/>
    </View>
    );
  }

  const styles = StyleSheet.create({
    barraInferior:{
        flexDirection:'row',
        backgroundColor:'#1C1C1C',
        width:'100%',
        height:'5%',
        flex:1,
    }
});