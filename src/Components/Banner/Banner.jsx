import React from 'react';
import bookImg from '../../image/Banner.png'
const Banner = () => {
    return (
        <div className="hero bg-gray-100 container mx-auto mt-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bookImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold pb-5">Books to freshen up <br /><span className='text-green-500'> your bookshelf</span></h1>
                   
                    <button className="btn btn-success">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;