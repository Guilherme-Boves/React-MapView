import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles'
import {MotiImage, MotiView} from 'moti'
import fotoMaps from '../../../assets/MapImage.png'; //Ilustração por https://storyset.com/search?q=Maps 

export function ImagemPagInicial() {

    return(        
        
        <View style={styles.container}>
            <MotiImage style={styles.imagemMapa} source={fotoMaps}
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
        </View>
    );
}
