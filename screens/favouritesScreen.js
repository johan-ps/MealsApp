import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/mealsList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/headerButton';
import { useSelector } from 'react-redux';
import DefaultText from '../components/defaultText'

const FavouriteScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorite meals found. Start adding some!</DefaultText>
            </View>
        )
    }

    return (
        <MealList 
            listData={favMeals}
            navigation={props.navigation}
        />
    )
}

FavouriteScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Your Favourites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => {
                    navigationData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavouriteScreen;