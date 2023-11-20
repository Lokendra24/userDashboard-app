import React from 'react'
import '../css/footer.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate=useNavigate()
  return (
    <div className='footer_container' >
        <div className='footer_left' onClick={()=>navigate('/dashboard')} >
         <HomeIcon className='homeicon' />
        </div>
        <div className='footer_right' onClick={()=>navigate('/users')} >
         <PersonIcon className='usericon' />
        </div>
    </div>
  )
}

export default Footer