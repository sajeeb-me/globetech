import React from 'react';
import './RightSideCircle.css'

const RightSideCircle = () => {
    return (
        <section className='circleContainer'>
            <div id="circle-1" className="circle">
                <div id="subCircle-1" className="subCircle"></div>
                <div id="subCircle-2" className="subCircle"></div>
                <div id="circle-2" className="circle">
                    <div id="subCircle-3" className="subCircle"></div>
                    <div id="subCircle-4" className="subCircle"></div>
                    <div id="circle-3" className="circle">
                        <div id="subCircle-5" className="subCircle"></div>
                        <div id="subCircle-6" className="subCircle"></div>
                        <div id="circle-4"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RightSideCircle;