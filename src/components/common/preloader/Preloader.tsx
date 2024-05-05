import React from 'react';
import preloader from '../../../assets/images/tube-spinner.svg';

export const Preloader = () => {
    return (
        <div>
            <img src={preloader}/>
        </div>
    );
};

export default Preloader;