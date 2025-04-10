// MyPicker.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


type MonopolyPickerProps = {
    options: string[];
    onValueChange?: (value: string) => void;
};

const MonopolyPicker: React.FC<MonopolyPickerProps> = ({options, onValueChange}) => {
    const [selectedValue, setSelectedValue] = useState<string>(options[0]);

    const [optionsValue, setOptionsValue] = useState<string[]>(options);

    const handleValueChange = (itemValue: string) => {
        setSelectedValue(itemValue);
        if (onValueChange) {
            onValueChange(itemValue);
        }
    };

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                onValueChange={handleValueChange}
                style={styles.picker}
            >

                {optionsValue.length === 0 && (
                    <Picker.Item label="Loading..." value="loading" />
                )}
                {optionsValue.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                ))}


            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    picker: {
        height:  150,
        width: 300,
    }
});

const pickerSelectStyles = StyleSheet.create({
    // iOS-specific style for the text input
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is not hidden by the icon
    },
    // Optional container styling for iOS
    inputIOSContainer: {
        marginVertical: 10,
    },
    // Style for the placeholder text
    placeholder: {
        color: 'gray',
        fontSize: 16,
    },
});
export default MonopolyPicker;
