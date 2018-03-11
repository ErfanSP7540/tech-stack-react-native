import React,{Component} from 'react'
import {View } from 'react-native'
import {connect} from 'react-redux'

class LibraryList extends Component{

    render(){
        console.log(this.props);
        return (<View></View>)
    }
}

const mapstate2Props= state=>{
    return {LibraryList:state.librraies}
}

export default connect(mapstate2Props)(LibraryList);