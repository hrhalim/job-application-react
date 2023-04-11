import ApplyJobItem from '../ApplyJobItem/ApplyJobItem'; 
import './ApplyJobs.css' 
 
import {useLoaderData } from 'react-router-dom';
const ApplyJobs = () => {    
    const Jobitems = useLoaderData();  
    return (
        <div className='py-24 container'>  
             {
              Jobitems.map(jobItem => <ApplyJobItem
                jobItem={jobItem}
                key={jobItem.id}
              ></ApplyJobItem>)
             } 
              
        </div>
    );
};

export default ApplyJobs;