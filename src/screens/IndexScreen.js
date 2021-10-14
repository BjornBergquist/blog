import React, {useContext} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext)
    console.log(blogPosts);
    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList 
                data={blogPosts}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({})
