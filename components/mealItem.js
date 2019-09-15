import React from 'react';
import {
    TouchableNativeFeedback,
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/colors';
import DefaultText from './defaultText';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableNativeFeedback
                style={{flex: 1}}
                onPress={props.onSelectMeal}
            >
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <DefaultText>{props.duration}min</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
    bgImage: {
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%'
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '15%',
    }
})

export default MealItem;