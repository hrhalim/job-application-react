import React from 'react';

const SingleJobCategory = ({jobCategory}) => {
    const {image, title, subTitle} = jobCategory;
    return (
        <div className='category-list'>
            <img src={image} alt="Icon" />
            <h3 className='pb-2'>{title}</h3>
            <p>{subTitle}</p>
        </div>
    );
};

export default SingleJobCategory;