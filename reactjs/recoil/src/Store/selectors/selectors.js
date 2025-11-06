import { selector } from "recoil";
import { counterAtom } from "../atoms/counter";

export const isEvenSelector = selector({
    key:"isEvenSelector",
    get: function({get}){
        const currentCount = get(counterAtom);
        const isEven = (currentCount % 2 == 0);
        return isEven
    }
})