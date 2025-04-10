import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

type MonopolyInputField = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
};

const MonopolyInputField: React.FC<MonopolyInputField> = ({placeholder, value, onChangeText}) => {

    return (
        <TextInput
            placeholder={placeholder}
            style={styles.text}
            value={value}
            onChangeText={onChangeText}
        />
    );
};

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 5,
        opacity: 0.8,
        width: 250
    },
});

export default MonopolyInputField;
