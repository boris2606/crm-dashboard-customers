import React, { useState } from 'react';
import './Navigation.scss'
import { navigationData } from '../../data/navigationData';
import logo from '../../img/logo.svg'
import avatar from '../../img/avatar.svg'

const Navigation = () => {
    const [active,setActive] = useState('')

    return (
        <nav className='navigation_block'>
            <div className='navigation_wrapper'>
                <div className="navigation_logo">
                    <img src={logo} alt='Logo'/>
                    <p className='navigation_version'>v.01</p>
                </div>
                <ul className="navigation_list">
                    {navigationData?.map((elem,index) => {
                        return <li key={index}
                                    onClick={() => setActive(index)}
                                    className={active === index ? 'navigation-list_active' : null}
                                >
                                    <img src={elem?.img} alt={elem?.title}/>
                                    <p>{elem?.title}</p>
                                </li>
                    })}
                </ul>
            </div>
            <div className="login-person">
                <img className='login-person_avatar' src={avatar} alt='Avatar'/>
                <div className='login-person_info'>
                    <p>Evano</p>
                    <p>Project Manager</p>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;