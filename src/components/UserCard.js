import React from 'react'
import '../css/usercard.css'

function UserCard({data,index}) {
  return (
    <div className={index%2===0 ?  'usercard_left' : 'usercard_right' } >
      <div>
      <span>EMP ID &nbsp;&nbsp;: &nbsp; <p>{data.user_id}</p></span>
      <span>Name &nbsp; &nbsp; : &nbsp; <p>{data.name}</p></span>
      <span>DOB  &nbsp; &nbsp; &nbsp; : &nbsp;<p>{data.dob}</p></span>
      <span>Role &nbsp; &nbsp; &nbsp;&nbsp; : &nbsp;<p>{data.role}</p></span>
      </div>
      <div>{index+1}</div>
    </div>
  )
}

export default UserCard