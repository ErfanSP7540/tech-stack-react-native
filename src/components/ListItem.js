import React,{Component} from 'react'
import {Text , View , TouchableWithoutFeedback} from 'react-native'
import {CardSection} from './common'

import {connect} from 'react-redux'
import * as actions from '../reducers/actions'


class ListItem extends  Component{
    render(){
        const {title,id}=this.props.library;

        console.log(this.props);
        
        return (
            <TouchableWithoutFeedback 
                onPress={()=>this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{title}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle:{
        fontSize:18,
        paddingLeft:15,
    },
}

const mapState2props=(state)=>{
    return { selectedID:state.selectedLibraryId }
}

export default connect(mapState2props,actions)(ListItem)