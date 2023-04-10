import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BannerArea from '../JobDetailsHero/JobDetailsHero';
import JobDetailsHero from '../JobDetailsHero/JobDetailsHero';

const JobDetails = () => {
    const [jobDetails, setJobDetails] = useState([]);
    const id = useParams(); 
    const jobdetailsData = useLoaderData();  
    console.log(jobDetails);

    useEffect(() => {
        const findData = jobdetailsData.find(data => data.id === id.jobdetailsId);
        setJobDetails(findData) 
    }, []) 
    
    const {description, responsibilities, education, experience, phone, salary, title, email, location} = jobDetails;
    return ( 
        <div>
                <JobDetailsHero></JobDetailsHero>
                <div className='grid md:grid-cols-2 gap-6 container md:pt-24 md:pb-24'>
            <div>
                <p><strong>Job Description:</strong> {responsibilities} </p>
                <h4>Educational Requirements:</h4>
                <p>{education}</p>
                <h4>Experiences:</h4>
                <p>{experience}</p>
                <p><strong>Job Description:</strong> {description}</p>
            </div>
            <div className='siderbar'>
                 <div className='sidebar-inner'>
                    <h5>Apply Now</h5>
                    <p><strong>Salary :</strong>{salary}</p>
                    <p><strong>Job Title :</strong>{title}</p>
                    <h5>Contact Information</h5>
                    <p><strong>Phone :</strong>{phone}</p>
                    <p><strong>Email :</strong>{email}</p>
                    <p><strong>Address :</strong>{location}</p>
                 </div>
                <button>Apply Now</button> 
            </div>
        </div> 
        </div>
         
         
    );
};

export default JobDetails;