import { useContext, useEffect } from "react";
import LoginContext from "../LogInContext";

//probably don't need to import this here
    //import LoginContext from "../LogInContext";

export function useContextPersisted(context, localItem) {
    const [loc, setState] = useContext(context);

    //useEffect( () => setState(localStorage.getItem(localItem), [] ))

    function setLoc(newItem) {
        localStorage.setItem(localItem, newItem);
        setState(newItem);
    }

    return [loc, setLoc];
}
