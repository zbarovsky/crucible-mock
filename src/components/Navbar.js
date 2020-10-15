import React from 'react'

function Navbar () {

    return (
        <div className='navbar'>
            <div className='navbar-title'>
                <h1 className='navbar-game-title'>Crucible</h1>
            </div>
            <div className='navbar-mobile-hamburger'>
                <div className='navbar-items'>
                    <ul className='navbar-menu'>
                        <li>About
                            <ul className='about-hamburger submenu'>
                                <li>About Crucible</li>
                                <li>FAQ</li>
                                <li>PC Requirements</li>
                                <li>Credits</li>
                            </ul>  
                        </li> 
                        <li>Hunters</li>
                        <li>News</li>
                        <li>Community
                            <ul className='community-hamburger submenu'>
                                <li>Community</li>
                                <li>Media</li>
                                <li>Wiki</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;