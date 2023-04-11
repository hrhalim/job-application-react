import React from 'react'; 
const HeroArea = () => {
    return (
        <section className='hero-area'>
            <div className='gap-7 grid md:grid-cols-2 items-center container'>
                <div className='hero-content block'>
                    <h1>One Step <br/> Closer To Your <span>Dream Job</span></h1>
                    <p className='mb-5 pt-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-started'>Get Started</button>
                </div>
                <div className='hero-img'>
                    <img src="https://i.ibb.co/gPLpRkc/hero-banner.png" alt="Image" /> 
                </div>
            </div>
        </section>
    );
};

export default HeroArea;