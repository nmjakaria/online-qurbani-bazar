'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';


export default function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = async (data) => {

        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            console.error("Login Error:", error);
            toast.error(error.message || "Login failed!");
            return;
        }
        if (res) {
            console.log("Login Success:", res);
            toast.success("Login successful!");
        }
    };
    const handlegoogleLogin = async () => {

        const data = await authClient.signIn.social({
            provider: "google",
        });

    }


    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
            <div className="card w-full max-w-120 bg-white p-10 rounded-md shadow-sm border border-gray-100">
                <h1 className='mx-auto text-xl md:text-4xl font-black tracking-tighter text-primary mb-2.5'>
                    Qurbani<span className="text-secondary">Hat</span>
                </h1>
                <h1 className="text-center text-2xl font-bold text-gray-800 leading-tight">
                    Login
                </h1>

                <div className="divider my-5 before:bg-gray-100 after:bg-gray-100"></div>

                <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
                    {/* Group the entire login area */}
                    <fieldset className="fieldset p-0 space-y-4">
                        <fieldset className="fieldset p-0">
                            <legend className="fieldset-legend text-lg font-bold text-gray-800 pb-2">
                                Email address
                            </legend>
                            <input
                                {...register('email', { required: 'Email is required' })}
                                type="email"
                                placeholder="Enter your email address"
                                className={`input input-ghost w-full bg-gray-100 rounded-[5px] text-base placeholder:text-[#ababab] px-6 h-16 focus:bg-gray-100 focus:border-gray-200 ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && (
                                <p className="fieldset-label text-red-500 mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </fieldset>

                        {/* Password Fieldset */}
                        <fieldset className="fieldset p-0">
                            <legend className="fieldset-legend text-lg font-bold text-gray-800 pb-2">
                                Password
                            </legend>
                            <input
                                {...register('password', { required: 'Password is required' })}
                                type="password"
                                placeholder="Enter your password"
                                className={`input input-ghost w-full bg-gray-100 rounded-[5px] text-base placeholder:text-[#ababab] px-6 h-16 focus:bg-gray-100 focus:border-gray-200 ${errors.password ? 'border-red-500' : ''}`}
                            />
                            {errors.password && (
                                <p className="fieldset-label text-red-500 mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </fieldset>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="btn btn-neutral w-full bg-blue-900 border-none rounded-[5px] h-17.5 text-white text-xl font-bold normal-case hover:bg-gray-800"
                            >
                                Login
                            </button>
                        </div>
                    </fieldset>
                </form>

                <button className="btn btn-outline btn-info mt-8 w-full normal-case flex items-center gap-2"
                    onClick={handlegoogleLogin}>
                    <FcGoogle className='text-xl' /> Login with Google
                </button>

                <p className="mt-8 text-center text-base font-semibold text-gray-700">
                    Dont&apos;t Have An Account ?{' '}
                    <Link
                        href="/register"
                        className="text-[#f15353] hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </main>
    );
}