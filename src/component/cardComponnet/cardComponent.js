import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import RNFS from 'react-native-fs';
import { Cart, CartBlank } from "../../asset/icon/svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../action/productAction";

export const CardComponent = ({ data }) => {
    const dataList = data?.data


    const dispatch = useDispatch();
    const [localUri, setLocalUri] = useState(null);
    const navigation = useNavigation();

    const cartList = useSelector(state => state.product.carts);

    const array = cartList
    const index = array.indexOf(null);
    const slicedArray = index !== -1 ? array.slice(index + 1) : array;
    console.log(slicedArray, 'cartList')
    const isCart = slicedArray?.includes(data?.key.toString());
    console.log(isCart,'isCart')
    const toggleFavorite = () => {
        if (isCart) {
            dispatch(removeFromCart(data?.key.toString()));
        } else {
            dispatch(addToCart(data?.key.toString()));
        }
    };
    // useEffect(() => {
    //     const downloadImage = async () => {
    //         try {
    //             // console.log('Image URL:', data?.images);
    //             const filename = data?.images?.back.split('/').pop();
    //             // console.log(filename, 'filename')
    //             const downloadDest = "file://" + RNFS.DocumentDirectoryPath + '/images/d88b102c-d4c6-4dc1-9a4c-f2a0e599ddbf.jpg';
    //             const response = await RNFS.downloadFile({
    //                 fromUrl: data?.images?.back,
    //                 toFile: downloadDest,
    //             }).promise;

    //             if (response.statusCode === 200) {
    //                 setLocalUri(`file://${downloadDest}`);
    //             } else {
    //                 console.error('Error downloading image. Server responded with status code:', response.statusCode);
    //             }
    //         } catch (error) {
    //             console.error('Error downloading image:', error);
    //         }
    //     };

    //     downloadImage();
    // }, []);



    return (
        <TouchableOpacity style={styles.page}>
            {/* <View>
                {localUri && <Image source={{ uri: localUri }} style={styles.image} resizeMode="contain" />}
            </View> */}
            <Image source={{ uri: 'https://cdn.dribbble.com/userupload/13347380/file/original-0c998bd099060f437151f8b4576bc143.png?resize=2048x1536' }} style={styles.image} resizeMode="contain" />
            <View style={styles.footerWrap}>
                <Text style={styles.movieDetail} numberOfLines={3}>
                    {dataList?.name}
                </Text>

                <TouchableOpacity onPress={toggleFavorite}>
                    {isCart ? (
                        <Cart height={30} width={30} />
                    ) : (
                        <CartBlank height={30} width={30} />
                    )}
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    page: {
        borderRadius: 20,
        padding: 2,
        backgroundColor: 'white',
        width: '46%',
    },
    image: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 170,
        width: '100%',
    },
    footerWrap: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    movieDetail: {
        color: 'black',
        padding: 8, width: '80%'
    },
});
