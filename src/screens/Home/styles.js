import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.beige
    },
    containerVoltar: {
      flex: 1,
      backgroundColor: 'gray'
    },
    botao: {
        backgroundColor: theme.colors.red,
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
      textoBotao: {
        color: theme.colors.beige,
        fontSize: 16,
        fontFamily: theme.fonts.primary700
      },
})