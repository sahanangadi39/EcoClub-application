import { useRouter } from 'expo-router';
import { View } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      {/* Your Home screen content here */}
      <BottomNavBar />
    </View>
  );
}
