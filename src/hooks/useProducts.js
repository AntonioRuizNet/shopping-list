import {useState, useEffect} from 'react';

const useProducts = (e) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const id = e.target.value;
        const url = "http://localhost:3004/products";
        let fetchData = async () => {
          await fetch(url)
                  .then(response => response.json())
                  .then(json => setProducts(json.filter( (e) => {
                    return e.id_list === id
                  })))
        };
        fetchData();
        
    }, []);
    return products;
}

export default useProducts;