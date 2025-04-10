import React from 'react';
import MonopolyButton from "@/components/Button";
import {router} from "expo-router";

// @ts-ignore
import MonopolyBackground from "@/assets/images/full_monopoly_background.png";
import {View, Text, StyleSheet, ImageBackground, SafeAreaView, Image} from 'react-native';

const HomeMenu = () => (
    <SafeAreaView className={"flex-1"}>

        <ImageBackground
            source={MonopolyBackground}
            resizeMode={"cover"}
            className={"flex-1"}
        >

            <View style={styles.container}>
                <Image source={require('../assets/images/Monopoly-logo.png')} style={styles.paragraph} />

                <Image source={require('../assets/images/Monopoly-man.png')} style={styles.paragraph} />



                <View style={styles.buttonContainer}>
                    <MonopolyButton title={'Create Game'} onPress={handleCreateGame}/>
                    <MonopolyButton title={'Join Game'} onPress={handlePressJoinGame}/>
                </View>

            </View>
        </ImageBackground>
    </SafeAreaView>

);

const handleCreateGame = () => {
    router.push('/CreateGame'); // Navigate to the Create Game screen
};

const handlePressJoinGame = () => {
    console.log('MyButton was pressed!');
    router.push('/JoinGame'); // Navigate to the Create Game screen
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '110%',
        gap: 30,

    },

    safeArea: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    backgroundImage: {
        flex: 1,

        resizeMode: 'cover',
        justifyContent: 'center',

    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    paragraph: {
        fontSize: 16,
        marginTop: 8,
    },
    buttonContainer: {
        flexDirection: 'column', // or leave as default if vertical
        gap: 10, // adds 10 pixels of space between children
    },
});

export default HomeMenu;
