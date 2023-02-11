import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <View>
            <Text style={styles.text}>Home</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
})
export default Home;
