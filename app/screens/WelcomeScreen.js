import { StyleSheet, ImageBackground } from 'react-native';

const WelcomeScreen = () => {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/background.jpg")}>

            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#121051'
    }
});

export default WelcomeScreen;