import {createStore} from 'redux'

const BUY_CAKE="buy cake"
export const buy=()=>{
    return{
        type:BUY_CAKE
    }
}
const initialCount={
    numofCakes:20
}
const reducer=(state=initialCount,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numofCakes:state.numofCakes-1
        }
        default:return state
    }
}
const store=createStore(reducer)

export default store;

