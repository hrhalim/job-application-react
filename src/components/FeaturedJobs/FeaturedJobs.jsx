import React from 'react';
import './FeaturedJobs.css'
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const FeaturedJobs = () => {
    return (
        <div> 
            <h2 className='text-center text-4xl font-bold pb-4 text-black'>Featured Jobs</h2>
            <p className='text-center pb-7 block'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-6'>
                <div className='job-item border rounded-md p-10'>
                    <img src="https://i.ibb.co/QDyq34x/images.png" alt="Logo" />
                    <h3 className='text-2xl font-semibold pt-4'>Technical Database Engineer</h3>
                    <h4 className='pb-2'>Google LLC</h4>
                    <div className='btn-jobtype flex gap-4'>
                        <span>Remote</span> 
                        <span>Full Time</span> 
                    </div> 
                    <div className='flex gap-4 pb-4 pt-4'>
                        <p className='flex gap-2'><span><MapPinIcon className="h-6 w-6"/></span> Dhaka, Bangladesh</p>
                        <p className='flex gap-2'><span><CurrencyDollarIcon className="h-6 w-6"/></span>Salary : 100K - 150K</p>
                    </div>
                    <button className='btn-view px-3 py-2 text-white'>View Details</button>
                </div>
                <div className='job-item border rounded-md p-10'>
                    <img src="https://i.ibb.co/QDyq34x/images.png" alt="Logo" />
                    <h3 className='text-2xl font-semibold pt-4'>Technical Database Engineer</h3>
                    <h4 className='pb-2'>Google LLC</h4>
                    <div className='btn-jobtype flex gap-4'>
                        <span>Remote</span> 
                        <span>Full Time</span> 
                    </div> 
                    <div className='flex gap-4 pb-4 pt-4'>
                        <p className='flex gap-2'><span><MapPinIcon className="h-6 w-6"/></span> Dhaka, Bangladesh</p>
                        <p className='flex gap-2'><span><CurrencyDollarIcon className="h-6 w-6"/></span>Salary : 100K - 150K</p>
                    </div>
                    <button className='btn-view px-3 py-2 text-white'>View Details</button>
                </div>
                <div className='job-item border rounded-md p-10'>
                    <img src="https://i.ibb.co/QDyq34x/images.png" alt="Logo" />
                    <h3 className='text-2xl font-semibold pt-4'>Technical Database Engineer</h3>
                    <h4 className='pb-2'>Google LLC</h4>
                    <div className='btn-jobtype flex gap-4'>
                        <span>Remote</span> 
                        <span>Full Time</span> 
                    </div> 
                    <div className='flex gap-4 pb-4 pt-4'>
                        <p className='flex gap-2'><span><MapPinIcon className="h-6 w-6"/></span> Dhaka, Bangladesh</p>
                        <p className='flex gap-2'><span><CurrencyDollarIcon className="h-6 w-6"/></span>Salary : 100K - 150K</p>
                    </div>
                    <button className='btn-view px-3 py-2 text-white'>View Details</button>
                </div>
            </div>
            <div className='text-center pt-10'>
                <button className='btn-view px-4 py-3 text-white'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;