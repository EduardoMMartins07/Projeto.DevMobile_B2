import { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }){

    function signIn(){
        
    }





    return (
        <AuthContext.Provider value={{logado: false}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;