import { Link, NavLink } from 'react-router-dom'
import AuthContext from '../contexts/authContext'
import React, { useContext } from 'react'

export const Navbar = () => {

  const {user,logout} = useContext(AuthContext)
  return (
    <nav className="bg-gray-50 text-gray-700 p-2 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
           <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
          <NavLink to="/employee-list" className="hover:text-blue-500">Employee List</NavLink>
          <NavLink to="/create-employee" className="hover:text-blue-500">Create Employee</NavLink>
        </div>
        <div className="flex space-x-4 items-center">
          <span className="text-sm font-medium">{user?.username}</span>
          <button onClick={()=>logout()} className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium">
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
