import React from "react";
import { useLocation } from "react-router-dom";
import "./SinglePostPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Comment from '../../components/comment/Comment'

const SinglePostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(location.state.data);

  const [user, setUser] = useState("");
  const logedUser = parseInt(localStorage.getItem("user"));
  useEffect(() => {
    fetch(
      `https://6745ca5b512ddbd807f9a8b4.mockapi.io/apiFakeX/v1/user/${data.userID}`
    )
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const updatePost = async (postId, updatedData) => {
    try {
      const response = await fetch(
        `https://6745ca5b512ddbd807f9a8b4.mockapi.io/apiFakeX/v1/posts/${postId}`,
        {
          method: "PUT", // HTTP method for updating data
          headers: {
            "Content-Type": "application/json", // We are sending JSON data
          },
          body: JSON.stringify(updatedData), // Convert the updated data to a JSON string
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update post: ${response.statusText}`);
      }

      const updatedPost = await response.json(); // Parse the updated post data
      setData(updatedPost);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };
  function convertUnixToDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
  }

  let heard = "🖤";
  //❤️
  function convertUnixToDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
  }

  data?.likes.find((el) => {
    if (el === logedUser) {
      heard = "❤️";
    }
  });

  return (
    <>  
    <p className="back" onClick={()=>{
        navigate(-1)
    }}>{`🡸`}</p>
      <div className="single-post-div">
        <div className="single-post-name">
        
          <img src={user.avatar} alt="" className="single-post-img" />
          <div className="single-post-t">
            <p className="single-post-title">{data.title}</p>
            <p className="single-post-user">@{user.username}</p>
          </div>
        </div>

        <div className="single-post-text">{data.text}</div>

        <div className="single-post-info">
          <p
            className="single-post-likes"
            onClick={() => {
              if (logedUser) {
                if (heard === "❤️") {
                  let arr = [...data.likes];

                  for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === logedUser) {
                      arr.splice(i, 1);
                    }
                  }
                  updatePost(data.id, { likes: arr });
                } else {
                  let arr = [...data.likes];
                  arr.push(logedUser);
                  updatePost(data.id, { likes: arr });
                }
              } else {
                alert("Login or register to be able to like posts!");
              }
            }}
          >
            {heard} {data.likes.length}
          </p>
          <p className="single-post-coms">🗨️ {data.comments.length}</p>
          <p className="single-post-time">
            {convertUnixToDate(data.createdAt)}
          </p>
        </div>
            <hr></hr>
            <dir className="single-post-comments">
                <div className="comment-text-p"><p>Comments:</p><p className="add-new-comment" onClick={()=>{
                 if(logedUser){ navigate('/newComment',{ state:{ data}  })}else{alert("U need to login to be able to comment!")}
                }}>Add new comment</p></div>
               {data.comments.length>0?data.comments.map((el,i)=>{
                    return <Comment data ={el} key={i}/>
                }):null}

            </dir>

      </div>
    </>
  );
};

export default SinglePostPage;
