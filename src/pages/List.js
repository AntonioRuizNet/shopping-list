import React, { useState, useEffect } from 'react';

import Products from '../components/Products';
import NewProd from '../components/NewProd';
import Lists from '../components/Lists';

export default function List() {  

  const  [lists, setLists] = useState([]);
  const  [products, setProducts] = useState([]);
  const mail = localStorage.getItem('MailUser');

    useEffect(() => {
        const url = "http://localhost:3000/lists.json";
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

    const getListProducts = (e) => {
        const id = e.target.value;
        const url = "http://localhost:3000/products.json";
        let fetchData = async () => {
          await fetch(url)
                  .then(response => response.json())
                  .then(json => setProducts(json.filter( (e) => {
                    return e.id_list === id
                  })))
        };
        fetchData();
      
    };

    if(products.length>0)
      return(
          <React.Fragment>
            <Lists lists={lists} mail={mail} onChange={getListProducts}/>
            <Products data={products} />
            <NewProd />
          </React.Fragment>
      )
    else
      return(
          <React.Fragment>
            <Lists lists={lists} mail={mail} onChange={getListProducts}/>
          </React.Fragment>
      )

}
