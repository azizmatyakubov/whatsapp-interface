import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    _id:"",
    phoneNumber:"",
    name: "",
    avatar:"",
    about:"",
  },
  reducers: {
    // here I'll put the logic to CHANGE the name

    changeProperty: (state, action) => {
      // ALWAYS in these reducers cases you have to return the new value for the slice's state
      return {
        ...state,
        
        name: action.payload,
        // action.payload is the argument you're invoking this action with from a component!
      }
    },

  },
})

export default userSlice.reducer
export const { changeProperty } = userSlice.actions