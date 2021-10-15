import React, {useContext} from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import {Context} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndexScreen = ({navigation}) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context)

    return (
        <View >
            <Button style={styles.button} title="Add Post" onPress={addBlogPost}/>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({item, index}) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Show', {id: item.id})}
                        >
                            <View style={index === 0 ? [styles.first, styles.row] : styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash-2" style={styles.icon}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
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

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ) 
    }
}