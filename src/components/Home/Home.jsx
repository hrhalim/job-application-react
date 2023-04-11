import React from 'react'; 
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import './Home.css'
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import HeroArea from '../HeroArea/HeroArea';

const Home = () => {
    return (
        <div> 
         <HeroArea></HeroArea>   
         <JobCategoryList></JobCategoryList>
         <FeaturedJobs></FeaturedJobs>
        </div>

        
        
    );
    
};

export default Home;