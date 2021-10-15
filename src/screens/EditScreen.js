import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = ({navigation}) => {
    const {state} = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    const [title, setTitle] = useState(blogPost.title)
    const [context, setContext] = useState(blogPost.context)

    return (
        <View>
            <Text>Edit Title: </Text>
            <TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle) } />
        </View>
    )
}

export default EditScreen

const styles = StyleSheet.create({})
