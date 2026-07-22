import {useState, useEffect} from "react";


export function useFetch(path) {

    const url = "https://api.reidoscanais.st";

    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = await fetch(`${url}` + path);
                const res = await req.json();    
                setData(res.data);  
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();          
    }, [path])

    return {data};
}