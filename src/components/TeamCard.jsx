import React from 'react'
import userImage from "../assets/user.png"

const TeamCard = (data) => {
    
    console.log(data)
  return (
      <div className='flex items-center px-8'>
          <img src={data.teamMembers.img} className="w-[50px] md:w-[180px]  rounded-xl" />
          <div className='pl-2'>
              <p className='text-lg md:text-4xl'>{data.teamMembers.name}</p>
              <p className='text-sm md:text-2xl'>{data.teamMembers.role}</p>
              <p>Social</p>
          </div>
      </div>
  )
}

export default TeamCard