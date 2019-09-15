import React from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/categoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/headerButton';

const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        return (
            <CategoryGridTile 
                title={itemData.item.title}    
                color={itemData.item.color} 
                onSelect={() => {
                    props.navigation.navigate({routeName: 'Meals', params: {
                        categoryId: itemData.item.id,
                        categoryName: itemData.item.title,
                        categoryColor: itemData.item.color
                    }})
                }}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList 
                numColumns={2}
                data={CATEGORIES}
                renderItem={renderGridItem}
                keyExtractor={(item, index) => item.id}
            />
        </View>
    )
}

CategoriesScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Meal Categories',
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
    
})

export default CategoriesScreen;