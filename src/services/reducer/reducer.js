import { INCREAMENT, DECREAMENT,INCREAMENT_BY_VALUE,RESET } from "../constant/constant"

const init = {
    count:0
 }


const CounterReducer = (state=init,action)=>{
    switch (action.type) {
        case INCREAMENT:
            return{
            
            count: state.count + 1
        }
        case DECREAMENT:
            return{
            count: state.count - 1
        }
        case RESET:
            return{
            count: 0
        }
        case INCREAMENT_BY_VALUE:
           return {
            count: state.count + action.payload
        }
            
            
    
        default:
           return state
    }
 
   }

    export default CounterReducer