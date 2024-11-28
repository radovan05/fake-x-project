import React from 'react'
import "./MainPage.css"

import Footer from '../../components/Footer/Footer'
import { useEffect,useState } from 'react'
import Post from '../../components/post/Post'

const MainPage = () => {
  
  const [data,setData] = useState([]);
  
  useEffect(() => {
    fetch("https://6745ca5b512ddbd807f9a8b4.mockapi.io/apiFakeX/v1/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  data.sort((a, b) => b.likes.length - a.likes.length);
  return (
    <>
      
      <div className='wrapper-main-page'>
      {data.map((el,i)=>{
       
        return  <Post data={el} key={i}/>

      })}

      </div>
      <Footer/>
    </>
  )
}

export default MainPage
