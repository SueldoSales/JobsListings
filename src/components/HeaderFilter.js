import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";

function HeaderFilter() {

    let history = useHistory();

    let result = JSON.parse(localStorage.getItem('allData'));

    let searchItems = [...result];

    useEffect(() => {
        result = JSON.parse(localStorage.getItem('allData'));
    })


    const deleteStorageItem = (item) => {
        for( var i = 0; i < searchItems.length; i++){ 
            if ( searchItems[i] === item) { 
                searchItems.splice(i, 1);
                localStorage.setItem('allData', JSON.stringify(searchItems));
            }
        }
        
        if (searchItems.length > 0) {
            window.location.reload(false);
        } else {
            history.push("/");
        }
        
    }

    const clearSearch = () => {
        localStorage.clear();
        history.push("/");
    }

    console.log(searchItems);

    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="box">
                        <div className="columns is-mobile">
                            <div className="column field is-grouped is-grouped-multiline">
                            {
                                searchItems.map(item => (
                                    <div className="control">
                                        <div className="tags has-addons">
                                            <span className="tag is-success is-light is-medium">{item}</span>
                                            <a onClick={() => deleteStorageItem(item)} className="tag is-delete is-primary is-medium"></a>
                                        </div>
                                    </div>
                                ))
                            }

                                
                            </div>
                            <div className="column is-one-fifth">
                                <p onClick={() => clearSearch()} className="clearSearch is-pulled-right">Clear</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeaderFilter;