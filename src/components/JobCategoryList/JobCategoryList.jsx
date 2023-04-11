import React, { useEffect, useState } from 'react';
import SingleJobCategory from '../SingleJobCategory/SingleJobCategory';
 
const JobCategoryList = () => {

    const [jobCategorys, setJobCategory] = useState([]);

    useEffect(() =>{
        fetch('jobCategory.json')
        .then(res => res.json())
        .then(data => setJobCategory(data))

    }, [])

    
    return (
         <section className='job-category'>
            <h2>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-4 gap-6'>
            {
                jobCategorys.map(jobCategory => <SingleJobCategory
                jobCategory={jobCategory}
                key={jobCategory.id}
                > 
                </SingleJobCategory>)
            }
                 
            </div>
         </section>
    );
};

export default JobCategoryList;