import React from 'react'
import LoginForm from './LoginForm'
import Back from '../../assets/icons/back.png'

function Login() {
    return (
        <section className='grid grid-cols-4 min-h-screen'>
            <article
                style={{
                    fontFamily: 'Montserrat'
                }}
                className='col-span-1 px-2 flex flex-col justify-between py-16'
            >
                <div>
                    <h3 style={{ color: '#28ACE2' }} className='text-3xl uppercase font-bold'>Globetech Company Limited</h3>
                    <p className='text-xs tracking-wider mt-5'>Make yourself digitalized &amp; more effecient</p>
                </div>
                <div className='flex justify-center'>
                    <img className='h-6' src={Back} alt="" />
                </div>
            </article>
            <article
                style={{ background: '#C0CDD3' }}
                className='col-span-3 flex justify-center items-center'
            >
                <div className='bg-white text-black rounded-xl p-10 w-1/2'>
                    <LoginForm />
                </div>
            </article>
        </section >
    )
}

export default Login