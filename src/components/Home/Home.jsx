import React from 'react';
import HeroBanner from '../../assets/hero-banner.png' 
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import './Home.css'

const Home = () => {
    return (
        <div className='container'>
        <section className='hero-area md:pb-32'>
            <div className='gap-7 grid md:grid-cols-2 items-center'>
                <div className='hero-content block'>
                    <h1>One Step <br/> Closer To Your <span>Dream Job</span></h1>
                    <p className='mb-5 pt-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-started'>Get Started</button>
                </div>
                <div className='hero-img'>
                    <img src={HeroBanner} alt="Image" /> 
                </div>
            </div>
        </section>
        <section className='job-category'>
            <h2 className='text-center text-4xl font-bold pb-4 text-black'>Job Category List</h2>
            <p className='text-center pb-7 block'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='category-list'>
                    <img src="https://i.ibb.co/JR1qBpq/icon-1.png" alt="Icon" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className='category-list'>
                    <img src="https://i.ibb.co/JR1qBpq/icon-1.png" alt="Icon" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className='category-list'>
                    <img src="https://i.ibb.co/JR1qBpq/icon-1.png" alt="Icon" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className='category-list'>
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