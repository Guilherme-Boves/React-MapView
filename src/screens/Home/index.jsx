import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import { ImagemPagInicial } from '../../components/ImagemPagInicial';
import { Mapa } from '../../components/Mapa';
import { Feather } from '@expo/vector-icons';

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
        
            </View>     
        )
    }    
    else {        
        return (
            <View style={styles.containerVoltar}>
                <Mapa/>
                <TouchableOpacity onPress={() => setIniciar(false)}>
                <Feather
                    name="arrow-left"
                    color='#fff'
                    size={32} />
                </TouchableOpacity>
            </View>     
        )
    }
}
