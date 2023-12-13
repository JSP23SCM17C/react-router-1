import React from 'react';
import { NavLink,Switch,Route ,Redirect} from 'react-router-dom';
import News from './news'

import Message from './message'


const index = () => {
    return (
        <div>
        <h3>我是Home的内容</h3>
        <ul className="nav nav-tabs">
                  <li>
                    <NavLink className="list-group-item " to="/home/news">News</NavLink>
                  </li>
                  <li>
                    <NavLink className="list-group-item " to="/home/message">Message</NavLink>
                  </li>
        </ul>
        <ul>
            <Switch>
                <Route path="/home/news" component={News}/>
                <Route path="/home/message" component={Message}/>
                <Redirect to="/home/news"/>
							
            </Switch>
        </ul>
                
                
                
          

                </div>
    );
};

export default index;