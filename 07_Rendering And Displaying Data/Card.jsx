import React from 'react';

const Card = (props) => {
  return (
    <div className='m-7 w-60 bg-black rounded-lg shadow-lg p-4 flex flex-col items-center'>
      <img className='w-24 h-24 rounded-full border-2 border-white' src={props.profile} alt={props.profile} />
      <h1 className='text-xl font-bold mt-3 text-white'>{props.user}</h1>
      <h2 className='text-lg text-white'>{props.age} years old</h2>
      <h2 className='text-white'>{props.city}</h2>
      <h3 className='text-white italic'>{props.profession}</h3>
      <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer'>
        Add Friend
      </button>
    </div>
  );
}

export default Card;