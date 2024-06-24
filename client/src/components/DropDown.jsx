import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export const DropDown = (({ isOpen, setIsOpen, items, customButtonCOntent }) => {
  const dropdownRef = useRef(null)
  const { logout } = useAuth()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, setIsOpen])

  const toggleOpen = (() => {
    setIsOpen(!isOpen)
  })


  return (
    <div ref={dropdownRef}>
      {customButtonCOntent}
      <div className="relative">
        {false && (
          <button onClick={toggleOpen} className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
            <span>Dropdown</span>
            <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${isOpen ? 'rotate-180' : ''}`}>
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        )}
        <div className={`fixed sm:absolute z-10 right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 transition-transform duration-200 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
          <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
            {
              items.map((item, index) => {
                return (
                  <Link onClick={(e) => item.name === 'Logout' ? (logout(), toggleOpen()) : toggleOpen()} to={item.link} key={index} className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                    {item.name}
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
})