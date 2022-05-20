import { createRoot } from 'react-dom/client'
import App from './App'
import configureStore from './redux/store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const store = configureStore()

console.log(store.getState())

store.subscribe(() =>{
    console.log('store updated', store.getState())
})

const ele = (
    <BrowserRouter >
        <Provider store={store} >
            <App />
        </Provider>
    </BrowserRouter>
)

const root = createRoot( document.getElementById ('root') )
root.render( ele )
