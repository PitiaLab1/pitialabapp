import { NavigationContainer } from '@react-navigation/native';
import { NavigationRoutes } from './common/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { theme } from './common/styles';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={theme.colors.background[3]} style='light'/>
      <NavigationContainer>
        <NavigationRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}