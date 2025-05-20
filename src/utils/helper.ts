import { CartProp } from "./types";


export const setItemInLocalStorage = (key: string , value: CartProp) => {
    const minified = JSON.stringify(value);
    localStorage.setItem(key, minified);
}

export const getItemFromLocalStorage = (key: string) => {
    try{
    const minified = localStorage.getItem(key);
    return minified? JSON.parse(minified): null; 
    }catch(e){
        console.error(e);
    }
}

