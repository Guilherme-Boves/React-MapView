import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles'
import {MotiImage} from 'moti'
import fotoMaps from '../../../assets/MapImage.png'; //Ilustração por https://storyset.com/search?q=Maps 

export function ImagemPagInicial() {

    return(
        
        <MotiImage style={styles.map} source={fotoMaps}
            resizeMode="contain"
            from={{
            opacity: 0.8,
            translateX: 400
            }}

            animate={{
            opacity: 1,
            translateX: 4
            }}
            
            transition={{
            type: 'spring',
            }}
        />
    );
}
