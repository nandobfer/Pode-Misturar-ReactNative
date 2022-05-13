import { StyleSheet } from 'react-native';

let primary_color = '#121051'
let secondary_color = '#4fb4f8'
let secondary_color_2 = '#03FF89'
let secondary_color_3 = '#faff6e'

const styles = StyleSheet.create({
	background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primary_color,
        paddingTop: 20
    },
    toolbar: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 5,
        borderBottomColor: 'white'
    },
    button_images: {
        height: 35,
        width: 25,
    },
    container: {
        flex: 1,
        width: '100%',
    },
	text: {
		color: secondary_color_3,
		fontSize: 30,
        // fontFamily: 'unispace'
	},
    text2: {
        color: secondary_color_2,
        paddingLeft: 10
    },
    inputs: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingTop: 20

    },
    inputfield: {
        fontSize: 22,
        backgroundColor: secondary_color_3,
        width: 150,
        height: 50,
        borderRadius: 50,
        textAlign: 'center'
    },
    images_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    image: {
        flex: 1,
        width: 80,
        height: 200,
    }
});

export default styles;