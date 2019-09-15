import React from 'react';
import {View, StyleSheet} from 'react-native';
import MealList from '../components/mealsList';
import DefaultText from '../components/defaultText';
import { useSelector } from 'react-redux';

const MealScreen = props => {

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const catId = props.navigation.getParam('categoryId');
    const displayMeals = availableMeals.filter(meal => {
        return meal.categoryIds.indexOf(catId) >= 0;
    })

    if (displayMeals.length === 0) {
        return (
            <View style={styles.content} >
                <DefaultText>No meals found, maybe check your filters?</DefaultText>
            </View>
        )
    }

    return (
        <MealList
            listData={displayMeals}
            navigation={props.navigation}
        />
    )
}

MealScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: navigationData.navigation.getParam('categoryName', 'N/A'),
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default MealScreen;