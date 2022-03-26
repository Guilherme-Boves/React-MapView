import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',        
        padding: 10,        
    },
    titulo:{
        fontFamily: theme.fonts.primary700,
        color: theme.colors.grey,
        fontSize: 26,
        marginLeft: 10,
        marginTop: 30
    },
    subtitulo: {
        fontFamily: theme.fonts.primary500,
        color: theme.colors.red,
        fontSize: 12,
        lineHeight: 20,
        marginLeft: 10        
    },
})