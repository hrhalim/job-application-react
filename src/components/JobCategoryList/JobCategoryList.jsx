import React from 'react';

const JobCategoryList = () => {
    return (
         <section className='job-category'>
            <h2>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-4 gap-6'>
                <div className=''>
                    <img src="https://ibb.co/KjPD0sD" alt="Icon" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className=''>
                    <img src="https://ibb.co/KjPD0sD" alt="Icon" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className=''>
                    <img src="https://ibb.co/KjPD0sD" alt="Icon" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className=''>
                    <img src="https://ibb.co/KjPD0sD" alt="Icon" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
            </div>
         </section>
    );
};

export default JobCategoryList;