import React from 'react';

const Blog = () => {
    return (
        <section className='blog-area pt-10 pb-10 text-center'>
           <div className="container">
           <h1 className='text-center text-4xl text-black font-bold pb-5'>FQA</h1>
            <div className="faq-item mb-5 border p-5 md:w-3/5 m-auto">
                <h2 className='text-center text-2xl text-black font-semibold'>When should you use context API?</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quo amet inventore neque asperiores, consequatur saepe rerum commodi vero debitis.</p>
            </div>
            <div className="faq-item mb-5 border p-5 md:w-3/5 m-auto">
                <h2 className='text-center text-2xl text-black font-semibold'>What is a custom hook?</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quo amet inventore neque asperiores, consequatur saepe rerum commodi vero debitis.</p>
            </div>
            <div className="faq-item mb-5 border p-5 md:w-3/5 m-auto">
                <h2 className='text-center text-2xl text-black font-semibold'>What is useRef?</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quo amet inventore neque asperiores, consequatur saepe rerum commodi vero debitis.</p>
            </div>
            <div className="faq-item mb-5 border p-5 md:w-3/5 m-auto">
                <h2 className='text-center text-2xl text-black font-semibold'>What is useMemo?</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quo amet inventore neque asperiores, consequatur saepe rerum commodi vero debitis.</p>
            </div>
           </div>
        </section>
    );
};

export default Blog;