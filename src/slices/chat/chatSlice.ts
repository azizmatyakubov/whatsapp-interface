import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    isNewChat:false,
    isSearchBarActive:false,
  },
  reducers: {

    changeisNewChat: (state, action) => {
      return {
        ...state,
        isNewChat: action.payload,
      }
    },

    changeisSearchBarActive: (state, action) => {
      return {
        ...state,
        isSearchBarActive: action.payload,
      }
    },

  },
})

export default chatSlice.reducer
export const { changeisNewChat,changeisSearchBarActive } = chatSlice.actions