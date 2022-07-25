import React from 'react';
import Rocket from '../../assets/icons/Vector.png';
import SoftwareSolution from '../../assets/images/software-solution.png'
import ECommerceSolution from '../../assets/images/e-commerce-solution.png'
import ERPSolution from '../../assets/images/erp-solution.png'
import BulkSMSService from '../../assets/images/bulk-sms-service.png'
import GraphicDesign from '../../assets/images/graphic-design.png'
import DigitalMarketing from '../../assets/images/digital-marketing.png'

const AllServices = () => {
    const services = [
        {
            id: 1,
            name: "Software Solution",
            details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
            img: SoftwareSolution
        },
        {
            id: 2,
            name: "E-Commerce Solution",
            details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
            img: ECommerceSolution
        },
        {
            id: 3,
            name: "ERP Solution",
            details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
            img: ERPSolution
        },
        {
            id: 4,
            name: "Bulk SMS Service",
            details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
            img: BulkSMSService
        },
        {
            id: 5,
            name: "Graphic Design",
            details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
            img: GraphicDesign
        },
        {
            id: 6,
            name: "Digital Marketing",
            details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
            img: DigitalMarketing
        },
    ]
    return (
        <section className='max-w-7xl mx-auto px-4 lg:px-20'>

            {/* rocket icon */}
            <article className='flex items-center gap-1 my-10'>
                <div>
                    <div style={{ borderColor: '#28ACE2' }} className='w-14 border my-1'></div>
                    <div style={{ borderColor: '#28ACE2' }} className='w-14 border my-1'></div>
                    <div style={{ borderColor: '#28ACE2' }} className='w-14 border my-1'></div>
                </div>
                <img className='h-14' src={Rocket} alt="" />
            </article>
            <article>
                <div className='my-5'>
                    <h3 className='uppercase text-2xl tracking-widest'>Services</h3>
                    <h3 className='text-4xl font-semibold tracking-widest mt-3'>We provides services to our clients</h3>
                </div>
                <section className='grid grid-cols-1 lg:grid-cols-3 gap-10 py-5' >
                    {
                        services.map((service) => {
                            const { id, name, details, img } = service;
                            return <article
                                key={id}
                                className='bg-white text-black p-7 rounded-xl'
                            >
                                <div className='h-52'>
                                    <img src={img} alt="" />
                                </div>
                                <h4 style={{ color: '#28ACE2' }} className='text-xl font-semibold tracking-widest'>{name}</h4>
                                <p className='my-5 text-justify'>{details}</p>
                                <button style={{ background: '#28ACE2' }} className='py-2 px-8 rounded-lg uppercase text-white tracking-widest'>More</button>
                            </article>
                        })
                    }
                </section>
            </article>
        </section>
    );
};

export default AllServices;