import React from 'react'
import { NavLink } from 'react-router-dom'






export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
        }
    }
    handleToggle = () => {
        this.setState(() => {
           return {
               isActive: !this.state.isActive}
        })
    }

    render(){
        return(
            <div>
                <nav className={this.state.isActive? 'active' : null}>
                    <ul className="nav__menu">
                        <li>
                            <NavLink className="navlink" exact to="/" activeClassName="is-active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to="/portfolio/:id" activeClassName="is-active">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to="/contact" activeClassName="is-active">Contact</NavLink>
                        </li>
                        <button className="navtoggle" onClick={this.handleToggle}>
                        </button>

                    </ul>

                </nav>
            </div>
        )
    } 
        
    

    
}


