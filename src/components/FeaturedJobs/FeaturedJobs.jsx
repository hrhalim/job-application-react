import React, {useEffect, useState } from 'react';
import './FeaturedJobs.css' 
import SingleJobFeatured from '../SingleJobFeatured/SingleJobFeatured';
const FeaturedJobs = () => { 
    const [jobs, setJobs] = useState([]); 
    const [vissible, setVissible] = useState(4)
    
    useEffect(() =>{
        fetch('featuredJob.json')
        .then(res => res.json())
        .then(data => setJobs(data))

    }, [])
 
    return (
        <div className='featured-area md:pt-20 md:pb-20'> 
            <h2 className='text-center text-4xl font-bold pb-4 text-black'>Featured Jobs</h2>
            <p className='text-center pb-7 block'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-6'> 
            
                 {
                    jobs.slice(0, 4).map(job => <SingleJobFeatured 
                        job={job}
                        key={job.id}
                        ></SingleJobFeatured>)
                } 
                
            </div>
            <div className='text-center pt-10'>
                <button className='btn-view px-4 py-3 text-white'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;