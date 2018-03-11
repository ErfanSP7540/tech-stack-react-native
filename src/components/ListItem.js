import React,{Component} from 'react'
import {Text , View , TouchableWithoutFeedback} from 'react-native'
import {CardSection} from './common'

import {connect} from 'react-redux'
import * as actions from '../reducers/actions'


class ListItem extends  Component{
    
    renderDescription(){
        if(this.props.expand){
            return (
                    <View>
                        <Text> { this.props.library.description } </Text>
                    </View>
                )
        }    
    }


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
                        {this.renderDescription()}
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

const mapState2props=(state,ownProp)=>{
    return { expand:state.selectedLibraryId===ownProp.library.id }
}

export default connect(mapState2props,actions)(ListItem)