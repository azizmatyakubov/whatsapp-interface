import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    // isNewChat:false,
    // isSearchBarActive:false,
    activeChatId: false,
  },
  reducers: {

    setActiveChatId: (state, action) => {
      return {
        activeChatId: action.payload,
      }
    }

    // changeisNewChat: (state, action) => {
    //   return {
    //     ...state,
    //     isNewChat: action.payload,
    //   }
    // },

    // changeisSearchBarActive: (state, action) => {
    //   return {
    //     ...state,
    //     isSearchBarActive: action.payload,
    //   }
    // },


  },
})

export default chatSlice.reducer
export const { changeisNewChat,changeisSearchBarActive, setActiveChatId } = chatSlice.actions