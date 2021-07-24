import React, { useState, useEffect } from 'react';

import Products from '../components/Products';
import NewProd from '../components/NewProd';
import Lists from '../components/Lists';

export default function List() {  

  const  [lists, setLists] = useState([]);
  const  [products, setProducts] = useState([]);
  const  [product, setProduct] = useState([]);
  const  [listSel, setlistSel] = useState([]);

  const mail = localStorage.getItem('MailUser');

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

    const getListProducts = (e) => {
        const id = e.target.value;
        setlistSel(id);
        const url = "http://localhost:3004/products";
        let fetchData = async () => {
          await fetch(url)
                  .then(response => response.json())
                  .then(json => setProducts(json.filter( (e) => {
                    return e.id_list === id
                  })))
        };
        fetchData();
      
    };

    const onChange = (e) => {
      setProduct(e.target.value);
    }

    const onSubmit = (e) => {
      e.preventDefault();

      const url = "http://localhost:3004/products";
        (async () => {
            const rawResponse = await fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  id: '', 
                  id_list: listSel,
                  nombre: product,
                  estado: '1'
                })
            });
            console.log(rawResponse);
          })();
    }

    if(products.length>0)
      return(
          <React.Fragment>
            <Lists lists={lists} mail={mail} onChange={getListProducts}/>
            <Products data={products} />
            <NewProd onSubmit={onSubmit} onChange={onChange}/>
          </React.Fragment>
      )
    else
      return(
          <React.Fragment>
            <Lists lists={lists} mail={mail} onChange={getListProducts}/>
          </React.Fragment>
      )

}
