import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
    return (
        <div className='flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    SignUp
                </h1>
                <form >
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Gilang Aryo" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="gilang_aryo" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="text" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <GenderCheckbox />

                    <a href="#" className='text-sm  hover:underline hover:text-blue-600 mt-1 inline-block'>
                        Already have an Account?
                    </a>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-800' >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
