import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';

import MiniSearch from 'minisearch';

function JobsSearch() {

    const [jobs, setJobs] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        api.get('data.json')
            .then(response => {
                setJobs(response.data);
            })
    }, []);

    useEffect(() => {
        // const result = JSON.parse(localStorage.getItem('allData'));

        // result.map(item => {
        //    return search(item + ' ');
        // })
        // searchItems.map(item => {
        //     return search(item + ' ');
        // });
        // search(searchArray);
    });

    let result = JSON.parse(localStorage.getItem('allData'));
    let searchItems = [...result];
    searchItems.map(item => {
        let searchArray = (item + ' ');
    })
    // console.log(searchItems);

    const dataStorage = (data) => {        

        searchItems.push(data);
        localStorage.setItem('allData', JSON.stringify(searchItems));

        // const result = JSON.parse(localStorage.getItem('allData'));

        searchItems.map(item => {
            let sueldoItem = (item + ' ');
            console.log(sueldoItem);
            return search(item + ' ');
        })
    }

    const search = (items) => {
        let miniSearch = new MiniSearch({
            fields: ['jobrole', 'languages'],
            extractField: (document, fieldName) => {
                // Access nested fields
                const value = fieldName.split('.').reduce((doc, key) => doc && doc[key], document)
                // If field value is an array, join by space
                return Array.isArray(value) ? value.join(' ') : value
            }
        });
    
        // console.log(jobs);
        miniSearch.addAll(jobs);
    
        let results = miniSearch.search(items);
    
        // console.log(results);
    }

    return (
        <Fragment>
        { 
            jobs.map(job => (
                <div key={job.id} className="box" style={job.featured ? {borderLeft: '6px #5DA5A4 solid'} : {borderLeft: '6px #FFF solid'}}>
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-96x96">
                                <img className="is-rounded" src={job.workimage} alt={'imagem de ' + job.workname} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                <strong className="workName">{job.workname}</strong> 
                                {
                                    job.new ?
                                    (<span className="tag is-primary is-rounded">NEW!</span>)
                                    :
                                    ('')
                                }
                                {
                                    job.featured ?
                                    (<span className="tag is-dark is-rounded">FEATURED</span>)
                                    :
                                    ('')
                                }
                                <br />
                                <strong className="jobName">{job.jobdescription}</strong>
                                <br />
                                {job.posted} <i className="fas fa-circle"></i> {job.worktime} <i className="fas fa-circle"></i> {job.workplace}
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <span onClick={() => dataStorage(job.jobrole)} value={job.jobrole} className="tag is-success is-light is-medium">{job.jobrole}</span>
                            {
                                job.languages.map(language => (
                                    <Link to="/search"><span onClick={() => dataStorage(language)} value={language} className="tag is-success is-light is-medium">{language}</span></Link>
                                ))
                            }
                        </div>
                    </article>
                </div>
            ))
        }
        </Fragment>
    );
}

export default JobsSearch;