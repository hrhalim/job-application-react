import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const SingleJobFeatured = ({job}) => {  
    const {id, image, title, company, location, salary, jobTypes}  = job;
    return ( 
        <div className='job-item border rounded-md p-10'>
            <img src={image} alt="Logo" />
            <h3 className='text-2xl font-semibold pt-4'>{title}</h3>
            <h4 className='pb-2'>{company}</h4>
            <div className='btn-jobtype flex gap-4'>
                {
                jobTypes.map((jobtype, index) =>  <span
                    key={index}
                     >
                    {jobtype}
                    
                    </span>)
                } 
            </div> 
            <div className='flex gap-4 pb-4 pt-4'>
                <p className='flex gap-2'><span><MapPinIcon className="h-6 w-6"/></span>{location}</p>
                <p className='flex gap-2'><span><CurrencyDollarIcon className="h-6 w-6"/></span>Salary : {salary}</p>
            </div>
            <Link to={`/jobdetails/${id}`}>
            <button className='btn-view px-3 py-2 text-white'>View Details</button>
            </Link>
        </div> 
    );
};

export default SingleJobFeatured;