/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// see what does it mean context api 

import { children, createContext, useContext, useEffect, useReducer } from "react"; 
const initialState = { 
  //bech ki nrefrechiw ma ya3melch logout wa7dou 
  user: localStorage.getItem("user") != undefined ? JSON.parse(localStorage.getItem("user")) : null,  
  role: localStorage.getItem("role") || null,  
  token: localStorage.getItem("token") || null,  
};  


export const authContext = createContext(initialState);  


const authReducer = (state,action) => {  
  switch (action.type) {  
    case 'LOGIN_START':  
      return {  
        user: null,  
        role: null,  
        token: null,  
      };  
    case "LOGIN_SUCCESS":  
      return {  
        user: action.payload.user,  
        token: action.payload.token,  
        role: action.payload.role  
      };  
      case "LOGOUT":
        return {  
            user: null,  
            role: null,  
            token: null,  
          };    
      
    default:  
      return state 
  }  
};

export const AuthContextProvider = ({children})=>{
    const [state , dispatch]=useReducer(authReducer,initialState)

    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
      localStorage.setItem("token", JSON.stringify(state.token))
      localStorage.setItem("role", JSON.stringify(state.role))
    }, [state])

    return <authContext.Provider value={{user:state.user , token:state.token , role:state.role , dispatch}}>
        {children}
    </authContext.Provider>
}