import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';  
import { MapPinIcon, CurrencyDollarIcon, PhoneIcon, EnvelopeIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import './JobDetails.css'
import { addToDb } from '../../Utilise/Utilse';
import BannerArea from '../BannerArea/BannerArea';

const JobDetails = () => {
    
    const [jobDetails, setJobDetails] = useState([]);
    const JobId = useParams(); 
    const jobdetailsData = useLoaderData();
       
    const {id, description, responsibilities, education, experience, phone, salary, title, email, location} = jobDetails;

    useEffect(() => {
        const findData = jobdetailsData.find(data => data.id === JobId.jobId);
        setJobDetails(findData) 
    }, []) 


    const applyJob = (id) => {
        addToDb(id)
    } 
    
    

    return ( 
        
        <div> 
                <BannerArea></BannerArea>
                <div className='job-details grid gap-6 container md:pt-24 md:pb-24'>
            <div>
                <p><strong>Job Description:</strong> {responsibilities} </p>
                <h4><strong>Educational Requirements:</strong></h4>
                <p>{education}</p>
                <h4><strong>Experiences:</strong></h4>
                <p>{experience}</p>
                <p><strong>Job Description:</strong> {description}</p>
            </div>
            <div className='siderbar'>
                 <div className='sidebar-inner'>
                    <h5 className='text-black text-1xl pb-4 font-bold border-b-2 mb-4'>Job Details</h5>
                    <p className='pb-3 flex gap-2'><CurrencyDollarIcon className="h-6 w-6"/><strong>Salary: </strong>{salary}</p>
                    <p className='pb-3 flex gap-2'><AcademicCapIcon className="h-6 w-6"/><strong>Job Title: </strong>{title}</p>
                    <h5 className='text-black text-1xl pt-4 pb-4 font-bold border-b-2 mb-4'>Contact Information</h5>
                    <p className='pb-3 flex gap-2'><PhoneIcon className="h-6 w-6"/><strong>Phone: </strong>{phone}</p>
                    <p className='pb-3 flex gap-2'><EnvelopeIcon className="h-6 w-6"/><strong>Email: </strong>{email}</p>
                    <p className='pb-3 flex gap-2'><MapPinIcon className="h-6 w-6"/><strong>Address: </strong>{location}</p>
                 </div>
                <button onClick={() => applyJob(id)} className='btn-apply'>Apply Now</button> 
            </div>
        </div> 
        </div>
         
         
    );
};

export default JobDetails;