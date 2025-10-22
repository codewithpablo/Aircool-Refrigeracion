import React from 'react'

const RoleCard = ({role, amount, bgColor}: any) => {
  return (
    <div className={ `${bgColor}    w-full rounded-2xl flex items-start p-6 justify-center flex-col`}>
        
        <h1 className='text-2xl font-semibold'>{amount}</h1>
        <p className='text-sm'>{role}</p>
    </div>)
}

export default RoleCard