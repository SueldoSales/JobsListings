import React from 'react';

function Header() {
    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="box">
                        <div class="field is-grouped is-grouped-multiline">
                            <div class="control">
                                <div class="tags has-addons">
                                    <span class="tag is-success is-light is-medium">Frontend</span>
                                    <a class="tag is-delete is-primary is-medium"></a>
                                </div>
                            </div>

                            <div class="control">
                                <div class="tags has-addons">
                                    <span class="tag is-success is-light is-medium">Backend</span>
                                    <a class="tag is-delete is-primary is-medium"></a>
                                </div>
                            </div>

                            <p className="clearSearch is-pulled-right">Clear</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;