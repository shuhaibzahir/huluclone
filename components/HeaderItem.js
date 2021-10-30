import React from 'react'

const HeaderItem = ({title,Icon}) => {
    return (    
        <div className="group cursor-pointer flex flex-col items-center  w-12 sm:w-20 hover:text-white ">   
            <Icon className=" group-hover:animate-bounce duration-300 ease-in-out h-8 mb-1"/>
            <p className="tracking-widest group-hover:opacity-100 duration-300 ease-in-out  opacity-0">{title}</p>
        </div>
    )
}

export default HeaderItem
