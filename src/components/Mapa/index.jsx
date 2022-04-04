import {View, Text, SafeAreaView} from 'react-native';
import {styles} from './styles'
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import React, {useState, useEffect, useRef} from 'react';



export function Mapa() {

    const [temPermissao, setTemPermissao] = useState(null)
    //const [localizacao, setLocalizacao] = useState(null)
    const [mensagemErro, setMensagemErro] = useState(null)
    const [origem, setOrigem]=useState(null)
    const [destino, setDestino]=useState(null)

    useEffect(()=> {
        (async() => {
          const {status} = await Location.
                            requestForegroundPermissionsAsync()
          setTemPermissao(status === 'granted')     
          let localizacao = await Location.getCurrentPositionAsync()    
          console.log(localizacao)         
        })();
    },[])

    
    if(temPermissao === false){
        return(
            <SafeAreaView style={styles.container}>
                <Text>Permissão negada {`${temPermissao}`}</Text>
            </SafeAreaView>
        )
    }

    return (
       
        <SafeAreaView style={styles.container}>
            <MapView style={styles.mapa}            
                initialRegion={{
                latitude: -23.290255027795762,
                longitude: -47.29613863072915, 
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
                    }}
                    
                >
            </MapView>

            <View style={styles.pesquisa}>
                    
            </View>
        </SafeAreaView>    
       
    )
}
