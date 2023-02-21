import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpiner = () => {
    return (
        <div className='m-5'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
};

export default LoadingSpiner;