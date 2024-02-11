import { FaLinkedin, FaGithub, FaTwitter } from  'react-icons/fa'    
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'

import './Footer.css'

export default function Footer() {
  return (
    <>

      <footer>
        <div className='socialButtons'>
            <a target='_blank' href="https://www.linkedin.com/in/utkarshkataria/"><FaLinkedin /></a>
            <a target='_blank' href="https://github.com/uTkarsHH001"><FaGithub /></a>
            <a target='_blank' href="https://leetcode.com/Utkarshh_/"><SiLeetcode /></a>
            <a target='_blank' href="https://auth.geeksforgeeks.org/user/utkarshh/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user "><SiGeeksforgeeks /></a>
            <a target='_blank' href="https://twitter.com/uTk_arsHH"><FaTwitter /></a>
        </div>      
        
      </footer>
    </>
  )
}
