import React from 'react'
import SearchInput from './SearchInput'
import LogoutButton from './LogoutButton'
import Chitchats from './Chitchats'


const Sidebar = () => {
  return (
    <div className=' border-r border-slate-500 p-4 flex-col'>
        <SearchInput />
        <div className='divider px-3'></div>
        <Chitchats  />   
        <LogoutButton   /> 

    </div>
  )
}

export default Sidebar