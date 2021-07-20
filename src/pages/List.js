import React, { useState, useEffect } from 'react';
import md5 from 'md5';

import Element from '../components/Element';
import Search from '../components/Search';
import Lists from '../components/Lists';

export default function List(props) {  

    const [advice, setAdvice] = useState(0);

    const url = "https://antonioruiz.net/apps/listadecompra/api";
    const hash = md5("tabarrita120@hotmail.com");
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

    //const mail = props.location.params.email || '';
    const mail = "tabarrita120@hotmail.com";

    return(
        <React.Fragment>
            <Lists lists={advice} mail={mail}/>
            {/*advice && advice.map((e, key) => {
                return(<Element nombre={e.nombre} id={e.id} />)
            })*/}
            <Search/>
        </React.Fragment>
    )


}
