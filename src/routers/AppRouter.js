import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Portfolio from '../components/Portfolio'
import Header from '../components/Header'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'
import Footer from '../components/Footer'



const AppRouter = () => {
    return (

        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/portfolio/:id" component={Portfolio}>
                        <Portfolio />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>

    )
}

export default AppRouter