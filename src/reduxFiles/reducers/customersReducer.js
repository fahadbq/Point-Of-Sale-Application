import { c } from '../actions/customersAction'

const customersInitialState = {
    loading: true,
    data: [],
    errors: {}
}

const customersReducer = (state = customersInitialState, action ) =>{

    switch(action.type){
        case c._GET : {
            return { ...state, data: [ ...action.payload ]}
        }
        
        case c._ADD : {
            return { ...state, data: [ ...state.data, {...action.payload} ]}
        }

        case c._REMOVE : {
            return { ...state, data: state.data.filter((ele) =>{
                return ele._id !== action.payload
            })}
        }

        case c._EDIT : {
            return { ...state, data: state.data.map((ele) => {
                if( ele._id === action.payload._id ){
                    return { ...action.payload }
                } else { 
                    return { ...ele }
                }
            })}
        }

        default : {
            return { ...state }
        }
    }
}
export default customersReducer