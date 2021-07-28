import {useState, useEffect} from 'react';

const useLists = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3004/lists";
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setLists(json)
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchData();
    }, []);

    return lists;
}

export default useLists;