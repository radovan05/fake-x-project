import React from "react";
import { useEffect, useState } from "react";
import "./Post.css";
import { useNavigate, Link } from "react-router-dom";

const Post = ({ data }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [postData, setPostData] = useState(data);
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
      setPostData(updatedPost);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };
  const logedUser = parseInt(localStorage.getItem("user"));
  useEffect(() => {
    fetch(
      `https://6745ca5b512ddbd807f9a8b4.mockapi.io/apiFakeX/v1/user/${postData.userID}`
    )
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  let heard = "🖤";
  //❤️
  function convertUnixToDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
  }

  postData.likes.find((el) => {
    if (el === logedUser) {
      heard = "❤️";
    }
  });

  const deletePost = async (postId) => {
    fetch(`https://6745ca5b512ddbd807f9a8b4.mockapi.io/apiFakeX/v1/user/${logedUser}/posts/${postId}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => res).catch(er => console.log(er))
  };



  return (
    <>
      <div className="post-div">
        <div className="post-name">
          <img src={user.avatar} alt="" className="post-img" />
          <div className="post-t">
            <p className="post-title">{postData.title}</p>
            <p className="post-user">@{user.username}</p>
          </div>
          {(Number(logedUser)===Number(user.id))? <div className="delete-post"
          onClick={()=>{
            deletePost(data.id);
          }}>🗑️  </div>:null}

        </div>

        <div
          className="post-text"
          onClick={() => {
            data ={...postData}; 
            navigate("/singlePostPage", { state: { data } });
          }}
        >
          {postData.text}
        </div>

        <div className="post-info">
          <p
            className="post-likes"
            onClick={() => {
              if (logedUser) {
                if (heard === "❤️") {
                  let arr = [...postData.likes];

                  for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === logedUser) {
                      arr.splice(i, 1);
                    }
                  }
                  updatePost(postData.id, { likes: arr });
                } else {
                  let arr = [...postData.likes];
                  arr.push(logedUser);
                  updatePost(postData.id, { likes: arr });
                }
              } else {
                alert("Login or register to be able to like posts!");
              }
            }}
          >
            {heard} {postData.likes.length}
          </p>
          <p
            className="post-coms"
            onClick={() => {
              data ={...postData}; 
              navigate("/singlePostPage", { state: { data } });
            }}
          >
            🗨️ {postData.comments.length}
          </p>
          <p className="post-time">{convertUnixToDate(postData.createdAt)}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
