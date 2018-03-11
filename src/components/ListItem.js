import React,{Component} from 'react'
import {Text} from 'react-native'
import {CardSection} from './common'

import {connect} from 'react-redux'
import * as actions from '../reducers/actions'


class ListItem extends  Component{
    render(){

        console.log(this.props);
        
        return (
            <CardSection>
                <Text style={styles.titleStyle}>{this.props.library.title}</Text>
            </CardSection>
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