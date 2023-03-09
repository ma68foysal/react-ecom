 
import {createSlice} from '@reduxjs/toolkit'
 const SliseOne = createSlice({
    name:'counter',
    initialState: 0 ,
    reducers:{
        Increament(state){
            
            return state + 1
            
        },
        Decreament(state){
            
           return state - 1

        }
    }
 })
 export default SliseOne
 export   const {Increament, Decreament} = SliseOne.actions
