import React from 'react'
import LobbyUser from "@/components/LobbyUser";
import MonopolyButton from "@/components/Button";
import {router} from "expo-router";
/*
const Lobby = () => {

    const [users, setUsers] = React.useState([
        "Aleksander",
        "Kamil",
        "Kacper",
        "Kuba",
        "Piotr",
        "Krzysztof",
        "Wojtek",
        "Michał",
        "Kuba",
    ])

    const beginGame = () => {
       router.push("/BoardGame");
    }

    return (
        <ScrollView style={styles.safeArea}>
            <ImageBackground
                source={require('../assets/images/full_monopoly_background.png')}
                style={styles.backgroundImage}
            >
                <View style={styles.container}>

                    <Image source={require('../assets/images/Monopoly-logo.png')}/>

                    <View style={styles.gridView}>
                        {users.map((user, index) => (
                            <LobbyUser key={index} username={user}/>
                        ))}
                    </View>

                    <MonopolyButton title={"Play Game"} onPress={beginGame} />
                </View>
            </ImageBackground>
        </ScrollView>
    )

}


export default Lobby

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
    safeArea: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    gridView: {
        flexDirection: 'row',  // Places items in a row
        flexWrap: 'wrap',      // Allows wrapping to next row
        justifyContent: 'center',  // Centers items
        gap: 50,               // Adds spacing between items (React Native 0.71+)
        rowGap: 10,            // Adjusts spacing between rows (React Native 0.71+)
    }

})*/