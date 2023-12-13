import React from 'react';
const detailData=[{ id: '1', content: 'message000000001' },
    { id: '2', content: 'message000000002' },
    { id: '3', content: 'message000000003' }];
const Detail = (props) => {
    console.log(props)
    const {id,data}=props.match.params;
    
    const result=detailData.find((obj)=>{
        return obj.id===id;
    })

    return (
        <div>
            <li>ID:{id}</li>
            <li>Title:{data}</li>
            <li>Content:{result.content}</li>
        
        </div>
    );
};

export default Detail;