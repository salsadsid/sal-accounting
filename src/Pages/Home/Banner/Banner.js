import React from 'react';
import banner from '../../../images/banner.jpg';
const Banner = () => {
    return (
        <div className='w-100'>
            <img className='w-100' style={{ height: "500px" }} src={banner} alt="" />
        </div>
    );
};

export default Banner;