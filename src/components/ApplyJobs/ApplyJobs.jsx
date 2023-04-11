import ApplyJobItem from '../ApplyJobItem/ApplyJobItem';
import { getJobItem } from '../Utilise/Utilse';
import './ApplyJobs.css' 
import { useEffect, useState } from 'react';

const ApplyJobs = () => {   
    
    const [jobItems, setJobItm] = useState([])
    const [cart, setCart] = useState([]) 
    useEffect(() =>{
        fetch('featuredJob.json')
        .then(res => res.json())
        .then(data => setJobItm(data));
    }, []) 

    useEffect(() => {
        const storedCart = getJobItem(); 
        const savedCart = []; 
        for (const items in storedCart) { 
            const addedProduct = cart.find(jobItem => console.log(jobItem))
            console.log(addedProduct);
            if (addedProduct) {
                savedCart.push(addedProduct);
            } 
        } 

        setCart(savedCart);

    }, [])


    return (
        <div className='py-24 container'> 
             
             {
               jobItems.map(jobItem => <ApplyJobItem
                jobItem={jobItem}
                key={jobItem.id}
               > 
               </ApplyJobItem> ) 
             }
              
        </div>
    );
};

export default ApplyJobs;