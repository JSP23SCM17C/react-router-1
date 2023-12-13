import React, { useState } from 'react';
import Detail from './detail';
import { NavLink,  Route, } from 'react-router-dom';

const Message = () => {
    const [messageArry] = useState([
        { id: '1', data: 'message001' },
        { id: '2', data: 'message002' },
        { id: '3', data: 'message003' }
    ]);

    return ( 
        <div>
            <ul>
                {messageArry.map((msgObj) => (
                    <li key={msgObj.id}>
                        <NavLink to={`/home/message/detail/${msgObj.id}/${msgObj.data}`}>
                            {msgObj.data}
                        </NavLink>&nbsp;&nbsp;
                    </li>
                ))}
                <hr/>
                <Route path={`/home/message/detail/:id/:data`} component={Detail} />
            </ul>
        
        </div>
    );
};

export default Message;
