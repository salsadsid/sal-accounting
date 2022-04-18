import React from 'react';
import anytime from '../../../images/capabilities/anytime.jpg'
import planning from '../../../images/capabilities/planning.jpg'
import timemanagement from '../../../images/capabilities/time-management.jpg'
import marketing from '../../../images/capabilities/marketing.jpg'
import systemanalysis from '../../../images/capabilities/symtemanalysis.jpg'
import criticalthinking from '../../../images/capabilities/criticalthinker.jpg'
import './Capabilities.css'
const Capabilities = () => {
    return (
        <div id='capabilities' className='container my-4'>
            <h1 className='text-center my-4'>Capabilities</h1>
            <div className='row row-cols-1 row-cols-md-3 capabilities-container g-3'>
                <div className="col">
                    <div className='border border-2 d-flex flex-column align-items-center justify-content-center rounded shadow-sm'>
                        <img src={anytime} alt="" />
                        <h4 className='text-center'>24/7</h4>
                    </div>
                </div>
                <div className="col">
                    <div className='border border-2 d-flex flex-column align-items-center justify-content-center rounded shadow-sm'>
                        <img src={planning} alt="" />
                        <h4 className='text-center'>Planning</h4>
                    </div>
                </div>
                <div className="col">
                    <div className='border border-2 d-flex flex-column align-items-center justify-content-center rounded shadow-sm'>
                        <img src={timemanagement} alt="" />
                        <h4 className='text-center'>Time Management</h4>
                    </div>
                </div>
                <div className="col">
                    <div className='col border border-2 d-flex flex-column align-items-center justify-content-center rounded shadow-sm'>
                        <img src={marketing} alt="" />
                        <h4 className='text-center'>Marketing</h4>
                    </div>
                </div>
                <div className="col">
                    <div className='col border border-2 d-flex flex-column align-items-center justify-content-center rounded shadow-sm'>
                        <img src={systemanalysis} alt="" />
                        <h4 className='text-center'>System Analysis</h4>
                    </div>
                </div>
                <div className="col">
                    <div className='col border border-2 d-flex flex-column align-items-center justify-content-center rounded shadow-sm'>
                        <img src={criticalthinking} alt="" />
                        <h4 className='text-center'>Critical Thinking</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Capabilities;