// export const Home = () => {
//     return (
//         <div> 
//         </div>
//     )
// }
// const divStyle = {
//     width: '100%',
//     height: '689px',
//     backgroundImage: `url(${background})`,
//     backgroundSize: 'cover'
// };

import React from 'react'
import Front from '../components/Front';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import background from "../lending4.jpg";
import BorrowerLogin from './BorrowerLogin';
import LenderLogin from './LenderLogin';
import LenderSignup from './LenderSignup';
import BorrowerSignup from './BorrowerSignup';

const Home = () => {

    return (
        <>
            <div >
                <Router>
                    <Front />
                    <Switch>
                        <Route exact path="/bLogin">
                            <BorrowerLogin />
                        </Route>
                        <Route exact path="/lLogin">
                            <LenderLogin />
                        </Route>
                        <Route exact path="/lSignup">
                            <LenderSignup />
                        </Route>
                        <Route exact path="/bSignup">
                            <BorrowerSignup />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </>
    )
}

export default Home