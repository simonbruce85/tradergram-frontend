import React from 'react'
import userImage from "../assets/user.png"
import Phone from "../assets/iphone.png";
import TeamCard from './TeamCard';
import data from '../assets/Data.json';

const Team = () => {

    return (
        <div className="min-h-screen w-full  flex justify-center items-center bg-black bg-opacity-40 '">
            <div className="w-[60%] flex items-center justify-center border-black border-2 py-2">
                <div className="md:flex flex-col  w-full text-white ">
                    <div className='md:flex my-12 '>
                        <TeamCard teamMembers={data.teamMembers[0]} className="px-16"/>
                        <TeamCard teamMembers={data.teamMembers[1]}  className="mx-8" />
                    </div>
                    <div className='justify-end'>
                        <div className='md:flex justify-end'>
                            <TeamCard teamMembers={data.teamMembers[2]} />
                            <TeamCard teamMembers={data.teamMembers[3]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team