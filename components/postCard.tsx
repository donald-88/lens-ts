import Avatar from './avatar'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import React , { Fragment } from 'react'
import classNames from 'classnames'

const options = (
    <svg className='stroke-black' width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="#000000" strokeWidth="2"/>
<path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" strokeWidth="2"/>
<path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" strokeWidth="2"/>
</svg>
)

const heart = (
  <svg className='stroke-black' width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)

const collects = (
    <svg className='stroke-black' width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.87 15H18.13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 16.6301V13.3701" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)
const mirrors = (
    <svg className='stroke-black' width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 14.99L15.49 20.01" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 14.99H20.5" strokeWidth="2" strokeMiterlimit="10" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M3.5 9.00999L8.51 3.98999" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5 9.01001H3.5" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)
const comments = (
    <svg className='stroke-black' width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 12H15.5" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
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
                    <Link href={`/profile/${props.route}`}><p className="text-xs truncate hover:underline cursor-pointer leading-3">{props.name}</p></Link>
                    <p className="text-[11px] text-accent truncate">@{props.handle}</p>
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
                    active ? 'bg-gray-100 text-gray-700' : 'text-gray-900',
                    'block px-4 py-2 text-xs'
                  )}
                >
                  Follow @{props.handle}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-700' : 'text-gray-900',
                    'block px-4 py-2 text-xs'
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
                    active ? 'bg-gray-100 text-gray-700' : 'text-gray-900',
                    'block px-4 py-2 text-xs'
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
        <div className='w-full max-h-[237px] overflow-hidden text-xs text-justify'>
            <p>{props.content}</p>
        </div>
        <div className='w-full h-[50px] px-4 flex justify-evenly items-center text-xs'>
            <button className='flex space-x-2 hover:text-red-700 hover:stroke-red-700'>
                {mirrors}
                <p>{props.mirrors}</p>
            </button>
            <button className='flex space-x-2'>
                {heart}
                <p>{props.collects}</p>
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
