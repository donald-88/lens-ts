import Avatar from './avatar'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import React , { Fragment } from 'react'
import classNames from 'classnames'

const options = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="#000000" strokeWidth="1.5"/>
<path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" stroke="#000000" strokeWidth="1.5"/>
<path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="#000000" strokeWidth="1.5"/>
</svg>
)

const collects = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.87 15H18.13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 16.6301V13.3701" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)
const mirrors = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 14.99L15.49 20.01" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 14.99H20.5" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M3.5 9.00999L8.51 3.98999" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5 9.01001H3.5" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)
const comments = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 12H15.5" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)

const PostCard = (props) => {
  return(
    <div key={props.key} className='px-4'>
        <div className='flex h-[50px] justify-between items-center'>
            <div className='flex space-x-2'>
                <div className='w-[30px] h-[30px]'>
                    <Avatar>
                        <Image alt="profile picture" src={props.image} width="30px" height="30px" />
                    </Avatar>
                </div>
                <div className='flex flex-col justify-start leading-3'>
                    <Link href={`/profile/${props.route}`}><p className="text-sm truncate hover:underline cursor-pointer">{props.name}</p></Link>
                    <p className="text-[11px] truncate">@{props.handle}</p>
                </div>
            </div>
            <div>
                <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="rotate-90">
        {options}
          
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Follow User
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Embed
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-red-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Report
                </a>
              )}
            </Menu.Item>
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
            </div>
            
        </div>
        <div className='w-full max-h-[237px] overflow-hidden text-sm text-justify'>
            {props.content}
        </div>
        <div className='w-full h-[50px] px-4 flex justify-evenly items-center text-[12px]'>
            <button className='flex space-x-2'>
                {mirrors}
                <p>{props.mirrors}</p>
            </button>
            <button className='flex space-x-2'>
                {collects}
                <p>{props.collects}</p>
            </button>
            <button className='flex space-x-2'>
                {comments}
                <p>{props.comments}</p>
            </button>
        </div>
    </div>
  )
}

export default PostCard
