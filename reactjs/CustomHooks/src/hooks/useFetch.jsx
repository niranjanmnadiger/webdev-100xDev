import { useEffect, useState } from "react"

// this is generic hook which takes any url as input and gives out JSON object file
export function useFetch(url){

    const [data, setData] = useState({});
    const[loading, setLoading] = useState(false);

    async function urlDataFetch(url) {
        setLoading(true);
        const Datas = await fetch(url) //fetch(url) and not fetch({url})
        const json = await Datas.json();
        setData(json);
        setLoading(false);
    }

    useEffect(()=>{

        urlDataFetch(url);

    },[url])

    // refetch the new data from backend after every 10 second
    useEffect(()=>{
        let clock = setInterval(() => {
            urlDataFetch(url)
            
        }, 10 * 1000);
        
        console.log("the clock is "+ clock);

        return function(){ //clean up code
        clearInterval(clock);
        console.log("clock is cleaned");
    }
    })

    

    return{data, loading}
}