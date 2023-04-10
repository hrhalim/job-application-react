import React, { useState } from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import './ApplyJobs.css' 

const ApplyJobs = () => {   
    return (
        <div className='py-24 container'> 
            <div className='job-item border rounded-md flex justify-between items-center p-7 mb-12'>
             <div className='jobitem-left flex gap-4 items-center'>
                <div className='job-img'>
                    <img src="https://i.ibb.co/wLq3JLx/justeat.png" alt="Logo" />
                </div>
                <div className='job-content'>
                    <h3 className='text-2xl font-semibold pt-4'>title</h3>
                    <h4 className='pb-2'>company</h4>
                    <div className='btn-jobtype flex gap-4'> 
                    </div> 
                    <div className='flex gap-4 pb-4 pt-4'>
                        <p className='flex gap-2'><span><MapPinIcon className="h-6 w-6"/></span>Locations</p>
                        <p className='flex gap-2'><span><CurrencyDollarIcon className="h-6 w-6"/></span>Salary : dfsfaf</p>
                    </div>
                </div> 
             </div>
            <div className='viewbtn-area'>
                <Link>
                <button className='btn-view px-3 py-2 text-white'>View Details</button>
                </Link>
            </div>
            </div> 
            <div className='job-item border rounded-md flex justify-between items-center p-7'>
             <div className='jobitem-left flex gap-4 items-center'>
                <div className='job-img'>
                    <img src="https://i.ibb.co/wLq3JLx/justeat.png" alt="Logo" />
                </div>
                <div className='job-content'>
                    <h3 className='text-2xl font-semibold pt-4'>title</h3>
                    <h4 className='pb-2'>company</h4>
                    <div className='btn-jobtype flex gap-4'> 
                    </div> 
                    <div className='flex gap-4 pb-4 pt-4'>
                        <p className='flex gap-2'><span><MapPinIcon className="h-6 w-6"/></span>Locations</p>
                        <p className='flex gap-2'><span><CurrencyDollarIcon className="h-6 w-6"/></span>Salary : dfsfaf</p>
                    </div>
                </div> 
             </div>
            <div className='viewbtn-area'>
                <Link>
                <button className='btn-view px-3 py-2 text-white'>View Details</button>
                </Link>
            </div>
            </div> 
        </div>
    );
};

export default ApplyJobs;