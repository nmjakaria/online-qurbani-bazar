'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = async (data) => {
        const { name, photo, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name, 
            email: email, 
            password: password, 
            image: photo,
            callbackURL: "/login",
        })
        console.log('Registration Response:', { res, error })

        if (error) {
            toast.error(error.message || "Registration failed!");
        } else {
            toast.success("Registration successful! Please check your email to verify your account.");
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 py-10">
            <div className="card w-full max-w-160 bg-white p-10 md:p-10 rounded-md shadow-sm border border-gray-100">
                <h1 className='mx-auto text-xl md:text-4xl font-black tracking-tighter text-primary mb-2.5'>
                    Qurbani<span className="text-secondary">Hat</span>
                </h1>
                <h1 className="text-center text-2xl font-bold text-gray-800 leading-tight">
                    Register your account
                </h1>

                <div className="divider my-3 before:bg-gray-100 after:bg-gray-100"></div>

                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset p-0 space-y-3">

                        {/* Name Field */}
                        <fieldset className="fieldset p-0">
                            <legend className="fieldset-legend text-lg font-bold text-gray-800 pb-2">
                                Your Name
                            </legend>
                            <input
                                {...register('name', { required: 'Name is required' })}
                                type="text"
                                placeholder="Enter your name"
                                className={`input input-ghost w-full bg-gray-100 rounded-[5px] text-base placeholder:text-[#ababab] px-6 h-16 focus:bg-gray-100 focus:border-gray-200 ${errors.name ? 'border-red-500' : ''}`}
                            />
                            {errors.name && <p className="fieldset-label text-red-500 mt-1">{errors.name.message}</p>}
                        </fieldset>

                        {/* Photo URL Field */}
                        <fieldset className="fieldset p-0">
                            <legend className="fieldset-legend text-lg font-bold text-gray-800 pb-2">
                                Photo URL
                            </legend>
                            <input
                                {...register('photo', { required: 'Photo URL is required' })}
                                type="text"
                                placeholder="Enter your photo URL"
                                className={`input input-ghost w-full bg-gray-100 rounded-[5px] text-base placeholder:text-[#ababab] px-6 h-16 focus:bg-gray-100 focus:border-gray-200 ${errors.photo ? 'border-red-500' : ''}`}
                            />
                            {errors.photo && <p className="fieldset-label text-red-500 mt-1">{errors.photo.message}</p>}
                        </fieldset>

                        {/* Email Field */}
                        <fieldset className="fieldset p-0">
                            <legend className="fieldset-legend text-lg font-bold text-gray-800 pb-2">
                                Email
                            </legend>
                            <input
                                {...register('email', { required: 'Email is required' })}
                                type="email"
                                placeholder="Enter your email address"
                                className={`input input-ghost w-full bg-gray-100 rounded-[5px] text-base placeholder:text-[#ababab] px-6 h-16 focus:bg-gray-100 focus:border-gray-200 ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && <p className="fieldset-label text-red-500 mt-1">{errors.email.message}</p>}
                        </fieldset>

                        {/* Password Field */}
                        <fieldset className="fieldset p-0">
                            <legend className="fieldset-legend text-lg font-bold text-gray-800 pb-2">
                                Password
                            </legend>
                            <input
                                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Minimum 6 characters' } })}
                                type="password"
                                placeholder="Enter your password"
                                className={`input input-ghost w-full bg-gray-100 rounded-[5px] text-base placeholder:text-[#ababab] px-6 h-16 focus:bg-gray-100 focus:border-gray-200 ${errors.password ? 'border-red-500' : ''}`}
                            />
                            {errors.password && <p className="fieldset-label text-red-500 mt-1">{errors.password.message}</p>}
                        </fieldset>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="btn btn-neutral w-full bg-[#403F3F] border-none rounded-[5px] h-17.5 text-white text-xl font-bold normal-case hover:bg-gray-800"
                            >
                                Register
                            </button>
                        </div>
                    </fieldset>
                </form>

                <p className="mt-8 text-center text-base font-semibold text-gray-700">
                    Already Have An Account ?{' '}
                    <Link
                        href="/login"
                        className="text-[#f15353] hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </main>
    );
}