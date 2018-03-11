import {combineReducers} from 'redux'
import LibraryReducer from './LibraryReducer'
import selectionReducer from './selectionReducer'


export default combineReducers({  
    librraies:LibraryReducer,
    selectedLibraryId:selectionReducer,
})