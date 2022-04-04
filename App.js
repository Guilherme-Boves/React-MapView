
import {useFonts, Roboto_700Bold, Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'
import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_700Bold, Roboto_400Regular, Roboto_500Medium})

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (  
    <Home/>
  )
}

