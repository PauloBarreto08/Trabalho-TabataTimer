import { View,Text, Button, StyleSheet } from 'react-native';

export default function Home({navigation}) {
    return(
        <View style = {style.container}>
            <Text>Home</Text>
            <Button title='Navigator back' onPress={() => navigation.navigate("About")}></Button>

        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});