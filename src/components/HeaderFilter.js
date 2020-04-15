import React, {useEffect} from 'react';

function HeaderFilter() {

    let result = JSON.parse(localStorage.getItem('allData'));

    useEffect(() => {
        result = JSON.parse(localStorage.getItem('allData'));
    })

    let searchItems = [...result];

    const clearSearch = () => {
        localStorage.clear();
        window.location.replace('/');
    }

    console.log(searchItems);

    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="box">
                        <div className="field is-grouped is-grouped-multiline">
                        {
                            searchItems.map(item => (
                                <div className="control">
                                    <div className="tags has-addons">
                                        <span className="tag is-success is-light is-medium">{item}</span>
                                        <a className="tag is-delete is-primary is-medium"></a>
                                    </div>
                                </div>
                            ))
                        }

                            <p onClick={() => clearSearch()} className="clearSearch is-pulled-right">Clear</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeaderFilter;