import React from 'react';
import preloaderImage from "./../../../assets/images/preloaderImage.svg";

const Preloader = () => {
    return (
        <div>
            <img src={preloaderImage} style={{width: "70px"}}/>
        </div>
    );
};

export default Preloader;
