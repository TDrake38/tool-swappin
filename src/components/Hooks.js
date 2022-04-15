import { useContext, useEffect } from "react";
import LoginContext from "../LogInContext";


export function useContextPersisted(context, localItem) {
    const [loc, setState] = useContext(context);

    function setLoc(newItem) {
        localStorage.setItem(localItem, newItem);
        setState(newItem);
    }

    return [loc, setLoc];
}
