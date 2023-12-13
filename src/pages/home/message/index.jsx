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
                       {/*  1.向路由组件传递params参数
                        <NavLink to={`/home/message/detail/${msgObj.id}/${msgObj.data}`}>
                            {msgObj.data}
                        </NavLink>&nbsp;&nbsp; */}
                        {/* 2.向路由组件传递search参数 */}
                        {/* <NavLink to={`/home/message/detail/?id=${msgObj.id}&data=${msgObj.data}`}>
                            {msgObj.data}
                        </NavLink>&nbsp;&nbsp; */}
                        {/* 3.向路由组件传递state参数 */}
                        <NavLink to={{pathname:'/home/message/detail/',state:{id:msgObj.id,data:msgObj.data,}}}>
                            {msgObj.data}
                        </NavLink>&nbsp;&nbsp;
                    </li>
                ))}
                <hr/>
                {/* 1.申明接收params参数
                <Route path={`/home/message/detail/:id/:data`} component={Detail} /> */}
                {/* 2.向路由组件传递search参数，无需申明接收 */}
                {/* <Route path={`/home/message/detail`} component={Detail} />       */}  
                {/* 3.向路由组件传递state参数，无需申明接收.  */}
                <Route replace={true} path={`/home/message/detail`} component={Detail} /> 
                {/* 默认是push，将replace设置为true，则变成无痕迹模式*/ }

            </ul>
        
        </div>
    );
};

export default Message;
