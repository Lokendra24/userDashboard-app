import React from 'react'
import '../css/header.css'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import WifiIcon from '@mui/icons-material/Wifi';
import Battery3BarTwoToneIcon from '@mui/icons-material/Battery3BarTwoTone';

function Header() {
  return (
    <div className='header_container' >
        <div>
            <p>11:30</p>
        </div>
        <div>
          <SignalCellularAltIcon className='signal' />
          <WifiIcon className='wifi'/>
          <Battery3BarTwoToneIcon className='battery' />
        </div>
    </div>
  )
}

export default Header