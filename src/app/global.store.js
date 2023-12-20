import { create } from 'zustand'


export const userInitialValue = {
    email : '',
    name : '' ,
    surname: '', 
    _id: ' ',
}


export const useStore = create((set) => ({
 isLogin: localStorage.getItem('user_nose') === null ? false : true,
 setisLogin:(value) => set({isLogin : value}),
 user: JSON.parse(localStorage.getItem('user_nose') ?? JSON.stringify(userInitialValue)) ?? userInitialValue,
 setUser: (value) => set({user: value}),
 token: localStorage.getItem('token_nose') ?? null ,
 setToken: (value) => set({token: value})
}))

