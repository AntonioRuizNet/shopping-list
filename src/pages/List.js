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

    const updateProducts = (e) => {
      const id = e.target.value;

        const url = "https://antonioruiz.net/apps/listadecompra/api";
        const hash = md5(UserProfile.getEmail());
        const url_final = `${url}/get_public_product_list/${hash}/${id}`;
        //console.log(url_final);
        const fetchData = async () => {
          try {
            const response = await fetch(url_final);
            const json = await response.json();
            UserProfile.setList(json)
            //setProducts(json);
            //console.log(UserProfile.getList()) //Aqui se muestra correctamente
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchData();
      
    };


    return(
        <React.Fragment>
          <Lists lists={lists} mail={mail} onChange={updateProducts}/>
          <Products nombre={UserProfile.getList()} />
          <Search/>
        </React.Fragment>
    )


}
