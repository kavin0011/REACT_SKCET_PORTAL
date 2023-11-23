import React from 'react'
import {connect} from 'react-redux'
import { buy } from './Store'

function CakeShop(props) {
    return (
        <div>
            Number of cakes-{props.numofCakes}<br></br>
            <button onClick={props.buy}>Buy Cake</button>
        </div>
    )
}
const mapStoretoState=(state)=>{
    return{
        numofCakes:state.numofCakes
    }
}
export default connect(mapStoretoState,{buy})(CakeShop)