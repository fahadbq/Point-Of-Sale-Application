import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './../reducers/usersReducer'
import customersReducer from '../reducers/customersReducer'
import productsReducer from '../reducers/productsReducer'
import billsReducer from '../reducers/billsReducer'

const configureStore = () =>{
    
    const store = createStore(combineReducers({
        user: userReducer,
        products: productsReducer,
        customers: customersReducer,
        bills: billsReducer
        
    }), applyMiddleware(thunk))     

    return store
}

export default configureStore