

import React from 'react'
import {Link} from "react-router-dom";

const Navbar = ({user}) => {
  return (
    <div className='navbar'>
        <span className="logo"><Link className='link' to="/">Social app</Link></span>
        {
            user ? (
                <ul className="list">
                <li className="listItem">
                    <img src="https://scontent.flad2-1.fna.fbcdn.net/v/t39.30808-6/296389097_2266397126844372_5657498016328583755_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFpdtcwqGo8NXZAASR-xUU4FFq4px4EUZcUWrinHgRRl19xmE-3Se4YgINR5vMT9kOvo77gjpMVbcwBDSfqdYH_&_nc_ohc=s2vCBbAetPAAX-qNiNm&tn=UcxUgUzvk4s_C_r7&_nc_ht=scontent.flad2-1.fna&oh=00_AT_TD3rW5bi9pmLP2YrDTztqOQgUus9zX7DW8qcjdL91dw&oe=62FB06B3" alt="" className='avatar'/>
                </li>
                <li className='listItem'>John Doe</li>
                <li className='listItem'>Logout</li>
            </ul>

            ) : (<Link className='link' to="login/">Login</Link>)
        }
   
    </div>
  )
}

export default Navbar