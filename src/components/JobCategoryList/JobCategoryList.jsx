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
         <section className='job-category pt-8 md:pt-20'> 
            <div className="container">
            <h2 className='text-center text-2xl md:text-4xl font-bold pb-4 text-black'>Job Category List</h2>
            <p className='text-center pb-7 block'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-4 gap-6'>
            {
                jobCategorys.map(jobCategory => <SingleJobCategory
                jobCategory={jobCategory}
                key={jobCategory.id}
                > 
                </SingleJobCategory>)
            }
            </div>     
            </div>
         </section>
    );
};

export default JobCategoryList;