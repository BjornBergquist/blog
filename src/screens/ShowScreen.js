import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Context } from '../context/BlogContext'
import { Entypo } from '@expo/vector-icons'; 

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

export default ShowScreen

const styles = StyleSheet.create({})

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity 
                onPress={() => 
                    navigation.navigate('Edit', {id: navigation.getParam('id')})
                }
            >
                <Entypo name="edit" size={35} />
            </TouchableOpacity>
        )
    }
}