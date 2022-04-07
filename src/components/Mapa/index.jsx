import {View, Text, SafeAreaView} from 'react-native';
import {styles} from './styles'
import React, {useState, useEffect, useRef} from 'react';
import config from '../../../config'
import MapView, {Marker} from "react-native-maps"
import * as Location from 'expo-location'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

export function Mapa() {

    const mapEl=useRef(null)
    const [temPermissao, setTemPermissao] = useState(null)
    const [origem, setOrigem]=useState(null)
    const [destino, setDestino]=useState(null)

    useEffect(()=> {
        (async() => {
          const {status} = await Location.
                            requestForegroundPermissionsAsync()
          setTemPermissao(status === 'granted')     
          let localizacao = await Location.getCurrentPositionAsync()    
          setOrigem({
            latitude: localizacao.coords.latitude,
            longitude: localizacao.coords.longitude, 
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          })
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
       
        <View style={styles.container}>
            <MapView style={styles.mapa}            
                initialRegion={origem}
                    showsUserLocation={true}
                    loadingEnabled={true}
                    ref={mapEl}                    
                >
                    {destino && 
                        <MapViewDirections
                            origin={origem}
                            destination={destino}
                            apikey={config.googleApi}
                            strokeWidth={3}
                            onReady={result=>{
                                    mapEl.current.fitToCoordinates(
                                        result.coordinates,{
                                            edgePadding:{
                                                top:50,
                                                bottom:50,
                                                left:50,
                                                right:50
                                            }
                                        }
                                    )
                                }
                            }
                        />
                    }
            </MapView>

            <View style={styles.pesquisa}>
                <GooglePlacesAutocomplete
                    placeholder='Para onde Vamos?'
                    onPress={(data, details = null) => {
                        setDestino({
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng, 
                            latitudeDelta: 0.00922,
                            longitudeDelta: 0.00421
                        });                        
                    }}
                    query={{
                        key: config.googleApi, //Chave da API
                        language: 'pt-br',
                    }}
                    fetchDetails={true}
                    styles={{listView:{height:100}}}
                />   
            </View>
        </View>    
       
    )
}

