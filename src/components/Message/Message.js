import React from 'react';
import './Message.css'

const Message = ({own}) => {
    return (
        <div className={own ? 'message own' : 'message'}>
            <div className='messageTop'>
                <img 
                className='messageImg'
                src="https://i.ibb.co/TvLVLVJ/IMG-0795.jpg" alt="" />
                <p className='messageText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='messageBottom'>1 hour ago</div>
        </div>
    );
};

export default Message;