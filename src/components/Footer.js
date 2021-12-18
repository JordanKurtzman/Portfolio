import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer__piece'><a href="https://github.com/JordanKurtzman" className="footer__link"><i class="fab fa-github"></i></a></div>
            <div className='footer__piece'> <a className='footer__link' href="mailto: jordankurtzman@gmail.com"><i class="fas fa-envelope"></i></a></div>
            <div className='footer__piece footer__desktop'>||</div>
            <div className='footer__piece footer__desktop'> Developed and designed by Jordan Kurtzman</div>
        </div>
    )
}

export default Footer