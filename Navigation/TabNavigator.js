import {React} from 'react';
import { createDrawerNavigator} from "@react-navigation/drawer";
import {createTabNavigator} from "@react-navigation/tab";
import {Profile} from "../screens/Profile";
import {createMaterialBottomTabNavigator} from "@react-navigation/tab"

const Drawer = createDrawerNavigator;

const DrawerNavigator = () =>{
    <DrawerNavigator>
        <Drawer.screen name="Home" component={TabNavigator}/>
        <Drawer.screen name="Profile" component={Profile}/>
    </DrawerNavigator>
}