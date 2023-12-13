import React from 'react';
import qs from 'querystring-es3'

const detailData=[{ id: '1', content: 'message000000001' },
    { id: '2', content: 'message000000002' },
    { id: '3', content: 'message000000003' }];
const Detail = (props) => {
    console.log(props)
    //1.接收params参数
    //const {id,data}=props.match.params;

    //2.接收search参数
    /* const {search}=props.history.location
    console.log(search)
    const{id,data}=qs.parse(search.slice(1)) */

    //3.接收state参数
    const {state}=props.location
    console.log(state)
    const{id,data}=state || {}


    console.log(id,data)
    const result=detailData.find((obj)=>{
        return obj.id===id;    
    }) || {}

    return (
        <div>
            <li>ID:{id}</li>
            <li>Title:{data}</li>
            <li>Content:{result.content}</li>
        
        </div>
    );
};

export default Detail;