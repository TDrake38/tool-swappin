import { useContext } from "react";

//refactor, remove this file 
export function useContextPersisted(context, localItem) {
    const [loc, setState] = useContext(context);

    function setLoc(newItem) {
        localStorage.setItem(localItem, newItem);
        setState(newItem);
    }

    return [loc, setLoc];
}
