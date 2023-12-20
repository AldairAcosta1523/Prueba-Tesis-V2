'use client'
import { create } from 'zustand'

export const useStore = create((set) => ({
 isLogin:false,
 setisLogin:(value) => set({isLogin : value})
}))

