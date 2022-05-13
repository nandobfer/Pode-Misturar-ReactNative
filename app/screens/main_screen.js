import React from "react"
import { TextInput, View, Text, Image } from 'react-native';
import styles from './style'

const MainScreen = () => {
    const {text, text2} = React.useState(null)
    const database = require('../database.json')
    let products = []

    for (let i in database) {
        products.push(database[i].Nome)
    }    

    console.log(products)
    
    const imageHandler = (item) => {
        return (
            <Image
                style={styles.image}
                source={{uri: item.Image}}
            />
        )
    }
    const onChangedText = (text) => {
        text = text.toLowerCase();
        if (products.includes(text)) {
            console.log(text)
            let index = products.indexOf(text)
            imageHandler(database[index])
            
        }
    }


    return (
        <View style={styles.background}>

            <View style={styles.toolbar}>
                <Image
                    source={require('../assets/interrogacao.png')}
                    style={[styles.button_images, {left: -25}]}
                    />
                <Text style={styles.text} >
                    Pode
                </Text>
                <Text style={[styles.text, styles.text2]} >
                    Misturar 
                </Text>
                <Image
                    source={require('../assets/menu.png')}
                    style={[styles.button_images, {right: -25}]}
                    />
            </View>
            <View style={styles.container}>
                <View style={styles.inputs}>

                    <TextInput
                        style={styles.inputfield}
                        onChangeText={onChangedText}
                        placeholder='Produto 1'
                        value={text}
                    />
                    <TextInput
                        style={styles.inputfield}
                        onChangeText={onChangedText}
                        placeholder='Produto 2'
                        value={text2}
                    />
                </View>
                <View style={styles.images_container}>
                    <Text style={styles.text}>
                        <Image
                            source={{uri: 'https://www.indi.mg.gov.br/wp-content/uploads/2016/09/Engenharia-Qui%CC%81mica.png'}}
                            style={styles.image}
                        />
                    </Text>
                </View>
            </View>
            
        </View>
    );
}

export default MainScreen;