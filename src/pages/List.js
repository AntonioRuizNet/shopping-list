import React, { useState, useEffect } from 'react';
import md5 from 'md5';

import Element from '../components/Element';
import Search from '../components/Search';
import Lists from '../components/Lists';
import UserProfile from '../components/UserProfile';

export default function List(props) {  

    const [advice, setAdvice] = useState(0);
    const mail = UserProfile.getEmail();
    const sample = 0;

    const url = "https://antonioruiz.net/apps/listadecompra/api";
    const hash = md5(mail);
    const url_final = url+'/get_public_list/'+hash;
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url_final);
            const json = await response.json();
            setAdvice(json)
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);


    return(
        <React.Fragment>
            {console.log(mail)}
            <Lists lists={advice} mail={mail}/>
            <Element nombre={sample} id={sample} />
            <Search/>
        </React.Fragment>
    )


}
