import React from 'react'

const TagCard = ({tag}) => {
  return (
    <div className='bg-white_primary px-4 py-2 rounded-[10px] dark:bg-black_primary'>
        <p> {tag} </p>
    </div>
  )
}

export default TagCard