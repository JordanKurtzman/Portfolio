import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { BabelLogo, Bootstrap, JavaScriptLogo, SassLogo, CSSLogo, WebpackLogo, ReactLogo, PhpLogo, HtmlLogo, Headshot } from './Images'

const HomePage = () => {
    return (
        <div className="page-wrapper">
        <div className='homepage__container'>
                <div className="homepage__text">
                    <h1>Hi! I'm Jordan. 👋</h1>
                    <p>I'm a front-end developer based in Los Angeles. I have a background in the arts, and I love that front-end development lets me use both sides of my brain. If you'd like to check out my github profile, you can do so <a className="homepage__link" href="https://github.com/JordanKurtzman">here</a>
                        . Here are some programming languages and technologies that I have experience working with<Link smooth className="hashlink" to="#sectiontwo"><i class="fas fa-caret-down"></i></Link></p>
                </div>
                <div className='homepage__picture'>
                    <img className="homepage__picture--img" src={Headshot} />
                </div>
        </div>
            
            
            <div className="logo__section" id="sectiontwo">
                <div className="logo__grid">
                    <div className="logo__container"><img className="logo" src={Bootstrap} alt="Bootstrap" /></div>
                    <div className="logo__container"><img className="logo" src={BabelLogo} alt="BabelLogo" /></div>
                    <div className="logo__container"><img className="logo" src={JavaScriptLogo} alt="JavascriptLogo" /></div>
                    <div className="logo__container"><img className="logo" src={ReactLogo} alt="React" /></div>
                    <div className="logo__container"><img className="logo" src={SassLogo} alt="Sass" /></div>
                    <div className="logo__container"><img className="logo" src={CSSLogo} alt="CSS" /></div>
                    <div className="logo__container"><img className="logo" src={WebpackLogo} alt="CSS" /></div>
                    <div className="logo__container"><img className="logo" src={HtmlLogo} alt="Html5Logo" /></div>
                    <div className="logo__container"><img className="logo" src={PhpLogo} alt="PhpLogo" /></div>
                </div>
           </div>
                
            
            
        </div>
    )
}
 
export default HomePage