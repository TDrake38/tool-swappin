import { useContext, useEffect } from "react";

//probably don't need to import this here
    import LoginContext from "../LogInContext";

export function useContextPersisted(context, localItem) {
    const [loc, setState] = useContext(LoginContext);

    useEffect( () => setState(localItem.getItem(localItem/*, newItem*/), [] ))

    function setLoc(newItem) {
        localItem.setItem(localItem, newItem);
        setState(newItem);
    }

    return [loc, setLoc];
}
