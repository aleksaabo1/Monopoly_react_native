import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

type MenuButtonProps = {
    title: string;
    onPress: () => void;
};

const MonopolyButton: React.FC<MenuButtonProps> = ({ title, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.buttonContainer,
                pressed && styles.pressed, // reduce opacity when pressed
            ]}
        >
            {/* Container to hold our layered rectangles */}
            <View style={styles.button}>
                {/* Layer 1: Largest red rectangle */}
                <View style={styles.outerLayer} />
                {/* Layer 2: Slightly smaller white rectangle */}
                <View style={styles.middleLayer} />
                {/* Layer 3: Even smaller red rectangle */}
                <View style={styles.innerLayer} />
                {/* Text on top of everything */}
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 200,
        height: 80,
    },
    pressed: {
        opacity: 0.6,
    },
    button: {
        flex: 1,
    },
    outerLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 15,
        backgroundColor: 'red',
    },
    middleLayer: {
        position: 'absolute',
        top: 4,
        left: 4,
        right: 4,
        bottom: 4,
        borderRadius: 12,
        backgroundColor: 'white',
    },
    innerLayer: {
        position: 'absolute',
        top: 8,
        left: 8,
        right: 8,
        bottom: 8,
        borderRadius: 10,
        backgroundColor: 'red',
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center', // for Android to center vertically
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        padding: 26
    },
});

export default MonopolyButton;
