import './App.css';
import React from "react";
import Child1 from "./components/Child1";
import NameContextProvider from "./context/NameContextProvider";

function App() {

    return (
        <NameContextProvider>
            <Child1/>
        </NameContextProvider>
    )
}

export default App;
