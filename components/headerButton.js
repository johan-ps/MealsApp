import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../constants/colors';

const CustomHeaderButton = props => {
    return (
        <HeaderButton {...props} IconComponent={Icon} iconSize={23} color={'white'} />
    )
}

export default CustomHeaderButton;