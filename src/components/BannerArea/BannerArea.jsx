import React from 'react';
import './BannerArea.css'

const BannerArea = ({children}) => {   
    return (
        <section className='banner-area'>
        <div className="container">
           <h1>{children}</h1>
        </div>
        </section>
    );
};

export default BannerArea;