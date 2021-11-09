import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/:id" activeClassName="is-active">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header
