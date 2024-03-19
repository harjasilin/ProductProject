import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackIcon } from "../../asset/icon/svg";
const HeaderComponent = ({ title }) => {
const navigation=useNavigation();

    return (
        <View style={styles.page}>
            <Pressable onPress={()=>navigation.goBack()}>
            <BackIcon height={20} width={20}/>
            </Pressable>
            <Text style={styles.text}>{title}</Text>
        </View>

    )
}
export default HeaderComponent
const styles = StyleSheet.create({
    page: {
        marginTop: 10, 
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        padding:10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f1f5d'
    }

});