import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [showPass, setShowPass] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <section>
            <article>
                <h3 className="text-4xl mb-5">Welcome</h3>
                <p className="text-sm my-5 opacity-50">Sign in to your account</p>
            </article>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input
                        className="border block p-3 rounded-lg w-full"
                        placeholder="Email"
                        type='email'
                        {...register("email", { required: true })}
                    />
                    {errors.email?.type === 'required' && <p className="text-sm pl-2 pt-1 text-red-500 text-left">Email is required</p>}
                </div>
                <div className="mb-3 relative">
                    <input
                        className="border block p-3 rounded-lg w-full"
                        placeholder="Password"
                        type={showPass ? 'text' : 'password'}
                        {...register("password", { required: true })}
                    />
                    <span
                        className="absolute top-4 right-4 cursor-pointer"
                        onClick={() => setShowPass(!showPass)}
                    >
                        {
                            showPass ?
                                <EyeOffIcon className="h-5 w-5 text-gray-500" />
                                :
                                <EyeIcon className="h-5 w-5 text-gray-500" />
                        }
                    </span>
                    {errors.password?.type === 'required' && <p className="text-sm pl-2 pt-1 text-red-500 text-left">Password is required</p>}
                </div>

                <input
                    type="submit"
                    value='Login'
                    style={{ background: '#28ACE2' }}
                    className="p-3 rounded-lg w-full mt-3 text-white cursor-pointer"
                />
            </form>
            <p className="mt-2 text-sm">Don't have account? <Link to='/login/registerform' className='font-semibold'>Register now</Link></p>
        </section>
    );
};

export default LoginForm;