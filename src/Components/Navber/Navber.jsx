import Link from 'next/link'
import React from 'react'

const Navber = () => {
  return (
    <div>
          <nav className="bg-slate-600 px-2 py-2 flex justify-between items-center">
          <Link href={'/'}><h5 className='text-green-300 font-bold text-3xl' >ToDo <span className='text-yellow-300 font-bold text-3xl'>List</span></h5></Link>
          <ul className="flex gap-5 text-2xl justify-between items-center  space-x-4">
            <li>
            <Link href={'/todo'}> Add</Link>
            </li>
            <li>
            <Link href={'/list'}> All List</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navber
