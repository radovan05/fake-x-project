import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import "./NewComment.css"




const NewComment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // const set = location.state.setData;
    const [data, setData] = useState(location.state.data);

    const addCommentToPost = async (postId, postData, newCommentData) => {
        try {
          
          postData.comments = postData.comments || [];
          postData.comments.push(newCommentData); 
      
         
          const response = await fetch(`https://6745ca5b512ddbd807f9a8b4.mockapi.io/apiFakeX/v1/posts/${postId}`, {
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(postData), 
          });
      
          if (!response.ok) {
            throw new Error(`Failed to update post: ${response.statusText}`);
          }
      
          const updatedPost = await response.json(); 
          
        //   set(postData);
        } catch (error) {
          console.error('Error adding comment:', error);
        }
      };
      let commentText='';
  return (
    <>
     <p className="back" onClick={()=>{
        navigate(-1)
    }}>{`🡸`}</p>
      <div className='new-comment-form'>
        <p className='comment-text-pp'>Comment</p>
            <textarea  cols="30" rows="10" className='new-comment-text' placeholder='Comment text' onChange={(e)=>{
                commentText = e.target.value;
            }}></textarea>
    <button className='submit-comment' onClick={()=>{
             if(commentText!==''){addCommentToPost(data.id , data , {userID: JSON.parse(localStorage.getItem('user')),text: commentText }) 
             navigate("/singlePostPage",{state: {data}} );}
             else{ alert("MOrate da napicete komentar da bi ga objavili. ")}
    }}>Submit Comment</button>
    
      
      </div>
    </>
  )
}

export default NewComment
