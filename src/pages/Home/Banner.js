import React from 'react';
import BannerImage from '../../assets/icons/Group 1.png'
import Rocket from '../../assets/icons/Vector.png';

const Banner = () => {
    return (
        <section className='max-w-7xl mx-auto px-4 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center' style={{ color: '#28ACE2' }}>
            {/* left side */}
            <article className='text-left lg:pr-28'>
                {/* rocket icon */}
                <div
                    className='flex items-center gap-1 pb-10 hover:translate-x-full duration-500 ease-in-out'
                >
                    <div>
                        <div style={{ borderColor: '#28ACE2' }} className='w-14 border my-1'></div>
                        <div style={{ borderColor: '#28ACE2' }} className='w-14 border my-1'></div>
                        <div style={{ borderColor: '#28ACE2' }} className='w-14 border my-1'></div>
                    </div>
                    <img className='h-14' src={Rocket} alt="" />
                </div>
                {/* banner text and buttons */}
                <h1 className='text-5xl lg:text-7xl font-bold leading-normal'>
                    Welcome to
                    <span className='block' style={{ color: 'rgba(203, 242, 49, 1)' }}>
                        Globetech
                    </span>
                </h1>
                <p className='text-lg text-justify mt-4 mb-8'>We are committed to deliver <span style={{ color: 'rgba(203, 242, 49, 1)' }}>best IT services</span>. Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
                <div className='flex gap-3'>
                    <button style={{ background: 'rgba(203, 242, 49, 1)' }} className='py-3 px-8 rounded-sm text-black font-semibold'>Support us</button>
                    <button style={{ borderColor: '#28ACE2' }} className='py-3 px-8 border rounded-sm'>Our Mission</button>
                </div>
            </article>

            {/* right side */}
            <article>
                <img className='py-20 lg:pl-20' src={BannerImage} alt="" />
            </article>
        </section>
    );
};

export default Banner;