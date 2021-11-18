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
    componentDidMount(){
        window.addEventListener('resize', () =>{
            this.setState(() => {
                if(window.innerWidth > 768){
                    return {
                        isActive: false
                    }
                }
            })
        })
    }

    render(){
        return(
            <div>
                <nav>
                    <ul className={this.state.isActive ? 'active' : null}>
                        <li>
                            <NavLink className="navlink" exact to="/" activeClassName="is-active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to="/portfolio/:id" activeClassName="is-active">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to="/contact" activeClassName="is-active">Contact</NavLink>
                        </li>
                        

                    </ul>
                    <button className="navtoggle" onClick={this.handleToggle}>
                        <i className=" navtoggle__icon fas fa-bars"></i>
                    </button>

                </nav>
            </div>
        )
    } 
        
    

    
}


