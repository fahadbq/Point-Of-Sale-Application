import { p } from '../actions/productsAction'

const productInitialState = {
    loading: true,
    data: [],
    errors: {}
}

const productsReducer = ( state= productInitialState, action) =>{

    switch(action.type){
        case p._GET: {
            return { ...state, data: [ ...action.payload ] }
        }

        case p._ADD: {
            return { ...state, data: [ ...state.data, { ...action.payload } ] }
        }
        case p._EDIT: {
            return { ...state, data: state.data.map((ele) =>{
                if( ele._id === action.payload._id ){
                    return {...action.payload}
                } else {
                    return { ...ele}
                }
            })}
        }
        case p._REMOVE: {
            return { ...state, data: [ ...state.data.filter((ele) =>{
                return ele._id !== action.payload._id
            }) ]}
        }

        default: {
            return { ...state }
        }
    }

}

export default productsReducer