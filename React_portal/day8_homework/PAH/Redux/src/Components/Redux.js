import React from 'react'
import redux,{createStore} from 'redux'
export default function Redux() {
    const BUY_CAKE = "buy cake"
    const buy=()=>{
        return{
            type:BUY_CAKE
        }
    }
    const initialCount={
        numOfCakes:20
    }
    const reducer=(state=initialCount,action)=>{
        switch(action.type){
            case BUY_CAKE:return{
                ...state,
                numOfCakes:state.numOfCakes-1
            }
            default:return state
        }
    }
    const store=createStore(reducer)
    store.subscribe(()=>{console.log(store.getState())})
    return (
        <div>
            {store.getState().numOfCakes}
            <button onClick={()=>{store.dispatch(buy())}}>Buy</button>
        </div>
    )
}
