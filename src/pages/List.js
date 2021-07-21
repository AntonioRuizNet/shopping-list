import React, { useState, useEffect } from 'react';
import md5 from 'md5';

import Products from '../components/Products';
import Search from '../components/Search';
import Lists from '../components/Lists';

export default function List() {  

  const  [lists, setLists] = useState([]);
  const  [products, setProducts] = useState([]);
  const mail = localStorage.getItem('MailUser');

    useEffect(() => {
        const url = "https://antonioruiz.net/apps/listadecompra/api";
        const hash = md5(localStorage.getItem('MailUser'));
        const url_final = `${url}/get_public_list/${hash}`;
        const fetchData = async () => {
          try {
            const response = await fetch(url_final);
            const json = await response.json();
            setLists(json)
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchData();
    }, []);

    const updateProducts = (e) => {
        const id = e.target.value;
        const url = "https://antonioruiz.net/apps/listadecompra/api";
        const hash = md5(localStorage.getItem('MailUser'));
        const url_final = `${url}/get_public_product_list/${hash}/${id}`;

        let fetchData = async () => {
          await fetch(url_final)
                  .then(response => response.json())
                  .then(json => console.log(json))
                  .then(json => setProducts(json))
        };
        fetchData();
      
    };


    return(
        <React.Fragment>
          {console.log(products)}
          <Lists lists={lists} mail={mail} onChange={updateProducts}/>

          {/*products.map( (e) => {
              <Product nombre={e.nombre} />
          })*/}

          <Search/>
        </React.Fragment>
    )


}
