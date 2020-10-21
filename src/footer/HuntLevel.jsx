import React from 'react'
import Legal from './Legal'

function HuntLevel () {

    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img className='footer-img'src='http://www.placekitten.com/75/75' alt='crucible logo' />
            </div>
            <div className='footer-hunt-level'>
                <h1>HUNT LEVEL ADAPT</h1>
            </div>
            <div className='footer-amazon-games'>
                <p>Games</p>
                <p>AWS Games</p>
            </div>
            <div className='footer-list-legal'>
                <ul className='footer-list'>
                    <li>Legal</li>
                    <li>Privacy Notice</li>
                    <li>Cookie Preferences</li>
                    <li>Interest-Based Ads</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className='footer-copyright'>
                <p>© 2020, Amazon.com, Inc. or its affiliates. All rights reserved.</p>
            </div>
        </div>
    )
}

export default HuntLevel;