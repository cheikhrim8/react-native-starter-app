import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from "react-native-paper";
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import {NavigationContainer} from "@react-navigation/native";

const queryClient = new QueryClient()

import {createStackNavigator} from '@react-navigation/stack';
import {Posts} from './src/Screens/Posts';
import {Post} from './src/Screens/Post';

const MainStack = createStackNavigator();

export default function App() {
    return (
        <React.Fragment>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <QueryClientProvider client={queryClient}>
                    <MainStack.Navigator>
                        <MainStack.Screen name="Home" component={Posts}/>
                        <MainStack.Screen name="Post" component={Post}/>
                    </MainStack.Navigator>
                </QueryClientProvider>
            </NavigationContainer>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
