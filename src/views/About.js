import { View, Text, StyleSheet } from "react-native"

export default function About ({Navigation}) {
    return(
        <View style = {style.container}>
            <Text>about</Text>
            <Button title='Navigator back' onPress={() => Navigation.navigate("Home")}></Button>
        
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    }
});