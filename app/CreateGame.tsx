import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, SafeAreaView, Image, TextInput} from 'react-native';
import MonopolyPicker from "@/components/Picker";
import MonopolyButton from "@/components/Button";

const CreateGame: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState< String | null>(null);

    const handlePickerChange = (value: string) => {
        setSelectedOption(value);
        console.log("Selected option:", value);
    };


    const createGame = () => {
        console.log("Create game pressed");
    }
    return (<ImageBackground
        source={require('../assets/images/full_monopoly_background.png')}
        style={styles.backgroundImage}

    >
        <View style={styles.container}>
            <Image source={require('../assets/images/Monopoly-logo.png')} style={styles.paragraph}/>


            <MonopolyPicker
                options={["Normal",
                    "HarryPotter",
                    "GameOfThrones"]}
                onValueChange={handlePickerChange}
            />

            <MonopolyButton title={'Create game'} onPress={createGame} />

        </View>
    </ImageBackground>
    );


    return <View style={styles.container}>Hello Create Game</View>
};



const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
    paragraph: {
        fontSize: 16,
        marginTop: 8,
    },
    buttonContainer: {
        flexDirection: 'column', // or leave as default if vertical
        gap: 10, // adds 10 pixels of space between children
    },
    selectedText: {
        fontSize: 16,
        color: 'white',
    },
});

export default CreateGame;
