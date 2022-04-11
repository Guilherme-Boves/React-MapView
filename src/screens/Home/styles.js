import { LinearGradient } from 'expo-linear-gradient';
import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B8D5FA'
    },
    containerVoltar: {
      flex: 1,
      backgroundColor: '#B8D5FA'
    },
    botao: {
        backgroundColor: theme.colors.blue,
        height: 50,
        width: 180,
        borderRadius: 50,
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 30,
      }, 
      botaoVoltar: {
        borderRadius: 30,
        backgroundColor: theme.colors.blue,
        height: 60,
        width: 75,
        margin: 10,
        paddingHorizontal: 25,
        paddingTop:3,
        justifyContent: 'space-around',     
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 30,
      },
      textoBotao: {
        color: theme.colors.beige,
        fontSize: 16,
        fontFamily: theme.fonts.primary700
      },
})