import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="text-center pt-20">
           <h1 className="text-center text-5xl font-bold text-black">404</h1>
           <p className="text-center text-2xl text-black mb-5 mt-3">!Sorry Not Found</p>
           <Link to="/">
            <button className='btn btn-primary'>Back to Home</button>
           </Link>
        </div>
    );
};

export default ErrorPage;