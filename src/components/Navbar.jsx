import React, {useState} from 'react'

function Navbar () {

    const [hoverAbout, setHoverAbout] = useState(true)
    const toggleHoverAbout = () => setHoverAbout(!hoverAbout)

    const [hoverCommunity, setHoverCommunity] = useState(true)
    const toggleHoverCommunity = () => setHoverCommunity(!hoverCommunity)

    return (
        <div className='navbar'>
            <div>
                <div className='navbar-menu'>
                    <h1 className='navbar-game-title'>Crucible</h1>
                    <ul className='navbar-mobile-hamburger'>
                        <li className={hoverAbout ? 'submenu': ''} onMouseEnter={toggleHoverAbout} onMouseLeave={toggleHoverAbout}>About
                            <ul className='submenu-menu'>
                                <li>About Crucible</li>
                                <li>FAQ</li>
                                <li>PC Requirements</li>
                                <li>Credits</li>
                            </ul>  
                        </li> 
                        <li>Hunters</li>
                        <li>News</li>
                        <li className={hoverCommunity ? 'submenu': ''} onMouseEnter={toggleHoverCommunity} onMouseLeave={toggleHoverCommunity}>Community
                            <ul className='submenu-menu'>
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