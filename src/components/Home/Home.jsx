import React from 'react';
import HeroBanner from '../../assets/hero-banner.png' 
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
        <section className='hero-area gap-7 grid md:grid-cols-2'>
            <div className='hero-content'>
                <h1>One Step Closer To Your <span>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className=''>Get Started</button>
            </div>
            <div className='hero-img'>
                <img src={HeroBanner} alt="Image" /> 
            </div>
        </section>
        <section className='job-category'>
            <h2>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className=''>
                    <img src="https://i.ibb.co/JR1qBpq/icon-1.png" alt="Icon" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className=''>
                    <img src="https://i.ibb.co/JR1qBpq/icon-1.png" alt="Icon" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className=''>
                    <img src="https://i.ibb.co/JR1qBpq/icon-1.png" alt="Icon" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className=''>
                    <img src="https://i.ibb.co/JR1qBpq/icon-1.png" alt="Icon" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
            </div>
         </section>
         <FeaturedJobs></FeaturedJobs>
        </div>

        
        
    );
    
};

export default Home;