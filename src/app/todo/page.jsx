import Link from 'next/link';
import React from 'react'

const todo = () => {
  return (
    <div className=''>
    <section className="bg-white dark:bg-gray-900 mt-20">
  <div className="max-w-3xl px-6 py-16 mx-auto text-center">
    <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
    Let`s get some work
    </h1>
    <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">
    A to-do list helps organize tasks, prioritize activities, and boost productivity. It reduces overwhelm and provides a clear sense of achievement as you check off completed items.
    </p>
    <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
      <input
        id="email"
        type="text"
        className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        placeholder="Add to To Do List here.... "
      />
      <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
     Task
      </button>
    </div>
  </div>
</section>

   
    <div className='flex gap-5'>
    <Link href={"/todo/Edit"}>Edit</Link> 
    <Link href={"todo/Delete"}>Delete</Link> 
    </div>
    </div>
    
  )
}

export default todo;