import React, { useState, useEffect } from 'react';

import Products from '../components/Products';
import NewProd from '../components/NewProd';
import Lists from '../components/Lists';

import useLists from '../hooks/useLists';

export default function List() {  

  //const  [lists, setLists] = useState([]);
  const  [products, setProducts] = useState([]);
  const  [product, setProduct] = useState([]);
  const  [listSel, setlistSel] = useState([]);
  const lists = useLists();

  const mail = localStorage.getItem('MailUser');

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

    const changeState = (e) => {
      let prod = products.filter( (p) => { return p.id == e.target.name})
      let estado = ""; if(e.target.checked) estado = "checked";
      
      const url = `http://localhost:3004/products/${e.target.name}`;
        (async () => {
            const rawResponse = await fetch(url, {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ 
                  estado: estado,
                  id_list: listSel,
                  nombre: prod[0].nombre
                })
            });
            console.log(rawResponse);
          })();
    }

    if(products.length>0)
      return(
          <React.Fragment>
            <Lists lists={lists} mail={mail} onChange={getListProducts}/>
            <Products data={products} onClick={changeState}/>
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
