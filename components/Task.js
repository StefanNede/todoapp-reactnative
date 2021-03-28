import React from 'react';
import { View, Text, StyleSheet, TextInputBase } from 'react-native';

export default function Task({task}){
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                {/* will hold the square that goes to the left of the task */}
                <View style={styles.square}></View>
                {/* holds the text of the todo */}
                <Text style={styles.itemText}>{task}</Text>
            </View>
            {/* holds the circular item, to check the todo off */}
            <View style={styles.circular}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: "wrap",
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 6
    },
});