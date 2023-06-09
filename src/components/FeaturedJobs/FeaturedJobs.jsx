import React, {useEffect, useState } from 'react';
import './FeaturedJobs.css' 
import SingleJobFeatured from '../SingleJobFeatured/SingleJobFeatured';
const FeaturedJobs = () => { 
    const [jobs, setJobs] = useState([]);  
    const [vissible, setVissible] = useState(4)  
    const jobSlice = jobs.slice(0, vissible);

    //Show all handlar
    const showAll = () => {
        setVissible(jobs.length);
    }

    let btnVissible = vissible > 4 ? "hide" : "show";
    
    useEffect(() =>{
        fetch('featuredJob.json')
        .then(res => res.json())
        .then(data => setJobs(data))

    }, [])
 
    return (
        <section className='featured-area pt-10 md:pt-20 md:pb-20'> 
            <div className="container">
            <h2 className='text-center text-2xl md:text-4xl font-bold pb-4 text-black'>Featured Jobs</h2>
            <p className='text-center pb-7 block'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-6'> 
            
                 {
                    jobSlice.map(job => <SingleJobFeatured 
                        job={job}
                        key={job.id}
                        ></SingleJobFeatured>)
                } 
                
            </div>
            <div className='flex justify-center pt-10'>
                <button onClick={() => showAll()} className={`btn-view px-4 py-3 text-white ${btnVissible}`}>See All Jobs</button>
            </div>
            </div>
        </section>
    );
};

export default FeaturedJobs;