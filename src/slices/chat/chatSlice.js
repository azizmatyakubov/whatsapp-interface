import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    isNewChat:false,
    isSearchBarActive:false,
    activeChatId: false,
    activeChat: false
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

    setActiveChatId: (state, action) => {
      return {
        activeChatId: action.payload,
      }
    },

    setActiveChat: (state, action) => {
      return {
        activeChat: action.payload,
      }
    },
}})

export default chatSlice.reducer
export const { changeisNewChat,changeisSearchBarActive, setActiveChatId, setActiveChat } = chatSlice.actions