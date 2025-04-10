import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, SafeAreaView, Image, TextInput} from 'react-native';
import MonopolyButton from "@/components/Button";
import {router} from "expo-router";
import MonopolyInputField from "@/components/InputFields";
/*
const JoinGame: React.FC = () => {
    const [gameId, setGameId] = useState('');
    const [username, setUsername] = useState('');

    const handleJoinGame = () => {
        console.log("Joining game with ID:", gameId);
        console.log("Username:", username);
        setGameId(gameId);
        // Add logic to navigate or submit data
    };


    return (
        <ImageBackground
        source={require('../assets/images/full_monopoly_background.png')}
        style={styles.backgroundImage}
    >

        <View style={styles.container}>
           <Text style={styles.heading}>
                Join Game
           </Text>
            <MonopolyInputField placeholder={"Enter game ID"} value={gameId} onChangeText={setGameId} />
            <MonopolyInputField placeholder={"Enter your username"} value={username} onChangeText={setUsername} />

            <MonopolyButton
                title="Join Game"
                onPress={handleJoinGame}
            />
        </View>
    </ImageBackground>

    );

};

export default JoinGame;









const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '110%',
        gap: 30,

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
});
*/