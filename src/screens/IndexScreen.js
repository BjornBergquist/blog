import React, {useContext} from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import {Context} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'; 
import { Children } from 'react';

const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context)

    return (
        <View >
            <Button style={styles.button} title="Add Post" onPress={addBlogPost}/>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item, index}) => {
                    return <View style={index === 0 ? [styles.first, styles.row] : styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Feather name="trash-2" style={styles.icon}/>
                    </View>
                }}
            />
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({
    first:{
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title:{
        fontSize: 18,
    },
    icon:{
        fontSize: 24,
    }
})
