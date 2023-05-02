import React from 'react'

export default function Images(props) {
  return (
    <div>
      <div className="">
        <img src={props.urls.full} alt={props.user.name} className='w-full object-cover h-64' />
      </div>
    </div>
  )
}
