import React, { useState, useEffect } from 'react';
import md5 from 'md5';

import Products from '../components/Products';
import Search from '../components/Search';
import Lists from '../components/Lists';
import UserProfile from '../components/UserProfile';

export default function List() {  

  const  [lists, setLists] = useState([]);
  const  [products, setProducts] = useState([]);
  const mail = UserProfile.getEmail();

    useEffect(() => {
        const url = "https://antonioruiz.net/apps/listadecompra/api";
        const hash = md5(UserProfile.getEmail());
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

    const updateProducts = () => setProducts(UserProfile.getList());


    return(
        <React.Fragment>
          <Lists lists={lists} mail={mail} onChange={updateProducts}/>
          <Products nombre={products} />
          <Search/>
        </React.Fragment>
    )


}
