import React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";

import { useSelector } from "react-redux";
import { CardComponent } from "../../component/cardComponnet/cardComponent";

const HomeScreen = ({ navigation }) => {

    const products = useSelector((state) => state.product.products)
    const data = products?.products

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.page}>
                Hello Harz
            </Text>

            <View style={styles.wrapper}>
                {data.map((item, index) => (
                    <CardComponent data={item} key={index}/>
                ))}
            </View>
        </ScrollView>
    )
}
export default HomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'lightblue'
    },
    page: {
        marginTop: 20,
        fontSize: 25,
        marginStart: 50,
        color: '#1f1f5d'
    },
    wrapper: {
        flexDirection: 'row',
        marginHorizontal: 10,
        padding: 10,
        gap: 10,
        width: '100%',
        flexWrap: 'wrap'
    }



});