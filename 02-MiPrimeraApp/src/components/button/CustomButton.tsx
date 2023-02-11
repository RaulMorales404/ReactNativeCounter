import React from 'react';
import { Text, StyleSheet,  TouchableHighlight } from 'react-native';
type Props = {
    title: String,
    action: () => void,

}
const CustomButton = ({ action, title }: Props) => {
    return (
        <TouchableHighlight 
        underlayColor="#3498DB"
        onPress={() => action()} style={styles.btn}>
            <Text style={styles.textButon}>{title}</Text>
        </TouchableHighlight>
    );
};
const styles = StyleSheet.create({
    textButon: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
    },
    btn: {
        backgroundColor: '#2E86C1',
        borderRadius: 50,
        height: 65,
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#4a4a4a",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
})

export default CustomButton;
