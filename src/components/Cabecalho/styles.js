import {StyleSheet} from 'react-native';
import{ theme } from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingTop: 25,
        padding: 15,
    },
    titulo:{
        fontFamily: theme.fonts.primary700,
        color: '#3B5573',
        fontSize: 30,
        padding: 2
    },
    subtitulo: {
        fontFamily: theme.fonts.primary500,
        color: '#5F87B9',
        fontSize:22,
        alignSelf: 'flex-end',
        marginRight: 14
    }
})