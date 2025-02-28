import { useState } from "react"

export const Done = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-400">
            <div className="rounded-md shadow-md h-90 w-100 bg-white border border-gray-300">
                <div className="flex justify-center items-center pt-32">
                    <div className="flex justify-center items-center h-20 w-20 rounded-full text-white bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex justify-center pt-10">
                    <div className="font-bold font-serif text-2xl">Done!!</div>
                </div>
                </div>
        </div>
    )
}