import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Habit } from "~/screens/Habit";
import { Home } from "~/screens/Home";
import { New } from "~/screens/New";

const { Navigator, Screen } = createNativeStackNavigator();

interface AppRoutesProps {}

export const AppRoutes: React.FC<AppRoutesProps> = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="home" component={Home} />
    <Screen name="habit" component={Habit} />
    <Screen name="new" component={New} />
  </Navigator>
);
