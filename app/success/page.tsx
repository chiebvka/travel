import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='h-[80vh] border-2 border-primary w-full flex items-center  justify-center '>
      <div className='w-10/12 md:9/12 items-center justify-center bg-gray-100'>
        <div className="rounded-lg  md:px-16 md:py-14 py-8">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-200 p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
            </div>
          </div>
          <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">Welcome to Our Community!!!</h3>
          <p className=" text-center font-normal text-gray-600">Thank you for signing up! We're thrilled to have you on board. To complete your registration, please check your email for a confirmation link.</p>
          {/* <button className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-orange-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">Track Order</button> */}
        </div>
      </div>
    </div>
  )
}