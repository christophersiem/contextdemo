import React, {useContext} from "react";
import NameContext from "../context/NameContext";


export default function Child2() {

    const {name, setName} = useContext(NameContext)

    return (
        <>
            <p>Hallo, ich bin Child2 und heiße {name}</p>
            <button onClick={() => setName("Hans")}>Set name to Hans</button>
        </>
    )
}