const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE ='BUY_CAKE';

function buyCake(){
   return {
        type:BUY_CAKE,
        info: 'First redux action'
    }
}

// (previousState, action)=> newState      {redudser}

const initialState = {
    numberOfCakes : 10
}

const reduser = ( state = initialState , action ) =>{
   switch (action.type){
     case BUY_CAKE : return{
        ...state,
        numberOfCakes : state.numberOfCakes - 1
     }

     default:return state
   }
}

const store = createStore(reduser)                                                                          ///
console.log('initial state', store.getState())
const unsubscribe =  store.subscribe(() => console.log('updated state ', store.getState()))                 /////
store.dispatch(buyCake()) 
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()