import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type LobbyUserProps = {
    username: string;
};

const LobbyUser: React.FC<LobbyUserProps> = ({ username }) => {
    return (
        <View style={styles.container}>
            <View style={styles.circle}/>


            <Text style={styles.textStyle}>Hello {username}</Text>
        </View>
    );
};

export default LobbyUser;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', // This should be applied to the View
        gap: 10, // Only works in RN 0.71+
        alignItems: 'center', // Optional to center text
    },
    textStyle: {
        fontSize: 18,
        color: 'white',
        backgroundColor: 'red',
        padding: 10,
    },
    circle: {
        backgroundColor: 'red',
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
    }
});
