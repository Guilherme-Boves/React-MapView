import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import { ImagemPagInicial } from '../../components/ImagemPagInicial';
import { Mapa } from '../../components/Mapa';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../styles/theme';

export function Home(){
    
    const [iniciar, setIniciar] = useState( false );

    if (!iniciar) {
        return(
            <View style={styles.container}>
                <Cabecalho/>
                <ImagemPagInicial/>
            
                <TouchableOpacity style={styles.botao} onPress={() => setIniciar(true)} >
                    <Text style={styles.textoBotao}>Começar</Text>
                </TouchableOpacity>
        
                <Rodape/>      
            </View>     
        )
    }    
    else {        
        return (
            <View style={styles.container}>
                <Cabecalho/>
                <Mapa/>
            
                <TouchableOpacity style={styles.botao} onPress={() => setIniciar(false)}>
                    <Text style={styles.textoBotao}>Voltar</Text>
                </TouchableOpacity>
            
                <Rodape/>      
            </View>     
        )
    }
}
