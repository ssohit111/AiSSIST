import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from '../screens/HomeScreen'
import ReportScreen from '../screens/ReportScreen'
import SettingScreen from '../screens/SettingScreen'
import StartScreen from '../screens/StartScreen'

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarOptions: {
                activeTintColor: "#006600",
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="md-home"
                        size={24}
                        color={tabInfo.focused ? "#006600" : "#8e8e93"}
                    />
                );
            },
        },
    },
    StartScreen: {
        screen: StartScreen,
        navigationOptions: {
            tabBarLabel: "Start",
            tabBarOptions: {
                activeTintColor: "#006600",
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="chevron-forward-circle-outline"
                        size={24}
                        color={tabInfo.focused ? "#006600" : "#8e8e93"}
                    />
                );
            },
        },
    },
    Report: {
        screen: ReportScreen,
        navigationOptions: {
            tabBarLabel: "Report",
            tabBarOptions: {
                activeTintColor: "#006600",
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="stats-chart-outline"
                        size={24}
                        color={tabInfo.focused ? "#006600" : "#8e8e93"}
                    />
                );
            },
        },
    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            tabBarLabel: "Settings",
            tabBarOptions: {
                activeTintColor: "#006600",
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="md-settings-outline"
                        size={24}
                        color={tabInfo.focused ? "#006600" : "#8e8e93"}
                    />
                );
            },
        },
    },
});

const TabNavigatorDark = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarOptions: {
                activeTintColor: "#006600",
                style: {
                    backgroundColor: '#242c40'
                }
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="md-home"
                        size={24}
                        color={tabInfo.focused ? "#006600" : "#8e8e93"}
                    />
                );
            },
        },
    },
    StartScreen: {
        screen: StartScreen,
        navigationOptions: {
            tabBarLabel: "Start",
            tabBarOptions: {
                activeTintColor: "#006600",
                style: {
                    backgroundColor: '#242c40'
                }
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="chevron-forward-circle-outline"
                        size={24}
                        color={tabInfo.focused ? "#006600" : "#8e8e93"}
                    />
                );
            },
        },
    },
    Report: {
        screen: ReportScreen,
        navigationOptions: {
            tabBarLabel: "Report",
            tabBarOptions: {
                activeTintColor: "#006600",
                style: {
                    backgroundColor: '#242c40'
                }
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="stats-chart-outline"
                        size={24}
                        color={tabInfo.focused ? "#006600" : "#8e8e93"}
                    />
                );
            },
        },
    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            tabBarLabel: "Settings",
            tabBarOptions: {
                activeTintColor: "#006600",
                style: {
                    backgroundColor: '#242c40'
                }
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="md-settings-outline"
                        size={24}
                        color={tabInfo.focused ? "#006600" : "#8e8e93"}
                    />
                );
            },
        },
    },
});

export const Navigator = createAppContainer(TabNavigator);
export const NavigatorDark = createAppContainer(TabNavigatorDark);