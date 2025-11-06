import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const todoAtomFamily = atomFamily({
     key: "todoAtomFamily",
     default: selectorFamily({
          key: "todoSelectorFamily",
          get: (id) => async() => {
               await new Promise(r=> setTimeout(r,3000));
              const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
               return res.data;
          }
     })
})

//this can also be written as 

/*
export const todoAtomFamily = atomFamily({
     key: "todoAtomFamily",
     default: selectorFamily({
          key: "todoSelectorFamily",
          get: fucntion(id){
          
          return async() => {
              const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
               return res.data;
          }
     })
})
*/