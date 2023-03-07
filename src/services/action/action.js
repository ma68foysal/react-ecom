import { INCREAMENT, DECREAMENT,INCREAMENT_BY_VALUE, RESET } from "../constant/constant"



 export const IncreamentACTION = ()=>{
    return{
        type:INCREAMENT
 
    }
  }
  export const DecreamentACTION = ()=>{
    return{
        type:DECREAMENT
 
    }
  }
  export const ResetACTION = ()=>{
    return{
        type:RESET
 
    }
  }
  export const  IncreamentByValueACTION = (value)=>{
    return{
        type:INCREAMENT_BY_VALUE,
        payload:value
 
    }
  }