import { b } from '../actions/billsAction'

const billInitialState = {
    loading: true,
    data: [],
    errors: {}
}

const billsReducer = ( state = billInitialState, action) => {

    switch(action.type){
        case b._GET: {
            return { ...state, data: [...action.payload] }
        }
        case b._ADD: {
            return { ...state, data: [ ...state.data, { ...action.payload} ] }
        }
        case b._REMOVE: {
            return { ...state, data: [ ...state.data.filter( (ele) => {
                return ele._id !== action.payload._id
            })]}
        }

        default : return { ...state }
    }
}

export default billsReducer