import { CHANGE_SEARCH_FIELD} from './constants.js'


const intialState = {
    searchField: ''
}

export const searchPromo = (state=intialState, action={}) => {
    console.log(action.type)
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
    
}