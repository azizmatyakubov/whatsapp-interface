import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    _id:"",
    phoneNumber:"",
    userName: "",
    avatar:"https://png.pngtree.com/png-vector/20210604/ourlarge/pngtree-gray-avatar-placeholder-png-image_3416697.jpg",
    about:"",
    token:"",
  },
  reducers: {

    changeUserName: (state, action) => {
      return {
        ...state,
        userName: action.payload,
      }
    },

    changeAvatar: (state, action) => {
      return {
        ...state,
        avatar: action.payload,
      }
    },

    changeAbout: (state, action) => {
      return {
        ...state,
        about: action.payload,
      }
    },

    changeToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      }
    },

  },
})

export default userSlice.reducer
export const { changeUserName,changeAvatar,changeAbout,changeToken } = userSlice.actions