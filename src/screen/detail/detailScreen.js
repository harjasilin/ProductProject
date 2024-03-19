import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Style } from './detailScreenStyle';
import { addToCart, removeFromCart } from '../../action/productAction';
import { BackIcon, Cart, CartBlank } from '../../asset/icon/svg';

const DetailScreen = ({ }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const dataList = route?.params?.data;

    const cartList = useSelector(state => state.product.carts);
    const isCart = cartList?.includes(dataList?.productSource?.createdDate.toString());

    const toggleFavorite = () => {
        if (isCart) {
            dispatch(removeFromCart(dataList?.productSource?.createdDate.toString()));
        } else {
            dispatch(addToCart(dataList?.productSource?.createdDate.toString()));
        }
    };


    return (
        <ScrollView style={Style.container}>
            <Pressable style={{ marginTop: 20 }} onPress={() => navigation.goBack()}>
                <BackIcon height={25} width={25} />
            </Pressable>
            <Image source={{ uri: 'https://cdn.dribbble.com/userupload/13347380/file/original-0c998bd099060f437151f8b4576bc143.png?resize=2048x1536' }} style={Style.image} />

            <View style={Style.wrapper}>
                <View style={Style.inside}>
                    <Text style={Style.title} numberOfLines={2}>
                        {dataList?.name}
                    </Text>
                    <View style={Style.inside2}>
                        <TouchableOpacity onPress={toggleFavorite}>
                            {isCart ? (
                                <Cart height={30} width={30} />
                            ) : (
                                <CartBlank height={30} width={30} />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{fontSize:17,color:'black',marginTop:10}}>
                    Description: {dataList?.description}
                </Text>
                <Text style={{fontSize:17,color:'black',marginTop:10}}>
                Brand: {dataList?.brand}ingredients
                </Text>
                <Text style={{fontSize:17,color:'black',marginTop:10}}>
                Ingredients: {dataList?.attributes?.ingredients}
                </Text>
                </View>
        </ScrollView>
    );
};

export default DetailScreen;
