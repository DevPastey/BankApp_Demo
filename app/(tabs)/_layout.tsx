import { TabIconprops } from '@/types/iconsProps';
import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import {icons} from "@/constants/icons";
import Home from "@/constants/home.svg";


const TabIcon: React.FC<TabIconprops> = ({focused, icon: Icon, title}) => {
    return (
        <View className='justify-center items-center w-full mt-7'>
            {focused? (

            <>
                <View className='bg-gray-400 size-10 absolute rounded-full justify-center items-center'>
                    <Icon width={20} height={20} color={"#fff"} className='z-10 relative scale-130'/>
                </View>
                
            </>
            ): (
                <View className='justify-center items-center w-[60px]'>
                    <Icon width={20} height={20} color="#000"/>
                    <Text className='text-xs'> {title} </Text>
                </View>
            )}
        </View>
    )
    
}

export default function _Layout () {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarItemStyle:{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            },
            tabBarStyle: {
                position: "absolute",
                overflow: "hidden",
                borderWidth: 1,
                height: 68,
                borderTopWidth: 0
               
            }
        }}
    >
        <Tabs.Screen name='index' options={{ title: "Home", tabBarIcon: ({focused}) => (
            <View >
            <TabIcon focused={focused} icon={Home} title='Home' />
            </View>

        )}} />

        <Tabs.Screen name='card' options={{ title: "Card", tabBarIcon: ({focused}) => (
            <View>
            <TabIcon focused={focused} icon={icons.Card} title='Cards' />
            </View>

        )}} />
        <Tabs.Screen name='scan' options={{ title: "Scan", tabBarIcon: ({focused}) => (
            <View >
            <TabIcon focused={focused} icon={icons.Reshot} title='Scan' />
            </View>

        )}} />
        <Tabs.Screen name='search' options={{ title: "History", tabBarIcon: ({focused}) => (
            <View >
            <TabIcon focused={focused} icon={icons.Transaction} title='History' />
            </View>

        )}} />
        <Tabs.Screen name='more' options={{ title: "More", tabBarIcon: ({focused}) => (
            <View >
            <TabIcon focused={focused} icon={icons.More} title='More' />
            </View>

        )}} />




    </Tabs>
  );
}
