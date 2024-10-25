"use client"
import Link from 'next/link'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Login from '../Login'

const Navber = () => {
    const pathName= usePathname();
    const router =useRouter()
    const links =[
        {
            title:"Add",
            path:'/todo'
        },
        {
            title:"All List",
            path:'/list'
        }
    ]
    const handleLogin=()=>{
        router.push('/todo/login')

    };

    if (pathName.includes('/todo/login'))
        return(
    <div >
       <Login></Login>
    </div>
)
  return (
    <div>
          <nav className="bg-slate-600 px-2 py-2 flex justify-between  items-center">
          <Link href={'/'}><h5 className='text-green-300 font-bold text-3xl ml-10' >ToDo <span className='text-yellow-300 font-bold text-3xl'>List</span></h5></Link>
          <ul className="flex gap-10 text-xl font-bold text-white mr-10">
            {/* <li>
            <Link href={'/todo'} target="blank"> Add</Link>
            </li>
            <li>
            <Link href={'/list'}> All List</Link>
            </li> */}
            {
                links?.map ((link)=> <Link className={`${pathName=== link.path && "text-xl font-semibold leading-6 text-gray-900"}`} key={link.path} href={link.path} > {link.title}</Link>)
                // links?.map ((link)=> <Link className={`${pathName=== link.path && "text-xl font-semibold leading-6 text-gray-900"}`} key={link.path} href={link.path} target="blank"> {link.title}</Link>)
            }
          </ul>
      <Link href={'/todo/login'}>
      <button onClick={handleLogin}
          className='rounded-md bg-indigo-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'> 
          Log In
          </button></Link>
        </nav>
    </div>
  )
}

export default Navber
