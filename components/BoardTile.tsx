import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

type BoardTileProps = {
    propertyGroup: number;
    propertyName: string;
    propertyPrice: number;
    index: number;
};

const BoardTile: React.FC<BoardTileProps> = ({ propertyGroup, propertyName, propertyPrice, index }) => {
    return (
        <View style={styles.tileContainer}>
            {/* Color Bar on Top */}
            <View style={[styles.colorBar, { backgroundColor: getPropertyColor(propertyGroup) }]} />

            {/* Property Name */}
            <Text style={styles.propertyName}>{propertyName}</Text>

            {/* Spacer (similar to SwiftUI `Spacer()`) */}
            <View style={styles.spacer} />

            {/* Property Price */}
            <Text style={styles.propertyPrice}>{propertyPrice} M</Text>
        </View>
    );
};

export default BoardTile


// Function to return color based on property group (similar to PropertyColor.color(forGroup:))
const getPropertyColor = (propertyGroup: number) => {
    const colors = [
        '#D32F2F', // Red
        '#1976D2', // Blue
        '#388E3C', // Green
        '#FBC02D', // Yellow
        '#8E24AA', // Purple
        '#E64A19', // Orange
    ];
    return colors[propertyGroup % colors.length]; // Cycle through colors
};


// Stylesheet for the component
const styles = StyleSheet.create({
    tileContainer: {
        width: 300,
        height: 400,
        backgroundColor: '#A5D6A7', // Similar to SwiftUI `Color.monopolyMintGreen`
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
    },
    colorBar: {
        width: '100%',
        height: 75,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    propertyName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    spacer: {
        flex: 1, // Pushes the price down
    },
    propertyPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});