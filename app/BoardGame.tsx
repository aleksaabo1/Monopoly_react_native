import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';


/*
const BoardGame: React.FC = () => {
    const FRAME_WIDTH = 3500;
    const FRAME_HEIGHT = 3500;


    // Generate board tiles (40 tiles total)
    const generateBoardTiles = () => {
        const tiles = [];
        for (let i = 0; i < 40; i++) {
            tiles.push({
                type: 'property',
                propertyGroup: (i % 5) + 1,
                propertyName: `Tile ${i + 1}`,
                propertyPrice: (i + 1) * 10,
                index: i,
            });
        }
        return tiles;
    };

    const boardTiles = generateBoardTiles();

    const firstRow = boardTiles.slice(0, 9);
    const secondRow = boardTiles.slice(10, 19);
    const thirdRow = boardTiles.slice(20, 29);
    const fourthRow = boardTiles.slice(30, 39);


    // A component that receives a row of tiles as a prop and renders them.
    interface FirstRowProps {
        row: typeof boardTiles;
        shouldRotateRow?: number;
        shouldRotateTile?: number;
    }

    const BoardRow: React.FC<FirstRowProps> = ({row, shouldRotateRow = 0, shouldRotateTile = 0}) => (
        <View style={{ transform: [{ rotate: `${shouldRotateRow}deg` }] }}>
            {row.map((tile) => (
                <BoardTile
                    key={tile.index}
                    propertyGroup={tile.propertyGroup}
                    propertyName={tile.propertyName}
                    propertyPrice={tile.propertyPrice}
                    index={tile.index}
                />
            ))}
        </View>
    );


    return (
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
            <ZoomableBoard>
                <View style={styles.tileDisplay}>
                    <BoardRow row={firstRow.reverse()}  shouldRotateTile={90}/>
                    <BoardRow row={secondRow.reverse()}  shouldRotateTile={90}/>
                    <BoardRow row={thirdRow}/>
                    <BoardRow row={fourthRow}/>
                </View>
            </ZoomableBoard>
        </GestureHandlerRootView>

    )

    return (
        <View style={styles.container}>Hello BoardGame</View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '110%',
        gap: 30

    },
    gestureHandlerRootView: {
        flex: 1,
    },
    tileDisplay: {
        display: 'flex',
    },

});

export default BoardGame;*/