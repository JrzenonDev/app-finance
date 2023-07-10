import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './pages/Home'
import Money from './pages/Money'
import Store from './pages/Store'

const Tab = createBottomTabNavigator();

export function Routes() {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Money' component={Money} />
      <Tab.Screen name='Store' component={Store} />
    </Tab.Navigator>
  )
}