import React,{useState, useContext} from 'react'
import { StyleSheet, Text, TextInput, View, Button} from 'react-native'
import { Context } from '../context/BlogContext'

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const {addBlogPost} = useContext(Context)
    return (
        <View>
            <Text style={styles.label}>Enter Title: </Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>Enter Content: </Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
            <Button
                onPress={() => addBlogPost(title, content, () => navigation.navigate('Index'))}
                title="Add Blog Post"
            />
        </View>
    )
}

export default CreateScreen

const styles = StyleSheet.create({
    input:{
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label:{
        fontSize: 20,
        marginLeft: 5,
    }
})
