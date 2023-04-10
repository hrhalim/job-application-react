import React from 'react';

const SingleJobCategory = ({jobCategory}) => {
    const {image, title, subTitle} = jobCategory;
    return (
        <div className='category-list'>
            <img src={image} alt="Icon" />
            <h3>{title}</h3>
            <p>{subTitle}</p>
        </div>
    );
};

export default SingleJobCategory;