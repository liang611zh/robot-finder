import React from 'react';

const Selectzone = (props)=>{
    return (
        <div style={{overflowY:'scroll',border:'2px solid black',height:'600px'}}>
           {props.children} 
        </div>
    );
};

export default Selectzone;
