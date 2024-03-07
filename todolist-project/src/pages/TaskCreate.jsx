import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";


const TaskCreate = () => {
    const Navigate = useNavigate();

  const createHandler = () => {
    Navigate ("/")
  }

  const backHandler = () => {
    Navigate("/")
  }

  return (
    <>
      <div className='m-auto w-80 mt-12'>

      <IoArrowBack onClick={backHandler} />

        <h1>ADD TASK</h1>
        <div>
          <label className='text-lg font-medium'>Label</label>
          <div className='mt-2'>
            <input className='bg-gray-100 w-80 h-12 rounded-lg mb-2 p-2' type='text' placeholder='Create Instagram post' required />
          </div>
        </div>
        <div>
          <label className='text-lg font-medium'>Start Time</label>
          <div className='mt-2'>
            <input className='bg-gray-100 w-80 h-12 rounded-lg mb-7 p-2' type='time' />
          </div>
        </div>
        <div>
          <label className='text-lg font-medium'>End Time</label>
          <div className='mt-2'>
            <input className='bg-gray-100 w-80 h-12 rounded-lg mb-7 p-2' type='time' />
          </div>
        </div>
        <div>
          <label className='text-lg font-medium'>Repeat</label>
          <div className='mt-2'>
          <select className='bg-gray-100 w-80 h-12 rounded-lg mb-7 p-2'>
            <option value="Everyday">Everyday</option>
            <option value="EveryWeek">EveryWeek</option>
            <option value="EveryMonth">EveryMonth</option>
          </select>
          </div>
        </div>
        <div>
          <label className='text-lg font-medium'>Category</label>
          <div className='mt-2'>
            <select className='bg-gray-100 w-80 h-12 rounde-lg mb-7 p-2'>
             
            </select>

          </div>
        </div>
        <button className='bg-violet-500 w-80 h-11 rounded-md'onClick={createHandler}>Create Task</button>
      </div>
    </>
  );
}

export default TaskCreate;
