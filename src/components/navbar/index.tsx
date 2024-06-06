import React, { HTMLInputTypeAttribute } from 'react'
import { useTheme } from 'next-themes'

export default function Navbar() {

    const {theme, setTheme} = useTheme()

    function getTheme(event:any) {
        if(!event.target.checked) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return <nav className='min-h-[50px] h-[50px] w-full fixed top-0 left-0 bg-[#e3e3e3] dark:bg-[#212729] dark:bg-opacity-60 backdrop-blur bg-opacity-60 transition-all z-[9999]'>
        <div className='container mx-auto flex flex-row items-center justify-between h-full gap-5 px-3'>
            <div className='logo font-semibold'>
                NOVEL
            </div>
            <div className='flex flex-row h-full w-fit gap-5 items-center'>
                <div className='flex flex-row gap-4 '>
                    <div className='cursor-pointer relative flex justify-center after:absolute after:h-[2px] after:rounded after:w-0 after:hover:w-full after:transition-all after:bottom-0 after:bg-sky-400'>Home</div>
                    <div className='cursor-pointer relative flex justify-center after:absolute after:h-[2px] after:rounded after:w-0 after:hover:w-full after:transition-all after:bottom-0 after:bg-sky-400'>Completed</div>
                    <div className='cursor-pointer relative flex justify-center after:absolute after:h-[2px] after:rounded after:w-0 after:hover:w-full after:transition-all after:bottom-0 after:bg-sky-400'>Genre</div>
                </div>
                <div className='w-fit'>
                    <input className='mode-toggler flex items-center' type='checkbox' checked={theme !== 'light'} onChange={(e) => { getTheme(e) }}/>
                </div>
            </div>
        </div>
    </nav>
}
