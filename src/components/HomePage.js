import React from 'react'
import { BabelLogo, Bootstrap, JavaScriptLogo, SassLogo, CSSLogo, WebpackLogo, ReactLogo, PhpLogo, HtmlLogo } from './Images'

const HomePage = () => {
    return (
        <div className="page-wrapper">
            <div className="homepage__text">
                <h1>Hi! I'm a front-end web developer.</h1>
                <p>I'm based in Los Angeles. I have a background in the arts, and I love that front-end development lets me use both sides of my brain. If you'd like to check out my github profile, you can do so <a className="homepage__link" href="https://github.com/JordanKurtzman">here</a>
                    . Here are some programming languages and technologies that I have experience working with:</p>

            </div>
            
           
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
    )
}
 
export default HomePage