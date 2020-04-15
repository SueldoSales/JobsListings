import React, { useEffect } from 'react';

function Header() {
    
    let storageItems = JSON.parse(localStorage.getItem('allData'))
    let filter = '';

    if (storageItems === null) {
        filter = "is-hidden";
    }

    console.log(filter);

    const clearSearch = () => {
        localStorage.clear();
        window.location.replace('/');
    }

    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className={'box ' + filter}>
                        <div className="field is-grouped is-grouped-multiline">
                            <div className="control">
                                <div className="tags has-addons">
                                    <span className="tag is-success is-light is-medium">Frontend</span>
                                    <a className="tag is-delete is-primary is-medium"></a>
                                </div>
                            </div>

                            <div className="control">
                                <div className="tags has-addons">
                                    <span className="tag is-success is-light is-medium">Backend</span>
                                    <a className="tag is-delete is-primary is-medium"></a>
                                </div>
                            </div>

                            <p onClick={() => clearSearch()} className="clearSearch is-pulled-right">Clear</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;