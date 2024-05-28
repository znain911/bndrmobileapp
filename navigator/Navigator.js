import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createDrawerNavigator } from "react-navigation-drawer";

import GuideBookLogIN from '../screens/login/guidebook';
import PassChange from '../screens/login/passwordChange';
import Login from '../screens/login/login';
import VisitScreen from '../screens/reports/VisitScreen';
import V2 from '../screens/reports/v2';
import V1 from '../screens/reports/v1';
import V3 from '../screens/reports/v3';
import V4 from '../screens/reports/v4';
import V5 from '../screens/reports/v5';
import V6 from '../screens/reports/v6';
import V7 from '../screens/reports/v7';
import V8 from '../screens/reports/v8';
import V9 from '../screens/reports/v9';
import V10 from '../screens/reports/v10';
import V11 from '../screens/reports/v11';
import Menu from '../screens/reports/menu';
import TMNT from '../screens/treatment/treatment';
import T11 from '../screens/treatment/t11';
import T10 from '../screens/treatment/t10';
import T9 from '../screens/treatment/t9';
import T8 from '../screens/treatment/t8';
import T7 from '../screens/treatment/t7';
import T6 from '../screens/treatment/t6';
import T5 from '../screens/treatment/t5';
import T4 from '../screens/treatment/t4';
import T3 from '../screens/treatment/t3';
import T2 from '../screens/treatment/t2';
import T1 from '../screens/treatment/t1';
import Profile from '../screens/profile/profile';
import EditPass from '../screens/profile/editPass';
import Graph from '../screens/profile/graph';
import PRESIMAGE from '../screens/image/prescription';

const Stack = createNativeStackNavigator();
export function AppNavigation(){
    return (
        <Stack.Navigator initialRouteName="GuideBook"  screenOptions={{headerShown: false}}>
        <Stack.Screen name="GuideBook" component={GuideBookLogIN} />
        <Stack.Screen name="PassChange" component={PassChange} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Visit" component={VisitScreen} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="V1" component={V1} />
        <Stack.Screen name="V2" component={V2} />
        <Stack.Screen name="V3" component={V3} />
        <Stack.Screen name="V4" component={V4} />
        <Stack.Screen name="V5" component={V5} />
        <Stack.Screen name="V6" component={V6} />
        <Stack.Screen name="V7" component={V7} />
        <Stack.Screen name="V8" component={V8} />
        <Stack.Screen name="V9" component={V9} />
        <Stack.Screen name="V10" component={V10} />
        <Stack.Screen name="V11" component={V11} />
        <Stack.Screen name="TMNT" component={TMNT} />
        <Stack.Screen name="T1" component={T1} />
        <Stack.Screen name="T2" component={T2} />
        <Stack.Screen name="T3" component={T3} />
        <Stack.Screen name="T4" component={T4} />
        <Stack.Screen name="T5" component={T5} />
        <Stack.Screen name="T6" component={T6} />
        <Stack.Screen name="T7" component={T7} />
        <Stack.Screen name="T8" component={T8} />
        <Stack.Screen name="T9" component={T9} />
        <Stack.Screen name="T10" component={T10} />
        <Stack.Screen name="T11" component={T11} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditPass" component={EditPass} />
        <Stack.Screen name="PRESIMAGE" component={PRESIMAGE} />
        <Stack.Screen name="Graph" component={Graph} />
      </Stack.Navigator>
    )
   }