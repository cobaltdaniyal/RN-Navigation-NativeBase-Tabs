import React, { Component } from "react";
import { View, Text } from 'react-native';


class TabOne extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Tab One</Text>
            </View>
        )
    }
}
export default TabOne;