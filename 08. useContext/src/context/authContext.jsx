import React,{createContext, useContext} from "react";

const authContext = createContext({
    user:null,
    login: ()=>{},
    logout: ()=>{}
});

export default authContext