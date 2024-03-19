import {
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { CartScreen } from '../screen/cart/cartScreen';
import { ProfileScreen } from '../screen/profile/profileScreen';
import { BackIcon, CartBlank, Home, Profile } from '../asset/icon/svg';
import HomeScreen from '../screen/home/homeScreen';

const TabArr = [
    {
        route: 'HomeScreen',
        label: 'Library',
        icon: Home,
        component: HomeScreen,
    },
    {
        route: 'CartScreen',
        label: 'Cart',
        icon: CartBlank,
        component: CartScreen,
    },
    {
        route: 'ProfileScreen',
        label: 'Profile',
        icon: Profile,
        component: ProfileScreen,
    },
];

const Tab = createBottomTabNavigator();
const animate1 = {
    0: { scale: 0.5, translateY: 7 },
    0.92: { translateY: -5 },
    1: { scale: 1.2, translateY: -15 },
};
const animate2 = {
    0: { scale: 1.2, translateY: -10 },
    1: { scale: 1, translateY: -3 },
};

const circle1 = {
    0: { scale: 0 },
    0.3: { scale: 0.9 },
    0.5: { scale: 0.2 },
    0.8: { scale: 0.7 },
    1: { scale: 1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = props => {
    const { item, onPress, accessibilityState, index } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate(animate1);
            circleRef.current.animate(circle1);
            textRef.current.transitionTo({ scale: 1 });
        } else {
            viewRef.current.animate(animate2);
            circleRef.current.animate(circle2);
            textRef.current.transitionTo({ scale: 1 });
        }
    }, [focused]);

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}>
            <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
                <View style={[styles.btn]}>
                    <Animatable.View ref={circleRef} style={[styles.circle]} />
                        <item.icon height={index == 2 ? 25 : 25} width= {index == 2 ? 25 : 25}/>
                </View>
                <Animatable.Text ref={textRef} style={styles.text}>
                    {item.label}
                </Animatable.Text>
            </Animatable.View>
        </TouchableOpacity>
    );
};

export default function AnimTab1() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}>

            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen
                        key={index}
                        name={item.route}
                        component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: props => (
                                <TabButton {...props} item={item} index={index} />
                            ),
                        }}
                    />
                );
            })}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 60,
    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: 'white',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
    },
    text: {
        fontSize: 10,
        textAlign: 'center',
        color: 'black',
        marginTop: -2,
    },
});
