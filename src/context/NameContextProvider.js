import React, {useState} from 'react';
import NameContext from "./NameContext";

export default function NameContextProvider({children}) {

    const [name,setName]= useState("Paul")

    return (

        <NameContext.Provider value={{name,setName}}>
            {children}
        </NameContext.Provider>

    )
};


