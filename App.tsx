
import { NavigationContainer} from '@react-navigation/native'
import RootNavigator from './src/navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider,  } from '@apollo/client';
import { AuthProvider } from './Auth';

const client = new ApolloClient({
  uri: 'https://ogbomoso.stepzen.net/api/bold-shark/__graphql',
  headers: {'Authorization':'apikey ogbomoso::stepzen.io+1000::8a6c99bfc22c9f911135bda0babf0e7fd9579d26232e775a256081e126adc95c'},
  cache: new InMemoryCache(),
});



export default function App() {

  return (
    <AuthProvider>
 <ApolloProvider client={client}>
    <NavigationContainer>
<RootNavigator/>
      </NavigationContainer>
   </ApolloProvider>
  
    </AuthProvider>
  
      
  
     
   
  );
}

