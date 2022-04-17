import React from 'react';

const Service = ({ service }) => {
    const { img, name, price, description } = service
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h5><small>starting from </small>$<span className='fw-bold'></span>{price}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;