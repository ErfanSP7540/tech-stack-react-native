import React,{Component} from 'react'
import {ListView ,Text} from 'react-native'
import {connect} from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component{

    componentWillMount(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(this.props.LibraryList);
    }

    renderRow(library){
        return <ListItem library={library} />
    }

    render(){
        console.log(this.props);
        return (<ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />)
    }
}

const mapstate2Props= state=>{
    return {LibraryList:state.librraies}
}

export default connect(mapstate2Props)(LibraryList);