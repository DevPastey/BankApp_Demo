import { TabIconprops } from '@/types/types';
import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';


const TabIcon = ({focused, title, icon}: TabIconprops) => {
    <View>
        
        <Text className='text-pink-700'> {title} </Text>
    </View>
}

export default function _Layout () {
  return (
    <Tabs
        screenOptions={{
            // tabBarShowLabel: false,
            headerShown: false,
            tabBarItemStyle:{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            },
            tabBarStyle: {
                
            }
        }}
    >
        <Tabs.Screen name='index' options={{ title: "Home", tabBarIcon: ({focused}) => (
            <>
            <TabIcon focused={focused} />
            </>

        )}} />

        <Tabs.Screen name='card' options={{ title: "Home"}} />
        <Tabs.Screen name='scan' options={{ title: "Home"}} />
        <Tabs.Screen name='search' options={{ title: "Home"}} />
        <Tabs.Screen name='more' options={{ title: "Home"}} />




    </Tabs>
  );
}
