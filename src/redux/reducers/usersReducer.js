import { u } from '../actions/usersAction'

const usersInitialState = {
    loading: true,
    data: []
}

const userReducer = (state = usersInitialState, action) =>{

    switch(action.type){
        case u._GET: {
            return { ...state, data: {...action.payload } }
        }
        case u._LOADING: {
            return { ...state, loading: false }
        }
        default : {
            return { ...state }
        }
    }
}

export default userReducer