import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import RNFS from 'react-native-fs';
import { Cart, CartBlank } from "../../asset/icon/svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../action/productAction";

export const CardComponent = ({ data }) => {
    const dispatch = useDispatch();
    const [localUri, setLocalUri] = useState(null);
    const navigation = useNavigation();

    const cartList = useSelector(state => state.product.carts);
    const isCart = cartList?.includes(data?.productSource?.createdDate.toString());

    const toggleFavorite = () => {
        if (isCart) {
            dispatch(removeFromCart(data?.productSource?.createdDate.toString()));
        } else {
            dispatch(addToCart(data?.productSource?.createdDate.toString()));
        }
    };
    const [imageUri, setImageUri] = useState(null);

    useEffect(() => {
        const downloadAndStoreImage = async () => {
            try {
                const downloadDest = `${RNFS.DocumentDirectoryPath}/image.jpg`;

                const response = await RNFS.downloadFile({
                    fromUrl: 'https://storage.googleapis.com/download/storage/v1/b/cms_products/o/cms%2Fimages%2Fnullback?generation=1704956940900216&alt=media',
                    toFile: downloadDest,
                }).promise;

                if (response.statusCode === 200) {
                    setImageUri(`file://${downloadDest}`);
                } else {
                    console.error('Error downloading image. Server responded with status code:', response.statusCode);
                }
            } catch (error) {
                console.error('Error downloading image:', error);
            }
        };

        downloadAndStoreImage();
    }, []);


    useEffect(() => {
        const downloadImage = async () => {
            try {
               
                const filename = data?.images?.back.split('/').pop();
               
                const downloadDest = `${RNFS.DocumentDirectoryPath}/${filename}`;
                const response = await RNFS.downloadFile({
                    fromUrl: data?.images?.back,
                    toFile: downloadDest,
                }).promise;

                if (response.statusCode === 200) {
                    setLocalUri(`file://${downloadDest}`);
                } else {
                    console.error('Error downloading image. Server responded with status code:', response.statusCode);
                }
            } catch (error) {
                console.error('Error downloading image:', error);
            }
        };

        downloadImage();
    }, []);



    return (
        <TouchableOpacity style={styles.page} onPress={()=>navigation.navigate('DetailScreen',{data:data})}>
          {imageUri&& <Image source={{ uri: 'https://v1/b/cms_products/o/cms%2Fimages%2Fnullback?generation=1704956940900216&alt=media.jpg' }} 
            style={styles.image} resizeMode="contain" />}
            <View style={styles.footerWrap}>
                <Text style={styles.movieDetail} numberOfLines={3}>
                    {data?.name}
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
