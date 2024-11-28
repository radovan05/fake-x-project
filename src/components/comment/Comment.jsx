import React from 'react'
import './Comment.css'
import { useEffect } from 'react';
import { useState } from 'react';
const Comment = ({data}) => {
    const [user, setUser] = useState("");
    useEffect(() => {
        fetch(
          `https://6745ca5b512ddbd807f9a8b4.mockapi.io/apiFakeX/v1/user/${data.userID}`
        )
          .then((res) => res.json())
          .then((data) => setUser(data));
      }, []);
  return (
    <>
        <div className="comment">
      
        <div className="comment-t">
          
            <p className="comment-user">@{user.username}</p>
          </div>
          <div className='comment-text'>{data.text}</div>
        </div>
    </>
  )
}

export default Comment
