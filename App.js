import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <SafeAreaView>
      <text>Estácio</text>
      <Image source={header} style={style.header} ></Image>
      <text>Xbox Series x</text>
      <Image source={sony} style={style.header}></Image>
      <Image source={uri:https://saude.abril.com.br/wp-content/uploads/2020/05/treino-em-casa.png?w=680}
      <text>sony</text>
      <text>Lorem ipsum dolor sit amet conseqt adiscipli elit</text>
      <text>R$ 4.0000,00</text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  detailsView: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: 390,
    height: 300,
  }
});
