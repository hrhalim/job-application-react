import React from 'react';
import BannerArea from '../BannerArea/BannerArea';

const Blog = () => {
    return (
        <div>
            <BannerArea>FQA</BannerArea>
            <section className='blog-area pt-10 pb-10 text-center'>
           <div className="container"> 
            <div className="faq-item mb-5 border p-5 md:w-3/5 m-auto">
                <h2 className='text-center text-2xl text-black font-semibold'>When should you use context API?</h2>
                <p className='text-left'>Context API is a global variable system  in React that allows data to be passed down through a component tree without having to pass props down manually. Context API is useful when we have data that is needed by many components in our application,  then easily data pass by Context API. whice by easily we can use this any components.  <br />
                <strong>Authentication:</strong> we can use Context API to provide an authentication object to all components in your application.
                <br />
                <strong>Language switching:</strong> If we supports our applications multiple languages, we can use Context API.
                <br />
                in fine, Context API is useful when you have data that needs to be shared by multiple components in your application. it is very helful</p>
            </div>
            <div className="faq-item mb-5 border p-5 md:w-3/5 m-auto">
                <h2 className='text-center text-2xl text-black font-semibold'>What is a custom hook?</h2>
                <p>React Custom hooks It allows you to encapsulate and reuse stateful logic in your React components, making them more reusable, modular, and easier to understand. whice by other problem soloved and easy work we can do this. so react hooks is very importants create building on website.</p>
            </div>
            <div className="faq-item mb-5 border p-5 md:w-3/5 m-auto">
                <h2 className='text-center text-2xl text-black font-semibold'>What is useRef?</h2>
                <p>The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue).  and It allows you to access and manipulate the DOM element directly, without having to use state or props, which can improve performance and reduce unnecessary renders easily.</p>
            </div>
            <div className="faq-item mb-5 border p-5 md:w-3/5 m-auto">
                <h2 className='text-center text-2xl text-black font-semibold'>What is useMemo?</h2>
                <p>The useMemo is a hook used in the functional component of react that returns a memoized value. and  a memoized function members the results of output for a given set of inputs. and whenever in the React component, the state and props do not change the component and the component does not re-render. the useMemo hook is used to improve performance in our React application.</p>
            </div>
           </div>
            </section>
        </div>
        
    );
};

export default Blog;