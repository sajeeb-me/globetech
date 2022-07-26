import React from 'react'
import LoginForm from './LoginForm'
import Back from '../../assets/icons/back.png'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    return (
        <section className='grid grid-cols-1 lg:grid-cols-4 min-h-screen'>
            {/* left side */}
            <article
                style={{
                    fontFamily: 'Montserrat'
                }}
                className='col-span-1 px-2 flex flex-col justify-between py-8 lg:py-16'
            >
                <div className='mt-5 lg:mt-10'>
                    <h3 style={{ color: '#28ACE2' }} className='text-3xl uppercase font-bold'>Globetech Company Limited</h3>
                    <p className='text-xs tracking-wider mt-5'>Make yourself digitalized &amp; more effecient</p>
                </div>

                {/* back button */}
                <div className='flex justify-center'>
                    <img onClick={() => navigate('/')} className='h-6 cursor-pointer opacity-70 hover:opacity-100' src={Back} alt="" />
                </div>
            </article>

            {/* right side */}
            <article
                style={{ background: '#C0CDD3' }}
                className='col-span-3 flex justify-center items-center'
            >
                <div className='bg-white text-black rounded-xl m-5 p-4 lg:p-10 w-full lg:w-1/2'>
                    <LoginForm />
                </div>
            </article>
        </section >
    )
}

export default Login