import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

type Props = {action: any}

export default function Posts(props: Props) {
    const {action} = props
  return (
    <form action="">
    <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-foreground">Profile</h2>
            <p className="mt-1 text-sm leading-6 text-foreground">
                This information will be displayed publicly so be careful what you share.
            </p>
            <div className="mt-10 col-span-full">
            {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> */}
                <div className="w-full">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 ">
                        Post Title
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#f25f14]  ">
                        {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                        <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-3  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            // placeholder="janesmith"
                        />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-full mt-8">
                        <label htmlFor="category"  className="block text-sm font-medium leading-6 ">Select Country</label>
                        <select id="category" className=" mt-2 border border-gray-300 text-foreground text-sm rounded-lg focus:ring-[#f25f14]  block w-full p-2.5 bg-background ">
                            <option >Electronics</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                        </select>
                    </div>
            <div className="col-span-full mt-8">
                <label htmlFor="about" className="block text-sm font-medium leading-6 ">
                    About
                </label>
                <div className="mt-2">
                    <textarea
                    id="about"
                    name="about"
                    rows={6}
                    className="block w-full rounded-md py-1.5 bg-background  shadow-sm ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-inset  border-0   focus:ring-[#f25f14]  sm:text-sm sm:leading-6"
                    defaultValue={''}
                    />
                </div>
                <p className="mt-3 text-xs leading-6 ">Write a few sentences about yourself.</p>
            </div>
            
            <div className="col-span-full mt-8">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 ">
                    Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300  px-6 py-10">
                    <div className="text-center">
                        <PhotoIcon className="mx-auto h-12 w-12 " aria-hidden="true" />
                        <div className="mt-4 flex text-sm leading-6">
                            <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md font-semibold text-[#f25f14]  ring-gray-300 focus-within:ring-2 focus-within:ring-inset  border-0   focus:ring-[#f25f14]  hover:text-[#f25f14]"
                            >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 ">PNG, JPG, GIF up to 10MB</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6">
        Cancel
        </button>
        <button
        type="submit"
        className="rounded-md bg-[#f25f14] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f5ae8a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f25f14] "
        >
        {action}
        </button>
    </div>
</form>
  )
}