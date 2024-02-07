import { UserContext } from "@/context/userContext/userContext";
import { useContext } from "react";

export const useUserContext=()=>{
    const context=useContext(UserContext);
    if(!context){
        throw new Error('useUserContext Can Only Be used within User Provider')
    }
    return context;
}