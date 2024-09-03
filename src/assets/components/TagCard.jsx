import React from 'react'

const TagCard = ({tag}) => {
  return (
    <div className='bg-white_primary px-4 py-2 rounded-[10px] dark:bg-[#2d2d2d]'>
        <p> {tag} </p>
    </div>
  )
}

export default TagCard