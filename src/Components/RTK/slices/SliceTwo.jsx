import {createSlice} from '@reduxjs/toolkit'

const SliseTwo = createSlice({
    name:'product',
    initialState: [] ,
    reducers:{
        products(state,action){
            
            return  {state:action.payload}
            
        },
        
    }
 })
 export default SliseTwo.reducer
 export   const {products} = SliseTwo.actions