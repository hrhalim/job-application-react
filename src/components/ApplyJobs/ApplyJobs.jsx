import { useState, useEffect } from 'react';
import ApplyJobItem from '../ApplyJobItem/ApplyJobItem'; 
import BannerArea from '../BannerArea/BannerArea';
import './ApplyJobs.css' 
 
import {useLoaderData } from 'react-router-dom';   

const ApplyJobs = () => {    
    const Jobitems = useLoaderData();   
    const [saveCart, setSaveCart] = useState(Jobitems);
    const [filterData, setFilterData] = useState([]);  

    useEffect(() => {
      setFilterData(saveCart);
    }, []);

    const setRightData = (e) => {
      let value = e.target.value;
      let setArrayData = [];
      value === "All"
        ? (setArrayData = saveCart)
        : saveCart.map((el) => {
            let data = el.jobTypes.find((ell) => ell === value);
            if (data) {
              setArrayData.push(el);
            }
          });
      setFilterData(setArrayData);
    };
  
    return (
        <div>
        <BannerArea>Applied Jobs</BannerArea>
        <div className='mt-20'>  
           <div className='container'>
           <div className='flex justify-end pb-8'>

           <select onChange={(e) => setRightData(e)} id="jobdata">
              <option value="All">Filter By</option> 
              <option value="Remote">Remote</option>
              <option value="Full-time">Full-time</option> 
              <option value="Onsite">Onsite</option> 
            </select> 

            </div>
              {
                filterData &&
                filterData.length &&
                filterData.map(jobItem => <ApplyJobItem
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