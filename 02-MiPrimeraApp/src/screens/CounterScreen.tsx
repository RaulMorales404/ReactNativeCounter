import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/button/CustomButton';
import useCounter from '../hooks/useCounter';
const CounterScreen = () => {
    const { counter, oneUp, oneDown } = useCounter();


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                CounterScreen {counter}
            </Text>
            <View style={styles.buttonBox}>
                <CustomButton action={oneDown} title="-1" />
                <CustomButton action={oneUp} title="+1" />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    },
    buttonBox: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent:'space-between',
        bottom:30,
        width:'90%',
    },
});
export default CounterScreen;
