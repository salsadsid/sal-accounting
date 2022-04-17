import React from 'react';
import everyday from '../../../images/SL-080420-33360-35.jpg'
import everyday1 from '../../../images/20944180.jpg'
import everyday2 from '../../../images/3545757.jpg'
import everyday3 from '../../../images/6155293.jpg'
import './Capabilities.css'
const Capabilities = () => {
    return (
        <div id='capabilities' className='container'>
            <h1 className='text-center my-4'>My Capabilities</h1>
            <div className='capabilities'>
                <div className='border border-2'>
                    <img src={everyday} alt="" />
                    <h4 className='text-center'>24/7</h4>
                </div>
                <div className='border border-2'>
                    <img src={everyday1} alt="" />
                    <h4 className='text-center'>Planning</h4>
                </div>
                <div className='border border-2'>
                    <img src={everyday3} alt="" />
                    <h4 className='text-center'>Quality Control</h4>
                </div>
                <div className='border border-2'>
                    <img src={everyday2} alt="" />
                    <h4 className='text-center'>Marketing</h4>
                </div>
            </div>
        </div>
    );
};

export default Capabilities;