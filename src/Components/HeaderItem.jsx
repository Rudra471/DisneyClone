import React from 'react'

// eslint-disable-next-line no-unused-vars
const HeaderItem = ({ name, Icon, showName = false }) => {
  return (
    
    <div className=" text-18xl gap-3 flex relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full mb-1 mt-2">
      <Icon className= "text-xl" />   {/* THIS IS IMPORTANT */}
      <h2 className={showName ? "block" : "hidden md:block"}>{name}</h2>
    </div>
  )
}

export default HeaderItem