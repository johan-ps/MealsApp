import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

//screens
import CategoriesScreen from '../screens/categoriesScreen';
import MealScreen from '../screens/mealScreen';
import MealDetailScreen from '../screens/mealDetailScreen';
import FavoritesScreen from '../screens/favouritesScreen';
import FiltersScreen from '../screens/filterScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontFamily: 'OpenSans-Bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'OpenSans-Regular'
    }
}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Meals: MealScreen,
    MealDetail: MealDetailScreen
}, {
    initialRouteKey: 'CategoriesScreen',
    mode: 'modal',
    defaultNavigationOptions: defaultStackNavOptions
})

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Icon name={'ios-restaurant'} size={25} color={tabInfo.tintColor}/>
                )
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: <Text style={{fontFamily: 'OpenSans-Regular'}}>Meals</Text>
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Icon name={'ios-star'} size={25} color={tabInfo.tintColor}/>
                )
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: <Text style={{fontFamily: 'OpenSans-Regular'}}>Favourites</Text>
        }
    }
}

const MealsFavTabNavigator = 
    Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'OpenSans-Regular'
            },
            activeTintColor: Colors.accentColor
        },
    })

const FilterNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: {
        screen: FilterNavigator,
        navigationOptions: {
            drawerLabel: 'Filter'
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'OpenSans-Bold'
        }
    }
})

export default createAppContainer(MainNavigator);

