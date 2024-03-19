import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { useSelector } from "react-redux";

import HeaderComponent from "../../component/header/headerComponent";
import { CardComponent } from "../../component/cardComponnet/cardComponent";

export const CartScreen = ({ navigation }) => {
    const text_Color = '#1f1f5d'
    const cartList = useSelector(state => state.product.carts);
     const products = useSelector((state) => state.product.products)
     const arr=products?.products.map((index)=>index)
     console.log(arr,'products?.products+++++')
     const filteredProduct = products?.products.filter((item,index) => cartList?.includes(index.toString()));
     console.log(filteredProduct,'filteredProduct')
    return (
        <ScrollView style={styles.container}>
            <HeaderComponent title={'MY CART'} />
            {filteredProduct.length > 0 ? (
                <View style={styles.wrapper}>
                    {
                        filteredProduct.map((item, index) => (
                            <CardComponent data={{ data: item, key: index }} />
                        ))
                    }

                </View>
            ) : (
                <View style={{ marginTop: '40%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>No data present!!</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}
                        style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, elevation: 10, marginTop: 10 }}>
                        <Text style={{ color: text_Color }}>Go to Home Screen</Text>
                    </TouchableOpacity>
                </View>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'lightblue'

    },
    page: {
        padding: 25, marginTop: 20
    },
    wrapper: {
        flexDirection: 'row',
        marginHorizontal: 10,
        padding: 10,
        gap: 10,
        width: '100%',
        flexWrap: 'wrap',
        marginTop: 20
    }

});