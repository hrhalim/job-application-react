import ApplyJobItem from '../ApplyJobItem/ApplyJobItem'; 
import BannerArea from '../BannerArea/BannerArea';
import './ApplyJobs.css' 
 
import {useLoaderData } from 'react-router-dom';
const ApplyJobs = () => {    
    const Jobitems = useLoaderData();  

    const handleFilter = (event) => {
      console.log(event.value);
    }
    return (
        <div>
        <BannerArea>Applied Jobs</BannerArea>
        <div className='mt-20'>  
           <div className='container'>
           <div className='flex justify-end pb-8'>
              <select onChange={() => handleFilter()} id="jobdata">
                <option>Filter By</option>
                <option value="Remote">Remote</option>
                <option value="Onsite">Onsite</option>  
              </select>
            </div>
              {
                Jobitems.map(jobItem => <ApplyJobItem
                  jobItem={jobItem}
                  key={jobItem.id}
                ></ApplyJobItem>)
              }  
          </div>
           </div>
        </div>
        
    );
};

export default ApplyJobs;