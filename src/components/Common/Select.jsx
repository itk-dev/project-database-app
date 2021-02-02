import React, { useState } from 'react'
import { Transition } from '@tailwindui/react'

function Select ({ name, label, options, onOptionSelect }) {
  const [show, setShow] = useState(false)

  function closeDialogAndCallback (option) {
    setShow(false)
    onOptionSelect(option)
  }
  return (
    <>
      <div className='relative inline-block text-left'>
        <div>
          <button onClick={() => setShow(!show)} type='button' className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500' aria-haspopup='true' id={name} name={name} aria-expanded='true'>
            <label htmlFor={name}>{label}</label>
            <svg className='-mr-1 ml-2 h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
              <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
            </svg>
          </button>
        </div>
        <Transition
          show={show}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
            <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
              {options.map((option) => (
                <a onClick={() => closeDialogAndCallback(option)} key={option.id} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' role='menuitem'>{option.name}</a>
              ))}
            </div>
          </div>
        </Transition>
      </div>
    </>
  )
};

export default Select